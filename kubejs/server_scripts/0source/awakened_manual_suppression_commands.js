// Commands:
// /powers suppress <player> <seconds>
// /powers suppress <player> forever
// /powers unsuppress <player>
// /powers status <player>

const AWAKENED_COMMAND_MAX_SECONDS = 86400

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

              if (seconds < 1 || seconds > AWAKENED_COMMAND_MAX_SECONDS) {
                ctx.source.sendFailure(
                  Text.red('Duration must be between 1 and 86400 seconds.')
                )
                return 0
              }

              const wasActive = Suppressed.isManualActive(target)
              Suppressed.apply(target, seconds)

              ctx.source.sendSuccess(
                () => Text.green(
                  (wasActive ? 'Updated manual suppression for ' : 'Suppressed ') +
                  target.getGameProfile().getName() +
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
              const wasActive = Suppressed.isManualActive(target)
              Suppressed.applyForever(target)

              ctx.source.sendSuccess(
                () => Text.green(
                  (wasActive ? 'Updated indefinite manual suppression for ' : 'Indefinitely suppressed ') +
                  target.getGameProfile().getName() + '.'
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
          const wasActive = Suppressed.isManualActive(target)
          Suppressed.remove(target)

          const potionActive = Suppressed.hasPotion(target)
          ctx.source.sendSuccess(
            () => wasActive
              ? Text.green(
                'Removed manual suppression from ' +
                target.getGameProfile().getName() +
                (potionActive ? '; potion suppression remains active.' : '.')
              )
              : Text.yellow(
                target.getGameProfile().getName() +
                (potionActive
                  ? ' has no active manual suppression; potion suppression remains active.'
                  : ' has no active manual suppression.')
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
          const manualRemainingSeconds = Suppressed.getManualRemainingSeconds(target)
          const potionRemainingTicks = Suppressed.getPotionRemainingTicks(target)
          const manualActive = manualRemainingSeconds !== 0
          const potionActive = potionRemainingTicks !== 0
          const combinedActive = Suppressed.isActive(target)

          if (manualRemainingSeconds === -1) {
            ctx.source.sendSuccess(
              () => Text.red('Manual suppression: active indefinitely.'),
              false
            )
          } else if (manualActive) {
            ctx.source.sendSuccess(
              () => Text.red(
                'Manual suppression: active for ' +
                manualRemainingSeconds + ' more seconds.'
              ),
              false
            )
          } else {
            ctx.source.sendSuccess(
              () => Text.yellow('Manual suppression: inactive.'),
              false
            )
          }

          if (potionRemainingTicks === -1) {
            ctx.source.sendSuccess(
              () => Text.red('Potion suppression: active indefinitely.'),
              false
            )
          } else if (potionActive) {
            ctx.source.sendSuccess(
              () => Text.red(
                'Potion suppression: active for ' +
                Math.ceil(potionRemainingTicks / 20) + ' more seconds.'
              ),
              false
            )
          } else {
            ctx.source.sendSuccess(
              () => Text.yellow('Potion suppression: inactive.'),
              false
            )
          }

          ctx.source.sendSuccess(
            () => combinedActive
              ? Text.red('Combined manual/potion suppression: active.')
              : Text.green('Combined manual/potion suppression: inactive.'),
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
