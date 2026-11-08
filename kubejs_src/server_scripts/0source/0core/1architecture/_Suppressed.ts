const AWAKENED_MANUAL_SUPPRESSION_KEY = "awakened_manual_suppression_until";

class Suppressed {
    static apply(player: any, durationSeconds: number): void {
        if (!Number.isFinite(durationSeconds) || durationSeconds <= 0) {
            throw new Error("Suppression duration must be positive.");
        }

        Suppressed.applyTicks(player, Math.ceil(durationSeconds * 20));
    }

    static applyTicks(player: any, durationTicks: number): void {
        if (!Number.isFinite(durationTicks) || durationTicks <= 0) {
            throw new Error("Suppression duration must be positive.");
        }

        player.getPersistentData().putLong(
            AWAKENED_MANUAL_SUPPRESSION_KEY,
            player.serverLevel().getGameTime() + Math.ceil(durationTicks)
        );
    }

    static applyForever(player: any): void {
        player.getPersistentData().putLong(AWAKENED_MANUAL_SUPPRESSION_KEY, -1);
    }

    static remove(player: any): void {
        player.getPersistentData().remove(AWAKENED_MANUAL_SUPPRESSION_KEY);
    }

    static isManualActive(player: any): boolean {
        return Suppressed.getManualRemainingSeconds(player) !== 0;
    }

    static getManualRemainingSeconds(player: any): number {
        const data = player.getPersistentData();
        if (!data.contains(AWAKENED_MANUAL_SUPPRESSION_KEY)) return 0;

        const expiration = data.getLong(AWAKENED_MANUAL_SUPPRESSION_KEY);
        if (expiration === -1) return -1;

        const remainingTicks = expiration - player.serverLevel().getGameTime();
        if (remainingTicks <= 0) {
            data.remove(AWAKENED_MANUAL_SUPPRESSION_KEY);
            return 0;
        }

        return Math.ceil(remainingTicks / 20);
    }

    static applyPotion(player: any, durationTicks: number): void {
        if (!Number.isFinite(durationTicks) || durationTicks <= 0) {
            throw new Error("Potion suppression duration must be positive.");
        }

        player.potionEffects.add("kubejs:cursebroken", Math.ceil(durationTicks), 0);
    }

    static removePotion(player: any): void {
        player.removeEffect("kubejs:cursebroken");
    }

    static hasPotion(player: any): boolean {
        return player.getEffect("kubejs:cursebroken") != null;
    }

    static getPotionRemainingTicks(player: any): number {
        const effect = player.getEffect("kubejs:cursebroken");
        if (effect == null) return 0;
        if (effect.isInfiniteDuration()) return -1;

        return Math.max(0, effect.getDuration());
    }

    static isActive(player: any): boolean {
        return Suppressed.isManualActive(player) || Suppressed.hasPotion(player);
    }

    static cleansePotionEffects(player: any): void {
        const activeEffects = player.getActiveEffects().toArray();
        for (let i = 0; i < activeEffects.length; i++) {
            const effect = activeEffects[i];
            if (effect.getEffect().is("kubejs:cursebroken")) continue;
            player.removeEffect(effect.getEffect());
        }
    }
}

PlayerEvents.tick(event => {
    const player = event.player;
    if (player.level.isClientSide()) return;

    Suppressed.getManualRemainingSeconds(player);
    if (Suppressed.hasPotion(player)) {
        Suppressed.cleansePotionEffects(player);
    }
});

const MobEffectRemoveEvent = Java.loadClass("net.neoforged.neoforge.event.entity.living.MobEffectEvent$Remove");
const EffectCures = Java.loadClass("net.neoforged.neoforge.common.EffectCures");

NativeEvents.onEvent(MobEffectRemoveEvent, event => {
    if (event.getEffect().is("kubejs:cursebroken") && event.getCure() != null && event.getCure().equals(EffectCures.MILK)) {
        event.setCanceled(true);
    }
});

const NullifierPlayer = Java.loadClass('net.minecraft.world.entity.player.Player');
const NullifierMonster = Java.loadClass('net.minecraft.world.entity.monster.Monster');

PlayerEvents.tick(event => {
    const player = event.player;
    if (player.level.isClientSide() || !player.hasEffect('kubejs:nullifier')) return;

    const nearbyArea = player.getBoundingBox().inflate(24);
    const isNearbyTarget = target =>
        target.getId() !== player.getId() &&
        target.distanceToSqr(player.position()) <= 24 * 24;

    player.level.getEntitiesOfClass(NullifierPlayer, nearbyArea, isNearbyTarget).forEach(target => {
        target.potionEffects.add('kubejs:cursebroken', 40, 0);
    });

    player.level.getEntitiesOfClass(NullifierMonster, nearbyArea, isNearbyTarget).forEach(target => {
        target.potionEffects.add('kubejs:cursebroken', 40, 0);
    });
});
