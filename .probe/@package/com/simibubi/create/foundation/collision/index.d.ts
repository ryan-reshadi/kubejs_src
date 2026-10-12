import { $Matrix3dAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/contraptions";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/collision" {
    export class $Matrix3d implements $Matrix3dAccessor {
        multiply(arg0: $Matrix3d): $Matrix3d;
        scale(arg0: number): $Matrix3d;
        transform(arg0: number, arg1: number, arg2: number): $Vec3;
        transform(arg0: $Vec3_): $Vec3;
        asIdentity(): $Matrix3d;
        asXRotation(arg0: number): $Matrix3d;
        asYRotation(arg0: number): $Matrix3d;
        asZRotation(arg0: number): $Matrix3d;
        transformTransposed(arg0: number, arg1: number, arg2: number): $Vec3;
        transformTransposed(arg0: $Vec3_): $Vec3;
        getM00(): number;
        getM10(): number;
        getM20(): number;
        getM01(): number;
        getM11(): number;
        getM21(): number;
        getM02(): number;
        getM12(): number;
        getM22(): number;
        setM00(arg0: number): void;
        setM01(arg0: number): void;
        setM02(arg0: number): void;
        setM10(arg0: number): void;
        setM11(arg0: number): void;
        setM12(arg0: number): void;
        setM20(arg0: number): void;
        setM21(arg0: number): void;
        setM22(arg0: number): void;
        constructor();
    }
    export class $CollisionList {
        centerY: number[];
        centerZ: number[];
        size: number;
        centerX: number[];
        extentsZ: number[];
        extentsY: number[];
        extentsX: number[];
        static DEFAULT_CAPACITY: number;
        constructor();
    }
}
