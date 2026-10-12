import { $Level_ } from "@package/net/minecraft/world/level";
import { $EntityDynamicLightSource } from "@package/dev/lambdaurora/lambdynlights/engine/source";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityDimensions, $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $Entity, $TraceableEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FallingBlockEntityAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID, $UUID_ } from "@package/java/util";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ItemEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessorMixinFallingBlockEntity } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/item" {
    export class $ItemEntity extends $Entity implements $TraceableEntity, $ItemEntityKJS {
        static merge(destinationStack: $ItemStack_, originStack: $ItemStack_, amount: number): $ItemStack;
        copy(): $ItemEntity;
        getTarget(): $UUID;
        setTarget(target: $UUID_ | null): void;
        getOwner(): $Entity;
        /**
         * Gets the item that this entity represents.
         */
        getItem(): $ItemStack;
        getSpin(partialTicks: number): number;
        /**
         * Sets the item that this entity represents.
         */
        setItem(stack: $ItemStack_): void;
        /**
         * Prepares this entity in new dimension by copying NBT data from entity in old dimension
         */
        setThrower(entity: $Entity): void;
        setPickUpDelay(pickupDelay: number): void;
        handler$cbh000$cataclysm$Cmhurt(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getAge(): number;
        readAdditionalSaveData(compound: $CompoundTag_): void;
        addAdditionalSaveData(compound: $CompoundTag_): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        /**
         * Returns `true` if it's possible to attack this entity with an item.
         */
        hasPickUpDelay(): boolean;
        static areMergable(destinationStack: $ItemStack_, originStack: $ItemStack_): boolean;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        makeFakeItem(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNeverPickUp(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setExtendedLifetime(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setUnlimitedLifetime(): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getLifespan(): number;
        setLifespan(pickupDelay: number): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoDespawn(): void;
        setTicksUntilDespawn(pickupDelay: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getTicksUntilDespawn(): number;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setInfinitePickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        lifespan: number;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static EYE_HEIGHT: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static INFINITE_PICKUP_DELAY: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static LIFETIME: number;
        bobOffs: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        pickupDelay: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        age: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$ItemEntity>, level: $Level_);
        constructor(level: $Level_, posX: number, arg2: number, posY: number, arg4: $ItemStack_, posZ: number, arg6: number, itemStack: number);
        constructor(level: $Level_, posX: number, arg2: number, posY: number, arg4: $ItemStack_);
        get owner(): $Entity;
        set thrower(value: $Entity);
        set pickUpDelay(value: number);
    }
    export class $PrimedTnt extends $Entity implements $TraceableEntity, $EntityDynamicLightSource {
        setBlockState(blockState: $BlockState_): void;
        getBlockState(): $BlockState;
        /**
         * Gets the fuse from the data manager
         */
        getFuse(): number;
        setFuse(life: number): void;
        getOwner(): $Entity;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static TAG_FUSE: string;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$PrimedTnt>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number, arg4: $LivingEntity | null);
        get owner(): $Entity;
    }
    export class $FallingBlockEntity extends $Entity implements $FallingBlockEntityAccessor, $AccessorMixinFallingBlockEntity {
        setBlockState(state: $BlockState_): void;
        setStartPos(startPos: $BlockPos_): void;
        getStartPos(): $BlockPos;
        handler$ced000$architectury$handleLand(ci: $CallbackInfo, block: $Block_, blockPos2: $BlockPos_, bl: boolean, bl2: boolean, d: number, blockState: $BlockState_): void;
        static callInit$create_$md$b7e275$0(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $BlockState_): $FallingBlockEntity;
        modify$bgg000$supplementaries$supp$concreteFix(pos: $BlockPos_): $BlockPos;
        getBlockState(): $BlockState;
        callOnBrokenAfterFall(block: $Block_, pos: $BlockPos_): void;
        /**
         * Called to update the entity's position/logic.
         */
        disableDrop(): void;
        setHurtsEntities(fallDamagePerDistance: number, fallDamageMax: number): void;
        static fall(level: $Level_, pos: $BlockPos_, blockState: $BlockState_): $FallingBlockEntity;
        lootr$setBlockState(state: $BlockState_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        cancelDrop: boolean;
        hasImpulse: boolean;
        dropItem: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        blockData: $CompoundTag;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        forceTickAfterTeleportToDuplicate: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        time: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType_<$FallingBlockEntity>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number, arg4: $BlockState_);
    }
}
