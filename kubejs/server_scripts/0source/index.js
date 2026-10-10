"use strict";
var customItems = {
    isoh: new ISOH(),
    splitsoulkatana: new SplitSoulKatana()
};
function getCustomData(item) {
    var components = String(item.componentString);
    var match = components.match(/custom_data=(\{.*?\})(?=,\s*\w+=|\])/);
    if (!match)
        return null;
    return match[1];
}
ItemEvents.rightClicked(function (event) {
    var item = event.item;
    var customData = getCustomData(item);
    for (var customItemKey in customItems) {
        var customItem = customItems[customItemKey];
        if (customItem.getCustomData() === customData) {
            customItem.rightClick(event);
        }
    }
});
ItemEvents.dropped("minecraft:end_crystal", function (event) {
});
ServerEvents.commandRegistry(function (event) {
    var Commands = event.commands, Arguments = event.arguments;
    event.register(Commands.literal("giveMythic")
        .requires(function (source) { return source.hasPermission(2); })
        // Running /giveMythic shows the available weapons
        .executes(function (ctx) {
        var names = Object.keys(customItems);
        ctx.source.sendSuccess(function () { return new Text("Available weapons: ".concat(names.join(", "))); }, false);
        return 1;
    })
        .then(Commands.argument("weapon", Arguments.STRING.create(event))
        .suggests(function (ctx, builder) {
        Object.keys(customItems).forEach(function (name) {
            builder.suggest(name.toLowerCase());
        });
        return builder.buildFuture();
    })
        .executes(function (ctx) {
        var player = ctx.source.player;
        if (!player) {
            ctx.source.sendFailure(new Text("Only players can use this command."));
            return 0;
        }
        var weaponName = Arguments.STRING
            .getResult(ctx, "weapon")
            .toLowerCase();
        var weapon = customItems[weaponName];
        if (!weapon) {
            ctx.source.sendFailure(new Text("Unknown weapon '".concat(weaponName, "'. Available: ").concat(Object.keys(customItems).join(", ").toLowerCase())));
            return 0;
        }
        weapon.giveToPlayer(player);
        ctx.source.sendSuccess(function () { return new Text("Gave you ".concat(weapon.getName(), ".")); }, false);
        return 1;
    })));
});
PlayerEvents.tick(function (event) {
    var reach = 3.0;
    var player = event.player;
    var mainHand = player.getMainHandItem();
    var offhand = player.getOffhandItem();
    var hasChain = offhand.id === 'kubejs:chain_of_a_thousand_miles';
    if (hasChain) {
        var armorSlots = [
            player.getHeadArmorItem(),
            player.getChestArmorItem(),
            player.getLegsArmorItem(),
            player.getFeetArmorItem()
        ];
        var wearingArmor = armorSlots.some(function (item) { return !item.isEmpty(); });
        // Apply Resistance II when not wearing armor
        if (!wearingArmor) {
            player.potionEffects.add('minecraft:resistance', 1, 2, false, false);
        }
    }
    // Check main-hand and offhand items
    var hasISOHItem = mainHand.id === customItems['isoh'].getItemID();
    // Check for the ISOH custom data marker
    var hasISOHData = hasISOHItem &&
        mainHand.componentString.includes('ISOH');
    // Set reach based on both conditions
    if (hasChain && hasISOHData) {
        reach = 6.0;
    }
    player.setAttributeBaseValue('minecraft:player.entity_interaction_range', reach);
});
