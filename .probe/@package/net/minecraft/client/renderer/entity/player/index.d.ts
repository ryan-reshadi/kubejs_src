import { $LivingEntityRenderer, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Mat4 } from "@package/gg/essential/lib/kotgl/matrix/matrices";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $EssentialModelRenderer } from "@package/gg/essential/cosmetics";
import { $PlayerEntityRendererExt } from "@package/gg/essential/mixins/impl/client/renderer/entity";
import { $PlayerModel, $HumanoidModel$ArmPose } from "@package/net/minecraft/client/model";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Iterable } from "@package/java/lang";
import { $ETFPlayerSkinHolder, $ETFPlayerTexture } from "@package/traben/entity_texture_features/features/player";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/entity/player" {
    export class $PlayerRenderer extends $LivingEntityRenderer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> implements $ETFPlayerSkinHolder, $PlayerEntityRendererExt {
        etf$getETFPlayerTexture(): $ETFPlayerTexture;
        render(entity: $AbstractClientPlayer, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        essential$getTransform(player: $AbstractClientPlayer, yaw: number, partialTicks: number): $Mat4;
        static getArmPose(player: $AbstractClientPlayer, hand: $InteractionHand_): $HumanoidModel$ArmPose;
        essential$getEssentialModelRenderer(): $EssentialModelRenderer;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $AbstractClientPlayer): $ResourceLocation;
        getRenderOffset(entity: $AbstractClientPlayer, partialTicks: number): $Vec3;
        renderRightHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        renderLeftHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        essential$getFeatures(): $Iterable<any>;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        constructor(context: $EntityRendererProvider$Context, useSlimModel: boolean);
    }
}
