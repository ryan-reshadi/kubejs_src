import { $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $CraftingInput, $AbstractCookingRecipe, $CraftingInput$Positioned, $RecipeHolder_, $CraftingRecipe, $SingleRecipeInput, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $RecipeBookCategories } from "@package/net/minecraft/client";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Set_, $OptionalInt, $List, $List_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $SlotAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $BiFunction, $Predicate_, $Predicate, $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Registry, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $IMenuTypeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $AccessorMixinShulkerBoxMenu } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $MerchantOffer, $MerchantOffers, $Merchant } from "@package/net/minecraft/world/item/trading";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Stream } from "@package/java/util/stream";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MenuTypeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $MerchantMenuAccessor } from "@package/com/tepox/tradecycler/mixin";
import { $BlockEntity, $EnderChestBlockEntity, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
export * as tooltip from "@package/net/minecraft/world/inventory/tooltip";

declare module "@package/net/minecraft/world/inventory" {
    export class $FurnaceFuelSlot extends $Slot {
        static isBucket(stack: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(furnaceMenu: $AbstractFurnaceMenu, furnaceContainer: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $InventoryMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> {
        static isHotbarSlot(index: number): boolean;
        getCraftSlots(): $CraftingContainer;
        static CRAFT_SLOT_END: number;
        static BLOCK_ATLAS: $ResourceLocation;
        static EMPTY_ARMOR_SLOT_BOOTS: $ResourceLocation;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static USE_ROW_SLOT_START: number;
        static EMPTY_ARMOR_SLOT_CHESTPLATE: $ResourceLocation;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static CRAFT_SLOT_COUNT: number;
        static SHIELD_SLOT: number;
        static ARMOR_SLOT_START: number;
        static ARMOR_SLOT_COUNT: number;
        static INV_SLOT_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static CRAFT_SLOT_START: number;
        owner: $Player;
        static EMPTY_ARMOR_SLOT_HELMET: $ResourceLocation;
        active: boolean;
        lastSlots: $NonNullList<$ItemStack>;
        static ARMOR_SLOT_END: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static USE_ROW_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_SHIELD: $ResourceLocation;
        static SLOT_CLICKED_OUTSIDE: number;
        static INV_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_LEGGINGS: $ResourceLocation;
        static CONTAINER_ID: number;
        constructor(playerInventory: $Inventory, active: boolean, owner: $Player);
        get craftSlots(): $CraftingContainer;
    }
    export class $BeaconMenu$PaymentSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $MerchantResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(player: $Player, merchant: $Merchant, slots: $MerchantContainer, slot: number, xPosition: number, yPosition: number);
    }
    export class $SlotRanges {
        static singleSlotNames(): $Stream<string>;
        static allNames(): $Stream<string>;
        static nameToIds(name: string): $SlotRange;
        static CODEC: $Codec<$SlotRange>;
        constructor();
    }
    export class $ArmorSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $ResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(player: $Player, craftSlots: $CraftingContainer, container: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $HorseInventoryMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, inventory: $Inventory, horseContainer: $Container, horse: $AbstractHorse, columns: number);
    }
    export class $BrewingStandMenu$IngredientsSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $SmithingMenu extends $ItemCombinerMenu {
        canMoveIntoInputSlots(stack: $ItemStack_): boolean;
        static ADDITIONAL_SLOT: number;
        static TEMPLATE_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static ADDITIONAL_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static BASE_SLOT_X_PLACEMENT: number;
        static BASE_SLOT: number;
        containerId: number;
        static SLOT_Y_PLACEMENT: number;
        static TEMPLATE_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IMenuTypeExtension<T>, $MenuTypeKJS {
        requiredFeatures(): $FeatureFlagSet;
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        create(containerId: number, playerInventory: $Inventory): T;
        kjs$getKey(): $ResourceKey<any>;
        kjs$getId(): string;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<T>>;
        static ENCHANTMENT: $MenuType<$EnchantmentMenu>;
        static LOOM: $MenuType<$LoomMenu>;
        static BLAST_FURNACE: $MenuType<$BlastFurnaceMenu>;
        static CARTOGRAPHY_TABLE: $MenuType<$CartographyTableMenu>;
        static BEACON: $MenuType<$BeaconMenu>;
        static MERCHANT: $MenuType<$MerchantMenu>;
        static CRAFTER_3x3: $MenuType<$CrafterMenu>;
        static FURNACE: $MenuType<$FurnaceMenu>;
        static ANVIL: $MenuType<$AnvilMenu>;
        static STONECUTTER: $MenuType<$StonecutterMenu>;
        static GENERIC_3x3: $MenuType<$DispenserMenu>;
        static CRAFTING: $MenuType<$CraftingMenu>;
        static GENERIC_9x1: $MenuType<$ChestMenu>;
        static GENERIC_9x2: $MenuType<$ChestMenu>;
        static GENERIC_9x3: $MenuType<$ChestMenu>;
        static GENERIC_9x4: $MenuType<$ChestMenu>;
        static GENERIC_9x5: $MenuType<$ChestMenu>;
        static GENERIC_9x6: $MenuType<$ChestMenu>;
        static BREWING_STAND: $MenuType<$BrewingStandMenu>;
        static SMOKER: $MenuType<$SmokerMenu>;
        static SMITHING: $MenuType<$SmithingMenu>;
        static HOPPER: $MenuType<$HopperMenu>;
        static LECTERN: $MenuType<$LecternMenu>;
        static GRINDSTONE: $MenuType<$GrindstoneMenu>;
        static SHULKER_BOX: $MenuType<$ShulkerBoxMenu>;
        constructor(_constructor: $MenuType$MenuSupplier_<T>, requiredFeatures: $FeatureFlagSet);
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<T>>;
    }
    /**
     * Values that may be interpreted as {@link $MenuType}.
     */
    export type $MenuType_<T> = RegistryTypes.Menu;
    export class $MerchantContainer implements $Container {
        getActiveOffer(): $MerchantOffer;
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getFutureXp(): number;
        setSelectionHint(currentRecipeIndex: number): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        updateSellItem(): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        self(): $Container;
        getSlotLimit(slot: number): number;
        isMutable(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        asContainer(): $Container;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        constructor(merchant: $Merchant);
        get activeOffer(): $MerchantOffer;
        get futureXp(): number;
        set selectionHint(value: number);
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeaconMenu extends $AbstractContainerMenu {
        getLevels(): number;
        static encodeEffect(effect: $Holder_<$MobEffect> | null): number;
        getPrimaryEffect(): $Holder<$MobEffect>;
        getSecondaryEffect(): $Holder<$MobEffect>;
        updateEffects(primaryEffect: ($Holder_<$MobEffect>) | undefined, secondaryEffect: ($Holder_<$MobEffect>) | undefined): void;
        static decodeEffect(effectId: number): $Holder<$MobEffect>;
        hasPayment(): boolean;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, container: $Container);
        constructor(containerId: number, container: $Container, beaconData: $ContainerData, access: $ContainerLevelAccess_);
        get levels(): number;
        get primaryEffect(): $Holder<$MobEffect>;
        get secondaryEffect(): $Holder<$MobEffect>;
    }
    export class $CraftingMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> {
        /**
         * Reset the drag fields
         */
        beginPlacingRecipe(): void;
        finishPlacingRecipe(recipe: $RecipeHolder_<$CraftingRecipe>): void;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $CrafterSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(container: $Container, slot: number, x: number, y: number, menu: $CrafterMenu);
    }
    export class $ChestMenu extends $AbstractContainerMenu {
        getRowCount(): number;
        /**
         * Gets the inventory associated with this chest container.
         * 
         * @see #field_75155_e
         */
        getContainer(): $Container;
        static threeRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
        static threeRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static oneRow(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static fiveRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static twoRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static fourRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(type: $MenuType_<never>, containerId: number, playerInventory: $Inventory, container: $Container, rows: number);
        get rowCount(): number;
        get container(): $Container;
    }
    export class $SmokerMenu extends $AbstractFurnaceMenu {
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, smokerContainer: $Container, smokerData: $ContainerData);
    }
    export class $ClickAction extends $Enum<$ClickAction> {
        static values(): $ClickAction[];
        static valueOf(arg0: string): $ClickAction;
        static SECONDARY: $ClickAction;
        static PRIMARY: $ClickAction;
    }
    /**
     * Values that may be interpreted as {@link $ClickAction}.
     */
    export type $ClickAction_ = "primary" | "secondary";
    export class $BrewingStandMenu extends $AbstractContainerMenu {
        getBrewingTicks(): number;
        getFuel(): number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, brewingStandContainer: $Container, brewingStandData: $ContainerData);
        get brewingTicks(): number;
        get fuel(): number;
    }
    export class $BrewingStandMenu$PotionSlot extends $Slot {
        static mayPlaceItem(arg0: $PotionBrewing, arg1: $ItemStack_): boolean;
        /**
         * @deprecated
         * Check if the stack is allowed to be placed in this slot, used for armor slots as well as furnace fuel.
         */
        static mayPlaceItem(stack: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(container: $Container, slot: number, x: number, y: number);
        constructor(arg0: $PotionBrewing, arg1: $Container, arg2: number, arg3: number, arg4: number);
    }
    export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
    }
    export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
        create(containerId: number, playerInventory: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuType$MenuSupplier}.
     */
    export type $MenuType$MenuSupplier_<T> = ((arg0: number, arg1: $Inventory) => T);
    export class $LecternMenu extends $AbstractContainerMenu {
        getPage(): number;
        getBook(): $ItemStack;
        static BUTTON_PREV_PAGE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static BUTTON_PAGE_JUMP_RANGE_START: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static BUTTON_NEXT_PAGE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static BUTTON_TAKE_BOOK: number;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number);
        constructor(containerId: number, lectern: $Container, lecternData: $ContainerData);
        get page(): number;
        get book(): $ItemStack;
    }
    export class $CraftingContainer {
    }
    export interface $CraftingContainer extends $Container, $StackedContentsCompatible {
        asCraftInput(): $CraftingInput;
        getWidth(): number;
        getItems(): $List<$ItemStack>;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        getHeight(): number;
        get width(): number;
        get items(): $List<$ItemStack>;
        get height(): number;
    }
    export class $LoomMenu extends $AbstractContainerMenu {
        getResultSlot(): $Slot;
        getPatternSlot(): $Slot;
        getBannerSlot(): $Slot;
        getSelectedBannerPatternIndex(): number;
        getDyeSlot(): $Slot;
        getSelectablePatterns(): $List<$Holder<$BannerPattern>>;
        registerUpdateListener(listener: $Runnable_): void;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlot(): $Slot;
        get patternSlot(): $Slot;
        get bannerSlot(): $Slot;
        get selectedBannerPatternIndex(): number;
        get dyeSlot(): $Slot;
        get selectablePatterns(): $List<$Holder<$BannerPattern>>;
    }
    export class $DispenserMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
        constructor(containerId: number, playerInventory: $Inventory);
    }
    export class $StackedContentsCompatible {
    }
    export interface $StackedContentsCompatible {
        fillStackedContents(contents: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $StackedContentsCompatible}.
     */
    export type $StackedContentsCompatible_ = ((arg0: $StackedContents) => void);
    export class $ShulkerBoxSlot extends $Slot {
        handler$bho000$supplementaries$supp$preventInsertion(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(container: $Container, slot: number, x: number, y: number);
    }
    export class $PlayerEnderChestContainer extends $SimpleContainer {
        isActiveChest(enderChest: $EnderChestBlockEntity): boolean;
        setActiveChest(enderChestBlockEntity: $EnderChestBlockEntity): void;
        constructor();
    }
    export class $ItemCombinerMenuSlotDefinition {
        getResultSlotIndex(): number;
        getNumOfInputSlots(): number;
        getResultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        getSlot(slot: number): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        static create(): $ItemCombinerMenuSlotDefinition$Builder;
        hasSlot(slot: number): boolean;
        getInputSlotIndexes(): $List<number>;
        getSlots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        get resultSlotIndex(): number;
        get numOfInputSlots(): number;
        get resultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        get inputSlotIndexes(): $List<number>;
        get slots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
    }
    export class $SlotRange {
        static of(name: string, values: $IntList): $SlotRange;
    }
    export interface $SlotRange extends $StringRepresentable {
        size(): number;
        slots(): $IntList;
    }
    export class $MenuConstructor {
    }
    export interface $MenuConstructor {
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuConstructor}.
     */
    export type $MenuConstructor_ = ((arg0: number, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu);
    export class $ContainerData {
    }
    export interface $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        get count(): number;
    }
    export class $EnchantmentMenu extends $AbstractContainerMenu {
        getGoldCount(): number;
        getEnchantmentSeed(): number;
        costs: number[];
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        enchantClue: number[];
        containerId: number;
        levelClue: number[];
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get goldCount(): number;
        get enchantmentSeed(): number;
    }
    export class $ContainerLevelAccess {
        static create(level: $Level_, pos: $BlockPos_): $ContainerLevelAccess;
        static NULL: $ContainerLevelAccess;
    }
    export interface $ContainerLevelAccess {
        execute(levelPosConsumer: $BiConsumer_<$Level, $BlockPos>): void;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>, defaultValue: T): T;
    }
    /**
     * Values that may be interpreted as {@link $ContainerLevelAccess}.
     */
    export type $ContainerLevelAccess_ = ((arg0: $BiFunction<$Level, $BlockPos, any>) => (T) | undefined);
    export class $CartographyTableMenu extends $AbstractContainerMenu {
        handler$bfn000$supplementaries$supp$getItem(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $Level_, arg4: $BlockPos_, arg5: $CallbackInfo, arg6: $MapItemSavedData): void;
        handler$bfn000$supplementaries$supp$getItem(arg0: $Player, arg1: number, arg2: $CallbackInfoReturnable<any>, arg3: $ItemStack_, arg4: $Slot, arg5: $ItemStack_): void;
        container: $Container;
        static ADDITIONAL_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static MAP_SLOT: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $ItemCombinerMenu extends $AbstractContainerMenu {
        /**
         * Called when the Anvil Input Slot changes, calculates the new result and puts it in the output slot.
         */
        createResult(): void;
        getResultSlot(): number;
        getSlotToQuickMoveTo(stack: $ItemStack_): number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(type: $MenuType_<never> | null, containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlot(): number;
    }
    export class $ResultContainer implements $Container, $RecipeCraftingHolder {
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        getRecipeUsed(): $RecipeHolder<never>;
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        self(): $Container;
        getSlotLimit(slot: number): number;
        isMutable(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        asContainer(): $Container;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        constructor();
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $FurnaceMenu extends $AbstractFurnaceMenu {
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, furnaceContainer: $Container, furnaceData: $ContainerData);
    }
    export class $AbstractFurnaceMenu extends $RecipeBookMenu<$SingleRecipeInput, $AbstractCookingRecipe> {
        getLitProgress(): number;
        getBurnProgress(): number;
        isLit(): boolean;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        get litProgress(): number;
        get burnProgress(): number;
        get lit(): boolean;
    }
    export class $HopperMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static CONTAINER_SIZE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
        constructor(containerId: number, playerInventory: $Inventory);
    }
    export class $SimpleContainerData implements $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        constructor(size: number);
        get count(): number;
    }
    export class $StonecutterMenu extends $AbstractContainerMenu {
        /**
         * Returns the index of the selected recipe.
         */
        getNumRecipes(): number;
        hasInputItem(): boolean;
        getRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        registerUpdateListener(listener: $Runnable_): void;
        /**
         * Returns the index of the selected recipe.
         */
        getSelectedRecipeIndex(): number;
        static INPUT_SLOT: number;
        container: $Container;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get numRecipes(): number;
        get recipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        get selectedRecipeIndex(): number;
    }
    export class $ShulkerBoxMenu extends $AbstractContainerMenu implements $AccessorMixinShulkerBoxMenu {
        lootr$getShulkerMenuContainer(): $Container;
        container: $Container;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $AbstractContainerMenu {
        isValidSlotIndex(slotIndex: number): boolean;
        /**
         * Callback for when the crafting matrix is changed.
         */
        slotsChanged(container: $Container): void;
        initializeContents(stateId: number, items: $List_<$ItemStack_>, carried: $ItemStack_): void;
        /**
         * Handles the given Button-click on the server, currently only used by enchanting. Name is for legacy.
         */
        clickMenuButton(player: $Player, id: number): boolean;
        removeSlotListener(listener: $ContainerListener): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastFullState(): void;
        setRemoteCarried(stack: $ItemStack_): void;
        /**
         * Handle when the stack in slot `index` is shift-clicked. Normally this moves the stack between the player inventory and the other inventory(s).
         */
        quickMoveStack(player: $Player, index: number): $ItemStack;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftType(clickedButton: number): number;
        static getQuickcraftMask(quickCraftingHeader: number, quickCraftingType: number): number;
        incrementStateId(): number;
        getType(): $MenuType<never>;
        getSlot(slotId: number): $Slot;
        /**
         * Called when the container is closed.
         */
        removed(player: $Player): void;
        findSlot(container: $Container, slotIndex: number): $OptionalInt;
        /**
         * Puts an ItemStack in a slot.
         */
        setItem(slotId: number, stateId: number, stack: $ItemStack_): void;
        wrapOperation$cgb000$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        wrapOperation$cgb000$geckolib$forceGeckolibSlotChange(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        /**
         * Determines whether supplied player can use this container
         */
        stillValid(player: $Player): boolean;
        wrapOperation$cgb000$geckolib$forceGeckolibIdSync(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        setData(id: number, data: number): void;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftHeader(clickedButton: number): number;
        setRemoteSlotNoCopy(slot: number, stack: $ItemStack_): void;
        static isValidQuickcraftType(dragMode: number, player: $Player): boolean;
        /**
         * Called to determine if the current slot is valid for the stack merging (double-click) code. The stack passed in is null for the initial slot that was double-clicked.
         */
        canTakeItemForPickAll(stack: $ItemStack_, slot: $Slot): boolean;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        sendAllDataToRemote(): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        resumeRemoteUpdates(): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        suppressRemoteUpdates(): void;
        static getQuickCraftPlaceCount(slots: $Set_<$Slot>, type: number, stack: $ItemStack_): number;
        /**
         * Checks if it's possible to add the given itemstack to the given slot.
         */
        static canItemQuickReplace(slot: $Slot | null, stack: $ItemStack_, stackSizeMatters: boolean): boolean;
        addSlotListener(listener: $ContainerListener): void;
        transferState(menu: $AbstractContainerMenu): void;
        setSynchronizer(synchronizer: $ContainerSynchronizer): void;
        /**
         * Returns a list if `ItemStacks`, for each slot.
         */
        getItems(): $NonNullList<$ItemStack>;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastChanges(): void;
        setCarried(stack: $ItemStack_): void;
        getCarried(): $ItemStack;
        setRemoteSlot(slot: number, stack: $ItemStack_): void;
        static getRedstoneSignalFromContainer(container: $Container | null): number;
        /**
         * Like the version that takes an inventory. If the given BlockEntity is not an Inventory, 0 is returned instead.
         */
        static getRedstoneSignalFromBlockEntity(blockEntity: $BlockEntity | null): number;
        getStateId(): number;
        clicked(slotId: number, button: number, clickType: $ClickType_, player: $Player): void;
        /**
         * Returns `true` if the player can "drag-spilt" items into this slot. Returns `true` by default. Called to check if the slot can be added to a list of Slots to split the held ItemStack across.
         */
        canDragTo(slot: $Slot): boolean;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        set remoteCarried(value: $ItemStack_);
        get type(): $MenuType<never>;
        set synchronizer(value: $ContainerSynchronizer);
        get items(): $NonNullList<$ItemStack>;
        get stateId(): number;
    }
    export class $Slot implements $SlotAccessor {
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        setByPlayer(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        setByPlayer(stack: $ItemStack_): void;
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        onQuickCraft(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getContainerSlot(): number;
        setBackground(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Slot;
        getNoItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        /**
         * Returns if this slot contains a stack.
         */
        isHighlightable(): boolean;
        isSameInventory(arg0: $Slot): boolean;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getSlotIndex(): number;
        /**
         * Decrease the size of the stack in slot (first int arg) by the amount of the second int arg. Returns the new stack.
         */
        remove(amount: number): $ItemStack;
        set(stack: $ItemStack_): void;
        /**
         * Returns if this slot contains a stack.
         */
        isActive(): boolean;
        /**
         * Helper function to get the stack in the slot.
         */
        getItem(): $ItemStack;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getMaxStackSize(): number;
        /**
         * Returns if this slot contains a stack.
         */
        isFake(): boolean;
        /**
         * Called when the stack in a Slot changes
         */
        setChanged(): void;
        /**
         * Returns if this slot contains a stack.
         */
        hasItem(): boolean;
        /**
         * Check if the stack is allowed to be placed in this slot, used for armor slots as well as furnace fuel.
         */
        mayPlace(stack: $ItemStack_): boolean;
        mayPickup(player: $Player): boolean;
        safeInsert(stack: $ItemStack_): $ItemStack;
        safeInsert(stack: $ItemStack_, increment: number): $ItemStack;
        tryRemove(count: number, decrement: number, player: $Player): ($ItemStack) | undefined;
        safeTake(count: number, decrement: number, player: $Player): $ItemStack;
        onTake(stack: $Player, arg1: $ItemStack_): void;
        allowModification(player: $Player): boolean;
        setY(numItemsCrafted: number): void;
        setX(numItemsCrafted: number): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(container: $Container, slot: number, x: number, y: number);
        get containerSlot(): number;
        get noItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        get highlightable(): boolean;
        get slotIndex(): number;
        get active(): boolean;
        get item(): $ItemStack;
        get fake(): boolean;
    }
    export class $DataSlot {
        get(): number;
        set(value: number): void;
        static shared(data: number[], idx: number): $DataSlot;
        static standalone(): $DataSlot;
        checkAndClearUpdateFlag(): boolean;
        static forContainer(data: $ContainerData, idx: number): $DataSlot;
        constructor();
    }
    export class $BrewingStandMenu$FuelSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
        static values(): $RecipeBookType[];
        static valueOf(arg0: string): $RecipeBookType;
        static getExtensionInfo(): $ExtensionInfo;
        static FURNACE: $RecipeBookType;
        static BLAST_FURNACE: $RecipeBookType;
        static SMOKER: $RecipeBookType;
        static FARMERSDELIGHT_COOKING: $RecipeBookType;
        static CRAFTING: $RecipeBookType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookType}.
     */
    export type $RecipeBookType_ = "crafting" | "furnace" | "blast_furnace" | "smoker" | "farmersdelight_cooking";
    export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
        x(): number;
        y(): number;
        slotIndex(): number;
        mayPlace(): $Predicate<$ItemStack>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemCombinerMenuSlotDefinition$SlotDefinition}.
     */
    export type $ItemCombinerMenuSlotDefinition$SlotDefinition_ = { mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number, x?: number, y?: number,  } | [mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number, x?: number, y?: number, ];
    export class $ClickType extends $Enum<$ClickType> {
        static values(): $ClickType[];
        static valueOf(arg0: string): $ClickType;
        static QUICK_MOVE: $ClickType;
        static SWAP: $ClickType;
        static PICKUP_ALL: $ClickType;
        static THROW: $ClickType;
        static QUICK_CRAFT: $ClickType;
        static PICKUP: $ClickType;
        static CLONE: $ClickType;
    }
    /**
     * Values that may be interpreted as {@link $ClickType}.
     */
    export type $ClickType_ = "pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all";
    export class $TransientCraftingContainer implements $CraftingContainer {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        fillStackedContents(contents: $StackedContents): void;
        getItems(): $List<$ItemStack>;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        startOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        self(): $Container;
        getSlotLimit(slot: number): number;
        isMutable(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        asContainer(): $Container;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        menu: $AbstractContainerMenu;
        constructor(menu: $AbstractContainerMenu, width: number, height: number);
        constructor(menu: $AbstractContainerMenu, width: number, height: number, items: $NonNullList<$ItemStack_>);
        get containerSize(): number;
        get items(): $List<$ItemStack>;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ContainerSynchronizer {
    }
    export interface $ContainerSynchronizer {
        sendInitialData(container: $AbstractContainerMenu, items: $NonNullList<$ItemStack_>, carriedItem: $ItemStack_, initialData: number[]): void;
        sendDataChange(container: $AbstractContainerMenu, id: number, value: number): void;
        sendSlotChange(container: $AbstractContainerMenu, slot: number, itemStack: $ItemStack_): void;
        sendCarriedChange(containerMenu: $AbstractContainerMenu, stack: $ItemStack_): void;
    }
    export class $MerchantMenu extends $AbstractContainerMenu implements $MerchantMenuAccessor {
        tryMoveItems(level: number): void;
        showProgressBar(): boolean;
        getTraderXp(): number;
        getFutureTraderXp(): number;
        setSelectionHint(level: number): void;
        setShowProgressBar(canRestock: boolean): void;
        setMerchantLevel(level: number): void;
        setCanRestock(canRestock: boolean): void;
        getTraderLevel(): number;
        setXp(level: number): void;
        /**
         * `ClientPacketListener` uses this to set offers for the client side MerchantContainer.
         */
        setOffers(offers: $MerchantOffers): void;
        canRestock(): boolean;
        getOffers(): $MerchantOffers;
        tepox$getTrader(): $Merchant;
        tepox$getTradeContainer(): $MerchantContainer;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, trader: $Merchant);
        get traderXp(): number;
        get futureTraderXp(): number;
        set selectionHint(value: number);
        set merchantLevel(value: number);
        get traderLevel(): number;
        set xp(value: number);
    }
    export class $GrindstoneMenu extends $AbstractContainerMenu {
        computeResult(inputItem: $ItemStack_, additionalItem: $ItemStack_): $ItemStack;
        static INPUT_SLOT: number;
        static ADDITIONAL_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $RecipeCraftingHolder {
    }
    export interface $RecipeCraftingHolder {
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        getRecipeUsed(): $RecipeHolder<never>;
    }
    export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<I>> extends $AbstractContainerMenu {
        handlePlacement(placeAll: boolean, recipe: $RecipeHolder_<never>, player: $ServerPlayer): void;
        recipeMatches(recipe: $RecipeHolder_<R>): boolean;
        getGridHeight(): number;
        getRecipeBookType(): $RecipeBookType;
        getGridWidth(): number;
        getResultSlotIndex(): number;
        getSize(): number;
        fillCraftSlotsStackedContents(itemHelper: $StackedContents): void;
        getRecipeBookCategories(): $List<$RecipeBookCategories>;
        /**
         * Reset the drag fields
         */
        clearCraftingContent(): void;
        shouldMoveToInventory(slotIndex: number): boolean;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(menuType: $MenuType_<never>, containerId: number);
        get gridHeight(): number;
        get recipeBookType(): $RecipeBookType;
        get gridWidth(): number;
        get resultSlotIndex(): number;
        get size(): number;
        get recipeBookCategories(): $List<$RecipeBookCategories>;
    }
    export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener {
        setSlotState(slot: number, enabled: boolean): void;
        isSlotDisabled(slot: number): boolean;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        isPowered(): boolean;
        getContainer(): $Container;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $CraftingContainer, containerData: $ContainerData);
        get powered(): boolean;
        get container(): $Container;
    }
    export class $NonInteractiveResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $FurnaceResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(player: $Player, container: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, blastFurnaceContainer: $Container, blastFurnaceData: $ContainerData);
    }
    export class $AnvilMenu extends $ItemCombinerMenu {
        setItemName(itemName: string): boolean;
        setMaximumCost(arg0: number): void;
        static calculateIncreasedRepairCost(oldRepairCost: number): number;
        /**
         * Gets the maximum xp cost
         */
        getCost(): number;
        static INPUT_SLOT: number;
        repairItemCountCost: number;
        static ADDITIONAL_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        itemName: string;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        set maximumCost(value: number);
        get cost(): number;
    }
    export interface $MenuType<T> extends RegistryMarked<RegistryTypes.MenuTag, RegistryTypes.Menu> {}
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
    }
    export class $ItemCombinerMenuSlotDefinition$Builder {
        withResultSlot(slotIndex: number, x: number, y: number): $ItemCombinerMenuSlotDefinition$Builder;
        build(): $ItemCombinerMenuSlotDefinition;
        withSlot(slotIndex: number, x: number, y: number, mayPlace: $Predicate_<$ItemStack>): $ItemCombinerMenuSlotDefinition$Builder;
        constructor();
    }
}
