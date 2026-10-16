const DEFAULT_COMBAT_EXPIRE = 10000;

EntityEvents.afterHurt((event) => {
  if (!event.entity.isPlayer()) return;
  const player = event.getPlayer();
  const attacker = event.source.actual;
  if (attacker.isPlayer()) {
    event.player.persistentData.put("in_combat", Date.now());
    event.player.sendSystemMessage(Component.red(`You have ben ataked`));
  }
});

PlayerEvents.tick((event) => {
  const player = event.player;
  if (!player.persistentData.contains("in_combat")) return;
  if (!event.server.persistentData.contains("combat_tag_expire")) {
    event.server.persistentData.put("combat_tag_expire", DEFAULT_COMBAT_EXPIRE);
  }
  const expire = event.server.persistentData.getDouble("combat_tag_expire");
  const lastHit = player.persistentData.getDouble("in_combat");
  if (Date.now() - lastHit >= expire) {
    player.persistentData.remove("in_combat");
    event.player.sendSystemMessage(Component.green(`You have ben ataked`));
  }
});

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal("incombat")
      .requires((source) => source.hasPermission(2))
      .executes((ctx) => {
        if (!ctx.source.isPlayer()) return 0;
        ctx.source.getPlayer().persistentData.put("in_combat", Date.now());
        return 1;
      })
      .then(
        Commands.argument("target", Arguments.PLAYER.create(event)).executes(
          (ctx) => {
            const target = Arguments.PLAYER.getResult(ctx, "target");
            target.persistentData.put("in_combat", Date.now());
            return 1;
          },
        ),
      ),
  );
});
