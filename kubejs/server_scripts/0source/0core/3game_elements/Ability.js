"use strict";
var Ability = /** @class */ (function () {
    function Ability(name, cooldown, execution) {
        if (execution === void 0) { execution = function () { }; }
        var _this = this;
        this.name = "";
        this.ready = true;
        this.name = name;
        this.execution = execution;
        this.timer = new Timer(cooldown, function () {
            _this.ready = true;
        }, false);
    }
    Ability.prototype.activate = function () {
        if (this.ready) {
            this.execution();
            this.timer.restart();
            this.timer.start();
            this.ready = false;
        }
    };
    Ability.prototype.tick = function () {
        this.timer.tick();
    };
    Ability.prototype.isReady = function () {
        return this.ready;
    };
    Ability.prototype.remainingAbilityCooldown = function () {
        return this.timer.getRemainingTime();
    };
    Ability.prototype.getName = function () {
        return this.name;
    };
    return Ability;
}());
