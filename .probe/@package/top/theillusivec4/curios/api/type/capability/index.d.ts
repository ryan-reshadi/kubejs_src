import { $Logger } from "@package/org/slf4j";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $ListTag, $ListTag_, $Tag } from "@package/net/minecraft/nbt";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $Map_, $Map, $Set } from "@package/java/util";
import { $Predicate_ } from "@package/java/util/function";
import { $SlotResult } from "@package/top/theillusivec4/curios/api";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ICurioStacksHandler } from "@package/top/theillusivec4/curios/api/type/inventory";

declare module "@package/top/theillusivec4/curios/api/type/capability" {
    export class $ICurio$DropRule extends $Enum<$ICurio$DropRule> {
        static values(): $ICurio$DropRule[];
        static valueOf(arg0: string): $ICurio$DropRule;
        static ALWAYS_KEEP: $ICurio$DropRule;
        static DESTROY: $ICurio$DropRule;
        static ALWAYS_DROP: $ICurio$DropRule;
        static DEFAULT: $ICurio$DropRule;
    }
    /**
     * Values that may be interpreted as {@link $ICurio$DropRule}.
     */
    export type $ICurio$DropRule_ = "default" | "always_drop" | "always_keep" | "destroy";
    export class $ICuriosItemHandler {
        static LOGGER: $Logger;
    }
    export interface $ICuriosItemHandler {
        findCurio(arg0: string, arg1: number): ($SlotResult) | undefined;
        findCurio(arg0: string, arg1: number, arg2: boolean): ($SlotResult) | undefined;
        writeTag(): $Tag;
        findCurios(arg0: boolean, ...arg1: string[]): $List<$SlotResult>;
        findCurios(arg0: $Predicate_<$ItemStack>): $List<$SlotResult>;
        findCurios(...arg0: string[]): $List<$SlotResult>;
        findCurios(arg0: $Predicate_<$ItemStack>, arg1: boolean, arg2: string): $List<$SlotResult>;
        findCurios(arg0: $Item_): $List<$SlotResult>;
        setCurios(arg0: $Map_<string, $ICurioStacksHandler>): void;
        getWearer(): $LivingEntity;
        readTag(arg0: $Tag_): void;
        reset(): void;
        getModifiers(): $Multimap<string, $AttributeModifier>;
        setEquippedCurio(arg0: string, arg1: number, arg2: $ItemStack_): void;
        addTransientSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        getUpdatingInventories(): $Set<$ICurioStacksHandler>;
        addTransientSlotModifier(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): void;
        addPermanentSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        addPermanentSlotModifier(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): void;
        clearCachedSlotModifiers(): void;
        handleInvalidStacks(): void;
        removeSlotModifiers(arg0: $Multimap<string, $AttributeModifier_>): void;
        findFirstCurio(arg0: $Item_): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Predicate_<$ItemStack>, arg1: string): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Predicate_<$ItemStack>): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Predicate_<$ItemStack>, arg1: boolean, arg2: string): ($SlotResult) | undefined;
        getVisibleSlots(): number;
        /**
         * @deprecated
         */
        processSlots(): void;
        /**
         * @deprecated
         */
        lockSlotType(arg0: string): void;
        /**
         * @deprecated
         */
        getFortuneBonus(): number;
        loseInvalidStack(arg0: $ItemStack_): void;
        loadInventory(arg0: $ListTag_): void;
        setSlotActive(arg0: string, arg1: number, arg2: boolean): void;
        /**
         * @deprecated
         */
        getLockedSlots(): $Set<string>;
        /**
         * @deprecated
         */
        growSlotType(arg0: string, arg1: number): void;
        /**
         * @deprecated
         */
        shrinkSlotType(arg0: string, arg1: number): void;
        setSlotsActive(arg0: string, arg1: boolean): void;
        saveInventory(arg0: boolean): $ListTag;
        removeSlotModifier(arg0: string, arg1: $ResourceLocation_): void;
        clearSlotModifiers(): void;
        isSlotActive(arg0: string, arg1: number): boolean;
        /**
         * @deprecated
         */
        unlockSlotType(arg0: string, arg1: number, arg2: boolean, arg3: boolean): void;
        getStacksHandler(arg0: string): ($ICurioStacksHandler) | undefined;
        getSlots(): number;
        getCurios(): $Map<string, $ICurioStacksHandler>;
        getLootingLevel(arg0: $LootContext | null): number;
        getEquippedCurios(): $IItemHandlerModifiable;
        getFortuneLevel(arg0: $LootContext | null): number;
        isEquipped(arg0: $Predicate_<$ItemStack>): boolean;
        isEquipped(arg0: $Item_): boolean;
        get wearer(): $LivingEntity;
        get modifiers(): $Multimap<string, $AttributeModifier>;
        get updatingInventories(): $Set<$ICurioStacksHandler>;
        get visibleSlots(): number;
        get fortuneBonus(): number;
        get lockedSlots(): $Set<string>;
        get slots(): number;
        get equippedCurios(): $IItemHandlerModifiable;
    }
}
