import { $Level_ } from "@package/net/minecraft/world/level";
import { $Path, $PathType_, $NodeEvaluator } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $GroundPathNavigation extends $PathNavigation {
        setCanOpenDoors(avoidSun: boolean): void;
        setCanPassDoors(avoidSun: boolean): void;
        setCanWalkOverFences(avoidSun: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        setAvoidSun(avoidSun: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        constructor(mob: $Mob, level: $Level_);
        set canWalkOverFences(value: boolean);
        set avoidSun(value: boolean);
    }
    export class $AmphibiousPathNavigation extends $PathNavigation {
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $PathNavigation {
        setCanFloat(canSwim: boolean): void;
        /**
         * Sets the active `Path` to `null`.
         */
        stop(): void;
        /**
         * If on ground or swimming and can swim
         */
        isDone(): boolean;
        /**
         * Gets the actively used `Path`.
         */
        getPath(): $Path;
        /**
         * Sets the active `Path` to `null`.
         */
        tick(): void;
        /**
         * If on ground or swimming and can swim
         */
        isStuck(): boolean;
        /**
         * Returns a path to the given entity or null
         */
        createPath(entity: $Entity, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(pos: $BlockPos_, accuracy: number): $Path;
        /**
         * Returns a path to one of the elements of the stream or null
         */
        createPath(targets: $Stream<$BlockPos_>, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(x: number, arg1: number, y: number, arg3: number): $Path;
        createPath(pos: $BlockPos_, regionOffset: number, accuracy: number): $Path;
        createPath(positions: $Set_<$BlockPos_>, distance: number): $Path;
        setMaxVisitedNodesMultiplier(multiplier: number): void;
        shouldTargetNextNodeInDirection(vec: $Vec3_): boolean;
        /**
         * Sets the active `Path` to `null`.
         */
        resetMaxVisitedNodesMultiplier(): void;
        /**
         * Sets the active `Path` to `null`.
         */
        recomputePath(): void;
        shouldRecomputePath(pos: $BlockPos_): boolean;
        getMaxDistanceToWaypoint(): number;
        isStableDestination(pos: $BlockPos_): boolean;
        /**
         * Try to find and set a path to XYZ. Returns `true` if successful.
         */
        moveTo(x: number, arg1: number, y: number, arg3: number): boolean;
        /**
         * Try to find and set a path to EntityLiving. Returns `true` if successful.
         */
        moveTo(entity: $Entity, speed: number): boolean;
        moveTo(x: number, arg1: number, y: number, arg3: number, z: number): boolean;
        /**
         * Sets a new path. If it's different from the old path. Checks to adjust path for sun avoiding, and stores start coords.
         */
        moveTo(pathentity: $Path | null, speed: number): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canFloat(): boolean;
        /**
         * Sets the speed
         */
        setSpeedModifier(speed: number): void;
        /**
         * If on ground or swimming and can swim
         */
        isInProgress(): boolean;
        getTargetPos(): $BlockPos;
        canCutCorner(pathType: $PathType_): boolean;
        getNodeEvaluator(): $NodeEvaluator;
        constructor(mob: $Mob, level: $Level_);
        get done(): boolean;
        get path(): $Path;
        get stuck(): boolean;
        set maxVisitedNodesMultiplier(value: number);
        get maxDistanceToWaypoint(): number;
        set speedModifier(value: number);
        get inProgress(): boolean;
        get targetPos(): $BlockPos;
        get nodeEvaluator(): $NodeEvaluator;
    }
    export class $WaterBoundPathNavigation extends $PathNavigation {
        constructor(mob: $Mob, level: $Level_);
    }
    export class $WallClimberNavigation extends $GroundPathNavigation {
        constructor(mob: $Mob, level: $Level_);
    }
    export class $FlyingPathNavigation extends $PathNavigation {
        setCanOpenDoors(canOpenDoors: boolean): void;
        setCanPassDoors(canOpenDoors: boolean): void;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        constructor(mob: $Mob, level: $Level_);
    }
}
