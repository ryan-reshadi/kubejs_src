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
        static fromFullChunkStatus(fullChunkStatus: $FullChunkStatus_): $Visibility;
        isTicking(): boolean;
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
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): $AbortableIterationConsumer$Continuation;
        getEntities(): $Stream<T>;
        getEntities(bounds: $AABB_, consumer: $AbortableIterationConsumer_<T>): $AbortableIterationConsumer$Continuation;
        getStatus(): $Visibility;
        remove(entity: T): boolean;
        size(): number;
        isEmpty(): boolean;
        add(entity: T): void;
        updateChunkStatus(chunkStatus: $Visibility_): $Visibility;
        constructor(entityClazz: $Class<T>, chunkStatus: $Visibility_);
        get status(): $Visibility;
        get empty(): boolean;
    }
    export class $PersistentEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $EntityTypeTest<B, T extends B> {
        static forClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
        static forExactClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
    }
    export interface $EntityTypeTest<B, T extends B> {
        tryCast(entity: B): T;
        getBaseClass(): $Class<B>;
        get baseClass(): $Class<B>;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        getUUID(): $UUID;
        getId(): number;
        blockPosition(): $BlockPos;
        getBoundingBox(): $AABB;
        setRemoved(removalReason: $Entity$RemovalReason_): void;
        getSelfAndPassengers(): $Stream<$EntityAccess>;
        getPassengersAndSelf(): $Stream<$EntityAccess>;
        setLevelCallback(levelCallback: $EntityInLevelCallback): void;
        shouldBeSaved(): boolean;
        isAlwaysTicking(): boolean;
        get UUID(): $UUID;
        get id(): number;
        get boundingBox(): $AABB;
        set removed(value: $Entity$RemovalReason_);
        get selfAndPassengers(): $Stream<$EntityAccess>;
        get passengersAndSelf(): $Stream<$EntityAccess>;
        set levelCallback(value: $EntityInLevelCallback);
        get alwaysTicking(): boolean;
    }
    export class $EntityLookup<T extends $EntityAccess> {
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        getEntity(uuid: $UUID_): T;
        getEntity(id: number): T;
        remove(entity: T): void;
        add(entity: T): void;
        count(): number;
        getAllEntities(): $Iterable<T>;
        constructor();
        get allEntities(): $Iterable<T>;
    }
    export class $LevelEntityGetter<T extends $EntityAccess> {
    }
    export interface $LevelEntityGetter<T extends $EntityAccess> {
        getAll(): $Iterable<T>;
        get<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        get(boundingBox: $AABB_, consumer: $Consumer_<T>): void;
        get(uuid: $UUID_): T;
        get(id: number): T;
        get all(): $Iterable<T>;
    }
    export class $LevelCallback<T> {
    }
    export interface $LevelCallback<T> {
        onDestroyed(entity: T): void;
        onTickingStart(entity: T): void;
        onTickingEnd(entity: T): void;
        onTrackingStart(entity: T): void;
        onTrackingEnd(entity: T): void;
        onSectionChange(entity: T): void;
        onCreated(entity: T): void;
    }
    export class $PersistentEntitySectionManager<T extends $EntityAccess> implements $AutoCloseable, $PersistentEntitySectionManagerAccessor<any> {
        tick(): void;
        isLoaded(uuid: $UUID_): boolean;
        count(): number;
        close(): void;
        gatherStats(): string;
        updateChunkStatus(pos: $ChunkPos, visibility: $Visibility_): void;
        updateChunkStatus(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        saveAll(): void;
        autoSave(): void;
        addNewEntityWithoutEvent(entity: $Object): boolean;
        addNewEntity(entity: $Object): boolean;
        dumpSections(writer: $Writer): void;
        getEntityGetter(): $LevelEntityGetter<$Object>;
        addLegacyChunkEntities(entities: $Stream<$Object>): void;
        addWorldGenChunkEntities(entities: $Stream<$Object>): void;
        areEntitiesLoaded(chunkPos: number): boolean;
        canPositionTick(pos: $BlockPos_): boolean;
        canPositionTick(chunkPos: $ChunkPos): boolean;
        getSectionStorage(): $EntitySectionStorage<$Object>;
        sectionStorage: $EntitySectionStorage<$Object>;
        constructor(entityClass: $Class<$Object>, callbacks: $LevelCallback<$Object>, permanentStorage: $EntityPersistentStorage<$Object>);
        get entityGetter(): $LevelEntityGetter<$Object>;
    }
    export class $EntityInLevelCallback {
        static NULL: $EntityInLevelCallback;
    }
    export interface $EntityInLevelCallback {
        onMove(): void;
        onRemove(reason: $Entity$RemovalReason_): void;
    }
    export class $PersistentEntitySectionManager$ChunkLoadStatus extends $Enum<$PersistentEntitySectionManager$ChunkLoadStatus> {
    }
    /**
     * Values that may be interpreted as {@link $PersistentEntitySectionManager$ChunkLoadStatus}.
     */
    export type $PersistentEntitySectionManager$ChunkLoadStatus_ = "fresh" | "pending" | "loaded";
    export class $EntitySectionStorage<T extends $EntityAccess> {
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        getEntities(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<T>): void;
        remove(sectionId: number): void;
        count(): number;
        getSection(sectionPos: number): $EntitySection<T>;
        forEachAccessibleNonEmptySection(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<$EntitySection<T>>): void;
        getExistingSectionsInChunk(pos: number): $Stream<$EntitySection<T>>;
        getExistingSectionPositionsInChunk(pos: number): $LongStream;
        getOrCreateSection(sectionPos: number): $EntitySection<T>;
        getAllChunksWithExistingSections(): $LongSet;
        constructor(entityClass: $Class<T>, initialSectionVisibility: $Long2ObjectFunction_<$Visibility>);
        get allChunksWithExistingSections(): $LongSet;
    }
    export class $TransientEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $TransientEntitySectionManager<T extends $EntityAccess> {
        count(): number;
        gatherStats(): string;
        addEntity(entity: T): void;
        getEntityGetter(): $LevelEntityGetter<T>;
        stopTicking(pos: $ChunkPos): void;
        startTicking(pos: $ChunkPos): void;
        constructor(clazz: $Class<T>, callbacks: $LevelCallback<T>);
        get entityGetter(): $LevelEntityGetter<T>;
    }
    export class $LevelEntityGetterAdapter<T extends $EntityAccess> implements $LevelEntityGetter<T> {
        getAll(): $Iterable<T>;
        get<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        get(boundingBox: $AABB_, consumer: $Consumer_<T>): void;
        get<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        get(id: number): T;
        get(uuid: $UUID_): T;
        constructor(visibleEntities: $EntityLookup<T>, sectionStorage: $EntitySectionStorage<T>);
        get all(): $Iterable<T>;
    }
    export class $ChunkEntities<T> {
        getEntities(): $Stream<T>;
        isEmpty(): boolean;
        getPos(): $ChunkPos;
        constructor(pos: $ChunkPos, entities: $List_<T>);
        get entities(): $Stream<T>;
        get empty(): boolean;
        get pos(): $ChunkPos;
    }
}
