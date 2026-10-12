import { $ServerLevel } from "@package/net/minecraft/server/level";

declare module "@package/dev/obscuria/aquamirae/api/server" {
    export class $TickableEvent {
    }
    export interface $TickableEvent {
        onStart(arg0: $ServerLevel): void;
        tick(arg0: $ServerLevel): void;
        isFinished(): boolean;
        onStop(arg0: $ServerLevel): void;
        get finished(): boolean;
    }
}
