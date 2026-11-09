// The Awakening 1.23.4 — Power Archive
// Typed-source copy for the user's kubejs_src/server_scripts/0source workflow.
// Compile this to the runtime JS output; do not install this and the packaged JS together.

const PowerService: any = Java.loadClass('com.awakenedmod.awakened.core.PowerService');
const PowerRegistry: any = Java.loadClass('com.awakenedmod.awakened.core.power.PowerRegistry');
const CatalystConfig: any = Java.loadClass('com.awakenedmod.awakened.core.CatalystConfig');
const QuestSystem: any = Java.loadClass('com.awakenedmod.awakened.core.quest.QuestSystem');

const ARCHIVE_KEY = 'power_archive_unlocked_v1';
const ONLINE_TICKS_KEY = 'power_archive_online_ticks_v1';
const SWAP_TIMES_KEY = 'power_archive_swap_times_v1';
const SWAP_WINDOW_TICKS = 60 * 60 * 20;
const MAX_SWAPS = 2;

function getData(player: any): any { return player.getPersistentData(); }
function uniqueValues(values: any[]): any[] {
  const result: any[] = [];
  values.forEach((value: any) => { if (!result.includes(value)) result.push(value); });
  return result;
}
function readJsonArray(data: any, key: string): any[] {
  const raw: string = data.getString(key);
  if (!raw || raw.length === 0) return [];
  try { const parsed: any = JSON.parse(raw); return Array.isArray(parsed) ? parsed : []; }
  catch (error) { console.error('[Power Archive] Invalid JSON in ' + key + ': ' + error); return []; }
}
function writeJsonArray(data: any, key: string, values: any[]): void { data.putString(key, JSON.stringify(values)); }
function currentPowerId(player: any): string {
  const powerData: any = PowerService.data(player);
  if (!powerData || !powerData.hasPower()) return '';
  return String(powerData.powerId());
}
function getArchive(player: any): string[] {
  return uniqueValues(readJsonArray(getData(player), ARCHIVE_KEY).filter((id: any) => typeof id === 'string' && id.length > 0));
}
function saveArchive(player: any, archive: string[]): void { writeJsonArray(getData(player), ARCHIVE_KEY, uniqueValues(archive)); }
function recoverKnownPowers(player: any): string[] {
  const archive = getArchive(player);
  const data: any = PowerService.data(player);
  const activeId = currentPowerId(player);
  if (activeId) archive.push(activeId);
  PowerRegistry.all().forEach((power: any) => {
    const id = String(power.id());
    if (data.masteryLevelOf(id) > 0) archive.push(id);
  });
  const unique = uniqueValues(archive);
  saveArchive(player, unique);
  return unique;
}
function getOnlineTicks(player: any): number { return getData(player).getLong(ONLINE_TICKS_KEY); }
function getRecentSwaps(player: any): number[] {
  const now = getOnlineTicks(player);
  return readJsonArray(getData(player), SWAP_TIMES_KEY)
    .filter((value: any) => Number.isFinite(value) && value >= 0 && now - value < SWAP_WINDOW_TICKS)
    .sort((a: number, b: number) => a - b);
}
function saveRecentSwaps(player: any, swaps: number[]): void { writeJsonArray(getData(player), SWAP_TIMES_KEY, swaps); }
function send(player: any, message: string): void { player.tell('[Power Archive] ' + message); }
function listPowers(player: any): void {
  const archive = recoverKnownPowers(player);
  if (archive.length === 0) { send(player, 'Your archive is empty. Obtain a power first.'); return; }
  const active = currentPowerId(player);
  send(player, 'Unlocked powers:');
  archive.forEach((id: string) => {
    const power: any = PowerRegistry.get(id);
    const name = power ? power.displayName().getString() : id + ' (not currently registered)';
    send(player, (id === active ? '» ' : '• ') + name + ' [' + id + ']');
  });
}
function showStatus(player: any): void {
  const swaps = getRecentSwaps(player);
  send(player, 'Available swaps: ' + Math.max(0, MAX_SWAPS - swaps.length) + '/' + MAX_SWAPS + ' in the rolling 60-minute online-time window.');
  if (swaps.length > 0) {
    const ticksUntilNext = Math.max(0, swaps[0] + SWAP_WINDOW_TICKS - getOnlineTicks(player));
    const seconds = Math.ceil(ticksUntilNext / 20);
    send(player, 'Next swap returns in approximately ' + Math.floor(seconds / 60) + 'm ' + (seconds % 60) + 's of online time.');
  }
}
function switchPower(player: any, targetId: string): number {
  const archive = recoverKnownPowers(player);
  const target: any = PowerRegistry.get(targetId);
  if (!target) { send(player, 'Unknown power ID: ' + targetId); return 0; }
  if (!archive.includes(targetId)) { send(player, 'That power is not in your archive. You must obtain it normally first.'); return 0; }
  if (currentPowerId(player) === targetId) { send(player, 'You already have that power. No swap was consumed.'); return 0; }
  if (!CatalystConfig.bankProgress()) { send(player, 'Switching is disabled because The Awakening progress banking is OFF. Enable bankprogress in the mod config before switching.'); return 0; }
  const swaps = getRecentSwaps(player);
  if (swaps.length >= MAX_SWAPS) {
    const ticksUntilNext = Math.max(0, swaps[0] + SWAP_WINDOW_TICKS - getOnlineTicks(player));
    const seconds = Math.ceil(ticksUntilNext / 20);
    send(player, 'You have used both swaps. Your next swap returns in about ' + Math.floor(seconds / 60) + 'm ' + (seconds % 60) + 's of online time.');
    return 0;
  }
  try {
    PowerService.setPower(player, targetId);
    QuestSystem.resetForPowerChange(player);
    PowerService.sync(player);
    QuestSystem.sync(player);
    swaps.push(getOnlineTicks(player));
    saveRecentSwaps(player, swaps);
    send(player, 'Switched to ' + target.displayName().getString() + '. Swaps remaining: ' + (MAX_SWAPS - swaps.length) + '/' + MAX_SWAPS + '.');
    return 1;
  } catch (error) {
    console.error('[Power Archive] Failed to switch ' + player.getName().getString() + ' to ' + targetId, error);
    send(player, 'The switch failed. Check the server log; no swap was charged.');
    return 0;
  }
}

PlayerEvents.tick((event: any) => {
  const player: any = event.player;
  if (player.level.isClientSide()) return;
  const data = getData(player);
  data.putLong(ONLINE_TICKS_KEY, data.getLong(ONLINE_TICKS_KEY) + 1);
  const activeId = currentPowerId(player);
  if (activeId) {
    const archive = getArchive(player);
    if (!archive.includes(activeId)) { archive.push(activeId); saveArchive(player, archive); }
  }
  if (data.getLong(ONLINE_TICKS_KEY) % 200 === 0) recoverKnownPowers(player);
});

ServerEvents.commandRegistry((event: any) => {
  const Commands: any = event.commands;
  const Arguments: any = event.arguments;
  const root = Commands.literal('recallPower')
    .executes((ctx: any) => { const player = ctx.source.player; if (!player) return 0; listPowers(player); return 1; })
    .then(Commands.literal('list').executes((ctx: any) => { const player = ctx.source.player; if (!player) return 0; listPowers(player); return 1; }))
    .then(Commands.literal('status').executes((ctx: any) => { const player = ctx.source.player; if (!player) return 0; showStatus(player); return 1; }))
    .then(Commands.literal('archive').executes((ctx: any) => {
      const player = ctx.source.player; if (!player) return 0;
      const archive = recoverKnownPowers(player);
      send(player, 'Archive synchronized. ' + archive.length + ' power(s) recorded.');
      send(player, 'Legacy recovery can identify your current power and powers with positive saved mastery.');
      return 1;
    }))
    .then(Commands.literal('switch').then(Commands.argument('power', Arguments.STRING.create(event)).executes((ctx: any) => {
      const player = ctx.source.player; if (!player) return 0;
      return switchPower(player, String(Arguments.STRING.getResult(ctx, 'power')));
    })));
  event.register(root);
});
