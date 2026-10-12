import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
export * as config from "@package/xaero/lib/common/permission/config";

declare module "@package/xaero/lib/common/permission" {
    export class $PermissionNode<T> {
        getModId(): string;
        getDisplayName(): $Component;
        getComment(): $Component;
        getType(): $Class<T>;
        getDefaultPath(): string;
        getActualPath(): string;
        get modId(): string;
        get displayName(): $Component;
        get comment(): $Component;
        get type(): $Class<T>;
        get defaultPath(): string;
        get actualPath(): string;
    }
}
