import { $MassTracker, $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/force" {
    export class $ForceGroup extends $Record {
        color(): number;
        description(): $Component;
        name(): $Component;
        defaultDisplayed(): boolean;
        constructor(name: $Component_, description: $Component_, color: number, defaultDisplayed: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ForceGroup}.
     */
    export type $ForceGroup_ = RegistryTypes.SableForceGroups | { name?: $Component_, color?: number, defaultDisplayed?: boolean, description?: $Component_,  } | [name?: $Component_, color?: number, defaultDisplayed?: boolean, description?: $Component_, ];
    export interface $ForceGroup extends RegistryMarked<RegistryTypes.SableForceGroupsTag, RegistryTypes.SableForceGroups> {}
    export class $ForceTotal {
        getLocalForce(): $Vector3d;
        reset(): void;
        applyImpulseAtPoint(arg0: $MassTracker, arg1: $Vec3_, arg2: $Vec3_): void;
        applyImpulseAtPoint(arg0: $MassData, arg1: $Vector3dc, arg2: $Vector3dc): void;
        applyImpulseAtPoint(arg0: $ServerSubLevel, arg1: $Vector3dc, arg2: $Vector3dc): void;
        applyLinearAndAngularImpulse(arg0: $Vector3dc, arg1: $Vector3dc): void;
        applyForces(arg0: $RigidBodyHandle): void;
        applyForceTotal(arg0: $ForceTotal): void;
        applyTorqueImpulse(arg0: $Vector3dc): void;
        getLocalTorque(): $Vector3d;
        applyLinearImpulse(arg0: $Vector3dc): void;
        applyAngularImpulse(arg0: $Vector3dc): void;
        constructor();
        get localForce(): $Vector3d;
        get localTorque(): $Vector3d;
    }
    export class $QueuedForceGroup {
        reset(): void;
        getForceTotal(): $ForceTotal;
        recordPointForce(arg0: $Vector3dc, arg1: $Vector3dc): void;
        getRecordedPointForces(): $List<$QueuedForceGroup$PointForce>;
        applyAndRecordPointForce(arg0: $Vector3dc, arg1: $Vector3dc): void;
        constructor(arg0: $ServerSubLevel);
        get forceTotal(): $ForceTotal;
        get recordedPointForces(): $List<$QueuedForceGroup$PointForce>;
    }
    export class $QueuedForceGroup$PointForce extends $Record {
        force(): $Vector3dc;
        point(): $Vector3dc;
        constructor(point: $Vector3dc, force: $Vector3dc);
    }
    /**
     * Values that may be interpreted as {@link $QueuedForceGroup$PointForce}.
     */
    export type $QueuedForceGroup$PointForce_ = { point?: $Vector3dc, force?: $Vector3dc,  } | [point?: $Vector3dc, force?: $Vector3dc, ];
}
