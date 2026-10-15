const active_requests = {};

const name = (p) => String(p.username);

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal("tpa").then(
      Commands.argument("action", Arguments.STRING.create(event)).then(
        Commands.argument("target", Arguments.PLAYER.create(event)).executes(
          (ctx) => {
            if (!ctx.source.isPlayer()) {
              ctx.source.sendSystemMessage(
                Component.red("This command can only be run by a player"),
              );
              return 0;
            }
            const player = ctx.source.getPlayer();
            const action = Arguments.STRING.getResult(ctx, "action");
            let target;
            try {
              target = Arguments.PLAYER.getResult(ctx, "target");
            } catch (error) {
              player.sendSystemMessage(
                Component.red(
                  "There was an issue with you player parameter, make sure you enter valid arguments to the command",
                ),
              );
              return 0;
            }
            if (name(player) === name(target)) {
              player.sendSystemMessage(
                Component.red("You cannot send a tpa request to yourself."),
              );
              return 0;
            }
            const setPlayer = active_requests[name(player)] ?? new Set();
            active_requests[name(player)] = setPlayer;
            const setTarget = active_requests[name(target)] ?? new Set();
            active_requests[name(target)] = setTarget;
            if (action.toLowerCase() == "send") {
              if (setTarget.has(name(player))) {
                player.sendSystemMessage(
                  Component.red(
                    "You already have an active request for that player.",
                  ),
                );
                return 0;
              }
              target.sendSystemMessage(
                Component.green(
                  "You have a tpa request from " +
                    name(player) +
                    ". Run /tpa accept " +
                    name(player) +
                    " to accept",
                ),
              );
              player.sendSystemMessage(
                Component.green(
                  "request sent, you will be teleported when they accept. run /tpa cancel " +
                    name(target) +
                    " to cancel the request",
                ),
              );
              setTarget.add(name(player));
            } else if (action.toLowerCase() == "accept") {
              player.sendSystemMessage(
                Component.literal(
                  "accept: player=" +
                    name(player) +
                    " target=" +
                    name(target) +
                    " setPlayer=" +
                    Array.from(setPlayer).join(","),
                ),
              );
              if (setPlayer.has(name(target))) {
                player.server.runCommandSilent(
                  `tp ${String(target.username)} ${String(player.username)}`,
                );
                target.sendSystemMessage(
                  Component.green(
                    `${name(player)} accepted your tpa request! teleported to x: ${Math.round(player.getX())} y: ${Math.round(player.getY())} z: ${Math.round(player.getZ())}`,
                  ),
                );
                player.sendSystemMessage(
                  Component.green(
                    `${name(target)} was successfuly teleported!`,
                  ),
                );
                setPlayer.delete(name(target));
              } else {
                player.sendSystemMessage(
                  Component.red(
                    "Could not find an active tpa request from " +
                      name(target) +
                      " if this is a mistake ask them to resend the request",
                  ),
                );
                return 0;
              }
            } else if (action.toLowerCase() == "cancel") {
              if (setTarget.has(name(player))) {
                setTarget.delete(name(player));
                player.sendSystemMessage(
                  Component.green(
                    "Canceled your tpa request to " + name(target) + ".",
                  ),
                );
              } else {
                player.sendSystemMessage(
                  Component.red(
                    "You dont have an active tpa request to " +
                      name(target) +
                      ".",
                  ),
                );
                return 0;
              }
            } else {
              player.sendSystemMessage(
                Component.red("Invalid action. Use send, accept, or cancel."),
              );
              return 0;
            }
            active_requests[name(player)] = setPlayer;
            active_requests[name(target)] = setTarget;
            return 1;
          },
        ),
      ),
    ),
  );
});
