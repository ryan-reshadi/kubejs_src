import { $SupportOPACServer } from "@package/xaero/common/server/mods/opac";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $SupportArgonautsServer } from "@package/xaero/common/server/mods/argonauts";
import { $SupportFTBTeamsServer } from "@package/xaero/common/server/mods/ftbteams";
export * as argonauts from "@package/xaero/common/server/mods/argonauts";
export * as ftbteams from "@package/xaero/common/server/mods/ftbteams";
export * as opac from "@package/xaero/common/server/mods/opac";

declare module "@package/xaero/common/server/mods" {
    export class $SupportServerMods {
        check(arg0: $IXaeroMinimap): void;
        getOpac(): $SupportOPACServer;
        hasOpac(): boolean;
        registerEvents(): void;
        hasWorldmap(): boolean;
        hasFtbTeams(): boolean;
        getWorldmap(): $SupportWorldMapServer;
        hasArgonauts(): boolean;
        getFtbTeams(): $SupportFTBTeamsServer;
        getArgonauts(): $SupportArgonautsServer;
        constructor();
        get opac(): $SupportOPACServer;
        get worldmap(): $SupportWorldMapServer;
        get ftbTeams(): $SupportFTBTeamsServer;
        get argonauts(): $SupportArgonautsServer;
    }
    export class $SupportWorldMapServer {
        supportsTrackedPlayers(): boolean;
        constructor();
    }
}
