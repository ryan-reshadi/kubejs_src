import { $LongConsumer_ } from "@package/java/util/function";
import { $LongSet, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Stream } from "@package/java/util/stream";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CellHasher } from "@package/dev/lambdaurora/lambdynlights/engine";
import { $ChunkRebuildStatus } from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
import { $SpatialLookupEntry } from "@package/dev/lambdaurora/lambdynlights/engine/lookup";

declare module "@package/dev/lambdaurora/lambdynlights/engine/source" {
    export class $EntityDynamicLightSource {
    }
    export interface $EntityDynamicLightSource extends $DynamicLightSource {
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        getDynamicLightY(): number;
        getDynamicLightX(): number;
        getDynamicLightZ(): number;
        resetDynamicLight(): void;
        isDynamicLightEnabled(): boolean;
        dynamicLightTick(): void;
        getLuminance(): number;
        get dynamicLightY(): number;
        get dynamicLightX(): number;
        get dynamicLightZ(): number;
        get dynamicLightEnabled(): boolean;
        get luminance(): number;
    }
    export class $EntityDynamicLightSourceBehavior {
        static tickEntity(entity: $Entity): void;
    }
    export interface $EntityDynamicLightSourceBehavior extends $EntityDynamicLightSource {
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        updateDynamicLightPreviousCoordinates(): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        lambdynlights$setTrackedLitChunkPos(arg0: $LongSet): void;
        setLuminance(arg0: number): void;
        getLastDynamicLuminance(): number;
        setDynamicLightEnabled(enabled: boolean): void;
        getDynamicLightPrevY(): number;
        getDynamicLightPrevZ(): number;
        setLastDynamicLuminance(arg0: number): void;
        getDynamicLightPrevX(): number;
        set luminance(value: number);
        set dynamicLightEnabled(value: boolean);
        get dynamicLightPrevY(): number;
        get dynamicLightPrevZ(): number;
        get dynamicLightPrevX(): number;
    }
    export class $DynamicLightSource {
        static gatherClosestChunks(x: number, y: number, z: number, chunkConsumer: $LongConsumer_): void;
    }
    export interface $DynamicLightSource {
        getDynamicLightChunksToRebuild(arg0: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        splitIntoDynamicLightEntries(arg0: $CellHasher): $Stream<$SpatialLookupEntry>;
        getDynamicLightId(): number;
        get dynamicLightId(): number;
    }
}
