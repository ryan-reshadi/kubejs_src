import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType, $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $BrainAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Schedule, $Activity_, $Activity, $Schedule_ } from "@package/net/minecraft/world/entity/schedule";
import { $List, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $MemoryModuleType_, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object } from "@package/java/lang";
export * as goal from "@package/net/minecraft/world/entity/ai/goal";
export * as behavior from "@package/net/minecraft/world/entity/ai/behavior";
export * as attributes from "@package/net/minecraft/world/entity/ai/attributes";
export * as util from "@package/net/minecraft/world/entity/ai/util";
export * as village from "@package/net/minecraft/world/entity/ai/village";
export * as navigation from "@package/net/minecraft/world/entity/ai/navigation";
export * as sensing from "@package/net/minecraft/world/entity/ai/sensing";
export * as control from "@package/net/minecraft/world/entity/ai/control";
export * as memory from "@package/net/minecraft/world/entity/ai/memory";
export * as gossip from "@package/net/minecraft/world/entity/ai/gossip";
export * as targeting from "@package/net/minecraft/world/entity/ai/targeting";

declare module "@package/net/minecraft/world/entity/ai" {
    export class $Brain$MemoryValue<U> {
    }
    export class $Brain<E extends $LivingEntity> implements $BrainAccessor<any> {
        isActive(activity: $Activity_): boolean;
        tick(level: $ServerLevel, entity: $Object): void;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: (U) | undefined): void;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: U | null): void;
        getSchedule(): $Schedule;
        getMemory<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        static provider<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Brain$Provider<E>;
        hasMemoryValue(type: $MemoryModuleType_<never>): boolean;
        static codec<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Codec<$Brain<E>>;
        clearMemories(): void;
        serializeStart<T>(ops: $DynamicOps<T>): $DataResult<T>;
        /**
         * @deprecated
         */
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        removeAllBehaviors(): void;
        getTimeUntilExpiry<U>(memoryType: $MemoryModuleType_<U>): number;
        setMemoryWithExpiry<U>(memoryType: $MemoryModuleType_<U>, memory: U, timeToLive: number): void;
        stopAll(level: $ServerLevel, entity: $Object): void;
        copyWithoutBehaviors(): $Brain<$Object>;
        setSchedule(newSchedule: $Schedule_): void;
        addActivityWithConditions(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, memoryStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>): void;
        setActiveActivityIfPossible(activity: $Activity_): void;
        updateActivityFromSchedule(dayTime: number, arg1: number): void;
        checkMemory(memoryType: $MemoryModuleType_<never>, memoryStatus: $MemoryStatus_): boolean;
        eraseMemory<U>(type: $MemoryModuleType_<U>): void;
        setCoreActivities(newActivities: $Set_<$Activity_>): void;
        setDefaultActivity(activity: $Activity_): void;
        useDefaultActivity(): void;
        addActivity(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>): void;
        addActivity(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<$Object>>): void;
        addActivityAndRemoveMemoryWhenStopped(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<$Object>>, memoryType: $MemoryModuleType_<never>): void;
        getActiveNonCoreActivity(): ($Activity) | undefined;
        setActiveActivityToFirstValid(activities: $List_<$Activity_>): void;
        isMemoryValue<U>(memoryType: $MemoryModuleType_<U>, memory: U): boolean;
        getMemoryInternal<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        /**
         * @deprecated
         */
        getActiveActivities(): $Set<$Activity>;
        /**
         * @deprecated
         */
        getRunningBehaviors(): $List<$BehaviorControl<$Object>>;
        addActivityAndRemoveMemoriesWhenStopped(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, memorieStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>, memoryTypes: $Set_<$MemoryModuleType_<never>>): void;
        getSensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        getAvailableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<$Object>>>>;
        constructor(memoryModuleTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<$Object>>>, memoryValues: $ImmutableList<$Brain$MemoryValue<never>>, codec: $Supplier_<$Codec<$Brain<$Object>>>);
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        set activeActivityIfPossible(value: $Activity_);
        set coreActivities(value: $Set_<$Activity_>);
        set defaultActivity(value: $Activity_);
        get activeNonCoreActivity(): ($Activity) | undefined;
        set activeActivityToFirstValid(value: $List_<$Activity_>);
        get activeActivities(): $Set<$Activity>;
        get runningBehaviors(): $List<$BehaviorControl<$Object>>;
        get sensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        get availableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<$Object>>>>;
    }
    export class $Brain$Provider<E extends $LivingEntity> {
        makeBrain(ops: $Dynamic<never>): $Brain<E>;
    }
}
