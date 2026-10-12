import { $Long2ReferenceMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ChunkBuilder, $ChunkJob } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
import { $TextProvider } from "@package/net/caffeinemc/mods/sodium/client/gui/options";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Camera } from "@package/net/minecraft/client";
import { $BlockEntityRenderPredicate_, $BlockEntityRenderPredicate } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
import { $Map_, $Map, $ArrayDeque, $Collection } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $CameraMovement_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";
import { $CameraTransform, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RenderSectionManagerAccessor } from "@package/foundry/veil/forge/mixin/client/perspective/sodium";
import { $SortBehavior_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $RenderSectionManagerAccessor as $RenderSectionManagerAccessor$1 } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $ChunkBuilderMeshingTask, $ChunkBuilderSortingTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
import { $TranslucentData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $RenderSectionExtension } from "@package/foundry/veil/forge/ext";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SortedRenderLists, $ChunkRenderListIterable_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3dc, $Matrix4fc } from "@package/org/joml";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
export * as translucent_sorting from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
export * as lists from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
export * as compile from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
export * as map from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
export * as vertex from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex";
export * as region from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
export * as terrain from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk" {
    export class $RenderSectionManager implements $RenderSectionManagerAccessor, $RenderSectionManagerAccessor$1 {
        update(arg0: $Camera, arg1: $Viewport, arg2: boolean): void;
        destroy(): void;
        getRenderLists(): $SortedRenderLists;
        isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
        markGraphDirty(): void;
        uploadChunks(): void;
        isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
        onChunkAdded(arg0: number, arg1: number): void;
        tickVisibleRenders(): void;
        onChunkRemoved(arg0: number, arg1: number): void;
        cleanupAndFlip(): void;
        scheduleSort(arg0: number, arg1: boolean): void;
        onSectionAdded(arg0: number, arg1: number, arg2: number): void;
        onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
        createRebuildTask(arg0: $RenderSection, arg1: number): $ChunkBuilderMeshingTask;
        createSortTask(arg0: $RenderSection, arg1: number): $ChunkBuilderSortingTask;
        updateChunks(arg0: boolean): void;
        needsUpdate(): boolean;
        renderLayer(arg0: $ChunkRenderMatrices_, arg1: $TerrainRenderPass, arg2: number, arg3: number, arg4: number): void;
        getBuilder(): $ChunkBuilder;
        scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getVisibleChunkCount(): number;
        getTotalSections(): number;
        prepareFrame(arg0: $Vector3dc): void;
        finalizeRenderLists(arg0: $Viewport): void;
        processGFNIMovement(arg0: $CameraMovement_): void;
        beforeSectionUpdates(): void;
        getDebugStrings(): $Collection<string>;
        handler$znl000$veil$isSectionVisible(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getSectionsWithGlobalEntities(): $Collection<$RenderSection>;
        setRenderLists(arg0: $SortedRenderLists): void;
        setTaskLists(arg0: $Map_<$TaskQueueType_, $ArrayDeque<$RenderSection>>): void;
        getChunkRenderer(): $ChunkRenderer;
        getTaskLists(): $Map<$TaskQueueType, $ArrayDeque<$RenderSection>>;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        constructor(arg0: $ClientLevel, arg1: number, arg2: $SortBehavior_, arg3: $CommandList);
        get builder(): $ChunkBuilder;
        get visibleChunkCount(): number;
        get totalSections(): number;
        get debugStrings(): $Collection<string>;
        get sectionsWithGlobalEntities(): $Collection<$RenderSection>;
        get chunkRenderer(): $ChunkRenderer;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
    }
    export class $TaskQueueType extends $Enum<$TaskQueueType> {
        static values(): $TaskQueueType[];
        static valueOf(arg0: string): $TaskQueueType;
        allowsUnlimitedUploadDuration(): boolean;
        queueSizeLimit(): number;
        static ALWAYS_DEFER: $TaskQueueType;
        static ZERO_FRAME_DEFER: $TaskQueueType;
        static ONE_FRAME_DEFER: $TaskQueueType;
        static INITIAL_BUILD: $TaskQueueType;
    }
    /**
     * Values that may be interpreted as {@link $TaskQueueType}.
     */
    export type $TaskQueueType_ = "zero_frame_defer" | "one_frame_defer" | "always_defer" | "initial_build";
    export class $RenderSection implements $RenderSectionExtension {
        "delete"(): void;
        getRegion(): $RenderRegion;
        getFlags(): number;
        getTranslucentData(): $TranslucentData;
        setPendingUpdate(arg0: number, arg1: number): void;
        setTranslucentData(arg0: $TranslucentData): void;
        getAnimatedSprites(): $TextureAtlasSprite[];
        setRunningJob(arg0: $ChunkJob): void;
        setLastUploadFrame(arg0: number): void;
        getRunningJob(): $ChunkJob;
        setAdjacentNode(arg0: number, arg1: $RenderSection): void;
        getPendingUpdate(): number;
        getLastUploadFrame(): number;
        prepareTrigger(arg0: boolean): void;
        clearPendingUpdate(): void;
        getVisibilityData(): number;
        getAdjacentMask(): number;
        veil$markRendered(): void;
        getSectionIndex(): number;
        getCenterY(): number;
        getLastSubmittedFrame(): number;
        setLastMeshResultSize(arg0: number): void;
        setLastSubmittedFrame(arg0: number): void;
        veil$hasNotRendered(): boolean;
        getLastVisibleFrame(): number;
        getLastMeshResultSize(): number;
        getIncomingDirections(): number;
        addIncomingDirections(arg0: number): void;
        veil$addIncomingDirections(arg0: number): void;
        setIncomingDirections(arg0: number): void;
        getPendingUpdateSince(): number;
        setLastVisibleFrame(arg0: number): void;
        setInfo(arg0: $BuiltSectionInfo): boolean;
        getPosition(): $SectionPos;
        getAdjacent(arg0: number): $RenderSection;
        getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
        getSquaredDistance(arg0: $BlockPos_): number;
        getCenterZ(): number;
        getCenterX(): number;
        isDisposed(): boolean;
        getGlobalBlockEntities(): $BlockEntity[];
        getCulledBlockEntities(): $BlockEntity[];
        handler$znm000$veil$getIncomingDirections(arg0: $CallbackInfoReturnable<any>): void;
        getChunkX(): number;
        getChunkZ(): number;
        getOriginY(): number;
        isBuilt(): boolean;
        getOriginX(): number;
        getOriginZ(): number;
        getChunkY(): number;
        adjacentEast: $RenderSection;
        adjacentUp: $RenderSection;
        adjacentWest: $RenderSection;
        adjacentSouth: $RenderSection;
        adjacentDown: $RenderSection;
        adjacentNorth: $RenderSection;
        constructor(arg0: $RenderRegion, arg1: number, arg2: number, arg3: number);
        get region(): $RenderRegion;
        get flags(): number;
        get animatedSprites(): $TextureAtlasSprite[];
        get visibilityData(): number;
        get adjacentMask(): number;
        get sectionIndex(): number;
        get centerY(): number;
        get pendingUpdateSince(): number;
        set info(value: $BuiltSectionInfo);
        get position(): $SectionPos;
        get centerZ(): number;
        get centerX(): number;
        get disposed(): boolean;
        get globalBlockEntities(): $BlockEntity[];
        get culledBlockEntities(): $BlockEntity[];
        get chunkX(): number;
        get chunkZ(): number;
        get originY(): number;
        get built(): boolean;
        get originX(): number;
        get originZ(): number;
        get chunkY(): number;
    }
    export class $ChunkRenderer {
    }
    export interface $ChunkRenderer {
        "delete"(arg0: $CommandList): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $CommandList, arg2: $ChunkRenderListIterable_, arg3: $TerrainRenderPass, arg4: $CameraTransform, arg5: boolean): void;
    }
    export class $DeferMode extends $Enum<$DeferMode> implements $TextProvider {
        static values(): $DeferMode[];
        static valueOf(arg0: string): $DeferMode;
        getLocalizedName(): $Component;
        getImportantRebuildQueueType(): $TaskQueueType;
        static ONE_FRAME: $DeferMode;
        static ALWAYS: $DeferMode;
        static ZERO_FRAMES: $DeferMode;
        get localizedName(): $Component;
        get importantRebuildQueueType(): $TaskQueueType;
    }
    /**
     * Values that may be interpreted as {@link $DeferMode}.
     */
    export type $DeferMode_ = "always" | "one_frame" | "zero_frames";
    export class $ChunkRenderMatrices extends $Record {
        static from(arg0: $PoseStack): $ChunkRenderMatrices;
        projection(): $Matrix4fc;
        modelView(): $Matrix4fc;
        constructor(projection: $Matrix4fc, modelView: $Matrix4fc);
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderMatrices}.
     */
    export type $ChunkRenderMatrices_ = { modelView?: $Matrix4fc, projection?: $Matrix4fc,  } | [modelView?: $Matrix4fc, projection?: $Matrix4fc, ];
    export class $ExtendedBlockEntityType<T extends $BlockEntity> {
        static addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): void;
        static shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: T): boolean;
        static removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): boolean;
    }
    export interface $ExtendedBlockEntityType<T extends $BlockEntity> {
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): boolean;
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<T>[];
    }
}
