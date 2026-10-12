import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getBone(): $GeoBone;
        getScaleX(): number;
        getScaleY(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getRotZ(): number;
        getScaleZ(): number;
        getRotY(): number;
        getRotX(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        getLastResetScaleTick(): number;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        isScaleAnimInProgress(): boolean;
        isRotAnimInProgress(): boolean;
        getLastResetPositionTick(): number;
        getOffsetZ(): number;
        startScaleAnim(): void;
        startRotAnim(): void;
        stopPosAnim(arg0: number): void;
        stopRotAnim(arg0: number): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startPosAnim(): void;
        stopScaleAnim(arg0: number): void;
        constructor(arg0: $GeoBone);
        get bone(): $GeoBone;
        get scaleX(): number;
        get scaleY(): number;
        get rotZ(): number;
        get scaleZ(): number;
        get rotY(): number;
        get rotX(): number;
        get offsetX(): number;
        get offsetY(): number;
        get lastResetScaleTick(): number;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get scaleAnimInProgress(): boolean;
        get rotAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
        get offsetZ(): number;
    }
}
