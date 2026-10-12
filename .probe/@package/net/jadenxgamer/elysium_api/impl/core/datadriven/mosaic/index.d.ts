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
        type(): $EntryType;
        weight(): number;
        dimension(): $ResourceLocation;
        biome(): $Holder<$Biome>;
        keepWeight(): number;
        climatePoint(): number;
        subBiomeSettings(): ($MosaicBiomeEntry$SubBiomeType) | undefined;
        static CODEC: $Codec<$MosaicBiomeEntry>;
        constructor(type: $EntryType_, dimension: $ResourceLocation_, climatePoint: number, biome: $Holder_<$Biome>, weight: number, keepWeight: number, subBiomeSettings: ($MosaicBiomeEntry$SubBiomeType_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $MosaicBiomeEntry}.
     */
    export type $MosaicBiomeEntry_ = RegistryTypes.ElysiumApiMosaicBiomeEntry | { keepWeight?: number, biome?: $Holder_<$Biome>, dimension?: $ResourceLocation_, type?: $EntryType_, climatePoint?: number, weight?: number, subBiomeSettings?: ($MosaicBiomeEntry$SubBiomeType_) | undefined,  } | [keepWeight?: number, biome?: $Holder_<$Biome>, dimension?: $ResourceLocation_, type?: $EntryType_, climatePoint?: number, weight?: number, subBiomeSettings?: ($MosaicBiomeEntry$SubBiomeType_) | undefined, ];
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
    export type $MosaicBiomeEntry$SubBiomeType_ = { behavior?: $SubBiomeBehavior_, replaceBiome?: $ResourceLocation_,  } | [behavior?: $SubBiomeBehavior_, replaceBiome?: $ResourceLocation_, ];
}
