import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ChunkGeneratorAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Set_, $Map, $Map$Entry, $Set, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine, $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $WeakReference } from "@package/java/lang/ref";
import { $BitStorage, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $AttachmentType, $IAttachmentHolder, $AttachmentType_, $AttachmentHolder$AsField } from "@package/net/neoforged/neoforge/attachment";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $Function_, $BiPredicate_, $BooleanSupplier_ } from "@package/java/util/function";
import { $WorldGenRegion, $FullChunkStatus, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $SectionPos, $IdMap, $Direction, $HolderLookup } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ExtendedPalettedContainer } from "@package/org/embeddedt/modernfix/chunk";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $StructureSet_, $StructureSet, $StructureStart, $Structure_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_, $BelowZeroRetrogen, $RandomState, $GenerationStep$Carving_, $NoiseChunk, $Heightmap$Types, $Heightmap } from "@package/net/minecraft/world/level/levelgen";
import { $PalettedContainerROExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $StructurePlacement, $ConcentricRingsStructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $LevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $ClipContext, $NoiseColumn, $ClipBlockStateContext, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager, $Level_ } from "@package/net/minecraft/world/level";
import { $SerializableTickContainer_, $SerializableTickContainer, $TickContainerAccess, $ProtoChunkTicks, $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $DebugLevelChunkExtension } from "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Blender, $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $BiomeResolver_, $BiomeSource, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeManager$NoiseBiomeSource, $Climate$Sampler_, $Biome_, $BiomeGenerationSettings, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "@package/net/minecraft/network/protocol/game";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $IChunkGenerator } from "@package/org/embeddedt/modernfix/duck";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $LevelChunkAuxiliaryLightManager, $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as storage from "@package/net/minecraft/world/level/chunk/storage";
export * as status from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/world/level/chunk" {
    export class $PalettedContainer$Configuration<T> extends $Record {
        bits(): number;
        factory(): $Palette$Factory;
        createData(registry: $IdMap<T>, paletteResize: $PaletteResize_<T>, size: number): $PalettedContainer$Data<T>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Configuration}.
     */
    export type $PalettedContainer$Configuration_<T> = { bits?: number, factory?: $Palette$Factory_,  } | [bits?: number, factory?: $Palette$Factory_, ];
    /**
     * A representation of a 16x16x16 cube of nibbles (half-bytes).
     */
    export class $DataLayer {
        getData(): number[];
        /**
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         * @return The value of this data layer at the provided position.
         */
        get(x: number, y: number, z: number): number;
        isEmpty(): boolean;
        fill(size: number): void;
        /**
         * Sets the value of this data layer at the provided position.
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         */
        set(x: number, y: number, z: number, value: number): void;
        copy(): $DataLayer;
        layerToString(unused: number): string;
        isDefinitelyHomogenous(): boolean;
        isDefinitelyFilledWith(value: number): boolean;
        static LAYER_COUNT: number;
        static SIZE: number;
        static LAYER_SIZE: number;
        constructor();
        constructor(data: number[]);
        constructor(size: number);
        get data(): number[];
        get empty(): boolean;
        get definitelyHomogenous(): boolean;
    }
    export class $ChunkGenerator implements $ChunkGeneratorAccessor {
        getMinY(): number;
        validate(): void;
        createState(structureSetLookup: $HolderLookup<$StructureSet_>, randomState: $RandomState, seed: number): $ChunkGeneratorStructureState;
        getSeaLevel(): number;
        findNearestMapStructure(level: $ServerLevel, structure: $HolderSet_<$Structure>, pos: $BlockPos_, searchRadius: number, skipKnownStructures: boolean): $Pair<$BlockPos, $Holder<$Structure>>;
        getBaseColumn(x: number, z: number, height: $LevelHeightAccessor, random: $RandomState): $NoiseColumn;
        /**
         * @deprecated
         */
        getBiomeGenerationSettings(biome: $Holder_<$Biome>): $BiomeGenerationSettings;
        refreshFeaturesPerStep(): void;
        getTypeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        getNearestGeneratedStructure(structureHoldersSet: $Set_<$Holder_<$Structure>>, level: $ServerLevel, structureManager: $StructureManager, pos: $BlockPos_, skipKnownStructures: boolean, placement: $ConcentricRingsStructurePlacement): $Pair<$BlockPos, $Holder<$Structure>>;
        applyBiomeDecoration(level: $WorldGenLevel, chunk: $ChunkAccess, structureManager: $StructureManager): void;
        getSpawnHeight(level: $LevelHeightAccessor): number;
        getMobsAt(biome: $Holder_<$Biome>, structureManager: $StructureManager, category: $MobCategory_, pos: $BlockPos_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        createStructures(registryAccess: $RegistryAccess, structureState: $ChunkGeneratorStructureState, structureManager: $StructureManager, chunk: $ChunkAccess, structureTemplateManager: $StructureTemplateManager): void;
        createReferences(level: $WorldGenLevel, structureManager: $StructureManager, chunk: $ChunkAccess): void;
        getFirstFreeHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        getGenDepth(): number;
        getFirstOccupiedHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        createBiomes(randomState: $RandomState, blender: $Blender, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        addDebugScreenInfo(info: $List_<string>, random: $RandomState, pos: $BlockPos_): void;
        buildSurface(level: $WorldGenRegion, structureManager: $StructureManager, random: $RandomState, chunk: $ChunkAccess): void;
        applyCarvers(level: $WorldGenRegion, seed: number, arg2: $RandomState, random: $BiomeManager, biomeManager: $StructureManager, structureManager: $ChunkAccess, chunk: $GenerationStep$Carving_): void;
        fillFromNoise(blender: $Blender, randomState: $RandomState, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        spawnOriginalMobs(level: $WorldGenRegion): void;
        getBaseHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        getGetter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        getBiomeSource(): $BiomeSource;
        setBiomeSource(biomeSource: $BiomeSource): void;
        setFeaturesPerStep(arg0: $Supplier_<$List<$FeatureSorter$StepFeatureData>>): void;
        static CODEC: $Codec<$ChunkGenerator>;
        constructor(biomeSource: $BiomeSource);
        constructor(biomeSource: $BiomeSource, generationSettingsGetter: $Function_<$Holder<$Biome>, $BiomeGenerationSettings>);
        get minY(): number;
        get seaLevel(): number;
        get typeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        get genDepth(): number;
        get getter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        set featuresPerStep(value: $Supplier_<$List<$FeatureSorter$StepFeatureData>>);
    }
    export class $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
    }
    export interface $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
        read(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, packedData: $PalettedContainerRO$PackedData_<T>): $DataResult<C>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$Unpacker}.
     */
    export type $PalettedContainerRO$Unpacker_<T, C> = ((arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData<T>) => $DataResult<C>);
    export class $PaletteResize<T> {
    }
    export interface $PaletteResize<T> {
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
    }
    /**
     * Values that may be interpreted as {@link $PaletteResize}.
     */
    export type $PaletteResize_<T> = ((arg0: number, arg1: T) => number);
    export class $BlockColumn {
    }
    export interface $BlockColumn {
        getBlock(pos: number): $BlockState;
        setBlock(pos: number, state: $BlockState_): void;
    }
    export class $CarvingMask$Mask {
    }
    export interface $CarvingMask$Mask {
        test(x: number, y: number, z: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CarvingMask$Mask}.
     */
    export type $CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $Palette$Factory {
    }
    export interface $Palette$Factory {
        create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
    }
    /**
     * Values that may be interpreted as {@link $Palette$Factory}.
     */
    export type $Palette$Factory_ = ((arg0: number, arg1: $IdMap<any>, arg2: $PaletteResize<any>, arg3: $List<any>) => $Palette<any>);
    export class $LinearPalette<T> implements $Palette<T> {
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $ChunkGeneratorStructureState implements $IChunkGenerator {
        randomState(): $RandomState;
        mfix$setStrongholdCachePath(arg0: $Path_, arg1: $MinecraftServer): void;
        ensureStructuresGenerated(): void;
        static createForNormal(randomState: $RandomState, seed: number, arg2: $BiomeSource, biomeSource: $HolderLookup<$StructureSet_>): $ChunkGeneratorStructureState;
        getPlacementsForStructure(structure: $Holder_<$Structure>): $List<$StructurePlacement>;
        possibleStructureSets(): $List<$Holder<$StructureSet>>;
        getLevelSeed(): number;
        hasStructureChunkInRange(structureSet: $Holder_<$StructureSet>, x: number, z: number, range: number): boolean;
        getRingPositionsFor(placement: $ConcentricRingsStructurePlacement): $List<$ChunkPos>;
        static createForFlat(randomState: $RandomState, levelSeed: number, arg2: $BiomeSource, biomeSource: $Stream<$Holder_<$StructureSet>>): $ChunkGeneratorStructureState;
        get levelSeed(): number;
    }
    export class $StructureAccess {
    }
    export interface $StructureAccess {
        getStartForStructure(structure: $Structure_): $StructureStart;
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
        getAllReferences(): $Map<$Structure, $LongSet>;
    }
    export class $PalettedContainerRO$PackedData<T> extends $Record {
        storage(): ($LongStream) | undefined;
        paletteEntries(): $List<T>;
        constructor(arg0: $List_<T>, arg1: ($LongStream) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$PackedData}.
     */
    export type $PalettedContainerRO$PackedData_<T> = { paletteEntries?: $List_<any>, storage?: ($LongStream) | undefined,  } | [paletteEntries?: $List_<any>, storage?: ($LongStream) | undefined, ];
    /**
     * During world generation, adjacent chunks may be fully generated (and thus be level chunks), but are often needed in proto chunk form. This wraps a completely generated chunk as a proto chunk.
     */
    export class $ImposterProtoChunk extends $ProtoChunk {
        getWrapped(): $LevelChunk;
        static NO_FILLED_SECTION: number;
        constructor(wrapped: $LevelChunk, allowWrites: boolean);
        get wrapped(): $LevelChunk;
    }
    export class $PalettedContainer$Strategy {
        getIndex(x: number, y: number, z: number): number;
        getConfiguration<A>(registry: $IdMap<A>, size: number): $PalettedContainer$Configuration<A>;
        size(): number;
        static SECTION_STATES: $PalettedContainer$Strategy;
        static SINGLE_VALUE_PALETTE_FACTORY: $Palette$Factory;
        static LINEAR_PALETTE_FACTORY: $Palette$Factory;
        static SECTION_BIOMES: $PalettedContainer$Strategy;
        static HASHMAP_PALETTE_FACTORY: $Palette$Factory;
    }
    export class $LevelChunkSection$1BlockCounter implements $PalettedContainer$CountConsumer<$BlockState> {
    }
    export class $ChunkAccess$TicksToSave extends $Record {
        blocks(): $SerializableTickContainer<$Block>;
        fluids(): $SerializableTickContainer<$Fluid>;
        constructor(blocks: $SerializableTickContainer_<$Block>, fluids: $SerializableTickContainer_<$Fluid>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccess$TicksToSave}.
     */
    export type $ChunkAccess$TicksToSave_ = { fluids?: $SerializableTickContainer_<$Fluid>, blocks?: $SerializableTickContainer_<$Block>,  } | [fluids?: $SerializableTickContainer_<$Fluid>, blocks?: $SerializableTickContainer_<$Block>, ];
    export class $LevelChunk$BoundTickingBlockEntity<T extends $BlockEntity> implements $TickingBlockEntity {
    }
    export class $LightChunk {
    }
    export interface $LightChunk extends $BlockGetter {
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        get skyLightSources(): $ChunkSkyLightSources;
    }
    export class $ChunkAccess implements $BlockGetter, $BiomeManager$NoiseBiomeSource, $LightChunk, $StructureAccess, $IAttachmentHolder, $Trackable {
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData(type: $AttachmentType_<never>): boolean;
        getData<T>(arg0: $AttachmentType_<T>): T;
        getSections(): $LevelChunkSection[];
        getLevel(): $Level;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        getHeight(type: $Heightmap$Types_, x: number, z: number): number;
        getHeight(): number;
        getMinBuildHeight(): number;
        markPosForPostprocessing(pos: $BlockPos_): void;
        atl$getBaseClass(): $Class<any>;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasAttachments(): boolean;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        removeBlockEntity(pos: $BlockPos_): void;
        getPos(): $ChunkPos;
        getBlockTicks(): $TickContainerAccess<$Block>;
        getFluidTicks(): $TickContainerAccess<$Fluid>;
        setBlockState(pos: $BlockPos_, state: $BlockState_, isMoving: boolean): $BlockState;
        setBlockEntity(blockEntity: $BlockEntity): void;
        setUnsaved(lightCorrect: boolean): void;
        getInhabitedTime(): number;
        getHighestFilledSectionIndex(): number;
        /**
         * @deprecated
         */
        getHighestSectionPosition(): number;
        addEntity(entity: $Entity): void;
        getAllStarts(): $Map<$Structure, $StructureStart>;
        getSection(index: number): $LevelChunkSection;
        fillBiomesFromNoise(resolver: $BiomeResolver_, sampler: $Climate$Sampler_): void;
        getHeightAccessorForGeneration(): $LevelHeightAccessor;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isLightCorrect(): boolean;
        getListenerRegistry(sectionY: number): $GameEventListenerRegistry;
        getBlockEntitiesPos(): $Set<$BlockPos>;
        getHeightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        setHeightmap(type: $Heightmap$Types_, data: number[]): void;
        getOrCreateHeightmapUnprimed(type: $Heightmap$Types_): $Heightmap;
        hasPrimedHeightmap(type: $Heightmap$Types_): boolean;
        getStartForStructure(structure: $Structure_): $StructureStart;
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        setAllStarts(structureReferencesMap: $Map_<$Structure_, $StructureStart>): void;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
        isYSpaceEmpty(startY: number, endY: number): boolean;
        isSectionEmpty(y: number): boolean;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isUnsaved(): boolean;
        getPersistedStatus(): $ChunkStatus;
        getHighestGeneratedStatus(): $ChunkStatus;
        getBelowZeroRetrogen(): $BelowZeroRetrogen;
        getPostProcessing(): $ShortList[];
        addPackedPostProcess(packedPosition: number, index: number): void;
        static getOrCreateOffsetList(packedPositions: $ShortList[], index: number): $ShortList;
        setBlockEntityNbt(tag: $CompoundTag_): void;
        getBlockEntityNbt(pos: $BlockPos_): $CompoundTag;
        getBlockEntityNbtForSaving(pos: $BlockPos_, registries: $HolderLookup$Provider): $CompoundTag;
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        /**
         * @deprecated
         */
        findBlocks(arg0: $BiPredicate_<$BlockState, $BlockPos>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(predicate: $Predicate_<$BlockState>, output: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$BlockState, $BlockPos>, arg2: $BiConsumer_<$BlockPos, $BlockState>): void;
        getTicksForSerialization(): $ChunkAccess$TicksToSave;
        getUpgradeData(): $UpgradeData;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isOldNoiseGeneration(): boolean;
        getBlendingData(): $BlendingData;
        setBlendingData(blendingData: $BlendingData): void;
        incrementInhabitedTime(amount: number): void;
        setInhabitedTime(amount: number): void;
        setLightCorrect(lightCorrect: boolean): void;
        getOrCreateNoiseChunk(noiseChunkCreator: $Function_<$ChunkAccess, $NoiseChunk>): $NoiseChunk;
        /**
         * @deprecated
         */
        carverBiome(caverBiomeSettingsSupplier: $Supplier_<$BiomeGenerationSettings>): $BiomeGenerationSettings;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasAnyStructureReferences(): boolean;
        getAllReferences(): $Map<any, any>;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isUpgrading(): boolean;
        initializeLightSources(): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        getAttachmentHolder(): $AttachmentHolder$AsField;
        writeAttachmentsToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        readAttachmentsFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        clip(failContext: $ClipContext): $BlockHitResult;
        getLightEmission(pos: $BlockPos_): number;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getMaxLightLevel(): number;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData<T>(type: $Supplier_<$AttachmentType<T>>): boolean;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $Supplier_<$AttachmentType<never>>): void;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $AttachmentType_<never>): void;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $AttachmentType_<T>): (T) | undefined;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        wrap(): $WeakReference<$Trackable>;
        startTracking(): void;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        getSectionIndex(sectionIndex: number): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, inhabitedTime: number, arg5: $LevelChunkSection[] | null, sections: $BlendingData | null);
        get sections(): $LevelChunkSection[];
        get level(): $Level;
        get minBuildHeight(): number;
        get pos(): $ChunkPos;
        get blockTicks(): $TickContainerAccess<$Block>;
        get fluidTicks(): $TickContainerAccess<$Fluid>;
        get highestFilledSectionIndex(): number;
        get highestSectionPosition(): number;
        get heightAccessorForGeneration(): $LevelHeightAccessor;
        get blockEntitiesPos(): $Set<$BlockPos>;
        get heightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        get persistedStatus(): $ChunkStatus;
        get highestGeneratedStatus(): $ChunkStatus;
        get belowZeroRetrogen(): $BelowZeroRetrogen;
        get postProcessing(): $ShortList[];
        get ticksForSerialization(): $ChunkAccess$TicksToSave;
        get upgradeData(): $UpgradeData;
        get oldNoiseGeneration(): boolean;
        get upgrading(): boolean;
        get skyLightSources(): $ChunkSkyLightSources;
        get attachmentHolder(): $AttachmentHolder$AsField;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $LevelChunk$RebindableTickingBlockEntityWrapper implements $TickingBlockEntity {
    }
    export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
        static values(): $LevelChunk$EntityCreationType[];
        static valueOf(arg0: string): $LevelChunk$EntityCreationType;
        static QUEUED: $LevelChunk$EntityCreationType;
        static CHECK: $LevelChunk$EntityCreationType;
        static IMMEDIATE: $LevelChunk$EntityCreationType;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$EntityCreationType}.
     */
    export type $LevelChunk$EntityCreationType_ = "immediate" | "queued" | "check";
    export class $PalettedContainer$Data<T> extends $Record {
        storage(): $BitStorage;
        copyFrom(palette: $Palette<T>, bitStorage: $BitStorage): void;
        write(buffer: $FriendlyByteBuf): void;
        configuration(): $PalettedContainer$Configuration<T>;
        copy(): $PalettedContainer$Data<T>;
        palette(): $Palette<T>;
        getSerializedSize(): number;
        get serializedSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Data}.
     */
    export type $PalettedContainer$Data_<T> = { palette?: $Palette<any>, configuration?: $PalettedContainer$Configuration_<any>, storage?: $BitStorage,  } | [palette?: $Palette<any>, configuration?: $PalettedContainer$Configuration_<any>, storage?: $BitStorage, ];
    export class $PalettedContainer<T> implements $PaletteResize<T>, $PalettedContainerRO<T>, $ExtendedPalettedContainer<any>, $PalettedContainerROExtension<any> {
        release(): void;
        acquire(): void;
        getAll(consumer: $Consumer_<T>): void;
        pack(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        getAndSet(x: number, y: number, z: number, state: T): T;
        get(x: number, y: number, z: number): T;
        /**
         * Counts the number of instances of each state in the container.
         * The provided consumer is invoked for each state with the number of instances.
         */
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        set(x: number, y: number, z: number, state: T): void;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $PalettedContainer<T>;
        sodium$copy(): $PalettedContainerRO<any>;
        maybeHas(predicate: $Predicate_<T>): boolean;
        mfix$getPalette(): $Palette<any>;
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
        static codecRO<T>(registry: $IdMap<T>, codec: $Codec<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainerRO<T>>;
        getAndSetUnchecked(x: number, y: number, z: number, state: T): T;
        recreate(): $PalettedContainer<T>;
        getSerializedSize(): number;
        static codecRW<T>(registry: $IdMap<T>, codec: $Codec<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainer<T>>;
        sodium$unpack(arg0: $Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$unpack(arg0: $Object[]): void;
        constructor(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, configuration: $PalettedContainer$Configuration_<T>, storage: $BitStorage, values: $List_<T>);
        constructor(registry: $IdMap<T>, palette: T, strategy: $PalettedContainer$Strategy);
        get serializedSize(): number;
    }
    export class $PalettedContainer$CountConsumer<T> {
    }
    export interface $PalettedContainer$CountConsumer<T> {
        accept(state: T, count: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$CountConsumer}.
     */
    export type $PalettedContainer$CountConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $UpgradeData {
        upgrade(chunk: $LevelChunk): void;
        isEmpty(): boolean;
        write(): $CompoundTag;
        static EMPTY: $UpgradeData;
        constructor(tag: $CompoundTag_, level: $LevelHeightAccessor);
        get empty(): boolean;
    }
    export class $PalettedContainerRO<T> {
    }
    export interface $PalettedContainerRO<T> {
        getAll(consumer: $Consumer_<T>): void;
        pack(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        get(x: number, y: number, z: number): T;
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        write(buffer: $FriendlyByteBuf): void;
        maybeHas(filter: $Predicate_<T>): boolean;
        recreate(): $PalettedContainer<T>;
        getSerializedSize(): number;
        get serializedSize(): number;
    }
    export class $LevelChunk$PostLoadProcessor {
    }
    export interface $LevelChunk$PostLoadProcessor {
        run(chunk: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$PostLoadProcessor}.
     */
    export type $LevelChunk$PostLoadProcessor_ = ((arg0: $LevelChunk) => void);
    export class $UpgradeData$BlockFixers extends $Enum<$UpgradeData$BlockFixers> implements $UpgradeData$BlockFixer {
        processChunk(level: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixers}.
     */
    export type $UpgradeData$BlockFixers_ = "blacklist" | "default" | "chest" | "leaves" | "stem_block";
    export class $SingleValuePalette<T> implements $Palette<T> {
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, value: $List_<A>): $Palette<A>;
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        constructor(registry: $IdMap<T>, resizeHandler: $PaletteResize_<T>, value: $List_<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $MissingPaletteEntryException extends $RuntimeException {
        constructor(index: number);
    }
    export class $LevelChunkSection {
        release(): void;
        acquire(): void;
        getFluidState(x: number, y: number, z: number): $FluidState;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        getStates(): $PalettedContainer<$BlockState>;
        getBlockState(x: number, y: number, z: number): $BlockState;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTicking(): boolean;
        setBlockState(x: number, y: number, z: number, state: $BlockState_): $BlockState;
        setBlockState(x: number, y: number, z: number, state: $BlockState_, useLocks: boolean): $BlockState;
        fillBiomesFromNoise(biomeResolver: $BiomeResolver_, climateSampler: $Climate$Sampler_, x: number, y: number, z: number): void;
        readBiomes(buffer: $FriendlyByteBuf): void;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        hasOnlyAir(): boolean;
        /**
         * @return `true` if this section has any states matching the given predicate. As the internal representation uses a `Palette`, this is more efficient than looping through every position in the section, or indeed the chunk.
         */
        maybeHas(predicate: $Predicate_<$BlockState>): boolean;
        getBiomes(): $PalettedContainerRO<$Holder<$Biome>>;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingBlocks(): boolean;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingFluids(): boolean;
        recalcBlockCounts(): void;
        getSerializedSize(): number;
        static SECTION_WIDTH: number;
        static SECTION_HEIGHT: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        constructor(states: $PalettedContainer<$BlockState_>, biomes: $PalettedContainerRO<$Holder_<$Biome>>);
        constructor(biomeRegistry: $Registry<$Biome_>);
        get states(): $PalettedContainer<$BlockState>;
        get randomlyTicking(): boolean;
        get biomes(): $PalettedContainerRO<$Holder<$Biome>>;
        get randomlyTickingBlocks(): boolean;
        get randomlyTickingFluids(): boolean;
        get serializedSize(): number;
    }
    export class $LevelChunk extends $ChunkAccess implements $IAttachmentHolder, $DebugLevelChunkExtension {
        getFluidState(x: number, y: number, z: number): $FluidState;
        getBlockEntity(pos: $BlockPos_, creationType: $LevelChunk$EntityCreationType_): $BlockEntity;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isEmpty(): boolean;
        getFullStatus(): $FullChunkStatus;
        addAndRegisterBlockEntity(blockEntity: $BlockEntity): void;
        redirect$ehm000$sable$getLightEngine(arg0: $ChunkSource): $LevelLightEngine;
        getAuxLightManager(arg0: $ChunkPos): $LevelChunkAuxiliaryLightManager;
        clearAllBlockEntities(): void;
        unregisterTickContainerFromLevel(level: $ServerLevel): void;
        unpackTicks(pos: number): void;
        runPostLoad(): void;
        replaceWithPacketData(buffer: $FriendlyByteBuf, tag: $CompoundTag_, outputTagConsumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        replaceBiomes(buffer: $FriendlyByteBuf): void;
        setLoaded(loaded: boolean): void;
        postProcessGeneration(): void;
        registerTickContainerInLevel(level: $ServerLevel): void;
        setFullStatus(fullStatus: $Supplier_<$FullChunkStatus>): void;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        sable$setUpdated(): void;
        sable$getLastUpdate(): number;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        xaero_wm_chunkClean: boolean;
        xaero_chunkClean: boolean;
        static NO_FILLED_SECTION: number;
        constructor(level: $Level_, pos: $ChunkPos);
        constructor(level: $Level_, pos: $ChunkPos, data: $UpgradeData, blockTicks: $LevelChunkTicks<$Block_>, fluidTicks: $LevelChunkTicks<$Fluid_>, inhabitedTime: number, arg6: $LevelChunkSection[] | null, sections: $LevelChunk$PostLoadProcessor_ | null, postLoad: $BlendingData | null);
        constructor(level: $ServerLevel, chunk: $ProtoChunk, postLoad: $LevelChunk$PostLoadProcessor_ | null);
        get empty(): boolean;
        set loaded(value: boolean);
        get blockEntities(): $Map<$BlockPos, $BlockEntity>;
    }
    export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
        tick(hasTimeLeft: $BooleanSupplier_, tickChunks: boolean): void;
        close(): void;
        getChunk(chunkX: number, chunkZ: number, load: boolean): $LevelChunk;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getChunkNow(chunkX: number, chunkZ: number): $LevelChunk;
        /**
         * @return `true` if a chunk is loaded at the provided position, without forcing a chunk load.
         */
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getLightEngine(): $LevelLightEngine;
        setSpawnSettings(hostile: boolean, peaceful: boolean): void;
        /**
         * @return A human-readable string representing data about this chunk source.
         */
        gatherStats(): string;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        updateChunkForced(pos: $ChunkPos, add: boolean): void;
        getLoadedChunksCount(): number;
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        constructor();
        get lightEngine(): $LevelLightEngine;
        get loadedChunksCount(): number;
    }
    export class $ProtoChunk extends $ChunkAccess {
        getEntities(): $List<$CompoundTag>;
        setPersistedStatus(status: $ChunkStatus_): void;
        setBelowZeroRetrogen(belowZeroRetrogen: $BelowZeroRetrogen | null): void;
        setCarvingMask(step: $GenerationStep$Carving_, carvingMask: $CarvingMask): void;
        setLightEngine(lightEngine: $LevelLightEngine): void;
        static packOffsetCoordinates(pos: $BlockPos_): number;
        addEntity(tag: $CompoundTag_): void;
        static unpackOffsetCoordinates(packedPos: number, yOffset: number, chunkPos: $ChunkPos): $BlockPos;
        unpackBlockTicks(): $LevelChunkTicks<$Block>;
        unpackFluidTicks(): $LevelChunkTicks<$Fluid>;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        getBlockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        getCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        getOrCreateCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, sections: $LevelChunkSection[] | null, blockTicks: $ProtoChunkTicks<$Block_>, liquidTicks: $ProtoChunkTicks<$Fluid_>, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        get entities(): $List<$CompoundTag>;
        set persistedStatus(value: $ChunkStatus_);
        set belowZeroRetrogen(value: $BelowZeroRetrogen | null);
        set lightEngine(value: $LevelLightEngine);
        get blockEntities(): $Map<$BlockPos, $BlockEntity>;
        get blockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
    }
    export class $HashMapPalette<T> implements $Palette<T> {
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        getSize(): number;
        getEntries(): $List<T>;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        values: $CrudeIncrementalIntIdentityHashBiMap<T>;
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>, values: $List_<T>);
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>);
        get size(): number;
        get entries(): $List<T>;
        get serializedSize(): number;
    }
    export class $UpgradeData$BlockFixer {
    }
    export interface $UpgradeData$BlockFixer {
        updateShape(state: $BlockState_, direction: $Direction_, offsetState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, offsetPos: $BlockPos_): $BlockState;
        processChunk(level: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixer}.
     */
    export type $UpgradeData$BlockFixer_ = ((arg0: $BlockState, arg1: $Direction, arg2: $BlockState, arg3: $LevelAccessor, arg4: $BlockPos, arg5: $BlockPos) => $BlockState_);
    export class $BulkSectionAccess implements $AutoCloseable {
        close(): void;
        getBlockState(pos: $BlockPos_): $BlockState;
        getSection(pos: $BlockPos_): $LevelChunkSection;
        constructor(level: $LevelAccessor);
    }
    export class $ChunkGenerators {
        static bootstrap(registry: $Registry<$MapCodec_<$ChunkGenerator>>): $MapCodec<$ChunkGenerator>;
        constructor();
    }
    export class $LightChunkGetter {
    }
    export interface $LightChunkGetter {
        getLevel(): $BlockGetter;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        get level(): $BlockGetter;
    }
    export class $GlobalPalette<T> implements $Palette<T> {
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        constructor(registry: $IdMap<T>);
        get size(): number;
        get serializedSize(): number;
    }
    export class $Palette<T> {
    }
    export interface $Palette<T> {
        getSize(): number;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        idFor(state: T): number;
        maybeHas(filter: $Predicate_<T>): boolean;
        valueFor(id: number): T;
        getSerializedSize(): number;
        get size(): number;
        get serializedSize(): number;
    }
    export class $EmptyLevelChunk extends $LevelChunk {
        xaero_wm_chunkClean: boolean;
        xaero_chunkClean: boolean;
        static NO_FILLED_SECTION: number;
        constructor(level: $Level_, pos: $ChunkPos, biome: $Holder_<$Biome>);
    }
    export class $CarvingMask {
        get(x: number, y: number, z: number): boolean;
        toArray(): number[];
        stream(pos: $ChunkPos): $Stream<$BlockPos>;
        set(x: number, y: number, z: number): void;
        setAdditionalMask(additionalMask: $CarvingMask$Mask_): void;
        constructor(mask: number, minY: number);
        constructor(mask: number[], minY: number);
        set additionalMask(value: $CarvingMask$Mask_);
    }
}
