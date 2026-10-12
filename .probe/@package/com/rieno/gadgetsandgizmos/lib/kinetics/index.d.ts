import { $Direction$Axis_, $Direction_ } from "@package/net/minecraft/core";

declare module "@package/com/rieno/gadgetsandgizmos/lib/kinetics" {
    export class $DirectionalPreciseKineticOutputAccess {
    }
    export interface $DirectionalPreciseKineticOutputAccess {
        ct$applyDirectionalPreciseAngleOutput(arg0: $Direction_, arg1: number): void;
        ct$clearDirectionalPreciseAngleOutput(): void;
    }
    export class $HeldKineticAngleAccess {
    }
    export interface $HeldKineticAngleAccess {
        ct$getAbsoluteRotationAngle(arg0: $Direction$Axis_): number;
        ct$hasHeldAngle(arg0: $Direction$Axis_): boolean;
        ct$setHeldAngle(arg0: $Direction$Axis_, arg1: number): boolean;
        ct$clearHeldAngles(): boolean;
    }
    export class $PreciseKineticOutputAccess {
    }
    export interface $PreciseKineticOutputAccess {
        ct$applyPreciseAngleOutput(arg0: number): void;
        ct$clearPreciseAngleOutput(): void;
    }
}
