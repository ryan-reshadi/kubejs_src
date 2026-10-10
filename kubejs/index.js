"use strict";
var game = new Dummy();
ItemEvents.dropped("minecraft:iron_ore", function (event) {
    game.onPlayerJoin(event);
});
//whenever calling tick or start, pass in event.server ALWAYS
ServerEvents.tick(function (event) {
    game.setServer(event.server);
    game.tick();
});
PlayerEvents.loggedIn(function (event) {
    game.onPlayerJoin(event);
    event.server.tell("hey");
});
ServerEvents.commandRegistry(function (event) {
    var commands = event.commands, args = event.arguments;
    event.register(commands.literal('vote')
        .requires(function (src) { return src.hasPermission(0); })
        .then(commands.argument('targetPlayer', args.PLAYER.create(event))
        .executes(function (ctx) {
        // ctx.source.player can be null if run from the server console
        var player = ctx.source.player;
        // Explicitly cast the argument to a ServerPlayer
        var targetPlayer = args.PLAYER.getResult(ctx, 'targetPlayer');
        if (player) {
            player.tell('Voting for ' + targetPlayer.username + '...');
            targetPlayer.tell('You have received a vote from ' + player.username + '!');
        }
        else {
            // Fallback handle if command is run by console/RCON
            targetPlayer.tell('You have received a vote from the Console!');
        }
        return 1;
    })));
});
