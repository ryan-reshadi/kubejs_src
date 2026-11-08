"use strict";
var AWAKENED_MANUAL_SUPPRESSION_KEY = "awakened_manual_suppression_until";
var Suppressed = /** @class */ (function () {
    function Suppressed() {
    }
    Suppressed.apply = function (player, durationSeconds) {
        if (!Number.isFinite(durationSeconds) || durationSeconds <= 0) {
            throw new Error("Suppression duration must be positive.");
        }
        Suppressed.applyTicks(player, Math.ceil(durationSeconds * 20));
    };
    Suppressed.applyTicks = function (player, durationTicks) {
        if (!Number.isFinite(durationTicks) || durationTicks <= 0) {
            throw new Error("Suppression duration must be positive.");
        }
        player.getPersistentData().putLong(AWAKENED_MANUAL_SUPPRESSION_KEY, player.serverLevel().getGameTime() + Math.ceil(durationTicks));
    };
    Suppressed.applyForever = function (player) {
        player.getPersistentData().putLong(AWAKENED_MANUAL_SUPPRESSION_KEY, -1);
    };
    Suppressed.remove = function (player) {
        player.getPersistentData().remove(AWAKENED_MANUAL_SUPPRESSION_KEY);
    };
    Suppressed.isManualActive = function (player) {
        return Suppressed.getManualRemainingSeconds(player) !== 0;
    };
    Suppressed.getManualRemainingSeconds = function (player) {
        var data = player.getPersistentData();
        if (!data.contains(AWAKENED_MANUAL_SUPPRESSION_KEY))
            return 0;
        var expiration = data.getLong(AWAKENED_MANUAL_SUPPRESSION_KEY);
        if (expiration === -1)
            return -1;
        var remainingTicks = expiration - player.serverLevel().getGameTime();
        if (remainingTicks <= 0) {
            data.remove(AWAKENED_MANUAL_SUPPRESSION_KEY);
            return 0;
        }
        return Math.ceil(remainingTicks / 20);
    };
    Suppressed.applyPotion = function (player, durationTicks) {
        if (!Number.isFinite(durationTicks) || durationTicks <= 0) {
            throw new Error("Potion suppression duration must be positive.");
        }
        player.potionEffects.add("kubejs:suppressed", Math.ceil(durationTicks), 0);
    };
    Suppressed.removePotion = function (player) {
        player.removeEffect("kubejs:suppressed");
    };
    Suppressed.hasPotion = function (player) {
        return player.getEffect("kubejs:suppressed") != null;
    };
    Suppressed.getPotionRemainingTicks = function (player) {
        var effect = player.getEffect("kubejs:suppressed");
        if (effect == null)
            return 0;
        if (effect.isInfiniteDuration())
            return -1;
        return Math.max(0, effect.getDuration());
    };
    Suppressed.isActive = function (player) {
        return Suppressed.isManualActive(player) || Suppressed.hasPotion(player);
    };
    Suppressed.cleansePotionEffects = function (player) {
        var activeEffects = player.getActiveEffects().toArray();
        for (var i = 0; i < activeEffects.length; i++) {
            var effect = activeEffects[i];
            if (effect.getEffect().is("kubejs:suppressed"))
                continue;
            player.removeEffect(effect.getEffect());
        }
    };
    return Suppressed;
}());
PlayerEvents.tick(function (event) {
    var player = event.player;
    if (player.level().isClientSide())
        return;
    Suppressed.getManualRemainingSeconds(player);
    if (Suppressed.hasPotion(player)) {
        Suppressed.cleansePotionEffects(player);
    }
});
