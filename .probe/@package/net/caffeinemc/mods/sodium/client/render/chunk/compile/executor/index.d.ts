import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $BuilderTaskOutput, $ChunkBuildContext } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
import { $JobEffort_, $JobEffort } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $Throwable } from "@package/java/lang";
import { $ChunkBuilderTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor" {
    export class $ChunkJob {
    }
    export interface $ChunkJob extends $CancellationToken {
        isStarted(): boolean;
        isBlocking(): boolean;
        execute(arg0: $ChunkBuildContext): void;
        getEstimatedUploadDuration(): number;
        getEstimatedSize(): number;
        getEstimatedDuration(): number;
        get started(): boolean;
        get blocking(): boolean;
        get estimatedUploadDuration(): number;
        get estimatedSize(): number;
        get estimatedDuration(): number;
    }
    export class $ChunkJobTyped<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput> implements $ChunkJob {
        isStarted(): boolean;
        isBlocking(): boolean;
        isCancelled(): boolean;
        execute(arg0: $ChunkBuildContext): void;
        setCancelled(): void;
        getEstimatedUploadDuration(): number;
        getEstimatedSize(): number;
        getEstimatedDuration(): number;
        get started(): boolean;
        get blocking(): boolean;
        get estimatedUploadDuration(): number;
        get estimatedSize(): number;
        get estimatedDuration(): number;
    }
    export class $ChunkJobResult<OUTPUT> {
        static exceptionally<OUTPUT>(arg0: $Throwable): $ChunkJobResult<OUTPUT>;
        unwrap(): OUTPUT;
        getJobEffort(): $JobEffort;
        static successfully<OUTPUT>(arg0: OUTPUT, arg1: $JobEffort_): $ChunkJobResult<OUTPUT>;
        static successfully<OUTPUT>(arg0: OUTPUT): $ChunkJobResult<OUTPUT>;
        get jobEffort(): $JobEffort;
    }
    export class $ChunkBuilder {
        getTotalThreadCount(): number;
        shutdown(): void;
        scheduleTask<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput>(arg0: TASK, arg1: boolean, arg2: $Consumer_<$ChunkJobResult<OUTPUT>>, arg3: boolean): $ChunkJobTyped<TASK, OUTPUT>;
        getTotalRemainingDuration(arg0: number): number;
        getScheduledJobCount(): number;
        getBusyThreadCount(): number;
        getBusyFraction(arg0: number): number;
        isBuildQueueEmpty(): boolean;
        tryStealTask(arg0: $ChunkJob): void;
        constructor(arg0: $ClientLevel, arg1: $ChunkVertexType);
        get totalThreadCount(): number;
        get scheduledJobCount(): number;
        get busyThreadCount(): number;
        get buildQueueEmpty(): boolean;
    }
}
