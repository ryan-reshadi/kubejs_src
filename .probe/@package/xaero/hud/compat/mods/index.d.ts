import { $Waystone } from "@package/net/blay09/mods/waystones/api";

declare module "@package/xaero/hud/compat/mods" {
    export class $SupportWaystones {
        onWaystoneDeactivation(arg0: $Waystone): void;
        registerClientEvents(): void;
        constructor();
    }
}
