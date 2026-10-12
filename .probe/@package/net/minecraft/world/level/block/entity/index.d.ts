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
import { $BeaconLightBehavior_, $BeaconLightBehavior } from "@package/dev/lambdaurora/lambdynlights/api/behavior";
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
import { $BeaconBlockEntityLightSource } from "@package/dev/lambdaurora/lambdynlights/echo";
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
        isOnCustomCooldown(): boolean;
        setCooldown(cooldownTime: number): void;
        isGridAligned(): boolean;
        getLastUpdateTime(): number;
        static suckInItems(level: $Level_, hopper: $Hopper): boolean;
        static getItemsAtAndAbove(level: $Level_, hopper: $Hopper): $List<$ItemEntity>;
        static addItem(container: $Container, item: $ItemEntity): boolean;
        /**
         * Attempts to place the passed stack in the container, using as many slots as required.
         * @return any leftover stack
         */
        static addItem(source: $Container | null, destination: $Container, stack: $ItemStack_, direction: $Direction_ | null): $ItemStack;
        static entityInside(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $Entity, blockEntity: $HopperBlockEntity): void;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        static pushItemsTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $HopperBlockEntity): void;
        static getContainerAt(level: $Level_, pos: $BlockPos_): $Container;
        getSuckAabb(): $AABB;
        static MOVE_ITEM_SPEED: number;
        static ATTACHMENTS_NBT_KEY: string;
        static HOPPER_CONTAINER_SIZE: number;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get onCustomCooldown(): boolean;
        set cooldown(value: number);
        get gridAligned(): boolean;
        get lastUpdateTime(): number;
        get levelX(): number;
        get levelZ(): number;
        get levelY(): number;
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
        getOwnerProfile(): $ResolvableProfile;
        static fetchGameProfile(profileName: string): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileUuid: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static clear(): void;
        static setup(services: $Services_, mainThreadExecutor: $Executor_): void;
        setOwner(owner: $ResolvableProfile_ | null): void;
        static animation(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SkullBlockEntity): void;
        getNoteBlockSound(): $ResourceLocation;
        etf$getEntity(): $Entity;
        etf$getInventory(): $Inventory;
        etf$isPartVisible(part: $PlayerModelPart_): boolean;
        etf$getName(): $Component;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        etf$isTeammate(player: $Player): boolean;
        getAnimation(partialTick: number): number;
        etf$getUuidAsString(): string;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get ownerProfile(): $ResolvableProfile;
        set owner(value: $ResolvableProfile_ | null);
        get noteBlockSound(): $ResourceLocation;
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
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        getTranslatedName(): $Component;
        static byName(name: string): ($JigsawBlockEntity$JointType) | undefined;
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
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable, $BeaconBlockEntityLightSource {
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        getName(): $Component;
        getDisplayName(): $Component;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BeaconBlockEntity): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        lambdynlights$getDynamicLightBeam(): $BeaconLightBehavior;
        lambdynlights$setDynamicLightBeam(beam: $BeaconLightBehavior_): void;
        /**
         * Sets the custom name for this beacon.
         */
        setCustomName(name: $Component_ | null): void;
        lambdynlights$getLevels(): number;
        getCustomName(): $Component;
        static playSound(level: $Level_, pos: $BlockPos_, sound: $SoundEvent_): void;
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
        requiresAdjacentChunksToBeTicking(): boolean;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        onDataChanged(): void;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getMessage(index: number, isFiltered: boolean): $Component;
        setColor(color: $DyeColor_): $SignText;
        getMessages(isFiltered: boolean): $Component[];
        setMessage(index: number, text: $Component_): $SignText;
        setMessage(index: number, text: $Component_, filteredText: $Component_): $SignText;
        hasAnyClickCommands(player: $Player): boolean;
        hasGlowingText(): boolean;
        getColor(): $DyeColor;
        setHasGlowingText(hasGlowingText: boolean): $SignText;
        hasMessage(player: $Player): boolean;
        getRenderMessages(renderMessagesFiltered: boolean, formatter: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(messages: $Component_[], filteredMessages: $Component_[], color: $DyeColor_, hasGlowingText: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(color: $DyeColor_): void;
        getColor(): $DyeColor;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, color: $DyeColor_);
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $ExtendedBlockEntityType<any>, $IRenderableEntity, $BlockEntityTypeExtension<any>, $BlockEntityTypeMethods {
        static getKey(blockEntityType: $BlockEntityType_<never>): $ResourceLocation;
        create(pos: $BlockPos_, state: $BlockState_): $Object;
        isValid(state: $BlockState_): boolean;
        chloride$whitelisted(): boolean;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        bo$getRenderer(): $BlockEntityRenderer<any>;
        getBlockEntity(level: $BlockGetter, pos: $BlockPos_): $Object;
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        bo$setRenderer(renderer: $BlockEntityRenderer_<any>): void;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        getValidBlocks(): $Set<$Block>;
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
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        placeFood(entity: $LivingEntity | null, food: $ItemStack_, cookTime: number): boolean;
        static cookTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        /**
         * @return the items currently held in this campfire
         */
        getItems(): $NonNullList<$ItemStack>;
        clearContent(): void;
        static particleTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        getCookableRecipe(stack: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        static cooldownTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        dowse(): void;
        static ATTACHMENTS_NBT_KEY: string;
        cookingTime: number[];
        cookingProgress: number[];
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
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
        requiresAdjacentChunksToBeTicking(): boolean;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(distance: number): number;
        onDataChanged(): void;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        static load(tag: $CompoundTag_ | null): $PotDecorations;
        save(tag: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
        constructor(back: $Item_, left: $Item_, right: $Item_, front: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { right?: ($Item_) | undefined, left?: ($Item_) | undefined, back?: ($Item_) | undefined, front?: ($Item_) | undefined,  } | [right?: ($Item_) | undefined, left?: ($Item_) | undefined, back?: ($Item_) | undefined, front?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
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
        static swapContents(chest: $ChestBlockEntity, otherChest: $ChestBlockEntity): void;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ChestBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        static getOpenCount(level: $BlockGetter, pos: $BlockPos_): number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static of(entity: $Entity): $BeehiveBlockEntity$Occupant;
        static create(ticksInHive: number): $BeehiveBlockEntity$Occupant;
        createEntity(level: $Level_, pos: $BlockPos_): $Entity;
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
    export type $BeehiveBlockEntity$Occupant_ = { entityData?: $CustomData, minTicksInHive?: number, ticksInHive?: number,  } | [entityData?: $CustomData, minTicksInHive?: number, ticksInHive?: number, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $EMFEntity, $ETFEntity, $CinematicEntity, $RenderAttachmentBlockEntity {
        getType(): $BlockEntityType<never>;
        getLevel(): $Level;
        setLevel(level: $Level_): void;
        isValidBlockState(arg0: $BlockState_): boolean;
        triggerEvent(id: number, type: number): boolean;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        static addEntityType(tag: $CompoundTag_, entityType: $BlockEntityType_<never>): void;
        getRenderData(): $Object;
        loadWithComponents(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        loadCustomOnly(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        saveCustomOnly(registries: $HolderLookup$Provider): $CompoundTag;
        setComponents(components: $DataComponentMap_): void;
        /**
         * @deprecated
         */
        setBlockState(blockState: $BlockState_): void;
        static getPosFromTag(tag: $CompoundTag_): $BlockPos;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearRemoved(): void;
        getUpdateTag(registries: $HolderLookup$Provider): $CompoundTag;
        applyComponentsFromItemStack(stack: $ItemStack_): void;
        emf$prevY(): number;
        emf$getYaw(): number;
        emf$prevZ(): number;
        emf$getZ(): number;
        emf$prevX(): number;
        emf$age(): number;
        emf$getY(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isWet(): boolean;
        emf$getX(): number;
        /**
         * @deprecated
         */
        removeComponentsFromTag(tag: $CompoundTag_): void;
        saveCustomAndMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        etf$getOptifineVehicleId(): number;
        etf$getItemsEquipped(): $Iterable<any>;
        etf$getScoreboardTeam(): $Team;
        /**
         * @return whether this BlockEntity's level has been set
         */
        onlyOpCanSetNbt(): boolean;
        emf$getTypeString(): string;
        emf$getVariableMap(): $Map<any, any>;
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
        emf$isAlive(): boolean;
        emf$prevPitch(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isSprinting(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isOnGround(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$hasVehicle(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isOnFire(): boolean;
        emf$getPitch(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isGlowing(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isSneaking(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$hasPassengers(): boolean;
        emf$getVelocity(): $Vec3;
        setCameraBone(arg0: string): void;
        getCameraBone(): $GeoBone;
        handler$fjg000$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        getBlockState(): $BlockState;
        getBlockPos(): $BlockPos;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isTouchingWater(): boolean;
        applyComponents(components: $DataComponentMap_, patch: $DataComponentPatch_): void;
        collectComponents(): $DataComponentMap;
        components(): $DataComponentMap;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setRemoved(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isRemoved(): boolean;
        saveWithFullMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        static parseCustomNameSafe(customName: string, registries: $HolderLookup$Provider): $Component;
        getRenderAttachmentData(): $Object;
        saveWithoutMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setChanged(): void;
        etf$getPose(): $Pose;
        etf$getBlockY(): number;
        etf$distanceTo(entity: $Entity): number;
        etf$getBlockPos(): $BlockPos;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$canBeBright(): boolean;
        etf$getUuid(): $UUID;
        etf$getCustomName(): $Component;
        etf$getWorld(): $Level;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$hasCustomName(): boolean;
        etf$getVelocity(): $Vec3;
        etf$getHandItems(): $Iterable<any>;
        etf$getOptifineId(): number;
        etf$getType(): $EntityType<any>;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$isBlockEntity(): boolean;
        etf$getEntityKey(): string;
        etf$getArmorItems(): $Iterable<any>;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        etf$getNbt(): $CompoundTag;
        saveToItem(stack: $ItemStack_, registries: $HolderLookup$Provider): void;
        saveWithId(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasLevel(): boolean;
        static loadStatic(pos: $BlockPos_, state: $BlockState_, tag: $CompoundTag_, registries: $HolderLookup$Provider): $BlockEntity;
        fillCrashReportCategory(reportCategory: $CrashReportCategory): void;
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
         * Called when you receive a TileEntityData packet for the location this
         * TileEntity is currently in. On the client, the NetworkManager will always
         * be the remote server. On the server, it will be whomever is responsible for
         * sending the packet.
         */
        onDataPacket(net: $Connection, pkt: $ClientboundBlockEntityDataPacket, lookupProvider: $HolderLookup$Provider): void;
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
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        invalidateCapabilities(): void;
        etf$getETFRenderState(): $ETFEntityRenderState;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get type(): $BlockEntityType<never>;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get renderData(): $Object;
        get blockPos(): $BlockPos;
        get renderAttachmentData(): $Object;
        get persistentData(): $CompoundTag;
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
        getProgress(partialTicks: number): number;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getSlotsForFace(side: $Direction_): number[];
        loadFromTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        isClosed(): boolean;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ShulkerBoxBlockEntity): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        getColor(): $DyeColor;
        getBoundingBox(state: $BlockState_): $AABB;
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
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        get closed(): boolean;
        get color(): $DyeColor;
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
        unpackLootTable(player: $Player): void;
        getHitDirection(): $Direction;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        getItem(): $ItemStack;
        wrapOperation$fnf000$lootr$tryLoadLootTable(arg0: $CompoundTag_, arg1: string, arg2: number, arg3: $Operation_<any>): boolean;
        checkReset(): void;
        brush(startTick: number, arg1: $Player, player: $Direction_): boolean;
        lootr$getLootTable(): $ResourceKey<$LootTable>;
        lootr$getLootTableSeed(): number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get hitDirection(): $Direction;
        get item(): $ItemStack;
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
        getName(): $Component;
        isEmpty(): boolean;
        getDisplayName(): $Component;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        stillValid(player: $Player): boolean;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        clearContent(): void;
        getCustomName(): $Component;
        canOpen(player: $Player): boolean;
        static canUnlock(player: $Player, code: $LockCode_, displayName: $Component_): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
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
        hasCustomName(): boolean;
        self(): $Container;
        getSlotLimit(slot: number): number;
        isMutable(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
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
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        invokeGetItems(): $NonNullList<$ItemStack>;
        bookshelf$name(arg0: $Component_): void;
        setLockKey(arg0: $LockCode_): void;
        getLockKey(): $LockCode;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        get name(): $Component;
        get displayName(): $Component;
        get customName(): $Component;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> {
        static of<T extends $BlockEntity>(factory: $BlockEntityType$BlockEntitySupplier_<T>, ...validBlocks: $Block_[]): $BlockEntityType$Builder<T>;
        build(dataType: $Type<never>): $BlockEntityType<T>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        onModeSwitch(): void;
        isAutomatic(): boolean;
        isPowered(): boolean;
        setPowered(auto: boolean): void;
        getMode(): $CommandBlockEntity$Mode;
        getCommandBlock(): $BaseCommandBlock;
        setAutomatic(auto: boolean): void;
        wasConditionMet(): boolean;
        markConditionMet(): boolean;
        isConditional(): boolean;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get mode(): $CommandBlockEntity$Mode;
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
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
        getSculkSpreader(): $SculkSpreader;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        static PULSE_TICKS: number;
        constructor(blockState: $BlockState_, positionSource: $PositionSource);
        get sculkSpreader(): $SculkSpreader;
        get listenerSource(): $PositionSource;
        get deliveryMode(): $GameEventListener$DeliveryMode;
        get listenerRadius(): number;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export interface $BlockEntityType<T> extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer {
        setSlotState(slot: number, state: boolean): void;
        isTriggered(): boolean;
        isSlotDisabled(slot: number): boolean;
        setTriggered(triggered: boolean): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, crafter: $CrafterBlockEntity): void;
        setCraftingTicksRemaining(craftingTicksRemaining: number): void;
        fillStackedContents(contents: $StackedContents): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getRedstoneSignal(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
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
        set craftingTicksRemaining(value: number);
        get redstoneSignal(): number;
        get height(): number;
        get items(): $List<$ItemStack>;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity implements $ExtendedHangingSign {
        amendments$getExtension(): $HangingSignTileExtension;
        getRenderBoundingBox(): $AABB;
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
        getSlotsForFace(side: $Direction_): number[];
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BrewingStandBlockEntity): void;
        handler$cjc000$amendments$refreshModel(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfo): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
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
        setIntegrity(integrity: number): void;
        setStructurePos(structurePos: $BlockPos_): void;
        getStructureSize(): $Vec3i;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isIgnoreEntities(): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowBoundingBox(): boolean;
        setStructureSize(structureSize: $Vec3i): void;
        getStructurePos(): $BlockPos;
        setRotation(rotation: $Rotation_): void;
        setShowBoundingBox(ignoreEntities: boolean): void;
        setStructureName(metaData: string | null): void;
        setStructureName(structureName: $ResourceLocation_ | null): void;
        setIgnoreEntities(ignoreEntities: boolean): void;
        getStructureName(): string;
        getMetaData(): string;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        hasStructureName(): boolean;
        static createRandom(seed: number): $RandomSource;
        loadStructureInfo(level: $ServerLevel): boolean;
        setMetaData(metaData: string): void;
        getIntegrity(): number;
        setSeed(seed: number): void;
        getSeed(): number;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isPowered(): boolean;
        setPowered(ignoreEntities: boolean): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        setMode(mode: $StructureMode_): void;
        getMode(): $StructureMode;
        getMirror(): $Mirror;
        setShowAir(ignoreEntities: boolean): void;
        setMirror(mirror: $Mirror_): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        detectSize(): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowAir(): boolean;
        usedBy(player: $Player): boolean;
        createdBy(author: $LivingEntity): void;
        placeStructure(level: $ServerLevel): void;
        unloadStructure(): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(): boolean;
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
        isStructureLoadable(): boolean;
        placeStructureIfSameSize(level: $ServerLevel): boolean;
        getRotation(): $Rotation;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        static MAX_SIZE_PER_AXIS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get structureLoadable(): boolean;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $AbstractFurnaceBlockEntityAccess, $Clearable {
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        getSlotsForFace(side: $Direction_): number[];
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        getRecipeUsed(): $RecipeHolder<never>;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $AbstractFurnaceBlockEntity): void;
        awardUsedRecipesAndPopExperience(player: $ServerPlayer): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        static invalidateCache(): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        fillStackedContents(helper: $StackedContents): void;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        static isFuel(stack: $ItemStack_): boolean;
        getRecipesToAwardAndPopExperience(level: $ServerLevel, popVec: $Vec3_): $List<$RecipeHolder<never>>;
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
        static bookAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, enchantingTable: $EnchantingTableBlockEntity): void;
        getCustomName(): $Component;
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
        isFireNearby(): boolean;
        static getHoneyLevel(state: $BlockState_): number;
        addOccupant(occupant: $Entity): void;
        isEmpty(): boolean;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, beehive: $BeehiveBlockEntity): void;
        isFull(): boolean;
        emptyAllLivingFromHive(player: $Player | null, state: $BlockState_, releaseStatus: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        isSedated(): boolean;
        storeBee(occupant: $BeehiveBlockEntity$Occupant_): void;
        getOccupantCount(): number;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get fireNearby(): boolean;
        get empty(): boolean;
        get full(): boolean;
        get sedated(): boolean;
        get occupantCount(): number;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        getType(): string;
        tick(): void;
        isRemoved(): boolean;
        getPos(): $BlockPos;
        get type(): string;
        get removed(): boolean;
        get pos(): $BlockPos;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        setEntityId(type: $EntityType_<never>, random: $RandomSource): void;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        getSpawner(): $BaseSpawner;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get spawner(): $BaseSpawner;
    }
    export class $BellBlockEntity extends $BlockEntity implements $IBellConnection {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        amendments$setConnected(arg0: $IBellConnection$Type_): void;
        getRenderBoundingBox(): $AABB;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        onHit(direction: $Direction_): void;
        amendments$getConnection(): $IBellConnection$Type;
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
        getFrontText(): $SignText;
        getBackText(): $SignText;
        getTextLineHeight(): number;
        updateSignText(player: $Player, isFrontText: boolean, filteredText: $List_<$FilteredText_>): void;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sign: $SignBlockEntity): void;
        getText(isFrontText: boolean): $SignText;
        setText(text: $SignText, isFrontText: boolean): boolean;
        getPlayerWhoMayEdit(): $UUID;
        setAllowedPlayerEditor(playWhoMayEdit: $UUID_ | null): void;
        canExecuteClickCommands(isFrontText: boolean, player: $Player): boolean;
        playerIsTooFarAwayToEdit(uuid: $UUID_): boolean;
        getMaxTextLineWidth(): number;
        setWaxed(isWaxed: boolean): boolean;
        updateText(updater: $UnaryOperator_<$SignText>, isFrontText: boolean): boolean;
        static createCommandSourceStack(player: $Player | null, level: $Level_, pos: $BlockPos_): $CommandSourceStack;
        isFacingFrontText(player: $Player): boolean;
        isWaxed(): boolean;
        executeClickCommandsIfPresent(player: $Player, level: $Level_, pos: $BlockPos_, frontText: boolean): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        static ATTACHMENTS_NBT_KEY: string;
        frontText: $SignText;
        backText: $SignText;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(type: $BlockEntityType_<any>, pos: $BlockPos_, blockState: $BlockState_);
        get textLineHeight(): number;
        get playerWhoMayEdit(): $UUID;
        set allowedPlayerEditor(value: $UUID_ | null);
        get maxTextLineWidth(): number;
        get signInteractionFailedSoundEvent(): $SoundEvent;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $IBetterJukebox {
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        splitTheItem(amount: number): $ItemStack;
        tryForcePlaySong(): void;
        onSongChanged(): void;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, jukebox: $JukeboxBlockEntity): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getComparatorOutput(): number;
        handler$cjj000$amendments$notifySongChanged(arg0: $CallbackInfo): void;
        amendments$getRotation(arg0: number): number;
        setSongItemWithoutPlaying(stack: $ItemStack_): void;
        getContainerBlockEntity(): $BlockEntity;
        amendments$tickAnimation(): void;
        getSongPlayer(): $JukeboxSongPlayer;
        popOutTheItem(): void;
        getTheItem(): $ItemStack;
        setTheItem(stack: $ItemStack_): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        removeTheItem(): $ItemStack;
        isEmpty(): boolean;
        getItem(amount: number): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        removeItemNoUpdate(amount: number): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
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
        self(): $Container;
        getSlotLimit(slot: number): number;
        isMutable(): boolean;
        getStackInSlot(amount: number): $ItemStack;
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
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        static SONG_ITEM_TAG_ID: string;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get comparatorOutput(): number;
        set songItemWithoutPlaying(value: $ItemStack_);
        get containerBlockEntity(): $BlockEntity;
        get songPlayer(): $JukeboxSongPlayer;
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
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
        add(layer: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(pattern: $Holder_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(layers: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        /**
         * @deprecated
         */
        addIfRegistered(patterns: $HolderGetter<$BannerPattern_>, patternKey: $ResourceKey_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getLastVibrationFrequency(): number;
        getListener(): $VibrationSystem$Listener;
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        setLastVibrationFrequency(lastVibrationFrequency: number): void;
        createVibrationUser(): $VibrationSystem$User;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $VibrationSystem$Listener;
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getTrialSpawner(): $TrialSpawner;
        setEntityId(entityType: $EntityType_<never>, random: $RandomSource): void;
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        markUpdated(): void;
        trialSpawner: $TrialSpawner;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, state: $BlockState_);
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $DispenserBlockEntityAccessor {
        getRandomSlot(random: $RandomSource): number;
        insertItem(stack: $ItemStack_): $ItemStack;
        getItems(): $NonNullList<$ItemStack>;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        getSpawnPercent(partialTicks: number): number;
        setExitPosition(exitPortal: $BlockPos_, exactTeleport: boolean): void;
        static portalTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getCooldownPercent(partialTicks: number): number;
        isSpawning(): boolean;
        getPortalPosition(level: $ServerLevel, pos: $BlockPos_): $Vec3;
        static triggerCooldown(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        static beamAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        isCoolingDown(): boolean;
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
        static register(context: $BootstrapContext<$BannerPattern_>, resourceKey: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(context: $BootstrapContext<$BannerPattern_>): void;
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
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        getLootTableSeed(): number;
        getLootTable(): $ResourceKey<$LootTable>;
        unpackLootTable(player: $Player | null): void;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        wrapOperation$fnh000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        handler$fnh000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        wrapOperation$fnh000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
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
        assetId(): $ResourceLocation;
        translationKey(): string;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { translationKey?: string, assetId?: $ResourceLocation_,  } | [translationKey?: string, assetId?: $ResourceLocation_, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider, $Container {
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        isEmpty(): boolean;
        getDisplayName(): $Component;
        /**
         * Removes a stack from the given slot and returns it.
         */
        getItem(slot: number): $ItemStack;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        handler$cjm000$amendments$createEditMenu(arg0: number, arg1: $Inventory, arg2: $Player, arg3: $CallbackInfoReturnable<any>): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        handler$cjm000$amendments$setPage(arg0: number, arg1: $CallbackInfo): void;
        /**
         * Removes a stack from the given slot and returns it.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getPage(): number;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        hasBook(): boolean;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_, player: $Player | null): void;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_): void;
        getBook(): $ItemStack;
        clearContent(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getRedstoneSignal(): number;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
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
        getSlotLimit(slot: number): number;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        isMutable(): boolean;
        /**
         * Removes a stack from the given slot and returns it.
         */
        getStackInSlot(slot: number): $ItemStack;
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
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        clear(match: $ItemPredicate_): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        isEmpty(): boolean;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        static SLOT_BOOK: number;
        static NUM_DATA: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get containerSize(): number;
        get page(): number;
        get redstoneSignal(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable, $AccessorBannerBlockEntity {
        getBaseColor(): $DyeColor;
        getPatterns(): $BannerPatternLayers;
        getName(): $Component;
        getItem(): $ItemStack;
        fromItem(stack: $ItemStack_, color: $DyeColor_): void;
        getCustomName(): $Component;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        setName(arg0: $Component_): void;
        static MAX_PATTERNS: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, baseColor: $DyeColor_);
        get baseColor(): $DyeColor;
        get patterns(): $BannerPatternLayers;
        get item(): $ItemStack;
        get customName(): $Component;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        getSuckAabb(): $AABB;
        isGridAligned(): boolean;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        get suckAabb(): $AABB;
        get gridAligned(): boolean;
        get levelX(): number;
        get levelZ(): number;
        get levelY(): number;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container {
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getLastInteractedSlot(): number;
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
        clearContent(): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
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
        static MAX_BOOKS_IN_STORAGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get lastInteractedSlot(): number;
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        getActiveRotation(partialTick: number): number;
        isActive(): boolean;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        isHunting(): boolean;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        tickCount: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get active(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get hunting(): boolean;
    }
    export class $ContainerOpenersCounter {
        decrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        incrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getOpenerCount(): number;
        recheckOpeners(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        setFinalState(finalState: string): void;
        getName(): $ResourceLocation;
        setName(name: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(name: $ResourceLocation_): void;
        generate(level: $ServerLevel, maxDepth: number, keepJigsaws: boolean): void;
        getJoint(): $JigsawBlockEntity$JointType;
        setPool(pool: $ResourceKey_<$StructureTemplatePool>): void;
        setJoint(joint: $JigsawBlockEntity$JointType_): void;
        setPlacementPriority(placementPriority: number): void;
        setSelectionPriority(placementPriority: number): void;
        getSelectionPriority(): number;
        getPlacementPriority(): number;
        getFinalState(): string;
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
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>,  } | [color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        setFromItem(item: $ItemStack_): void;
        getPotAsItem(): $ItemStack;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        splitTheItem(amount: number): $ItemStack;
        getDirection(): $Direction;
        getDecorations(): $PotDecorations;
        getContainerBlockEntity(): $BlockEntity;
        wobble(style: $DecoratedPotBlockEntity$WobbleStyle_): void;
        static createDecoratedPotItem(decorations: $PotDecorations_): $ItemStack;
        getTheItem(): $ItemStack;
        setTheItem(item: $ItemStack_): void;
        getLootTableSeed(): number;
        getLootTable(): $ResourceKey<$LootTable>;
        unpackLootTable(player: $Player | null): void;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        wrapOperation$fnh000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        handler$fnh000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        wrapOperation$fnh000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
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
        removeTheItem(): $ItemStack;
        clearContent(): void;
        self(): $Container;
        getSlotLimit(slot: number): number;
        isMutable(): boolean;
        getStackInSlot(amount: number): $ItemStack;
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
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        clear(match: $ItemPredicate_): void;
        isEmpty(): boolean;
        static TAG_SHERDS: string;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        wobbleStartedAtTick: number;
        static ATTACHMENTS_NBT_KEY: string;
        static EVENT_POT_WOBBLES: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        set fromItem(value: $ItemStack_);
        get potAsItem(): $ItemStack;
        get direction(): $Direction;
        get decorations(): $PotDecorations;
        get containerBlockEntity(): $BlockEntity;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        static tryGetPlayer(entity: $Entity | null): $ServerPlayer;
        getListener(): $VibrationSystem$Listener;
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        tryShriek(level: $ServerLevel, player: $ServerPlayer | null): void;
        tryRespond(level: $ServerLevel): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $VibrationSystem$Listener;
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
    }
}
