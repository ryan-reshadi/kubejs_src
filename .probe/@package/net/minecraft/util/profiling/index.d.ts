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
        getProfilerResults(): string;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getEndTimeTicks(): number;
        getStartTimeNano(): number;
        getTickDuration(): number;
        getNanoDuration(): number;
        static EMPTY: $EmptyProfileResults;
        get profilerResults(): string;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeNano(): number;
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
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        handler$zkl000$veil$pop(arg0: $CallbackInfo): void;
        handler$zkl000$veil$push(arg0: string, arg1: $CallbackInfo): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(counterName: string, increment: number): void;
        /**
         * End section
         */
        endTick(): void;
        popPush(name: string): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        getResults(): $ProfileResults;
        /**
         * End section
         */
        startTick(): void;
        markForCharting(category: $MetricCategory_): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        incrementCounter(name: string): void;
        constructor(startTimeNano: $LongSupplier_, startTimeTicks: $IntSupplier_, warn: boolean);
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $InactiveProfiler implements $ProfileCollector {
        push(nameSupplier: $Supplier_<string>): void;
        push(name: string): void;
        /**
         * End section
         */
        pop(): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(counterName: string, increment: number): void;
        /**
         * End section
         */
        endTick(): void;
        popPush(name: string): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        getResults(): $ProfileResults;
        /**
         * End section
         */
        startTick(): void;
        markForCharting(category: $MetricCategory_): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        incrementCounter(name: string): void;
        static INSTANCE: $InactiveProfiler;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $ActiveProfiler$PathEntry implements $ProfilerPathEntry {
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        constructor();
        get count(): number;
        get duration(): number;
        get counters(): $Object2LongMap<string>;
        get maxDuration(): number;
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
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(entryIdSupplier: $Supplier_<string>): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(entryId: string): void;
        /**
         * End section
         */
        endTick(): void;
        popPush(entryId: string): void;
        popPush(entryIdSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        startTick(): void;
        markForCharting(category: $MetricCategory_): void;
    }
    export class $ContinuousProfiler {
        isEnabled(): boolean;
        enable(): void;
        disable(): void;
        getResults(): $ProfileResults;
        getFiller(): $ProfilerFiller;
        constructor(realTime: $LongSupplier_, tickCount: $IntSupplier_);
        get enabled(): boolean;
        get results(): $ProfileResults;
        get filler(): $ProfilerFiller;
    }
    export class $ProfilerPathEntry {
    }
    export interface $ProfilerPathEntry {
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        get count(): number;
        get duration(): number;
        get counters(): $Object2LongMap<string>;
        get maxDuration(): number;
    }
    export class $SingleTickProfiler {
        static decorateFiller(profiler: $ProfilerFiller, singleTickProfiler: $SingleTickProfiler | null): $ProfilerFiller;
        static createTickProfiler(name: string): $SingleTickProfiler;
        endTick(): void;
        startTick(): $ProfilerFiller;
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
        getTickDuration(): number;
        getTimes(sectionPath: string): $List<$ResultField>;
        getProfilerResults(): string;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getEndTimeTicks(): number;
        getStartTimeNano(): number;
        getNanoDuration(): number;
        constructor(entries: $Map_<string, $ProfilerPathEntry>, startTimeNano: number, arg2: number, startTimeTicks: number, endTimeNano: number);
        get tickDuration(): number;
        get profilerResults(): string;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeNano(): number;
        get nanoDuration(): number;
    }
    export class $ProfileResults {
        static demanglePath(path: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getTickDuration(): number;
        getNanoDuration(): number;
        getTimes(sectionPath: string): $List<$ResultField>;
        getProfilerResults(): string;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getEndTimeTicks(): number;
        getStartTimeNano(): number;
        get tickDuration(): number;
        get nanoDuration(): number;
        get profilerResults(): string;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeNano(): number;
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
