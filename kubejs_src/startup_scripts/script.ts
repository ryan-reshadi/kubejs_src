// bootstrap file

StartupEvents.registry("item", (event) => {
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

StartupEvents.registry('mob_effect', event => {
    event.create('cursebroken')
        .color(0x292942)
        .effectTick((entity, amplifier) => {
            if (entity.level().isClientSide()) return;

            const persistentData = entity.getPersistentData();
            const key = 'awakened_manual_suppression_until';

            // Read the remaining duration of this potion effect.
            const activeEffect = entity.getEffect('kubejs:suppressed');

            if (activeEffect == null) return;

            const remainingTicks = activeEffect.getDuration();

            // Synchronize the persistent-data expiration with the potion.
            if (remainingTicks > 0) {
                const currentTick = entity.serverLevel().getGameTime();

                persistentData.putLong(
                    key,
                    currentTick + remainingTicks
                );
            }
        });
});
