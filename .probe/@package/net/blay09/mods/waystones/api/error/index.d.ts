import { $Component_, $Component } from "@package/net/minecraft/network/chat";

declare module "@package/net/blay09/mods/waystones/api/error" {
    export class $WaystoneTeleportError {
        getComponent(): $Component;
        constructor(arg0: $Component_);
        constructor();
        get component(): $Component;
    }
}
