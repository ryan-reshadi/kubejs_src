import { $Collection } from "@package/java/util";
import { $PrettyPrinter } from "@package/org/spongepowered/asm/util";

declare module "@package/org/spongepowered/asm/util/perf" {
    export class $Profiler {
        printer(arg0: boolean, arg1: boolean): $PrettyPrinter;
        static getProfilers(): $Collection<$Profiler>;
        getSections(): $Collection<$Profiler$Section>;
        static printAuditSummary(): void;
        printSummary(): void;
        static getProfiler(arg0: string): $Profiler;
        static setActive(arg0: boolean): void;
        mark(arg0: string): void;
        reset(): void;
        get(arg0: string): $Profiler$Section;
        begin(...arg0: string[]): $Profiler$Section;
        begin(arg0: number, arg1: string): $Profiler$Section;
        begin(arg0: number, ...arg1: string[]): $Profiler$Section;
        begin(arg0: string): $Profiler$Section;
        static ROOT: number;
        static FINE: number;
        constructor(arg0: string);
        static get profilers(): $Collection<$Profiler>;
        get sections(): $Collection<$Profiler$Section>;
        static set active(value: boolean);
    }
    export class $Profiler$Section {
        getInfo(): string;
        getBaseName(): string;
        getTimes(): number[];
        getTotalAverageTime(): number;
        getTotalCount(): number;
        getTotalTime(): number;
        isFine(): boolean;
        getAverageTime(): number;
        setInfo(arg0: string): void;
        getTime(): number;
        getSeconds(): number;
        getTotalSeconds(): number;
        isRoot(): boolean;
        getName(): string;
        end(): $Profiler$Section;
        next(arg0: string): $Profiler$Section;
        getCount(): number;
        get baseName(): string;
        get times(): number[];
        get totalAverageTime(): number;
        get totalCount(): number;
        get totalTime(): number;
        get fine(): boolean;
        get averageTime(): number;
        get time(): number;
        get seconds(): number;
        get totalSeconds(): number;
        get root(): boolean;
        get name(): string;
        get count(): number;
    }
}
