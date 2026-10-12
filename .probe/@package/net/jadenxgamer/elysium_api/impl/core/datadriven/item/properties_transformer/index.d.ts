import { $Holder_, $HolderSet_, $Holder, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $Rarity } from "@package/net/minecraft/world/item";
import { $FoodProperties, $FoodProperties_ } from "@package/net/minecraft/world/food";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable$StringRepresentableCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/item/properties_transformer" {
    export class $RarityEnum extends $Enum<$RarityEnum> implements $StringRepresentable {
        static values(): $RarityEnum[];
        static valueOf(arg0: string): $RarityEnum;
        getSerializedName(): string;
        toVanillaRarity(): $Rarity;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$StringRepresentableCodec<$RarityEnum>;
        static RARE: $RarityEnum;
        static EPIC: $RarityEnum;
        static UNCOMMON: $RarityEnum;
        static COMMON: $RarityEnum;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RarityEnum}.
     */
    export type $RarityEnum_ = "common" | "uncommon" | "rare" | "epic";
    export interface $ItemPropertiesTransformer extends RegistryMarked<RegistryTypes.ElysiumApiItemPropertiesTransformerTag, RegistryTypes.ElysiumApiItemPropertiesTransformer> {}
    export class $ItemPropertiesTransformer$Properties extends $Record {
        maxStackSize(): (number) | undefined;
        food(): ($FoodProperties) | undefined;
        rarity(): ($RarityEnum) | undefined;
        maxDamage(): (number) | undefined;
        canRepair(): (boolean) | undefined;
        fireResistant(): (boolean) | undefined;
        craftRemainder(): ($Holder<$Item>) | undefined;
        static CODEC: $Codec<$ItemPropertiesTransformer$Properties>;
        constructor(maxStackSize: (number) | undefined, maxDamage: (number) | undefined, rarity: ($RarityEnum_) | undefined, fireResistant: (boolean) | undefined, food: ($FoodProperties_) | undefined, craftRemainder: ($Holder_<$Item>) | undefined, canRepair: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemPropertiesTransformer$Properties}.
     */
    export type $ItemPropertiesTransformer$Properties_ = { rarity?: ($RarityEnum_) | undefined, craftRemainder?: ($Holder_<$Item>) | undefined, fireResistant?: (boolean) | undefined, food?: ($FoodProperties_) | undefined, canRepair?: (boolean) | undefined, maxStackSize?: (number) | undefined, maxDamage?: (number) | undefined,  } | [rarity?: ($RarityEnum_) | undefined, craftRemainder?: ($Holder_<$Item>) | undefined, fireResistant?: (boolean) | undefined, food?: ($FoodProperties_) | undefined, canRepair?: (boolean) | undefined, maxStackSize?: (number) | undefined, maxDamage?: (number) | undefined, ];
    export class $ItemPropertiesTransformer extends $Record {
        items(): $HolderSet<$Item>;
        properties(): $ItemPropertiesTransformer$Properties;
        static CODEC: $Codec<$ItemPropertiesTransformer>;
        constructor(items: $HolderSet_<$Item>, properties: $ItemPropertiesTransformer$Properties_);
    }
    /**
     * Values that may be interpreted as {@link $ItemPropertiesTransformer}.
     */
    export type $ItemPropertiesTransformer_ = RegistryTypes.ElysiumApiItemPropertiesTransformer | { items?: $HolderSet_<$Item>, properties?: $ItemPropertiesTransformer$Properties_,  } | [items?: $HolderSet_<$Item>, properties?: $ItemPropertiesTransformer$Properties_, ];
}
