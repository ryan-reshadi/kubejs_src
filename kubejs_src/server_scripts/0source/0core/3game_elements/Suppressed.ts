
/**
 * The Awakening — Unified Suppressed Effect
 *
 * Applies:
 * 1. Native Awakening power suppression.
 * 2. Continuous removal of all active potion effects.
 *
 * Requires the existing KubeJS startup and server scripts.
 */

const SUPPRESSION_KEY = "awakened_manual_suppression_until";

export class Suppressed {

    /**
     * Apply suppression for a specified number of seconds.
     */
    static apply(player: any, durationSeconds: number): void {
        if (durationSeconds <= 0 || !Number.isFinite(durationSeconds)) {
            throw new Error("Suppression duration must be positive.");
        }

        const persistentData = player.getPersistentData();

        const currentTick = player.serverLevel().getGameTime();
        const durationTicks = Math.ceil(durationSeconds * 20);

        persistentData.putLong(
            SUPPRESSION_KEY,
            currentTick + durationTicks
        );
    }

    /**
     * Apply suppression for a specified number of ticks.
     */
    static applyTicks(player: any, durationTicks: number): void {
        if (durationTicks <= 0 || !Number.isFinite(durationTicks)) {
            throw new Error("Suppression duration must be positive.");
        }

        const currentTick = player.serverLevel().getGameTime();

        player.getPersistentData().putLong(
            SUPPRESSION_KEY,
            currentTick + Math.ceil(durationTicks)
        );
    }

    /**
     * Apply suppression indefinitely.
     */
    static applyForever(player: any): void {
        player.getPersistentData().putLong(
            SUPPRESSION_KEY,
            -1
        );
    }

    /**
     * Remove manually applied suppression.
     */
    static remove(player: any): void {
        player.getPersistentData().remove(SUPPRESSION_KEY);
    }

    /**
     * Check whether the manual suppression timer is active.
     */
    static isActive(player: any): boolean {
        const data = player.getPersistentData();

        if (!data.contains(SUPPRESSION_KEY)) {
            return false;
        }

        const expiration = data.getLong(SUPPRESSION_KEY);

        return expiration === -1 ||
            player.serverLevel().getGameTime() < expiration;
    }

    /**
     * Get remaining suppression duration in seconds.
     * Returns -1 for indefinite suppression.
     */
    static getRemainingSeconds(player: any): number {
        const data = player.getPersistentData();

        if (!data.contains(SUPPRESSION_KEY)) {
            return 0;
        }

        const expiration = data.getLong(SUPPRESSION_KEY);

        if (expiration === -1) {
            return -1;
        }

        const remainingTicks = Math.max(
            0,
            expiration - player.serverLevel().getGameTime()
        );

        return Math.ceil(remainingTicks / 20);
    }
}
