import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/mosaic" {
    export class $EntryType extends $Enum<$EntryType> implements $StringRepresentable {
        static values(): $EntryType[];
        static valueOf(arg0: string): $EntryType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$EntryType>;
        static DEFAULT: $EntryType;
        static SUB_BIOME: $EntryType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EntryType}.
     */
    export type $EntryType_ = "default" | "sub_biome";
    export class $MosaicBiomeEntry extends $Record {
        dimension(): $ResourceLocation;
        weight(): number;
        type(): $EntryType;
        biome(): $Holder<$Biome>;
        subBiomeSettings(): ($MosaicBiomeEntry$SubBiomeType) | undefined;
        climatePoint(): number;
        keepWeight(): number;
        static CODEC: $Codec<$MosaicBiomeEntry>;
        constructor(type: $EntryType_, dimension: $ResourceLocation_, climatePoint: number, biome: $Holder_<$Biome>, weight: number, keepWeight: number, subBiomeSettings: ($MosaicBiomeEntry$SubBiomeType_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $MosaicBiomeEntry}.
     */
    export type $MosaicBiomeEntry_ = RegistryTypes.ElysiumApiMosaicBiomeEntry | { dimension?: $ResourceLocation_, biome?: $Holder_<$Biome>, keepWeight?: number, subBiomeSettings?: ($MosaicBiomeEntry$SubBiomeType_) | undefined, weight?: number, climatePoint?: number, type?: $EntryType_,  } | [dimension?: $ResourceLocation_, biome?: $Holder_<$Biome>, keepWeight?: number, subBiomeSettings?: ($MosaicBiomeEntry$SubBiomeType_) | undefined, weight?: number, climatePoint?: number, type?: $EntryType_, ];
    export class $SubBiomeBehavior extends $Enum<$SubBiomeBehavior> implements $StringRepresentable {
        static values(): $SubBiomeBehavior[];
        static valueOf(arg0: string): $SubBiomeBehavior;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SubBiomeBehavior>;
        static REPLACE: $SubBiomeBehavior;
        static EDGE: $SubBiomeBehavior;
        static PATCH: $SubBiomeBehavior;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SubBiomeBehavior}.
     */
    export type $SubBiomeBehavior_ = "replace" | "patch" | "edge";
    export interface $MosaicBiomeEntry extends RegistryMarked<RegistryTypes.ElysiumApiMosaicBiomeEntryTag, RegistryTypes.ElysiumApiMosaicBiomeEntry> {}
    export class $MosaicBiomeEntry$SubBiomeType extends $Record {
        behavior(): $SubBiomeBehavior;
        replaceBiome(): $ResourceLocation;
        static CODEC: $Codec<$MosaicBiomeEntry$SubBiomeType>;
        constructor(replaceBiome: $ResourceLocation_, behavior: $SubBiomeBehavior_);
    }
    /**
     * Values that may be interpreted as {@link $MosaicBiomeEntry$SubBiomeType}.
     */
    export type $MosaicBiomeEntry$SubBiomeType_ = { replaceBiome?: $ResourceLocation_, behavior?: $SubBiomeBehavior_,  } | [replaceBiome?: $ResourceLocation_, behavior?: $SubBiomeBehavior_, ];
}
