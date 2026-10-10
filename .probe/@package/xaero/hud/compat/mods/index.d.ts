import { $Waystone } from "@package/net/blay09/mods/waystones/api";

declare module "@package/xaero/hud/compat/mods" {
    export class $SupportWaystones {
        registerClientEvents(): void;
        onWaystoneDeactivation(arg0: $Waystone): void;
        constructor();
    }
}
