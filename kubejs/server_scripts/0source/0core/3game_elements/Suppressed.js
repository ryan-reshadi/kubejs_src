"use strict";
/**
 * The Awakening — Unified Suppressed Effect
 *
 * Applies:
 * 1. Native Awakening power suppression.
 * 2. Continuous removal of all active potion effects.
 *
 * Requires the existing KubeJS startup and server scripts.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suppressed = void 0;
var SUPPRESSION_KEY = "awakened_manual_suppression_until";
var Suppressed = /** @class */ (function () {
    function Suppressed() {
    }
    /**
     * Apply suppression for a specified number of seconds.
     */
    Suppressed.apply = function (player, durationSeconds) {
        if (durationSeconds <= 0 || !Number.isFinite(durationSeconds)) {
            throw new Error("Suppression duration must be positive.");
        }
        var persistentData = player.getPersistentData();
        var currentTick = player.serverLevel().getGameTime();
        var durationTicks = Math.ceil(durationSeconds * 20);
        persistentData.putLong(SUPPRESSION_KEY, currentTick + durationTicks);
    };
    /**
     * Apply suppression for a specified number of ticks.
     */
    Suppressed.applyTicks = function (player, durationTicks) {
        if (durationTicks <= 0 || !Number.isFinite(durationTicks)) {
            throw new Error("Suppression duration must be positive.");
        }
        var currentTick = player.serverLevel().getGameTime();
        player.getPersistentData().putLong(SUPPRESSION_KEY, currentTick + Math.ceil(durationTicks));
    };
    /**
     * Apply suppression indefinitely.
     */
    Suppressed.applyForever = function (player) {
        player.getPersistentData().putLong(SUPPRESSION_KEY, -1);
    };
    /**
     * Remove manually applied suppression.
     */
    Suppressed.remove = function (player) {
        player.getPersistentData().remove(SUPPRESSION_KEY);
    };
    /**
     * Check whether the manual suppression timer is active.
     */
    Suppressed.isActive = function (player) {
        var data = player.getPersistentData();
        if (!data.contains(SUPPRESSION_KEY)) {
            return false;
        }
        var expiration = data.getLong(SUPPRESSION_KEY);
        return expiration === -1 ||
            player.serverLevel().getGameTime() < expiration;
    };
    /**
     * Get remaining suppression duration in seconds.
     * Returns -1 for indefinite suppression.
     */
    Suppressed.getRemainingSeconds = function (player) {
        var data = player.getPersistentData();
        if (!data.contains(SUPPRESSION_KEY)) {
            return 0;
        }
        var expiration = data.getLong(SUPPRESSION_KEY);
        if (expiration === -1) {
            return -1;
        }
        var remainingTicks = Math.max(0, expiration - player.serverLevel().getGameTime());
        return Math.ceil(remainingTicks / 20);
    };
    return Suppressed;
}());
exports.Suppressed = Suppressed;
