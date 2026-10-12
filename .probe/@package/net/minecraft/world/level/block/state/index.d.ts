import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $ICopiedBlockProperties } from "@package/com/bobmowzie/mowziesmobs/server/block";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $PhysicsBlockPropertiesDefinition_, $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_ } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $EntityType_, $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $BlockStateExtension } from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $BlockBehaviourAccessor, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Map, $Map$Entry, $List, $Map_, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $ToIntFunction_ } from "@package/java/util/function";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $BlockAccessor } from "@package/net/jadenxgamer/elysium_api/impl/mixin/block";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $BlockBehaviourInvoker } from "@package/org/embeddedt/modernfix/common/mixin/perf/reduce_blockstate_cache_rebuilds";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_, $PushReaction_, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $IBlockState } from "@package/org/embeddedt/modernfix/duck";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Rotation_, $Block_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$1 } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> {
        getOwner(): O;
        any(): S;
        getProperty(propertyName: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        getPossibleStates(): $ImmutableList<S>;
        static appendPropertyCodec<S extends $StateHolder<never, S>, T extends $Comparable<T>>(propertyCodec: $MapCodec_<S>, holderSupplier: $Supplier_<S>, value: string, property: $Property<T>): $MapCodec<S>;
        get owner(): O;
        get properties(): $Collection<$Property<never>>;
        get possibleStates(): $ImmutableList<S>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
        getCollisionShape(): $VoxelShape;
        isFaceSturdy(direction: $Direction_, supportType: $SupportType_): boolean;
        getOcclusionShapes(): $VoxelShape[];
        setOcclusionShapes(arg0: $VoxelShape[]): void;
        getFaceSturdy(): boolean[];
        setFaceSturdy(arg0: boolean[]): void;
        setCollisionShape(arg0: $VoxelShape): void;
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> {
        create(stateValueFunction: $Function_<O, S>, stateFunction: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        add(...properties: $Property<never>[]): $StateDefinition$Builder<O, S>;
        properties: $Map<string, $Property<never>>;
        constructor(owner: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourInvoker, $BlockBehaviourAccessor$1, $BlockAccessor, $BlockBehaviourKJS, $BlockBehaviourAccessor {
        requiredFeatures(): $FeatureFlagSet;
        properties(): $BlockBehaviour$Properties;
        asItem(): $Item;
        getLootTable(): $ResourceKey<$LootTable>;
        static simpleCodec<B extends $Block>(factory: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        setHasCollision(arg0: boolean): void;
        setExplosionResistance(arg0: number): void;
        setIsRandomlyTicking(arg0: boolean): void;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        setSoundType(arg0: $SoundType_): void;
        setFriction(arg0: number): void;
        setSpeedFactor(arg0: number): void;
        setJumpFactor(arg0: number): void;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        defaultMapColor(): $MapColor;
        defaultDestroyTime(): number;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        getTypeData(): $Map<string, $Object>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        invokeGetFluidState(state: $BlockState_): $FluidState;
        invokeIsRandomlyTicking(state: $BlockState_): boolean;
        getHasCollision(): boolean;
        elysium_api$canSurvive(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        create$getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
        get lootTable(): $ResourceKey<$LootTable>;
        set explosionResistance(value: number);
        set isRandomlyTicking(value: boolean);
        set randomTickCallback(value: $Consumer_<any>);
        set soundType(value: $SoundType_);
        set friction(value: number);
        set speedFactor(value: number);
        set jumpFactor(value: number);
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateExtension {
        sable$loadProperties(arg0: $StateDefinition<any, any>, arg1: $PhysicsBlockPropertiesDefinition_): void;
        sable$getProperty(arg0: $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<any>): $Object;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        isEmpty(): boolean;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        isScaffolding(arg0: $LivingEntity): boolean;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        supportsExternalFaceHiding(): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isStickyBlock(): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        hasDynamicLightEmission(): boolean;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        isSlimeBlock(): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        static PROPERTIES_TAG: string;
        static CODEC: $Codec<$BlockState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get empty(): boolean;
        get stickyBlock(): boolean;
        get slimeBlock(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(owner: O, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $BlockStateKJS {
        /**
         * @deprecated
         * @return the blockstate with the given rotation. If inapplicable, returns itself.
         */
        rotate(rotation: $Rotation_): $BlockState;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        is(holder: $HolderSet_<$Block>): boolean;
        is(block: $Holder_<$Block>): boolean;
        is(block: $Block_): boolean;
        is(block: $ResourceKey_<$Block>): boolean;
        is(tag: $TagKey_<$Block>, predicate: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        is(tag: $TagKey_<$Block>): boolean;
        initCache(): void;
        tick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getVisualShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        randomTick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getDestroyProgress(player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        modifyReturnValue$bih000$supplementaries$supp$modifyPlanterOffset(arg0: $Vec3_, arg1: $BlockGetter, arg2: $BlockPos_): $Vec3;
        hasOffsetFunction(): boolean;
        handleNeighborChanged(level: $Level_, pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_, isMoving: boolean): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        getFluidState(): $FluidState;
        hasBlockEntity(): boolean;
        getOffset(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        clearCache(): void;
        getBlock(): $Block;
        getSeed(pos: $BlockPos_): number;
        /**
         * @return the blockstate mirrored in the given way. If inapplicable, returns itself.
         */
        mirror(mirror: $Mirror_): $BlockState;
        getRenderShape(): $RenderShape;
        isAir(): boolean;
        attack(level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, level: $Level_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        instrument(): $NoteBlockInstrument;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getTags(): $Stream<$TagKey<$Block>>;
        entityInside(level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        isCollisionShapeFullBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        getPistonPushReaction(): $PushReaction;
        onExplosionHit(level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        onRemove(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        isSuffocating(level: $BlockGetter, pos: $BlockPos_): boolean;
        canSurvive(level: $LevelReader, pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        getDestroySpeed(level: $BlockGetter, pos: $BlockPos_): number;
        requiresCorrectToolForDrops(): boolean;
        canBeReplaced(fluid: $Fluid_): boolean;
        canBeReplaced(useContext: $BlockPlaceContext): boolean;
        canBeReplaced(): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, face: $Direction_, supportType: $SupportType_): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        triggerEvent(level: $Level_, pos: $BlockPos_, id: number, param: number): boolean;
        isViewBlocking(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasPostProcess(level: $BlockGetter, pos: $BlockPos_): boolean;
        emissiveRendering(level: $BlockGetter, pos: $BlockPos_): boolean;
        handler$fmh000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        handler$fmh000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        isValidSpawn(level: $BlockGetter, pos: $BlockPos_, entityType: $EntityType_<never>): boolean;
        updateShape(direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        skipRendering(state: $BlockState_, face: $Direction_): boolean;
        canOcclude(): boolean;
        getFaceOcclusionShape(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): $VoxelShape;
        getDrops(lootParams: $LootParams$Builder): $List<$ItemStack>;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        isRedstoneConductor(level: $BlockGetter, pos: $BlockPos_): boolean;
        isSignalSource(): boolean;
        getMapColor(level: $BlockGetter, pos: $BlockPos_): $MapColor;
        setDestroySpeed(arg0: number): void;
        setLightEmission(arg0: number): void;
        setRequiresTool(arg0: boolean): void;
        isRandomlyTicking(): boolean;
        isPathfindable(arg0: $PathComputationType_): boolean;
        onPlace(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        spawnAfterBreak(level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        useWithoutItem(level: $Level_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        getSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        getDirectSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        onProjectileHit(level: $Level_, state: $BlockState_, hit: $BlockHitResult, projectile: $Projectile): void;
        getBlockHolder(): $Holder<$Block>;
        entityCanStandOn(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        /**
         * @return true if the collision box of this state covers the entire upper face of the blockspace
         */
        entityCanStandOnFace(level: $BlockGetter, pos: $BlockPos_, entity: $Entity, face: $Direction_): boolean;
        getTicker<T extends $BlockEntity>(level: $Level_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        /**
         * @deprecated
         */
        liquid(): boolean;
        hasLargeCollisionShape(): boolean;
        useShapeForLightOcclusion(): boolean;
        hasAnalogOutputSignal(): boolean;
        getOcclusionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getBlockSupportShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getInteractionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getLightBlock(level: $BlockGetter, pos: $BlockPos_): number;
        isSolidRender(level: $BlockGetter, pos: $BlockPos_): boolean;
        propagatesSkylightDown(level: $BlockGetter, pos: $BlockPos_): boolean;
        getMenuProvider(level: $Level_, pos: $BlockPos_): $MenuProvider;
        getShadeBrightness(level: $BlockGetter, pos: $BlockPos_): number;
        getAnalogOutputSignal(level: $Level_, pos: $BlockPos_): number;
        shouldSpawnTerrainParticles(): boolean;
        isCacheInvalid(): boolean;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        static PROPERTIES_TAG: string;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        get fluidState(): $FluidState;
        get block(): $Block;
        get renderShape(): $RenderShape;
        get air(): boolean;
        get pistonPushReaction(): $PushReaction;
        get soundType(): $SoundType;
        get solid(): boolean;
        get signalSource(): boolean;
        set requiresTool(value: boolean);
        get randomlyTicking(): boolean;
        get blockHolder(): $Holder<$Block>;
        get cacheInvalid(): boolean;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $ICopiedBlockProperties {
        strength(destroyTime: number, explosionResistance: number): $BlockBehaviour$Properties;
        strength(destroyTime: number): $BlockBehaviour$Properties;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $BlockBehaviour$Properties;
        static of(): $BlockBehaviour$Properties;
        sound(soundType: $SoundType_): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        instrument(instrument: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        isSuffocating(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        pushReaction(pushReaction: $PushReaction_): $BlockBehaviour$Properties;
        isViewBlocking(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        hasPostProcess(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        emissiveRendering(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        isValidSpawn(isValidSpawn: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        explosionResistance(destroyTime: number): $BlockBehaviour$Properties;
        friction(destroyTime: number): $BlockBehaviour$Properties;
        speedFactor(destroyTime: number): $BlockBehaviour$Properties;
        jumpFactor(destroyTime: number): $BlockBehaviour$Properties;
        dynamicShape(): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        isRedstoneConductor(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        mapColor(mapColor: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        mapColor(mapColor: $MapColor): $BlockBehaviour$Properties;
        mapColor(mapColor: $DyeColor_): $BlockBehaviour$Properties;
        destroyTime(destroyTime: number): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
        lightLevel(lightEmission: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        static ofFullCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        static ofLegacyCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        noCollission(): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        randomTicks(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(block: $Block_): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        offsetType(offsetType: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        mowziesMobs$setBaseBlock(arg0: $Block_): void;
        mowziesMobs$getBaseBlock(): $Block;
        offsetFunction: $BlockBehaviour$OffsetFunction;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        mowziesMobs$baseBlock: $Block;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, value: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $StateHolderAccessor<any, any>, $FastMapStateHolder<any> {
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        /**
         * @return the value of the given Property for this state
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * @return an unmodifiable collection of all possible properties.
         */
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        cycle<T extends $Comparable<T>>(property: $Property<T>): $Object;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        redirect$fmd000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        trySetValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        populateNeighbours(possibleStateMap: $Map_<any, any>): void;
        getStateMap(): $FastMap<any>;
        getStateIndex(): number;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        setStateMap(arg0: $FastMap<any>): void;
        setStateIndex(arg0: number): void;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        getNeighborTable(): $Table<any, any, any>;
        getOwner(): $Object;
        static PROPERTIES_TAG: string;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get properties(): $Collection<$Property<never>>;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        get owner(): $Object;
    }
}
