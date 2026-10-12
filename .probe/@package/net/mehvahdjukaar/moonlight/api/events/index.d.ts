import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LightningBolt } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Activity_ } from "@package/net/minecraft/world/entity/schedule";
import { $Map } from "@package/java/util";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VillagerBrainEventInternal } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
export * as platform from "@package/net/mehvahdjukaar/moonlight/api/events/platform";

declare module "@package/net/mehvahdjukaar/moonlight/api/events" {
    export class $ILightningStruckBlockEvent {
        static create(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $LightningBolt): $ILightningStruckBlockEvent;
    }
    export interface $ILightningStruckBlockEvent extends $SimpleEvent {
        getLevel(): $LevelAccessor;
        getEntity(): $LightningBolt;
        getState(): $BlockState;
        getPos(): $BlockPos;
        get level(): $LevelAccessor;
        get entity(): $LightningBolt;
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $IFireConsumeBlockEvent {
        static create(arg0: $BlockPos_, arg1: $Level_, arg2: $BlockState_, arg3: number, arg4: number, arg5: $Direction_, arg6: boolean): $IFireConsumeBlockEvent;
    }
    export interface $IFireConsumeBlockEvent extends $SimpleEvent {
        getLevel(): $LevelAccessor;
        getAge(): number;
        getState(): $BlockState;
        getFace(): $Direction;
        wasReplacedByFire(): boolean;
        getChance(): number;
        getFinalState(): $BlockState;
        getPos(): $BlockPos;
        setFinalState(arg0: $BlockState_): void;
        get level(): $LevelAccessor;
        get age(): number;
        get state(): $BlockState;
        get face(): $Direction;
        get chance(): number;
        get pos(): $BlockPos;
    }
    export class $IVillagerBrainEvent {
    }
    export interface $IVillagerBrainEvent extends $SimpleEvent {
        getInternal(): $VillagerBrainEventInternal;
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        getVillager(): $Villager;
        addOrReplaceActivity(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>): void;
        scheduleActivity(arg0: $Activity_, arg1: number, arg2: number): void;
        addSensor(arg0: $SensorType_<$Sensor<$Villager>>): void;
        addTaskToActivity<P extends $Pair<number, $Behavior<$Villager>>>(arg0: $Activity_, arg1: P): boolean;
        get internal(): $VillagerBrainEventInternal;
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        get villager(): $Villager;
    }
    export class $IDropItemOnDeathEvent {
        static create(arg0: $ItemStack_, arg1: $Player, arg2: boolean): $IDropItemOnDeathEvent;
    }
    export interface $IDropItemOnDeathEvent extends $SimpleEvent {
        isCanceled(): boolean;
        getItemStack(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isBeforeDrop(): boolean;
        setReturnItemStack(arg0: $ItemStack_): void;
        getPlayer(): $Player;
        getReturnItemStack(): $ItemStack;
        get itemStack(): $ItemStack;
        get beforeDrop(): boolean;
        get player(): $Player;
    }
    export class $SimpleEvent {
    }
    export interface $SimpleEvent {
    }
}
