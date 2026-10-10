import { $ItemLike } from "@package/net/minecraft/world/level";
import { $Supplier_ } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $AbilitySetResolver, $AbilitySetResolver_ } from "@package/dev/obscuria/aquamirae/api/common/ability/resolver";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $VariableMap } from "@package/dev/obscuria/aquamirae/api/common/ability/variable";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
export * as variable from "@package/dev/obscuria/aquamirae/api/common/ability/variable";
export * as resolver from "@package/dev/obscuria/aquamirae/api/common/ability/resolver";

declare module "@package/dev/obscuria/aquamirae/api/common/ability" {
    export class $AbilitySet$Builder {
    }
    export interface $AbilitySet$Builder {
        displayName(arg0: $Component_): $AbilitySet$Builder;
        style(arg0: $AbilityStyle_): $AbilitySet$Builder;
        counter(arg0: $AbilityCounter_): $AbilitySet$Builder;
        build(): $AbilitySet;
        resolver(arg0: $AbilitySetResolver_): $AbilitySet$Builder;
        addTier(arg0: number, arg1: $Ability): $AbilitySet$Builder;
        addTier(arg0: number, arg1: $Ability, arg2: $AbilityPredicate_): $AbilitySet$Builder;
        addVariantTier(arg0: number, arg1: $Ability, arg2: $EquipmentSlot_, arg3: $Supplier_<$ItemLike>): $AbilitySet$Builder;
    }
    export class $Ability {
    }
    export interface $Ability {
        getDescription(): $Component;
        getFormattedDescription(arg0: $LivingEntity, arg1: boolean): $Component;
        getVariableMap(): $VariableMap;
        computeVariable(arg0: string, arg1: $LivingEntity): number;
        get description(): $Component;
        get variableMap(): $VariableMap;
    }
    export class $AbilityPredicate {
        static alwaysTrue(): $AbilityPredicate;
    }
    export interface $AbilityPredicate {
        test(arg0: $Holder_<$AbilitySet>, arg1: $LivingEntity): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AbilityPredicate}.
     */
    export type $AbilityPredicate_ = ((arg0: $Holder<$AbilitySet>, arg1: $LivingEntity) => boolean);
    export class $AbilityStyle {
    }
    export interface $AbilityStyle {
        texture(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AbilityStyle}.
     */
    export type $AbilityStyle_ = (() => $ResourceLocation_);
    export class $AbilitySetTier {
    }
    export interface $AbilitySetTier {
        shouldDisplay(arg0: $Item_): boolean;
        ability(): $Ability;
        shouldActivate(arg0: $Holder_<$AbilitySet>, arg1: $LivingEntity): boolean;
        requiredPieces(): number;
    }
    export class $AbilitySet {
        static builder(): $AbilitySet$Builder;
    }
    export interface $AbilitySet {
        displayName(): $Component;
        style(): $AbilityStyle;
        counter(): $AbilityCounter;
        resolver(): $AbilitySetResolver;
        tiers(): $List<$AbilitySetTier>;
    }
    /**
     * Values that may be interpreted as {@link $AbilitySet}.
     */
    export type $AbilitySet_ = RegistryTypes.AquamiraeAbilitySet;
    export interface $AbilitySet extends RegistryMarked<RegistryTypes.AquamiraeAbilitySetTag, RegistryTypes.AquamiraeAbilitySet> {}
    export class $AbilityCounter {
    }
    export interface $AbilityCounter {
        format(arg0: number, arg1: $Style): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AbilityCounter}.
     */
    export type $AbilityCounter_ = ((arg0: number, arg1: $Style) => $Component_);
}
