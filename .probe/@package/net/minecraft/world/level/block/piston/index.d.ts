import { $SignalGetter, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $PistonCooperationState, $ICooperativePistons, $ICarryingMovingPiston } from "@package/net/mehvahdjukaar/supplementaries/common/misc/block_movement";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Set_ } from "@package/java/util";
import { $DirectionProperty, $EnumProperty, $PistonType, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IExtendedPistonTile } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBlockHolder } from "@package/net/mehvahdjukaar/moonlight/api/block";
import { $BaseEntityBlock, $DirectionalBlock } from "@package/net/minecraft/world/level/block";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/piston" {
    export class $PistonBaseBlock extends $DirectionalBlock {
        codec(): $MapCodec<$PistonBaseBlock>;
        /**
         * Checks if the piston can push the given BlockState.
         */
        static isPushable(state: $BlockState_, level: $Level_, pos: $BlockPos_, movementDirection: $Direction_, allowDestroy: boolean, pistonFacing: $Direction_): boolean;
        getNeighborSignal(signalGetter: $SignalGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        static UPDATE_NONE: number;
        isSticky: boolean;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static TRIGGER_EXTEND: number;
        static PLATFORM_THICKNESS: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$PistonBaseBlock>;
        static EXTENDED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static TRIGGER_CONTRACT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static TRIGGER_DROP: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(isSticky: boolean, properties: $BlockBehaviour$Properties);
    }
    export class $PistonMath {
        static getMovementArea(bounds: $AABB_, dir: $Direction_, delta: number): $AABB;
        constructor();
    }
    export class $MovingPistonBlock extends $BaseEntityBlock {
        codec(): $MapCodec<$MovingPistonBlock>;
        static newMovingBlockEntity(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean): $BlockEntity;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$MovingPistonBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$PistonType>;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonHeadBlock extends $DirectionalBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$PistonHeadBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static SHORT: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static PLATFORM: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$PistonType>;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonStructureResolver implements $ICooperativePistons {
        resolve(): boolean;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToPush(): $List<$BlockPos>;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToDestroy(): $List<$BlockPos>;
        getPushDirection(): $Direction;
        supp$setCooperators(arg0: $Set_<any>, arg1: $Direction_, arg2: boolean): void;
        supp$getCooperationState(): $PistonCooperationState;
        static MAX_PUSH_DEPTH: number;
        constructor(level: $Level_, pistonPos: $BlockPos_, pistonDirection: $Direction_, extending: boolean);
        get toPush(): $List<$BlockPos>;
        get toDestroy(): $List<$BlockPos>;
        get pushDirection(): $Direction;
    }
    export class $PistonMovingBlockEntity extends $BlockEntity implements $ICarryingMovingPiston, $IExtendedPistonTile, $IBlockHolder {
        getDirection(): $Direction;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $PistonMovingBlockEntity): void;
        getXOff(progress: number): number;
        getYOff(progress: number): number;
        getZOff(progress: number): number;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        static moveStuckEntities(level: $Level_, pos: $BlockPos_, partialTick: number, piston: $PistonMovingBlockEntity): void;
        handler$dnb000$moonlight$onFinishedShortPulse(arg0: $CallbackInfo): void;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        supp$applyMovedFluid(): void;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        finalTick(): void;
        getMovedState(): $BlockState;
        setHeldBlock(arg0: $BlockState_): boolean;
        /**
         * @return whether this piston is extending
         */
        isExtending(): boolean;
        getProgress(progress: number): number;
        getLastTicked(): number;
        supp$setCarriedBlockEntityNbt(tag: $CompoundTag_): void;
        supp$setMovedFluid(arg0: $FluidState): void;
        /**
         * @return whether this piston is extending
         */
        isSourcePiston(): boolean;
        getHeldBlock(): $BlockState;
        tickMovedBlock(arg0: $Level_, arg1: $BlockPos_): void;
        static moveCollidedEntities(level: $Level_, pos: $BlockPos_, partialTick: number, piston: $PistonMovingBlockEntity): void;
        getMovementDirection(): $Direction;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        supp$getCarriedBlockEntityNbt(): $CompoundTag;
        supp$getOrCreateCachedCarriedBlockEntity(): $BlockEntity;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        supp$restoreCarriedBe(): void;
        progressO: number;
        static TICK_MOVEMENT: number;
        lastTicked: number;
        progress: number;
        static ATTACHMENTS_NBT_KEY: string;
        deathTicks: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get direction(): $Direction;
        get movedState(): $BlockState;
        get extending(): boolean;
        get sourcePiston(): boolean;
        get movementDirection(): $Direction;
    }
}
