import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item$TooltipContext, $ItemStack_, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RegistrySupplier } from "@package/dev/architectury/registry/registries";
import { $List, $List_ } from "@package/java/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/net/sweenus/simplyswords/power" {
    export interface $GemPower extends RegistryMarked<RegistryTypes.SimplyswordsGemPowerTag, RegistryTypes.SimplyswordsGemPower> {}
    export class $PowerType extends $Enum<$PowerType> {
        static values(): $PowerType[];
        static valueOf(name: string): $PowerType;
        getEntries(): $List<$RegistrySupplier<$GemPower>>;
        static NETHER: $PowerType;
        static RUNIC: $PowerType;
        static RUNEFUSED: $PowerType;
        get entries(): $List<$RegistrySupplier<$GemPower>>;
    }
    /**
     * Values that may be interpreted as {@link $PowerType}.
     */
    export type $PowerType_ = "runic" | "runefused" | "nether";
    export class $GemPower implements $TooltipProvider {
        appendTooltip(itemStack: $ItemStack_, tooltipContext: $Item$TooltipContext, tooltip: $List_<$Component_>, type: $TooltipFlag, isRunic: boolean): void;
        addToTooltip(context: $Item$TooltipContext, tooltip: $Consumer_<$Component>, type: $TooltipFlag): void;
        isEmpty(): boolean;
        inventoryTick(stack: $ItemStack_, world: $Level_, user: $LivingEntity, slot: number, selected: boolean): void;
        isGreater(): boolean;
        postHit(stack: $ItemStack_, target: $LivingEntity, attacker: $LivingEntity): void;
        onSwing(stack: $ItemStack_, world: $ServerLevel, user: $LivingEntity, hand: $InteractionHand_): void;
        applicableTypes(): $List<$PowerType>;
        static EMPTY_ID: $ResourceLocation;
        static EMPTY: $GemPower;
        constructor(isGreater: boolean, ...applicableTypes: $PowerType_[]);
        get empty(): boolean;
        get greater(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GemPower}.
     */
    export type $GemPower_ = RegistryTypes.SimplyswordsGemPower;
}
