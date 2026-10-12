import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $MultiBufferSource, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Material } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Camera } from "@package/net/minecraft/client";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Map } from "@package/java/util";
import { $SignRendererAccessor } from "@package/net/mehvahdjukaar/amendments/mixins";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AccessorBlockEntityRenderers } from "@package/net/darkhax/bookshelf/common/mixin/access/block";
import { $Model, $SkullModelBase } from "@package/net/minecraft/client/model";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IBlockEntityRendererExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2IntFunction } from "@package/it/unimi/dsi/fastutil/ints";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $DyeColor_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ResolvableProfile_ } from "@package/net/minecraft/world/item/component";
import { $ModelLayerLocation, $EntityModelSet, $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $WoodType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockEntityRenderDispatcherExtension } from "@package/dev/ryanhcode/sable/mixinterface";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SkullBlock$Type, $SkullBlock$Type_, $DoubleBlockCombiner$Combiner } from "@package/net/minecraft/world/level/block";
import { $Font } from "@package/net/minecraft/client/gui";
import { $HitResult, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $SignBlockEntity, $ConduitBlockEntity, $BannerPatternLayers_, $SkullBlockEntity, $BannerBlockEntity, $LecternBlockEntity, $DecoratedPotBlockEntity, $EnchantingTableBlockEntity, $BellBlockEntity, $BrushableBlockEntity, $BlockEntityType, $SignText, $BedBlockEntity, $SpawnerBlockEntity, $CampfireBlockEntity, $TheEndGatewayBlockEntity, $TrialSpawnerBlockEntity, $BlockEntityType_, $BlockEntity, $StructureBlockEntity, $ShulkerBoxBlockEntity, $BeaconBlockEntity, $TheEndPortalBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/client/renderer/blockentity" {
    export class $CampfireRenderer implements $BlockEntityRenderer<$CampfireBlockEntity> {
        render(blockEntity: $CampfireBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRender(blockEntity: $CampfireBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $CampfireBlockEntity): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $CampfireBlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRenderers implements $AccessorBlockEntityRenderers {
        static register<T extends $BlockEntity>(type: $BlockEntityType_<T>, renderProvider: $BlockEntityRendererProvider_<T>): void;
        static register$bookshelf_$md$b7e275$0(type: $BlockEntityType_<any>, renderProvider: $BlockEntityRendererProvider_<any>): void;
        static createEntityRenderers(context: $BlockEntityRendererProvider$Context): $Map<$BlockEntityType<never>, $BlockEntityRenderer<never>>;
        static PROVIDERS: $Map<$BlockEntityType<never>, $BlockEntityRendererProvider<never>>;
        constructor();
    }
    export class $TrialSpawnerRenderer implements $BlockEntityRenderer<$TrialSpawnerBlockEntity> {
        render(blockEntity: $TrialSpawnerBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $TrialSpawnerBlockEntity): $AABB;
        shouldRender(blockEntity: $TrialSpawnerBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $TrialSpawnerBlockEntity): boolean;
        getViewDistance(): number;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $HangingSignRenderer extends $SignRenderer {
        handler$ckk000$amendments$renderEnhancedSign(arg0: $SignBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$ckk001$amendments$initEnhancedSign(arg0: $BlockEntityRendererProvider$Context, arg1: $CallbackInfo): void;
        static createHangingSignLayer(): $LayerDefinition;
        constructor(context: $BlockEntityRendererProvider$Context);
    }
    export class $BedRenderer implements $BlockEntityRenderer<$BedBlockEntity> {
        render(blockEntity: $BedBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static createHeadLayer(): $LayerDefinition;
        static createFootLayer(): $LayerDefinition;
        shouldRender(blockEntity: $BedBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $BedBlockEntity): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $BedBlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $SpawnerRenderer implements $BlockEntityRenderer<$SpawnerBlockEntity> {
        render(blockEntity: $SpawnerBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $SpawnerBlockEntity): $AABB;
        static renderEntityInSpawner(partialTick: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, entity: $Entity, entityRenderer: $EntityRenderDispatcher, oSpin: number, arg7: number): void;
        shouldRender(blockEntity: $SpawnerBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $SpawnerBlockEntity): boolean;
        getViewDistance(): number;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $VaultRenderer implements $BlockEntityRenderer<$VaultBlockEntity> {
        render(blockEntity: $VaultBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        static renderItemInside(partialTick: number, level: $Level_, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, item: $ItemStack_, itemRenderer: $ItemRenderer, previousSpin: number, currentSpin: number, random: $RandomSource): void;
        shouldRender(blockEntity: $VaultBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $VaultBlockEntity): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $VaultBlockEntity): $AABB;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BrightnessCombiner<S extends $BlockEntity> implements $DoubleBlockCombiner$Combiner<S, $Int2IntFunction> {
        acceptDouble(first: S, second: S): $Int2IntFunction;
        acceptSingle(single: S): $Int2IntFunction;
        acceptNone(): $Int2IntFunction;
        constructor();
    }
    export class $SkullBlockRenderer implements $BlockEntityRenderer<$SkullBlockEntity> {
        static getRenderType(type: $SkullBlock$Type_, profile: $ResolvableProfile_ | null): $RenderType;
        render(blockEntity: $SkullBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $SkullBlockEntity): $AABB;
        static createSkullRenderers(entityModelSet: $EntityModelSet): $Map<$SkullBlock$Type, $SkullModelBase>;
        static renderSkull(direction: $Direction_ | null, yRot: number, mouthAnimation: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, model: $SkullModelBase, renderType: $RenderType): void;
        shouldRender(blockEntity: $SkullBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $SkullBlockEntity): boolean;
        getViewDistance(): number;
        static SKIN_BY_TYPE: $Map<$SkullBlock$Type, $ResourceLocation>;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BellRenderer implements $BlockEntityRenderer<$BellBlockEntity> {
        render(blockEntity: $BellBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        handler$cki000$amendments$render(arg0: $BellBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        static createBodyLayer(): $LayerDefinition;
        shouldRender(blockEntity: $BellBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $BellBlockEntity): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $BellBlockEntity): $AABB;
        static BELL_RESOURCE_LOCATION: $Material;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $PistonHeadRenderer implements $BlockEntityRenderer<$PistonMovingBlockEntity> {
        render(blockEntity: $PistonMovingBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $PistonMovingBlockEntity): $AABB;
        getViewDistance(): number;
        shouldRender(blockEntity: $PistonMovingBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $PistonMovingBlockEntity): boolean;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $DecoratedPotRenderer implements $BlockEntityRenderer<$DecoratedPotBlockEntity> {
        render(blockEntity: $DecoratedPotBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $DecoratedPotBlockEntity): $AABB;
        static createSidesLayer(): $LayerDefinition;
        static createBaseLayer(): $LayerDefinition;
        shouldRender(blockEntity: $DecoratedPotBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $DecoratedPotBlockEntity): boolean;
        getViewDistance(): number;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRendererProvider$Context {
        bakeLayer(layerLocation: $ModelLayerLocation): $ModelPart;
        getModelSet(): $EntityModelSet;
        getItemRenderer(): $ItemRenderer;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        getFont(): $Font;
        getEntityRenderer(): $EntityRenderDispatcher;
        getBlockRenderDispatcher(): $BlockRenderDispatcher;
        constructor(blockEntityRenderDispatcher: $BlockEntityRenderDispatcher, blockRenderDispatcher: $BlockRenderDispatcher, itemRenderer: $ItemRenderer, entityRenderer: $EntityRenderDispatcher, modelSet: $EntityModelSet, font: $Font);
        get modelSet(): $EntityModelSet;
        get itemRenderer(): $ItemRenderer;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get font(): $Font;
        get entityRenderer(): $EntityRenderDispatcher;
        get blockRenderDispatcher(): $BlockRenderDispatcher;
    }
    export class $BlockEntityRenderDispatcher implements $ResourceManagerReloadListener, $BlockEntityRenderDispatcherExtension {
        prepare(level: $Level_, camera: $Camera, cameraHitResult: $HitResult): void;
        setLevel(level: $Level_ | null): void;
        getRenderer(blockEntity: $BlockEntity): $BlockEntityRenderer<any>;
        render<E extends $BlockEntity>(blockEntity: E, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_): void;
        sable$setCameraPosition(arg0: $Vec3_): void;
        handler$dic000$chloride$render(arg0: $BlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: $CallbackInfo): void;
        modify$enc000$sable$moveCameraPosForCheck(arg0: $Vec3_): $Vec3;
        /**
         * @return `true` if no renderer was found; otherwise `false` if render completed
         */
        renderItem<E extends $BlockEntity>(blockEntity: E, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): boolean;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        cameraHitResult: $HitResult;
        level: $Level;
        camera: $Camera;
        constructor(font: $Font, entityModelSet: $EntityModelSet, blockRenderDispatcher: $Supplier_<$BlockRenderDispatcher>, itemRenderer: $Supplier_<$ItemRenderer>, entityRenderer: $Supplier_<$EntityRenderDispatcher>);
        get name(): string;
    }
    export class $SignRenderer implements $BlockEntityRenderer<$SignBlockEntity>, $SignRendererAccessor {
        render(blockEntity: $SignBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $SignBlockEntity): $AABB;
        static getDarkColor(signText: $SignText): number;
        static createSignModel(entityModelSet: $EntityModelSet, woodType: $WoodType_): $SignRenderer$SignModel;
        static createSignLayer(): $LayerDefinition;
        translateSignText(poseStack: $PoseStack, isFrontText: boolean, offset: $Vec3_): void;
        renderSignText(pos: $BlockPos_, text: $SignText, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, lineHeight: number, maxWidth: number, isFrontText: boolean): void;
        getSignTextRenderScale(): number;
        getSignModelRenderScale(): number;
        shouldRender(blockEntity: $SignBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $SignBlockEntity): boolean;
        getViewDistance(): number;
        invokeGetSignMaterial(woodType: $WoodType_): $Material;
        invokeGetTextOffset(): $Vec3;
        constructor(context: $BlockEntityRendererProvider$Context);
        get signTextRenderScale(): number;
        get signModelRenderScale(): number;
        get viewDistance(): number;
    }
    export class $TheEndGatewayRenderer extends $TheEndPortalRenderer<$TheEndGatewayBlockEntity> {
        render(arg0: $TheEndGatewayBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getRenderBoundingBox(arg0: $TheEndGatewayBlockEntity): $AABB;
        static END_SKY_LOCATION: $ResourceLocation;
        static END_PORTAL_LOCATION: $ResourceLocation;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ShulkerBoxRenderer implements $BlockEntityRenderer<$ShulkerBoxBlockEntity> {
        render(blockEntity: $ShulkerBoxBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $ShulkerBoxBlockEntity): $AABB;
        shouldRender(blockEntity: $ShulkerBoxBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $ShulkerBoxBlockEntity): boolean;
        getViewDistance(): number;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $TheEndPortalRenderer<T extends $TheEndPortalBlockEntity> implements $BlockEntityRenderer<T> {
        render(blockEntity: T, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRender(blockEntity: T, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: T): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: T): $AABB;
        static END_SKY_LOCATION: $ResourceLocation;
        static END_PORTAL_LOCATION: $ResourceLocation;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $ChestRenderer<T extends $BlockEntity> implements $BlockEntityRenderer<T> {
        render(blockEntity: T, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: T): $AABB;
        static createSingleBodyLayer(): $LayerDefinition;
        static createDoubleBodyRightLayer(): $LayerDefinition;
        static createDoubleBodyLeftLayer(): $LayerDefinition;
        shouldRender(blockEntity: T, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: T): boolean;
        getViewDistance(): number;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $StructureBlockRenderer implements $BlockEntityRenderer<$StructureBlockEntity> {
        render(blockEntity: $StructureBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $StructureBlockEntity): $AABB;
        shouldRenderOffScreen(blockEntity: $StructureBlockEntity): boolean;
        getViewDistance(): number;
        shouldRender(blockEntity: $StructureBlockEntity, cameraPos: $Vec3_): boolean;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BeaconRenderer implements $BlockEntityRenderer<$BeaconBlockEntity> {
        shouldRender(blockEntity: $BeaconBlockEntity, cameraPos: $Vec3_): boolean;
        render(blockEntity: $BeaconBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $BeaconBlockEntity): $AABB;
        shouldRenderOffScreen(blockEntity: $BeaconBlockEntity): boolean;
        getViewDistance(): number;
        static renderBeaconBeam(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, beamLocation: $ResourceLocation_, partialTick: number, textureScale: number, gameTime: number, arg6: number, yOffset: number, height: number, color: number, beamRadius: number): void;
        static MAX_RENDER_Y: number;
        static BEAM_LOCATION: $ResourceLocation;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BannerRenderer implements $BlockEntityRenderer<$BannerBlockEntity> {
        render(blockEntity: $BannerBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $BannerBlockEntity): $AABB;
        static createBodyLayer(): $LayerDefinition;
        static renderPatterns(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, packedOverlay: number, flagPart: $ModelPart, flagMaterial: $Material, banner: boolean, baseColor: $DyeColor_, patterns: $BannerPatternLayers_): void;
        static renderPatterns(poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number, packedOverlay: number, flagPart: $ModelPart, flagMaterial: $Material, banner: boolean, baseColor: $DyeColor_, patterns: $BannerPatternLayers_, glint: boolean): void;
        shouldRender(blockEntity: $BannerBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $BannerBlockEntity): boolean;
        getViewDistance(): number;
        bar: $ModelPart;
        flag: $ModelPart;
        static FLAG: string;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $SignRenderer$SignModel extends $Model {
        root: $ModelPart;
        stick: $ModelPart;
        constructor(root: $ModelPart);
    }
    export class $HangingSignRenderer$HangingSignModel extends $Model {
        evaluateVisibleParts(state: $BlockState_): void;
        vChains: $ModelPart;
        root: $ModelPart;
        normalChains: $ModelPart;
        plank: $ModelPart;
        constructor(root: $ModelPart);
    }
    export class $EnchantTableRenderer implements $BlockEntityRenderer<$EnchantingTableBlockEntity> {
        render(blockEntity: $EnchantingTableBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $EnchantingTableBlockEntity): $AABB;
        shouldRender(blockEntity: $EnchantingTableBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $EnchantingTableBlockEntity): boolean;
        getViewDistance(): number;
        static BOOK_LOCATION: $Material;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BrushableBlockRenderer implements $BlockEntityRenderer<$BrushableBlockEntity> {
        render(blockEntity: $BrushableBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $BrushableBlockEntity): $AABB;
        shouldRender(blockEntity: $BrushableBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $BrushableBlockEntity): boolean;
        getViewDistance(): number;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $LecternRenderer implements $BlockEntityRenderer<$LecternBlockEntity> {
        render(blockEntity: $LecternBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $LecternBlockEntity): $AABB;
        shouldRender(blockEntity: $LecternBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $LecternBlockEntity): boolean;
        getViewDistance(): number;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRendererProvider<T extends $BlockEntity> {
    }
    export interface $BlockEntityRendererProvider<T extends $BlockEntity> {
        create(context: $BlockEntityRendererProvider$Context): $BlockEntityRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityRendererProvider}.
     */
    export type $BlockEntityRendererProvider_<T> = ((arg0: $BlockEntityRendererProvider$Context) => $BlockEntityRenderer<T>);
    export class $ConduitRenderer implements $BlockEntityRenderer<$ConduitBlockEntity> {
        render(blockEntity: $ConduitBlockEntity, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        getRenderBoundingBox(arg0: $ConduitBlockEntity): $AABB;
        static createEyeLayer(): $LayerDefinition;
        static createWindLayer(): $LayerDefinition;
        static createShellLayer(): $LayerDefinition;
        static createCageLayer(): $LayerDefinition;
        shouldRender(blockEntity: $ConduitBlockEntity, cameraPos: $Vec3_): boolean;
        shouldRenderOffScreen(blockEntity: $ConduitBlockEntity): boolean;
        getViewDistance(): number;
        static SHELL_TEXTURE: $Material;
        static CLOSED_EYE_TEXTURE: $Material;
        static OPEN_EYE_TEXTURE: $Material;
        static VERTICAL_WIND_TEXTURE: $Material;
        static WIND_TEXTURE: $Material;
        static ACTIVE_SHELL_TEXTURE: $Material;
        constructor(context: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRenderer<T extends $BlockEntity> {
    }
    export interface $BlockEntityRenderer<T extends $BlockEntity> extends $IBlockEntityRendererExtension<T> {
        shouldRender(blockEntity: T, cameraPos: $Vec3_): boolean;
        render(blockEntity: T, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, packedOverlay: number): void;
        shouldRenderOffScreen(blockEntity: T): boolean;
        getViewDistance(): number;
        get viewDistance(): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityRenderer}.
     */
    export type $BlockEntityRenderer_<T> = ((arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: number, arg5: number) => void);
}
