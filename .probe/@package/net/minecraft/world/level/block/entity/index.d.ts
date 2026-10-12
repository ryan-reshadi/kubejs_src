import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Services_ } from "@package/net/minecraft/server";
import { $DispenserBlockEntityAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $RecipeHolder_, $CampfireCookingRecipe, $CraftingInput, $CraftingInput$Positioned } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $EntityType_, $Entity, $EntityType, $LivingEntity, $Pose } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CinematicEntity } from "@package/net/unusual/block_factorys_bosses/client";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $AccessorBaseContainerBlockEntity, $AccessorBannerBlockEntity } from "@package/net/darkhax/bookshelf/common/mixin/access/block";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer, $LockCode } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $IRenderableEntity } from "@package/me/srrapero720/chloride/api";
import { $HangingSignTileExtension } from "@package/net/mehvahdjukaar/amendments/common/tile";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CraftingContainer, $AbstractContainerMenu, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $PlayerModelPart_, $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ExtendedBlockEntityType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $ExtendedHangingSign, $SwingAnimation, $IBellConnection$Type, $IBellConnection, $IBetterJukebox, $IBellConnection$Type_ } from "@package/net/mehvahdjukaar/amendments/common";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $BlockEntityTypeMethods } from "@package/forge/me/thosea/badoptimizations/interfaces";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $BlockEntityRenderPredicate, $BlockEntityRenderPredicate_ } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $UUID_, $Set_, $Map, $List, $List_, $Set, $UUID } from "@package/java/util";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Supplier_, $ObjIntConsumer_, $UnaryOperator_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $BlockEntityRenderer_, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";
import { $Enum, $Iterable, $Record, $Object } from "@package/java/lang";
import { $AccessorMixinBaseContainerBlockEntity, $AccessorMixinBrushableBlockEntity } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EMFEntity } from "@package/traben/entity_model_features/utils";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Team } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ETFPlayerEntity } from "@package/traben/entity_texture_features/features/player";
import { $AbstractFurnaceBlockEntityAccess } from "@package/snownee/jade/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sculkCatalyst: $SculkCatalystBlockEntity): void;
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper {
        /**
         * Attempts to place the passed stack in the container, using as many slots as required.
         * @return any leftover stack
         */
        static addItem(source: $Container | null, destination: $Container, stack: $ItemStack_, direction: $Direction_ | null): $ItemStack;
        static addItem(container: $Container, item: $ItemEntity): boolean;
        static entityInside(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $Entity, blockEntity: $HopperBlockEntity): void;
        static pushItemsTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $HopperBlockEntity): void;
        static getContainerAt(level: $Level_, pos: $BlockPos_): $Container;
        setCooldown(cooldownTime: number): void;
        static suckInItems(level: $Level_, hopper: $Hopper): boolean;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        isGridAligned(): boolean;
        static getItemsAtAndAbove(level: $Level_, hopper: $Hopper): $List<$ItemEntity>;
        isOnCustomCooldown(): boolean;
        getLastUpdateTime(): number;
        getSuckAabb(): $AABB;
        static MOVE_ITEM_SPEED: number;
        static ATTACHMENTS_NBT_KEY: string;
        static HOPPER_CONTAINER_SIZE: number;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set cooldown(value: number);
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
        get onCustomCooldown(): boolean;
        get lastUpdateTime(): number;
        get suckAabb(): $AABB;
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity implements $ETFPlayerEntity {
        setOwner(owner: $ResolvableProfile_ | null): void;
        static clear(): void;
        static setup(services: $Services_, mainThreadExecutor: $Executor_): void;
        getAnimation(partialTick: number): number;
        static animation(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SkullBlockEntity): void;
        etf$getEntity(): $Entity;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        etf$isTeammate(player: $Player): boolean;
        etf$getInventory(): $Inventory;
        etf$isPartVisible(part: $PlayerModelPart_): boolean;
        etf$getName(): $Component;
        etf$getUuidAsString(): string;
        getNoteBlockSound(): $ResourceLocation;
        getOwnerProfile(): $ResolvableProfile;
        static fetchGameProfile(profileUuid: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileName: string): $CompletableFuture<($GameProfile) | undefined>;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set owner(value: $ResolvableProfile_ | null);
        get noteBlockSound(): $ResourceLocation;
        get ownerProfile(): $ResolvableProfile;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        getOutputSignal(): number;
        setOutputSignal(output: number): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern | { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        static byName(name: string): ($JigsawBlockEntity$JointType) | undefined;
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        getTranslatedName(): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get translatedName(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        shouldBeOpen(shouldBeOpen: boolean): void;
        getOpenness(partialTicks: number): number;
        tickLid(): void;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        get<T>(component: $DataComponentType_<T>): T;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BeaconBlockEntity): void;
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Sets the custom name for this beacon.
         */
        setCustomName(name: $Component_ | null): void;
        static playSound(level: $Level_, pos: $BlockPos_, sound: $SoundEvent_): void;
        getCustomName(): $Component;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        hasCustomName(): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        static DATA_SECONDARY: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        static DATA_PRIMARY: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        requiresAdjacentChunksToBeTicking(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getMessages(isFiltered: boolean): $Component[];
        setColor(color: $DyeColor_): $SignText;
        setMessage(index: number, text: $Component_, filteredText: $Component_): $SignText;
        setMessage(index: number, text: $Component_): $SignText;
        hasAnyClickCommands(player: $Player): boolean;
        getMessage(index: number, isFiltered: boolean): $Component;
        getColor(): $DyeColor;
        setHasGlowingText(hasGlowingText: boolean): $SignText;
        hasMessage(player: $Player): boolean;
        hasGlowingText(): boolean;
        getRenderMessages(renderMessagesFiltered: boolean, formatter: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(messages: $Component_[], filteredMessages: $Component_[], color: $DyeColor_, hasGlowingText: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(color: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, color: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $ExtendedBlockEntityType<any>, $IRenderableEntity, $BlockEntityTypeExtension<any>, $BlockEntityTypeMethods {
        create(pos: $BlockPos_, state: $BlockState_): $Object;
        isValid(state: $BlockState_): boolean;
        chloride$whitelisted(): boolean;
        getBlockEntity(level: $BlockGetter, pos: $BlockPos_): $Object;
        static getKey(blockEntityType: $BlockEntityType_<never>): $ResourceLocation;
        bo$getRenderer(): $BlockEntityRenderer<any>;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        bo$setRenderer(renderer: $BlockEntityRenderer_<any>): void;
        getValidBlocks(): $Set<$Block>;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        neoforge$setValidBlocks(validBlocks: $Set_<$Block_>): void;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(factory: $BlockEntityType$BlockEntitySupplier_<$Object>, validBlocks: $Set_<$Block_>, dataType: $Type<never>);
        get validBlocks(): $Set<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static DATA_COOKING_PROGRESS: number;
        static BURN_TIME_STANDARD: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        static BURN_COOL_SPEED: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable {
        dowse(): void;
        clearContent(): void;
        getCookableRecipe(stack: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        placeFood(entity: $LivingEntity | null, food: $ItemStack_, cookTime: number): boolean;
        /**
         * @return the items currently held in this campfire
         */
        getItems(): $NonNullList<$ItemStack>;
        static particleTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        static cookTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        static cooldownTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        static ATTACHMENTS_NBT_KEY: string;
        cookingTime: number[];
        cookingProgress: number[];
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity {
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        getColor(): number;
        getHeight(): number;
        constructor(color: number);
        get color(): number;
        get height(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        requiresAdjacentChunksToBeTicking(): boolean;
        calculateTravelTimeInTicks(distance: number): number;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static load(tag: $CompoundTag_ | null): $PotDecorations;
        save(tag: $CompoundTag_): $CompoundTag;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(back: $Item_, left: $Item_, right: $Item_, front: $Item_);
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { right?: ($Item_) | undefined, front?: ($Item_) | undefined, back?: ($Item_) | undefined, left?: ($Item_) | undefined,  } | [right?: ($Item_) | undefined, front?: ($Item_) | undefined, back?: ($Item_) | undefined, left?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        removeLast(): $BannerPatternLayers;
        layers(): $List<$BannerPatternLayers$Layer>;
        static CODEC: $Codec<$BannerPatternLayers>;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
        static getOpenCount(level: $BlockGetter, pos: $BlockPos_): number;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ChestBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        static swapContents(chest: $ChestBlockEntity, otherChest: $ChestBlockEntity): void;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static create(ticksInHive: number): $BeehiveBlockEntity$Occupant;
        createEntity(level: $Level_, pos: $BlockPos_): $Entity;
        static of(entity: $Entity): $BeehiveBlockEntity$Occupant;
        entityData(): $CustomData;
        ticksInHive(): number;
        minTicksInHive(): number;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { ticksInHive?: number, minTicksInHive?: number, entityData?: $CustomData,  } | [ticksInHive?: number, minTicksInHive?: number, entityData?: $CustomData, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $EMFEntity, $ETFEntity, $CinematicEntity, $RenderAttachmentBlockEntity {
        components(): $DataComponentMap;
        getLevel(): $Level;
        setLevel(level: $Level_): void;
        saveCustomAndMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        removeComponentsFromTag(tag: $CompoundTag_): void;
        collectComponents(): $DataComponentMap;
        applyComponents(components: $DataComponentMap_, patch: $DataComponentPatch_): void;
        getType(): $BlockEntityType<never>;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isRemoved(): boolean;
        getBlockPos(): $BlockPos;
        getBlockState(): $BlockState;
        etf$getOptifineVehicleId(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$canBeBright(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$isBlockEntity(): boolean;
        etf$getType(): $EntityType<any>;
        etf$getUuid(): $UUID;
        etf$getWorld(): $Level;
        etf$getBlockPos(): $BlockPos;
        etf$getOptifineId(): number;
        etf$getBlockY(): number;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        etf$getNbt(): $CompoundTag;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$hasCustomName(): boolean;
        etf$getCustomName(): $Component;
        etf$getScoreboardTeam(): $Team;
        etf$getItemsEquipped(): $Iterable<any>;
        etf$getHandItems(): $Iterable<any>;
        etf$getArmorItems(): $Iterable<any>;
        etf$distanceTo(entity: $Entity): number;
        etf$getVelocity(): $Vec3;
        etf$getPose(): $Pose;
        etf$getEntityKey(): string;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setRemoved(): void;
        fillCrashReportCategory(reportCategory: $CrashReportCategory): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        onlyOpCanSetNbt(): boolean;
        emf$prevX(): number;
        emf$getX(): number;
        emf$prevY(): number;
        emf$getY(): number;
        emf$prevZ(): number;
        emf$getZ(): number;
        emf$prevPitch(): number;
        emf$getPitch(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isTouchingWater(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isOnFire(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$hasVehicle(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isOnGround(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isAlive(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isGlowing(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isInLava(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isInvisible(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$hasPassengers(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isSneaking(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isSprinting(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isWet(): boolean;
        emf$age(): number;
        emf$getYaw(): number;
        emf$getVelocity(): $Vec3;
        emf$getTypeString(): string;
        emf$getVariableMap(): $Map<any, any>;
        setCameraBone(arg0: string): void;
        getCameraBone(): $GeoBone;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setChanged(): void;
        triggerEvent(id: number, type: number): boolean;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        saveCustomOnly(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        setBlockState(blockState: $BlockState_): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasLevel(): boolean;
        saveToItem(stack: $ItemStack_, registries: $HolderLookup$Provider): void;
        isValidBlockState(arg0: $BlockState_): boolean;
        static getPosFromTag(tag: $CompoundTag_): $BlockPos;
        loadCustomOnly(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        saveWithFullMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        saveWithId(registries: $HolderLookup$Provider): $CompoundTag;
        static loadStatic(pos: $BlockPos_, state: $BlockState_, tag: $CompoundTag_, registries: $HolderLookup$Provider): $BlockEntity;
        getUpdateTag(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearRemoved(): void;
        applyComponentsFromItemStack(stack: $ItemStack_): void;
        setComponents(components: $DataComponentMap_): void;
        static parseCustomNameSafe(customName: string, registries: $HolderLookup$Provider): $Component;
        getRenderAttachmentData(): $Object;
        saveWithoutMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        loadWithComponents(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        getRenderData(): $Object;
        static addEntityType(tag: $CompoundTag_, entityType: $BlockEntityType_<never>): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onLoad(): void;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        requestModelDataUpdate(): void;
        /**
         * Called when you receive a TileEntityData packet for the location this
         * TileEntity is currently in. On the client, the NetworkManager will always
         * be the remote server. On the server, it will be whomever is responsible for
         * sending the packet.
         */
        onDataPacket(net: $Connection, pkt: $ClientboundBlockEntityDataPacket, lookupProvider: $HolderLookup$Provider): void;
        handleUpdateTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onChunkUnloaded(): void;
        /**
         * Allows you to return additional model data.
         * This data can be used to provide additional functionality in your `BakedModel`.
         * You need to schedule a refresh of you model data via `#requestModelDataUpdate()` if the result of this function changes.
         * 
         * This method is always called on the main client thread.
         */
        getModelData(): $ModelData;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        invalidateCapabilities(): void;
        etf$getETFRenderState(): $ETFEntityRenderState;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get type(): $BlockEntityType<never>;
        get blockPos(): $BlockPos;
        get persistentData(): $CompoundTag;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get renderAttachmentData(): $Object;
        get renderData(): $Object;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ShulkerBoxBlockEntity): void;
        isClosed(): boolean;
        getColor(): $DyeColor;
        getBoundingBox(state: $BlockState_): $AABB;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getSlotsForFace(side: $Direction_): number[];
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        getProgress(partialTicks: number): number;
        loadFromTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        handler$bhn000$supplementaries$supp$preventInsertion(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        lockKey: $LockCode;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        static ROWS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(color: $DyeColor_ | null, pos: $BlockPos_, blockState: $BlockState_);
        get closed(): boolean;
        get color(): $DyeColor;
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity implements $AccessorMixinBrushableBlockEntity {
        getItem(): $ItemStack;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        unpackLootTable(player: $Player): void;
        checkReset(): void;
        brush(startTick: number, arg1: $Player, player: $Direction_): boolean;
        wrapOperation$flo000$lootr$tryLoadLootTable(arg0: $CompoundTag_, arg1: string, arg2: number, arg3: $Operation_<any>): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        getHitDirection(): $Direction;
        lootr$getLootTable(): $ResourceKey<$LootTable>;
        lootr$getLootTableSeed(): number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get item(): $ItemStack;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get hitDirection(): $Direction;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
        stillValid(player: $Player): boolean;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $EnderChestBlockEntity): void;
        recheckOpen(): void;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $AccessorBaseContainerBlockEntity, $AccessorMixinBaseContainerBlockEntity {
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        static canUnlock(player: $Player, code: $LockCode_, displayName: $Component_): boolean;
        getDisplayName(): $Component;
        getName(): $Component;
        isEmpty(): boolean;
        getCustomName(): $Component;
        stillValid(player: $Player): boolean;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        canOpen(player: $Player): boolean;
        clearContent(): void;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
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
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        hasCustomName(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        bookshelf$name(arg0: $Component_): void;
        invokeGetItems(): $NonNullList<$ItemStack>;
        getLockKey(): $LockCode;
        setLockKey(arg0: $LockCode_): void;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        get displayName(): $Component;
        get name(): $Component;
        get customName(): $Component;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> {
        build(dataType: $Type<never>): $BlockEntityType<T>;
        static of<T extends $BlockEntity>(factory: $BlockEntityType$BlockEntitySupplier_<T>, ...validBlocks: $Block_[]): $BlockEntityType$Builder<T>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        getMode(): $CommandBlockEntity$Mode;
        isAutomatic(): boolean;
        setAutomatic(auto: boolean): void;
        isPowered(): boolean;
        setPowered(auto: boolean): void;
        markConditionMet(): boolean;
        wasConditionMet(): boolean;
        isConditional(): boolean;
        getCommandBlock(): $BaseCommandBlock;
        onModeSwitch(): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get mode(): $CommandBlockEntity$Mode;
        get conditional(): boolean;
        get commandBlock(): $BaseCommandBlock;
    }
    export class $DecoratedPotPatterns {
        static bootstrap(registry: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static getPatternFromItem(item: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        getSculkSpreader(): $SculkSpreader;
        static PULSE_TICKS: number;
        constructor(blockState: $BlockState_, positionSource: $PositionSource);
        get listenerRadius(): number;
        get listenerSource(): $PositionSource;
        get deliveryMode(): $GameEventListener$DeliveryMode;
        get sculkSpreader(): $SculkSpreader;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export interface $BlockEntityType<T> extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer {
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        setSlotState(slot: number, state: boolean): void;
        isSlotDisabled(slot: number): boolean;
        isTriggered(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        fillStackedContents(contents: $StackedContents): void;
        setTriggered(triggered: boolean): void;
        setCraftingTicksRemaining(craftingTicksRemaining: number): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getRedstoneSignal(): number;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, crafter: $CrafterBlockEntity): void;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
        getItems(): $List<$ItemStack>;
        static CONTAINER_WIDTH: number;
        static CONTAINER_HEIGHT: number;
        static DATA_TRIGGERED: number;
        static SLOT_ENABLED: number;
        static CONTAINER_SIZE: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get width(): number;
        get height(): number;
        set craftingTicksRemaining(value: number);
        get redstoneSignal(): number;
        get items(): $List<$ItemStack>;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity implements $ExtendedHangingSign {
        getRenderBoundingBox(): $AABB;
        amendments$getExtension(): $HangingSignTileExtension;
        amendments$getAnimation(): $SwingAnimation;
        static ATTACHMENTS_NBT_KEY: string;
        frontText: $SignText;
        backText: $SignText;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer {
        handler$cie000$amendments$refreshModel(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfo): void;
        getSlotsForFace(side: $Direction_): number[];
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BrewingStandBlockEntity): void;
        static DATA_BREW_TIME: number;
        static DATA_FUEL_USES: number;
        fuel: number;
        brewTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        static FUEL_USES: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
    }
    export class $StructureBlockEntity extends $BlockEntity {
        getMirror(): $Mirror;
        setMode(mode: $StructureMode_): void;
        getMode(): $StructureMode;
        getSeed(): number;
        setSeed(seed: number): void;
        getRotation(): $Rotation;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isPowered(): boolean;
        setPowered(ignoreEntities: boolean): void;
        usedBy(player: $Player): boolean;
        createdBy(author: $LivingEntity): void;
        /**
         * Saves the template, either updating the local version or writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(writeToDisk: boolean): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(): boolean;
        placeStructure(level: $ServerLevel): void;
        unloadStructure(): void;
        getStructureName(): string;
        setStructureName(metaData: string | null): void;
        setStructureName(structureName: $ResourceLocation_ | null): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        hasStructureName(): boolean;
        getStructurePos(): $BlockPos;
        setStructurePos(structurePos: $BlockPos_): void;
        getStructureSize(): $Vec3i;
        setStructureSize(structureSize: $Vec3i): void;
        setMirror(mirror: $Mirror_): void;
        setRotation(rotation: $Rotation_): void;
        getMetaData(): string;
        setMetaData(metaData: string): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isIgnoreEntities(): boolean;
        setIgnoreEntities(ignoreEntities: boolean): void;
        getIntegrity(): number;
        setIntegrity(integrity: number): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        detectSize(): boolean;
        static createRandom(seed: number): $RandomSource;
        placeStructureIfSameSize(level: $ServerLevel): boolean;
        loadStructureInfo(level: $ServerLevel): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isStructureLoadable(): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowAir(): boolean;
        setShowAir(ignoreEntities: boolean): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowBoundingBox(): boolean;
        setShowBoundingBox(ignoreEntities: boolean): void;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static MAX_SIZE_PER_AXIS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get structureLoadable(): boolean;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $AbstractFurnaceBlockEntityAccess, $Clearable {
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        static invalidateCache(): void;
        static isFuel(stack: $ItemStack_): boolean;
        fillStackedContents(helper: $StackedContents): void;
        getRecipesToAwardAndPopExperience(level: $ServerLevel, popVec: $Vec3_): $List<$RecipeHolder<never>>;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        getSlotsForFace(side: $Direction_): number[];
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        getRecipeUsed(): $RecipeHolder<never>;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        awardUsedRecipesAndPopExperience(player: $ServerPlayer): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $AbstractFurnaceBlockEntity): void;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getCookingProgress(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getCookingTotalTime(): number;
        static DATA_LIT_DURATION: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static DATA_COOKING_PROGRESS: number;
        static BURN_TIME_STANDARD: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        static BURN_COOL_SPEED: number;
        get cookingProgress(): number;
        get cookingTotalTime(): number;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        setCustomName(customName: $Component_ | null): void;
        getCustomName(): $Component;
        static bookAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, enchantingTable: $EnchantingTableBlockEntity): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        oFlip: number;
        flipA: number;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        static ATTACHMENTS_NBT_KEY: string;
        time: number;
        oRot: number;
        flip: number;
        open: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        addOccupant(occupant: $Entity): void;
        storeBee(occupant: $BeehiveBlockEntity$Occupant_): void;
        static getHoneyLevel(state: $BlockState_): number;
        isSedated(): boolean;
        isFull(): boolean;
        isEmpty(): boolean;
        emptyAllLivingFromHive(player: $Player | null, state: $BlockState_, releaseStatus: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        getOccupantCount(): number;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, beehive: $BeehiveBlockEntity): void;
        isFireNearby(): boolean;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get sedated(): boolean;
        get full(): boolean;
        get empty(): boolean;
        get occupantCount(): number;
        get fireNearby(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        tick(): void;
        getType(): string;
        isRemoved(): boolean;
        getPos(): $BlockPos;
        get type(): string;
        get removed(): boolean;
        get pos(): $BlockPos;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        getSpawner(): $BaseSpawner;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        setEntityId(type: $EntityType_<never>, random: $RandomSource): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get spawner(): $BaseSpawner;
    }
    export class $BellBlockEntity extends $BlockEntity implements $IBellConnection {
        amendments$getConnection(): $IBellConnection$Type;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        getRenderBoundingBox(): $AABB;
        onHit(direction: $Direction_): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        amendments$setConnected(arg0: $IBellConnection$Type_): void;
        ticks: number;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        shaking: boolean;
        amendments$connection: $IBellConnection$Type;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sign: $SignBlockEntity): void;
        setWaxed(isWaxed: boolean): boolean;
        playerIsTooFarAwayToEdit(uuid: $UUID_): boolean;
        getText(isFrontText: boolean): $SignText;
        setText(text: $SignText, isFrontText: boolean): boolean;
        static createCommandSourceStack(player: $Player | null, level: $Level_, pos: $BlockPos_): $CommandSourceStack;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        isWaxed(): boolean;
        isFacingFrontText(player: $Player): boolean;
        executeClickCommandsIfPresent(player: $Player, level: $Level_, pos: $BlockPos_, frontText: boolean): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        setAllowedPlayerEditor(playWhoMayEdit: $UUID_ | null): void;
        getPlayerWhoMayEdit(): $UUID;
        updateText(updater: $UnaryOperator_<$SignText>, isFrontText: boolean): boolean;
        updateSignText(player: $Player, isFrontText: boolean, filteredText: $List_<$FilteredText_>): void;
        canExecuteClickCommands(isFrontText: boolean, player: $Player): boolean;
        getFrontText(): $SignText;
        getBackText(): $SignText;
        getTextLineHeight(): number;
        getMaxTextLineWidth(): number;
        static ATTACHMENTS_NBT_KEY: string;
        frontText: $SignText;
        backText: $SignText;
        constructor(type: $BlockEntityType_<any>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get signInteractionFailedSoundEvent(): $SoundEvent;
        set allowedPlayerEditor(value: $UUID_ | null);
        get playerWhoMayEdit(): $UUID;
        get textLineHeight(): number;
        get maxTextLineWidth(): number;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $IBetterJukebox {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, jukebox: $JukeboxBlockEntity): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        getTheItem(): $ItemStack;
        setTheItem(stack: $ItemStack_): void;
        splitTheItem(amount: number): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        setSongItemWithoutPlaying(stack: $ItemStack_): void;
        tryForcePlaySong(): void;
        amendments$tickAnimation(): void;
        amendments$getRotation(arg0: number): number;
        onSongChanged(): void;
        handler$cil000$amendments$notifySongChanged(arg0: $CallbackInfo): void;
        popOutTheItem(): void;
        getSongPlayer(): $JukeboxSongPlayer;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getComparatorOutput(): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        getItem(amount: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        isEmpty(): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        removeItemNoUpdate(amount: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        removeTheItem(): $ItemStack;
        getMaxStackSize(stack: $ItemStack_): number;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        getStackInSlot(amount: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        static SONG_ITEM_TAG_ID: string;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get containerBlockEntity(): $BlockEntity;
        set songItemWithoutPlaying(value: $ItemStack_);
        get songPlayer(): $JukeboxSongPlayer;
        get comparatorOutput(): number;
        get containerSize(): number;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(pos: $BlockPos_, state: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(face: $Direction_): boolean;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        build(): $BannerPatternLayers;
        add(layer: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(pattern: $Holder_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(layers: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        /**
         * @deprecated
         */
        addIfRegistered(patterns: $HolderGetter<$BannerPattern_>, patternKey: $ResourceKey_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        createVibrationUser(): $VibrationSystem$User;
        setLastVibrationFrequency(lastVibrationFrequency: number): void;
        getVibrationUser(): $VibrationSystem$User;
        getLastVibrationFrequency(): number;
        getVibrationData(): $VibrationSystem$Data;
        getListener(): $VibrationSystem$Listener;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        setEntityId(entityType: $EntityType_<never>, random: $RandomSource): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getTrialSpawner(): $TrialSpawner;
        markUpdated(): void;
        trialSpawner: $TrialSpawner;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $DispenserBlockEntityAccessor {
        insertItem(stack: $ItemStack_): $ItemStack;
        getRandomSlot(random: $RandomSource): number;
        getItems(): $NonNullList<$ItemStack>;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        getCooldownPercent(partialTicks: number): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        isSpawning(): boolean;
        getSpawnPercent(partialTicks: number): number;
        setExitPosition(exitPortal: $BlockPos_, exactTeleport: boolean): void;
        static beamAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        static portalTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        isCoolingDown(): boolean;
        static triggerCooldown(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getPortalPosition(level: $ServerLevel, pos: $BlockPos_): $Vec3;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get spawning(): boolean;
        get particleAmount(): number;
        get coolingDown(): boolean;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static DATA_COOKING_PROGRESS: number;
        static BURN_TIME_STANDARD: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        static BURN_COOL_SPEED: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatterns {
        static bootstrap(context: $BootstrapContext<$BannerPattern_>): void;
        static register(context: $BootstrapContext<$BannerPattern_>, resourceKey: $ResourceKey_<$BannerPattern>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        setLootTableSeed(seed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        unpackLootTable(player: $Player | null): void;
        wrapOperation$fma000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fma000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        handler$fma000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static DATA_COOKING_PROGRESS: number;
        static BURN_TIME_STANDARD: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        static BURN_COOL_SPEED: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        translationKey(): string;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { assetId?: $ResourceLocation_, translationKey?: string,  } | [assetId?: $ResourceLocation_, translationKey?: string, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider, $Container {
        /**
         * Removes a stack from the given slot and returns it.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        getDisplayName(): $Component;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        isEmpty(): boolean;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_): void;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_, player: $Player | null): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        /**
         * Removes a stack from the given slot and returns it.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        getBook(): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getRedstoneSignal(): number;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        hasBook(): boolean;
        handler$cio000$amendments$setPage(arg0: number, arg1: $CallbackInfo): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getPage(): number;
        handler$cio000$amendments$createEditMenu(arg0: number, arg1: $Inventory, arg2: $Player, arg3: $CallbackInfoReturnable<any>): void;
        clearContent(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        /**
         * Removes a stack from the given slot and returns it.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        static SLOT_BOOK: number;
        static NUM_DATA: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get containerSize(): number;
        get redstoneSignal(): number;
        get page(): number;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable, $AccessorBannerBlockEntity {
        getItem(): $ItemStack;
        getName(): $Component;
        getCustomName(): $Component;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getPatterns(): $BannerPatternLayers;
        getBaseColor(): $DyeColor;
        fromItem(stack: $ItemStack_, color: $DyeColor_): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        setName(arg0: $Component_): void;
        static MAX_PATTERNS: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, baseColor: $DyeColor_);
        get item(): $ItemStack;
        get customName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get patterns(): $BannerPatternLayers;
        get baseColor(): $DyeColor;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        isGridAligned(): boolean;
        getSuckAabb(): $AABB;
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
        get suckAabb(): $AABB;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container {
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        clearContent(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getLastInteractedSlot(): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
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
        static MAX_BOOKS_IN_STORAGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get containerSize(): number;
        get lastInteractedSlot(): number;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        isActive(): boolean;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        isHunting(): boolean;
        getActiveRotation(partialTick: number): number;
        tickCount: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get active(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get hunting(): boolean;
    }
    export class $ContainerOpenersCounter {
        incrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        decrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getOpenerCount(): number;
        recheckOpeners(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        setTarget(name: $ResourceLocation_): void;
        setJoint(joint: $JigsawBlockEntity$JointType_): void;
        generate(level: $ServerLevel, maxDepth: number, keepJigsaws: boolean): void;
        getTarget(): $ResourceLocation;
        getName(): $ResourceLocation;
        setName(name: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        setSelectionPriority(placementPriority: number): void;
        getFinalState(): string;
        setPool(pool: $ResourceKey_<$StructureTemplatePool>): void;
        getPlacementPriority(): number;
        setFinalState(finalState: string): void;
        getSelectionPriority(): number;
        getJoint(): $JigsawBlockEntity$JointType;
        setPlacementPriority(placementPriority: number): void;
        static TARGET: string;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        static JOINT: string;
        static NAME: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        color(): $DyeColor;
        description(): $MutableComponent;
        pattern(): $Holder<$BannerPattern>;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { pattern?: $Holder_<$BannerPattern>, color?: $DyeColor_,  } | [pattern?: $Holder_<$BannerPattern>, color?: $DyeColor_, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        getDirection(): $Direction;
        setFromItem(item: $ItemStack_): void;
        getDecorations(): $PotDecorations;
        wobble(style: $DecoratedPotBlockEntity$WobbleStyle_): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getTheItem(): $ItemStack;
        setTheItem(item: $ItemStack_): void;
        getPotAsItem(): $ItemStack;
        setLootTableSeed(seed: number): void;
        splitTheItem(amount: number): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        static createDecoratedPotItem(decorations: $PotDecorations_): $ItemStack;
        unpackLootTable(player: $Player | null): void;
        wrapOperation$fma000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fma000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        handler$fma000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
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
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        removeTheItem(): $ItemStack;
        clearContent(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        getStackInSlot(amount: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        static TAG_SHERDS: string;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        wobbleStartedAtTick: number;
        static ATTACHMENTS_NBT_KEY: string;
        static EVENT_POT_WOBBLES: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get direction(): $Direction;
        set fromItem(value: $ItemStack_);
        get decorations(): $PotDecorations;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get potAsItem(): $ItemStack;
        get containerBlockEntity(): $BlockEntity;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        static tryGetPlayer(entity: $Entity | null): $ServerPlayer;
        tryRespond(level: $ServerLevel): void;
        tryShriek(level: $ServerLevel, player: $ServerPlayer | null): void;
        getListener(): $VibrationSystem$Listener;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
}
