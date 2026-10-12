import { $Camera } from "@package/net/minecraft/client";
import { $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/ace/flight/mixin" {
    export class $IntegratedSailVoxelShapeAccessor {
    }
    export interface $IntegratedSailVoxelShapeAccessor {
        cfc$getDiscreteShape(): $DiscreteVoxelShape;
    }
    /**
     * Values that may be interpreted as {@link $IntegratedSailVoxelShapeAccessor}.
     */
    export type $IntegratedSailVoxelShapeAccessor_ = (() => $DiscreteVoxelShape);
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        createFlightControl$invokeGetFov(arg0: $Camera, arg1: number, arg2: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $GameRendererAccessor}.
     */
    export type $GameRendererAccessor_ = ((arg0: $Camera, arg1: number, arg2: boolean) => number);
}
