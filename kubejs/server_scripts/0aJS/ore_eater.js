const BuiltInRegistries = Java.loadClass(
  "net.minecraft.core.registries.BuiltInRegistries",
);

const BAD_EFFECTS = new Set([
  "minecraft:slowness",
  "minecraft:mining_fatigue",
  "minecraft:instant_damage",
  "minecraft:nausea",
  "minecraft:blindness",
  "minecraft:hunger",
  "minecraft:weakness",
  "minecraft:poison",
  "minecraft:wither",
  "minecraft:levitation",
  "minecraft:unluck",
  "minecraft:bad_omen",
  "minecraft:darkness",
  "minecraft:infested",
  "minecraft:oozing",
  "minecraft:weaving",
  "minecraft:raid_omen",
  "born_in_chaos_v1:overly_heavy_weapon",
  "born_in_chaos_v1:soul_stratification",
  "born_in_chaos_v1:living_bomb",
  "born_in_chaos_v1:intoxication",
  "born_in_chaos_v1:undead_summonun",
  "born_in_chaos_v1:curseofthe_boat",
  "born_in_chaos_v1:living_cocoon_player_side",
  "born_in_chaos_v1:lifesteal",
  "born_in_chaos_v1:jawattack",
  "born_in_chaos_v1:barbedattack",
  "netherexp:speed_immunity",
  "netherexp:betrayed",
  "netherexp:haste_immunity",
  "netherexp:luck_immunity",
  "netherexp:fire_resistance_immunity",
  "aquamirae:health_shatter",
  "aquamirae:devouring_curse",
  "cataclysm:abyssal_burn",
  "cataclysm:ghost_sickness",
  "cataclysm:curse_of_desert",
  "simplycataclysm:blazing_brand",
  "fdbosses:chesed_darken",
  "mowziesmobs:moon_curse",
  "simplyswords:corrupted_wound",
  "simplyswords:bleed",
]);

const good = [];
const bad = [];

const ids = BuiltInRegistries.MOB_EFFECT.keySet().toArray();

let idLoopVar = "";
for (let i = 0; i < ids.length; i++) {
  idLoopVar = String(ids[i]);
  if (BAD_EFFECTS.has(idLoopVar) || idLoopVar.includes("xaerominimap")) {
    bad.push(idLoopVar);
  } else {
    good.push(idLoopVar);
  }
}

const ORE_DURATIONS = {
  "minecraft:diamond": 30,
  "minecraft:iron_ingot": 5,
  "minecraft:copper_ingot": 5,
  "minecraft:gold_ingot": 5,
  "minecraft:emerald": 5,
  "minecraft:netherite_ingot": 45,
};

const ORE_WEIGHTS = {
  "minecraft:diamond": 70,
  "minecraft:iron_ingot": 20,
  "minecraft:copper_ingot": 20,
  "minecraft:gold_ingot": 20,
  "minecraft:emerald": 25,
  "minecraft:netherite_ingot": 100,
};

function canEatOres(player) {
  return player.persistentData.contains("ore_eater") && player.isCrouching();
}

ItemEvents.rightClicked((event) => {
  if (ORE_DURATIONS[event.item.id] === undefined) return;
  if (!canEatOres(event.player)) {
    event.cancel();
    return;
  }

  event.player.getMainHandItem().setFood({
    nutrition: 0,
    saturation: 0,
    canAlwaysEat: true,
    eatSeconds: 2.0,
  });
});

ItemEvents.foodEaten((event) => {
  const duration = ORE_DURATIONS[event.item.id];
  const weight = ORE_WEIGHTS[event.item.id];
  if (duration === undefined) return;
  if (!canEatOres(event.player)) {
    event.player.sendSystemMessage(
      Component.red(
        "You cannot eat this! You must be crouching and have the ore eater abillity",
      ),
    );
    return;
  }

  const pool = Math.random() * 100 < weight ? good : bad;

  if (pool.length === 0) return;

  const effect = pool[Math.floor(Math.random() * pool.length)];

  event.player.potionEffects.add(effect, 20 * 60 * duration, 1, false, false);
  event.player.sendSystemMessage(
    Component.gray("Wow! you got the " + effect + " effect!, was it worth it?"),
  );
});

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal("ore_toggle")
      .requires((source) => source.hasPermission(2))
      .executes((ctx) => {
        if (!ctx.source.isPlayer()) return 0;
        const player = ctx.source.getPlayer();
        if (player.persistentData.contains("ore_eater")) {
          player.persistentData.remove("ore_eater");
        } else {
          player.persistentData.put("ore_eater", {});
        }
        player.sendSystemMessage(
          Component.green(
            `Ore Eater Set to ${String(player.persistentData.contains("ore_eater"))}`,
          ),
        );
        return 1;
      })
      .then(
        Commands.argument("player", Arguments.PLAYER.create(event)).executes(
          (ctx) => {
            const player = Arguments.PLAYER.getResult(ctx, "player");
            if (player.persistentData.contains("ore_eater")) {
              player.persistentData.remove("ore_eater");
            } else {
              player.persistentData.put("ore_eater", {});
            }
            if (ctx.source.isPlayer()) {
              ctx.source
                .getPlayer()
                .sendSystemMessage(
                  Component.green(
                    `Ore Eater Set to ${String(player.persistentData.contains("ore_eater"))}`,
                  ),
                );
            }
            return 1;
          },
        ),
      ),
  );
});
