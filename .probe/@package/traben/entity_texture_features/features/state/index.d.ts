import { $Level } from "@package/net/minecraft/world/level";
import { $Supplier_ } from "@package/java/util/function";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity, $Pose } from "@package/net/minecraft/world/entity";
import { $Team } from "@package/net/minecraft/world/scores";
import { $Object, $Iterable } from "@package/java/lang";
import { $UUID_, $UUID, $Map } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/traben/entity_texture_features/features/state" {
    export class $ETFSubmitData {
        data: $Map<string, $Object>;
        backupState: $ETFEntityRenderState;
        constructor();
    }
    export class $ETFEntityRenderState$ETFRenderStateInit {
    }
    export interface $ETFEntityRenderState$ETFRenderStateInit {
        make(arg0: $ETFEntity): $ETFEntityRenderState;
    }
    /**
     * Values that may be interpreted as {@link $ETFEntityRenderState$ETFRenderStateInit}.
     */
    export type $ETFEntityRenderState$ETFRenderStateInit_ = ((arg0: $ETFEntity) => $ETFEntityRenderState);
    export class $ETFEntityRenderState {
        static setEtfRenderStateConstructor(reason: string, init: $ETFEntityRenderState$ETFRenderStateInit_): void;
        static forEntity(entity: $ETFEntity): $ETFEntityRenderState;
        static NULL: $ETFEntityRenderState;
    }
    export interface $ETFEntityRenderState {
        activate(inMount: boolean): void;
        deactivate(inMount: boolean): void;
        uuid(): $UUID;
        /**
         * @deprecated
         */
        entity(): $ETFEntity;
        customName(): $Component;
        /**
         * @deprecated
         */
        pose(): $Pose;
        nbt(): $CompoundTag;
        world(): $Level;
        canRenderBright(): boolean;
        isBlockEntity(): boolean;
        entityType(): $EntityType<never>;
        blockPos(): $BlockPos;
        optifineId(): number;
        optifineVehicleId(): number;
        blockY(): number;
        hasCustomName(): boolean;
        scoreboardTeam(): $Team;
        itemsEquipped(): $Iterable<$ItemStack>;
        handItems(): $Iterable<$ItemStack>;
        armorItems(): $Iterable<$ItemStack>;
        velocity(): $Vec3;
        entityKey(): string;
        isPlayer(): boolean;
        isClientPlayer(): boolean;
        distanceTo(arg0: $Entity): number;
        cacheEntityNBTForState(arg0: $UUID_, arg1: $Supplier_<$CompoundTag>): $CompoundTag;
        preSubmitActivate(submitData: $ETFSubmitData, vanillaSubmit: $Object): void;
        get blockEntity(): boolean;
        get player(): boolean;
        get clientPlayer(): boolean;
    }
}
