"use strict";
var LootEntry = /** @class */ (function () {
    function LootEntry(name, weight, amount) {
        this.name = name;
        this.weight = weight;
        this.amount = amount;
    }
    LootEntry.prototype.getName = function () { return this.name; };
    LootEntry.prototype.getWeight = function () { return this.weight; };
    LootEntry.prototype.getAmount = function () { return this.amount; };
    return LootEntry;
}());
var LootTable = /** @class */ (function () {
    function LootTable() {
        this.entries = [];
    }
    LootTable.prototype.addLoot = function (name, weight, amount) {
        this.entries.push(new LootEntry(name, weight, amount));
    };
    LootTable.prototype.getTotalWeight = function () {
        var total = 0;
        for (var i = 0; i < this.entries.length; i++) {
            total += this.entries[i].getWeight();
        }
        return total;
    };
    LootTable.prototype.getRandomLoot = function () {
        var totalWeight = this.getTotalWeight();
        if (totalWeight === 0)
            return null;
        var randomWeight = Math.random() * totalWeight;
        for (var i = this.entries.length - 1; i >= 0; --i) {
            // for (let i = 0, l = this.entries.length; i < l; i++) {
            var entry = this.entries[i];
            randomWeight -= entry.getWeight();
            if (randomWeight <= 0) {
                return entry;
            }
        }
        return null;
    };
    LootTable.prototype.rollRandomLoot = function (rolls) {
        var results = [];
        for (var i = 0; i < rolls; i++) {
            var loot = this.getRandomLoot();
            if (loot) {
                results.push(loot);
            }
        }
        return results;
    };
    LootTable.prototype.giveRandomLoot = function (player, rolls) {
        var lootEntries = this.rollRandomLoot(rolls);
        lootEntries.forEach(function (entry) {
            player.give(Item.of(entry.getName(), entry.getAmount()));
        });
    };
    LootTable.prototype.givePlayersRandomLoot = function (players, rolls) {
        for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
            var player = players_1[_i];
            this.giveRandomLoot(player, rolls);
        }
    };
    return LootTable;
}());
