import { $Model } from "@package/net/minecraft/client/model";
import { $Holder_ } from "@package/net/minecraft/core";
import { $ArmorMaterial } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ArmorTrim } from "@package/net/minecraft/world/item/armortrim";

declare module "@package/com/bobmowzie/mowziesmobs/mixin/client" {
    export class $HumanoidArmorLayerAccess {
    }
    export interface $HumanoidArmorLayerAccess {
        mowziesmobs$renderTrim(arg0: $Holder_<$ArmorMaterial>, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $ArmorTrim, arg5: $Model, arg6: boolean): void;
        mowziesmobs$renderGlint(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Model): void;
    }
}
