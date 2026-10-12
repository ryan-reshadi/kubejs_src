import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Enum } from "@package/java/lang";
import { $EMFModelPart } from "@package/traben/entity_model_features/models/parts";

declare module "@package/traben/entity_model_features/models/animation/math/variables" {
    export class $EMFModelOrRenderVariable extends $Enum<$EMFModelOrRenderVariable> {
        static get(id: string): $EMFModelOrRenderVariable;
        static values(): $EMFModelOrRenderVariable[];
        static valueOf(name: string): $EMFModelOrRenderVariable;
        getValue(arg0: $ModelPart): number;
        getValue(): number;
        setValue(arg0: $EMFModelPart, arg1: number): void;
        static getRenderVariable(id: string): $EMFModelOrRenderVariable;
        isBoolean(): boolean;
        isRenderVariable(): boolean;
        static RENDER_FIRE_SCALE: $EMFModelOrRenderVariable;
        static TX: $EMFModelOrRenderVariable;
        static RENDER_SHADOW_OPACITY: $EMFModelOrRenderVariable;
        static TY: $EMFModelOrRenderVariable;
        static TZ: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_X_1: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_X_2: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Z: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Y: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_X: $EMFModelOrRenderVariable;
        static RENDER_FIRE_HEIGHT: $EMFModelOrRenderVariable;
        static RENDER_shadow_size: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Y_2: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Y_3: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Y_4: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Y_3: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Y_4: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Y_1: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Y_2: $EMFModelOrRenderVariable;
        static RENDER_LEASH_X_1: $EMFModelOrRenderVariable;
        static RX: $EMFModelOrRenderVariable;
        static RY: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Y_1: $EMFModelOrRenderVariable;
        static RZ: $EMFModelOrRenderVariable;
        static RENDER_SHADOW_X: $EMFModelOrRenderVariable;
        static VISIBLE: $EMFModelOrRenderVariable;
        static RENDER_SHADOW_Z: $EMFModelOrRenderVariable;
        static VISIBLE_BOXES: $EMFModelOrRenderVariable;
        static SX: $EMFModelOrRenderVariable;
        static SY: $EMFModelOrRenderVariable;
        static SZ: $EMFModelOrRenderVariable;
        static RENDER_FIRE_Z: $EMFModelOrRenderVariable;
        static RENDER_FIRE_X: $EMFModelOrRenderVariable;
        static RENDER_FIRE_Y: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Z_1: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_X_3: $EMFModelOrRenderVariable;
        static RENDER_LEASH_X: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Z_2: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_X_4: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Y: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Z_4: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Z_3: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Z: $EMFModelOrRenderVariable;
        static RENDER_HOLDER_LEASH_Z_4: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Z_2: $EMFModelOrRenderVariable;
        static RENDER_LEASH_X_4: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Z_3: $EMFModelOrRenderVariable;
        static RENDER_LEASH_X_2: $EMFModelOrRenderVariable;
        static RENDER_LEASH_Z_1: $EMFModelOrRenderVariable;
        static RENDER_LEASH_X_3: $EMFModelOrRenderVariable;
        get boolean(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EMFModelOrRenderVariable}.
     */
    export type $EMFModelOrRenderVariable_ = "tx" | "ty" | "tz" | "rx" | "ry" | "rz" | "sx" | "sy" | "sz" | "visible" | "visible_boxes" | "render_shadow_size" | "render_shadow_opacity" | "render_shadow_x" | "render_shadow_z" | "render_leash_x" | "render_leash_y" | "render_leash_z" | "render_leash_x_1" | "render_leash_y_1" | "render_leash_z_1" | "render_leash_x_2" | "render_leash_y_2" | "render_leash_z_2" | "render_leash_x_3" | "render_leash_y_3" | "render_leash_z_3" | "render_leash_x_4" | "render_leash_y_4" | "render_leash_z_4" | "render_holder_leash_x" | "render_holder_leash_y" | "render_holder_leash_z" | "render_holder_leash_x_1" | "render_holder_leash_y_1" | "render_holder_leash_z_1" | "render_holder_leash_x_2" | "render_holder_leash_y_2" | "render_holder_leash_z_2" | "render_holder_leash_x_3" | "render_holder_leash_y_3" | "render_holder_leash_z_3" | "render_holder_leash_x_4" | "render_holder_leash_y_4" | "render_holder_leash_z_4" | "render_fire_x" | "render_fire_y" | "render_fire_z" | "render_fire_scale" | "render_fire_height";
}
