import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Record } from "@package/java/lang";
import { $OptionalInt } from "@package/java/util";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/lambdaurora/lambdynlights/api/behavior" {
    export class $BeaconLightBehavior extends $Record implements $DynamicLightBehavior {
        x(): number;
        z(): number;
        y(): $OptionalInt;
        level(): $Level;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        hasChanged(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        luminance(): number;
        isRemoved(): boolean;
        constructor(x: number, z: number, luminance: number, level: $Level_);
        constructor(x: number, y: $OptionalInt, z: number, luminance: number, level: $Level_);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BeaconLightBehavior}.
     */
    export type $BeaconLightBehavior_ = { z?: number, level?: $Level_, x?: number, y?: $OptionalInt, luminance?: number,  } | [z?: number, level?: $Level_, x?: number, y?: $OptionalInt, luminance?: number, ];
    export class $DynamicLightBehavior {
    }
    export interface $DynamicLightBehavior {
        isRemoved(): boolean;
        lightAtPos(arg0: $BlockPos_, arg1: number): number;
        hasChanged(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
    }
    export class $LineLightBehavior implements $DynamicLightBehavior {
        setLuminance(luminance: number): void;
        getLuminance(): number;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        hasChanged(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        getStartPoint(): $Vector3d;
        setStartPoint(startPoint: $Vector3d): void;
        setStartPoint(x: number, y: number, z: number): void;
        getEndPoint(): $Vector3d;
        setEndPoint(x: number, y: number, z: number): void;
        setEndPoint(endPoint: $Vector3d): void;
        isRemoved(): boolean;
        constructor(startPoint: $Vector3d, endPoint: $Vector3d, luminance: number);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    export class $DynamicLightBehavior$BoundingBox extends $Record {
        endY(): number;
        startX(): number;
        endX(): number;
        endZ(): number;
        startZ(): number;
        startY(): number;
        constructor(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number);
    }
    /**
     * Values that may be interpreted as {@link $DynamicLightBehavior$BoundingBox}.
     */
    export type $DynamicLightBehavior$BoundingBox_ = { startX?: number, startY?: number, startZ?: number, endX?: number, endY?: number, endZ?: number,  } | [startX?: number, startY?: number, startZ?: number, endX?: number, endY?: number, endZ?: number, ];
}
