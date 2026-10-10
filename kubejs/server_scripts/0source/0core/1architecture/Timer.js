"use strict";
var Timer = /** @class */ (function () {
    function Timer(maxTime, execution, repeating) {
        if (repeating === void 0) { repeating = false; }
        this.time = 0;
        this.repeating = false;
        this.time = 0;
        this.maxTime = maxTime;
        this.time = 0;
        this.running = false;
        this.repeating = repeating;
        this.execution = execution;
    }
    Timer.prototype.start = function () {
        this.running = true;
    };
    Timer.prototype.pause = function () {
        this.running = false;
    };
    Timer.prototype.restart = function () {
        this.time = 0;
        this.running = this.repeating;
    };
    Timer.prototype.isActive = function () {
        return this.running;
    };
    Timer.prototype.tick = function () {
        if (this.running && this.time < this.maxTime) {
            this.time++;
        }
        if (this.time >= this.maxTime) {
            this.execution();
            this.restart();
        }
    };
    Timer.prototype.setRepeating = function (value) {
        this.repeating = value;
    };
    Timer.prototype.isRepeating = function () {
        return this.repeating;
    };
    Timer.prototype.getRemainingTime = function () {
        return this.time;
    };
    return Timer;
}());
