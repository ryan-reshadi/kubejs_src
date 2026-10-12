import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $WorldBorderExtension } from "@package/dev/ryanhcode/sable/mixinterface/world_border";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderSetDamagePerBlock(border: $WorldBorder, newAmount: number): void;
        onBorderSetWarningTime(border: $WorldBorder, newDistance: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, newDistance: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, newAmount: number): void;
        onBorderSizeSet(border: $WorldBorder, newAmount: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        constructor(worldBorder: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getSize(): number;
        getCenterZ(): number;
        getCenterX(): number;
        getDamagePerBlock(): number;
        getSizeLerpTime(): number;
        getWarningTime(): number;
        getSafeZone(): number;
        getWarningBlocks(): number;
        getSizeLerpTarget(): number;
        get size(): number;
        get centerZ(): number;
        get centerX(): number;
        get damagePerBlock(): number;
        get sizeLerpTime(): number;
        get warningTime(): number;
        get safeZone(): number;
        get warningBlocks(): number;
        get sizeLerpTarget(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
    }
    export class $WorldBorder implements $WorldBorderExtension {
        getSize(): number;
        tick(): void;
        setSize(damagePerBlock: number): void;
        addListener(listener: $BorderChangeListener): void;
        getMinZ(): number;
        setCenter(x: number, arg1: number): void;
        getMaxZ(): number;
        handler$eka000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        getCollisionShape(): $VoxelShape;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(pos: $Vec3_): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(x: number, arg1: number): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        removeListener(listener: $BorderChangeListener): void;
        getMinX(): number;
        getMaxX(): number;
        getStatus(): $BorderStatus;
        clampToBounds(pos: $Vec3_): $BlockPos;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        getDistanceToBorder(entity: $Entity): number;
        getDistanceToBorder(x: number, arg1: number): number;
        getLerpRemainingTime(): number;
        setAbsoluteMaxSize(size: number): void;
        getCenterZ(): number;
        getCenterX(): number;
        sable$setLevel(arg0: $Level_): void;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        modifyReturnValue$eka000$sable$isWithinBounds(arg0: boolean, arg1: number, arg2: number, arg3: number): boolean;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        setWarningBlocks(size: number): void;
        setDamagePerBlock(damagePerBlock: number): void;
        getWarningTime(): number;
        setWarningTime(size: number): void;
        createSettings(): $WorldBorder$Settings;
        getLerpSpeed(): number;
        getWarningBlocks(): number;
        applySettings(serializer: $WorldBorder$Settings): void;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        getLerpTarget(): number;
        getAbsoluteMaxSize(): number;
        setDamageSafeZone(damagePerBlock: number): void;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get minZ(): number;
        get maxZ(): number;
        get collisionShape(): $VoxelShape;
        get minX(): number;
        get maxX(): number;
        get status(): $BorderStatus;
        get lerpRemainingTime(): number;
        get centerZ(): number;
        get centerX(): number;
        get lerpSpeed(): number;
        get lerpTarget(): number;
    }
}
