"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var COATM = /** @class */ (function (_super) {
    __extends(COATM, _super);
    function COATM() {
        var _this = _super.call(this, "Chain of a Thousand Miles", "kubejs:chain_of_a_thousand_miles", '{COATM:1b}', "§f") || this;
        _this.setCurseBreakVulnerable(false);
        return _this;
    }
    COATM.prototype.entityLeftClickBefore = function (event) {
        _super.prototype.entityLeftClickBefore.call(this, event);
    };
    COATM.prototype.entityLeftClickAfter = function (event) {
        _super.prototype.entityLeftClickAfter.call(this, event);
    };
    COATM.prototype.entityRightClick = function (event) {
        // Implement entity right click behavior here
    };
    COATM.prototype.onRightClick = function (event) {
        event.player.potionEffects.add('kubejs:nullifier', 20 * 200, 0);
        this.addCooldown(event, 200);
        event.cancel();
    };
    return COATM;
}(CustomItem));
