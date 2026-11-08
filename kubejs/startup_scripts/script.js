"use strict";
// bootstrap file
StartupEvents.registry("item", function (event) {
    event
        .create("chain_of_a_thousand_miles")
        .displayName("Chain of a Thousand Miles")
        .maxStackSize(1)
        .texture("kubejs:item/coatm");
    event
        .create("isoh", "sword")
        .displayName("Inverted Spear of Heaven")
        .maxStackSize(1)
        .texture("kubejs:item/isoh")
        .attackDamageBaseline(5.0)
        .speedBaseline(-1.5);
    event
        .create("soulsplitkatana", "sword")
        .displayName("Soulsplit Katana")
        .maxStackSize(1)
        .texture("kubejs:item/soulsplitkatana")
        .attackDamageBaseline(5.0)
        .speedBaseline(-2);
    event
        .create("excalibur", "sword")
        .displayName("Excalibur")
        .maxStackSize(1)
        .texture("kubejs:item/excalibur")
        .attackDamageBaseline(20)
        .speedBaseline(-3);
});
StartupEvents.registry('mob_effect', function (event) {
    event.create('cursebroken')
        .color(0x292942)
        .effectTick(function (entity, amplifier) {
        if (entity.level().isClientSide())
            return;
        var persistentData = entity.getPersistentData();
        var key = 'awakened_manual_suppression_until';
        // Read the remaining duration of this potion effect.
        var activeEffect = entity.getEffect('kubejs:suppressed');
        if (activeEffect == null)
            return;
        var remainingTicks = activeEffect.getDuration();
        // Synchronize the persistent-data expiration with the potion.
        if (remainingTicks > 0) {
            var currentTick = entity.serverLevel().getGameTime();
            persistentData.putLong(key, currentTick + remainingTicks);
        }
    });
});
