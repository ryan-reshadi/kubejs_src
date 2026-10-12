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
        static forEntity(entity: $ETFEntity): $ETFEntityRenderState;
        static setEtfRenderStateConstructor(reason: string, init: $ETFEntityRenderState$ETFRenderStateInit_): void;
        static NULL: $ETFEntityRenderState;
    }
    export interface $ETFEntityRenderState {
        distanceTo(arg0: $Entity): number;
        blockY(): number;
        world(): $Level;
        entityType(): $EntityType<never>;
        optifineId(): number;
        handItems(): $Iterable<$ItemStack>;
        armorItems(): $Iterable<$ItemStack>;
        velocity(): $Vec3;
        entityKey(): string;
        blockPos(): $BlockPos;
        isPlayer(): boolean;
        /**
         * @deprecated
         */
        entity(): $ETFEntity;
        cacheEntityNBTForState(arg0: $UUID_, arg1: $Supplier_<$CompoundTag>): $CompoundTag;
        nbt(): $CompoundTag;
        activate(inMount: boolean): void;
        deactivate(inMount: boolean): void;
        uuid(): $UUID;
        customName(): $Component;
        scoreboardTeam(): $Team;
        isClientPlayer(): boolean;
        preSubmitActivate(submitData: $ETFSubmitData, vanillaSubmit: $Object): void;
        canRenderBright(): boolean;
        isBlockEntity(): boolean;
        hasCustomName(): boolean;
        itemsEquipped(): $Iterable<$ItemStack>;
        optifineVehicleId(): number;
        /**
         * @deprecated
         */
        pose(): $Pose;
        get player(): boolean;
        get clientPlayer(): boolean;
        get blockEntity(): boolean;
    }
}
