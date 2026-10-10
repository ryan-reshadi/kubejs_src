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
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
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
        privateKey(): $PrivateKey;
        dueRefresh(): boolean;
        refreshedAfter(): $Instant;
        static CODEC: $Codec<$ProfileKeyPair>;
        constructor(arg0: $PrivateKey, arg1: $ProfilePublicKey_, arg2: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $ProfileKeyPair}.
     */
    export type $ProfileKeyPair_ = { refreshedAfter?: $Instant, privateKey?: $PrivateKey, publicKey?: $ProfilePublicKey_,  } | [refreshedAfter?: $Instant, privateKey?: $PrivateKey, publicKey?: $ProfilePublicKey_, ];
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
    export type $ProfilePublicKey$Data_ = { keySignature?: number[], key?: $PublicKey, expiresAt?: $Instant,  } | [keySignature?: number[], key?: $PublicKey, expiresAt?: $Instant, ];
    export class $Abilities {
        getFlyingSpeed(): number;
        loadSaveData(compound: $CompoundTag_): void;
        getWalkingSpeed(): number;
        addSaveData(compound: $CompoundTag_): void;
        setFlyingSpeed(flyingSpeed: number): void;
        setWalkingSpeed(flyingSpeed: number): void;
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
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getItem(slot: number): $ItemStack;
        /**
         * Drop all armor and main inventory items.
         */
        tick(): void;
        /**
         * Copy the ItemStack contents from another InventoryPlayer instance
         */
        replaceWith(playerInventory: $Inventory): void;
        /**
         * Returns the item stack currently held by the player.
         */
        getSelected(): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        removeItem(stack: $ItemStack_): void;
        addResource(slot: number, stack: $ItemStack_): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingItem(stack: $ItemStack_): number;
        setPickedItem(stack: $ItemStack_): void;
        static isHotbarSlot(index: number): boolean;
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
        contains(tag: $TagKey_<$Item>): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        contains(stack: $ItemStack_): boolean;
        contains(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Writes the inventory out as a list of compound tags. This is where the slot indices are used (+100 for armor, +80 for crafting).
         */
        save(listTag: $ListTag_): $ListTag;
        fillStackedContents(stackedContent: $StackedContents): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Drop all armor and main inventory items.
         */
        dropAll(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        getDestroySpeed(state: $BlockState_): number;
        /**
         * Drop all armor and main inventory items.
         */
        setChanged(): void;
        removeFromSelected(removeStack: boolean): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        placeItemBackInInventory(stack: $ItemStack_): void;
        placeItemBackInInventory(stack: $ItemStack_, sendPacket: boolean): void;
        /**
         * Drop all armor and main inventory items.
         */
        clearContent(): void;
        hasAnyMatching(predicate: $Predicate_<any>): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        static getSelectionSize(): number;
        hasRemainingSpaceForItem(destination: $ItemStack_, origin: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getFreeSlot(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSuitableHotbarSlot(): number;
        pickSlot(index: number): void;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingUnusedItem(stack: $ItemStack_): number;
        /**
         * Change the selected item in the hotbar after a mouse scroll. Select the slot to the left if `direction` is positive, or to the right if negative.
         */
        swapPaint(direction: number): void;
        clearOrCountMatchingItems(stackPredicate: $Predicate_<$ItemStack>, maxCount: number, inventory: $Container): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getSlotWithRemainingSpace(stack: $ItemStack_): number;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getArmor(slot: number): $ItemStack;
        handler$dmf000$moonlight$ml$fireDropEvent(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        handler$dmf000$moonlight$ml$restoreNotDropped(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getTimesChanged(): number;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        getCustomName(): $Component;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Drop all armor and main inventory items.
         */
        clear(): void;
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
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
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
        set pickedItem(value: $ItemStack_);
        get name(): $Component;
        get containerSize(): number;
        static get selectionSize(): number;
        get freeSlot(): number;
        get suitableHotbarSlot(): number;
        get timesChanged(): number;
        get displayName(): $Component;
        get customName(): $Component;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $PlayerModelPart extends $Enum<$PlayerModelPart> {
        getMask(): number;
        getName(): $Component;
        static values(): $PlayerModelPart[];
        static valueOf(arg0: string): $PlayerModelPart;
        getId(): string;
        getBit(): number;
        static RIGHT_PANTS_LEG: $PlayerModelPart;
        static LEFT_PANTS_LEG: $PlayerModelPart;
        static JACKET: $PlayerModelPart;
        static RIGHT_SLEEVE: $PlayerModelPart;
        static HAT: $PlayerModelPart;
        static LEFT_SLEEVE: $PlayerModelPart;
        static CAPE: $PlayerModelPart;
        get mask(): number;
        get id(): string;
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
        static createValidated(signatureValidator: $SignatureValidator_, profileId: $UUID_, data: $ProfilePublicKey$Data_): $ProfilePublicKey;
        createSignatureValidator(): $SignatureValidator;
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
        clear(): void;
        accountSimpleStack(stack: $ItemStack_): void;
        accountStack(stack: $ItemStack_): void;
        accountStack(stack: $ItemStack_, amount: number): void;
        static getStackingIndex(stack: $ItemStack_): number;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null, amount: number): boolean;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null): boolean;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, amount: number, stackingIndexList: $IntList | null): number;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, stackingIndexList: $IntList | null): number;
        static fromStackingIndex(stackingIndex: number): $ItemStack;
        contents: $Int2IntMap;
        constructor();
    }
    export class $ProfilePublicKey$ValidationException extends $ThrowingComponent {
        constructor(arg0: $Component_);
    }
    export class $Player extends $LivingEntity implements $IPlayerExtension, $IAnimatedPlayer, $PlayerTypewriterExtension, $PlayerLaunchedPlungerExtension, $PlayerAccessor, $IQuiverEntity, $ETFPlayerEntity, $Trackable, $PlayerFreezeExtension, $ExtensionPlayer, $EntityPlayerAccessor, $PlayerKJS {
        addItem(stack: $ItemStack_): boolean;
        getPrefixes(): $Collection<$MutableComponent>;
        getAbilities(): $Abilities;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isLocalPlayer(): boolean;
        /**
         * Returns the GameProfile for this player
         */
        getGameProfile(): $GameProfile;
        /**
         * Drops an item into the world.
         */
        drop(itemStack: $ItemStack_, includeThrowerName: boolean): $ItemEntity;
        /**
         * Creates and drops the provided item. Depending on the dropAround, it will drop the item around the player, instead of dropping the item from where the player is pointing at. Likewise, if includeThrowerName is true, the dropped item entity will have the thrower set as the player.
         */
        drop(droppedItem: $ItemStack_, dropAround: boolean, includeThrowerName: boolean): $ItemEntity;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        respawn(): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        attack(target: $Entity): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetAttackStrengthTicker(): void;
        /**
         * Checks, whether the player is in Creative mode.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isCreative(): boolean;
        getInventory(): $Inventory;
        displayClientMessage(chatComponent: $Component_, actionBar: boolean): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isReducedDebugInfo(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isTextFilteringEnabled(): boolean;
        getCooldowns(): $ItemCooldowns;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isAffectedByFluids(): boolean;
        getScoreboard(): $Scoreboard;
        /**
         * Adds a value to a statistic field.
         */
        awardStat(stat: $Stat_<never>, increment: number): void;
        awardStat(statKey: $ResourceLocation_): void;
        awardStat(stat: $ResourceLocation_, increment: number): void;
        /**
         * Add a stat once
         */
        awardStat(stat: $Stat_<never>): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getLuck(): number;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        blockActionRestricted(level: $Level_, pos: $BlockPos_, gameMode: $GameType_): boolean;
        static createAttributes(): $AttributeSupplier$Builder;
        handler$djk006$simplyswords$tick(ci: $CallbackInfo): void;
        handler$bde002$fdbosses$tick(arg0: $CallbackInfo): void;
        stopSleepInBed(wakeImmediately: boolean, updateLevelForSleepingPlayers: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        closeMenu(): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSecondaryUseActive(): boolean;
        handler$bde000$fdbosses$wantsToStopRiding(arg0: $CallbackInfoReturnable<any>): void;
        playNotifySound(sound: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number): void;
        redirect$efj000$sable$fixRidingBoundingBox(arg0: $AABB_, arg1: $AABB_): $AABB;
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
        handler$djk000$simplyswords$tickMovement(ci: $CallbackInfo): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getScore(): number;
        /**
         * Add experience levels to this player.
         */
        setScore(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        increaseScore(levels: number): void;
        startAutoSpinAttack(ticks: number, damage: number, itemStack: $ItemStack_): void;
        /**
         * Add a stat once
         */
        resetStat(stat: $Stat_<never>): void;
        setLastDeathLocation(lastDeathLocation: ($GlobalPos_) | undefined): void;
        /**
         * @deprecated
         */
        getDestroySpeed(state: $BlockState_): number;
        getDigSpeed(arg0: $BlockState_, arg1: $BlockPos_ | null): number;
        /**
         * @deprecated
         */
        hasCorrectToolForDrops(state: $BlockState_): boolean;
        hasCorrectToolForDrops(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        getLastDeathLocation(): ($GlobalPos) | undefined;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        disableShield(): void;
        canHarmPlayer(other: $Player): boolean;
        handler$bde000$fdbosses$actuallyHurt(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfo): void;
        causeFoodExhaustion(yaw: number): void;
        openTextEdit(signEntity: $SignBlockEntity, isFrontText: boolean): void;
        openMinecartCommandBlock(commandEntity: $BaseCommandBlock): void;
        openCommandBlock(commandBlockEntity: $CommandBlockEntity): void;
        openStructureBlock(structureEntity: $StructureBlockEntity): void;
        openJigsawBlock(jigsawBlockEntity: $JigsawBlockEntity): void;
        openHorseInventory(horse: $AbstractHorse, inventory: $Container): void;
        openMenu(menu: $MenuProvider | null): $OptionalInt;
        sendMerchantOffers(containerId: number, offers: $MerchantOffers, villagerLevel: number, villagerXp: number, showProgress: boolean, canRestock: boolean): void;
        openItemGui(stack: $ItemStack_, hand: $InteractionHand_): void;
        interactOn(entityToInteractOn: $Entity, hand: $InteractionHand_): $InteractionResult;
        getEnchantedDamage(entity: $Entity, damage: number, damageSource: $DamageSource_): number;
        /**
         * Returns the percentage of attack power available based on the cooldown (zero to one).
         */
        getAttackStrengthScale(adjustTicks: number): number;
        entityInteractionRange(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sweepAttack(): void;
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
        hasContainerOpen(): boolean;
        updateTutorialInventoryAction(carried: $ItemStack_, clicked: $ItemStack_, action: $ClickAction_): void;
        startSleepInBed(bedPos: $BlockPos_): $Either<$Player$BedSleepingProblem, $Unit>;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSleepingLongEnough(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSleepTimer(): number;
        awardRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        triggerRecipeCrafted(recipe: $RecipeHolder_<never>, items: $List_<$ItemStack_>): void;
        awardRecipesByKey(recipes: $List_<$ResourceLocation_>): void;
        resetRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tryResetCurrentImpulseContext(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetCurrentImpulseContext(): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        tryToStartFallFlying(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startFallFlying(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopFallFlying(): void;
        /**
         * Add experience levels to this player.
         */
        giveExperiencePoints(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpNeededForNextLevel(): number;
        /**
         * Add experience levels to this player.
         */
        giveExperienceLevels(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getEnchantmentSeed(): number;
        onEnchantmentPerformed(enchantedItem: $ItemStack_, levelCost: number): void;
        getWardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        /**
         * Returns the player's FoodStats object.
         */
        getFoodData(): $FoodData;
        canEat(canAlwaysEat: boolean): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isHurt(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayBuild(): boolean;
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
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onUpdateAbilities(): void;
        /**
         * Returns the InventoryEnderChest of this player.
         */
        getEnderChestInventory(): $PlayerEnderChestContainer;
        setEntityOnShoulder(entityCompound: $CompoundTag_): boolean;
        handler$djk000$simplyswords$dropShoulderEntities(ci: $CallbackInfo): void;
        isModelPartShown(part: $PlayerModelPart_): boolean;
        setReducedDebugInfo(ignoreFallDamageFromCurrentImpulse: boolean): void;
        setMainArm(hand: $HumanoidArm_): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentItemAttackStrengthDelay(): number;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        canUseGameMasterBlocks(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isScoping(): boolean;
        blockInteractionRange(): number;
        canInteractWithEntity(entity: $Entity, distance: number): boolean;
        canInteractWithEntity(boundingBox: $AABB_, distance: number): boolean;
        canInteractWithBlock(pos: $BlockPos_, distance: number): boolean;
        setIgnoreFallDamageFromCurrentImpulse(ignoreFallDamageFromCurrentImpulse: boolean): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isIgnoringFallDamageFromCurrentImpulse(): boolean;
        getSuffixes(): $Collection<$MutableComponent>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        refreshDisplayName(): void;
        setForcedPose(pose: $Pose_ | null): void;
        getForcedPose(): $Pose;
        getAnimationStack(): $AnimationStack;
        playerAnimator_getAnimation(id: $ResourceLocation_): $IAnimation;
        playerAnimator_getAnimation(): $AnimationApplier;
        playerAnimator_setAnimation(id: $ResourceLocation_, animation: $IAnimation): $IAnimation;
        simulated$getCurrentTypewriter(): $BlockPos;
        simulated$setCurrentTypewriter(pos: $BlockPos_): void;
        simulated$setLaunchedPlunger(arg0: $LaunchedPlungerEntity): void;
        simulated$getLaunchedPlunger(): $LaunchedPlungerEntity;
        supplementaries$getQuiver(): $ItemStack;
        supplementaries$setQuiver(stack: $ItemStack_): void;
        etf$getEntity(): $Entity;
        etf$isTeammate(other: $Player): boolean;
        etf$getInventory(): $Inventory;
        /**
         * @deprecated
         */
        etf$isPartVisible(part: $PlayerModelPart_): boolean;
        etf$getName(): $Component;
        /**
         * Returns a String to use as this entity's name in the scoreboard/entity selector systems
         */
        etf$getUuidAsString(): string;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        simplySwords$invokeDropShoulderEntities(): void;
        atl$getBaseClass(): $Class<any>;
        sable$getFrozenToSubLevel(): $UUID;
        sable$getFrozenToSubLevelAnchor(): $Vector3dc;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$tickStopFreezing(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$teleport(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        aquamirae$getRemnantSaberBonus(): number;
        aquamirae$setRemnantSaberBonus(yaw: number): void;
        getStages(): $Stages;
        getInventory(): $InventoryKJS;
        getCraftingGrid(): $InventoryKJS;
        getData(): $AttachedData<any>;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        static getPlayerModelFlag$essential_$md$90c85e$1(): $EntityDataAccessor<any>;
        sable$freezeTo(arg0: $UUID_, arg1: $Vector3dc): void;
        isCloseEnough(entity: $Entity, distance: number): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFakePlayer(): boolean;
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
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSelectedSlot(): number;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        getStats(): $PlayerStatsJS;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isMiningBlock(): boolean;
        /**
         * Checks if the player is fake.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFake(): this is $FakePlayer;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendInventoryUpdate(): void;
        give(stack: $ItemStack_): void;
        giveInHand(stack: $ItemStack_): void;
        /**
         * Add experience levels to this player.
         */
        setSelectedSlot(levels: number): void;
        getMouseItem(): $ItemStack;
        setMouseItem(stack: $ItemStack_): void;
        addFood(hunger: number, saturation: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getFoodLevel(): number;
        /**
         * Add experience levels to this player.
         */
        setFoodLevel(levels: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSaturation(): number;
        setSaturation(yaw: number): void;
        addExhaustion(yaw: number): void;
        /**
         * Add experience levels to this player.
         */
        addXP(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        addXPLevels(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        setXp(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXp(): number;
        /**
         * Add experience levels to this player.
         */
        setXpLevel(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpLevel(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        boostElytraFlight(): void;
        getOpenInventory(): $AbstractContainerMenu;
        addItemCooldown(item: $Item_, ticks: number): void;
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
        invokeSetShoulderEntityRight(compound: $CompoundTag_): void;
        invokeSetShoulderEntityLeft(compound: $CompoundTag_): void;
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
        get localPlayer(): boolean;
        get gameProfile(): $GameProfile;
        get creative(): boolean;
        get textFilteringEnabled(): boolean;
        get cooldowns(): $ItemCooldowns;
        get affectedByFluids(): boolean;
        get scoreboard(): $Scoreboard;
        get luck(): number;
        get secondaryUseActive(): boolean;
        get shoulderEntityLeft(): $CompoundTag;
        get shoulderEntityRight(): $CompoundTag;
        get sleepingLongEnough(): boolean;
        get sleepTimer(): number;
        get xpNeededForNextLevel(): number;
        get enchantmentSeed(): number;
        get wardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        get foodData(): $FoodData;
        get hurt(): boolean;
        get enderChestInventory(): $PlayerEnderChestContainer;
        set entityOnShoulder(value: $CompoundTag_);
        set mainArm(value: $HumanoidArm_);
        get currentItemAttackStrengthDelay(): number;
        get scoping(): boolean;
        set ignoreFallDamageFromCurrentImpulse(value: boolean);
        get ignoringFallDamageFromCurrentImpulse(): boolean;
        get suffixes(): $Collection<$MutableComponent>;
        get animationStack(): $AnimationStack;
        get stages(): $Stages;
        get craftingGrid(): $InventoryKJS;
        get data(): $AttachedData<any>;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        static get playerModelFlag$essential_$md$90c85e$1(): $EntityDataAccessor<any>;
        get fakePlayer(): boolean;
        get animation(): $AnimationApplier;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
        get fake(): boolean;
        get openInventory(): $AbstractContainerMenu;
    }
}
