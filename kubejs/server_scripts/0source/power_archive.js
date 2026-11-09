"use strict";
// The Awakening 1.23.4 — Power Archive
// Typed-source copy for the user's kubejs_src/server_scripts/0source workflow.
// Compile this to the runtime JS output; do not install this and the packaged JS together.
var PowerService = Java.loadClass('com.awakenedmod.awakened.core.PowerService');
var PowerRegistry = Java.loadClass('com.awakenedmod.awakened.core.power.PowerRegistry');
var CatalystConfig = Java.loadClass('com.awakenedmod.awakened.core.CatalystConfig');
var QuestSystem = Java.loadClass('com.awakenedmod.awakened.core.quest.QuestSystem');
var ARCHIVE_KEY = 'power_archive_unlocked_v1';
var ONLINE_TICKS_KEY = 'power_archive_online_ticks_v1';
var SWAP_TIMES_KEY = 'power_archive_swap_times_v1';
var SWAP_WINDOW_TICKS = 60 * 60 * 20;
var MAX_SWAPS = 2;
function getData(player) { return player.getPersistentData(); }
function uniqueValues(values) {
    var result = [];
    values.forEach(function (value) { if (!result.includes(value))
        result.push(value); });
    return result;
}
function readJsonArray(data, key) {
    var raw = data.getString(key);
    if (!raw || raw.length === 0)
        return [];
    try {
        var parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    }
    catch (error) {
        console.error('[Power Archive] Invalid JSON in ' + key + ': ' + error);
        return [];
    }
}
function writeJsonArray(data, key, values) { data.putString(key, JSON.stringify(values)); }
function currentPowerId(player) {
    var powerData = PowerService.data(player);
    if (!powerData || !powerData.hasPower())
        return '';
    return String(powerData.powerId());
}
function getArchive(player) {
    return uniqueValues(readJsonArray(getData(player), ARCHIVE_KEY).filter(function (id) { return typeof id === 'string' && id.length > 0; }));
}
function saveArchive(player, archive) { writeJsonArray(getData(player), ARCHIVE_KEY, uniqueValues(archive)); }
function recoverKnownPowers(player) {
    var archive = getArchive(player);
    var data = PowerService.data(player);
    var activeId = currentPowerId(player);
    if (activeId)
        archive.push(activeId);
    PowerRegistry.all().forEach(function (power) {
        var id = String(power.id());
        if (data.masteryLevelOf(id) > 0)
            archive.push(id);
    });
    var unique = uniqueValues(archive);
    saveArchive(player, unique);
    return unique;
}
function getOnlineTicks(player) { return getData(player).getLong(ONLINE_TICKS_KEY); }
function getRecentSwaps(player) {
    var now = getOnlineTicks(player);
    return readJsonArray(getData(player), SWAP_TIMES_KEY)
        .filter(function (value) { return Number.isFinite(value) && value >= 0 && now - value < SWAP_WINDOW_TICKS; })
        .sort(function (a, b) { return a - b; });
}
function saveRecentSwaps(player, swaps) { writeJsonArray(getData(player), SWAP_TIMES_KEY, swaps); }
function send(player, message) { player.tell('[Power Archive] ' + message); }
function listPowers(player) {
    var archive = recoverKnownPowers(player);
    if (archive.length === 0) {
        send(player, 'Your archive is empty. Obtain a power first.');
        return;
    }
    var active = currentPowerId(player);
    send(player, 'Unlocked powers:');
    archive.forEach(function (id) {
        var power = PowerRegistry.get(id);
        var name = power ? power.displayName().getString() : id + ' (not currently registered)';
        send(player, (id === active ? '» ' : '• ') + name + ' [' + id + ']');
    });
}
function showStatus(player) {
    var swaps = getRecentSwaps(player);
    send(player, 'Available swaps: ' + Math.max(0, MAX_SWAPS - swaps.length) + '/' + MAX_SWAPS + ' in the rolling 60-minute online-time window.');
    if (swaps.length > 0) {
        var ticksUntilNext = Math.max(0, swaps[0] + SWAP_WINDOW_TICKS - getOnlineTicks(player));
        var seconds = Math.ceil(ticksUntilNext / 20);
        send(player, 'Next swap returns in approximately ' + Math.floor(seconds / 60) + 'm ' + (seconds % 60) + 's of online time.');
    }
}
function switchPower(player, targetId) {
    var archive = recoverKnownPowers(player);
    var target = PowerRegistry.get(targetId);
    if (!target) {
        send(player, 'Unknown power ID: ' + targetId);
        return 0;
    }
    if (!archive.includes(targetId)) {
        send(player, 'That power is not in your archive. You must obtain it normally first.');
        return 0;
    }
    if (currentPowerId(player) === targetId) {
        send(player, 'You already have that power. No swap was consumed.');
        return 0;
    }
    if (!CatalystConfig.bankProgress()) {
        send(player, 'Switching is disabled because The Awakening progress banking is OFF. Enable bankprogress in the mod config before switching.');
        return 0;
    }
    var swaps = getRecentSwaps(player);
    if (swaps.length >= MAX_SWAPS) {
        var ticksUntilNext = Math.max(0, swaps[0] + SWAP_WINDOW_TICKS - getOnlineTicks(player));
        var seconds = Math.ceil(ticksUntilNext / 20);
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
    }
    catch (error) {
        console.error('[Power Archive] Failed to switch ' + player.getName().getString() + ' to ' + targetId, error);
        send(player, 'The switch failed. Check the server log; no swap was charged.');
        return 0;
    }
}
PlayerEvents.tick(function (event) {
    var player = event.player;
    if (player.level.isClientSide())
        return;
    var data = getData(player);
    data.putLong(ONLINE_TICKS_KEY, data.getLong(ONLINE_TICKS_KEY) + 1);
    var activeId = currentPowerId(player);
    if (activeId) {
        var archive = getArchive(player);
        if (!archive.includes(activeId)) {
            archive.push(activeId);
            saveArchive(player, archive);
        }
    }
    if (data.getLong(ONLINE_TICKS_KEY) % 200 === 0)
        recoverKnownPowers(player);
});
ServerEvents.commandRegistry(function (event) {
    var Commands = event.commands;
    var Arguments = event.arguments;
    var root = Commands.literal('recallPower')
        .executes(function (ctx) { var player = ctx.source.player; if (!player)
        return 0; listPowers(player); return 1; })
        .then(Commands.literal('list').executes(function (ctx) { var player = ctx.source.player; if (!player)
        return 0; listPowers(player); return 1; }))
        .then(Commands.literal('status').executes(function (ctx) { var player = ctx.source.player; if (!player)
        return 0; showStatus(player); return 1; }))
        .then(Commands.literal('archive').executes(function (ctx) {
        var player = ctx.source.player;
        if (!player)
            return 0;
        var archive = recoverKnownPowers(player);
        send(player, 'Archive synchronized. ' + archive.length + ' power(s) recorded.');
        send(player, 'Legacy recovery can identify your current power and powers with positive saved mastery.');
        return 1;
    }))
        .then(Commands.literal('switch').then(Commands.argument('power', Arguments.STRING.create(event)).executes(function (ctx) {
        var player = ctx.source.player;
        if (!player)
            return 0;
        return switchPower(player, String(Arguments.STRING.getResult(ctx, 'power')));
    })));
    event.register(root);
});
