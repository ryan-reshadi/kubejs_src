import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $ResourceModelManagerAccessor, $ResourceAtlasSetAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $List, $Map_, $List_, $Collection, $Comparator, $Map, $BitSet } from "@package/java/util";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $ModelBakeryAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SimpleBakedModelAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $BiConsumer_, $Supplier_, $Function_, $Predicate_, $Function } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBakedModelExtension, $ModelStateExtension, $IModelBakerExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $WeightedEntry$Wrapper_ } from "@package/net/minecraft/util/random";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockModel, $ItemModelGenerator, $ItemOverrides, $BakedQuad, $ItemTransforms } from "@package/net/minecraft/client/renderer/block/model";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Transformation, $OctahedralGroup } from "@package/com/mojang/math";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $BakedModelMixin, $FabricBakedModel {
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isGui3d(): boolean;
        isCustomRenderer(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get particleIcon(): $TextureAtlasSprite;
        get gui3d(): boolean;
        get customRenderer(): boolean;
    }
    export class $ModelBakery implements $ModelBakeryAccessor {
        bakeModels(textureGetter: $ModelBakery$TextureGetter_): void;
        getModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        getModelGroups(): $Object2IntMap<$BlockState>;
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        callGetModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        static BLOCK_ENTITY_MARKER: $BlockModel;
        static ITEM_MODEL_GENERATOR: $ItemModelGenerator;
        static NO_PATTERN_SHIELD: $Material;
        static DESTROY_STAGE_COUNT: number;
        static DESTROY_STAGES: $List<$ResourceLocation>;
        static BANNER_BASE: $Material;
        static GENERATION_MARKER: $BlockModel;
        static BREAKING_LOCATIONS: $List<$ResourceLocation>;
        static MISSING_MODEL_LOCATION: $ResourceLocation;
        static DESTROY_TYPES: $List<$RenderType>;
        static MISSING_MODEL_MESH: string;
        static FIRE_1: $Material;
        static LAVA_FLOW: $Material;
        static SHIELD_BASE: $Material;
        static FIRE_0: $Material;
        static WATER_FLOW: $Material;
        static MODEL_LISTER: $FileToIdConverter;
        static WATER_OVERLAY: $Material;
        static MISSING_MODEL_VARIANT: $ModelResourceLocation;
        constructor(blockColors: $BlockColors, profilerFiller: $ProfilerFiller, modelResources: $Map_<$ResourceLocation_, $BlockModel>, blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
        get modelGroups(): $Object2IntMap<$BlockState>;
        get bakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
    }
    export class $UnbakedModel {
    }
    export interface $UnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $BuiltInModel implements $BakedModel {
        getTransforms(): $ItemTransforms;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isGui3d(): boolean;
        isCustomRenderer(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * A null `RenderType` is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
         */
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        isVanillaAdapter(): boolean;
        constructor(itemTransforms: $ItemTransforms, overrides: $ItemOverrides, particleTexture: $TextureAtlasSprite, usesBlockLight: boolean);
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelState {
    }
    export interface $ModelState extends $ModelStateExtension {
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $ResourceModelManagerAccessor {
        close(): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getMissingModel(): $BakedModel;
        requiresRender(oldState: $BlockState_, newState: $BlockState_): boolean;
        updateMaxMipLevel(level: number): void;
        getModel(modelLocation: $ModelResourceLocation_): $BakedModel;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        getBlockModelShaper(): $BlockModelShaper;
        getModelBakery(): $ModelBakery;
        getName(): string;
        getAtlases(): $AtlasSet;
        getMaxMipmapLevels(): number;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        constructor(textureManager: $TextureManager, blockColors: $BlockColors, maxMipmapLevels: number);
        get missingModel(): $BakedModel;
        get blockModelShaper(): $BlockModelShaper;
        get modelBakery(): $ModelBakery;
        get name(): string;
        get atlases(): $AtlasSet;
        get maxMipmapLevels(): number;
    }
    export class $WeightedBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel {
        getTransforms(): $ItemTransforms;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        getQuads(state: $BlockState_ | null, side: $Direction_ | null, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<any>;
        isGui3d(): boolean;
        isCustomRenderer(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        isVanillaAdapter(): boolean;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        constructor(list: $List_<$WeightedEntry$Wrapper_<$BakedModel>>);
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $WeightedBakedModel$Builder {
        add(model: $BakedModel | null, weight: number): $WeightedBakedModel$Builder;
        build(): $BakedModel;
        constructor();
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        getModel(location: $ResourceLocation_): $UnbakedModel;
        /**
         * @deprecated
         */
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
    }
    export class $SimpleBakedModel$Builder {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        build(arg0: $RenderTypeGroup_): $BakedModel;
        item(): $SimpleBakedModel$Builder;
        particle(particleIcon: $TextureAtlasSprite): $SimpleBakedModel$Builder;
        addUnculledFace(quad: $BakedQuad): $SimpleBakedModel$Builder;
        addCulledFace(facing: $Direction_, quad: $BakedQuad): $SimpleBakedModel$Builder;
        handler$fnp000$ferritecore$deduplicate(arg0: $BakedQuad, arg1: $CallbackInfoReturnable<any>): void;
        handler$fnp000$ferritecore$deduplicate(arg0: $Direction_, arg1: $BakedQuad, arg2: $CallbackInfoReturnable<any>): void;
        constructor(blockModel: $BlockModel, overrides: $ItemOverrides, isGui3d: boolean);
        constructor(hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, transforms: $ItemTransforms, overrides: $ItemOverrides);
    }
    export class $MultiPartBakedModel$Builder {
        add(predicate: $Predicate_<$BlockState>, model: $BakedModel): void;
        build(): $BakedModel;
        redirect$fnm000$ferritecore$build(arg0: $List_<any>): $MultiPartBakedModel;
        constructor();
    }
    export class $Material {
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>, withGlint: boolean): $VertexConsumer;
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        atlasLocation(): $ResourceLocation;
        renderType(renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        texture(): $ResourceLocation;
        sprite(): $TextureAtlasSprite;
        static COMPARATOR: $Comparator<$Material>;
        constructor(atlasLocation: $ResourceLocation_, texture: $ResourceLocation_);
    }
    export class $BlockModelRotation extends $Enum<$BlockModelRotation> implements $ModelState {
        static values(): $BlockModelRotation[];
        static valueOf(arg0: string): $BlockModelRotation;
        static by(x: number, y: number): $BlockModelRotation;
        getRotation(): $Transformation;
        actualRotation(): $OctahedralGroup;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        isUvLocked(): boolean;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        mayApplyArbitraryRotation(): boolean;
        static X90_Y0: $BlockModelRotation;
        static X0_Y180: $BlockModelRotation;
        static X0_Y270: $BlockModelRotation;
        static X180_Y270: $BlockModelRotation;
        static X180_Y0: $BlockModelRotation;
        static X270_Y90: $BlockModelRotation;
        static X0_Y0: $BlockModelRotation;
        static X0_Y90: $BlockModelRotation;
        static X90_Y270: $BlockModelRotation;
        static X90_Y180: $BlockModelRotation;
        static X180_Y180: $BlockModelRotation;
        static X270_Y0: $BlockModelRotation;
        static X270_Y180: $BlockModelRotation;
        static X90_Y90: $BlockModelRotation;
        static X270_Y270: $BlockModelRotation;
        static X180_Y90: $BlockModelRotation;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelRotation}.
     */
    export type $BlockModelRotation_ = "x0_y0" | "x0_y90" | "x0_y180" | "x0_y270" | "x90_y0" | "x90_y90" | "x90_y180" | "x90_y270" | "x180_y0" | "x180_y90" | "x180_y180" | "x180_y270" | "x270_y0" | "x270_y90" | "x270_y180" | "x270_y270";
    export class $AtlasSet$StitchResult {
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        upload(): void;
        missing(): $TextureAtlasSprite;
        readyForUpload(): $CompletableFuture<void>;
        constructor(atlas: $TextureAtlas, preperations: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedJson}.
     */
    export type $BlockStateModelLoader$LoadedJson_ = { data?: $JsonElement_, source?: string,  } | [data?: $JsonElement_, source?: string, ];
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(modelLocation: $ModelResourceLocation_, material: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        close(): void;
        atlas(): $TextureAtlas;
        atlasInfoLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AtlasSet$AtlasEntry}.
     */
    export type $AtlasSet$AtlasEntry_ = { atlasInfoLocation?: $ResourceLocation_, atlas?: $TextureAtlas,  } | [atlasInfoLocation?: $ResourceLocation_, atlas?: $TextureAtlas, ];
    export class $SimpleBakedModel implements $BakedModel, $SimpleBakedModelAccessor {
        getTransforms(): $ItemTransforms;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isGui3d(): boolean;
        isCustomRenderer(): boolean;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * A null `RenderType` is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
         */
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        isVanillaAdapter(): boolean;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        /**
         * @deprecated
         */
        constructor(unculledFaces: $List_<$BakedQuad>, culledFaces: $Map_<$Direction_, $List_<$BakedQuad>>, hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, particleIcon: $TextureAtlasSprite, transforms: $ItemTransforms, overrides: $ItemOverrides);
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides, arg8: $RenderTypeGroup_);
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get vanillaAdapter(): boolean;
        get blockRenderTypes(): $ChunkRenderTypeSet;
    }
    export class $ModelManager$ReloadState extends $Record {
        modelBakery(): $ModelBakery;
        atlasPreparations(): $Map<$ResourceLocation, $AtlasSet$StitchResult>;
        readyForUpload(): $CompletableFuture<void>;
        missingModel(): $BakedModel;
        modelCache(): $Map<$BlockState, $BakedModel>;
    }
    /**
     * Values that may be interpreted as {@link $ModelManager$ReloadState}.
     */
    export type $ModelManager$ReloadState_ = { atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload?: $CompletableFuture<void>, modelBakery?: $ModelBakery, missingModel?: $BakedModel, modelCache?: $Map_<$BlockState_, $BakedModel>,  } | [atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload?: $CompletableFuture<void>, modelBakery?: $ModelBakery, missingModel?: $BakedModel, modelCache?: $Map_<$BlockState_, $BakedModel>, ];
    export class $BlockStateModelLoader {
        loadAllBlockStates(): void;
        getModelGroups(): $Object2IntMap<$BlockState>;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, profiler: $ProfilerFiller, missingModel: $UnbakedModel, blockColors: $BlockColors, discoveredModelOutput: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $BlockStateModelLoader$LoadedModel extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedModel}.
     */
    export type $BlockStateModelLoader$LoadedModel_ = { model?: $UnbakedModel, key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>,  } | [model?: $UnbakedModel, key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, ];
    export class $MultiPartBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel {
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        redirect$fnn000$ferritecore$redirectCacheGet(arg0: $Map_<any, any>, arg1: $Object): $Object;
        redirect$fnn000$ferritecore$redirectCachePut(arg0: $Map_<any, any>, arg1: $Object, arg2: $Object): $Object;
        getQuads(state: $BlockState_ | null, side: $Direction_ | null, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<any>;
        isGui3d(): boolean;
        isCustomRenderer(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        isVanillaAdapter(): boolean;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        getSelectors(arg0: $BlockState_ | null): $BitSet;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        constructor(selectors: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>);
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get customRenderer(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelBakery$BakedCacheKey extends $Record {
        id(): $ResourceLocation;
        transformation(): $Transformation;
        isUvLocked(): boolean;
        constructor(id: $ResourceLocation_, transformation: $Transformation, isUvLocked: boolean);
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$BakedCacheKey}.
     */
    export type $ModelBakery$BakedCacheKey_ = { transformation?: $Transformation, isUvLocked?: boolean, id?: $ResourceLocation_,  } | [transformation?: $Transformation, isUvLocked?: boolean, id?: $ResourceLocation_, ];
    export class $BlockStateModelLoader$ModelGroupKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$ModelGroupKey}.
     */
    export type $BlockStateModelLoader$ModelGroupKey_ = { coloringValues?: $List_<$Object>, models?: $List_<$UnbakedModel>,  } | [coloringValues?: $List_<$Object>, models?: $List_<$UnbakedModel>, ];
    export class $BlockStateModelLoader$BlockStateDefinitionException extends $RuntimeException {
    }
    export class $ModelResourceLocation extends $Record {
        id(): $ResourceLocation;
        static standalone(id: $ResourceLocation_): $ModelResourceLocation;
        getVariant(): string;
        variant(): string;
        static vanilla(path: string, variant: string): $ModelResourceLocation;
        static inventory(id: $ResourceLocation_): $ModelResourceLocation;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    /**
     * Values that may be interpreted as {@link $ModelResourceLocation}.
     */
    export type $ModelResourceLocation_ = { variant?: string, id?: $ResourceLocation_,  } | [variant?: string, id?: $ResourceLocation_, ];
    export class $ModelBakery$ModelBakerImpl implements $ModelBaker {
        bakeUncached(model: $UnbakedModel, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getTopLevelModel(location: $ModelResourceLocation_): $UnbakedModel;
        getModel(location: $ResourceLocation_): $UnbakedModel;
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
        bake(location: $ResourceLocation_, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        constructor(textureGetter: $ModelBakery, modelLocation: $ModelBakery$TextureGetter_, arg2: $ModelResourceLocation_);
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    export class $AtlasSet implements $AutoCloseable, $ResourceAtlasSetAccessor {
        close(): void;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        scheduleLoad(resourceManager: $ResourceManager, mipLevel: number, executor: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        getAtlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
        constructor(atlasMap: $Map_<$ResourceLocation_, $ResourceLocation_>, textureManager: $TextureManager);
        get atlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
    }
}
