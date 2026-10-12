import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/finderfeed/fdlib/systems/hud/bossbars" {
    export interface $FDBossBarFactory<T> extends RegistryMarked<RegistryTypes.FdlibBossBarsTag, RegistryTypes.FdlibBossBars> {}
    export class $FDBossBar {
        tick(arg0: number): void;
        height(): number;
        getEntity<T extends $Entity>(): T;
        render(arg0: $GuiGraphics, arg1: number): void;
        getUUID(): $UUID;
        getEntityId(): number;
        setPercentage(arg0: number): void;
        hanldeBarEvent(arg0: number, arg1: number): void;
        getPercentage(): number;
        constructor(arg0: $UUID_, arg1: number);
        get entity(): T;
        get UUID(): $UUID;
        get entityId(): number;
    }
    export class $FDBossBarFactory<T extends $FDBossBar> {
    }
    export interface $FDBossBarFactory<T extends $FDBossBar> {
        create(arg0: $UUID_, arg1: number): T;
    }
    /**
     * Values that may be interpreted as {@link $FDBossBarFactory}.
     */
    export type $FDBossBarFactory_<T> = RegistryTypes.FdlibBossBars | ((arg0: $UUID, arg1: number) => T);
}
