"use strict";
var Point = /** @class */ (function () {
    function Point(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Point.prototype.placeBlock = function (blockID, server, ensureAir) {
        if (ensureAir === void 0) { ensureAir = true; }
        if (ensureAir) {
            server.runCommandSilent("setblock " + this.toString() + " " + blockID + " keep");
        }
        else {
            server.runCommandSilent("setblock " + this.toString() + " " + blockID);
        }
    };
    Point.prototype.toString = function () {
        return this.x + " " + this.y + " " + this.z;
    };
    Point.prototype.tpPlayers = function (players) {
        var server = players[0].server;
        for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
            var player = players_1[_i];
            server.runCommandSilent("tp " + player.username + " " + this.toString());
        }
    };
    return Point;
}());
