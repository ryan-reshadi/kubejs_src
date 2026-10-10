"use strict";
var CapturePoint = /** @class */ (function () {
    function CapturePoint(centerPoint, radius, capType, totalCapacity) {
        // Team/player that fully owns the point
        this.owner = null;
        // Team/player that the current progress belongs to
        this.progressOwner = null;
        // Current capture progress
        this.progress = 0;
        this.decreaseWhenAlone = false;
        this.center = centerPoint;
        this.radius = radius;
        this.captureType = capType;
        this.totalStorage = totalCapacity;
    }
    CapturePoint.prototype.tick = function (server) {
        this.draw(server);
        var contestingGroups = this.getContestingGroupAmounts(server.players);
        // Nobody is on the point
        if (contestingGroups.size === 0) {
            this.handleEmptyPoint();
            return;
        }
        // Multiple groups are on the point -> contested
        if (contestingGroups.size > 1) {
            return;
        }
        var _a = contestingGroups.entries().next().value, group = _a[0], playerCount = _a[1];
        var captureSpeed = Math.max(1, playerCount);
        // Completely neutral point
        if (this.owner === null && this.progressOwner === null) {
            this.progressOwner = group;
            this.changeProgress(captureSpeed);
            this.checkCaptureComplete(server);
            return;
        }
        // Reinforcing existing progress
        if (group === this.progressOwner) {
            this.changeProgress(captureSpeed);
            this.checkCaptureComplete(server);
            return;
        }
        // Attacking another group's progress
        this.changeProgress(-captureSpeed);
        if (this.progress === 0) {
            // Point is neutralized
            this.owner = null;
            this.progressOwner = group;
            // Immediately begin capturing for attacker
            this.changeProgress(captureSpeed);
            this.checkCaptureComplete(server);
        }
    };
    CapturePoint.prototype.handleEmptyPoint = function () {
        if (!this.decreaseWhenAlone) {
            return;
        }
        this.changeProgress(-1);
        if (this.progress === 0) {
            this.owner = null;
            this.progressOwner = null;
        }
    };
    CapturePoint.prototype.checkCaptureComplete = function (server) {
        if (this.progress < this.totalStorage) {
            return;
        }
        this.progress = this.totalStorage;
        this.owner = this.progressOwner;
        this.onCapture(server);
    };
    CapturePoint.prototype.changeProgress = function (amount) {
        this.progress = Math.max(0, Math.min(this.totalStorage, this.progress + amount));
    };
    CapturePoint.prototype.draw = function (server) {
        var points = this.getCirclePerimeterPoints();
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var point = points_1[_i];
            this.displayParticle(server, point, "minecraft:flame");
        }
    };
    CapturePoint.prototype.displayParticle = function (server, point, particleType) {
        server.runCommandSilent("particle ".concat(particleType, " ").concat(point.x, " ").concat(point.y, " ").concat(point.z, " 0 0 0 0 1 force"));
    };
    CapturePoint.prototype.getPointsInsideCircle = function () {
        var points = [];
        for (var x = this.center.x - this.radius; x <= this.center.x + this.radius; x++) {
            for (var z = this.center.z - this.radius; z <= this.center.z + this.radius; z++) {
                var dx = x - this.center.x;
                var dz = z - this.center.z;
                if (dx * dx + dz * dz <= this.radius * this.radius) {
                    points.push(new Point(x, this.center.y, z));
                }
            }
        }
        return points;
    };
    CapturePoint.prototype.getCirclePerimeterPoints = function () {
        var _this = this;
        var points = [];
        var seen = new Set();
        var addPoint = function (x, z) {
            var worldX = _this.center.x + x;
            var worldZ = _this.center.z + z;
            var key = "".concat(worldX, ",").concat(worldZ);
            if (!seen.has(key)) {
                seen.add(key);
                points.push(new Point(worldX, _this.center.y, worldZ));
            }
        };
        var addSymmetricPoints = function (x, z) {
            addPoint(x, z);
            addPoint(-x, z);
            addPoint(x, -z);
            addPoint(-x, -z);
            addPoint(z, x);
            addPoint(-z, x);
            addPoint(z, -x);
            addPoint(-z, -x);
        };
        var x = this.radius;
        var z = 0;
        var decision = 1 - this.radius;
        while (x >= z) {
            addSymmetricPoints(x, z);
            z++;
            if (decision < 0) {
                decision += 2 * z + 1;
            }
            else {
                x--;
                decision += 2 * (z - x) + 1;
            }
        }
        return points;
    };
    CapturePoint.prototype.getContestingPlayers = function (players) {
        var result = [];
        for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
            var player = players_1[_i];
            if (this.checkPlayerInRange(player)) {
                result.push(player);
            }
        }
        return result;
    };
    CapturePoint.prototype.getOwner = function () {
        return this.owner;
    };
    CapturePoint.prototype.getProgressOwner = function () {
        return this.progressOwner;
    };
    CapturePoint.prototype.getProgress = function () {
        return this.progress;
    };
    CapturePoint.prototype.getCapturePercent = function () {
        return (this.progress / this.totalStorage) * 100;
    };
    CapturePoint.prototype.isCaptured = function () {
        return (this.owner !== null &&
            this.owner === this.progressOwner &&
            this.progress === this.totalStorage);
    };
    CapturePoint.prototype.getCenter = function () {
        return this.center;
    };
    CapturePoint.prototype.getRadius = function () {
        return this.radius;
    };
    CapturePoint.prototype.getCaptureType = function () {
        return this.captureType;
    };
    return CapturePoint;
}());
var CaptureType;
(function (CaptureType) {
    CaptureType[CaptureType["Teams"] = 0] = "Teams";
    CaptureType[CaptureType["Individual"] = 1] = "Individual";
    CaptureType[CaptureType["Tag"] = 2] = "Tag";
})(CaptureType || (CaptureType = {}));
