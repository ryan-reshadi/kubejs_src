import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        getScaleX(): number;
        getScaleY(): number;
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getBone(): $GeoBone;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotY(): number;
        getRotX(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        getRotZ(): number;
        getScaleZ(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        startRotAnim(): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startPosAnim(): void;
        startScaleAnim(): void;
        isRotAnimInProgress(): boolean;
        stopRotAnim(arg0: number): void;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        stopPosAnim(arg0: number): void;
        getLastResetPositionTick(): number;
        getOffsetZ(): number;
        isScaleAnimInProgress(): boolean;
        stopScaleAnim(arg0: number): void;
        getLastResetScaleTick(): number;
        constructor(arg0: $GeoBone);
        get scaleX(): number;
        get scaleY(): number;
        get bone(): $GeoBone;
        get rotY(): number;
        get rotX(): number;
        get offsetX(): number;
        get offsetY(): number;
        get rotZ(): number;
        get scaleZ(): number;
        get rotAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
        get offsetZ(): number;
        get scaleAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
    }
}
