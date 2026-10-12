import { $ChunkPos, $ClipContext, $BlockGetter, $ClipBlockStateContext, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Vec3i, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Iterable_, $Object } from "@package/java/lang";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $Vec3_, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/ryanhcode/sable/util" {
    export class $LevelAccelerator implements $BlockGetter {
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        clearCache(): void;
        getBlockState(arg0: $LevelChunk, arg1: $BlockPos_): $BlockState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getHeight(): number;
        getChunk(arg0: number, arg1: number): $LevelChunk;
        getChunk(arg0: $BlockPos_): $LevelChunk;
        getMinBuildHeight(): number;
        isOutsideBuildHeight(arg0: $Vec3i): boolean;
        setBlockFast(arg0: $BlockPos_, arg1: $BlockState_): void;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        static USE_CACHE_MAP: boolean;
        constructor(arg0: $Level_);
        get height(): number;
        get minBuildHeight(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $BoundedBitVolume3i {
        getIndex(arg0: number, arg1: number, arg2: number): number;
        volume(): number;
        static fromBlocks(arg0: $Iterable_<$BlockPos>): $BoundedBitVolume3i;
        getMinBlockPos(): $BlockPos;
        getOccupied(arg0: number, arg1: number, arg2: number): boolean;
        getMaxBlockPos(): $BlockPos;
        isInBounds(arg0: number, arg1: number, arg2: number): boolean;
        ySpan(): number;
        xSpan(): number;
        setOccupied(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        zSpan(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get minBlockPos(): $BlockPos;
        get maxBlockPos(): $BlockPos;
    }
}
