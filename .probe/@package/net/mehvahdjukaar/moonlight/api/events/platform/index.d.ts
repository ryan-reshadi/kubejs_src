import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LightningBolt } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Activity_ } from "@package/net/minecraft/world/entity/schedule";
import { $Map } from "@package/java/util";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VillagerBrainEventInternal } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";
import { $ILightningStruckBlockEvent, $IVillagerBrainEvent, $IFireConsumeBlockEvent, $IDropItemOnDeathEvent } from "@package/net/mehvahdjukaar/moonlight/api/events";

declare module "@package/net/mehvahdjukaar/moonlight/api/events/platform" {
    export class $DropItemOnDeathEvent extends $Event implements $IDropItemOnDeathEvent, $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        getReturnItemStack(): $ItemStack;
        static create(arg0: $ItemStack_, arg1: $Player, arg2: boolean): $IDropItemOnDeathEvent;
        getItemStack(): $ItemStack;
        setReturnItemStack(arg0: $ItemStack_): void;
        isBeforeDrop(): boolean;
        isCanceled(): boolean;
        getPlayer(): $Player;
        constructor(arg0: $ItemStack_, arg1: $Player, arg2: boolean);
        get itemStack(): $ItemStack;
        get beforeDrop(): boolean;
        get player(): $Player;
    }
    export class $VillagerBrainEvent extends $Event implements $IVillagerBrainEvent {
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        getVillager(): $Villager;
        scheduleActivity(arg0: $Activity_, arg1: number, arg2: number): void;
        addTaskToActivity<P extends $Pair<number, $Behavior<$Villager>>>(arg0: $Activity_, arg1: P): boolean;
        getInternal(): $VillagerBrainEventInternal;
        addOrReplaceActivity(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>): void;
        addSensor(arg0: $SensorType_<$Sensor<$Villager>>): void;
        constructor(arg0: $Brain<$Villager>, arg1: $Villager);
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        get villager(): $Villager;
        get internal(): $VillagerBrainEventInternal;
    }
    export class $LightningStruckBlockEvent extends $BlockEvent implements $ILightningStruckBlockEvent {
        getEntity(): $LightningBolt;
        constructor(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $LightningBolt);
        get entity(): $LightningBolt;
    }
    export class $FireConsumeBlockEvent extends $BlockEvent implements $IFireConsumeBlockEvent {
        setFinalState(arg0: $BlockState_): void;
        wasReplacedByFire(): boolean;
        getAge(): number;
        getChance(): number;
        getFinalState(): $BlockState;
        getFace(): $Direction;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: number, arg5: $Direction_, arg6: boolean);
        get age(): number;
        get chance(): number;
        get face(): $Direction;
    }
}
