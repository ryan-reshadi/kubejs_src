import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DeltaTracker } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/finderfeed/fdlib/systems/screen/screen_effect" {
    export class $ScreenEffectData {
        constructor();
    }
    export interface $ScreenEffectType<T, S> extends RegistryMarked<RegistryTypes.FdlibScreenEffectTag, RegistryTypes.FdlibScreenEffect> {}
    export class $ScreenEffectFactory<D extends $ScreenEffectData, T extends $ScreenEffect<D>> {
    }
    export interface $ScreenEffectFactory<D extends $ScreenEffectData, T extends $ScreenEffect<D>> {
        create(arg0: D, arg1: number, arg2: number, arg3: number): T;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEffectFactory}.
     */
    export type $ScreenEffectFactory_<D, T> = ((arg0: D, arg1: number, arg2: number, arg3: number) => T);
    export class $ScreenEffectType<T extends $ScreenEffectData, S extends $ScreenEffect<T>> {
        static create<T extends $ScreenEffectData, S extends $ScreenEffect<T>>(arg0: $ScreenEffectFactory_<T, S>, arg1: $StreamCodec_<$RegistryFriendlyByteBuf, T>): $ScreenEffectType<T, S>;
        factory: $ScreenEffectFactory<T, S>;
        dataCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEffectType}.
     */
    export type $ScreenEffectType_<T, S> = RegistryTypes.FdlibScreenEffect;
    export class $ScreenEffect<T extends $ScreenEffectData> {
        getData(): T;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: number, arg3: number, arg4: number): void;
        setData(arg0: T): void;
        getStayTime(): number;
        getStayTimePercent(arg0: number, arg1: number): number;
        getOutTimePercent(arg0: number, arg1: number): number;
        getInTimePercent(arg0: number, arg1: number): number;
        setStayTime(arg0: number): void;
        getLifetime(): number;
        isStayTime(arg0: number): boolean;
        isOutTime(arg0: number): boolean;
        setInTime(arg0: number): void;
        getOutTime(): number;
        setOutTime(arg0: number): void;
        isInTime(arg0: number): boolean;
        getInTime(): number;
        constructor(arg0: T, arg1: number, arg2: number, arg3: number);
        get lifetime(): number;
    }
}
