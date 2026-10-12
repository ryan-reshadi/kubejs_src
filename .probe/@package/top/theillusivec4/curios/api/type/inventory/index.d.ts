import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        grow(arg0: number): void;
        shrink(arg0: number): void;
        getSlots(): number;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getStackInSlot(arg0: number): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        getIdentifier(): string;
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        getSlots(): number;
        deserializeNBT(arg0: $CompoundTag_): void;
        getRenders(): $NonNullList<boolean>;
        removeModifier(arg0: $ResourceLocation_): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        isVisible(): boolean;
        serializeNBT(): $CompoundTag;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        clearModifiers(): void;
        getActiveStates(): $NonNullList<boolean>;
        getDropRule(): $ICurio$DropRule;
        getCosmeticStacks(): $IDynamicStackHandler;
        updateActiveState(arg0: number): void;
        hasCosmetic(): boolean;
        canToggleRendering(): boolean;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        getCachedModifiers(): $Set<$AttributeModifier>;
        clearCachedModifiers(): void;
        getSyncTag(): $CompoundTag;
        applySyncTag(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        get identifier(): string;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get slots(): number;
        get renders(): $NonNullList<boolean>;
        get visible(): boolean;
        get activeStates(): $NonNullList<boolean>;
        get dropRule(): $ICurio$DropRule;
        get cosmeticStacks(): $IDynamicStackHandler;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get syncTag(): $CompoundTag;
        get sizeShift(): number;
        get permanentModifiers(): $Set<$AttributeModifier>;
    }
}
