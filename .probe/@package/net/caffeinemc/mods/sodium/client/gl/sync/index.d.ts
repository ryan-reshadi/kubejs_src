
declare module "@package/net/caffeinemc/mods/sodium/client/gl/sync" {
    export class $GlFence {
        sync(): void;
        sync(arg0: number): void;
        isCompleted(): boolean;
        "delete"(): void;
        constructor(arg0: number);
        get completed(): boolean;
    }
}
