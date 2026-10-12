import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $SpriteData, $RenderStyle, $RenderStyle_, $SpriteData_ } from "@package/foundry/veil/api/quasar/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleModuleData } from "@package/foundry/veil/api/quasar/data/module";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $EmitterShape_, $EmitterShape } from "@package/foundry/veil/api/quasar/emitters/shape";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Vector3dc, $Vector3fc, $Vector3d, $Vector3f } from "@package/org/joml";
export * as module from "@package/foundry/veil/api/quasar/data/module";

declare module "@package/foundry/veil/api/quasar/data" {
    export class $QuasarParticleData {
        modules(): $List<$Holder<$ParticleModuleData>>;
        additive(): boolean;
        setAdditive(arg0: boolean): void;
        velocityStretchFactor(): number;
        setVelocityStretchFactor(arg0: number): void;
        spriteData(): $SpriteData;
        shouldCollide(): boolean;
        setRenderStyle(arg0: $RenderStyle_): void;
        setSpriteData(arg0: $SpriteData_): void;
        getRegistryId(): $ResourceLocation;
        setFaceVelocity(arg0: boolean): void;
        setShouldCollide(arg0: boolean): void;
        /**
         * @deprecated
         */
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        renderStyle(): $RenderStyle;
        faceVelocity(): boolean;
        static CODEC: $Codec<$Holder<$QuasarParticleData>>;
        static DIRECT_CODEC: $Codec<$QuasarParticleData>;
        constructor(arg0: boolean, arg1: boolean, arg2: number, arg3: $List_<$Holder_<$ParticleModuleData>>, arg4: $SpriteData_, arg5: boolean, arg6: $RenderStyle_);
        get registryId(): $ResourceLocation;
        get allModules(): $List<$Holder<$ParticleModuleData>>;
    }
    export class $EmitterShapeSettings extends $Record {
        dimensions(): $Vector3fc;
        shape(): $EmitterShape;
        rotation(): $Vector3fc;
        getPos(arg0: $RandomSource, arg1: $Vector3dc): $Vector3d;
        getRegistryId(): $ResourceLocation;
        fromSurface(): boolean;
        static CODEC: $Codec<$Holder<$EmitterShapeSettings>>;
        static DIRECT_CODEC: $Codec<$EmitterShapeSettings>;
        constructor(shape: $EmitterShape_, dimensions: $Vector3fc, rotation: $Vector3fc, fromSurface: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $EmitterShapeSettings}.
     */
    export type $EmitterShapeSettings_ = { fromSurface?: boolean, dimensions?: $Vector3fc, rotation?: $Vector3fc, shape?: $EmitterShape_,  } | [fromSurface?: boolean, dimensions?: $Vector3fc, rotation?: $Vector3fc, shape?: $EmitterShape_, ];
    export class $ParticleEmitterData extends $Record {
        particleData(): $QuasarParticleData;
        count(): number;
        loop(): boolean;
        rate(): number;
        maxParticles(): number;
        getRegistryId(): $ResourceLocation;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        maxLifetime(): number;
        emitterSettings(): $EmitterSettings;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEmitterData}.
     */
    export type $ParticleEmitterData_ = { rate?: number, loop?: boolean, particleDataHolder?: $Holder_<$QuasarParticleData>, maxParticles?: number, count?: number, emitterSettings?: $EmitterSettings_, maxLifetime?: number,  } | [rate?: number, loop?: boolean, particleDataHolder?: $Holder_<$QuasarParticleData>, maxParticles?: number, count?: number, emitterSettings?: $EmitterSettings_, maxLifetime?: number, ];
    export class $ParticleSettings extends $Record {
        randomInitialRotation(): boolean;
        particleSizeVariation(): number;
        particleLifetimeVariation(): number;
        randomInitialDirection(): boolean;
        initialDirection(): $Vector3fc;
        initialDirection(arg0: $RandomSource): $Vector3fc;
        randomSize(): boolean;
        getRegistryId(): $ResourceLocation;
        particleSpeed(arg0: $RandomSource): number;
        particleSpeed(): number;
        initialRotation(): $Vector3fc;
        initialRotation(arg0: $RandomSource): $Vector3fc;
        randomSpeed(): boolean;
        randomLifetime(): boolean;
        particleDirection(arg0: $RandomSource): $Vector3f;
        particleLifetime(arg0: $RandomSource): number;
        particleLifetime(): number;
        particleSize(): number;
        particleSize(arg0: $RandomSource): number;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, initialRotation: $Vector3fc, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleSettings}.
     */
    export type $ParticleSettings_ = { particleSize?: number, randomInitialRotation?: boolean, initialRotation?: $Vector3fc, initialDirection?: $Vector3fc, randomSpeed?: boolean, particleLifetimeVariation?: number, randomInitialDirection?: boolean, particleSpeed?: number, particleSizeVariation?: number, randomSize?: boolean, randomLifetime?: boolean, particleLifetime?: number,  } | [particleSize?: number, randomInitialRotation?: boolean, initialRotation?: $Vector3fc, initialDirection?: $Vector3fc, randomSpeed?: boolean, particleLifetimeVariation?: number, randomInitialDirection?: boolean, particleSpeed?: number, particleSizeVariation?: number, randomSize?: boolean, randomLifetime?: boolean, particleLifetime?: number, ];
    export class $EmitterSettings extends $Record {
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        forceSpawn(): boolean;
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        particleSettings(): $ParticleSettings;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EmitterSettings}.
     */
    export type $EmitterSettings_ = { particleSettingsHolder?: $Holder_<$ParticleSettings>, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, forceSpawn?: boolean,  } | [particleSettingsHolder?: $Holder_<$ParticleSettings>, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, forceSpawn?: boolean, ];
}
