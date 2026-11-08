// The Awakening 1.22.1 — manual player power suppression
// Place in: kubejs/startup_scripts/awakened_manual_suppression.js
//
// Registers an extra condition with The Awakening's native PowerSuppression
// system. The mod itself handles interruption, ability-state clearing,
// suppression attachment syncing, and restoration when suppression ends.

const AwakenedPowerSuppression = Java.loadClass(
  'com.awakenedmod.awakened.core.PowerSuppression'
)
const ServerPlayerClass = Java.loadClass(
  'net.minecraft.server.level.ServerPlayer'
)

const MANUAL_SUPPRESSION_TAG = 'awakened_manual_suppression_until'

// A value of -1 means indefinite suppression.
// A positive value is the absolute world game-time tick at which suppression ends.
AwakenedPowerSuppression.register(entity => {
  if (!(entity instanceof ServerPlayerClass)) {
    return false
  }

  const persistentData = entity.getPersistentData()

  if (!persistentData.contains(MANUAL_SUPPRESSION_TAG)) {
    return false
  }

  const untilTick = persistentData.getLong(MANUAL_SUPPRESSION_TAG)

  if (untilTick === -1) {
    return true
  }

  if (entity.serverLevel().getGameTime() < untilTick) {
    return true
  }

  // Remove expired state. PowerSuppression.update() will notice the transition
  // on this tick and invoke the mod's normal onUnsuppressed handling.
  persistentData.remove(MANUAL_SUPPRESSION_TAG)
  return false
})

console.info('[Awakened Power Suppression] Registered native suppression predicate.')
