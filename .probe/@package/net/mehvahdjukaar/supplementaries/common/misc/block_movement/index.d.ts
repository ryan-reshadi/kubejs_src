import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Set_, $List_, $Set } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/mehvahdjukaar/supplementaries/common/misc/block_movement" {
    export class $ICooperativePistons {
    }
    export interface $ICooperativePistons {
        supp$setCooperators(arg0: $Set_<$BlockPos_>, arg1: $Direction_, arg2: boolean): void;
        supp$getCooperationState(): $PistonCooperationState;
    }
    export class $ICarryingMovingPiston {
    }
    export interface $ICarryingMovingPiston {
        supp$applyMovedFluid(): void;
        supp$setCarriedBlockEntityNbt(arg0: $CompoundTag_): void;
        supp$setMovedFluid(arg0: $FluidState): void;
        supp$getCarriedBlockEntityNbt(): $CompoundTag;
        supp$getOrCreateCachedCarriedBlockEntity(): $BlockEntity;
        supp$restoreCarriedBe(): void;
    }
    export class $PistonCooperationState {
        set(arg0: $Set_<$BlockPos_>, arg1: $Direction_, arg2: boolean): void;
        getContributingCooperators(): $Set<$BlockPos>;
        adoptContributingFrom(arg0: $PistonCooperationState): void;
        gateResolve(arg0: boolean, arg1: $BlockPos_, arg2: $List_<$BlockPos_>): boolean;
        wrapEqualsCheck(arg0: boolean, arg1: $BlockPos_): boolean;
        hideCooperatorHeads(arg0: $BlockState_, arg1: $BlockPos_): $BlockState;
        getPushLimit(): number;
        constructor();
        get contributingCooperators(): $Set<$BlockPos>;
        get pushLimit(): number;
    }
}
