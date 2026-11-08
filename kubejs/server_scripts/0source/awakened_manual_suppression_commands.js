// The Awakening 1.22.1 — admin commands for manual power suppression
// Place in: kubejs/server_scripts/awakened_manual_suppression_commands.js
//
// Commands (requires permission level 2 / operator):
//   /powers suppress <player> <seconds>
//   /powers suppress <player> forever
//   /powers unsuppress <player>
//   /powers status <player>
//
// Duration is measured in seconds. Maximum finite duration: 86400 seconds (24h).

const AwakenedPowerSuppression = Java.loadClass(
  'com.awakenedmod.awakened.core.PowerSuppression'
)
const AwakenedPowerService = Java.loadClass(
  'com.awakenedmod.awakened.core.PowerService'
)
const AwakenedPowerRegistry = Java.loadClass(
  'com.awakenedmod.awakened.core.power.PowerRegistry'
)

const MANUAL_SUPPRESSION_TAG = 'awakened_manual_suppression_until'
const MAX_SECONDS = 86400

function getAwakenedPower(player) {
  const data = AwakenedPowerService.data(player)
  const power = AwakenedPowerRegistry.get(data.powerId())
  return { data: data, power: power }
}

// Re-run the mod's own transition handler immediately instead of waiting
// for the next PlayerTickEvent. This clears active ability state on apply
// and runs onUnsuppressed when the final suppression source is removed.
function refreshNativeSuppression(player) {
  const state = getAwakenedPower(player)
  AwakenedPowerSuppression.update(player, state.power, state.data)
}

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event

  const root = Commands.literal('powers')
    .requires(source => source.hasPermission(2))

  const suppress = Commands.literal('suppress')
    .then(
      Commands.argument('target', Arguments.PLAYER.create(event))
        .then(
          Commands.argument('seconds', Arguments.INTEGER.create(event))
            .executes(ctx => {
              const target = Arguments.PLAYER.getResult(ctx, 'target')
              const seconds = Arguments.INTEGER.getResult(ctx, 'seconds')

              if (seconds < 1 || seconds > MAX_SECONDS) {
                ctx.source.sendFailure(
                  Text.red('Duration must be between 1 and 86400 seconds.')
                )
                return 0
              }

              const endTick = target.serverLevel().getGameTime() + seconds * 20
              target.getPersistentData().putLong(MANUAL_SUPPRESSION_TAG, endTick)
              refreshNativeSuppression(target)

              ctx.source.sendSuccess(
                () => Text.green(
                  'Suppressed ' + target.getGameProfile().getName() +
                  ' for ' + seconds + ' seconds.'
                ),
                true
              )
              return 1
            })
        )
        .then(
          Commands.literal('forever')
            .executes(ctx => {
              const target = Arguments.PLAYER.getResult(ctx, 'target')
              target.getPersistentData().putLong(MANUAL_SUPPRESSION_TAG, -1)
              refreshNativeSuppression(target)

              ctx.source.sendSuccess(
                () => Text.green(
                  'Indefinitely suppressed ' + target.getGameProfile().getName() + '.'
                ),
                true
              )
              return 1
            })
        )
    )

  const unsuppress = Commands.literal('unsuppress')
    .then(
      Commands.argument('target', Arguments.PLAYER.create(event))
        .executes(ctx => {
          const target = Arguments.PLAYER.getResult(ctx, 'target')
          target.getPersistentData().remove(MANUAL_SUPPRESSION_TAG)
          refreshNativeSuppression(target)

          ctx.source.sendSuccess(
            () => Text.green(
              'Removed manual suppression from ' + target.getGameProfile().getName() +
              '. Other suppression sources, such as an active Rift domain, may still apply.'
            ),
            true
          )
          return 1
        })
    )

  const status = Commands.literal('status')
    .then(
      Commands.argument('target', Arguments.PLAYER.create(event))
        .executes(ctx => {
          const target = Arguments.PLAYER.getResult(ctx, 'target')
          const persistentData = target.getPersistentData()
          const hasManualTag = persistentData.contains(MANUAL_SUPPRESSION_TAG)

          if (!hasManualTag) {
            ctx.source.sendSuccess(
              () => Text.yellow(
                target.getGameProfile().getName() + ' has no manual suppression timer.'
              ),
              false
            )
            return 1
          }

          const untilTick = persistentData.getLong(MANUAL_SUPPRESSION_TAG)

          if (untilTick === -1) {
            ctx.source.sendSuccess(
              () => Text.red(
                target.getGameProfile().getName() + ' is manually suppressed indefinitely.'
              ),
              false
            )
            return 1
          }

          const remainingTicks = Math.max(
            0,
            untilTick - target.serverLevel().getGameTime()
          )
          const remainingSeconds = Math.ceil(remainingTicks / 20)

          ctx.source.sendSuccess(
            () => Text.red(
              target.getGameProfile().getName() +
              ' has ' + remainingSeconds + ' seconds of manual suppression remaining.'
            ),
            false
          )
          return 1
        })
    )

  root.then(suppress)
  root.then(unsuppress)
  root.then(status)
  event.register(root)
})
