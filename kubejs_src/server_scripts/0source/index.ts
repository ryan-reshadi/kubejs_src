const customItems: Record<string, CustomItem> = {
    isoh: new ISOH(),
    splitsoulkatana: new SplitSoulKatana()
};


function getCustomData(item) {
    const components = String(item.componentString);
    const match = components.match(/custom_data=(\{.*?\})(?=,\s*\w+=|\])/);

    if (!match) return null;

    return match[1];
}

ItemEvents.rightClicked((event: KubeEvent<typeof ItemEvents.rightClicked>) => {
    const item = event.item;
    const customData = getCustomData(item);
    for (const customItemKey in customItems) {
        const customItem = customItems[customItemKey];
        if (customItem.getCustomData() === customData) {
            customItem.rightClick(event);
        }
    }

});

ItemEvents.dropped("minecraft:end_crystal", (event: KubeEvent<typeof ItemEvents.dropped>) => {

});
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal("giveMythic")
            .requires(source => source.hasPermission(2))

            // Running /giveMythic shows the available weapons
            .executes(ctx => {
                const names = Object.keys(customItems);

                ctx.source.sendSuccess(
                    () => new Text(
                        `Available weapons: ${names.join(", ")}`
                    ),
                    false
                );

                return 1;
            })

            .then(
                Commands.argument(
                    "weapon",
                    Arguments.STRING.create(event)
                )
                    .suggests((ctx, builder) => {
                        Object.keys(customItems).forEach(name => {
                            builder.suggest(name.toLowerCase());
                        });

                        return builder.buildFuture();
                    })
                    .executes(ctx => {
                        const player = ctx.source.player;

                        if (!player) {
                            ctx.source.sendFailure(
                                new Text("Only players can use this command.")
                            );
                            return 0;
                        }

                        const weaponName = Arguments.STRING
                            .getResult(ctx, "weapon")
                            .toLowerCase();

                        const weapon = customItems[weaponName];

                        if (!weapon) {
                            ctx.source.sendFailure(
                                new Text(
                                    `Unknown weapon '${weaponName}'. Available: ${Object.keys(customItems).join(", ").toLowerCase()}`
                                )
                            );
                            return 0;
                        }

                        weapon.giveToPlayer(player);

                        ctx.source.sendSuccess(
                            () => new Text(
                                `Gave you ${weapon.getName()}.`
                            ),
                            false
                        );

                        return 1;
                    })
            )
    );
});

PlayerEvents.tick(event => {
    const player = event.player;
    const mainHand = player.getMainHandItem();
    const offhand = player.getOffhandItem();
    const hasChain = offhand.id === 'kubejs:chain_of_a_thousand_miles';
    if (hasChain){
        const armorSlots = [
            player.getHeadArmorItem(),
            player.getChestArmorItem(),
            player.getLegsArmorItem(),
            player.getFeetArmorItem()
        ];
    
        const wearingArmor = armorSlots.some(item => !item.isEmpty());
    
        // Apply Resistance II when not wearing armor
        if (!wearingArmor) {
            player.potionEffects.add(
                'minecraft:resistance',
                1,
                2,
                false,
                false
            );
        }
    }

    // Check main-hand and offhand items



    const hasISOHItem = mainHand.id === customItems['isoh'].getItemID();

    // Check for the ISOH custom data marker
    const hasISOHData = hasISOHItem &&
        mainHand.componentString.includes('ISOH');

    // Set reach based on both conditions
    const reach = hasChain && hasISOHData ? 6.0 : 3.0;

    player.setAttributeBaseValue(
        'minecraft:player.entity_interaction_range',
        reach
    );
});