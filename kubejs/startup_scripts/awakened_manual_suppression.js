const AWAKENED_POWER_SUPPRESSION = Java.loadClass(
  'com.awakenedmod.awakened.core.PowerSuppression'
)
const AWAKENED_MANUAL_SUPPRESSION_KEY = 'awakened_manual_suppression_until'

AWAKENED_POWER_SUPPRESSION.register(entity => {
  const data = entity.getPersistentData()
  if (data.contains(AWAKENED_MANUAL_SUPPRESSION_KEY)) {
    const expiration = data.getLong(AWAKENED_MANUAL_SUPPRESSION_KEY)
    if (expiration === -1) return true
    if (entity.level().getGameTime() < expiration) return true
    data.remove(AWAKENED_MANUAL_SUPPRESSION_KEY)
  }

  return entity.getEffect('kubejs:suppressed') != null
})
