import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleModuleData, $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle implements $NativeResource {
        free(): void;
        render(arg0: $List_<$QuasarParticle>, arg1: $Camera): void;
        clear(): void;
        init(): void;
        setup(arg0: number): boolean;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        close(): void;
        static CODEC: $Codec<$RenderStyle>;
        static MIN_PARTICLES: number;
        constructor(arg0: number);
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle;
    export class $RenderData {
        tick(arg0: $QuasarParticle, arg1: number): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        isAdditive(): boolean;
        setAdditive(arg0: boolean): void;
        render(arg0: $QuasarParticle, arg1: number): void;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getAlpha(): number;
        setFixedPackedLight(arg0: number): void;
        setSpriteData(arg0: $SpriteData_): void;
        getRenderAge(): number;
        getRenderRotation(): $Vector3fc;
        getAgePercent(): number;
        getRenderType(): $RenderType;
        markDirty(): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number, arg4: number): void;
        getRenderPosition(): $Vector3dc;
        setAlpha(arg0: number): void;
        getPackedLight(): number;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getRenderRadius(): number;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        getTrails(): $List<$Trail>;
        getFixedPackedLight(): number;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData);
        get renderRotation(): $Vector3fc;
        get renderType(): $RenderType;
        get renderPosition(): $Vector3dc;
        get packedLight(): number;
        get renderRadius(): number;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        updateEnabled(): void;
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getInitModules(): $InitParticleModule[];
        getCollisionModules(): $CollisionParticleModule[];
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        get allModules(): $ParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get initModules(): $InitParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        getSettings(): $ParticleSettings;
        getData(): $QuasarParticleData;
        tick(): void;
        getLevel(): $ClientLevel;
        getAge(): number;
        getScheduler(): $TickTaskScheduler;
        render(arg0: number): void;
        getPosition(): $Vector3d;
        getEnvironment(): $MolangEnvironment;
        getModules(): $ParticleModuleSet;
        remove(): void;
        init(): void;
        isRemoved(): boolean;
        getBoundingBox(): $AABB;
        getRotation(): $Vector3f;
        onRemove(): void;
        getVelocity(): $Vector3d;
        getRenderData(): $RenderData;
        setAge(arg0: number): void;
        getRadius(): number;
        setRadius(arg0: number): void;
        getRandomSource(): $RandomSource;
        getBlockPosition(): $BlockPos;
        getBlockStateInOrUnder(): $BlockState;
        getLifetime(): number;
        getEmitter(): $ParticleEmitter;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get settings(): $ParticleSettings;
        get data(): $QuasarParticleData;
        get level(): $ClientLevel;
        get scheduler(): $TickTaskScheduler;
        get position(): $Vector3d;
        get environment(): $MolangEnvironment;
        get modules(): $ParticleModuleSet;
        get removed(): boolean;
        get boundingBox(): $AABB;
        get rotation(): $Vector3f;
        get velocity(): $Vector3d;
        get renderData(): $RenderData;
        get randomSource(): $RandomSource;
        get blockPosition(): $BlockPos;
        get blockStateInOrUnder(): $BlockState;
        get lifetime(): number;
        get emitter(): $ParticleEmitter;
    }
    export class $ParticleEmitter {
        getData(): $ParticleEmitterData;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        isLoop(): boolean;
        getPosition(): $Vector3d;
        getModules(): $List<$ParticleModuleData>;
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        setCount(arg0: number): void;
        isRemoved(): boolean;
        getRegistryName(): $ResourceLocation;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: $Vec3_): void;
        addModule(arg0: $ParticleModuleData): void;
        addCodeModule(arg0: $CodeModule_): void;
        removeModule(arg0: $ParticleModuleData): void;
        getParticleCount(): number;
        getMaxLifetime(): number;
        getRate(): number;
        getMaxParticles(): number;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        getParticleSettings(): $ParticleSettings;
        isForceSpawn(): boolean;
        getParticleData(): $QuasarParticleData;
        getAttachedEntity(): $Entity;
        setMaxLifetime(arg0: number): void;
        setLoop(arg0: boolean): void;
        setMaxParticles(arg0: number): void;
        setRate(arg0: number): void;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        setParticleSettings(arg0: $ParticleSettings_): void;
        setForceSpawn(arg0: boolean): void;
        setParticleData(arg0: $QuasarParticleData): void;
        setAttachedEntity(arg0: $Entity): void;
        static clearErrors(): void;
        get data(): $ParticleEmitterData;
        get modules(): $List<$ParticleModuleData>;
        get removed(): boolean;
        get registryName(): $ResourceLocation;
        get particleCount(): number;
    }
    export class $SpriteData extends $Record {
        u(arg0: number, arg1: number, arg2: number): number;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        v(arg0: number, arg1: number, arg2: number): number;
        sprite(): $ResourceLocation;
        frameCount(): number;
        frameTime(): number;
        frameWidth(): number;
        frameHeight(): number;
        stretchToLifetime(): boolean;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameWidth?: number, stretchToLifetime?: boolean, frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_,  } | [frameWidth?: number, stretchToLifetime?: boolean, frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_, ];
}
