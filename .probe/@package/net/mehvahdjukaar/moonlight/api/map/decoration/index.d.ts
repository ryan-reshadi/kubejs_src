import { $BlockGetter, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Products$P7 } from "@package/com/mojang/datafixers";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/map/decoration" {
    export class $MLMapDecoration {
        getY(): number;
        getDisplayName(): $Component;
        getX(): number;
        getType(): $Holder<$MLMapDecorationType<never, never>>;
        getRot(): number;
        static CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MLMapDecoration>;
        constructor(arg0: $Holder_<$MLMapDecorationType<never, never>>, arg1: number, arg2: number, arg3: number, arg4: ($Component_) | undefined);
        get y(): number;
        get displayName(): $Component;
        get x(): number;
        get type(): $Holder<$MLMapDecorationType<never, never>>;
        get rot(): number;
    }
    export class $MLMapMarker<D extends $MLMapDecoration> {
        getDisplayName(): ($Component) | undefined;
        getFlags(): number;
        getType(): $Holder<$MLMapDecorationType<never, never>>;
        hasFlag(arg0: number): boolean;
        getRotation(): number;
        shouldSave(): boolean;
        getPos(): $BlockPos;
        createDecorationFromMarker(arg0: $MapItemSavedData): D;
        getMarkerUniqueId(): string;
        shouldRefreshFromWorld(): boolean;
        preventsExtending(): boolean;
        static assertCanSerialize(arg0: $HolderLookup$Provider): void;
        static baseCodecGroup<T extends $MLMapMarker<never>>(arg0: $RecordCodecBuilder$Instance<T>): $Products$P7<$RecordCodecBuilder$Mu<T>, $Holder<$MLMapDecorationType<never, never>>, $BlockPos, number, ($Component) | undefined, (boolean) | undefined, (boolean) | undefined, boolean>;
        static HAS_SMALL_TEXTURE_FLAG: number;
        static CODEC: $Codec<$MLMapMarker<never>>;
        /**
         * @deprecated
         */
        static REFERENCE_CODEC: $Codec<$MLMapMarker<never>>;
        constructor(arg0: $Holder_<$MLMapDecorationType<never, never>>, arg1: $BlockPos_, arg2: number, arg3: ($Component_) | undefined, arg4: (boolean) | undefined, arg5: (boolean) | undefined, arg6: boolean);
        get displayName(): ($Component) | undefined;
        get flags(): number;
        get type(): $Holder<$MLMapDecorationType<never, never>>;
        get rotation(): number;
        get pos(): $BlockPos;
        get markerUniqueId(): string;
    }
    export interface $MLMapDecorationType<D, M> extends RegistryMarked<RegistryTypes.MoonlightMapMarkerTag, RegistryTypes.MoonlightMapMarker> {}
    export class $MLMapDecorationType<D extends $MLMapDecoration, M extends $MLMapMarker<D>> {
        /**
         * @deprecated
         */
        createMarkerFromWorld(arg0: $BlockGetter, arg1: $BlockPos_): M;
        createMarkerFromWorld(arg0: $LevelAccessor, arg1: $BlockPos_): M;
        getCustomFactoryID(): $ResourceLocation;
        getDefaultMapColor(): number;
        getAssociatedStructure(): ($HolderSet<$Structure>) | undefined;
        getDecorationCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        getMarkerCodec(): $MapCodec<M>;
        static CODEC: $Codec<$Holder<$MLMapDecorationType<never, never>>>;
        static DIRECT_CODEC: $Codec<$MLMapDecorationType<never, never>>;
        static REFERENCE_CODEC: $Codec<$Holder<$MLMapDecorationType<never, never>>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MLMapDecorationType<never, never>>>;
        get customFactoryID(): $ResourceLocation;
        get defaultMapColor(): number;
        get associatedStructure(): ($HolderSet<$Structure>) | undefined;
        get decorationCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        get markerCodec(): $MapCodec<M>;
    }
    /**
     * Values that may be interpreted as {@link $MLMapDecorationType}.
     */
    export type $MLMapDecorationType_<D, M> = RegistryTypes.MoonlightMapMarker;
}
