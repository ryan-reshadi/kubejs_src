const customItems: Record<string, CustomItem> = {
    isoh: new ISOH()
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

ItemEvents.dropped((event: KubeEvent<typeof ItemEvents.dropped>) => {
    event.server.tell("Item dropped: " + event.item.id);
    // event.player.setDeltaMovement(new Vec3d(0, 2, 0));
    event.server.tell("Player velocity: " + event.player.getDeltaMovement().toString());
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