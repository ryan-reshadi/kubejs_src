"use strict";
var CustomItem = /** @class */ (function () {
    function CustomItem(name, itemID, customData, nameColor, itemTexture) {
        if (nameColor === void 0) { nameColor = "§f"; }
        if (itemTexture === void 0) { itemTexture = ""; }
        this.cursebreakerVulnerable = true;
        this.name = name;
        this.itemID = itemID;
        this.customData = customData;
        this.nameColor = nameColor;
        this.capabilities = {
            cursebreaker: false,
            poison: false,
            lifesteal: false
        };
    }
    CustomItem.prototype.entityLeftClickBefore = function (event) {
        if (this.hasCapability("cursebreaker")) {
            event.entity.potionEffects.add('kubejs:cursebroken', 20 * 60, 0);
        }
    };
    ;
    CustomItem.prototype.entityLeftClickAfter = function (event) {
    };
    ;
    CustomItem.prototype.rightClick = function (event) {
        if (event.player.hasEffect('kubejs:cursebroken') && this.cursebreakerVulnerable) {
            return;
        }
        this.onRightClick(event);
    };
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
    CustomItem.prototype.setCapability = function (capability, value) {
        this.capabilities[capability] = value;
    };
    CustomItem.prototype.hasCapability = function (capability) {
        return this.capabilities[capability];
    };
    CustomItem.prototype.removeCapability = function (capability) {
        this.capabilities[capability] = false;
    };
    CustomItem.prototype.toggleCapability = function (capability) {
        this.capabilities[capability] = !this.capabilities[capability];
    };
    return CustomItem;
}());
