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
var SplitSoulKatana = /** @class */ (function (_super) {
    __extends(SplitSoulKatana, _super);
    function SplitSoulKatana() {
        return _super.call(this, "Split Soul Katana", "kubejs:soulsplitkatana", '{SplitSoulKatana:1b}', "§f") || this;
    }
    SplitSoulKatana.prototype.entityLeftClick = function (event) {
        // Implement left click behavior here
    };
    SplitSoulKatana.prototype.entityRightClick = function (event) {
        // Implement entity right click behavior here
    };
    SplitSoulKatana.prototype.rightClick = function (event) {
        var direction = event.player.getLookAngle();
        var speed = 3; // Define a speed value
        var vx = Number(direction.x) * speed;
        var vy = 0.2 * Number(direction.y) * speed;
        var vz = Number(direction.z) * (speed);
        var velocity = new Vec3d(vx, vy, vz);
        event.player.setDeltaMovement(velocity);
        event.player.hurtMarked = true;
        this.addCooldown(event, 1);
        event.cancel();
    };
    return SplitSoulKatana;
}(CustomItem));
