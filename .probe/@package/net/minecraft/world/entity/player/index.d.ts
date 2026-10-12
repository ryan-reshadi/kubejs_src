import { $EntityDynamicLightSource } from "@package/dev/lambdaurora/lambdynlights/engine/source";
import { $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ListTag_, $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $HumanoidArm, $Pose_, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState, $HumanoidArm_, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AnimationStack, $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";
import { $SignatureValidator_, $Unit, $SignatureValidator, $OptionEnum } from "@package/net/minecraft/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $InteractionResult, $MenuProvider, $InteractionHand, $InteractionHand_, $Nameable, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $IPlayerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $NotificationToastData_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PlayerEnderChestContainer, $AbstractContainerMenu, $ClickAction_, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $ExtensionPlayer } from "@package/dev/obscuria/aquamirae/integration/extension";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";
import { $Item_, $Item, $ItemCooldowns, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $ThrowingComponent, $Component } from "@package/net/minecraft/network/chat";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $AnimationApplier } from "@package/dev/kosmx/playerAnim/impl/animation";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $Instant, $Duration_, $Duration } from "@package/java/time";
import { $IAnimatedPlayer } from "@package/dev/kosmx/playerAnim/impl";
import { $PlayerTypewriterExtension, $PlayerLaunchedPlungerExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $EntityPlayerAccessor } from "@package/gg/essential/mixins/transformers/entity/player";
import { $InventoryKJS, $PlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $Stat_ } from "@package/net/minecraft/stats";
import { $Vector3dc } from "@package/org/joml";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Set_, $OptionalInt, $UUID, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $WardenSpawnTracker } from "@package/net/minecraft/world/entity/monster/warden";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $HolderLookup$Provider, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $IntList, $Int2IntMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $GameType_, $BaseCommandBlock, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $PrivateKey, $PublicKey } from "@package/java/security";
import { $PlayerAccessor } from "@package/net/mehvahdjukaar/supplementaries/mixins";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $ETFPlayerEntity } from "@package/traben/entity_texture_features/features/player";
import { $SignBlockEntity, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/player" {
    export class $ProfileKeyPair extends $Record {
        publicKey(): $ProfilePublicKey;
        refreshedAfter(): $Instant;
        privateKey(): $PrivateKey;
        dueRefresh(): boolean;
        static CODEC: $Codec<$ProfileKeyPair>;
        constructor(arg0: $PrivateKey, arg1: $ProfilePublicKey_, arg2: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $ProfileKeyPair}.
     */
    export type $ProfileKeyPair_ = { refreshedAfter?: $Instant, publicKey?: $ProfilePublicKey_, privateKey?: $PrivateKey,  } | [refreshedAfter?: $Instant, publicKey?: $ProfilePublicKey_, privateKey?: $PrivateKey, ];
    export class $ProfilePublicKey$Data extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        key(): $PublicKey;
        hasExpired(gracePeriod: $Duration_): boolean;
        hasExpired(): boolean;
        expiresAt(): $Instant;
        keySignature(): number[];
        static CODEC: $Codec<$ProfilePublicKey$Data>;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $Instant, arg1: $PublicKey, arg2: number[]);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey$Data}.
     */
    export type $ProfilePublicKey$Data_ = { expiresAt?: $Instant, key?: $PublicKey, keySignature?: number[],  } | [expiresAt?: $Instant, key?: $PublicKey, keySignature?: number[], ];
    export class $Abilities {
        setFlyingSpeed(flyingSpeed: number): void;
        addSaveData(compound: $CompoundTag_): void;
        loadSaveData(compound: $CompoundTag_): void;
        getWalkingSpeed(): number;
        setWalkingSpeed(flyingSpeed: number): void;
        getFlyingSpeed(): number;
        invulnerable: boolean;
        /**
         * @deprecated
         */
        mayfly: boolean;
        instabuild: boolean;
        mayBuild: boolean;
        flying: boolean;
        constructor();
    }
    export class $Inventory implements $Container, $Nameable {
        hasAnyMatching(predicate: $Predicate_<any>): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getTimesChanged(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getFreeSlot(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        static getSelectionSize(): number;
        getName(): $Component;
        /**
         * Reads from the given tag list and fills the slots in the inventory with the correct items.
         */
        load(listTag: $ListTag_): void;
        isEmpty(): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(stack: $ItemStack_): boolean;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(slot: number, stack: $ItemStack_): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        contains(stack: $ItemStack_): boolean;
        contains(predicate: $Predicate_<$ItemStack>): boolean;
        contains(tag: $TagKey_<$Item>): boolean;
        /**
         * Writes the inventory out as a list of compound tags. This is where the slot indices are used (+100 for armor, +80 for crafting).
         */
        save(listTag: $ListTag_): $ListTag;
        /**
         * Copy the ItemStack contents from another InventoryPlayer instance
         */
        replaceWith(playerInventory: $Inventory): void;
        /**
         * Drop all armor and main inventory items.
         */
        tick(): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getItem(slot: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        removeItem(stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        handler$dnd000$moonlight$ml$fireDropEvent(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        /**
         * Drop all armor and main inventory items.
         */
        dropAll(): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingItem(stack: $ItemStack_): number;
        addResource(slot: number, stack: $ItemStack_): number;
        /**
         * Returns the item stack currently held by the player.
         */
        getSelected(): $ItemStack;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        getDestroySpeed(state: $BlockState_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        handler$dnd000$moonlight$ml$restoreNotDropped(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        static isHotbarSlot(index: number): boolean;
        setPickedItem(stack: $ItemStack_): void;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingUnusedItem(stack: $ItemStack_): number;
        clearOrCountMatchingItems(stackPredicate: $Predicate_<$ItemStack>, maxCount: number, inventory: $Container): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSuitableHotbarSlot(): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getSlotWithRemainingSpace(stack: $ItemStack_): number;
        hasRemainingSpaceForItem(destination: $ItemStack_, origin: $ItemStack_): boolean;
        placeItemBackInInventory(stack: $ItemStack_, sendPacket: boolean): void;
        placeItemBackInInventory(stack: $ItemStack_): void;
        fillStackedContents(stackedContent: $StackedContents): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getArmor(slot: number): $ItemStack;
        pickSlot(index: number): void;
        /**
         * Change the selected item in the hotbar after a mouse scroll. Select the slot to the left if `direction` is positive, or to the right if negative.
         */
        swapPaint(direction: number): void;
        /**
         * Drop all armor and main inventory items.
         */
        clearContent(): void;
        /**
         * Drop all armor and main inventory items.
         */
        setChanged(): void;
        removeFromSelected(removeStack: boolean): $ItemStack;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
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
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        getCustomName(): $Component;
        self(): $Container;
        getSlotLimit(slot: number): number;
        isMutable(): boolean;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
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
         * Drop all armor and main inventory items.
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
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Drop all armor and main inventory items.
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
        static NOT_FOUND_INDEX: number;
        armor: $NonNullList<$ItemStack>;
        static INVENTORY_SIZE: number;
        static POP_TIME_DURATION: number;
        static SLOT_OFFHAND: number;
        static ALL_ARMOR_SLOTS: number[];
        items: $NonNullList<$ItemStack>;
        offhand: $NonNullList<$ItemStack>;
        selected: number;
        static HELMET_SLOT_ONLY: number[];
        player: $Player;
        constructor(player: $Player);
        get timesChanged(): number;
        get freeSlot(): number;
        static get selectionSize(): number;
        get name(): $Component;
        get containerSize(): number;
        set pickedItem(value: $ItemStack_);
        get suitableHotbarSlot(): number;
        get displayName(): $Component;
        get customName(): $Component;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $PlayerModelPart extends $Enum<$PlayerModelPart> {
        getName(): $Component;
        static values(): $PlayerModelPart[];
        static valueOf(arg0: string): $PlayerModelPart;
        getId(): string;
        getMask(): number;
        getBit(): number;
        static RIGHT_PANTS_LEG: $PlayerModelPart;
        static LEFT_PANTS_LEG: $PlayerModelPart;
        static JACKET: $PlayerModelPart;
        static RIGHT_SLEEVE: $PlayerModelPart;
        static HAT: $PlayerModelPart;
        static LEFT_SLEEVE: $PlayerModelPart;
        static CAPE: $PlayerModelPart;
        get id(): string;
        get mask(): number;
        get bit(): number;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelPart}.
     */
    export type $PlayerModelPart_ = "cape" | "jacket" | "left_sleeve" | "right_sleeve" | "left_pants_leg" | "right_pants_leg" | "hat";
    export class $StackedContents$RecipePicker {
    }
    export class $ProfilePublicKey extends $Record {
        data(): $ProfilePublicKey$Data;
        createSignatureValidator(): $SignatureValidator;
        static createValidated(signatureValidator: $SignatureValidator_, profileId: $UUID_, data: $ProfilePublicKey$Data_): $ProfilePublicKey;
        static EXPIRED_PROFILE_PUBLIC_KEY: $Component;
        static EXPIRY_GRACE_PERIOD: $Duration;
        static TRUSTED_CODEC: $Codec<$ProfilePublicKey>;
        constructor(arg0: $ProfilePublicKey$Data_);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey}.
     */
    export type $ProfilePublicKey_ = { data?: $ProfilePublicKey$Data_,  } | [data?: $ProfilePublicKey$Data_, ];
    export class $Player$BedSleepingProblem extends $Enum<$Player$BedSleepingProblem> {
        static values(): $Player$BedSleepingProblem[];
        static valueOf(arg0: string): $Player$BedSleepingProblem;
        getMessage(): $Component;
        static OBSTRUCTED: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_HERE: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_NOW: $Player$BedSleepingProblem;
        static NOT_SAFE: $Player$BedSleepingProblem;
        static OTHER_PROBLEM: $Player$BedSleepingProblem;
        static TOO_FAR_AWAY: $Player$BedSleepingProblem;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Player$BedSleepingProblem}.
     */
    export type $Player$BedSleepingProblem_ = "not_possible_here" | "not_possible_now" | "too_far_away" | "obstructed" | "other_problem" | "not_safe";
    export class $ChatVisiblity extends $Enum<$ChatVisiblity> implements $OptionEnum {
        static values(): $ChatVisiblity[];
        static valueOf(arg0: string): $ChatVisiblity;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ChatVisiblity;
        getCaption(): $Component;
        static SYSTEM: $ChatVisiblity;
        static HIDDEN: $ChatVisiblity;
        static FULL: $ChatVisiblity;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatVisiblity}.
     */
    export type $ChatVisiblity_ = "full" | "system" | "hidden";
    export class $StackedContents {
        accountSimpleStack(stack: $ItemStack_): void;
        accountStack(stack: $ItemStack_): void;
        accountStack(stack: $ItemStack_, amount: number): void;
        clear(): void;
        static getStackingIndex(stack: $ItemStack_): number;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null, amount: number): boolean;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null): boolean;
        static fromStackingIndex(stackingIndex: number): $ItemStack;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, amount: number, stackingIndexList: $IntList | null): number;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, stackingIndexList: $IntList | null): number;
        contents: $Int2IntMap;
        constructor();
    }
    export class $ProfilePublicKey$ValidationException extends $ThrowingComponent {
        constructor(arg0: $Component_);
    }
    export class $Player extends $LivingEntity implements $IPlayerExtension, $IAnimatedPlayer, $PlayerTypewriterExtension, $PlayerLaunchedPlungerExtension, $PlayerAccessor, $IQuiverEntity, $ETFPlayerEntity, $EntityDynamicLightSource, $Trackable, $PlayerFreezeExtension, $ExtensionPlayer, $EntityPlayerAccessor, $PlayerKJS {
        getPrefixes(): $Collection<$MutableComponent>;
        handler$bde002$fdbosses$tick(arg0: $CallbackInfo): void;
        handler$dki006$simplyswords$tick(ci: $CallbackInfo): void;
        /**
         * Add experience levels to this player.
         */
        setScore(levels: number): void;
        /**
         * Add a stat once
         */
        resetStat(stat: $Stat_<never>): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getScore(): number;
        openMenu(menu: $MenuProvider | null): $OptionalInt;
        interactOn(entityToInteractOn: $Entity, hand: $InteractionHand_): $InteractionResult;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        crit(target: $Entity): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        magicCrit(target: $Entity): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayBuild(): boolean;
        canEat(canAlwaysEat: boolean): boolean;
        setMainArm(hand: $HumanoidArm_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isScoping(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isHurt(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetAttackStrengthTicker(): void;
        displayClientMessage(chatComponent: $Component_, actionBar: boolean): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isTextFilteringEnabled(): boolean;
        addItem(stack: $ItemStack_): boolean;
        canHarmPlayer(other: $Player): boolean;
        /**
         * Returns the player's FoodStats object.
         */
        getFoodData(): $FoodData;
        openItemGui(stack: $ItemStack_, hand: $InteractionHand_): void;
        sendMerchantOffers(containerId: number, offers: $MerchantOffers, villagerLevel: number, villagerXp: number, showProgress: boolean, canRestock: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sweepAttack(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopFallFlying(): void;
        /**
         * Returns whether this player can modify the block at a certain location with the given stack.
         * 
         * The position being queried is `pos.offset(facing.getOpposite())`.
         * 
         * @return Whether this player may modify the queried location in the current world
         * @see ItemStack#canPlaceOn(Block)
         * @see ItemStack#canEditBlocks()
         * @see PlayerCapabilities#allowEdit
         */
        mayUseItemAt(pos: $BlockPos_, facing: $Direction_, stack: $ItemStack_): boolean;
        openHorseInventory(horse: $AbstractHorse, inventory: $Container): void;
        openStructureBlock(structureEntity: $StructureBlockEntity): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        disableShield(): void;
        openJigsawBlock(jigsawBlockEntity: $JigsawBlockEntity): void;
        startSleepInBed(bedPos: $BlockPos_): $Either<$Player$BedSleepingProblem, $Unit>;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSleepTimer(): number;
        awardRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        hasContainerOpen(): boolean;
        resetRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getEnchantmentSeed(): number;
        awardRecipesByKey(recipes: $List_<$ResourceLocation_>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startFallFlying(): void;
        openCommandBlock(commandBlockEntity: $CommandBlockEntity): void;
        openTextEdit(signEntity: $SignBlockEntity, isFrontText: boolean): void;
        getEnchantedDamage(entity: $Entity, damage: number, damageSource: $DamageSource_): number;
        sable$freezeTo(arg0: $UUID_, arg1: $Vector3dc): void;
        playNotifySound(sound: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number): void;
        getDigSpeed(arg0: $BlockState_, arg1: $BlockPos_ | null): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        closeMenu(): void;
        /**
         * Add experience levels to this player.
         */
        increaseScore(levels: number): void;
        /**
         * @deprecated
         */
        getDestroySpeed(state: $BlockState_): number;
        static createAttributes(): $AttributeSupplier$Builder;
        stopSleepInBed(wakeImmediately: boolean, updateLevelForSleepingPlayers: boolean): void;
        blockActionRestricted(level: $Level_, pos: $BlockPos_, gameMode: $GameType_): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSecondaryUseActive(): boolean;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityLeft(): $CompoundTag;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityRight(): $CompoundTag;
        startAutoSpinAttack(ticks: number, damage: number, itemStack: $ItemStack_): void;
        setLastDeathLocation(lastDeathLocation: ($GlobalPos_) | undefined): void;
        /**
         * @deprecated
         */
        hasCorrectToolForDrops(state: $BlockState_): boolean;
        hasCorrectToolForDrops(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        entityInteractionRange(): number;
        /**
         * Returns the percentage of attack power available based on the cooldown (zero to one).
         */
        getAttackStrengthScale(adjustTicks: number): number;
        getWardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        setReducedDebugInfo(ignoreFallDamageFromCurrentImpulse: boolean): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpNeededForNextLevel(): number;
        /**
         * Returns the InventoryEnderChest of this player.
         */
        getEnderChestInventory(): $PlayerEnderChestContainer;
        causeFoodExhaustion(yaw: number): void;
        openMinecartCommandBlock(commandEntity: $BaseCommandBlock): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSleepingLongEnough(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetCurrentImpulseContext(): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        tryToStartFallFlying(): boolean;
        /**
         * Add experience levels to this player.
         */
        giveExperiencePoints(levels: number): void;
        triggerRecipeCrafted(recipe: $RecipeHolder_<never>, items: $List_<$ItemStack_>): void;
        onEnchantmentPerformed(enchantedItem: $ItemStack_, levelCost: number): void;
        setEntityOnShoulder(entityCompound: $CompoundTag_): boolean;
        /**
         * Add experience levels to this player.
         */
        giveExperienceLevels(levels: number): void;
        getLastDeathLocation(): ($GlobalPos) | undefined;
        redirect$egh000$sable$fixRidingBoundingBox(arg0: $AABB_, arg1: $AABB_): $AABB;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isIgnoringFallDamageFromCurrentImpulse(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        simplySwords$invokeDropShoulderEntities(): void;
        handler$bde000$fdbosses$wantsToStopRiding(arg0: $CallbackInfoReturnable<any>): void;
        handler$bde000$fdbosses$actuallyHurt(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfo): void;
        static getPlayerModelFlag$essential_$md$b7e275$1(): $EntityDataAccessor<any>;
        handler$dki000$simplyswords$tickMovement(ci: $CallbackInfo): void;
        setIgnoreFallDamageFromCurrentImpulse(ignoreFallDamageFromCurrentImpulse: boolean): void;
        getInventory(): $Inventory;
        getAbilities(): $Abilities;
        getCooldowns(): $ItemCooldowns;
        /**
         * Returns the GameProfile for this player
         */
        getGameProfile(): $GameProfile;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isReducedDebugInfo(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isLocalPlayer(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        respawn(): void;
        /**
         * Checks, whether the player is in Creative mode.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isCreative(): boolean;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        attack(target: $Entity): void;
        getStages(): $Stages;
        getInventory(): $InventoryKJS;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        refreshDisplayName(): void;
        atl$getBaseClass(): $Class<any>;
        etf$getEntity(): $Entity;
        isModelPartShown(part: $PlayerModelPart_): boolean;
        etf$getInventory(): $Inventory;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onUpdateAbilities(): void;
        /**
         * @deprecated
         */
        etf$isPartVisible(part: $PlayerModelPart_): boolean;
        etf$getName(): $Component;
        getForcedPose(): $Pose;
        getAnimationStack(): $AnimationStack;
        setForcedPose(pose: $Pose_ | null): void;
        etf$isTeammate(other: $Player): boolean;
        getSuffixes(): $Collection<$MutableComponent>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$teleport(): void;
        getData(): $AttachedData<any>;
        /**
         * Creates and drops the provided item. Depending on the dropAround, it will drop the item around the player, instead of dropping the item from where the player is pointing at. Likewise, if includeThrowerName is true, the dropped item entity will have the thrower set as the player.
         */
        drop(droppedItem: $ItemStack_, dropAround: boolean, includeThrowerName: boolean): $ItemEntity;
        /**
         * Drops an item into the world.
         */
        drop(itemStack: $ItemStack_, includeThrowerName: boolean): $ItemEntity;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isAffectedByFluids(): boolean;
        getScoreboard(): $Scoreboard;
        canInteractWithBlock(pos: $BlockPos_, distance: number): boolean;
        getCraftingGrid(): $InventoryKJS;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        canUseGameMasterBlocks(): boolean;
        canInteractWithEntity(entity: $Entity, distance: number): boolean;
        canInteractWithEntity(boundingBox: $AABB_, distance: number): boolean;
        blockInteractionRange(): number;
        supplementaries$setQuiver(stack: $ItemStack_): void;
        /**
         * Returns a String to use as this entity's name in the scoreboard/entity selector systems
         */
        etf$getUuidAsString(): string;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$tickStopFreezing(): void;
        supplementaries$getQuiver(): $ItemStack;
        sable$getFrozenToSubLevel(): $UUID;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getLuck(): number;
        /**
         * Add a stat once
         */
        awardStat(stat: $Stat_<never>): void;
        awardStat(stat: $ResourceLocation_, increment: number): void;
        /**
         * Adds a value to a statistic field.
         */
        awardStat(stat: $Stat_<never>, increment: number): void;
        awardStat(statKey: $ResourceLocation_): void;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        handler$dki000$simplyswords$dropShoulderEntities(ci: $CallbackInfo): void;
        playerAnimator_setAnimation(id: $ResourceLocation_, animation: $IAnimation): $IAnimation;
        aquamirae$setRemnantSaberBonus(yaw: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tryResetCurrentImpulseContext(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentItemAttackStrengthDelay(): number;
        updateTutorialInventoryAction(carried: $ItemStack_, clicked: $ItemStack_, action: $ClickAction_): void;
        simulated$getLaunchedPlunger(): $LaunchedPlungerEntity;
        simulated$setLaunchedPlunger(arg0: $LaunchedPlungerEntity): void;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        simulated$getCurrentTypewriter(): $BlockPos;
        sable$getFrozenToSubLevelAnchor(): $Vector3dc;
        playerAnimator_getAnimation(): $AnimationApplier;
        playerAnimator_getAnimation(id: $ResourceLocation_): $IAnimation;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        aquamirae$getRemnantSaberBonus(): number;
        simulated$setCurrentTypewriter(pos: $BlockPos_): void;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * The maximum size for #extraDataWriter is 32600 bytes.
         */
        openMenu(menuProvider: $MenuProvider, extraDataWriter: $Consumer_<$RegistryFriendlyByteBuf>): $OptionalInt;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * Use `FriendlyByteBuf#readBlockPos()` to read the position you pass to this method.
         */
        openMenu(menuProvider: $MenuProvider, pos: $BlockPos_): $OptionalInt;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayFly(): boolean;
        isCloseEnough(entity: $Entity, distance: number): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFakePlayer(): boolean;
        /**
         * @deprecated
         */
        getAnimation(): $AnimationApplier;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        supplementaries$hasQuiver(): boolean;
        wrap(): $WeakReference<$Trackable>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startTracking(): void;
        setMouseItem(stack: $ItemStack_): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSaturation(): number;
        /**
         * Add experience levels to this player.
         */
        setFoodLevel(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        addXPLevels(levels: number): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isMiningBlock(): boolean;
        getMouseItem(): $ItemStack;
        addExhaustion(yaw: number): void;
        /**
         * Add experience levels to this player.
         */
        setXpLevel(levels: number): void;
        setSaturation(yaw: number): void;
        addFood(hunger: number, saturation: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getFoodLevel(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpLevel(): number;
        getStats(): $PlayerStatsJS;
        giveInHand(stack: $ItemStack_): void;
        give(stack: $ItemStack_): void;
        /**
         * Checks if the player is fake.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFake(): this is $FakePlayer;
        notify(builder: $NotificationToastData_): void;
        notify(title: $Component_, text: $Component_): void;
        /**
         * Add experience levels to this player.
         */
        addXP(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        setXp(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXp(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSelectedSlot(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendInventoryUpdate(): void;
        /**
         * Add experience levels to this player.
         */
        setSelectedSlot(levels: number): void;
        getOpenInventory(): $AbstractContainerMenu;
        addItemCooldown(item: $Item_, ticks: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        boostElytraFlight(): void;
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
        invokeSetShoulderEntityLeft(compound: $CompoundTag_): void;
        invokeSetShoulderEntityRight(compound: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        abilities: $Abilities;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(level: $Level_, pos: $BlockPos_, yRot: number, gameProfile: $GameProfile);
        get prefixes(): $Collection<$MutableComponent>;
        set mainArm(value: $HumanoidArm_);
        get scoping(): boolean;
        get hurt(): boolean;
        get textFilteringEnabled(): boolean;
        get foodData(): $FoodData;
        get sleepTimer(): number;
        get enchantmentSeed(): number;
        get secondaryUseActive(): boolean;
        get shoulderEntityLeft(): $CompoundTag;
        get shoulderEntityRight(): $CompoundTag;
        get wardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        get xpNeededForNextLevel(): number;
        get enderChestInventory(): $PlayerEnderChestContainer;
        get sleepingLongEnough(): boolean;
        set entityOnShoulder(value: $CompoundTag_);
        get ignoringFallDamageFromCurrentImpulse(): boolean;
        static get playerModelFlag$essential_$md$b7e275$1(): $EntityDataAccessor<any>;
        set ignoreFallDamageFromCurrentImpulse(value: boolean);
        get cooldowns(): $ItemCooldowns;
        get gameProfile(): $GameProfile;
        get localPlayer(): boolean;
        get creative(): boolean;
        get stages(): $Stages;
        get animationStack(): $AnimationStack;
        get suffixes(): $Collection<$MutableComponent>;
        get data(): $AttachedData<any>;
        get affectedByFluids(): boolean;
        get scoreboard(): $Scoreboard;
        get craftingGrid(): $InventoryKJS;
        get luck(): number;
        get currentItemAttackStrengthDelay(): number;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get fakePlayer(): boolean;
        get animation(): $AnimationApplier;
        get miningBlock(): boolean;
        get stats(): $PlayerStatsJS;
        get fake(): boolean;
        get openInventory(): $AbstractContainerMenu;
    }
}
