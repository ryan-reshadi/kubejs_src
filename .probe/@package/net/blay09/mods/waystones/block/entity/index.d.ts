import { $ServerLevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Waystone, $WaystoneOrigin_ } from "@package/net/blay09/mods/waystones/api";
import { $OnLoadHandler, $CustomRenderBoundingBox } from "@package/net/blay09/mods/balm/api/block/entity";
import { $List, $Collection } from "@package/java/util";
import { $MenuProvider, $Container } from "@package/net/minecraft/world";
import { $BalmContainerProvider } from "@package/net/blay09/mods/balm/api/container";
import { $HolderLookup$Provider, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $WaystoneTeleportedEntity, $WaystoneImpl } from "@package/net/blay09/mods/waystones/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BalmBlockEntity } from "@package/net/blay09/mods/balm/common";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/blay09/mods/waystones/block/entity" {
    export class $WarpPlateBlockEntity extends $WaystoneBlockEntityBase {
        static tickEntityWarpPlateState(arg0: $Entity, arg1: $WaystoneTeleportedEntity): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        onEntityCollision(arg0: $Entity): void;
        serverTick(): void;
        getShardItem(): $ItemStack;
        getIdleState(): $BlockState;
        setShardItem(arg0: $ItemStack_): void;
        hasPotentialWarpTarget(): boolean;
        attuneShard(): void;
        getEntitiesOnTop(): $List<$Entity>;
        getTargetAttunementStack(): $ItemStack;
        getMaxAttunementTicks(): number;
        isEntityOnTop(arg0: $Entity): boolean;
        markEntityForCooldown(arg0: $Entity): void;
        getTargetWaystone(): ($Waystone) | undefined;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get idleState(): $BlockState;
        get entitiesOnTop(): $List<$Entity>;
        get targetAttunementStack(): $ItemStack;
        get maxAttunementTicks(): number;
        get targetWaystone(): ($Waystone) | undefined;
    }
    export class $WaystoneBlockEntityBase extends $BalmBlockEntity implements $OnLoadHandler, $CustomRenderBoundingBox, $BalmContainerProvider {
        getContainer(): $Container;
        getName(): $Component;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getRenderBoundingBox(): $AABB;
        getWaystone(): $Waystone;
        initializeWaystone(arg0: $ServerLevelAccessor, arg1: $LivingEntity, arg2: $WaystoneOrigin_): void;
        initializeFromBase(arg0: $WaystoneBlockEntityBase): void;
        writeUpdateTag(arg0: $CompoundTag_): void;
        initializeFromExisting(arg0: $ServerLevelAccessor, arg1: $WaystoneImpl, arg2: $ItemStack_): void;
        detachWaystone(): void;
        setSilkTouched(arg0: boolean): void;
        isSilkTouched(): boolean;
        getSelectionMenuProvider(arg0: $ServerPlayer): ($MenuProvider) | undefined;
        uninitializeWaystone(): void;
        getSettingsMenuProvider(arg0: $ServerPlayer): ($MenuProvider) | undefined;
        getModifierMenuProvider(arg0: $ServerPlayer): ($MenuProvider) | undefined;
        getAuxiliaryTargets(): $Collection<$Waystone>;
        applyModifierEffects(arg0: $Entity): void;
        getContainer(arg0: $Direction_): $Container;
        insertItemStacked(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        insertItem(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        dropItems(arg0: $Level_, arg1: $BlockPos_): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get name(): $Component;
        get renderBoundingBox(): $AABB;
        get waystone(): $Waystone;
        get auxiliaryTargets(): $Collection<$Waystone>;
    }
}
