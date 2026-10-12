import { $Supplier_, $IntSupplier_, $LongSupplier_ } from "@package/java/util/function";
import { $Object2LongMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $MetricCategory_, $MetricCategory } from "@package/net/minecraft/util/profiling/metrics";
import { $Path_ } from "@package/java/nio/file";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Map_, $Set } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
export * as jfr from "@package/net/minecraft/util/profiling/jfr";
export * as metrics from "@package/net/minecraft/util/profiling/metrics";

declare module "@package/net/minecraft/util/profiling" {
    export class $EmptyProfileResults implements $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        saveResults(path: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        getTickDuration(): number;
        getNanoDuration(): number;
        static EMPTY: $EmptyProfileResults;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get profilerResults(): string;
        get tickDuration(): number;
        get nanoDuration(): number;
    }
    export class $ActiveProfiler implements $ProfileCollector {
        push(name: string): void;
        push(nameSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        pop(): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(counterName: string, increment: number): void;
        popPush(name: string): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        markForCharting(category: $MetricCategory_): void;
        handler$zkl000$veil$pop(arg0: $CallbackInfo): void;
        handler$zkl000$veil$push(arg0: string, arg1: $CallbackInfo): void;
        incrementCounter(name: string): void;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        constructor(startTimeNano: $LongSupplier_, startTimeTicks: $IntSupplier_, warn: boolean);
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $InactiveProfiler implements $ProfileCollector {
        push(name: string): void;
        push(nameSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        pop(): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        popPush(name: string): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        markForCharting(category: $MetricCategory_): void;
        incrementCounter(name: string): void;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        static INSTANCE: $InactiveProfiler;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $ActiveProfiler$PathEntry implements $ProfilerPathEntry {
        getDuration(): number;
        getCount(): number;
        getMaxDuration(): number;
        getCounters(): $Object2LongMap<string>;
        constructor();
        get duration(): number;
        get count(): number;
        get maxDuration(): number;
        get counters(): $Object2LongMap<string>;
    }
    export class $ProfilerFiller {
        static tee(first: $ProfilerFiller, second: $ProfilerFiller): $ProfilerFiller;
        static ROOT: string;
    }
    export interface $ProfilerFiller {
        push(entryIdSupplier: $Supplier_<string>): void;
        push(entryId: string): void;
        /**
         * End section
         */
        pop(): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        incrementCounter(entryId: string): void;
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(entryIdSupplier: $Supplier_<string>): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        popPush(entryId: string): void;
        popPush(entryIdSupplier: $Supplier_<string>): void;
        markForCharting(category: $MetricCategory_): void;
    }
    export class $ContinuousProfiler {
        enable(): void;
        disable(): void;
        isEnabled(): boolean;
        getFiller(): $ProfilerFiller;
        getResults(): $ProfileResults;
        constructor(realTime: $LongSupplier_, tickCount: $IntSupplier_);
        get enabled(): boolean;
        get filler(): $ProfilerFiller;
        get results(): $ProfileResults;
    }
    export class $ProfilerPathEntry {
    }
    export interface $ProfilerPathEntry {
        getDuration(): number;
        getCount(): number;
        getMaxDuration(): number;
        getCounters(): $Object2LongMap<string>;
        get duration(): number;
        get count(): number;
        get maxDuration(): number;
        get counters(): $Object2LongMap<string>;
    }
    export class $SingleTickProfiler {
        static createTickProfiler(name: string): $SingleTickProfiler;
        startTick(): $ProfilerFiller;
        endTick(): void;
        static decorateFiller(profiler: $ProfilerFiller, singleTickProfiler: $SingleTickProfiler | null): $ProfilerFiller;
        constructor(realTime: $LongSupplier_, location: string, saveThreshold: number);
    }
    export class $ResultField implements $Comparable<$ResultField> {
        compareTo(arg0: $ResultField): number;
        getColor(): number;
        globalPercentage: number;
        percentage: number;
        count: number;
        name: string;
        constructor(name: string, percentage: number, arg2: number, globalPercentage: number);
        get color(): number;
    }
    export class $FilledProfileResults implements $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getTickDuration(): number;
        saveResults(path: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        getNanoDuration(): number;
        constructor(entries: $Map_<string, $ProfilerPathEntry>, startTimeNano: number, arg2: number, startTimeTicks: number, endTimeNano: number);
        get tickDuration(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get profilerResults(): string;
        get nanoDuration(): number;
    }
    export class $ProfileResults {
        static demanglePath(path: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getTickDuration(): number;
        getNanoDuration(): number;
        saveResults(path: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        get tickDuration(): number;
        get nanoDuration(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get profilerResults(): string;
    }
    export class $ProfileCollector {
    }
    export interface $ProfileCollector extends $ProfilerFiller {
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $FilledProfileResults$CounterCollector {
    }
}
