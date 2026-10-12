import { $Supplier_, $Function_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $MetricSampler, $ProfilerMeasured } from "@package/net/minecraft/util/profiling/metrics";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_, $Executor, $ThreadFactory } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AutoCloseable, $Thread, $Runnable_, $Runnable, $Exception } from "@package/java/lang";
import { $Queue, $List } from "@package/java/util";

declare module "@package/net/minecraft/util/thread" {
    export class $ReentrantBlockableEventLoop<R extends $Runnable> extends $BlockableEventLoop<R> {
        scheduleExecutables(): boolean;
        doRunTask(task: R): void;
        constructor(name: string);
    }
    export class $StrictQueue$FixedPriorityQueue implements $StrictQueue<$StrictQueue$IntRunnable, $Runnable> {
        push(value: $StrictQueue$IntRunnable): boolean;
        pop(): $Runnable;
        size(): number;
        isEmpty(): boolean;
        constructor(size: number);
        get empty(): boolean;
    }
    export class $ProcessorMailbox<T> implements $ProfilerMeasured, $ProcessorHandle<T>, $AutoCloseable, $Runnable {
        static create(dispatcher: $Executor_, name: string): $ProcessorMailbox<$Runnable>;
        name(): string;
        run(): void;
        size(): number;
        close(): void;
        tell(task: T): void;
        profiledMetrics(): $List<$MetricSampler>;
        runAll(): void;
        hasWork(): boolean;
        ask<Source>(task: $Function_<$ProcessorHandle<Source>, T>): $CompletableFuture<Source>;
        askEither<Source>(task: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, T>): $CompletableFuture<Source>;
        constructor(queue: $StrictQueue<T, $Runnable_>, dispatcher: $Executor_, name: string);
    }
    export class $StrictQueue<T, F> {
    }
    export interface $StrictQueue<T, F> {
        push(value: T): boolean;
        pop(): F;
        size(): number;
        isEmpty(): boolean;
        get empty(): boolean;
    }
    export class $StrictQueue$QueueStrictQueue<T> implements $StrictQueue<T, T> {
        push(value: T): boolean;
        pop(): T;
        size(): number;
        isEmpty(): boolean;
        constructor(queue: $Queue<T>);
        get empty(): boolean;
    }
    export class $ProcessorHandle<Msg> {
        static of<Msg>(name: string, task: $Consumer_<Msg>): $ProcessorHandle<Msg>;
    }
    export interface $ProcessorHandle<Msg> extends $AutoCloseable {
        name(): string;
        close(): void;
        tell(task: Msg): void;
        ask<Source>(task: $Function_<$ProcessorHandle<Source>, Msg>): $CompletableFuture<Source>;
        askEither<Source>(task: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, Msg>): $CompletableFuture<Source>;
    }
    export class $BlockableEventLoop<R extends $Runnable> implements $ProfilerMeasured, $ProcessorHandle<R>, $Executor {
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        managedBlock(isDone: $BooleanSupplier_): void;
        submit(task: $Runnable_): $CompletableFuture<void>;
        submit<V>(supplier: $Supplier_<V>): $CompletableFuture<V>;
        pollTask(): boolean;
        name(): string;
        execute(task: $Runnable_): void;
        handler$ggi000$essential$runEssentialTasks(callbackInfo: $CallbackInfo): void;
        isSameThread(): boolean;
        getPendingTasksCount(): number;
        submitAsync(task: $Runnable_): $CompletableFuture<void>;
        executeBlocking(task: $Runnable_): void;
        tell(task: R): void;
        executeIfPossible(task: $Runnable_): void;
        waitForTasks(): void;
        profiledMetrics(): $List<$MetricSampler>;
        close(): void;
        ask<Source>(task: $Function_<$ProcessorHandle<Source>, R>): $CompletableFuture<Source>;
        askEither<Source>(task: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, R>): $CompletableFuture<Source>;
        get sameThread(): boolean;
        get pendingTasksCount(): number;
    }
    export class $StrictQueue$IntRunnable implements $Runnable {
        run(): void;
        getPriority(): number;
        constructor(priority: number, task: $Runnable_);
        get priority(): number;
    }
    export class $NamedThreadFactory implements $ThreadFactory {
        newThread(task: $Runnable_): $Thread;
        constructor(namePrefix: string);
    }
}
