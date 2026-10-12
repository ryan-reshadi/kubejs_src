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
        setAdditive(arg0: boolean): void;
        additive(): boolean;
        modules(): $List<$Holder<$ParticleModuleData>>;
        shouldCollide(): boolean;
        faceVelocity(): boolean;
        velocityStretchFactor(): number;
        spriteData(): $SpriteData;
        renderStyle(): $RenderStyle;
        getRegistryId(): $ResourceLocation;
        setShouldCollide(arg0: boolean): void;
        setFaceVelocity(arg0: boolean): void;
        setVelocityStretchFactor(arg0: number): void;
        /**
         * @deprecated
         */
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        setSpriteData(arg0: $SpriteData_): void;
        setRenderStyle(arg0: $RenderStyle_): void;
        static CODEC: $Codec<$Holder<$QuasarParticleData>>;
        static DIRECT_CODEC: $Codec<$QuasarParticleData>;
        constructor(arg0: boolean, arg1: boolean, arg2: number, arg3: $List_<$Holder_<$ParticleModuleData>>, arg4: $SpriteData_, arg5: boolean, arg6: $RenderStyle_);
        get registryId(): $ResourceLocation;
        get allModules(): $List<$Holder<$ParticleModuleData>>;
    }
    export class $EmitterShapeSettings extends $Record {
        shape(): $EmitterShape;
        dimensions(): $Vector3fc;
        getRegistryId(): $ResourceLocation;
        rotation(): $Vector3fc;
        getPos(arg0: $RandomSource, arg1: $Vector3dc): $Vector3d;
        fromSurface(): boolean;
        static CODEC: $Codec<$Holder<$EmitterShapeSettings>>;
        static DIRECT_CODEC: $Codec<$EmitterShapeSettings>;
        constructor(shape: $EmitterShape_, dimensions: $Vector3fc, rotation: $Vector3fc, fromSurface: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $EmitterShapeSettings}.
     */
    export type $EmitterShapeSettings_ = { fromSurface?: boolean, shape?: $EmitterShape_, rotation?: $Vector3fc, dimensions?: $Vector3fc,  } | [fromSurface?: boolean, shape?: $EmitterShape_, rotation?: $Vector3fc, dimensions?: $Vector3fc, ];
    export class $ParticleEmitterData extends $Record {
        rate(): number;
        loop(): boolean;
        count(): number;
        getRegistryId(): $ResourceLocation;
        particleData(): $QuasarParticleData;
        maxParticles(): number;
        maxLifetime(): number;
        emitterSettings(): $EmitterSettings;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEmitterData}.
     */
    export type $ParticleEmitterData_ = { loop?: boolean, rate?: number, maxLifetime?: number, emitterSettings?: $EmitterSettings_, count?: number, maxParticles?: number, particleDataHolder?: $Holder_<$QuasarParticleData>,  } | [loop?: boolean, rate?: number, maxLifetime?: number, emitterSettings?: $EmitterSettings_, count?: number, maxParticles?: number, particleDataHolder?: $Holder_<$QuasarParticleData>, ];
    export class $ParticleSettings extends $Record {
        getRegistryId(): $ResourceLocation;
        particleSpeed(): number;
        particleSpeed(arg0: $RandomSource): number;
        particleSize(): number;
        particleSize(arg0: $RandomSource): number;
        particleSizeVariation(): number;
        particleLifetime(): number;
        particleLifetime(arg0: $RandomSource): number;
        particleLifetimeVariation(): number;
        initialDirection(): $Vector3fc;
        initialDirection(arg0: $RandomSource): $Vector3fc;
        randomInitialDirection(): boolean;
        initialRotation(): $Vector3fc;
        initialRotation(arg0: $RandomSource): $Vector3fc;
        randomInitialRotation(): boolean;
        randomSpeed(): boolean;
        randomSize(): boolean;
        randomLifetime(): boolean;
        particleDirection(arg0: $RandomSource): $Vector3f;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, initialRotation: $Vector3fc, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleSettings}.
     */
    export type $ParticleSettings_ = { randomInitialDirection?: boolean, particleLifetimeVariation?: number, randomSpeed?: boolean, initialDirection?: $Vector3fc, initialRotation?: $Vector3fc, randomInitialRotation?: boolean, particleSize?: number, particleLifetime?: number, randomLifetime?: boolean, randomSize?: boolean, particleSizeVariation?: number, particleSpeed?: number,  } | [randomInitialDirection?: boolean, particleLifetimeVariation?: number, randomSpeed?: boolean, initialDirection?: $Vector3fc, initialRotation?: $Vector3fc, randomInitialRotation?: boolean, particleSize?: number, particleLifetime?: number, randomLifetime?: boolean, randomSize?: boolean, particleSizeVariation?: number, particleSpeed?: number, ];
    export class $EmitterSettings extends $Record {
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        forceSpawn(): boolean;
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        particleSettings(): $ParticleSettings;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EmitterSettings}.
     */
    export type $EmitterSettings_ = { forceSpawn?: boolean, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder?: $Holder_<$ParticleSettings>,  } | [forceSpawn?: boolean, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder?: $Holder_<$ParticleSettings>, ];
}
