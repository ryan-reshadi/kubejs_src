import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/blay09/mods/balm/api/block/entity" {
    export class $BalmBlockEntityBase extends $BlockEntity {
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    /**
     * @deprecated
     */
    export class $CustomRenderBoundingBox {
    }
    export interface $CustomRenderBoundingBox {
        getRenderBoundingBox(): $AABB;
        get renderBoundingBox(): $AABB;
    }
    /**
     * Values that may be interpreted as {@link $CustomRenderBoundingBox}.
     */
    export type $CustomRenderBoundingBox_ = (() => $AABB_);
    export class $OnLoadHandler {
    }
    export interface $OnLoadHandler {
        onLoad(): void;
    }
    /**
     * Values that may be interpreted as {@link $OnLoadHandler}.
     */
    export type $OnLoadHandler_ = (() => void);
}
