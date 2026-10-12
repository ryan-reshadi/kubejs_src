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
        .color(0x808080)
        .effectTick((entity, level) => {
            if (entity.age % 20 !== 0) return;

            const iterator = entity.getActiveEffects().iterator();

            while (iterator.hasNext()) {
                const effect = iterator.next();
                const effectId = effect.getEffect().getRegisteredName();

                console.log(`[Cursebroken] found effect: ${effectId}`);

                if (effectId !== 'kubejs:cursebroken') {
                    entity.removeEffect(effect.getEffect());
                    console.log(`[Cursebroken] removed: ${effectId}`);
                }
            }

        });
});
