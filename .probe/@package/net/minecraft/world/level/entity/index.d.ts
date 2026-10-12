import { $Writer } from "@package/java/io";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $LongSet, $Long2ObjectFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $UUID_, $List_ } from "@package/java/util";
import { $AbortableIterationConsumer$Continuation, $AbortableIterationConsumer_ } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $FullChunkStatus_, $FullChunkStatus } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream, $LongStream } from "@package/java/util/stream";
import { $PersistentEntitySectionManagerAccessor } from "@package/me/corvino/aeronauticsdiscovery/mixin/accessor";
import { $Enum, $Object, $Iterable, $AutoCloseable, $Class } from "@package/java/lang";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/entity" {
    export class $EntityTickList {
        remove(entity: $Entity): void;
        add(entity: $Entity): void;
        contains(entity: $Entity): boolean;
        forEach(entity: $Consumer_<$Entity>): void;
        constructor();
    }
    export class $Visibility extends $Enum<$Visibility> {
        static values(): $Visibility[];
        static valueOf(arg0: string): $Visibility;
        isAccessible(): boolean;
        isTicking(): boolean;
        static fromFullChunkStatus(fullChunkStatus: $FullChunkStatus_): $Visibility;
        static TICKING: $Visibility;
        static TRACKED: $Visibility;
        static HIDDEN: $Visibility;
        get accessible(): boolean;
        get ticking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Visibility}.
     */
    export type $Visibility_ = "hidden" | "tracked" | "ticking";
    export class $EntityPersistentStorage<T> {
    }
    export interface $EntityPersistentStorage<T> extends $AutoCloseable {
        flush(synchronize: boolean): void;
        close(): void;
        loadEntities(pos: $ChunkPos): $CompletableFuture<$ChunkEntities<T>>;
        storeEntities(entities: $ChunkEntities<T>): void;
    }
    export class $ChunkStatusUpdateListener {
    }
    export interface $ChunkStatusUpdateListener {
        onChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusUpdateListener}.
     */
    export type $ChunkStatusUpdateListener_ = ((arg0: $ChunkPos, arg1: $FullChunkStatus) => void);
    export class $EntitySection<T extends $EntityAccess> {
        remove(entity: T): boolean;
        size(): number;
        isEmpty(): boolean;
        add(entity: T): void;
        getEntities(bounds: $AABB_, consumer: $AbortableIterationConsumer_<T>): $AbortableIterationConsumer$Continuation;
        getEntities(): $Stream<T>;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): $AbortableIterationConsumer$Continuation;
        getStatus(): $Visibility;
        updateChunkStatus(chunkStatus: $Visibility_): $Visibility;
        constructor(entityClazz: $Class<T>, chunkStatus: $Visibility_);
        get empty(): boolean;
        get status(): $Visibility;
    }
    export class $PersistentEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $EntityTypeTest<B, T extends B> {
        static forClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
        static forExactClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
    }
    export interface $EntityTypeTest<B, T extends B> {
        getBaseClass(): $Class<B>;
        tryCast(entity: B): T;
        get baseClass(): $Class<B>;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        getId(): number;
        shouldBeSaved(): boolean;
        isAlwaysTicking(): boolean;
        setLevelCallback(levelCallback: $EntityInLevelCallback): void;
        blockPosition(): $BlockPos;
        getSelfAndPassengers(): $Stream<$EntityAccess>;
        getPassengersAndSelf(): $Stream<$EntityAccess>;
        setRemoved(removalReason: $Entity$RemovalReason_): void;
        getUUID(): $UUID;
        getBoundingBox(): $AABB;
        get id(): number;
        get alwaysTicking(): boolean;
        set levelCallback(value: $EntityInLevelCallback);
        get selfAndPassengers(): $Stream<$EntityAccess>;
        get passengersAndSelf(): $Stream<$EntityAccess>;
        set removed(value: $Entity$RemovalReason_);
        get UUID(): $UUID;
        get boundingBox(): $AABB;
    }
    export class $EntityLookup<T extends $EntityAccess> {
        remove(entity: T): void;
        add(entity: T): void;
        count(): number;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        getEntity(uuid: $UUID_): T;
        getEntity(id: number): T;
        getAllEntities(): $Iterable<T>;
        constructor();
        get allEntities(): $Iterable<T>;
    }
    export class $LevelEntityGetter<T extends $EntityAccess> {
    }
    export interface $LevelEntityGetter<T extends $EntityAccess> {
        get<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        get(boundingBox: $AABB_, consumer: $Consumer_<T>): void;
        get<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        get(uuid: $UUID_): T;
        get(id: number): T;
        getAll(): $Iterable<T>;
        get all(): $Iterable<T>;
    }
    export class $LevelCallback<T> {
    }
    export interface $LevelCallback<T> {
        onSectionChange(entity: T): void;
        onTrackingStart(entity: T): void;
        onTrackingEnd(entity: T): void;
        onTickingEnd(entity: T): void;
        onTickingStart(entity: T): void;
        onDestroyed(entity: T): void;
        onCreated(entity: T): void;
    }
    export class $PersistentEntitySectionManager<T extends $EntityAccess> implements $AutoCloseable, $PersistentEntitySectionManagerAccessor<any> {
        count(): number;
        close(): void;
        isLoaded(uuid: $UUID_): boolean;
        tick(): void;
        autoSave(): void;
        saveAll(): void;
        updateChunkStatus(pos: $ChunkPos, visibility: $Visibility_): void;
        updateChunkStatus(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        addNewEntity(entity: $Object): boolean;
        canPositionTick(pos: $BlockPos_): boolean;
        canPositionTick(chunkPos: $ChunkPos): boolean;
        getEntityGetter(): $LevelEntityGetter<$Object>;
        areEntitiesLoaded(chunkPos: number): boolean;
        dumpSections(writer: $Writer): void;
        addLegacyChunkEntities(entities: $Stream<$Object>): void;
        addWorldGenChunkEntities(entities: $Stream<$Object>): void;
        addNewEntityWithoutEvent(entity: $Object): boolean;
        gatherStats(): string;
        getSectionStorage(): $EntitySectionStorage<$Object>;
        sectionStorage: $EntitySectionStorage<$Object>;
        constructor(entityClass: $Class<$Object>, callbacks: $LevelCallback<$Object>, permanentStorage: $EntityPersistentStorage<$Object>);
        get entityGetter(): $LevelEntityGetter<$Object>;
    }
    export class $EntityInLevelCallback {
        static NULL: $EntityInLevelCallback;
    }
    export interface $EntityInLevelCallback {
        onRemove(reason: $Entity$RemovalReason_): void;
        onMove(): void;
    }
    export class $PersistentEntitySectionManager$ChunkLoadStatus extends $Enum<$PersistentEntitySectionManager$ChunkLoadStatus> {
    }
    /**
     * Values that may be interpreted as {@link $PersistentEntitySectionManager$ChunkLoadStatus}.
     */
    export type $PersistentEntitySectionManager$ChunkLoadStatus_ = "fresh" | "pending" | "loaded";
    export class $EntitySectionStorage<T extends $EntityAccess> {
        remove(sectionId: number): void;
        count(): number;
        getAllChunksWithExistingSections(): $LongSet;
        getEntities(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<T>): void;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        getSection(sectionPos: number): $EntitySection<T>;
        getExistingSectionsInChunk(pos: number): $Stream<$EntitySection<T>>;
        getOrCreateSection(sectionPos: number): $EntitySection<T>;
        forEachAccessibleNonEmptySection(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<$EntitySection<T>>): void;
        getExistingSectionPositionsInChunk(pos: number): $LongStream;
        constructor(entityClass: $Class<T>, initialSectionVisibility: $Long2ObjectFunction_<$Visibility>);
        get allChunksWithExistingSections(): $LongSet;
    }
    export class $TransientEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $TransientEntitySectionManager<T extends $EntityAccess> {
        count(): number;
        addEntity(entity: T): void;
        getEntityGetter(): $LevelEntityGetter<T>;
        stopTicking(pos: $ChunkPos): void;
        startTicking(pos: $ChunkPos): void;
        gatherStats(): string;
        constructor(clazz: $Class<T>, callbacks: $LevelCallback<T>);
        get entityGetter(): $LevelEntityGetter<T>;
    }
    export class $LevelEntityGetterAdapter<T extends $EntityAccess> implements $LevelEntityGetter<T> {
        get<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        get(boundingBox: $AABB_, consumer: $Consumer_<T>): void;
        get(uuid: $UUID_): T;
        get(id: number): T;
        getAll(): $Iterable<T>;
        constructor(visibleEntities: $EntityLookup<T>, sectionStorage: $EntitySectionStorage<T>);
        get all(): $Iterable<T>;
    }
    export class $ChunkEntities<T> {
        isEmpty(): boolean;
        getEntities(): $Stream<T>;
        getPos(): $ChunkPos;
        constructor(pos: $ChunkPos, entities: $List_<T>);
        get empty(): boolean;
        get entities(): $Stream<T>;
        get pos(): $ChunkPos;
    }
}
