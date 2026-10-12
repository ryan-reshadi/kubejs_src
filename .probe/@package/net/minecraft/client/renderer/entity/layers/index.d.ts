import { $ItemInHandRenderer, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $VillagerMetaDataSection$Hat, $VillagerMetaDataSection$Hat_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $EquipmentSlot_, $LivingEntity, $HumanoidArm_, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $HumanoidArmorLayerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Map, $List, $List_ } from "@package/java/util";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $Cat, $Panda, $Fox, $Sheep, $SnowGolem, $Wolf, $TropicalFish, $Dolphin, $MushroomCow, $IronGolem } from "@package/net/minecraft/world/entity/animal";
import { $Llama, $Horse } from "@package/net/minecraft/world/entity/animal/horse";
import { $EndermanModel, $DrownedModel, $WitherBossModel, $WardenModel, $PlayerModel, $PandaModel, $SlimeModel, $IronGolemModel, $SpiderModel, $LlamaModel, $HorseModel, $CatModel, $CowModel, $FoxModel, $WitchModel, $SheepModel, $SnowGolemModel, $CreeperModel, $Model, $DolphinModel, $EntityModel, $PhantomModel, $HumanoidModel, $ShulkerModel, $WolfModel, $BreezeModel, $ColorableHierarchicalModel } from "@package/net/minecraft/client/model";
import { $DefaultedRegistry, $Holder_ } from "@package/net/minecraft/core";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HumanoidArmorLayerAccess } from "@package/com/bobmowzie/mowziesmobs/mixin/client";
import { $ElytraPoseSupplier, $CapePoseSupplier } from "@package/gg/essential/mixins/impl/client/model";
import { $ArmorTrim } from "@package/net/minecraft/world/item/armortrim";
import { $Pair } from "@package/kotlin";
import { $LivingEntityRenderer, $RenderLayerParent, $EntityRendererProvider$Context, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ArmorMaterial, $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $ModelLayerLocation, $EntityModelSet, $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IUpperPartHelper } from "@package/dev/kosmx/playerAnim/impl";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $PlayerPose$Part } from "@package/gg/essential/model/backend";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Drowned, $Creeper, $Shulker, $Phantom, $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";

declare module "@package/net/minecraft/client/renderer/entity/layers" {
    export class $StuckInBodyLayer<T extends $LivingEntity, M extends $PlayerModel<T>> extends $RenderLayer<T, M> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $LivingEntityRenderer<T, M>);
    }
    export class $IronGolemFlowerLayer extends $RenderLayer<$IronGolem, $IronGolemModel<$IronGolem>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $IronGolem, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$IronGolem, $IronGolemModel<$IronGolem>>, blockRenderer: $BlockRenderDispatcher);
    }
    export class $VillagerProfessionLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getHatData<K>(cache: $Object2ObjectMap<K, $VillagerMetaDataSection$Hat_>, folder: string, villagerTypeRegistry: $DefaultedRegistry<K>, key: K): $VillagerMetaDataSection$Hat;
        constructor(renderer: $RenderLayerParent<T, M>, resourceManager: $ResourceManager, path: string);
    }
    export class $LlamaDecorLayer extends $RenderLayer<$Llama, $LlamaModel<$Llama>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Llama, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Llama, $LlamaModel<$Llama>>, modelSet: $EntityModelSet);
    }
    export class $ArrowLayer<T extends $LivingEntity, M extends $PlayerModel<T>> extends $StuckInBodyLayer<T, M> {
        constructor(context: $EntityRendererProvider$Context, renderer: $LivingEntityRenderer<T, M>);
    }
    export class $PhantomEyesLayer<T extends $Phantom> extends $EyesLayer<T, $PhantomModel<T>> {
        constructor(arg0: $RenderLayerParent<T, $PhantomModel<T>>);
    }
    export class $SlimeOuterLayer<T extends $LivingEntity> extends $RenderLayer<T, $SlimeModel<T>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<T, $SlimeModel<T>>, modelSet: $EntityModelSet);
    }
    export class $BreezeEyesLayer extends $RenderLayer<$Breeze, $BreezeModel<$Breeze>> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Breeze, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<$Breeze, $BreezeModel<$Breeze>>);
    }
    export class $ParrotOnShoulderLayer<T extends $Player> extends $RenderLayer<T, $PlayerModel<T>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<T, $PlayerModel<T>>, modelSet: $EntityModelSet);
    }
    export class $WitchItemLayer<T extends $LivingEntity> extends $CrossedArmsItemLayer<T, $WitchModel<T>> {
        constructor(renderer: $RenderLayerParent<T, $WitchModel<T>>, itemInHandRenderer: $ItemInHandRenderer);
    }
    export class $ItemInHandLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        handler$eaf000$fdlib$renderArmWithItemAfter(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $HumanoidArm_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: $CallbackInfo): void;
        handler$eaf000$fdlib$renderArmWithItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $HumanoidArm_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: $CallbackInfo): void;
        constructor(renderer: $RenderLayerParent<T, M>, itemInHandRenderer: $ItemInHandRenderer);
    }
    export class $DolphinCarryingItemLayer extends $RenderLayer<$Dolphin, $DolphinModel<$Dolphin>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Dolphin, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Dolphin, $DolphinModel<$Dolphin>>, itemInHandRenderer: $ItemInHandRenderer);
    }
    export class $HorseArmorLayer extends $RenderLayer<$Horse, $HorseModel<$Horse>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Horse, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Horse, $HorseModel<$Horse>>, modelSet: $EntityModelSet);
    }
    export class $ShulkerHeadLayer extends $RenderLayer<$Shulker, $ShulkerModel<$Shulker>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Shulker, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Shulker, $ShulkerModel<$Shulker>>);
    }
    export class $SpiderEyesLayer<T extends $Entity, M extends $SpiderModel<T>> extends $EyesLayer<T, M> {
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $SpinAttackEffectLayer<T extends $LivingEntity> extends $RenderLayer<T, $PlayerModel<T>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createLayer(): $LayerDefinition;
        static TEXTURE: $ResourceLocation;
        static BOX: string;
        constructor(renderer: $RenderLayerParent<T, $PlayerModel<T>>, modelSet: $EntityModelSet);
    }
    export class $TropicalFishPatternLayer extends $RenderLayer<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $TropicalFish, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$TropicalFish, $ColorableHierarchicalModel<$TropicalFish>>, modelSet: $EntityModelSet);
    }
    export class $BreezeWindLayer extends $RenderLayer<$Breeze, $BreezeModel<$Breeze>> {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, livingEntity: $Breeze, limbSwing: number, limbSwingAmount: number, partialTick: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(context: $EntityRendererProvider$Context, renderer: $RenderLayerParent<$Breeze, $BreezeModel<$Breeze>>);
    }
    export class $WardenEmissiveLayer<T extends $Warden, M extends $WardenModel<T>> extends $RenderLayer<T, M> {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTick: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<T, M>, texture: $ResourceLocation_, alphaFunction: $WardenEmissiveLayer$AlphaFunction_<T>, drawSelector: $WardenEmissiveLayer$DrawSelector_<T, M>);
    }
    export class $CrossedArmsItemLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<T, M>, itemInHandRenderer: $ItemInHandRenderer);
    }
    export class $HumanoidArmorLayer<T extends $LivingEntity, M extends $HumanoidModel<T>, A extends $HumanoidModel<T>> extends $RenderLayer<T, M> implements $HumanoidArmorLayerAccess, $HumanoidArmorLayerAccessor {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        wrapWithCondition$cgf000$geckolib$wrapArmorPieceRender(arg0: $HumanoidArmorLayer<any, any, any>, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $LivingEntity, arg4: $EquipmentSlot_, arg5: number, arg6: $HumanoidModel<any>, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): boolean;
        static getArmorLocationCache$create_$md$b7e275$0(): $Map<any, any>;
        mowziesmobs$renderTrim(arg0: $Holder_<$ArmorMaterial>, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $ArmorTrim, arg5: $Model, arg6: boolean): void;
        mowziesmobs$renderGlint(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $Model): void;
        create$getOuterModel(): $HumanoidModel<never>;
        create$getInnerModel(): $HumanoidModel<never>;
        create$callSetPartVisibility(model: $HumanoidModel<never>, slot: $EquipmentSlot_): void;
        constructor(renderer: $RenderLayerParent<T, M>, innerModel: A, outerModel: A, modelManager: $ModelManager);
        static get armorLocationCache$create_$md$b7e275$0(): $Map<any, any>;
    }
    export class $EnderEyesLayer<T extends $LivingEntity> extends $EyesLayer<T, $EndermanModel<T>> {
        constructor(arg0: $RenderLayerParent<T, $EndermanModel<T>>);
    }
    export class $PlayerItemInHandLayer<T extends $Player, M extends $EntityModel<T>> extends $ItemInHandLayer<T, M> {
        handler$dpg000$moonlight$poseRightArm(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemDisplayContext_, arg3: $HumanoidArm_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: $CallbackInfo): void;
        constructor(renderer: $RenderLayerParent<T, M>, itemInHandRenderer: $ItemInHandRenderer);
    }
    export class $ElytraLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> implements $ElytraPoseSupplier {
        shouldRender(arg0: $ItemStack_, arg1: T): boolean;
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getElytraTexture(arg0: $ItemStack_, arg1: T): $ResourceLocation;
        getWingsPose(): $Pair<any, any>;
        constructor(renderer: $RenderLayerParent<T, M>, modelSet: $EntityModelSet);
        get wingsPose(): $Pair<any, any>;
    }
    export class $CreeperPowerLayer extends $EnergySwirlLayer<$Creeper, $CreeperModel<$Creeper>> {
        constructor(renderer: $RenderLayerParent<$Creeper, $CreeperModel<$Creeper>>, modelSet: $EntityModelSet);
    }
    export class $DrownedOuterLayer<T extends $Drowned> extends $RenderLayer<T, $DrownedModel<T>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<T, $DrownedModel<T>>, modelSet: $EntityModelSet);
    }
    export class $SnowGolemHeadLayer extends $RenderLayer<$SnowGolem, $SnowGolemModel<$SnowGolem>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $SnowGolem, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$SnowGolem, $SnowGolemModel<$SnowGolem>>, blockRenderer: $BlockRenderDispatcher, itemRenderer: $ItemRenderer);
    }
    export class $WolfArmorLayer extends $RenderLayer<$Wolf, $WolfModel<$Wolf>> {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, livingEntity: $Wolf, limbSwing: number, limbSwingAmount: number, partialTick: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Wolf, $WolfModel<$Wolf>>, models: $EntityModelSet);
    }
    export class $Deadmau5EarsLayer extends $RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $AbstractClientPlayer, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>);
    }
    export class $MushroomCowMushroomLayer<T extends $MushroomCow> extends $RenderLayer<T, $CowModel<T>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<T, $CowModel<T>>, blockRenderer: $BlockRenderDispatcher);
    }
    export class $HorseMarkingLayer extends $RenderLayer<$Horse, $HorseModel<$Horse>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Horse, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Horse, $HorseModel<$Horse>>);
    }
    export class $IronGolemCrackinessLayer extends $RenderLayer<$IronGolem, $IronGolemModel<$IronGolem>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $IronGolem, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$IronGolem, $IronGolemModel<$IronGolem>>);
    }
    export class $PandaHoldsItemLayer extends $RenderLayer<$Panda, $PandaModel<$Panda>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Panda, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Panda, $PandaModel<$Panda>>, itemInHandRenderer: $ItemInHandRenderer);
    }
    export class $EnergySwirlLayer<T extends $Entity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        constructor(renderer: $RenderLayerParent<T, M>);
    }
    export class $BeeStingerLayer<T extends $LivingEntity, M extends $PlayerModel<T>> extends $StuckInBodyLayer<T, M> {
        constructor(renderer: $LivingEntityRenderer<T, M>);
    }
    export class $CapeLayer extends $RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> implements $CapePoseSupplier {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $AbstractClientPlayer, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getCapePose(): $PlayerPose$Part;
        constructor(renderer: $RenderLayerParent<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>);
        get capePose(): $PlayerPose$Part;
    }
    export class $SkeletonClothingLayer<T extends $Mob, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTick: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<T, M>, models: $EntityModelSet, modelLayerLocation: $ModelLayerLocation, clothesLocation: $ResourceLocation_);
    }
    export class $WardenEmissiveLayer$DrawSelector<T extends $Warden, M extends $EntityModel<T>> {
    }
    export interface $WardenEmissiveLayer$DrawSelector<T extends $Warden, M extends $EntityModel<T>> {
        getPartsToDraw(parentModel: M): $List<$ModelPart>;
    }
    /**
     * Values that may be interpreted as {@link $WardenEmissiveLayer$DrawSelector}.
     */
    export type $WardenEmissiveLayer$DrawSelector_<T, M> = ((arg0: M) => $List_<$ModelPart>);
    export class $CustomHeadLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static translateToHead(poseStack: $PoseStack, isVillager: boolean): void;
        constructor(renderer: $RenderLayerParent<T, M>, modelSet: $EntityModelSet, itemInHandRenderer: $ItemInHandRenderer);
        constructor(renderer: $RenderLayerParent<T, M>, modelSet: $EntityModelSet, scaleX: number, scaleY: number, scaleZ: number, itemInHandRenderer: $ItemInHandRenderer);
    }
    export class $CarriedBlockLayer extends $RenderLayer<$EnderMan, $EndermanModel<$EnderMan>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $EnderMan, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$EnderMan, $EndermanModel<$EnderMan>>, blockRenderer: $BlockRenderDispatcher);
    }
    export class $WardenEmissiveLayer$AlphaFunction<T extends $Warden> {
    }
    export interface $WardenEmissiveLayer$AlphaFunction<T extends $Warden> {
        apply(livingEntity: T, partialTick: number, ageInTicks: number): number;
    }
    /**
     * Values that may be interpreted as {@link $WardenEmissiveLayer$AlphaFunction}.
     */
    export type $WardenEmissiveLayer$AlphaFunction_<T> = ((arg0: T, arg1: number, arg2: number) => number);
    export class $SheepFurLayer extends $RenderLayer<$Sheep, $SheepModel<$Sheep>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Sheep, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Sheep, $SheepModel<$Sheep>>, modelSet: $EntityModelSet);
    }
    export class $RenderLayer<T extends $Entity, M extends $EntityModel<T>> implements $IUpperPartHelper {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTick: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getParentModel(): M;
        setUpperPart(bl: boolean): void;
        isUpperPart(): boolean;
        constructor(renderer: $RenderLayerParent<T, M>);
        get parentModel(): M;
    }
    export class $FoxHeldItemLayer extends $RenderLayer<$Fox, $FoxModel<$Fox>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Fox, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Fox, $FoxModel<$Fox>>, itemInHandRenderer: $ItemInHandRenderer);
    }
    export class $WitherArmorLayer extends $EnergySwirlLayer<$WitherBoss, $WitherBossModel<$WitherBoss>> {
        constructor(renderer: $RenderLayerParent<$WitherBoss, $WitherBossModel<$WitherBoss>>, modelSet: $EntityModelSet);
    }
    export class $EyesLayer<T extends $Entity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        renderType(): $RenderType;
        constructor(renderer: $RenderLayerParent<T, M>);
    }
    export class $CatCollarLayer extends $RenderLayer<$Cat, $CatModel<$Cat>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Cat, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        constructor(renderer: $RenderLayerParent<$Cat, $CatModel<$Cat>>, modelSet: $EntityModelSet);
    }
    export class $SaddleLayer<T extends $Entity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        constructor(renderer: $RenderLayerParent<T, M>, model: M, textureLocation: $ResourceLocation_);
    }
    export class $WolfCollarLayer extends $RenderLayer<$Wolf, $WolfModel<$Wolf>> {
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, livingEntity: $Wolf, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getParentModel(): $WolfModel<any>;
        static WOLF_COLLAR_LOCATION: $ResourceLocation;
        constructor(renderer: $RenderLayerParent<$Wolf, $WolfModel<$Wolf>>);
        get parentModel(): $WolfModel<any>;
    }
}
