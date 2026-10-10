import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/mehvahdjukaar/amendments/common/entity" {
    export class $IVisualTransformationProvider {
    }
    export interface $IVisualTransformationProvider {
        amendments$getVisualTransformation(arg0: number): $Matrix4f;
    }
    /**
     * Values that may be interpreted as {@link $IVisualTransformationProvider}.
     */
    export type $IVisualTransformationProvider_ = ((arg0: number) => $Matrix4f);
    export class $IExtinguishableFireball {
    }
    export interface $IExtinguishableFireball {
        amendments$isExtinguished(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IExtinguishableFireball}.
     */
    export type $IExtinguishableFireball_ = (() => boolean);
}
