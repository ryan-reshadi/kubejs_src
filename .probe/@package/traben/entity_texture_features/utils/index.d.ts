import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RenderType, $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity, $Pose } from "@package/net/minecraft/world/entity";
import { $UUID, $LinkedHashMap } from "@package/java/util";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $ETFTexture } from "@package/traben/entity_texture_features/features/texture_handlers";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Team } from "@package/net/minecraft/world/scores";
import { $Iterable } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/traben/entity_texture_features/utils" {
    export class $ETFLruCache$UUIDInteger extends $ETFLruCache<$UUID, number> {
        constructor();
        constructor(capacity: number);
    }
    export class $ETFRenderLayerWithTexture {
    }
    export interface $ETFRenderLayerWithTexture {
        etf$getId(): ($ResourceLocation) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ETFRenderLayerWithTexture}.
     */
    export type $ETFRenderLayerWithTexture_ = (() => ($ResourceLocation_) | undefined);
    export class $URenderTypeToVertexConsumer {
        getBuffer(type: $RenderType): $VertexConsumer;
        delegate: $MultiBufferSource;
        constructor(delegate: $MultiBufferSource_);
    }
    export class $ETFLruCache<X, Y> extends $LinkedHashMap<X, Y> {
        defaultReturnValue(value: Y): void;
        removeEntryOnly(key: X): void;
        constructor();
        constructor(capacity: number);
    }
    export class $ETFEntity {
    }
    export interface $ETFEntity {
        etf$getOptifineVehicleId(): number;
        etf$getETFRenderState(): $ETFEntityRenderState;
        etf$canBeBright(): boolean;
        etf$isBlockEntity(): boolean;
        etf$getType(): $EntityType<never>;
        etf$getUuid(): $UUID;
        etf$getWorld(): $Level;
        etf$getBlockPos(): $BlockPos;
        etf$getOptifineId(): number;
        etf$getBlockY(): number;
        etf$getNbt(): $CompoundTag;
        etf$hasCustomName(): boolean;
        etf$getCustomName(): $Component;
        etf$getScoreboardTeam(): $Team;
        etf$getItemsEquipped(): $Iterable<$ItemStack>;
        etf$getHandItems(): $Iterable<$ItemStack>;
        etf$getArmorItems(): $Iterable<$ItemStack>;
        etf$distanceTo(arg0: $Entity): number;
        etf$getVelocity(): $Vec3;
        /**
         * @deprecated
         */
        etf$getPose(): $Pose;
        etf$getEntityKey(): string;
    }
    export class $ETFVertexConsumer {
    }
    export interface $ETFVertexConsumer {
        etf$getETFTexture(): $ETFTexture;
        etf$getProvider(): $URenderTypeToVertexConsumer;
        etf$getRenderLayer(): $RenderType;
        etf$initETFVertexConsumer(arg0: $URenderTypeToVertexConsumer, arg1: $RenderType): void;
    }
}
