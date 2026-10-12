import { $ConditionalBoolean_, $ConditionalInt_, $ConditionalBoolean, $ConditionalInt } from "@package/net/jadenxgamer/elysium_api/impl/util";
import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $PushReaction } from "@package/net/minecraft/world/level/material";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable$StringRepresentableCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/block/properties_transformer" {
    export class $BlockPropertiesTransformer$ConditionalProperties extends $Record {
        isViewBlocking(): ($ConditionalBoolean) | undefined;
        emissiveRendering(): ($ConditionalBoolean) | undefined;
        hasPostProcess(): ($ConditionalBoolean) | undefined;
        isValidSpawn(): ($ConditionalBoolean) | undefined;
        lightEmission(): ($ConditionalInt) | undefined;
        isSuffocating(): ($ConditionalBoolean) | undefined;
        isRedstoneConductor(): ($ConditionalBoolean) | undefined;
        static CODEC: $Codec<$BlockPropertiesTransformer$ConditionalProperties>;
        constructor(lightEmission: ($ConditionalInt_) | undefined, isValidSpawn: ($ConditionalBoolean_) | undefined, isRedstoneConductor: ($ConditionalBoolean_) | undefined, isSuffocating: ($ConditionalBoolean_) | undefined, isViewBlocking: ($ConditionalBoolean_) | undefined, hasPostProcess: ($ConditionalBoolean_) | undefined, emissiveRendering: ($ConditionalBoolean_) | undefined);
        get viewBlocking(): ($ConditionalBoolean) | undefined;
        get validSpawn(): ($ConditionalBoolean) | undefined;
        get suffocating(): ($ConditionalBoolean) | undefined;
        get redstoneConductor(): ($ConditionalBoolean) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $BlockPropertiesTransformer$ConditionalProperties}.
     */
    export type $BlockPropertiesTransformer$ConditionalProperties_ = { isValidSpawn?: ($ConditionalBoolean_) | undefined, lightEmission?: ($ConditionalInt_) | undefined, emissiveRendering?: ($ConditionalBoolean_) | undefined, hasPostProcess?: ($ConditionalBoolean_) | undefined, isRedstoneConductor?: ($ConditionalBoolean_) | undefined, isViewBlocking?: ($ConditionalBoolean_) | undefined, isSuffocating?: ($ConditionalBoolean_) | undefined,  } | [isValidSpawn?: ($ConditionalBoolean_) | undefined, lightEmission?: ($ConditionalInt_) | undefined, emissiveRendering?: ($ConditionalBoolean_) | undefined, hasPostProcess?: ($ConditionalBoolean_) | undefined, isRedstoneConductor?: ($ConditionalBoolean_) | undefined, isViewBlocking?: ($ConditionalBoolean_) | undefined, isSuffocating?: ($ConditionalBoolean_) | undefined, ];
    export interface $BlockPropertiesTransformer extends RegistryMarked<RegistryTypes.ElysiumApiBlockPropertiesTransformerTag, RegistryTypes.ElysiumApiBlockPropertiesTransformer> {}
    export class $BlockPropertiesTransformer$BasicProperties extends $Record {
        pushReaction(): ($PushReactionEnum) | undefined;
        ignitedByLava(): (boolean) | undefined;
        destroySpeed(): (number) | undefined;
        explosionResistance(): (number) | undefined;
        requiresCorrectToolForDrops(): (boolean) | undefined;
        speedFactor(): (number) | undefined;
        isAir(): (boolean) | undefined;
        spawnTerrainParticles(): (boolean) | undefined;
        friction(): (number) | undefined;
        jumpFactor(): (number) | undefined;
        canOcclude(): (boolean) | undefined;
        randomTicking(): (boolean) | undefined;
        canBeReplaced(): (boolean) | undefined;
        static CODEC: $Codec<$BlockPropertiesTransformer$BasicProperties>;
        constructor(destroySpeed: (number) | undefined, explosionResistance: (number) | undefined, requiresCorrectToolForDrops: (boolean) | undefined, randomTicking: (boolean) | undefined, friction: (number) | undefined, speedFactor: (number) | undefined, jumpFactor: (number) | undefined, canOcclude: (boolean) | undefined, isAir: (boolean) | undefined, ignitedByLava: (boolean) | undefined, pushReaction: ($PushReactionEnum_) | undefined, spawnTerrainParticles: (boolean) | undefined, canBeReplaced: (boolean) | undefined);
        get air(): (boolean) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $BlockPropertiesTransformer$BasicProperties}.
     */
    export type $BlockPropertiesTransformer$BasicProperties_ = { destroySpeed?: (number) | undefined, randomTicking?: (boolean) | undefined, speedFactor?: (number) | undefined, requiresCorrectToolForDrops?: (boolean) | undefined, friction?: (number) | undefined, canOcclude?: (boolean) | undefined, pushReaction?: ($PushReactionEnum_) | undefined, canBeReplaced?: (boolean) | undefined, explosionResistance?: (number) | undefined, jumpFactor?: (number) | undefined, isAir?: (boolean) | undefined, ignitedByLava?: (boolean) | undefined, spawnTerrainParticles?: (boolean) | undefined,  } | [destroySpeed?: (number) | undefined, randomTicking?: (boolean) | undefined, speedFactor?: (number) | undefined, requiresCorrectToolForDrops?: (boolean) | undefined, friction?: (number) | undefined, canOcclude?: (boolean) | undefined, pushReaction?: ($PushReactionEnum_) | undefined, canBeReplaced?: (boolean) | undefined, explosionResistance?: (number) | undefined, jumpFactor?: (number) | undefined, isAir?: (boolean) | undefined, ignitedByLava?: (boolean) | undefined, spawnTerrainParticles?: (boolean) | undefined, ];
    export class $BlockPropertiesTransformer extends $Record {
        blocks(): $HolderSet<$Block>;
        conditionalProperties(): $BlockPropertiesTransformer$ConditionalProperties;
        baseProperties(): $BlockPropertiesTransformer$BasicProperties;
        static CODEC: $Codec<$BlockPropertiesTransformer>;
        constructor(blocks: $HolderSet_<$Block>, baseProperties: $BlockPropertiesTransformer$BasicProperties_, conditionalProperties: $BlockPropertiesTransformer$ConditionalProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BlockPropertiesTransformer}.
     */
    export type $BlockPropertiesTransformer_ = RegistryTypes.ElysiumApiBlockPropertiesTransformer | { blocks?: $HolderSet_<$Block>, conditionalProperties?: $BlockPropertiesTransformer$ConditionalProperties_, baseProperties?: $BlockPropertiesTransformer$BasicProperties_,  } | [blocks?: $HolderSet_<$Block>, conditionalProperties?: $BlockPropertiesTransformer$ConditionalProperties_, baseProperties?: $BlockPropertiesTransformer$BasicProperties_, ];
    export class $PushReactionEnum extends $Enum<$PushReactionEnum> implements $StringRepresentable {
        static values(): $PushReactionEnum[];
        static valueOf(arg0: string): $PushReactionEnum;
        getSerializedName(): string;
        toPushReaction(): $PushReaction;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$StringRepresentableCodec<$PushReactionEnum>;
        static DESTROY: $PushReactionEnum;
        static BLOCK: $PushReactionEnum;
        static PUSH_ONLY: $PushReactionEnum;
        static IGNORE: $PushReactionEnum;
        static NORMAL: $PushReactionEnum;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PushReactionEnum}.
     */
    export type $PushReactionEnum_ = "normal" | "destroy" | "block" | "ignore" | "push_only";
}
