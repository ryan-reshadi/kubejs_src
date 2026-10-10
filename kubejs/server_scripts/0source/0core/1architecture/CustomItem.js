"use strict";
var CustomItem = /** @class */ (function () {
    function CustomItem(name, itemID, customData, nameColor, itemTexture) {
        if (nameColor === void 0) { nameColor = "§f"; }
        if (itemTexture === void 0) { itemTexture = ""; }
        this.name = name;
        this.itemID = itemID;
        this.customData = customData;
        this.nameColor = nameColor;
    }
    CustomItem.prototype.getName = function () {
        return this.name;
    };
    CustomItem.prototype.getNameColor = function () {
        return this.nameColor;
    };
    CustomItem.prototype.getItemID = function () {
        return this.itemID;
    };
    CustomItem.prototype.getCustomData = function () {
        return this.customData;
    };
    CustomItem.prototype.giveToPlayer = function (player) {
        var item = Item.of(this.itemID, {
            "minecraft:custom_data": this.customData,
            "minecraft:custom_name": {
                text: this.name,
                color: this.nameColor,
                italic: false
            }
        });
        player.give(item);
    };
    CustomItem.prototype.addCooldown = function (event, seconds) {
        event.player.addItemCooldown(event.item, seconds * 20);
    };
    return CustomItem;
}());
