/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class ClientboundBlockEntityDataPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getType(): Internal.BlockEntityType<any>;
        static create(arg0: Internal.BlockEntity_): Internal.ClientboundBlockEntityDataPacket;
        getPos(): BlockPos;
        hashCode(): number;
        static create(arg0: Internal.BlockEntity_, arg1: Internal.Function_<Internal.BlockEntity, Internal.CompoundTag>): Internal.ClientboundBlockEntityDataPacket;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getTag(): Internal.CompoundTag;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get type(): Internal.BlockEntityType<any>
        get pos(): BlockPos
        get tag(): Internal.CompoundTag
    }
    type ClientboundBlockEntityDataPacket_ = ClientboundBlockEntityDataPacket;
    interface TabOrderedElement {
        getTabOrderGroup(): number;
        get tabOrderGroup(): number
    }
    type TabOrderedElement_ = TabOrderedElement;
    abstract class BlockEntityBehaviour {
        constructor(arg0: Internal.SmartBlockEntity_)
        getClass(): typeof any;
        isSafeNBT(): boolean;
        destroy(): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        onNeighborChanged(arg0: BlockPos_): void;
        static get<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BehaviourType_<T>): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPos(): BlockPos;
        unload(): void;
        read(arg0: Internal.CompoundTag_, arg1: boolean): void;
        setLazyTickRate(arg0: number): void;
        static get<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BlockEntity_, arg1: Internal.BehaviourType_<T>): T;
        initialize(): void;
        getWorld(): Internal.Level;
        toString(): string;
        notifyAll(): void;
        writeSafe(arg0: Internal.CompoundTag_): void;
        tick(): void;
        lazyTick(): void;
        hashCode(): number;
        getRequiredItems(): Internal.ItemRequirement;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onBlockChanged(arg0: Internal.BlockState_): void;
        abstract getType(): Internal.BehaviourType<any>;
        get class(): typeof any
        get safeNBT(): boolean
        get pos(): BlockPos
        set lazyTickRate(arg0: number)
        get world(): Internal.Level
        get requiredItems(): Internal.ItemRequirement
        get type(): Internal.BehaviourType<any>
        blockEntity: Internal.SmartBlockEntity;
    }
    type BlockEntityBehaviour_ = BlockEntityBehaviour;
    class RegistrateLangProvider extends Internal.LanguageProvider implements Internal.RegistrateProvider {
        constructor(arg0: Internal.AbstractRegistrate_<any>, arg1: Internal.PackOutput_)
        getClass(): typeof any;
        addBlock(arg0: Internal.Supplier_<Internal.Block>, arg1: string): void;
        "add(net.minecraft.world.item.enchantment.Enchantment,java.lang.String)"(arg0: Internal.Enchantment_, arg1: string): void;
        "add(net.minecraft.world.effect.MobEffect,java.lang.String)"(arg0: Internal.MobEffect_, arg1: string): void;
        addTooltip(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>, arg1: string): void;
        static saveStable(arg0: Internal.CachedOutput_, arg1: com.google.gson.JsonElement_, arg2: Internal.Path_): Internal.CompletableFuture<any>;
        "add(net.minecraft.world.entity.EntityType,java.lang.String)"(arg0: Internal.EntityType_<any>, arg1: string): void;
        addTooltip(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>, arg1: Internal.List_<string>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getAutomaticName<T>(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<T>, arg1: Internal.ResourceKey_<Internal.Registry<T>>): string;
        "addTooltip(com.tterrag.registrate.util.nullness.NonNullSupplier,java.util.List)"(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>, arg1: Internal.List_<string>): void;
        add(arg0: Internal.CreativeModeTab_, arg1: string): void;
        add(arg0: Internal.ItemStack_, arg1: string): void;
        add(arg0: Internal.Item_, arg1: string): void;
        add(arg0: Internal.Block_, arg1: string): void;
        addEntityType(arg0: Internal.Supplier_<Internal.EntityType<any>>, arg1: string): void;
        "add(net.minecraft.world.item.Item,java.lang.String)"(arg0: Internal.Item_, arg1: string): void;
        getName(): string;
        addBlockWithTooltip(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.Block>, arg1: string): void;
        addBlockWithTooltip(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.Block>, arg1: string, arg2: string): void;
        "addTooltip(com.tterrag.registrate.util.nullness.NonNullSupplier,java.lang.String)"(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.ItemLike>, arg1: string): void;
        addItemStack(arg0: Internal.Supplier_<Internal.ItemStack>, arg1: string): void;
        "add(net.minecraft.world.item.CreativeModeTab,java.lang.String)"(arg0: Internal.CreativeModeTab_, arg1: string): void;
        add(arg0: Internal.EntityType_<any>, arg1: string): void;
        "add(net.minecraft.world.item.ItemStack,java.lang.String)"(arg0: Internal.ItemStack_, arg1: string): void;
        add(arg0: string, arg1: string): void;
        toString(): string;
        "add(net.minecraft.world.level.block.Block,java.lang.String)"(arg0: Internal.Block_, arg1: string): void;
        "add(java.lang.String,java.lang.String)"(arg0: string, arg1: string): void;
        notifyAll(): void;
        addItemWithTooltip(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.Item>, arg1: string, arg2: Internal.List_<string>): void;
        getSide(): Internal.LogicalSide;
        static toEnglishName(arg0: string): string;
        addBlock(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.Block>): void;
        addItem(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.Item>): void;
        run(arg0: Internal.CachedOutput_): Internal.CompletableFuture<any>;
        addEntityType(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.EntityType<any>>): void;
        hashCode(): number;
        add(arg0: Internal.MobEffect_, arg1: string): void;
        addItem(arg0: Internal.Supplier_<Internal.Item>, arg1: string): void;
        addEnchantment(arg0: Internal.Supplier_<Internal.Enchantment>, arg1: string): void;
        wait(): void;
        addEffect(arg0: Internal.Supplier_<Internal.MobEffect>, arg1: string): void;
        wait(arg0: number): void;
        add(arg0: Internal.Enchantment_, arg1: string): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get name(): string
        get side(): Internal.LogicalSide
    }
    type RegistrateLangProvider_ = RegistrateLangProvider;
    abstract class AbstractSequentialList <E> extends Internal.AbstractList<E> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        sort(arg0: Internal.Comparator_<E>): void;
        notify(): void;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        "remove(int)"(arg0: number): E;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        addAll(arg0: number, arg1: Internal.Collection_<E>): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        subList(arg0: number, arg1: number): Internal.List<E>;
        indexOf(arg0: any): number;
        add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        abstract listIterator(arg0: number): Internal.ListIterator<E>;
        iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        lastIndexOf(arg0: any): number;
        getClass(): typeof any;
        get(arg0: number): E;
        add(arg0: E): boolean;
        listIterator(): Internal.ListIterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        set(arg0: number, arg1: E): E;
        static of<E>(...arg0: E[]): Internal.List<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        remove(arg0: number): E;
        abstract contains(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        toString(): string;
        notifyAll(): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract toArray(): any[];
        hashCode(): number;
        abstract size(): number;
        clear(): void;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractSequentialList_<E> = AbstractSequentialList<E>;
    interface IForgeRegistryInternal <V> extends Internal.IForgeRegistry<V> {
        abstract getResourceKey(arg0: V): Internal.Optional<Internal.ResourceKey<V>>;
        abstract getDelegateOrThrow(arg0: V): Internal.Holder$Reference<V>;
        abstract iterator(): Internal.Iterator<V>;
        abstract "getDelegateOrThrow(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.Holder$Reference<V>;
        abstract getValues(): Internal.Collection<V>;
        abstract getHolder(arg0: V): Internal.Optional<Internal.Holder<V>>;
        abstract "getDelegateOrThrow(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<V>): Internal.Holder$Reference<V>;
        abstract "getDelegateOrThrow(java.lang.Object)"(arg0: V): Internal.Holder$Reference<V>;
        abstract getHolder(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder<V>>;
        spliterator(): Internal.Spliterator<V>;
        abstract "getDelegate(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract isEmpty(): boolean;
        abstract register(arg0: ResourceLocation_, arg1: V): void;
        abstract getSlaveMap<T>(arg0: ResourceLocation_, arg1: T): T;
        abstract getDelegate(arg0: V): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract getValue(arg0: number): V;
        abstract containsKey(arg0: ResourceLocation_): boolean;
        forEach(arg0: Internal.Consumer_<V>): void;
        abstract "getDelegate(java.lang.Object)"(arg0: V): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract "getValue(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): V;
        abstract getHolder(arg0: ResourceLocation_): Internal.Optional<Internal.Holder<V>>;
        abstract getDelegate(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract register(arg0: number, arg1: ResourceLocation_, arg2: V): void;
        abstract getCodec(): Internal.Codec<V>;
        abstract "getDelegate(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract "register(net.minecraft.resources.ResourceLocation,java.lang.Object)"(arg0: ResourceLocation_, arg1: V): void;
        abstract "getHolder(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.Optional<Internal.Holder<V>>;
        abstract "getHolder(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder<V>>;
        abstract "getValue(int)"(arg0: number): V;
        abstract "register(java.lang.String,java.lang.Object)"(arg0: string, arg1: V): void;
        abstract getDefaultKey(): ResourceLocation;
        abstract setSlaveMap(arg0: ResourceLocation_, arg1: any): void;
        abstract getDelegate(arg0: ResourceLocation_): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract "getHolder(java.lang.Object)"(arg0: V): Internal.Optional<Internal.Holder<V>>;
        abstract getKeys(): Internal.Set<ResourceLocation>;
        abstract tags(): Internal.ITagManager<V>;
        abstract register(arg0: string, arg1: V): void;
        abstract containsValue(arg0: V): boolean;
        abstract getRegistryKey(): Internal.ResourceKey<Internal.Registry<V>>;
        abstract getValue(arg0: ResourceLocation_): V;
        abstract getEntries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>;
        abstract getRegistryName(): ResourceLocation;
        abstract getDelegateOrThrow(arg0: Internal.ResourceKey_<V>): Internal.Holder$Reference<V>;
        abstract getKey(arg0: V): ResourceLocation;
        abstract getDelegateOrThrow(arg0: ResourceLocation_): Internal.Holder$Reference<V>;
        get values(): Internal.Collection<V>
        get empty(): boolean
        get codec(): Internal.Codec<V>
        get defaultKey(): ResourceLocation
        get keys(): Internal.Set<ResourceLocation>
        get registryKey(): Internal.ResourceKey<Internal.Registry<V>>
        get entries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>
        get registryName(): ResourceLocation
    }
    type IForgeRegistryInternal_<V> = IForgeRegistryInternal<V>;
    class LootTableLoadEvent extends Internal.Event {
        constructor()
        constructor(arg0: ResourceLocation_, arg1: Internal.LootTable_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        getName(): ResourceLocation;
        isCanceled(): boolean;
        setTable(arg0: Internal.LootTable_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getTable(): Internal.LootTable;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get name(): ResourceLocation
        get canceled(): boolean
        set table(arg0: Internal.LootTable_)
        get table(): Internal.LootTable
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type LootTableLoadEvent_ = LootTableLoadEvent;
    class CosmeticSetting$Companion {
        constructor(arg0: any_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getJson(): Internal.Json;
        fromJsonArray(arg0: string): Internal.List<Internal.CosmeticSetting>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        fromJson(arg0: string): Internal.CosmeticSetting;
        wait(): void;
        wait(arg0: number): void;
        serializer(): Internal.KSerializer<Internal.CosmeticSetting>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get json(): Internal.Json
    }
    type CosmeticSetting$Companion_ = CosmeticSetting$Companion;
    class StickBlock extends Internal.WaterBlock implements Internal.IRotatable {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        constructor(properties: Internal.BlockBehaviour$Properties_, fireSpread: number)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(state: Internal.BlockState_, pBuilder: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(state: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(stateIn: Internal.BlockState_, facing: Internal.Direction_, facingState: Internal.BlockState_, worldIn: Internal.LevelAccessor_, currentPos: BlockPos_, facingPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        static getStickShape(x: boolean, y: boolean, z: boolean): Internal.VoxelShape;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        rotate(state: Internal.BlockState_, rotation: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(state: Internal.BlockState_, worldIn: Internal.BlockGetter_, pos: BlockPos_, type: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static findConnectedFlag(world: Internal.Level_, pos: BlockPos_, searchDir: Internal.Direction_, moveDir: Internal.Direction_, it: number): boolean;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(state: Internal.BlockState_, context: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        rotateOverAxis(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): Internal.Optional<Internal.Direction>;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        applyRotationLock(world: Internal.Level_, blockPos: BlockPos_, state: Internal.BlockState_, dir: Internal.Direction_, half: number): Internal.BlockState;
        getRotatedState(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): Internal.Optional<Internal.BlockState>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(state: Internal.BlockState_, context: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, reader: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        onRotated(newState: Internal.BlockState_, oldState: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly AXIS2PROPERTY: ({[key: any]: Internal.BooleanProperty, [key: any]: Internal.BooleanProperty, [key: any]: Internal.BooleanProperty}) & (Internal.Map<Internal.Direction$Axis, Internal.BooleanProperty>);
        static readonly AXIS_Z: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly AXIS_Y: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly AXIS_X: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type StickBlock_ = StickBlock;
    class ComponentRole extends Internal.Enum<Internal.ComponentRole> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ComponentRole>>;
        toString(): string;
        compareTo(arg0: Internal.ComponentRole_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        isOutput(): boolean;
        hashCode(): number;
        static values(): Internal.ComponentRole[];
        isInput(): boolean;
        static valueOf(name: string): Internal.ComponentRole;
        ordinal(): number;
        wait(): void;
        isOther(): boolean;
        getDeclaringClass(): typeof Internal.ComponentRole;
        wait(arg0: number): void;
        "compareTo(dev.latvian.mods.kubejs.recipe.component.ComponentRole)"(arg0: Internal.ComponentRole_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get output(): boolean
        get input(): boolean
        get other(): boolean
        get declaringClass(): typeof Internal.ComponentRole
        static readonly INPUT: (Internal.ComponentRole) & (Internal.ComponentRole);
        static readonly OTHER: (Internal.ComponentRole) & (Internal.ComponentRole);
        static readonly OUTPUT: (Internal.ComponentRole) & (Internal.ComponentRole);
    }
    type ComponentRole_ = "other" | "output" | ComponentRole | "input";
    interface ClientAdvancements$Listener extends Internal.AdvancementList$Listener {
        abstract onRemoveAdvancementRoot(arg0: Internal.Advancement_): void;
        abstract onAddAdvancementRoot(arg0: Internal.Advancement_): void;
        abstract onSelectedTabChanged(arg0: Internal.Advancement_): void;
        abstract onUpdateAdvancementProgress(arg0: Internal.Advancement_, arg1: Internal.AdvancementProgress_): void;
        abstract onRemoveAdvancementTask(arg0: Internal.Advancement_): void;
        abstract onAddAdvancementTask(arg0: Internal.Advancement_): void;
        abstract onAdvancementsCleared(): void;
    }
    type ClientAdvancements$Listener_ = ClientAdvancements$Listener;
    class FlippedBlock extends Internal.Block {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly FLIPPED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type FlippedBlock_ = FlippedBlock;
    class NoColor implements Internal.Color {
        constructor()
        getClass(): typeof any;
        toString(): string;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        notifyAll(): void;
        getArgbJS(): number;
        specialEquals(o: any, shallow: boolean): boolean;
        getRgbJS(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getSerializeJS(): string;
        hashCode(): number;
        wait(): void;
        createTextColorJS(): Internal.TextColor;
        wait(arg0: number): void;
        getHexJS(): string;
        getFireworkColorJS(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get argbJS(): number
        get rgbJS(): number
        get serializeJS(): string
        get hexJS(): string
        get fireworkColorJS(): number
    }
    type NoColor_ = NoColor;
    class DetectorRailBlock extends Internal.BaseRailBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        registerDefaultState(): void;
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        updateState(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        "updateState(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.Block)"(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        updateDir(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): Internal.BlockState;
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        isFlexibleRail(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        getShapeProperty(): Internal.Property<Internal.RailShape>;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        static isRail(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getRailDirection(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): Internal.RailShape;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onMinecartPass(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): void;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        updateState(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: boolean): Internal.BlockState;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidRailShape(arg0: Internal.RailShape_): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        canMakeSlopes(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        updatePowerToConnected(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        "updateState(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.Level,net.minecraft.core.BlockPos,boolean)"(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: boolean): Internal.BlockState;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isRail(arg0: Internal.BlockState_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isStraight(): boolean;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        getRailMaxSpeed(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): number;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        get shapeProperty(): Internal.Property<Internal.RailShape>
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get straight(): boolean
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly SHAPE: Internal.EnumProperty<Internal.RailShape>;
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type DetectorRailBlock_ = DetectorRailBlock;
    class MethodInfo {
        constructor(methodInfo: Internal.JavaMembers$MethodInfo_, from: typeof any)
        constructor(method: Internal.Method_, name: string, from: typeof any)
        static getRemappedOrOriginalClass(clazz: typeof any): string;
        getClass(): typeof any;
        setParams(params: Internal.List_<Internal.MethodInfo$ParamInfo>): void;
        getExplicitName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getParams(): Internal.List<Internal.MethodInfo$ParamInfo>;
        static getMethodInfo(method: Internal.Method_, from: typeof any): Internal.Optional<Internal.JavaMembers$MethodInfo>;
        setName(name: string): void;
        getName(): string;
        getTypeVariables(): Internal.List<Internal.ITypeInfo>;
        getReturnType(): Internal.ITypeInfo;
        isStatic(): boolean;
        setReturnType(returnType: Internal.ITypeInfo_): void;
        getAnnotations(): Internal.List<Internal.Annotation>;
        isAbstract(): boolean;
        toString(): string;
        getFrom(): Internal.ClassInfo;
        notifyAll(): void;
        shouldHide(): boolean;
        getMethod(): Internal.Method;
        hashCode(): number;
        isDefaultMethod(): boolean;
        setTypeVariables(typeVariables: Internal.List_<Internal.ITypeInfo>): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        set params(params: Internal.List_<Internal.MethodInfo$ParamInfo>)
        get explicitName(): string
        get params(): Internal.List<Internal.MethodInfo$ParamInfo>
        set name(name: string)
        get name(): string
        get typeVariables(): Internal.List<Internal.ITypeInfo>
        get returnType(): Internal.ITypeInfo
        get "static"(): boolean
        set returnType(returnType: Internal.ITypeInfo_)
        get annotations(): Internal.List<Internal.Annotation>
        get "abstract"(): boolean
        get from(): Internal.ClassInfo
        get method(): Internal.Method
        get defaultMethod(): boolean
        set typeVariables(typeVariables: Internal.List_<Internal.ITypeInfo>)
        static readonly RUNTIME: (Internal.MinecraftRemapper) & (Internal.Remapper);
    }
    type MethodInfo_ = MethodInfo;
    class FrameType extends Internal.Enum<Internal.FrameType> {
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        "compareTo(net.minecraft.advancements.FrameType)"(arg0: Internal.FrameType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getName(): string;
        static byName(arg0: string): Internal.FrameType;
        getChatColor(): Internal.ChatFormatting;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        compareTo(arg0: Internal.FrameType_): number;
        getDeclaringClass(): typeof Internal.FrameType;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.FrameType;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.FrameType>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getTexture(): number;
        static values(): Internal.FrameType[];
        get displayName(): Internal.Component
        get class(): typeof any
        get name(): string
        get chatColor(): Internal.ChatFormatting
        get declaringClass(): typeof Internal.FrameType
        get texture(): number
        static readonly TASK: (Internal.FrameType) & (Internal.FrameType);
        static readonly CHALLENGE: (Internal.FrameType) & (Internal.FrameType);
        static readonly GOAL: (Internal.FrameType) & (Internal.FrameType);
    }
    type FrameType_ = "challenge" | FrameType | "goal" | "task";
    interface IEventHandler {
        abstract onEvent(arg0: Internal.EventJS_): any;
        (arg0: Internal.EventJS): any;
    }
    type IEventHandler_ = ((arg0: Internal.EventJS)=> any) | IEventHandler;
    interface RecipeComponentFactory extends Internal.CustomJavaToJsWrapper {
        convertJavaToJs(cx: Internal.Context_, scope: Internal.Scriptable_, staticType: typeof any): Internal.Scriptable;
        abstract create(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: Internal.Map_<string, any>): Internal.RecipeComponent<any>;
        (arg0: Internal.Context, arg1: Internal.Scriptable, arg2: Internal.Map<string, any>): Internal.RecipeComponent_<any>;
    }
    type RecipeComponentFactory_ = RecipeComponentFactory | ((arg0: Internal.Context, arg1: Internal.Scriptable, arg2: Internal.Map<string, any>)=> Internal.RecipeComponent_<any>);
    interface WorldRendererAccessor {
        abstract sodiumdynamiclights$scheduleChunkRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        (arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    }
    type WorldRendererAccessor_ = WorldRendererAccessor | ((arg0: number, arg1: number, arg2: number, arg3: boolean)=> void);
    interface TravellingPoint$ITrackSelector extends Internal.BiFunction<Internal.TrackGraph, Internal.Pair<boolean, Internal.List<Internal.Map$Entry<Internal.TrackNode, Internal.TrackEdge>>>, Internal.Map$Entry<Internal.TrackNode, Internal.TrackEdge>> {
        andThen<V>(arg0: Internal.Function_<Internal.Map$Entry<Internal.TrackNode, Internal.TrackEdge>, V>): Internal.BiFunction<Internal.TrackGraph, Internal.Pair<boolean, Internal.List<Internal.Map$Entry<Internal.TrackNode, Internal.TrackEdge>>>, V>;
        abstract apply(arg0: Internal.TrackGraph_, arg1: Internal.Pair_<boolean, Internal.List<Internal.Map$Entry<Internal.TrackNode, Internal.TrackEdge>>>): Internal.Map$Entry<Internal.TrackNode, Internal.TrackEdge>;
        (arg0: Internal.TrackGraph, arg1: Internal.Pair<boolean, Internal.List<Internal.Map$Entry<Internal.TrackNode, Internal.TrackEdge>>>): Internal.Map$Entry_<Internal.TrackNode, Internal.TrackEdge>;
    }
    type TravellingPoint$ITrackSelector_ = TravellingPoint$ITrackSelector | ((arg0: Internal.TrackGraph, arg1: Internal.Pair<boolean, Internal.List<Internal.Map$Entry<Internal.TrackNode, Internal.TrackEdge>>>)=> Internal.Map$Entry_<Internal.TrackNode, Internal.TrackEdge>);
    class ShapelessRecipe implements Internal.CraftingRecipe {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CraftingBookCategory_, arg3: Internal.ItemStack_, arg4: Internal.NonNullList_<Internal.Ingredient>)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notify(): void;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        handler$dic000$fabric_recipe_api_v1$customIngredientMatch(craftingInventory: Internal.CraftingContainer_, world: Internal.Level_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        readonly ingredients: Internal.NonNullList<Internal.Ingredient>;
        readonly category: Internal.CraftingBookCategory;
        readonly result: Internal.ItemStack;
        readonly group: string;
    }
    type ShapelessRecipe_ = ShapelessRecipe;
    class CageBlockTile extends Internal.BlockEntity implements Internal.IMobContainerProvider {
        constructor(pos: BlockPos_, state: Internal.BlockState_)
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        handler$bfi000$setRemoved(arg0: Internal.CallbackInfo_): void;
        load(compound: Internal.CompoundTag_): void;
        setChanged(): void;
        setCulled(value: boolean): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setTimeout(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        isOutOfCamera(): boolean;
        "getUpdatePacket()"(): Internal.Packet<any>;
        static tick(pLevel: Internal.Level_, pPos: BlockPos_, pState: Internal.BlockState_, tile: Internal.CageBlockTile_): void;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isCulled(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        sdl$getDynamicLightX(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        saveToNbt(stack: Internal.ItemStack_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getMobContainer(): Internal.MobContainer;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        saveAdditional(compound: Internal.CompoundTag_): void;
        handler$bfi000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setOutOfCamera(value: boolean): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        isForcedVisible(): boolean;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        getDirection(): Internal.Direction;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        set culled(value: boolean)
        get outOfCamera(): boolean
        get "updatePacket()"(): Internal.Packet<any>
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        get mobContainer(): Internal.MobContainer
        set outOfCamera(value: boolean)
        get level(): Internal.Level
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get forcedVisible(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        get direction(): Internal.Direction
        mobContainer: Internal.MobContainer;
    }
    type CageBlockTile_ = CageBlockTile;
    class DeferralBehaviour extends Internal.BlockEntityBehaviour {
        constructor(arg0: Internal.SmartBlockEntity_, arg1: Internal.Supplier_<boolean>)
        getClass(): typeof any;
        isSafeNBT(): boolean;
        scheduleUpdate(): void;
        destroy(): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        onNeighborChanged(arg0: BlockPos_): void;
        static get<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BehaviourType_<T>): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPos(): BlockPos;
        unload(): void;
        read(arg0: Internal.CompoundTag_, arg1: boolean): void;
        setLazyTickRate(arg0: number): void;
        static get<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BlockEntity_, arg1: Internal.BehaviourType_<T>): T;
        initialize(): void;
        getWorld(): Internal.Level;
        toString(): string;
        notifyAll(): void;
        writeSafe(arg0: Internal.CompoundTag_): void;
        tick(): void;
        lazyTick(): void;
        hashCode(): number;
        getRequiredItems(): Internal.ItemRequirement;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onBlockChanged(arg0: Internal.BlockState_): void;
        getType(): Internal.BehaviourType<any>;
        get class(): typeof any
        get safeNBT(): boolean
        get pos(): BlockPos
        set lazyTickRate(arg0: number)
        get world(): Internal.Level
        get requiredItems(): Internal.ItemRequirement
        get type(): Internal.BehaviourType<any>
        static readonly TYPE: Internal.BehaviourType<Internal.DeferralBehaviour>;
    }
    type DeferralBehaviour_ = DeferralBehaviour;
    class PlayerRenderer extends Internal.LivingEntityRenderer<Internal.AbstractClientPlayer, Internal.PlayerModel<Internal.AbstractClientPlayer>> implements Internal.PlayerEntityRendererExt {
        constructor(arg0: Internal.EntityRendererProvider$Context_, arg1: boolean)
        setupRotations(arg0: Internal.AbstractClientPlayer_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number): void;
        getBob(arg0: Internal.AbstractClientPlayer_, arg1: number): number;
        "scale(net.minecraft.world.entity.LivingEntity,com.mojang.blaze3d.vertex.PoseStack,float)"(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number): void;
        render(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        isShaking(arg0: Internal.AbstractClientPlayer_): boolean;
        handler$del000$parcool$onSetupRotationsHead(arg0: Internal.AbstractClientPlayer_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number, arg5: Internal.CallbackInfo_): void;
        getTextureLocation(arg0: Internal.Entity_): ResourceLocation;
        notify(): void;
        "renderNameTag(net.minecraft.world.entity.Entity,net.minecraft.network.chat.Component,com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,int)"(arg0: Internal.Entity_, arg1: Internal.Component_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number): void;
        "render(net.minecraft.world.entity.LivingEntity,float,float,com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,int)"(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        static getOverlayCoords(arg0: Internal.LivingEntity_, arg1: number): number;
        shadowRenderNameTag(entity: Internal.Entity_, component: Internal.Component_, poseStack: Internal.PoseStack_, multiBufferSource: Internal.MultiBufferSource_, light: number, delta: number): void;
        "getTextureLocation(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): ResourceLocation;
        static isEntityUpsideDown(arg0: Internal.LivingEntity_): boolean;
        addLayer(arg0: Internal.RenderLayer_<Internal.AbstractClientPlayer, Internal.PlayerModel<Internal.AbstractClientPlayer>>): boolean;
        "render(net.minecraft.client.player.AbstractClientPlayer,float,float,com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,int)"(arg0: Internal.AbstractClientPlayer_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        shouldShowName(arg0: Internal.Entity_): boolean;
        render(arg0: Internal.AbstractClientPlayer_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        setupRotations(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number): void;
        "renderNameTag(net.minecraft.client.player.AbstractClientPlayer,net.minecraft.network.chat.Component,com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,int)"(arg0: Internal.AbstractClientPlayer_, arg1: Internal.Component_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number): void;
        "setupRotations(net.minecraft.client.player.AbstractClientPlayer,com.mojang.blaze3d.vertex.PoseStack,float,float,float)"(arg0: Internal.AbstractClientPlayer_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number): void;
        shouldRender(arg0: Internal.AbstractClientPlayer_, arg1: Internal.Frustum_, arg2: number, arg3: number, arg4: number): boolean;
        shadowShouldShowName(entity: Internal.Entity_): boolean;
        "setupRotations(net.minecraft.world.entity.LivingEntity,com.mojang.blaze3d.vertex.PoseStack,float,float,float)"(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number): void;
        getSkyLightLevel(arg0: Internal.AbstractClientPlayer_, arg1: BlockPos_): number;
        "getRenderOffset(net.minecraft.client.player.AbstractClientPlayer,float)"(arg0: Internal.AbstractClientPlayer_, arg1: number): Vec3d;
        renderLeftHand(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: Internal.AbstractClientPlayer_): void;
        getFlipDegrees(arg0: Internal.AbstractClientPlayer_): number;
        wait(): void;
        render(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        entityCullingGetCullingBox(entity: Internal.Entity_): Internal.AABB;
        "render(net.minecraft.world.entity.Entity,float,float,com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,int)"(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        essential$getEssentialModelRenderer(): Internal.EssentialModelRenderer;
        getPackedLightCoords(arg0: Internal.AbstractClientPlayer_, arg1: number): number;
        handler$deh000$parcool$onShouldShowName(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getClass(): typeof any;
        getWhiteOverlayProgress(arg0: Internal.AbstractClientPlayer_, arg1: number): number;
        essential$getTransform(player: Internal.AbstractClientPlayer_, yaw: number, partialTicks: number): Internal.Mat4;
        scale(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number): void;
        "shouldShowName(net.minecraft.client.player.AbstractClientPlayer)"(arg0: Internal.AbstractClientPlayer_): boolean;
        renderRightHand(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: Internal.AbstractClientPlayer_): void;
        wait(arg0: number, arg1: number): void;
        handler$del000$parcool$onSetupRotationsTail(arg0: Internal.AbstractClientPlayer_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number, arg5: Internal.CallbackInfo_): void;
        isBodyVisible(arg0: Internal.AbstractClientPlayer_): boolean;
        getModel(): Internal.PlayerModel<Internal.AbstractClientPlayer>;
        entityCullingIgnoresCulling(entity: Internal.Entity_): boolean;
        essential$getFeatures(): Internal.Iterable<any>;
        getTextureLocation(arg0: Internal.AbstractClientPlayer_): ResourceLocation;
        getRenderOffset(arg0: Internal.AbstractClientPlayer_, arg1: number): Vec3d;
        getRenderOffset(arg0: Internal.Entity_, arg1: number): Vec3d;
        "getTextureLocation(net.minecraft.client.player.AbstractClientPlayer)"(arg0: Internal.AbstractClientPlayer_): ResourceLocation;
        renderNameTag(arg0: Internal.AbstractClientPlayer_, arg1: Internal.Component_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number): void;
        renderNameTag(arg0: Internal.Entity_, arg1: Internal.Component_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number): void;
        "shouldShowName(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        toString(): string;
        "getRenderOffset(net.minecraft.world.entity.Entity,float)"(arg0: Internal.Entity_, arg1: number): Vec3d;
        notifyAll(): void;
        shouldShowName(arg0: Internal.AbstractClientPlayer_): boolean;
        getAttackAnim(arg0: Internal.AbstractClientPlayer_, arg1: number): number;
        getFont(): Internal.Font;
        hashCode(): number;
        "scale(net.minecraft.client.player.AbstractClientPlayer,com.mojang.blaze3d.vertex.PoseStack,float)"(arg0: Internal.AbstractClientPlayer_, arg1: Internal.PoseStack_, arg2: number): void;
        getRenderType(arg0: Internal.AbstractClientPlayer_, arg1: boolean, arg2: boolean, arg3: boolean): Internal.RenderType;
        wait(arg0: number): void;
        getBlockLightLevel(arg0: Internal.AbstractClientPlayer_, arg1: BlockPos_): number;
        equals(arg0: any): boolean;
        scale(arg0: Internal.AbstractClientPlayer_, arg1: Internal.PoseStack_, arg2: number): void;
        get class(): typeof any
        get model(): Internal.PlayerModel<Internal.AbstractClientPlayer>
        get font(): Internal.Font
        essentialModelRenderer: Internal.EssentialModelRenderer;
    }
    type PlayerRenderer_ = PlayerRenderer;
    interface ItemEntityKJS extends Internal.EntityKJS {
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        getTicksUntilDespawn(): number;
        setNoPickUpDelay(): void;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isAmbientCreature(): boolean;
        setTicksUntilDespawn(ticks: number): void;
        isMonster(): boolean;
        isOnScoreboardTeam(teamId: string): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        isLiving(): boolean;
        setDefaultPickUpDelay(): void;
        getLifespan(): number;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setInfinitePickUpDelay(): void;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getPersistentData(): Internal.CompoundTag;
        setNoDespawn(): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setLifespan(lifespan: number): void;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        runCommand(command: string): number;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ticksUntilDespawn(): number
        get ambientCreature(): boolean
        set ticksUntilDespawn(ticks: number)
        get monster(): boolean
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get lifespan(): number
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get facing(): Internal.Direction
        get scriptType(): Internal.ScriptType
        get motionX(): number
        get waterCreature(): boolean
        get persistentData(): Internal.CompoundTag
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        set lifespan(lifespan: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
    }
    type ItemEntityKJS_ = ItemEntityKJS;
    class BanDetails extends Internal.Record {
        constructor(id: Internal.UUID_, expires: Internal.Instant_, reason: string, reasonMessage: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        reason(): string;
        hashCode(): number;
        id(): Internal.UUID;
        wait(): void;
        expires(): Internal.Instant;
        wait(arg0: number): void;
        reasonMessage(): string;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly MULTIPLAYER_SCOPE: ("MULTIPLAYER") & (string);
    }
    type BanDetails_ = BanDetails;
    interface EpsilonizableBlockElement {
        abstract embeddium$epsilonize(): void;
        (): void;
    }
    type EpsilonizableBlockElement_ = EpsilonizableBlockElement | (()=> void);
    class GameRules$Type <T extends Internal.GameRules$Value<T>> {
        constructor(arg0: Internal.Supplier_<Internal.ArgumentType<any>>, arg1: Internal.Function_<Internal.GameRules$Type<T>, T>, arg2: Internal.BiConsumer_<Internal.MinecraftServer, T>, arg3: any_<T>)
        getClass(): typeof any;
        callVisitor(arg0: Internal.GameRules$GameRuleTypeVisitor_, arg1: Internal.GameRules$Key_<T>): void;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        createRule(): T;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        createArgument(arg0: string): Internal.RequiredArgumentBuilder<Internal.CommandSourceStack, any>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly callback: Internal.BiConsumer<Internal.MinecraftServer, T>;
    }
    type GameRules$Type_<T extends Internal.GameRules$Value<T>> = GameRules$Type<T>;
    class BookCopyAttribute$Type implements Internal.ItemAttributeType {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getAllAttributes(arg0: Internal.ItemStack_, arg1: Internal.Level_): Internal.List<Internal.ItemAttribute>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        createAttribute(): Internal.ItemAttribute;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type BookCopyAttribute$Type_ = BookCopyAttribute$Type;
    class BeeDebugRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        constructor(arg0: Internal.Minecraft_)
        getClass(): typeof any;
        toString(): string;
        removeBeeInfo(arg0: number): void;
        addOrUpdateBeeInfo(arg0: Internal.BeeDebugRenderer$BeeInfo_): void;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        addOrUpdateHiveInfo(arg0: Internal.BeeDebugRenderer$HiveInfo_): void;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type BeeDebugRenderer_ = BeeDebugRenderer;
    abstract class HitResult {
        constructor(arg0: Vec3d_)
        getClass(): typeof any;
        hashCode(): number;
        distanceTo(arg0: Internal.Entity_): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getLocation(): Vec3d;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract getType(): Internal.HitResult$Type;
        get class(): typeof any
        get location(): Vec3d
        get type(): Internal.HitResult$Type
        readonly location: Vec3d;
    }
    type HitResult_ = HitResult;
    abstract class StockCheckingBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        destroy(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        broadcastPackageRequest(arg0: Internal.LogisticallyLinkedBehaviour$RequestType_, arg1: Internal.PackageOrderWithCrafts_, arg2: Internal.IdentifiedInventory_, arg3: string): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        handler$bfi000$setRemoved(arg0: Internal.CallbackInfo_): void;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        setCulled(value: boolean): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setTimeout(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        isOutOfCamera(): boolean;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        isCulled(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        sdl$getDynamicLightX(): number;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        sdl$dynamicLightTick(): void;
        invalidate(): void;
        getRecentSummary(): Internal.InventorySummary;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        sendData(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        initialize(): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        lazyTick(): void;
        "broadcastPackageRequest(com.simibubi.create.content.logistics.packagerLink.LogisticallyLinkedBehaviour$RequestType,com.simibubi.create.content.logistics.stockTicker.PackageOrderWithCrafts,com.simibubi.create.content.logistics.packager.IdentifiedInventory,java.lang.String)"(arg0: Internal.LogisticallyLinkedBehaviour$RequestType_, arg1: Internal.PackageOrderWithCrafts_, arg2: Internal.IdentifiedInventory_, arg3: string): boolean;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        handler$bfi000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        notifyUpdate(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setOutOfCamera(value: boolean): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        getAccurateSummary(): Internal.InventorySummary;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        "broadcastPackageRequest(com.simibubi.create.content.logistics.packagerLink.LogisticallyLinkedBehaviour$RequestType,com.simibubi.create.content.logistics.stockTicker.PackageOrder,com.simibubi.create.content.logistics.packager.IdentifiedInventory,java.lang.String)"(arg0: Internal.LogisticallyLinkedBehaviour$RequestType_, arg1: Internal.PackageOrder_, arg2: Internal.IdentifiedInventory_, arg3: string): boolean;
        sdl$getDynamicLightZ(): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        isForcedVisible(): boolean;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        broadcastPackageRequest(arg0: Internal.LogisticallyLinkedBehaviour$RequestType_, arg1: Internal.PackageOrder_, arg2: Internal.IdentifiedInventory_, arg3: string): boolean;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        set culled(value: boolean)
        get outOfCamera(): boolean
        get "updatePacket()"(): Internal.Packet<any>
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get recentSummary(): Internal.InventorySummary
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        set outOfCamera(value: boolean)
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get accurateSummary(): Internal.InventorySummary
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get forcedVisible(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        behaviour: Internal.LogisticallyLinkedBehaviour;
    }
    type StockCheckingBlockEntity_ = StockCheckingBlockEntity;
    interface Float2ObjectFunction <V> extends Internal.DoubleFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        "apply(java.lang.Float)"(arg0: number): V;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2ObjectFunction<V>;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2ObjectFunction<V>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        getOrDefault(arg0: number, arg1: V): V;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2ObjectFunction<V>;
        "getOrDefault(float,java.lang.Object)"(arg0: number, arg1: V): V;
        "containsKey(float)"(arg0: number): boolean;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2ObjectFunction<V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Float2ByteFunction;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        abstract get(arg0: number): V;
        apply(arg0: number): V;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Float2LongFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        defaultReturnValue(): V;
        put(arg0: number, arg1: V): V;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2ObjectFunction<V>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Float2FloatFunction;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        "apply(double)"(arg0: number): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Float2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Float2IntFunction;
        "put(float,java.lang.Object)"(arg0: number, arg1: V): V;
        abstract "get(float)"(arg0: number): V;
        /**
         * @deprecated
        */
        "put(java.lang.Float,java.lang.Object)"(arg0: number, arg1: V): V;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Float2ObjectFunction<T>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Float2ShortFunction;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Float2DoubleFunction;
        size(): number;
        "remove(float)"(arg0: number): V;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2ObjectFunction<V>;
        clear(): void;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Float2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
    }
    type Float2ObjectFunction_<V> = Float2ObjectFunction<V>;
    class AllArmInteractionPointTypes$ComposterType extends Internal.ArmInteractionPointType {
        constructor()
        getClass(): typeof any;
        createPoint(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ArmInteractionPoint;
        toString(): string;
        static init(): void;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        canCreatePoint(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        static getPrimaryType(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ArmInteractionPointType;
        hashCode(): number;
        getPriority(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get priority(): number
    }
    type AllArmInteractionPointTypes$ComposterType_ = AllArmInteractionPointTypes$ComposterType;
    class CreativeModeTab$TabVisibility extends Internal.Enum<Internal.CreativeModeTab$TabVisibility> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        compareTo(arg0: Internal.CreativeModeTab$TabVisibility_): number;
        getDeclaringClass(): typeof Internal.CreativeModeTab$TabVisibility;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static values(): Internal.CreativeModeTab$TabVisibility[];
        name(): string;
        hashCode(): number;
        "compareTo(net.minecraft.world.item.CreativeModeTab$TabVisibility)"(arg0: Internal.CreativeModeTab$TabVisibility_): number;
        static valueOf(arg0: string): Internal.CreativeModeTab$TabVisibility;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CreativeModeTab$TabVisibility>>;
        get class(): typeof any
        get declaringClass(): typeof Internal.CreativeModeTab$TabVisibility
        static readonly PARENT_TAB_ONLY: (Internal.CreativeModeTab$TabVisibility) & (Internal.CreativeModeTab$TabVisibility);
        static readonly SEARCH_TAB_ONLY: (Internal.CreativeModeTab$TabVisibility) & (Internal.CreativeModeTab$TabVisibility);
        static readonly PARENT_AND_SEARCH_TABS: (Internal.CreativeModeTab$TabVisibility) & (Internal.CreativeModeTab$TabVisibility);
    }
    type CreativeModeTab$TabVisibility_ = CreativeModeTab$TabVisibility | "parent_and_search_tabs" | "parent_tab_only" | "search_tab_only";
    class Cosmetic {
        constructor(arg0: Internal.CosmeticBase_, arg1: Internal.CosmeticStoreInfo_, arg2: Internal.List_<Internal.Cosmetic$Diagnostic>)
        constructor(arg0: Internal.CosmeticBase_, arg1: Internal.CosmeticStoreInfo_, arg2: Internal.List_<any>, arg3: number, arg4: any_)
        getStoreInfo(): Internal.CosmeticStoreInfo;
        getTier(): Internal.CosmeticTier;
        getVariants(): Internal.List<Internal.CosmeticProperty$Variants$Variant>;
        static getPartnerMod$annotations(): void;
        notify(): void;
        isPartnered(): boolean;
        getAvailableAfter(): Internal.Instant;
        getCategories(): Internal.Map<string, number>;
        component2(): Internal.CosmeticStoreInfo;
        "assets(java.util.List)"(arg0: Internal.List_<Internal.CosmeticSetting>): Internal.CosmeticAssets;
        getLocalPath(): string;
        static isPartnered$annotations(): void;
        getFiles(): Internal.Map<string, Internal.EssentialAsset>;
        isLegacy(): boolean;
        getTags(): Internal.Set<string>;
        static copy$default(arg0: Internal.Cosmetic_, arg1: Internal.CosmeticBase_, arg2: Internal.CosmeticStoreInfo_, arg3: Internal.List_<any>, arg4: number, arg5: any): Internal.Cosmetic;
        copy(arg0: Internal.CosmeticBase_, arg1: Internal.CosmeticStoreInfo_, arg2: Internal.List_<Internal.Cosmetic$Diagnostic>): this;
        wait(): void;
        getPrice(): number;
        getPartnerName(): string;
        isCosmeticFree(): boolean;
        getDefaultSortWeight(): number;
        getAvailableUntil(): Internal.Instant;
        getBase(): Internal.CosmeticBase;
        getDiagnostics(): Internal.List<Internal.Cosmetic$Diagnostic>;
        getClass(): typeof any;
        getSlot(): Internal.CosmeticSlot;
        getAssetVariants(): Internal.Map<string, Internal.CosmeticAssets>;
        getDefaultVariantName(): string;
        property<T extends Internal.CosmeticProperty>(): T;
        static getPartnerCreator$annotations(): void;
        getPartnerMod(): string;
        wait(arg0: number, arg1: number): void;
        getPartnerCreator(): boolean;
        static getPartnerName$annotations(): void;
        getAllProperties(): Internal.List<Internal.CosmeticProperty>;
        getBaseAssets(): Internal.CosmeticAssets;
        getDisplayNames(): Internal.Map<string, string>;
        "assets(java.lang.String)"(arg0: string): Internal.CosmeticAssets;
        properties<T extends Internal.CosmeticProperty>(): Internal.List<T>;
        getMutuallyExclusiveWith(): Internal.Set<Internal.CosmeticSlot>;
        getDisplayName(): string;
        getDefaultVariantSetting(): Internal.CosmeticSetting$Variant;
        getDefaultSide(): Internal.Side;
        getDefaultVariant(): Internal.CosmeticProperty$Variants$Variant;
        getDisabledProperties(): Internal.List<Internal.CosmeticProperty>;
        static getPartnerEvent$annotations(): void;
        component3(): Internal.List<Internal.Cosmetic$Diagnostic>;
        assets(arg0: Internal.List_<Internal.CosmeticSetting>): Internal.CosmeticAssets;
        toString(): string;
        static getEmoteInterruptionTriggers$annotations(): void;
        notifyAll(): void;
        component1(): Internal.CosmeticBase;
        getPartnerEvent(): string;
        getId(): string;
        getDisplayName(arg0: string): string;
        hashCode(): number;
        assets(arg0: string): Internal.CosmeticAssets;
        requiresUnlockAction(): boolean;
        getProperties(): Internal.List<Internal.CosmeticProperty>;
        getEmoteInterruptionTriggers(): Internal.CosmeticProperty$InterruptsEmote$Data;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getShowTimerAfter(): Internal.Instant;
        isPurchasable(): boolean;
        get storeInfo(): Internal.CosmeticStoreInfo
        get tier(): Internal.CosmeticTier
        get variants(): Internal.List<Internal.CosmeticProperty$Variants$Variant>
        get partnerMod$annotations(): void
        get partnered(): boolean
        get availableAfter(): Internal.Instant
        get categories(): Internal.Map<string, number>
        get localPath(): string
        get files(): Internal.Map<string, Internal.EssentialAsset>
        get legacy(): boolean
        get tags(): Internal.Set<string>
        get price(): number
        get partnerName(): string
        get cosmeticFree(): boolean
        get defaultSortWeight(): number
        get availableUntil(): Internal.Instant
        get base(): Internal.CosmeticBase
        get diagnostics(): Internal.List<Internal.Cosmetic$Diagnostic>
        get class(): typeof any
        get slot(): Internal.CosmeticSlot
        get assetVariants(): Internal.Map<string, Internal.CosmeticAssets>
        get defaultVariantName(): string
        get partnerCreator$annotations(): void
        get partnerMod(): string
        get partnerCreator(): boolean
        get partnerName$annotations(): void
        get allProperties(): Internal.List<Internal.CosmeticProperty>
        get baseAssets(): Internal.CosmeticAssets
        get displayNames(): Internal.Map<string, string>
        get mutuallyExclusiveWith(): Internal.Set<Internal.CosmeticSlot>
        get displayName(): string
        get defaultVariantSetting(): Internal.CosmeticSetting$Variant
        get defaultSide(): Internal.Side
        get defaultVariant(): Internal.CosmeticProperty$Variants$Variant
        get disabledProperties(): Internal.List<Internal.CosmeticProperty>
        get partnerEvent$annotations(): void
        get emoteInterruptionTriggers$annotations(): void
        get partnerEvent(): string
        get id(): string
        get properties(): Internal.List<Internal.CosmeticProperty>
        get emoteInterruptionTriggers(): Internal.CosmeticProperty$InterruptsEmote$Data
        get showTimerAfter(): Internal.Instant
        get purchasable(): boolean
    }
    type Cosmetic_ = Cosmetic;
    class SignableCommand$Argument <S> extends Internal.Record {
        constructor(arg0: Internal.ArgumentCommandNode_<S, any>, arg1: string)
        name(): string;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        node(): Internal.ArgumentCommandNode<S, any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        value(): string;
        get class(): typeof any
    }
    type SignableCommand$Argument_<S> = SignableCommand$Argument<S>;
    class ClientboundPlayerInfoUpdatePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.EnumSet_<Internal.ClientboundPlayerInfoUpdatePacket$Action>, arg1: Internal.Collection_<Internal.ServerPlayer>)
        constructor(arg0: Internal.ClientboundPlayerInfoUpdatePacket$Action_, arg1: Internal.ServerPlayer_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        static createPlayerInitializing(arg0: Internal.Collection_<Internal.ServerPlayer>): Internal.ClientboundPlayerInfoUpdatePacket;
        toString(): string;
        actions(): Internal.EnumSet<Internal.ClientboundPlayerInfoUpdatePacket$Action>;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        newEntries(): Internal.List<Internal.ClientboundPlayerInfoUpdatePacket$Entry>;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        entries(): Internal.List<Internal.ClientboundPlayerInfoUpdatePacket$Entry>;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
    }
    type ClientboundPlayerInfoUpdatePacket_ = ClientboundPlayerInfoUpdatePacket;
    class ZonedDateTime implements Internal.ChronoZonedDateTime<Internal.LocalDate>, Internal.Temporal, Internal.Serializable {
        getMonth(): Internal.Month;
        toLocalTime(): Internal.LocalTime;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        minus(arg0: Internal.TemporalAmount_): Internal.ChronoZonedDateTime<any>;
        withDayOfMonth(arg0: number): this;
        toInstant(): Internal.Instant;
        static ofLocal(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneId_, arg2: Internal.ZoneOffset_): Internal.ZonedDateTime;
        withZoneSameLocal(arg0: Internal.ZoneId_): Internal.ChronoZonedDateTime<any>;
        getDayOfMonth(): number;
        withDayOfYear(arg0: number): this;
        minusDays(arg0: number): this;
        compareTo(arg0: Internal.ChronoZonedDateTime_<any>): number;
        "isSupported(java.time.temporal.TemporalField)"(arg0: Internal.TemporalField_): boolean;
        minusSeconds(arg0: number): this;
        getYear(): number;
        plus(arg0: Internal.TemporalAmount_): this;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.ZonedDateTime;
        static now(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        "compareTo(java.lang.Object)"(arg0: any): number;
        toEpochSecond(): number;
        getMonthValue(): number;
        getClass(): typeof any;
        static from(arg0: Internal.TemporalAccessor_): Internal.ZonedDateTime;
        minusNanos(arg0: number): this;
        plusMonths(arg0: number): this;
        static now(): Internal.ZonedDateTime;
        plusNanos(arg0: number): this;
        getZone(): Internal.ZoneId;
        "with"(arg0: Internal.TemporalField_, arg1: number): this;
        getLong(arg0: Internal.TemporalField_): number;
        static timeLineOrder(): Internal.Comparator<Internal.ChronoZonedDateTime<any>>;
        withHour(arg0: number): this;
        withEarlierOffsetAtOverlap(): Internal.ChronoZonedDateTime<any>;
        minusHours(arg0: number): this;
        withZoneSameInstant(arg0: Internal.ZoneId_): this;
        getOffset(): Internal.ZoneOffset;
        toString(): string;
        notifyAll(): void;
        static of(arg0: Internal.LocalDate_, arg1: Internal.LocalTime_, arg2: Internal.ZoneId_): Internal.ZonedDateTime;
        getSecond(): number;
        getNano(): number;
        toLocalDateTime(): Internal.ChronoLocalDateTime<any>;
        minusYears(arg0: number): this;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        wait(arg0: number): void;
        plusWeeks(arg0: number): this;
        getHour(): number;
        isAfter(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        plus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        getDayOfWeek(): Internal.DayOfWeek;
        static "now(java.time.Clock)"(arg0: Internal.Clock_): Internal.ZonedDateTime;
        notify(): void;
        withMonth(arg0: number): this;
        compareTo(arg0: any): number;
        withMinute(arg0: number): this;
        getMinute(): number;
        withLaterOffsetAtOverlap(): Internal.ChronoZonedDateTime<any>;
        minusWeeks(arg0: number): this;
        withFixedOffsetZone(): this;
        plusSeconds(arg0: number): this;
        plusMinutes(arg0: number): this;
        plusYears(arg0: number): this;
        plusDays(arg0: number): this;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.ZoneId_): Internal.ZonedDateTime;
        withYear(arg0: number): this;
        static ofStrict(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneId_): Internal.ZonedDateTime;
        isSupported(arg0: Internal.TemporalField_): boolean;
        format(arg0: Internal.DateTimeFormatter_): string;
        getChronology(): Internal.Chronology;
        isBefore(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        wait(): void;
        minusMonths(arg0: number): this;
        "with"(arg0: Internal.TemporalAdjuster_): Internal.ChronoZonedDateTime<any>;
        static "now(java.time.ZoneId)"(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        "isSupported(java.time.temporal.TemporalUnit)"(arg0: Internal.TemporalUnit_): boolean;
        withSecond(arg0: number): this;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.ZonedDateTime;
        static of(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneId_): Internal.ZonedDateTime;
        toLocalDate(): Internal.LocalDate;
        wait(arg0: number, arg1: number): void;
        static ofInstant(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneId_): Internal.ZonedDateTime;
        "compareTo(java.time.chrono.ChronoZonedDateTime)"(arg0: Internal.ChronoZonedDateTime_<any>): number;
        withNano(arg0: number): this;
        getDayOfYear(): number;
        isEqual(arg0: Internal.ChronoZonedDateTime_<any>): boolean;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        minusMinutes(arg0: number): this;
        plusHours(arg0: number): this;
        static parse(arg0: Internal.CharSequence_): Internal.ZonedDateTime;
        hashCode(): number;
        static now(arg0: Internal.Clock_): Internal.ZonedDateTime;
        toOffsetDateTime(): Internal.OffsetDateTime;
        equals(arg0: any): boolean;
        get month(): Internal.Month
        get dayOfMonth(): number
        get year(): number
        get monthValue(): number
        get class(): typeof any
        get zone(): Internal.ZoneId
        get offset(): Internal.ZoneOffset
        get second(): number
        get nano(): number
        get hour(): number
        get dayOfWeek(): Internal.DayOfWeek
        get minute(): number
        get chronology(): Internal.Chronology
        get dayOfYear(): number
    }
    type ZonedDateTime_ = ZonedDateTime;
    interface ValueSettingsBehaviour extends Internal.ClipboardCloneable {
        abstract getValueSettings(): Internal.ValueSettingsBehaviour$ValueSettings;
        getClipboardKey(): string;
        onlyVisibleWithWrench(): boolean;
        abstract isActive(): boolean;
        netId(): number;
        abstract setValueSettings(arg0: Internal.Player_, arg1: Internal.ValueSettingsBehaviour$ValueSettings_, arg2: boolean): void;
        playFeedbackSound(arg0: Internal.BlockEntityBehaviour_): void;
        abstract getSlotPositioning(): Internal.ValueBoxTransform;
        readFromClipboard(arg0: Internal.CompoundTag_, arg1: Internal.Player_, arg2: Internal.Direction_, arg3: boolean): boolean;
        bypassesInput(arg0: Internal.ItemStack_): boolean;
        mayInteract(arg0: Internal.Player_): boolean;
        onShortInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.Direction_, arg3: Internal.BlockHitResult_): void;
        abstract createBoard(arg0: Internal.Player_, arg1: Internal.BlockHitResult_): Internal.ValueSettingsBoard;
        abstract testHit(arg0: Vec3d_): boolean;
        acceptsValueSettings(): boolean;
        writeToClipboard(arg0: Internal.CompoundTag_, arg1: Internal.Direction_): boolean;
        newSettingHovered(arg0: Internal.ValueSettingsBehaviour$ValueSettings_): void;
        get valueSettings(): Internal.ValueSettingsBehaviour$ValueSettings
        get clipboardKey(): string
        get active(): boolean
        get slotPositioning(): Internal.ValueBoxTransform
    }
    type ValueSettingsBehaviour_ = ValueSettingsBehaviour;
    abstract class Record {
        getClass(): typeof any;
        abstract hashCode(): number;
        abstract toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        abstract equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type Record_ = Record;
    abstract class ModelEvent extends Internal.Event {
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ModelEvent_ = ModelEvent;
    interface IPasscodeProtected extends Internal.ICodebreakable {
        handleCodebreaking(arg0: Internal.Player_, arg1: Internal.InteractionHand_): boolean;
        abstract setSaltKey(arg0: Internal.UUID_): void;
        setSaveSalt(arg0: boolean): void;
        loadSaltKey(arg0: Internal.CompoundTag_): void;
        hashAndSetPasscode(arg0: string): void;
        "hashAndSetPasscode(java.lang.String,byte[])"(arg0: string, arg1: number[]): void;
        hashAndSetPasscode(arg0: string, arg1: number[], arg2: Internal.Consumer_<number[]>): void;
        openSetPasscodeScreen(arg0: Internal.ServerPlayer_, arg1: BlockPos_): void;
        abstract getCooldownEnd(): number;
        loadPasscode(arg0: Internal.CompoundTag_): void;
        abstract startCooldown(): void;
        abstract setPasscode(arg0: number[]): void;
        getSalt(): number[];
        setPasscodeInAdjacentBlock(arg0: string): void;
        abstract isOnCooldown(): boolean;
        abstract activate(arg0: Internal.Player_): void;
        shouldSaveSalt(): boolean;
        onIncorrectPasscodeEntered(arg0: Internal.Player_, arg1: string): void;
        shouldAttemptCodebreak(arg0: Internal.Player_): boolean;
        "hashAndSetPasscode(java.lang.String,java.util.function.Consumer)"(arg0: string, arg1: Internal.Consumer_<number[]>): void;
        openPasscodeGUI(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_): void;
        hashAndSetPasscode(arg0: string, arg1: Internal.Consumer_<number[]>): void;
        useCodebreaker(arg0: Internal.Player_): void;
        verifyPasscodeSet(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.IOwnable_, arg3: Internal.Player_): boolean;
        abstract getPasscode(): number[];
        savePasscodeAndSalt(arg0: Internal.CompoundTag_): void;
        hashAndSetPasscode(arg0: string, arg1: number[]): void;
        abstract getSaltKey(): Internal.UUID;
        set saltKey(arg0: Internal.UUID_)
        set saveSalt(arg0: boolean)
        get cooldownEnd(): number
        set passcode(arg0: number[])
        get salt(): number[]
        set passcodeInAdjacentBlock(arg0: string)
        get onCooldown(): boolean
        get passcode(): number[]
        get saltKey(): Internal.UUID
    }
    type IPasscodeProtected_ = IPasscodeProtected;
    class AnimationFile$Loop extends Internal.Enum<Internal.AnimationFile$Loop> {
        static valueOf(arg0: string): Internal.AnimationFile$Loop;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        "compareTo(gg.essential.model.file.AnimationFile$Loop)"(arg0: Internal.AnimationFile$Loop_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static access$get$cachedSerializer$delegate$cp(): kotlin.Lazy<any>;
        name(): string;
        getDeclaringClass(): typeof Internal.AnimationFile$Loop;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.AnimationFile$Loop>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static getEntries(): Internal.EnumEntries<Internal.AnimationFile$Loop>;
        compareTo(arg0: Internal.AnimationFile$Loop_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static values(): Internal.AnimationFile$Loop[];
        get class(): typeof any
        get declaringClass(): typeof Internal.AnimationFile$Loop
        get entries(): Internal.EnumEntries<Internal.AnimationFile$Loop>
        static readonly False: (Internal.AnimationFile$Loop) & (Internal.AnimationFile$Loop);
        static readonly True: (Internal.AnimationFile$Loop) & (Internal.AnimationFile$Loop);
        static readonly HoldOnLastFrame: (Internal.AnimationFile$Loop) & (Internal.AnimationFile$Loop);
        static readonly Companion: (Internal.AnimationFile$Loop$Companion) & (Internal.AnimationFile$Loop$Companion);
    }
    type AnimationFile$Loop_ = AnimationFile$Loop | "false" | "holdonlastframe" | "true";
    class Carriage {
        constructor(arg0: Internal.CarriageBogey_, arg1: Internal.CarriageBogey_, arg2: number)
        presentInMultipleDimensions(): boolean;
        getClass(): typeof any;
        anyAvailableDimensionalCarriage(): Internal.Pair<Internal.ResourceKey<Internal.Level>, Internal.Carriage$DimensionalCarriageEntity>;
        updateContraptionAnchors(): void;
        isOnTwoBogeys(): boolean;
        notify(): void;
        getTrailingPoint(): Internal.TravellingPoint;
        wait(arg0: number, arg1: number): void;
        travel(arg0: Internal.Level_, arg1: Internal.TrackGraph_, arg2: number, arg3: Internal.TravellingPoint_, arg4: Internal.TravellingPoint_, arg5: number): number;
        getPresentDimensions(): Internal.List<Internal.ResourceKey<Internal.Level>>;
        write(arg0: Internal.DimensionPalette_): Internal.CompoundTag;
        alignEntity(arg0: Internal.Level_): void;
        forEachPresentEntity(arg0: Internal.Consumer_<Internal.CarriageContraptionEntity>): void;
        getDimensionalIfPresent(arg0: Internal.ResourceKey_<Internal.Level>): Internal.Carriage$DimensionalCarriageEntity;
        trailingBogey(): Internal.CarriageBogey;
        manageEntities(arg0: Internal.Level_): void;
        getAnchorDiff(): number;
        toString(): string;
        isOnIncompatibleTrack(): boolean;
        notifyAll(): void;
        updateConductors(): void;
        getDimensional(arg0: Internal.ResourceKey_<Internal.Level>): Internal.Carriage$DimensionalCarriageEntity;
        "getDimensional(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>): Internal.Carriage$DimensionalCarriageEntity;
        setContraption(arg0: Internal.Level_, arg1: Internal.CarriageContraption_): void;
        "getDimensional(net.minecraft.world.level.Level)"(arg0: Internal.Level_): Internal.Carriage$DimensionalCarriageEntity;
        getPositionInDimension(arg0: Internal.ResourceKey_<Internal.Level>): Internal.Optional<BlockPos>;
        hashCode(): number;
        static read(arg0: Internal.CompoundTag_, arg1: Internal.TrackGraph_, arg2: Internal.DimensionPalette_): Internal.Carriage;
        setTrain(arg0: Internal.Train_): void;
        leadingBogey(): Internal.CarriageBogey;
        wait(): void;
        getDimensional(arg0: Internal.Level_): Internal.Carriage$DimensionalCarriageEntity;
        wait(arg0: number): void;
        anyAvailableEntity(): Internal.CarriageContraptionEntity;
        equals(arg0: any): boolean;
        getLeadingPoint(): Internal.TravellingPoint;
        get class(): typeof any
        get onTwoBogeys(): boolean
        get trailingPoint(): Internal.TravellingPoint
        get presentDimensions(): Internal.List<Internal.ResourceKey<Internal.Level>>
        get anchorDiff(): number
        get onIncompatibleTrack(): boolean
        set train(arg0: Internal.Train_)
        get leadingPoint(): Internal.TravellingPoint
        presentConductors: Internal.Couple<boolean>;
        blocked: boolean;
        bogeys: Internal.Couple<Internal.CarriageBogey>;
        bogeySpacing: number;
        id: number;
        stalled: boolean;
        train: Internal.Train;
        static readonly netIdGenerator: (0) & (Internal.AtomicInteger);
        storage: Internal.TrainCargoManager;
    }
    type Carriage_ = Carriage;
    class ConfigBase$CValue <V, T extends Internal.ForgeConfigSpec$ConfigValue<V>> {
        constructor(arg0: Internal.ConfigBase_, arg1: string, arg2: any_<any, any>, ...arg3: string[])
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        addComments(arg0: Internal.ForgeConfigSpec$Builder_, ...arg1: string[]): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get(): V;
        hashCode(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        register(arg0: Internal.ForgeConfigSpec$Builder_): void;
        equals(arg0: any): boolean;
        set(arg0: V): void;
        get class(): typeof any
        get name(): string
    }
    type ConfigBase$CValue_<V, T extends Internal.ForgeConfigSpec$ConfigValue<V>> = ConfigBase$CValue<V, T>;
    abstract class AbstractEventExecutorGroup implements Internal.EventExecutorGroup {
        constructor()
        getClass(): typeof any;
        invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        scheduleAtFixedRate(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        submit(arg0: Internal.Runnable_, arg1: any): Internal.Future<any>;
        schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        abstract next(): Internal.EventExecutor;
        submit(arg0: Internal.Runnable_): Internal.Future<any>;
        abstract isTerminated(): boolean;
        invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.Future<any>;
        abstract isShutdown(): boolean;
        toString(): string;
        "submit(java.util.concurrent.Callable)"(arg0: Internal.Callable_<any>): Internal.Future<any>;
        /**
         * @deprecated
        */
        shutdownNow(): Internal.List<Internal.Runnable>;
        notifyAll(): void;
        "schedule(java.lang.Runnable,long,java.util.concurrent.TimeUnit)"(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract shutdownGracefully(arg0: number, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.Future<any>;
        shutdownGracefully(): io.netty.util.concurrent.Future<any>;
        "schedule(java.util.concurrent.Callable,long,java.util.concurrent.TimeUnit)"(arg0: Internal.Callable_<any>, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        /**
         * @deprecated
        */
        abstract shutdown(): void;
        abstract terminationFuture(): io.netty.util.concurrent.Future<any>;
        abstract iterator(): Internal.Iterator<Internal.EventExecutor>;
        hashCode(): number;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        submit(arg0: Internal.Callable_<any>): Internal.Future<any>;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        wait(): void;
        invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        wait(arg0: number): void;
        execute(arg0: Internal.Runnable_): void;
        equals(arg0: any): boolean;
        abstract isShuttingDown(): boolean;
        schedule(arg0: Internal.Callable_<any>, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        get class(): typeof any
        get terminated(): boolean
        get shutdown(): boolean
        get shuttingDown(): boolean
    }
    type AbstractEventExecutorGroup_ = AbstractEventExecutorGroup;
    class LockBlock extends Internal.Block implements Internal.EntityBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        getSignal(blockState: Internal.BlockState_, blockAccess: Internal.BlockGetter_, pos: BlockPos_, side: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        activate(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_, player: Internal.Player_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(state: Internal.BlockState_, level: Internal.ServerLevel_, pos: BlockPos_, rand: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_, hit: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(state: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(stack: Internal.ItemStack_, worldIn: Internal.BlockGetter_, tooltip: Internal.List_<Internal.Component>, flagIn: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type LockBlock_ = LockBlock;
    interface ScriptTypeHolder {
        abstract kjs$getScriptType(): Internal.ScriptType;
        (): Internal.ScriptType_;
    }
    type ScriptTypeHolder_ = (()=> Internal.ScriptType_) | ScriptTypeHolder;
    interface FanProcessingType$AirFlowParticleAccess {
        abstract spawnExtraParticle(arg0: Internal.ParticleOptions_, arg1: number): void;
        abstract setColor(arg0: number): void;
        abstract setAlpha(arg0: number): void;
        set color(arg0: number)
        set alpha(arg0: number)
    }
    type FanProcessingType$AirFlowParticleAccess_ = FanProcessingType$AirFlowParticleAccess;
    abstract class BanListEntry <T> extends Internal.StoredUserEntry<T> {
        constructor(arg0: T, arg1: Internal.JsonObject_)
        constructor(arg0: T, arg1: Internal.Date_, arg2: string, arg3: Internal.Date_, arg4: string)
        abstract getDisplayName(): Internal.Component;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getExpires(): Internal.Date;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getUser(): T;
        hashCode(): number;
        wait(): void;
        serialize(arg0: Internal.JsonObject_): void;
        hasExpired(): boolean;
        wait(arg0: number): void;
        getSource(): string;
        equals(arg0: any): boolean;
        getCreated(): Internal.Date;
        getReason(): string;
        get displayName(): Internal.Component
        get class(): typeof any
        get expires(): Internal.Date
        get user(): T
        get source(): string
        get created(): Internal.Date
        get reason(): string
        readonly source: string;
        static readonly EXPIRES_NEVER: ("forever") & (string);
        readonly reason: string;
        readonly expires: Internal.Date;
        static readonly DATE_FORMAT: (Internal.SimpleDateFormat) & (Internal.SimpleDateFormat);
        readonly created: Internal.Date;
    }
    type BanListEntry_<T> = BanListEntry<T>;
    class ParticleEffectComponents$Companion {
        constructor(arg0: any_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        serializer(): Internal.KSerializer<Internal.ParticleEffectComponents>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ParticleEffectComponents$Companion_ = ParticleEffectComponents$Companion;
    abstract class ScreenEvent$KeyReleased extends Internal.ScreenEvent$KeyInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getModifiers(): number;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        invokeGetGui(): Internal.Screen;
        wait(arg0: number, arg1: number): void;
        getKeyCode(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getScanCode(): number;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get modifiers(): number
        get screen(): Internal.Screen
        get canceled(): boolean
        get keyCode(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get scanCode(): number
    }
    type ScreenEvent$KeyReleased_ = ScreenEvent$KeyReleased;
    interface IWrenchableWithBracket extends Internal.IWrenchable {
        abstract removeBracket(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: boolean): Internal.Optional<Internal.ItemStack>;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        tryRemoveBracket(arg0: Internal.UseOnContext_): boolean;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        (arg0: Internal.BlockGetter, arg1: BlockPos, arg2: boolean): Internal.Optional_<Internal.ItemStack>;
    }
    type IWrenchableWithBracket_ = IWrenchableWithBracket | ((arg0: Internal.BlockGetter, arg1: BlockPos, arg2: boolean)=> Internal.Optional_<Internal.ItemStack>);
    class DoubleBlockHalf extends Internal.Enum<Internal.DoubleBlockHalf> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        static valueOf(arg0: string): Internal.DoubleBlockHalf;
        getSerializedName(): string;
        notifyAll(): void;
        "compareTo(net.minecraft.world.level.block.state.properties.DoubleBlockHalf)"(arg0: Internal.DoubleBlockHalf_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static values(): Internal.DoubleBlockHalf[];
        name(): string;
        hashCode(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DoubleBlockHalf>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.DoubleBlockHalf_): number;
        getDeclaringClass(): typeof Internal.DoubleBlockHalf;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.DoubleBlockHalf
        static readonly UPPER: (Internal.DoubleBlockHalf) & (Internal.DoubleBlockHalf);
        static readonly LOWER: (Internal.DoubleBlockHalf) & (Internal.DoubleBlockHalf);
    }
    type DoubleBlockHalf_ = "lower" | DoubleBlockHalf | "upper";
    class PlayerTabOverlay {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.Gui_)
        renderPingIcon(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: Internal.PlayerInfo_): void;
        getClass(): typeof any;
        setHeader(arg0: Internal.Component_): void;
        toString(): string;
        notifyAll(): void;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: Internal.Scoreboard_, arg3: Internal.Objective_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setFooter(arg0: Internal.Component_): void;
        hashCode(): number;
        getNameForDisplay(arg0: Internal.PlayerInfo_): Internal.Component;
        wait(): void;
        wait(arg0: number): void;
        reset(): void;
        equals(arg0: any): boolean;
        setVisible(arg0: boolean): void;
        get class(): typeof any
        set header(arg0: Internal.Component_)
        set footer(arg0: Internal.Component_)
        set visible(arg0: boolean)
        visible: boolean;
        static readonly HEART_GOLDEN_FULL: (160) & (number);
        static readonly HEART_EMPTY_CONTAINER: (16) & (number);
        static readonly HEART_GHOST_HALF_FULL: (79) & (number);
        static readonly MAX_ROWS_PER_COL: (20) & (number);
        static readonly HEART_GHOST_FULL: (70) & (number);
        static readonly HEART_GOLDEN_HALF_FULL: (169) & (number);
        static readonly HEART_EMPTY_CONTAINER_BLINKING: (25) & (number);
        static readonly HEART_HALF_FULL: (61) & (number);
        static readonly HEART_FULL: (52) & (number);
    }
    type PlayerTabOverlay_ = PlayerTabOverlay;
    class GolemSensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        doTick(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): void;
        hashCode(): number;
        tick(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): void;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        static golemDetected(arg0: Internal.LivingEntity_): void;
        equals(arg0: any): boolean;
        requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        static checkForNearbyGolem(arg0: Internal.LivingEntity_): void;
        get class(): typeof any
    }
    type GolemSensor_ = GolemSensor;
    class CosmeticProperty$InterruptsEmote$Data {
        constructor()
        constructor(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: any_)
        constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: any_)
        constructor(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean)
        component3(): boolean;
        getClass(): typeof any;
        component1(): boolean;
        getArmSwing(): boolean;
        component5(): boolean;
        component4(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static write$Self$cosmetics(arg0: Internal.CosmeticProperty$InterruptsEmote$Data_, arg1: Internal.CompositeEncoder_, arg2: Internal.SerialDescriptor_): void;
        copy(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): this;
        getAttack(): boolean;
        static getMovement$annotations(): void;
        getDamaged(): boolean;
        getMovement(): boolean;
        static getDamaged$annotations(): void;
        static copy$default(arg0: Internal.CosmeticProperty$InterruptsEmote$Data_, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: number, arg7: any): Internal.CosmeticProperty$InterruptsEmote$Data;
        static getMovementGraceTime$annotations(): void;
        toString(): string;
        static getAttack$annotations(): void;
        notifyAll(): void;
        hashCode(): number;
        component2(): number;
        wait(): void;
        wait(arg0: number): void;
        static getArmSwing$annotations(): void;
        equals(arg0: any): boolean;
        getMovementGraceTime(): number;
        get class(): typeof any
        get armSwing(): boolean
        get attack(): boolean
        get movement$annotations(): void
        get damaged(): boolean
        get movement(): boolean
        get damaged$annotations(): void
        get movementGraceTime$annotations(): void
        get attack$annotations(): void
        get armSwing$annotations(): void
        get movementGraceTime(): number
        static readonly Companion: (Internal.CosmeticProperty$InterruptsEmote$Data$Companion) & (Internal.CosmeticProperty$InterruptsEmote$Data$Companion);
    }
    type CosmeticProperty$InterruptsEmote$Data_ = CosmeticProperty$InterruptsEmote$Data;
    class MovingSlidyBlockEntity extends Internal.PistonMovingBlockEntity {
        constructor(pos: BlockPos_, blockState: Internal.BlockState_)
        constructor(pos: BlockPos_, blockState: Internal.BlockState_, movedState: Internal.BlockState_, direction: Internal.Direction_, extending: boolean, isSourcePiston: boolean)
        isSourcePiston(): boolean;
        requestModelDataUpdate(): void;
        static "tick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,net.mehvahdjukaar.supplementaries.common.block.tiles.MovingSlidyBlockEntity)"(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, t: Internal.MovingSlidyBlockEntity_): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        handler$bfi000$setRemoved(arg0: Internal.CallbackInfo_): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        tickMovedBlock(level: Internal.Level_, pos: BlockPos_): void;
        setCulled(value: boolean): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setTimeout(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        isExtending(): boolean;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        isOutOfCamera(): boolean;
        static tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.PistonMovingBlockEntity_): void;
        getXOff(arg0: number): number;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isCulled(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        static shouldCancelObserverUpdateHack(neighbor: Internal.BlockState_): boolean;
        static moveCollidedEntities(arg0: Internal.Level_, arg1: BlockPos_, arg2: number, arg3: Internal.PistonMovingBlockEntity_): void;
        finalTick(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addOffset(offset: number): void;
        sdl$shouldUpdateDynamicLight(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getMovedState(): Internal.BlockState;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getLastTicked(): number;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getProgress(arg0: number): number;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getZOff(arg0: number): number;
        fabric_getAttachments(): Internal.Map<any, any>;
        sdl$getDynamicLightX(): number;
        getPersistentData(): Internal.CompoundTag;
        static tick(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, t: Internal.MovingSlidyBlockEntity_): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        getCollisionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        abstract setHeldBlock(arg0: Internal.BlockState_, arg1: number): boolean;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getHeldBlock(): Internal.BlockState;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        setHeldBlock(state: Internal.BlockState_): boolean;
        abstract getHeldBlock(arg0: number): Internal.BlockState;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getMovementDirection(): Internal.Direction;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        handler$bfi000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setOutOfCamera(value: boolean): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        static "tick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.block.piston.PistonMovingBlockEntity)"(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.PistonMovingBlockEntity_): void;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        static moveStuckEntities(arg0: Internal.Level_, arg1: BlockPos_, arg2: number, arg3: Internal.PistonMovingBlockEntity_): void;
        isForcedVisible(): boolean;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        getYOff(arg0: number): number;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        handler$cip000$moonlight$onFinishedShortPulse(ci: Internal.CallbackInfo_): void;
        equals(arg0: any): boolean;
        getDirection(): Internal.Direction;
        get sourcePiston(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        set culled(value: boolean)
        get extending(): boolean
        get outOfCamera(): boolean
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get movedState(): Internal.BlockState
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get lastTicked(): number
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        get heldBlock(): Internal.BlockState
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        set heldBlock(state: Internal.BlockState_)
        get movementDirection(): Internal.Direction
        set outOfCamera(value: boolean)
        get level(): Internal.Level
        get forcedVisible(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        get direction(): Internal.Direction
    }
    type MovingSlidyBlockEntity_ = MovingSlidyBlockEntity;
    abstract class Permission implements Internal.Guard, Internal.Serializable {
        constructor(arg0: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        abstract implies(arg0: Internal.Permission_): boolean;
        checkGuard(arg0: any): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract hashCode(): number;
        wait(): void;
        getName(): string;
        abstract getActions(): string;
        newPermissionCollection(): Internal.PermissionCollection;
        wait(arg0: number): void;
        abstract equals(arg0: any): boolean;
        get class(): typeof any
        get name(): string
        get actions(): string
    }
    type Permission_ = Permission;
    class ItemTooltipEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getFlags(): Internal.TooltipFlag;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getToolTip(): Internal.List<Internal.Component>;
        equals(arg0: any): boolean;
        getItemStack(): Internal.ItemStack;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get flags(): Internal.TooltipFlag
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get toolTip(): Internal.List<Internal.Component>
        get itemStack(): Internal.ItemStack
    }
    type ItemTooltipEvent_ = ItemTooltipEvent;
    abstract class CapManipulationBehaviourBase <T, S extends Internal.CapManipulationBehaviourBase<any, any>> extends Internal.BlockEntityBehaviour {
        constructor(arg0: Internal.SmartBlockEntity_, arg1: Internal.CapManipulationBehaviourBase$InterfaceProvider_)
        getClass(): typeof any;
        getTarget(): Internal.BlockFace;
        isSafeNBT(): boolean;
        bypassSidedness(): S;
        destroy(): void;
        onNeighborChanged(arg0: BlockPos_): void;
        write(arg0: Internal.CompoundTag_, arg1: boolean): void;
        static get<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BehaviourType_<T>): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPos(): BlockPos;
        getInventory(): T;
        getAmountFromFilter(): number;
        unload(): void;
        simulate(): S;
        read(arg0: Internal.CompoundTag_, arg1: boolean): void;
        setLazyTickRate(arg0: number): void;
        findNewCapability(): void;
        initialize(): void;
        static get<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BlockEntity_, arg1: Internal.BehaviourType_<T>): T;
        getWorld(): Internal.Level;
        toString(): string;
        hasInventory(): boolean;
        notifyAll(): void;
        writeSafe(arg0: Internal.CompoundTag_): void;
        tick(): void;
        lazyTick(): void;
        hashCode(): number;
        withFilter(arg0: com.google.common.base.Predicate_<Internal.BlockEntity>): S;
        getModeFromFilter(): Internal.ItemHelper$ExtractionCountMode;
        getRequiredItems(): Internal.ItemRequirement;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onBlockChanged(arg0: Internal.BlockState_): void;
        abstract getType(): Internal.BehaviourType<any>;
        get class(): typeof any
        get target(): Internal.BlockFace
        get safeNBT(): boolean
        get pos(): BlockPos
        get inventory(): T
        get amountFromFilter(): number
        set lazyTickRate(arg0: number)
        get world(): Internal.Level
        get modeFromFilter(): Internal.ItemHelper$ExtractionCountMode
        get requiredItems(): Internal.ItemRequirement
        get type(): Internal.BehaviourType<any>
    }
    type CapManipulationBehaviourBase_<T, S extends Internal.CapManipulationBehaviourBase<any, any>> = CapManipulationBehaviourBase<T, S>;
    interface EntityInLevelCallback {
        abstract onMove(): void;
        abstract onRemove(arg0: Internal.Entity$RemovalReason_): void;
        readonly NULL: Internal.EntityInLevelCallback;
    }
    type EntityInLevelCallback_ = EntityInLevelCallback;
    interface Packet <T extends Internal.PacketListener> {
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        isSkippable(): boolean;
        abstract handle(arg0: T): void;
        get skippable(): boolean
    }
    type Packet_<T extends Internal.PacketListener> = Packet<T>;
    abstract class StructurePiece$BlockSelector {
        constructor()
        abstract next(arg0: Internal.RandomSource_, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        getNext(): Internal.BlockState;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get next(): Internal.BlockState
        next: Internal.BlockState;
    }
    type StructurePiece$BlockSelector_ = StructurePiece$BlockSelector;
    class ModConfigEvent$Reloading extends Internal.ModConfigEvent {
        constructor()
        constructor(arg0: Internal.ModConfig_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        self<T extends Internal.Event & Internal.IConfigEvent>(): T;
        static loading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static reloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        static unloading(arg0: Internal.ModConfig_): Internal.IConfigEvent;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getConfig(): Internal.ModConfig;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get config(): Internal.ModConfig
    }
    type ModConfigEvent$Reloading_ = ModConfigEvent$Reloading;
    class ClientboundLevelChunkWithLightPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.LevelChunk_, arg1: Internal.LevelLightEngine_, arg2: Internal.BitSet_, arg3: Internal.BitSet_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getX(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        getLightData(): Internal.ClientboundLightUpdatePacketData;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getZ(): number;
        getChunkData(): Internal.ClientboundLevelChunkPacketData;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get x(): number
        get lightData(): Internal.ClientboundLightUpdatePacketData
        get skippable(): boolean
        get z(): number
        get chunkData(): Internal.ClientboundLevelChunkPacketData
    }
    type ClientboundLevelChunkWithLightPacket_ = ClientboundLevelChunkWithLightPacket;
    abstract class BaseCommandBlock implements Internal.CommandSource {
        constructor()
        getCommand(): string;
        getClass(): typeof any;
        abstract getLevel(): Internal.ServerLevel;
        abstract getPosition(): Vec3d;
        usedBy(arg0: Internal.Player_): Internal.InteractionResult;
        abstract createCommandSourceStack(): Internal.CommandSourceStack;
        notify(): void;
        save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        wait(arg0: number, arg1: number): void;
        load(arg0: Internal.CompoundTag_): void;
        acceptsFailure(): boolean;
        setName(arg0: Internal.Component_): void;
        setSuccessCount(arg0: number): void;
        setLastOutput(arg0: Internal.Component_): void;
        performCommand(arg0: Internal.Level_): boolean;
        isTrackOutput(): boolean;
        abstract isValid(): boolean;
        getName(): Internal.Component;
        toString(): string;
        notifyAll(): void;
        getLastOutput(): Internal.Component;
        shouldInformAdmins(): boolean;
        hashCode(): number;
        alwaysAccepts(): boolean;
        setCommand(arg0: string): void;
        wait(): void;
        wait(arg0: number): void;
        setTrackOutput(arg0: boolean): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        equals(arg0: any): boolean;
        acceptsSuccess(): boolean;
        getSuccessCount(): number;
        abstract onUpdated(): void;
        get command(): string
        get class(): typeof any
        get level(): Internal.ServerLevel
        get position(): Vec3d
        set name(arg0: Internal.Component_)
        set successCount(arg0: number)
        set lastOutput(arg0: Internal.Component_)
        get trackOutput(): boolean
        get valid(): boolean
        get name(): Internal.Component
        get lastOutput(): Internal.Component
        set command(arg0: string)
        set trackOutput(arg0: boolean)
        get successCount(): number
    }
    type BaseCommandBlock_ = BaseCommandBlock;
    interface Byte2IntFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        abstract get(arg0: number): number;
        defaultReturnValue(): number;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Byte2ShortFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        remove(arg0: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Byte2CharFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2IntFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        "put(byte,int)"(arg0: number, arg1: number): number;
        "containsKey(byte)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        apply(arg0: number): number;
        abstract "get(byte)"(arg0: number): number;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2IntFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2IntFunction<T>;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2IntFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Byte2DoubleFunction;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Byte2LongFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Byte,java.lang.Integer)"(arg0: number, arg1: number): number;
        put(arg0: number, arg1: number): number;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2IntFunction;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Byte2ByteFunction;
        clear(): void;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2IntFunction;
        "getOrDefault(byte,int)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        "remove(byte)"(arg0: number): number;
    }
    type Byte2IntFunction_ = Byte2IntFunction;
    class ReinforcedDispenserBlock extends Internal.DispenserBlock implements Internal.SimpleWaterloggedBlock, Internal.IReinforcedBlock, Internal.IOverlayDisplay, Internal.IDisguisable {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        static getDisguisedBlockState(arg0: Internal.BlockEntity_): Internal.Optional<Internal.BlockState>;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDispenseMethod(arg0: Internal.ItemStack_): Internal.DispenseItemBehavior;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        getDisguisedStack(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ItemStack;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        static shouldPickBlockDisguise(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        convertToReinforced(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        static "getDisguisedBlockStateFromStack(net.minecraft.core.HolderGetter,net.minecraft.world.item.ItemStack)"(arg0: Internal.HolderGetter_<Internal.Block>, arg1: Internal.ItemStack_): Internal.Optional<Internal.BlockState>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        static getDisguisedBlockStateFromStack(arg0: Internal.HolderGetter_<Internal.Block>, arg1: Internal.ItemStack_): Internal.Optional<Internal.BlockState>;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        getVanillaBlock(): Internal.Block;
        static getDisguisedBlockStateFromStack(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.Optional<Internal.BlockState>;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        static getDisguisedBlockState(arg0: Internal.BlockEntity_, arg1: Internal.LevelReader_): Internal.Optional<Internal.BlockState>;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        static getDispensePosition(arg0: Internal.BlockSource_): Internal.Position;
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        static getDisguisedStateOrDefault(arg0: Internal.BlockEntity_, arg1: Internal.BlockState_, arg2: Internal.BlockGetter_, arg3: BlockPos_): Internal.BlockState;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        dispenseFrom(arg0: Internal.ServerLevel_, arg1: BlockPos_): void;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        shouldShowSCInfo(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): boolean;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        static getDispenserRegistry(): Internal.Map<Internal.Item, Internal.DispenseItemBehavior>;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getDefaultStack(): Internal.ItemStack;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        static "getDisguisedBlockStateFromStack(net.minecraft.world.level.Level,net.minecraft.world.item.ItemStack)"(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.Optional<Internal.BlockState>;
        static getDispenserRegistry$moonlight_$md$a5149f$0(): Internal.Map<any, any>;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        static registerBehavior(arg0: Internal.ItemLike_, arg1: Internal.DispenseItemBehavior_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        getDisplayStack(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.ItemStack;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        create$callGetDispenseMethod(arg0: Internal.ItemStack_): Internal.DispenseItemBehavior;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        convertToVanilla(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        static getDisguisedStateOrDefault(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.BlockState;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get vanillaBlock(): Internal.Block
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get dispenserRegistry(): Internal.Map<Internal.Item, Internal.DispenseItemBehavior>
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        get defaultStack(): Internal.ItemStack
        set speedFactor(arg0: number)
        get dispenserRegistry$moonlight_$md$a5149f$0(): Internal.Map<any, any>
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type ReinforcedDispenserBlock_ = ReinforcedDispenserBlock;
    interface StreamTagVisitor {
        abstract "visit(long[])"(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(int[])"(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitElement(arg0: Internal.TagType_<any>, arg1: number): Internal.StreamTagVisitor$EntryResult;
        abstract visitEnd(): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(byte[])"(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(long)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(byte)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitList(arg0: Internal.TagType_<any>, arg1: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitEntry(arg0: Internal.TagType_<any>): Internal.StreamTagVisitor$EntryResult;
        abstract visitEntry(arg0: Internal.TagType_<any>, arg1: string): Internal.StreamTagVisitor$EntryResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: string): Internal.StreamTagVisitor$ValueResult;
        abstract visitContainerEnd(): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(java.lang.String)"(arg0: string): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(int)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract visitRootEntry(arg0: Internal.TagType_<any>): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract visit(arg0: number[]): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(double)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(float)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
        abstract "visit(short)"(arg0: number): Internal.StreamTagVisitor$ValueResult;
    }
    type StreamTagVisitor_ = StreamTagVisitor;
    class ServerboundSetCarriedItemPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getSlot(): number;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get slot(): number
    }
    type ServerboundSetCarriedItemPacket_ = ServerboundSetCarriedItemPacket;
    class FodderBlock extends Internal.WaterBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(state: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(state: Internal.BlockState_, direction: Internal.Direction_, facingState: Internal.BlockState_, world: Internal.LevelAccessor_, currentPos: BlockPos_, otherPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(state: Internal.BlockState_, blockGetter: Internal.BlockGetter_, pos: BlockPos_, pathType: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        useShapeForLightOcclusion(state: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(state: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, blockGetter: Internal.BlockGetter_, pos: BlockPos_, collisionContext: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly LAYERS: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type FodderBlock_ = FodderBlock;
    interface EntityMethods {
        abstract bo$refreshEntityData(arg0: number): void;
        abstract bo$getRenderer<T extends Internal.Entity>(): Internal.EntityRenderer<T>;
    }
    type EntityMethods_ = EntityMethods;
    abstract class CombiningPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
        constructor(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>)
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static "matchesBlocks(java.util.List)"(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        notify(): void;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        abstract test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        abstract type(): Internal.BlockPredicateType<any>;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(): void;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getClass(): typeof any;
        static "matchesFluids(net.minecraft.core.Vec3i,net.minecraft.world.level.material.Fluid[])"(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number, arg1: number): void;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,net.minecraft.world.level.block.Block[])"(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        toString(): string;
        notifyAll(): void;
        static "matchesBlocks(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesFluids(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        hashCode(): number;
        static codec<T extends Internal.CombiningPredicate>(arg0: Internal.Function_<Internal.List<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>, T>): Internal.Codec<T>;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number): void;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        equals(arg0: any): boolean;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        get class(): typeof any
        readonly predicates: Internal.List<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>;
    }
    type CombiningPredicate_ = CombiningPredicate;
    class SimpleMapCodec <K, V> extends Internal.MapCodec<Internal.Map<K, V>> implements Internal.BaseMapCodec<K, V> {
        constructor(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_)
        keyCodec(): Internal.Codec<K>;
        stable(): Internal.MapCodec<Internal.Map<K, V>>;
        xmap<S>(arg0: Internal.Function_<Internal.Map<K, V>, S>, arg1: Internal.Function_<S, Internal.Map<K, V>>): Internal.MapCodec<S>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: Internal.RecordBuilder_<any>): Internal.RecordBuilder<any>;
        notify(): void;
        comap<B>(arg0: Internal.Function_<B, Internal.Map<K, V>>): Internal.MapEncoder<B>;
        encode<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        static makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        orElse(arg0: Internal.Consumer_<string>, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        static unit<A>(arg0: A): Internal.MapCodec<A>;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        orElseGet(arg0: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        forGetter<O>(arg0: Internal.Function_<O, Internal.Map<K, V>>): Internal.RecordCodecBuilder<O, Internal.Map<K, V>>;
        static "unit(java.util.function.Supplier)"<A>(arg0: Internal.Supplier_<A>): Internal.MapCodec<A>;
        "orElseGet(java.util.function.UnaryOperator,java.util.function.Supplier)"(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        dependent<E>(arg0: Internal.MapCodec_<E>, arg1: Internal.Function_<Internal.Map<K, V>, com.mojang.datafixers.util.Pair<E, Internal.MapCodec<E>>>, arg2: Internal.BiFunction_<Internal.Map<K, V>, E, Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        elementCodec(): Internal.Codec<V>;
        wait(): void;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.MapCodec<A>;
        getClass(): typeof any;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        "orElse(java.util.function.UnaryOperator,java.util.Map)"(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        codec(): Internal.Codec<Internal.Map<K, V>>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        fieldOf(arg0: string): Internal.MapCodec<Internal.Map<K, V>>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<Internal.Map<K, V>>;
        wait(arg0: number, arg1: number): void;
        withLifecycle(arg0: Internal.Lifecycle_): Internal.MapDecoder<any>;
        flatXmap<S>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<Internal.Map<K, V>>>): Internal.MapCodec<S>;
        "encode(java.lang.Object,com.mojang.serialization.DynamicOps,com.mojang.serialization.RecordBuilder)"(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: Internal.RecordBuilder_<any>): Internal.RecordBuilder<any>;
        decoder(): com.mojang.serialization.Decoder<Internal.Map<K, V>>;
        ap<E>(arg0: Internal.MapDecoder_<Internal.Function<Internal.Map<K, V>, E>>): Internal.MapDecoder<E>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        toString(): string;
        map<B>(arg0: Internal.Function_<Internal.Map<K, V>, B>): Internal.MapDecoder<B>;
        notifyAll(): void;
        keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        setPartial(arg0: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        flatMap<B>(arg0: Internal.Function_<Internal.Map<K, V>, Internal.DataResult<B>>): Internal.MapDecoder<B>;
        "orElse(java.util.function.Consumer,java.util.Map)"(arg0: Internal.Consumer_<string>, arg1: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        hashCode(): number;
        mapResult(arg0: Internal.MapCodec$ResultFunction_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.Map<K, V>>>): Internal.MapEncoder<B>;
        encoder(): Internal.Encoder<Internal.Map<K, V>>;
        wait(arg0: number): void;
        "encode(java.util.Map,com.mojang.serialization.DynamicOps,com.mojang.serialization.RecordBuilder)"<T>(arg0: Internal.Map_<K, V>, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        equals(arg0: any): boolean;
        orElse(arg0: Internal.Map_<K, V>): Internal.MapCodec<Internal.Map<K, V>>;
        compressedDecode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.Map<K, V>>;
        deprecated(arg0: number): Internal.MapCodec<Internal.Map<K, V>>;
        static "unit(java.lang.Object)"<A>(arg0: A): Internal.MapCodec<A>;
        "orElseGet(java.util.function.Consumer,java.util.function.Supplier)"(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.Map<K, V>>): Internal.MapCodec<Internal.Map<K, V>>;
        get class(): typeof any
        set partial(arg0: Internal.Supplier_<Internal.Map<K, V>>)
    }
    type SimpleMapCodec_<K, V> = SimpleMapCodec<K, V>;
    class ChuteBlock extends Internal.AbstractChuteBlock implements Internal.ProperWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getBlockEntityClass(): typeof Internal.ChuteBlockEntity;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        static isOpenChute(arg0: Internal.BlockState_): boolean;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        static isTransparentChute(arg0: Internal.BlockState_): boolean;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ChuteBlockEntity>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        updateChuteState(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.BlockGetter_, arg3: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        isTransparent(arg0: Internal.BlockState_): boolean;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ChuteBlockEntity;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ChuteBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        static getChuteFacing(arg0: Internal.BlockState_): Internal.Direction;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ChuteBlockEntity>;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        getFacing(arg0: Internal.BlockState_): Internal.Direction;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static isChute(arg0: Internal.BlockState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ChuteBlockEntity>): void;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        isOpen(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get blockEntityClass(): typeof Internal.ChuteBlockEntity
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityType(): Internal.BlockEntityType<Internal.ChuteBlockEntity>
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly SHAPE: Internal.Property<Internal.ChuteBlock$Shape>;
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type ChuteBlock_ = ChuteBlock;
    class CompassItem extends Internal.Item implements Internal.Vanishable {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        static getSpawnPosition(arg0: Internal.Level_): Internal.GlobalPos;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        handler$ckh000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static getLodestonePosition(arg0: Internal.CompoundTag_): Internal.GlobalPos;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        overrideFood(arg0: Internal.FoodProperties_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        static isLodestoneCompass(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        handler$bfp000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set craftingRemainder(arg0: Internal.Item_)
        static readonly TAG_LODESTONE_TRACKED: ("LodestoneTracked") & (string);
        static readonly TAG_LODESTONE_POS: ("LodestonePos") & (string);
        static readonly TAG_LODESTONE_DIMENSION: ("LodestoneDimension") & (string);
    }
    type CompassItem_ = CompassItem;
    interface Blender$DistanceGetter {
        abstract getDistance(arg0: number, arg1: number, arg2: number): number;
        (arg0: number, arg1: number, arg2: number): number;
    }
    type Blender$DistanceGetter_ = ((arg0: number, arg1: number, arg2: number)=> number) | Blender$DistanceGetter;
    class ConnectedGlassBlock extends Internal.GlassBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type ConnectedGlassBlock_ = ConnectedGlassBlock;
    class RecursiveTypeFamily implements Internal.TypeFamily {
        constructor(arg0: string, arg1: Internal.TypeTemplate_)
        fold(arg0: Internal.Algebra_, arg1: Internal.RecursiveTypeFamily_): Internal.IntFunction<Internal.RewriteResult<any, any>>;
        getClass(): typeof any;
        toString(): string;
        apply(arg0: number): Internal.RecursivePoint$RecursivePointType<any>;
        notifyAll(): void;
        findType<A, B>(arg0: number, arg1: com.mojang.datafixers.types.Type_<A>, arg2: com.mojang.datafixers.types.Type_<B>, arg3: Internal.Type$TypeMatcher_<A, B>, arg4: boolean): Internal.Either<Internal.TypedOptic<any, any, A, B>, Internal.Type$FieldNotFoundException>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        name(): string;
        hashCode(): number;
        size(): number;
        wait(): void;
        everywhere(arg0: number, arg1: Internal.TypeRewriteRule_, arg2: Internal.PointFreeRule_): Internal.Optional<Internal.RewriteResult<any, any>>;
        buildMuType<A>(arg0: com.mojang.datafixers.types.Type_<A>, arg1: Internal.RecursiveTypeFamily_): Internal.RecursivePoint$RecursivePointType<A>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static familyOptic<A, B>(arg0: Internal.IntFunction_<Internal.TypedOptic<any, any, A, B>>): Internal.FamilyOptic<A, B>;
        template(): Internal.TypeTemplate;
        get class(): typeof any
    }
    type RecursiveTypeFamily_ = RecursiveTypeFamily;
    interface DirectMethodHandleDesc extends Internal.MethodHandleDesc {
        abstract isOwnerInterface(): boolean;
        of(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: string): this;
        abstract invocationType(): Internal.MethodTypeDesc;
        abstract methodName(): string;
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        abstract kind(): Internal.DirectMethodHandleDesc$Kind;
        abstract owner(): Internal.ClassDesc;
        ofField(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: Internal.ClassDesc_): this;
        ofMethod(arg0: Internal.DirectMethodHandleDesc$Kind_, arg1: Internal.ClassDesc_, arg2: string, arg3: Internal.MethodTypeDesc_): this;
        asType(arg0: Internal.MethodTypeDesc_): Internal.MethodHandleDesc;
        abstract lookupDescriptor(): string;
        abstract refKind(): number;
        ofConstructor(arg0: Internal.ClassDesc_, ...arg1: Internal.ClassDesc_[]): this;
        abstract equals(arg0: any): boolean;
        get ownerInterface(): boolean
    }
    type DirectMethodHandleDesc_ = DirectMethodHandleDesc;
    interface ColorProviderRegistryImpl$ColorMapperHolder <T, Provider> {
        abstract get(arg0: T): Provider;
        (arg0: T): Provider;
    }
    type ColorProviderRegistryImpl$ColorMapperHolder_<T, Provider> = ColorProviderRegistryImpl$ColorMapperHolder<T, Provider> | ((arg0: T)=> Provider);
    class ParticlesFile$Event {
        constructor()
        constructor(arg0: number, arg1: Internal.List_<any>, arg2: Internal.List_<any>, arg3: Internal.ParticlesFile$Event$Particle_, arg4: Internal.ParticlesFile$Event$Sound_, arg5: Internal.Molang_, arg6: any_)
        constructor(arg0: Internal.List_<any>, arg1: Internal.List_<any>, arg2: Internal.ParticlesFile$Event$Particle_, arg3: Internal.ParticlesFile$Event$Sound_, arg4: Internal.Molang_, arg5: number, arg6: any_)
        constructor(arg0: Internal.List_<Internal.ParticlesFile$Event>, arg1: Internal.List_<Internal.ParticlesFile$Event$RandomizeOption>, arg2: Internal.ParticlesFile$Event$Particle_, arg3: Internal.ParticlesFile$Event$Sound_, arg4: Internal.Molang_)
        getClass(): typeof any;
        copy(arg0: Internal.List_<Internal.ParticlesFile$Event>, arg1: Internal.List_<Internal.ParticlesFile$Event$RandomizeOption>, arg2: Internal.ParticlesFile$Event$Particle_, arg3: Internal.ParticlesFile$Event$Sound_, arg4: Internal.Molang_): this;
        static access$get$childSerializers$cp(): kotlin.Lazy<any>[];
        component5(): Internal.Molang;
        getRandomize(): Internal.List<Internal.ParticlesFile$Event$RandomizeOption>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getSound(): Internal.ParticlesFile$Event$Sound;
        static write$Self$cosmetics(arg0: Internal.ParticlesFile$Event_, arg1: Internal.CompositeEncoder_, arg2: Internal.SerialDescriptor_): void;
        component2(): Internal.List<Internal.ParticlesFile$Event$RandomizeOption>;
        static copy$default(arg0: Internal.ParticlesFile$Event_, arg1: Internal.List_<any>, arg2: Internal.List_<any>, arg3: Internal.ParticlesFile$Event$Particle_, arg4: Internal.ParticlesFile$Event$Sound_, arg5: Internal.Molang_, arg6: number, arg7: any): Internal.ParticlesFile$Event;
        static getParticle$annotations(): void;
        toString(): string;
        component3(): Internal.ParticlesFile$Event$Particle;
        notifyAll(): void;
        getSequence(): Internal.List<Internal.ParticlesFile$Event>;
        static getSound$annotations(): void;
        getExpression(): Internal.Molang;
        hashCode(): number;
        component4(): Internal.ParticlesFile$Event$Sound;
        getParticle(): Internal.ParticlesFile$Event$Particle;
        wait(): void;
        component1(): Internal.List<Internal.ParticlesFile$Event>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get randomize(): Internal.List<Internal.ParticlesFile$Event$RandomizeOption>
        get sound(): Internal.ParticlesFile$Event$Sound
        get particle$annotations(): void
        get sequence(): Internal.List<Internal.ParticlesFile$Event>
        get sound$annotations(): void
        get expression(): Internal.Molang
        get particle(): Internal.ParticlesFile$Event$Particle
        static readonly Companion: (Internal.ParticlesFile$Event$Companion) & (Internal.ParticlesFile$Event$Companion);
    }
    type ParticlesFile$Event_ = ParticlesFile$Event;
    class BambooSpikesTippedItem extends Internal.WoodBasedBlockItem implements Internal.SimpleWaterloggedBlock {
        constructor(blockIn: Internal.Block_, builder: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, worldIn: Internal.Level_, tooltip: Internal.List_<Internal.Component>, flagIn: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(stack: Internal.ItemStack_, book: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(stack: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        handler$ckh000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        getBlockType(): net.mehvahdjukaar.moonlight.api.set.wood.WoodType;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(stack: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static updateState<T extends Internal.Comparable<T>>(arg0: Internal.BlockState_, arg1: Internal.Property_<T>, arg2: string): Internal.BlockState;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(itemStack: Internal.ItemStack_, recipeType: Internal.RecipeType_<any>): number;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(toRepair: Internal.ItemStack_, repair: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(stack: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isRepairable(stack: Internal.ItemStack_): boolean;
        notify(): void;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(stack: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        static isPotionValid(potion: Internal.Potion_): boolean;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        static makeSpikeItem(potion: Internal.Potion_): Internal.ItemStack;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        handler$bfp000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        get blockType(): net.mehvahdjukaar.moonlight.api.set.wood.WoodType
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type BambooSpikesTippedItem_ = BambooSpikesTippedItem;
    class UnmodifiableCommentedConfig$CommentNode {
        constructor(arg0: string, arg1: Internal.Map_<string, Internal.UnmodifiableCommentedConfig$CommentNode>)
        getClass(): typeof any;
        hashCode(): number;
        getComment(): string;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getChildren(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>;
        get class(): typeof any
        get comment(): string
        get children(): Internal.Map<string, Internal.UnmodifiableCommentedConfig$CommentNode>
    }
    type UnmodifiableCommentedConfig$CommentNode_ = UnmodifiableCommentedConfig$CommentNode;
    class IExtensionPoint$DisplayTest extends Internal.Record implements Internal.IExtensionPoint<Internal.IExtensionPoint$DisplayTest> {
        constructor(arg0: string, arg1: Internal.BiPredicate_<string, boolean>)
        constructor(suppliedVersion: Internal.Supplier_<string>, remoteVersionTest: Internal.BiPredicate_<string, boolean>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        remoteVersionTest(): Internal.BiPredicate<string, boolean>;
        notify(): void;
        suppliedVersion(): Internal.Supplier<string>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly IGNORE_ALL_VERSION: Internal.Supplier<Internal.IExtensionPoint$DisplayTest>;
        static readonly IGNORESERVERONLY: ("OHNOES😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱") & (string);
        static readonly IGNORE_SERVER_VERSION: Internal.Supplier<Internal.IExtensionPoint$DisplayTest>;
    }
    type IExtensionPoint$DisplayTest_ = IExtensionPoint$DisplayTest;
    class Transformation implements Internal.IForgeTransformation {
        constructor(arg0: Matrix4f_)
        constructor(arg0: Vec3f_, arg1: Quaternionf_, arg2: Vec3f_, arg3: Quaternionf_)
        getClass(): typeof any;
        getScale(): Vec3f;
        getMatrix(): Matrix4f;
        blockCenterToCorner(): this;
        rotateTransform(arg0: Internal.Direction_): Internal.Direction;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isIdentity(): boolean;
        getNormalMatrix(): Matrix3f;
        inverse(): this;
        toString(): string;
        compose(arg0: Internal.Transformation_): this;
        notifyAll(): void;
        getTranslation(): Vec3f;
        static identity(): Internal.Transformation;
        transformNormal(arg0: Vec3f_): void;
        getRightRotation(): Quaternionf;
        slerp(arg0: Internal.Transformation_, arg1: number): this;
        blockCornerToCenter(): this;
        transformPosition(arg0: Vec4f_): void;
        hashCode(): number;
        wait(): void;
        getLeftRotation(): Quaternionf;
        applyOrigin(arg0: Vec3f_): this;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get scale(): Vec3f
        get matrix(): Matrix4f
        get identity(): boolean
        get normalMatrix(): Matrix3f
        get translation(): Vec3f
        get rightRotation(): Quaternionf
        get leftRotation(): Quaternionf
        static readonly EXTENDED_CODEC: Internal.Codec<Internal.Transformation>;
        static readonly CODEC: Internal.Codec<Internal.Transformation>;
    }
    type Transformation_ = Transformation;
    interface TransformableBlockEntity {
        abstract transform(arg0: Internal.BlockEntity_, arg1: Internal.StructureTransform_): void;
        (arg0: Internal.BlockEntity, arg1: Internal.StructureTransform): void;
    }
    type TransformableBlockEntity_ = ((arg0: Internal.BlockEntity, arg1: Internal.StructureTransform)=> void) | TransformableBlockEntity;
    abstract class WorldCarver <C extends Internal.CarverConfiguration> {
        constructor(arg0: Internal.Codec_<C>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredWorldCarver<C>>;
        getRange(): number;
        carveBlock(arg0: Internal.CarvingContext_, arg1: C, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.CarvingMask_, arg5: Internal.BlockPos$MutableBlockPos_, arg6: Internal.BlockPos$MutableBlockPos_, arg7: Internal.Aquifer_, arg8: Internal.MutableBoolean_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static canReach(arg0: Internal.ChunkPos_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        hashCode(): number;
        configured(arg0: C): Internal.ConfiguredWorldCarver<C>;
        wait(): void;
        abstract isStartChunk(arg0: C, arg1: Internal.RandomSource_): boolean;
        wait(arg0: number): void;
        carveEllipsoid(arg0: Internal.CarvingContext_, arg1: C, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.Aquifer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.CarvingMask_, arg11: Internal.WorldCarver$CarveSkipChecker_): boolean;
        canReplaceBlock(arg0: C, arg1: Internal.BlockState_): boolean;
        abstract carve(arg0: Internal.CarvingContext_, arg1: C, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get range(): number
        static readonly CANYON: (Internal.CanyonWorldCarver) & (Internal.WorldCarver<Internal.CanyonCarverConfiguration>);
        static readonly AIR: (Internal.BlockState) & (Internal.BlockState);
        liquids: Internal.Set<Internal.Fluid>;
        static readonly LAVA: (Internal.FluidState) & (Internal.FluidState);
        static readonly NETHER_CAVE: (Internal.NetherWorldCarver) & (Internal.WorldCarver<Internal.CaveCarverConfiguration>);
        static readonly CAVE_AIR: (Internal.BlockState) & (Internal.BlockState);
        static readonly WATER: (Internal.FluidState) & (Internal.FluidState);
        static readonly CAVE: (Internal.CaveWorldCarver) & (Internal.WorldCarver<Internal.CaveCarverConfiguration>);
    }
    type WorldCarver_<C extends Internal.CarverConfiguration> = WorldCarver<C> | Special.Carver;
    abstract class Sensor <E extends Internal.LivingEntity> {
        constructor()
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        abstract doTick(arg0: Internal.ServerLevel_, arg1: E): void;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        abstract requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        tick(arg0: Internal.ServerLevel_, arg1: E): void;
        get class(): typeof any
        static readonly TARGETING_RANGE: (16) & (number);
    }
    type Sensor_<E extends Internal.LivingEntity> = Sensor<E>;
    class ServerboundPongPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getId(): number;
        get class(): typeof any
        get skippable(): boolean
        get id(): number
    }
    type ServerboundPongPacket_ = ServerboundPongPacket;
    class Options implements Internal.GameOptionsAccessor {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.File_)
        panoramaSpeed(): Internal.OptionInstance<number>;
        touchscreen(): Internal.OptionInstance<boolean>;
        biomeBlendRadius(): Internal.OptionInstance<number>;
        cloudStatus(): Internal.OptionInstance<Internal.CloudStatus>;
        chatOpacity(): Internal.OptionInstance<number>;
        guiScale(): Internal.OptionInstance<number>;
        hideLightningFlash(): Internal.OptionInstance<boolean>;
        chatColors(): Internal.OptionInstance<boolean>;
        notificationDisplayTime(): Internal.OptionInstance<number>;
        glintSpeed(): Internal.OptionInstance<number>;
        ambientOcclusion(): Internal.OptionInstance<boolean>;
        chatWidth(): Internal.OptionInstance<number>;
        simulationDistance(): Internal.OptionInstance<number>;
        chatDelay(): Internal.OptionInstance<number>;
        chatLinks(): Internal.OptionInstance<boolean>;
        soundDevice(): Internal.OptionInstance<string>;
        getCloudsType(): Internal.CloudStatus;
        getSoundSourceVolume(arg0: Internal.SoundSource_): number;
        autoSuggestions(): Internal.OptionInstance<boolean>;
        gamma(): Internal.OptionInstance<number>;
        textBackgroundOpacity(): Internal.OptionInstance<number>;
        toggleSprint(): Internal.OptionInstance<boolean>;
        screenEffectScale(): Internal.OptionInstance<number>;
        getClass(): typeof any;
        setCameraType(arg0: Internal.CameraType_): void;
        showAutosaveIndicator(): Internal.OptionInstance<boolean>;
        autoJump(): Internal.OptionInstance<boolean>;
        reducedDebugInfo(): Internal.OptionInstance<boolean>;
        useNativeTransport(): boolean;
        bobView(): Internal.OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        operatorItemsTab(): Internal.OptionInstance<boolean>;
        chatHeightFocused(): Internal.OptionInstance<number>;
        load(): void;
        glintStrength(): Internal.OptionInstance<number>;
        setKey(arg0: Internal.KeyMapping_, arg1: Internal.InputConstants$Key_): void;
        toString(): string;
        fov(): Internal.OptionInstance<number>;
        static "genericValueLabel(net.minecraft.network.chat.Component,net.minecraft.network.chat.Component)"(arg0: Internal.Component_, arg1: Internal.Component_): Internal.Component;
        getSoundSourceOptionInstance(arg0: Internal.SoundSource_): Internal.OptionInstance<number>;
        notifyAll(): void;
        mipmapLevels(): Internal.OptionInstance<number>;
        chatHeightUnfocused(): Internal.OptionInstance<number>;
        updateResourcePacks(arg0: Internal.PackRepository_): void;
        save(): void;
        rawMouseInput(): Internal.OptionInstance<boolean>;
        wait(arg0: number): void;
        fovEffectScale(): Internal.OptionInstance<number>;
        invertYMouse(): Internal.OptionInstance<boolean>;
        chatLinksPrompt(): Internal.OptionInstance<boolean>;
        dumpOptionsForReport(): string;
        getBackgroundColor(arg0: number): number;
        backgroundForChatOnly(): Internal.OptionInstance<boolean>;
        entityShadows(): Internal.OptionInstance<boolean>;
        damageTiltStrength(): Internal.OptionInstance<number>;
        mouseWheelSensitivity(): Internal.OptionInstance<number>;
        setKeyBindings(arg0: Internal.KeyMapping_[]): void;
        notify(): void;
        telemetryOptInExtra(): Internal.OptionInstance<boolean>;
        attackIndicator(): Internal.OptionInstance<Internal.AttackIndicatorStatus>;
        framerateLimit(): Internal.OptionInstance<number>;
        chatScale(): Internal.OptionInstance<number>;
        darknessEffectScale(): Internal.OptionInstance<number>;
        setServerRenderDistance(arg0: number): void;
        highContrast(): Internal.OptionInstance<boolean>;
        broadcastOptions(): void;
        mainHand(): Internal.OptionInstance<Internal.HumanoidArm>;
        "getBackgroundColor(int)"(arg0: number): number;
        particles(): Internal.OptionInstance<Internal.ParticleStatus>;
        static genericValueLabel(arg0: Internal.Component_, arg1: Internal.Component_): Internal.Component;
        onlyShowSecureChat(): Internal.OptionInstance<boolean>;
        realmsNotifications(): Internal.OptionInstance<boolean>;
        prioritizeChunkUpdates(): Internal.OptionInstance<Internal.PrioritizeChunkUpdates>;
        getFile(): Internal.File;
        static "genericValueLabel(net.minecraft.network.chat.Component,int)"(arg0: Internal.Component_, arg1: number): Internal.Component;
        getBackgroundColor(arg0: number): number;
        loadSelectedResourcePacks(arg0: Internal.PackRepository_): void;
        wait(): void;
        entityDistanceScaling(): Internal.OptionInstance<number>;
        enableVsync(): Internal.OptionInstance<boolean>;
        static isFalse(arg0: string): boolean;
        fullscreen(): Internal.OptionInstance<boolean>;
        showSubtitles(): Internal.OptionInstance<boolean>;
        discreteMouseScroll(): Internal.OptionInstance<boolean>;
        isModelPartEnabled(arg0: Internal.PlayerModelPart_): boolean;
        load(arg0: boolean): void;
        narrator(): Internal.OptionInstance<Internal.NarratorStatus>;
        static genericValueLabel(arg0: Internal.Component_, arg1: number): Internal.Component;
        wait(arg0: number, arg1: number): void;
        handler$dej000$parcool$onGetCameraType(arg0: Internal.CallbackInfoReturnable_<any>): void;
        chatLineSpacing(): Internal.OptionInstance<number>;
        forceUnicodeFont(): Internal.OptionInstance<boolean>;
        renderDistance(): Internal.OptionInstance<number>;
        allowServerListing(): Internal.OptionInstance<boolean>;
        directionalAudio(): Internal.OptionInstance<boolean>;
        toggleCrouch(): Internal.OptionInstance<boolean>;
        hideMatchedNames(): Internal.OptionInstance<boolean>;
        getBackgroundOpacity(arg0: number): number;
        toggleModelPart(arg0: Internal.PlayerModelPart_, arg1: boolean): void;
        getCameraType(): Internal.CameraType;
        "getBackgroundColor(float)"(arg0: number): number;
        hashCode(): number;
        chatVisibility(): Internal.OptionInstance<Internal.ChatVisiblity>;
        sensitivity(): Internal.OptionInstance<number>;
        graphicsMode(): Internal.OptionInstance<Internal.GraphicsStatus>;
        static isTrue(arg0: string): boolean;
        equals(arg0: any): boolean;
        darkMojangStudiosBackground(): Internal.OptionInstance<boolean>;
        get cloudsType(): Internal.CloudStatus
        get class(): typeof any
        set cameraType(arg0: Internal.CameraType_)
        get effectiveRenderDistance(): number
        set keyBindings(arg0: Internal.KeyMapping_[])
        set serverRenderDistance(arg0: number)
        get file(): Internal.File
        get cameraType(): Internal.CameraType
        readonly keySwapOffhand: Internal.KeyMapping;
        readonly keyDown: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_NORMAL: (8) & (number);
        static readonly LOGGER: (Internal.Log4jLogger) & (Internal.Logger);
        static readonly RENDER_DISTANCE_FAR: (12) & (number);
        hideBundleTutorial: boolean;
        readonly keyUp: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_EXTREME: (32) & (number);
        skipMultiplayerWarning: boolean;
        readonly keyShift: Internal.KeyMapping;
        hideGui: boolean;
        readonly keyScreenshot: Internal.KeyMapping;
        pauseOnLostFocus: boolean;
        languageCode: string;
        readonly keyPlayerList: Internal.KeyMapping;
        static readonly AUTO_GUI_SCALE: (0) & (number);
        readonly keyRight: Internal.KeyMapping;
        smoothCamera: boolean;
        readonly keyCommand: Internal.KeyMapping;
        readonly keyAttack: Internal.KeyMapping;
        renderFpsChart: boolean;
        gamma: Internal.OptionInstance<number>;
        readonly keyChat: Internal.KeyMapping;
        readonly keyPickItem: Internal.KeyMapping;
        joinedFirstServer: boolean;
        static readonly RENDER_DISTANCE_TINY: (2) & (number);
        minecraft: Internal.Minecraft;
        incompatibleResourcePacks: Internal.List<string>;
        readonly keyFullscreen: Internal.KeyMapping;
        skipRealms32bitWarning: boolean;
        fullscreenVideoModeString: string;
        useNativeTransport: boolean;
        glDebugVerbosity: number;
        readonly keyTogglePerspective: Internal.KeyMapping;
        serverRenderDistance: number;
        static readonly RENDER_DISTANCE_REALLY_FAR: (16) & (number);
        readonly keySmoothCamera: Internal.KeyMapping;
        static readonly UNLIMITED_FRAMERATE_CUTOFF: (260) & (number);
        overrideWidth: number;
        readonly keySaveHotbarActivator: Internal.KeyMapping;
        static readonly RENDER_DISTANCE_SHORT: (4) & (number);
        overrideHeight: number;
        renderDebug: boolean;
        lastMpIp: string;
        readonly keyAdvancements: Internal.KeyMapping;
        readonly keyLeft: Internal.KeyMapping;
        readonly keyJump: Internal.KeyMapping;
        static readonly GSON: (Internal.Gson) & (Internal.Gson);
        readonly keyUse: Internal.KeyMapping;
        readonly keyDrop: Internal.KeyMapping;
        onboardAccessibility: boolean;
        resourcePacks: Internal.List<string>;
        readonly keySocialInteractions: Internal.KeyMapping;
        readonly keySpectatorOutlines: Internal.KeyMapping;
        readonly keySprint: Internal.KeyMapping;
        readonly keyInventory: Internal.KeyMapping;
        readonly keyLoadHotbarActivator: Internal.KeyMapping;
        advancedItemTooltips: boolean;
        renderDebugCharts: boolean;
        syncWrites: boolean;
        readonly keyHotbarSlots: Internal.KeyMapping[];
        hideServerAddress: boolean;
        tutorialStep: Internal.TutorialSteps;
        keyMappings: Internal.KeyMapping[];
        static readonly DEFAULT_SOUND_DEVICE: ("") & (string);
    }
    type Options_ = Options;
    interface Weighted <T> {
        abstract getSound(arg0: Internal.RandomSource_): T;
        abstract getWeight(): number;
        abstract preloadIfRequired(arg0: Internal.SoundEngine_): void;
        get weight(): number
    }
    type Weighted_<T> = Weighted<T>;
    class CustomCommandEventJS extends Internal.EntityEventJS {
        constructor(l: Internal.Level_, e: Internal.Entity_, p: BlockPos_, i: string)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        getId(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        getEntity(): Internal.Entity;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        getPlayer(): Internal.Player;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        getServer(): Internal.MinecraftServer;
        getBlock(): Internal.BlockContainerJS;
        get class(): typeof any
        get id(): string
        get level(): Internal.Level
        get entity(): Internal.Entity
        get player(): Internal.Player
        get server(): Internal.MinecraftServer
        get block(): Internal.BlockContainerJS
    }
    type CustomCommandEventJS_ = CustomCommandEventJS;
    class Heightmap {
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.Heightmap$Types_)
        getClass(): typeof any;
        getHighestTaken(arg0: number, arg1: number): number;
        toString(): string;
        notifyAll(): void;
        getFirstAvailable(arg0: number, arg1: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        update(arg0: number, arg1: number, arg2: number, arg3: Internal.BlockState_): boolean;
        setRawData(arg0: Internal.ChunkAccess_, arg1: Internal.Heightmap$Types_, arg2: number[]): void;
        hashCode(): number;
        static primeHeightmaps(arg0: Internal.ChunkAccess_, arg1: Internal.Set_<Internal.Heightmap$Types>): void;
        wait(): void;
        wait(arg0: number): void;
        getRawData(): number[];
        equals(arg0: any): boolean;
        get class(): typeof any
        get rawData(): number[]
        static readonly NOT_AIR: Internal.Predicate<Internal.BlockState>;
        static readonly MATERIAL_MOTION_BLOCKING: Internal.Predicate<Internal.BlockState>;
    }
    type Heightmap_ = Heightmap;
    interface RepeatedDelayStrategy {
        abstract delayCyclesAfterSuccess(): number;
        exponentialBackoff(arg0: number): this;
        abstract delayCyclesAfterFailure(): number;
        readonly CONSTANT: Internal.RepeatedDelayStrategy;
    }
    type RepeatedDelayStrategy_ = RepeatedDelayStrategy;
    abstract class AbstractWidget implements Internal.LayoutElement, Internal.NarratableEntry, Internal.GuiEventListener, Internal.Renderable {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Component_)
        charTyped(arg0: string, arg1: number): boolean;
        onRelease(arg0: number, arg1: number): void;
        renderScrollingString(arg0: Internal.GuiGraphics_, arg1: Internal.Font_, arg2: number, arg3: number): void;
        getY(): number;
        setFocused(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        notify(): void;
        getTooltip(): Internal.Tooltip;
        onClick(arg0: number, arg1: number): void;
        setTooltip(arg0: Internal.Tooltip_): void;
        clearFGColor(): void;
        setX(arg0: number): void;
        setAlpha(arg0: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        abstract updateWidgetNarration(arg0: Internal.NarrationElementOutput_): void;
        createTooltipPositioner(): Internal.ClientTooltipPositioner;
        isHovered(): boolean;
        getWidth(): number;
        setPosition(arg0: number, arg1: number): void;
        visitWidgets(arg0: Internal.Consumer_<Internal.AbstractWidget>): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        wait(): void;
        isHoveredOrFocused(): boolean;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        setMessage(arg0: Internal.Component_): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        isValidClickButton(arg0: number): boolean;
        getClass(): typeof any;
        isFocused(): boolean;
        getX(): number;
        clicked(arg0: number, arg1: number): boolean;
        isActive(): boolean;
        getTabOrderGroup(): number;
        abstract renderWidget(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number, arg1: number): void;
        setTooltipDelay(arg0: number): void;
        getMessage(): Internal.Component;
        onDrag(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setY(arg0: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setWidth(arg0: number): void;
        getHeight(): number;
        setTabOrderGroup(arg0: number): void;
        getFGColor(): number;
        toString(): string;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        renderTexture(arg0: Internal.GuiGraphics_, arg1: ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        notifyAll(): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        playDownSound(arg0: Internal.SoundManager_): void;
        defaultButtonNarrationText(arg0: Internal.NarrationElementOutput_): void;
        hashCode(): number;
        static wrapDefaultNarrationMessage(arg0: Internal.Component_): Internal.MutableComponent;
        getCurrentFocusPath(): Internal.ComponentPath;
        static renderScrollingString(arg0: Internal.GuiGraphics_, arg1: Internal.Font_, arg2: Internal.Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setFGColor(arg0: number): void;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        createNarrationMessage(): Internal.MutableComponent;
        wait(arg0: number): void;
        setHeight(arg0: number): void;
        equals(arg0: any): boolean;
        get y(): number
        set focused(arg0: boolean)
        get tooltip(): Internal.Tooltip
        set tooltip(arg0: Internal.Tooltip_)
        set x(arg0: number)
        set alpha(arg0: number)
        get rectangle(): Internal.ScreenRectangle
        get hovered(): boolean
        get width(): number
        get hoveredOrFocused(): boolean
        set message(arg0: Internal.Component_)
        get class(): typeof any
        get focused(): boolean
        get x(): number
        get active(): boolean
        get tabOrderGroup(): number
        set tooltipDelay(arg0: number)
        get message(): Internal.Component
        set y(arg0: number)
        set width(arg0: number)
        get height(): number
        set tabOrderGroup(arg0: number)
        get FGColor(): number
        get currentFocusPath(): Internal.ComponentPath
        set FGColor(arg0: number)
        set height(arg0: number)
        width: number;
        visible: boolean;
        alpha: number;
        static readonly WIDGETS_LOCATION: (ResourceLocation) & (ResourceLocation);
        height: number;
        static readonly ACCESSIBILITY_TEXTURE: (ResourceLocation) & (ResourceLocation);
        isHovered: boolean;
        static readonly UNSET_FG_COLOR: (-1) & (number);
        active: boolean;
        packedFGColor: number;
    }
    type AbstractWidget_ = AbstractWidget;
    class EntityEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Entity_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type EntityEvent_ = EntityEvent;
    class Realms32BitWarningStatus {
        constructor(arg0: Internal.Minecraft_)
        showRealms32BitWarningIfNeeded(arg0: Internal.Screen_): void;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type Realms32BitWarningStatus_ = Realms32BitWarningStatus;
    class ModelQuadFacing extends Internal.Enum<Internal.ModelQuadFacing> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static values(): Internal.ModelQuadFacing[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getOpposite(): this;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ModelQuadFacing>>;
        hashCode(): number;
        "compareTo(me.jellysquid.mods.sodium.client.model.quad.properties.ModelQuadFacing)"(arg0: Internal.ModelQuadFacing_): number;
        getDeclaringClass(): typeof Internal.ModelQuadFacing;
        compareTo(arg0: Internal.ModelQuadFacing_): number;
        ordinal(): number;
        wait(): void;
        static fromDirection(arg0: Internal.Direction_): Internal.ModelQuadFacing;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static valueOf(arg0: string): Internal.ModelQuadFacing;
        equals(arg0: any): boolean;
        get class(): typeof any
        get opposite(): Internal.ModelQuadFacing
        get declaringClass(): typeof Internal.ModelQuadFacing
        static readonly NEG_X: (Internal.ModelQuadFacing) & (Internal.ModelQuadFacing);
        static readonly UNASSIGNED: (Internal.ModelQuadFacing) & (Internal.ModelQuadFacing);
        static readonly NONE: (0) & (number);
        static readonly NEG_Y: (Internal.ModelQuadFacing) & (Internal.ModelQuadFacing);
        static readonly COUNT: (7) & (number);
        static readonly POS_Z: (Internal.ModelQuadFacing) & (Internal.ModelQuadFacing);
        static readonly NEG_Z: (Internal.ModelQuadFacing) & (Internal.ModelQuadFacing);
        static readonly POS_X: (Internal.ModelQuadFacing) & (Internal.ModelQuadFacing);
        static readonly VALUES: Internal.ModelQuadFacing[];
        static readonly ALL: (127) & (number);
        static readonly POS_Y: (Internal.ModelQuadFacing) & (Internal.ModelQuadFacing);
    }
    type ModelQuadFacing_ = "unassigned" | "pos_z" | "neg_z" | "pos_y" | "neg_y" | "pos_x" | "neg_x" | ModelQuadFacing;
    class InteractionResultHolder <T> {
        constructor(arg0: Internal.InteractionResult_, arg1: T)
        getClass(): typeof any;
        toString(): string;
        static fail<T>(arg0: T): Internal.InteractionResultHolder<T>;
        notifyAll(): void;
        notify(): void;
        static pass<T>(arg0: T): Internal.InteractionResultHolder<T>;
        wait(arg0: number, arg1: number): void;
        getResult(): Internal.InteractionResult;
        hashCode(): number;
        static consume<T>(arg0: T): Internal.InteractionResultHolder<T>;
        wait(): void;
        wait(arg0: number): void;
        getObject(): T;
        static success<T>(arg0: T): Internal.InteractionResultHolder<T>;
        equals(arg0: any): boolean;
        static sidedSuccess<T>(arg0: T, arg1: boolean): Internal.InteractionResultHolder<T>;
        get class(): typeof any
        get result(): Internal.InteractionResult
        get object(): T
    }
    type InteractionResultHolder_<T> = InteractionResultHolder<T>;
    interface PotatoProjectileEntityHitAction {
        abstract execute(arg0: Internal.ItemStack_, arg1: Internal.EntityHitResult_, arg2: Internal.PotatoProjectileEntityHitAction$Type_): boolean;
        abstract codec(): Internal.Codec<Internal.PotatoProjectileEntityHitAction>;
        readonly CODEC: Internal.Codec<Internal.PotatoProjectileEntityHitAction>;
    }
    type PotatoProjectileEntityHitAction_ = PotatoProjectileEntityHitAction;
    interface ITimeTrackingServer {
        abstract mfix$getLastTickStartTime(): number;
        (): number;
    }
    type ITimeTrackingServer_ = ITimeTrackingServer | (()=> number);
    class StoringChunkProgressListener implements Internal.ChunkProgressListener {
        constructor(arg0: number)
        getProgress(): number;
        getClass(): typeof any;
        getFullDiameter(): number;
        toString(): string;
        getDiameter(): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        start(): void;
        hashCode(): number;
        getStatus(arg0: number, arg1: number): Internal.ChunkStatus;
        wait(): void;
        stop(): void;
        wait(arg0: number): void;
        onStatusChange(arg0: Internal.ChunkPos_, arg1: Internal.ChunkStatus_): void;
        updateSpawnPos(arg0: Internal.ChunkPos_): void;
        equals(arg0: any): boolean;
        get progress(): number
        get class(): typeof any
        get fullDiameter(): number
        get diameter(): number
    }
    type StoringChunkProgressListener_ = StoringChunkProgressListener;
    class BuilderType <T> extends Internal.Record {
        constructor(type: string, builderClass: Internal.BuilderBase<T>, factory: Internal.BuilderFactory_)
        factory(): Internal.BuilderFactory;
        getClass(): typeof any;
        type(): string;
        hashCode(): number;
        builderClass(): Internal.BuilderBase<T>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type BuilderType_<T> = BuilderType<T>;
    class BlockContainerJS implements Internal.SpecialEquality {
        constructor(blockEntity: Internal.BlockEntity_)
        constructor(w: Internal.Level_, p: BlockPos_)
        getTags(): Internal.Collection<ResourceLocation>;
        getWest(): this;
        getY(): number;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getNorth(): this;
        getBlockLight(): number;
        notify(): void;
        spawnLightning(): void;
        spawnFireworks(fireworks: Internal.FireworksJS_): void;
        getPos(): BlockPos;
        getDown(): this;
        getLight(): number;
        getDrops(): Internal.List<Internal.ItemStack>;
        getSouth(): this;
        getSkyLight(): number;
        mergeEntityData(tag: Internal.CompoundTag_): void;
        getCanSeeSky(): boolean;
        getDimension(): ResourceLocation;
        getBlockState(): Internal.BlockState;
        specialEquals(o: any, shallow: boolean): boolean;
        hasTag(tag: ResourceLocation_): boolean;
        getTypeData(): Internal.CompoundTag;
        getInventory(): Internal.InventoryKJS;
        wait(): void;
        offset(x: number, y: number, z: number): this;
        offset(f: Internal.Direction_): this;
        getClass(): typeof any;
        offset(f: Internal.Direction_, d: number): this;
        getEntityId(): string;
        getEast(): this;
        spawnLightning(effectOnly: boolean, player: Internal.ServerPlayer_): void;
        getX(): number;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getDrops(entity: Internal.Entity_, heldItem: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        set(id: Special.Block, properties: Internal.Map_<any, any>): void;
        popItem(item: Internal.ItemStack_): void;
        set(id: Special.Block, properties: Internal.Map_<any, any>, flags: number): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        setBlockState(state: Internal.BlockState_, flags: number): void;
        popItemFromFace(item: Internal.ItemStack_, dir: Internal.Direction_): void;
        getEntity(): Internal.BlockEntity;
        getPlayersInRadius(radius: number): Internal.EntityArrayList;
        clearCache(): void;
        getUp(): this;
        getZ(): number;
        getEntityData(): Internal.CompoundTag;
        spawnLightning(effectOnly: boolean): void;
        toString(): string;
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        getInventory(facing: Internal.Direction_): Internal.InventoryKJS;
        getId(): Special.Block&`${string}:${string}`;
        canSeeSkyFromBelowWater(): boolean;
        hashCode(): number;
        getProperties(): Internal.Map<string, string>;
        createExplosion(): Internal.ExplosionJS;
        setEntityData(tag: Internal.CompoundTag_): void;
        set(id: Special.Block): void;
        getPlayersInRadius(): Internal.EntityArrayList;
        wait(arg0: number): void;
        equals(obj: any): boolean;
        getBiomeId(): ResourceLocation;
        get tags(): Internal.Collection<ResourceLocation>
        get west(): Internal.BlockContainerJS
        get y(): number
        get north(): Internal.BlockContainerJS
        get blockLight(): number
        get pos(): BlockPos
        get down(): Internal.BlockContainerJS
        get light(): number
        get drops(): Internal.List<Internal.ItemStack>
        get south(): Internal.BlockContainerJS
        get skyLight(): number
        get canSeeSky(): boolean
        get dimension(): ResourceLocation
        get blockState(): Internal.BlockState
        get typeData(): Internal.CompoundTag
        get inventory(): Internal.InventoryKJS
        get class(): typeof any
        get entityId(): string
        get east(): Internal.BlockContainerJS
        get x(): number
        get level(): Internal.Level
        get entity(): Internal.BlockEntity
        get up(): Internal.BlockContainerJS
        get z(): number
        get entityData(): Internal.CompoundTag
        get item(): Internal.ItemStack
        get id(): Special.Block&`${string}:${string}`
        get properties(): Internal.Map<string, string>
        set entityData(tag: Internal.CompoundTag_)
        get playersInRadius(): Internal.EntityArrayList
        get biomeId(): ResourceLocation
        readonly minecraftLevel: Internal.Level;
    }
    type BlockContainerJS_ = BlockContainerJS;
    interface CustomIngredientSerializer <T extends Internal.CustomIngredient> {
        abstract "write(net.minecraft.network.FriendlyByteBuf,net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient)"(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        abstract "read(net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.FriendlyByteBuf_): T;
        get(identifier: ResourceLocation_): Internal.CustomIngredientSerializer<any>;
        abstract read(arg0: Internal.JsonObject_): T;
        abstract "read(com.google.gson.JsonObject)"(arg0: Internal.JsonObject_): T;
        abstract write(arg0: Internal.JsonObject_, arg1: T): void;
        abstract write(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        abstract read(arg0: Internal.FriendlyByteBuf_): T;
        abstract getIdentifier(): ResourceLocation;
        abstract "write(com.google.gson.JsonObject,net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient)"(arg0: Internal.JsonObject_, arg1: T): void;
        register(serializer: Internal.CustomIngredientSerializer_<any>): void;
        get identifier(): ResourceLocation
    }
    type CustomIngredientSerializer_<T extends Internal.CustomIngredient> = CustomIngredientSerializer<T>;
    class EnderDragon extends Internal.Mob implements Internal.Enemy {
        constructor(arg0: Internal.EntityType_<Internal.EnderDragon>, arg1: Internal.Level_)
        modifyExpressionValue$dkm000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getDeathSound(): Internal.SoundEvent;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        shouldPassengersInheritMalus(): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        updateWalkAnimation(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        updateSwingTime(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        transition$setRawPosition(arg0: Vec3d_): void;
        isSpectator(): boolean;
        isAlwaysExperienceDropper(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        onFlap(): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        actuallyHurt(arg0: DamageSource_, arg1: number): void;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): Internal.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        handler$ded000$parcool$onSetSprinting(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        bo$refreshEntityData(data: number): void;
        setOutOfCamera(value: boolean): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        getDefaultLootTable(): ResourceLocation;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        tickRidden(arg0: Internal.Player_, arg1: Vec3d_): void;
        getRandomX(arg0: number): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getAlpha(le: Internal.LivingEntity_, partialTicks: number): number;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        isSunBurnTick(): boolean;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        isAffectedByFluids(): boolean;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        getAmbientSound(): Internal.SoundEvent;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        isCulled(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getRiddenSpeed(arg0: Internal.Player_): number;
        processPortalCooldown(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getLeashHolder(): Internal.Entity;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        removeSoulSpeed(): void;
        shouldDropExperience(): boolean;
        getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        findClosestNode(arg0: number, arg1: number, arg2: number): number;
        redirect$cic000$moonlight$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        getArrowCount(): number;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        handler$dec000$parcool$onIsInWall(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canRide(arg0: Internal.Entity_): boolean;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        removeAfterChangingDimensions(): void;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getSharedFlag(arg0: number): boolean;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        tryAddFrost(): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        getPhaseManager(): Internal.EnderDragonPhaseManager;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        invokeShouldDropLoot(): boolean;
        removeVehicle(): void;
        defineSynchedData(): void;
        checkInsideBlocks(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        wrapOperation$dab000$supplementaries$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        createHoverEvent(): Internal.HoverEvent;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        serverAiStep(): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        setItemSlotAndDropWhenKilled(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        sendDebugPackets(): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        dropFromLootTable(arg0: DamageSource_, arg1: boolean): void;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        updateUsingItem(arg0: Internal.ItemStack_): void;
        canChangeDimensions(): boolean;
        modifyReturnValue$dkm000$create$onFireImmune(arg0: boolean): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        essential$getRealPrevRenderYaw(): number;
        enchantSpawnedArmor(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.EquipmentSlot_): void;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        repositionEntityAfterLoad(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        handler$dec000$parcool$onOnGround(arg0: Internal.CallbackInfoReturnable_<any>): void;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        playBlockFallSound(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        updateControlFlags(): void;
        createBodyControl(): Internal.BodyRotationControl;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        setPos(arg0: Vec3d_): void;
        enchantSpawnedWeapon(arg0: Internal.RandomSource_, arg1: number): void;
        populateDefaultEquipmentEnchantments(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        doPush(arg0: Internal.Entity_): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getParts(): Internal.PartEntity<any>[];
        handleEntityEvent(arg0: number): void;
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isUsingItem(): boolean;
        essential$getRealRenderYaw(): number;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        jumpFromGround(): void;
        canReplaceCurrentItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        onChangedBlock(arg0: BlockPos_): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        pickUpItem(arg0: Internal.ItemEntity_): void;
        hurt(arg0: Internal.EnderDragonPart_, arg1: DamageSource_, arg2: number): boolean;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        calculateFallDamage(arg0: number, arg1: number): number;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateEffectVisibility(): void;
        getSubEntities(): Internal.EnderDragonPart[];
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getSoundVolume(): number;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        updateInvisibilityStatus(): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        setFightOrigin(arg0: BlockPos_): void;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        supp$setSlimedTicks(newSlimedTicks: number, sync: boolean): void;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        newFloatList(...arg0: number[]): Internal.ListTag;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        handler$zjk001$sodiumdynamiclights$onTick(ci: Internal.CallbackInfo_): void;
        getJumpControl(): Internal.JumpControl;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        handler$ded000$parcool$onClimbable(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getBlockJumpFactor(): number;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        onSoulSpeedBlock(): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        getDragonFight(): Internal.EndDragonFight;
        playEntityOnFireExtinguishedSound(): void;
        isFullyFrozen(): boolean;
        dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        getHeadLookVector(arg0: number): Vec3d;
        isInWall(): boolean;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setUseItem(arg0: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        dropExperience(): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        decreaseAirSupply(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        handler$bif000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        onOffspringSpawnedFromEgg(arg0: Internal.Player_, arg1: Internal.Mob_): void;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        parCool$isLivingOnCustomLadder(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        bo$getRenderer(): Internal.EntityRenderer<any>;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        getDamageAfterMagicAbsorb(arg0: DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        findPath(arg0: number, arg1: number, arg2: Internal.Node_): net.minecraft.world.level.pathfinder.Path;
        getEyeY(): number;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        tryAddSoulSpeed(): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        doWaterSplashEffect(): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getFlyingSpeed(): number;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        dropAllDeathLoot(arg0: DamageSource_): void;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        tickLeash(): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        customServerAiStep(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        handleNetherPortal(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        triggerItemUseEffects(arg0: Internal.ItemStack_, arg1: number): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        /**
         * @deprecated
        */
        jumpInLiquid(arg0: Internal.TagKey_<Internal.Fluid>): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        reapplyPosition(): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        getWaterSlowDown(): number;
        createNavigation(arg0: Internal.Level_): Internal.PathNavigation;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        supp$getSlimedTicks(): number;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getRiddenInput(arg0: Internal.Player_, arg1: Vec3d_): Vec3d;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        dropEquipment(): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        addPassenger(arg0: Internal.Entity_): void;
        getSleepingPos(): Internal.Optional<any>;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getPermissionLevel(): number;
        getMotionZ(): number;
        nextStep(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        pushEntities(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        setTimeout(): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        handler$zjk000$sodiumdynamiclights$onRemove(ci: Internal.CallbackInfo_): void;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        blockUsingShield(arg0: Internal.LivingEntity_): void;
        processFlappingMovement(): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        onCrystalDestroyed(arg0: Internal.EndCrystal_, arg1: BlockPos_, arg2: DamageSource_): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        /**
         * @deprecated
        */
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        unsetRemoved(): void;
        getPickupReach(): Vec3i;
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        sdl$getLuminance(): number;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        populateDefaultEquipmentSlots(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        completeUsingItem(): void;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        brainProvider(): Internal.Brain$Provider<any>;
        getJumpPower(): number;
        setDragonFight(arg0: Internal.EndDragonFight_): void;
        registerGoals(): void;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        removeEffectParticles(): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): Internal.Component;
        getTicksRequiredToFreeze(): number;
        getLatencyPos(arg0: number, arg1: number): number[];
        shouldDespawnInPeaceful(): boolean;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        reallyHurt(arg0: DamageSource_, arg1: number): boolean;
        handler$dec000$parcool$onGetEyeHeight(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getUsername(): string;
        transition$getRawPosition(): Vec3d;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        findClosestNode(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): Internal.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFightOrigin(): BlockPos;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        static tickEntity(entity: Internal.LivingEntity_): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        setId(arg0: number): void;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        playHurtSound(arg0: DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        getHeadPartYOffset(arg0: number, arg1: number[], arg2: number[]): number;
        canDisableShield(): boolean;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        getMovementEmission(): Internal.Entity$MovementEmission;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        redirect$bhp000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: DamageSource_, amount: number): boolean;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        tickEffects(): void;
        isForcedVisible(): boolean;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        set culled(value: boolean)
        get onFire(): boolean
        get deathSound(): Internal.SoundEvent
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get alwaysExperienceDropper(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        set outOfCamera(value: boolean)
        get defaultLootTable(): ResourceLocation
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get sunBurnTick(): boolean
        get affectedByFluids(): boolean
        get ambientSound(): Internal.SoundEvent
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get culled(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get phaseManager(): Internal.EnderDragonPhaseManager
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get fireImmuneTicks(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get subEntities(): Internal.EnderDragonPart[]
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get soundVolume(): number
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        set fightOrigin(arg0: BlockPos_)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get flapping(): boolean
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get blockJumpFactor(): number
        get dragonFight(): Internal.EndDragonFight
        get fullyFrozen(): boolean
        get inWall(): boolean
        get meleeAttackReferencePosition(): Vec3d
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        set useItem(arg0: Internal.ItemStack_)
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get swimSound(): Internal.SoundEvent
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get flyingSpeed(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get waterSlowDown(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get sleepingPos(): Internal.Optional<any>
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get permissionLevel(): number
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get outOfCamera(): boolean
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get pickupReach(): Vec3i
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get immobile(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get jumpPower(): number
        set dragonFight(arg0: Internal.EndDragonFight_)
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): Internal.Component
        get typeName(): Internal.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): Internal.Component
        get mobType(): Internal.MobType
        get fightOrigin(): BlockPos
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get movementEmission(): Internal.Entity$MovementEmission
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        oFlapTime: number;
        nearestCrystal: Internal.EndCrystal;
        flapTime: number;
        static readonly DATA_PHASE: Internal.EntityDataAccessor<number>;
        yRotA: number;
        readonly head: Internal.EnderDragonPart;
        dragonDeathTime: number;
        readonly positions: number[][];
        posPointer: number;
        inWall: boolean;
    }
    type EnderDragon_ = EnderDragon;
    interface Delayed extends Internal.Comparable<Internal.Delayed> {
        abstract getDelay(arg0: Internal.TimeUnit_): number;
        abstract compareTo(arg0: Internal.Delayed_): number;
    }
    type Delayed_ = Delayed;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface DomainCombiner {
        abstract combine(arg0: Internal.ProtectionDomain_[], arg1: Internal.ProtectionDomain_[]): Internal.ProtectionDomain[];
        (arg0: Internal.ProtectionDomain[], arg1: Internal.ProtectionDomain[]): Internal.ProtectionDomain_[];
    }
    type DomainCombiner_ = DomainCombiner | ((arg0: Internal.ProtectionDomain[], arg1: Internal.ProtectionDomain[])=> Internal.ProtectionDomain_[]);
    class FilterMask {
        constructor(arg0: number)
        getClass(): typeof any;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.FilterMask;
        toString(): string;
        notifyAll(): void;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        apply(arg0: string): string;
        hashCode(): number;
        applyWithFormatting(arg0: string): Internal.Component;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setFiltered(arg0: number): void;
        isFullyFiltered(): boolean;
        static write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.FilterMask_): void;
        get class(): typeof any
        get empty(): boolean
        set filtered(arg0: number)
        get fullyFiltered(): boolean
        static readonly CODEC: Internal.Codec<Internal.FilterMask>;
        static readonly PARTIALLY_FILTERED_CODEC: Internal.Codec<Internal.FilterMask>;
        static readonly FILTERED_STYLE: (Internal.Style) & (Internal.Style);
        static readonly PASS_THROUGH: (Internal.FilterMask) & (Internal.FilterMask);
        static readonly PASS_THROUGH_CODEC: Internal.Codec<Internal.FilterMask>;
        static readonly FULLY_FILTERED: (Internal.FilterMask) & (Internal.FilterMask);
        static readonly FULLY_FILTERED_CODEC: Internal.Codec<Internal.FilterMask>;
    }
    type FilterMask_ = FilterMask;
    class LavaFluid$Flowing extends Internal.LavaFluid {
        constructor()
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        handler$dlf000$create$canPassThroughOnWaterWheel(arg0: Internal.BlockGetter_, arg1: Internal.Fluid_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.Direction_, arg5: BlockPos_, arg6: Internal.BlockState_, arg7: Internal.FluidState_, arg8: Internal.CallbackInfoReturnable_<any>): void;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        isSource(arg0: Internal.FluidState_): boolean;
        getOwnHeight(arg0: Internal.FluidState_): number;
        notify(): void;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getSlopeDistance(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: number, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_, arg6: Internal.Short2ObjectMap_<com.mojang.datafixers.util.Pair<Internal.BlockState, Internal.FluidState>>, arg7: Internal.Short2BooleanMap_): number;
        getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        beforeDestroyingBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getSpread(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.Map<Internal.Direction, Internal.FluidState>;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        canConvertToSource(arg0: Internal.Level_): boolean;
        isRandomlyTicking(): boolean;
        getDripParticle(): Internal.ParticleOptions;
        getSlopeFindDistance(arg0: Internal.LevelReader_): number;
        getSource(arg0: boolean): Internal.FluidState;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getExplosionResistance(): number;
        getBucket(): Internal.Item;
        isSame(arg0: Internal.Fluid_): boolean;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getFlowing(arg0: number, arg1: boolean): Internal.FluidState;
        isSolidFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getNewLiquid(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.FluidState;
        spreadTo(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: Internal.FluidState_): void;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        handler$cel000$fabric_transfer_api_v1$hookGetBucketFillSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        getClass(): typeof any;
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        canBeReplacedWith(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Fluid_, arg4: Internal.Direction_): boolean;
        fabric_getCachedFluidVariant(): Internal.FluidVariant;
        isEmpty(): boolean;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        getTickDelay(arg0: Internal.LevelReader_): number;
        getSpreadDelay(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.FluidState_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$registryName(): ResourceLocation;
        registerDefaultState(arg0: Internal.FluidState_): void;
        getAmount(arg0: Internal.FluidState_): number;
        toString(): string;
        getFlowing(): Internal.Fluid;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        hashCode(): number;
        getDropOff(arg0: Internal.LevelReader_): number;
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        createFluidStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Fluid, Internal.FluidState>): void;
        createLegacyBlock(arg0: Internal.FluidState_): Internal.BlockState;
        wait(arg0: number): void;
        create$getNewLiquid(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.FluidState;
        getSource(): Internal.Fluid;
        static getLegacyLevel(arg0: Internal.FluidState_): number;
        equals(arg0: any): boolean;
        spread(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        canSpreadTo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: BlockPos_, arg5: Internal.BlockState_, arg6: Internal.FluidState_, arg7: Internal.Fluid_): boolean;
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get randomlyTicking(): boolean
        get dripParticle(): Internal.ParticleOptions
        get explosionResistance(): number
        get bucket(): Internal.Item
        get class(): typeof any
        get empty(): boolean
        get fluidType(): Internal.FluidType
        get flowing(): Internal.Fluid
        get source(): Internal.Fluid
    }
    type LavaFluid$Flowing_ = LavaFluid$Flowing;
    class GameRules implements Internal.MixinGameRulesAccessor, net.fabricmc.fabric.mixin.gamerule.GameRulesAccessor, Internal.GameRulesAccessor, Internal.GameRulesKJS {
        constructor()
        constructor(arg0: Internal.DynamicLike_<any>)
        getClass(): typeof any;
        createTag(): Internal.CompoundTag;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static register<T extends Internal.GameRules$Value<T>>(arg0: string, arg1: Internal.GameRules$Category_, arg2: Internal.GameRules$Type_<T>): Internal.GameRules$Key<T>;
        static callRegister$fabric_game_rule_api_v1_$md$a5149f$0(arg0: string, arg1: Internal.GameRules$Category_, arg2: Internal.GameRules$Type_<any>): Internal.GameRules$Key<any>;
        get(rule: string): Internal.GameRules$Value<any>;
        assignFrom(arg0: Internal.GameRules_, arg1: Internal.MinecraftServer_): void;
        static invokeRegister<T extends Internal.GameRules$Value<T>>(name: string, category: Internal.GameRules$Category_, type: Internal.GameRules$Type_<T>): Internal.GameRules$Key<T>;
        static invokeRegister_$md$a5149f$2(arg0: string, arg1: Internal.GameRules$Category_, arg2: Internal.GameRules$Type_<any>): Internal.GameRules$Key<any>;
        set(rule: string, value: string): void;
        static callRegister<T extends Internal.GameRules$Value<T>>(name: string, category: Internal.GameRules$Category_, type: Internal.GameRules$Type_<T>): Internal.GameRules$Key<T>;
        toString(): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$getInt(rule: string): number;
        notifyAll(): void;
        getRule<T extends Internal.GameRules$Value<T>>(arg0: Internal.GameRules$Key_<T>): T;
        hashCode(): number;
        static visitGameRuleTypes(arg0: Internal.GameRules$GameRuleTypeVisitor_): void;
        getBoolean(arg0: Internal.GameRules$Key_<Internal.GameRules$BooleanValue>): boolean;
        static getRuleTypes(): Internal.Map<Internal.GameRules$Key<any>, Internal.GameRules$Type<any>>;
        wait(): void;
        wait(arg0: number): void;
        kjs$getString(rule: string): string;
        getRules(): Internal.Map<any, any>;
        getInt(arg0: Internal.GameRules$Key_<Internal.GameRules$IntegerValue>): number;
        copy(): this;
        equals(arg0: any): boolean;
        static getRuleTypes$fabric_game_rule_api_v1_$md$a5149f$1(): Internal.Map<any, any>;
        get class(): typeof any
        get ruleTypes(): Internal.Map<Internal.GameRules$Key<any>, Internal.GameRules$Type<any>>
        get rules(): Internal.Map<any, any>
        get ruleTypes$fabric_game_rule_api_v1_$md$a5149f$1(): Internal.Map<any, any>
        static readonly RULE_DO_WARDEN_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MAX_COMMAND_CHAIN_LENGTH: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_MOBGRIEFING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DISABLE_ELYTRA_MOVEMENT_CHECK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FREEZE_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOINSOMNIA: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_COMMAND_MODIFICATION_BLOCK_LIMIT: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_DAYLIGHT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_TRADER_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_REDUCEDDEBUGINFO: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_IMMEDIATE_RESPAWN: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly LOGGER: (Internal.Log4jLogger) & (Internal.Logger);
        static readonly RULE_DOMOBSPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOBLOCKDROPS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_COMMANDBLOCKOUTPUT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_TNT_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_WEATHER_CYCLE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_NATURAL_REGENERATION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FIRE_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FORGIVE_DEAD_PLAYERS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SHOWDEATHMESSAGES: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_PLAYERS_SLEEPING_PERCENTAGE: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_WATER_SOURCE_CONVERSION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FALL_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MOB_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DISABLE_RAIDS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_BLOCK_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LOGADMINCOMMANDS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SPAWN_RADIUS: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_SENDCOMMANDFEEDBACK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SNOW_ACCUMULATION_HEIGHT: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_ANNOUNCE_ADVANCEMENTS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOENTITYDROPS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LAVA_SOURCE_CONVERSION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_PATROL_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_VINES_SPREAD: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly DEFAULT_RANDOM_TICK_SPEED: (3) & (number);
        static readonly RULE_DOFIRETICK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LIMITED_CRAFTING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SPECTATORSGENERATECHUNKS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MAX_ENTITY_CRAMMING: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_DROWNING_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_UNIVERSAL_ANGER: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_GLOBAL_SOUND_EVENTS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_KEEPINVENTORY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOMOBLOOT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_RANDOMTICKING: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
    }
    type GameRules_ = GameRules;
    interface CraftingContainerKJS {
        getMenu(): Internal.AbstractContainerMenu;
        get menu(): Internal.AbstractContainerMenu
    }
    type CraftingContainerKJS_ = CraftingContainerKJS;
    class Instant implements Internal.Comparable<Internal.Instant>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        plus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        notify(): void;
        compareTo(arg0: any): number;
        static ofEpochSecond(arg0: number, arg1: number): Internal.Instant;
        plusSeconds(arg0: number): this;
        "compareTo(java.time.Instant)"(arg0: Internal.Instant_): number;
        "with"(arg0: Internal.TemporalField_, arg1: number): Internal.Temporal;
        isSupported(arg0: Internal.TemporalField_): boolean;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        "isSupported(java.time.temporal.TemporalField)"(arg0: Internal.TemporalField_): boolean;
        static now(arg0: Internal.Clock_): Internal.Instant;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        atOffset(arg0: Internal.ZoneOffset_): Internal.OffsetDateTime;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        plusMillis(arg0: number): this;
        isAfter(arg0: Internal.Instant_): boolean;
        toEpochMilli(): number;
        get(arg0: Internal.TemporalField_): number;
        wait(): void;
        compareTo(arg0: Internal.Instant_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        "isSupported(java.time.temporal.TemporalUnit)"(arg0: Internal.TemporalUnit_): boolean;
        minusMillis(arg0: number): this;
        getClass(): typeof any;
        minusSeconds(arg0: number): this;
        static parse(arg0: Internal.CharSequence_): Internal.Instant;
        isBefore(arg0: Internal.Instant_): boolean;
        wait(arg0: number, arg1: number): void;
        static ofEpochSecond(arg0: number): Internal.Instant;
        getLong(arg0: Internal.TemporalField_): number;
        static now(): Internal.Instant;
        static from(arg0: Internal.TemporalAccessor_): Internal.Instant;
        minusNanos(arg0: number): this;
        toString(): string;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        notifyAll(): void;
        "with"(arg0: Internal.TemporalAdjuster_): this;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        getNano(): number;
        getEpochSecond(): number;
        plus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        hashCode(): number;
        atZone(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        wait(arg0: number): void;
        plusNanos(arg0: number): this;
        equals(arg0: any): boolean;
        static ofEpochMilli(arg0: number): Internal.Instant;
        minus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        get class(): typeof any
        get nano(): number
        get epochSecond(): number
        static readonly EPOCH: (Internal.Instant) & (Internal.Instant);
        static readonly MAX: (Internal.Instant) & (Internal.Instant);
        static readonly MIN: (Internal.Instant) & (Internal.Instant);
    }
    type Instant_ = Instant;
    interface ImmutableStringReader {
        abstract getTotalLength(): number;
        abstract peek(): string;
        abstract getCursor(): number;
        abstract getRead(): string;
        abstract canRead(): boolean;
        abstract getRemainingLength(): number;
        abstract getRemaining(): string;
        abstract canRead(arg0: number): boolean;
        abstract peek(arg0: number): string;
        abstract getString(): string;
        get totalLength(): number
        get cursor(): number
        get read(): string
        get remainingLength(): number
        get remaining(): string
        get string(): string
    }
    type ImmutableStringReader_ = ImmutableStringReader;
    abstract class AbstractTexture implements Internal.AutoCloseable {
        constructor()
        getClass(): typeof any;
        bind(): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setBlurMipmap(arg0: boolean, arg1: boolean): void;
        hashCode(): number;
        restoreLastBlurMipmap(): void;
        abstract load(arg0: Internal.ResourceManager_): void;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        setFilter(arg0: boolean, arg1: boolean): void;
        releaseId(): void;
        reset(arg0: Internal.TextureManager_, arg1: Internal.ResourceManager_, arg2: ResourceLocation_, arg3: Internal.Executor_): void;
        equals(arg0: any): boolean;
        getId(): number;
        get class(): typeof any
        get id(): number
        blur: boolean;
        static readonly NOT_ASSIGNED: (-1) & (number);
        id: number;
        mipmap: boolean;
    }
    type AbstractTexture_ = AbstractTexture;
    abstract class GrowingPlantHeadBlock extends Internal.GrowingPlantBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Direction_, arg2: Internal.VoxelShape_, arg3: boolean, arg4: number)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        canAttachTo(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        isMaxAge(arg0: Internal.BlockState_): boolean;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getGrowIntoState(arg0: Internal.BlockState_, arg1: Internal.RandomSource_): Internal.BlockState;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        "getStateForPlacement(net.minecraft.world.level.LevelAccessor)"(arg0: Internal.LevelAccessor_): Internal.BlockState;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        updateBodyAfterConvertedFromHead(arg0: Internal.BlockState_, arg1: Internal.BlockState_): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        abstract getBodyBlock(): Internal.Block;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getMaxAgeState(arg0: Internal.BlockState_): Internal.BlockState;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getStateForPlacement(arg0: Internal.LevelAccessor_): Internal.BlockState;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        abstract canGrowInto(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        getHeadBlock(): this;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        abstract getBlocksToGrowWhenBonemealed(arg0: Internal.RandomSource_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        "getStateForPlacement(net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        get bodyBlock(): Internal.Block
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        get headBlock(): Internal.GrowingPlantHeadBlock
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly MAX_AGE: (25) & (number);
    }
    type GrowingPlantHeadBlock_ = GrowingPlantHeadBlock;
    class ModifiableBiomeInfo$BiomeInfo$Builder {
        getClimateSettings(): Internal.ClimateSettingsBuilder;
        getClass(): typeof any;
        toString(): string;
        getMobSpawnSettings(): Internal.MobSpawnSettingsBuilder;
        notifyAll(): void;
        static copyOf(arg0: Internal.ModifiableBiomeInfo$BiomeInfo_): Internal.ModifiableBiomeInfo$BiomeInfo$Builder;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getGenerationSettings(): Internal.BiomeGenerationSettingsBuilder;
        equals(arg0: any): boolean;
        getSpecialEffects(): Internal.BiomeSpecialEffectsBuilder;
        build(): Internal.ModifiableBiomeInfo$BiomeInfo;
        get climateSettings(): Internal.ClimateSettingsBuilder
        get class(): typeof any
        get mobSpawnSettings(): Internal.MobSpawnSettingsBuilder
        get generationSettings(): Internal.BiomeGenerationSettingsBuilder
        get specialEffects(): Internal.BiomeSpecialEffectsBuilder
    }
    type ModifiableBiomeInfo$BiomeInfo$Builder_ = ModifiableBiomeInfo$BiomeInfo$Builder;
    class RealmsNotification {
        getClass(): typeof any;
        dismissable(): boolean;
        toString(): string;
        notifyAll(): void;
        uuid(): Internal.UUID;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static parseList(arg0: string): Internal.List<Internal.RealmsNotification>;
        hashCode(): number;
        wait(): void;
        seen(): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type RealmsNotification_ = RealmsNotification;
    interface BucketPickup extends Internal.IForgeBucketPickup {
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        abstract pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        /**
         * @deprecated
        */
        abstract getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
    }
    type BucketPickup_ = BucketPickup;
    class EnumGetMethod extends Internal.Enum<Internal.EnumGetMethod> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.EnumGetMethod>>;
        "compareTo(com.electronwill.nightconfig.core.EnumGetMethod)"(arg0: Internal.EnumGetMethod_): number;
        toString(): string;
        isCaseSensitive(): boolean;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.EnumGetMethod;
        validate<T extends Internal.Enum<T>>(arg0: any, arg1: T): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get<T extends Internal.Enum<T>>(arg0: any, arg1: T): T;
        compareTo(arg0: any): number;
        name(): string;
        static values(): Internal.EnumGetMethod[];
        hashCode(): number;
        compareTo(arg0: Internal.EnumGetMethod_): number;
        ordinal(): number;
        wait(): void;
        isOrdinalOk(): boolean;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.EnumGetMethod;
        get class(): typeof any
        get caseSensitive(): boolean
        get ordinalOk(): boolean
        get declaringClass(): typeof Internal.EnumGetMethod
        static readonly ORDINAL_OR_NAME: (Internal.EnumGetMethod) & (Internal.EnumGetMethod);
        static readonly NAME: (Internal.EnumGetMethod) & (Internal.EnumGetMethod);
        static readonly NAME_IGNORECASE: (Internal.EnumGetMethod) & (Internal.EnumGetMethod);
        static readonly ORDINAL_OR_NAME_IGNORECASE: (Internal.EnumGetMethod) & (Internal.EnumGetMethod);
    }
    type EnumGetMethod_ = "name" | "ordinal_or_name" | EnumGetMethod | "ordinal_or_name_ignorecase" | "name_ignorecase";
    class FluidFillLevelDisplaySource extends Internal.PercentOrProgressBarDisplaySource {
        constructor()
        getClass(): typeof any;
        getName(): Internal.Component;
        initConfigurationWidgets(context: Internal.DisplayLinkContext_, builder: Internal.ModularGuiLineBuilder_, isFirstLine: boolean): void;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_): void;
        toString(): string;
        loadFlapDisplayLayout(arg0: Internal.DisplayLinkContext_, arg1: Internal.FlapDisplayBlockEntity_, arg2: Internal.FlapDisplayLayout_, arg3: number): void;
        shouldPassiveReset(): boolean;
        notifyAll(): void;
        transferData(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTarget_, arg2: number): void;
        provideFlapDisplayText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.List<Internal.MutableComponent>>;
        static getAll(arg0: Internal.LevelAccessor_, arg1: BlockPos_): Internal.List<Internal.DisplaySource>;
        populateData(arg0: Internal.DisplayLinkContext_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        onSignalReset(arg0: Internal.DisplayLinkContext_): void;
        static displaySource<B extends Internal.Block, P>(arg0: Internal.RegistryEntry_<Internal.DisplaySource>): Internal.NonNullUnaryOperator<com.tterrag.registrate.builders.BlockBuilder<B, P>>;
        hashCode(): number;
        wait(): void;
        static get(arg0: ResourceLocation_): Internal.DisplaySource;
        provideText(arg0: Internal.DisplayLinkContext_, arg1: Internal.DisplayTargetStats_): Internal.List<Internal.MutableComponent>;
        wait(arg0: number): void;
        getPassiveRefreshTicks(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get name(): Internal.Component
        get passiveRefreshTicks(): number
    }
    type FluidFillLevelDisplaySource_ = FluidFillLevelDisplaySource;
    class GirderEncasedShaftBlock extends Internal.HorizontalAxisKineticBlock implements Internal.IBE<Internal.KineticBlockEntity>, Internal.IWrenchable, Internal.SimpleWaterloggedBlock, Internal.SpecialBlockItemRequirement {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.KineticBlockEntity;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRotationAxis(arg0: Internal.BlockState_): Internal.Direction$Axis;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getBlockEntityClass(): typeof Internal.KineticBlockEntity;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        static getPreferredHorizontalAxis(arg0: Internal.BlockPlaceContext_): Internal.Direction$Axis;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getParticleInitialRadius(): number;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.KineticBlockEntity>): void;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.KineticBlockEntity>;
        setNameKey(arg0: string): void;
        hideStressImpact(): boolean;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRequiredItems(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.ItemRequirement;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getParticleTargetRadius(): number;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.KineticBlockEntity>;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.KineticBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        showCapacityWithAnnotation(): boolean;
        static stateById(arg0: number): Internal.BlockState;
        hasShaftTowards(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        get blockEntityClass(): typeof Internal.KineticBlockEntity
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get particleInitialRadius(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        get blockEntityType(): Internal.BlockEntityType<Internal.KineticBlockEntity>
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        get particleTargetRadius(): number
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly TOP: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly BOTTOM: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type GirderEncasedShaftBlock_ = GirderEncasedShaftBlock;
    interface IEventBus {
        abstract unregister(arg0: any): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.EventPriority_, arg1: boolean, arg2: Internal.Consumer_<T>): void;
        abstract post(arg0: Internal.Event_): boolean;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: Internal.Consumer_<T>): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.Consumer_<T>): void;
        abstract post(arg0: Internal.Event_, arg1: Internal.IEventBusInvokeDispatcher_): boolean;
        abstract register(arg0: any): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: boolean, arg3: Internal.Consumer_<T>): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: boolean, arg3: T, arg4: Internal.Consumer_<T>): void;
        abstract shutdown(): void;
        abstract start(): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.EventPriority_, arg1: Internal.Consumer_<T>): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.EventPriority_, arg1: boolean, arg2: T, arg3: Internal.Consumer_<T>): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.Consumer_<T>): void;
    }
    type IEventBus_ = IEventBus;
    interface BufferBuilderAccessor {
        abstract catnip$getVertices(): number;
        (): number;
    }
    type BufferBuilderAccessor_ = BufferBuilderAccessor | (()=> number);
    class FrameBlock extends Internal.MimicBlock implements Internal.EntityBlock, Internal.IFrameBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getLightBlock(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(state: Internal.BlockState_, builder: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(state: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, trace: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getShadeBrightness(state: Internal.BlockState_, reader: Internal.BlockGetter_, pos: BlockPos_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        registerFilledBlock(inserted: Internal.Block_, filled: Internal.Block_): void;
        getCollisionShape(state: Internal.BlockState_, reader: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        getDestroyProgress(state: Internal.BlockState_, player: Internal.Player_, worldIn: Internal.BlockGetter_, pos: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(stateIn: Internal.BlockState_, facing: Internal.Direction_, facingState: Internal.BlockState_, worldIn: Internal.LevelAccessor_, currentPos: BlockPos_, facingPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, explosion: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(state: Internal.BlockState_, worldIn: Internal.BlockGetter_, pos: BlockPos_, type: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getOcclusionShape(state: Internal.BlockState_, reader: Internal.BlockGetter_, pos: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        skipRendering(state: Internal.BlockState_, adjacentBlockState: Internal.BlockState_, side: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(state: Internal.BlockState_, world: Internal.LevelReader_, pos: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(state: Internal.BlockState_, reader: Internal.BlockGetter_, pos: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(state: Internal.BlockState_): boolean;
        getSoundType(state: Internal.BlockState_, world: Internal.LevelReader_, pos: BlockPos_, entity: Internal.Entity_): SoundType;
        getAnalogOutputSignal(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(level: Internal.BlockGetter_, pos: BlockPos_, state: Internal.BlockState_): Internal.ItemStack;
        getFilledBlock(inserted: Internal.Block_): Internal.Block;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, collisionContext: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly OCCLUSION_SHAPE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly FRAMED_BLOCKS: ([Internal.FrameBlock, Internal.FrameBraceBlock, Internal.FrameBlock]) & (Internal.List<Internal.Block>);
        static readonly HAS_BLOCK: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly LIGHT_LEVEL: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type FrameBlock_ = FrameBlock;
}
