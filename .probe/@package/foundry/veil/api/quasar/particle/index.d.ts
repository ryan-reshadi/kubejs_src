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
        clear(): void;
        init(): void;
        setup(arg0: number): boolean;
        free(): void;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        render(arg0: $List_<$QuasarParticle>, arg1: $Camera): void;
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
        setColor(arg0: $Colorc): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getRenderPosition(): $Vector3dc;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getAlpha(): number;
        isAdditive(): boolean;
        markDirty(): void;
        setAdditive(arg0: boolean): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number, arg4: number): void;
        getRenderType(): $RenderType;
        render(arg0: $QuasarParticle, arg1: number): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        setAlpha(arg0: number): void;
        setGreen(arg0: number): void;
        setRed(arg0: number): void;
        setBlue(arg0: number): void;
        getAgePercent(): number;
        getRenderAge(): number;
        setSpriteData(arg0: $SpriteData_): void;
        getSpriteData(): $SpriteData;
        getAtlasSprite(): $TextureAtlasSprite;
        getRenderRadius(): number;
        getRenderRotation(): $Vector3fc;
        getPackedLight(): number;
        setFixedPackedLight(arg0: number): void;
        getTrails(): $List<$Trail>;
        getFixedPackedLight(): number;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData);
        get renderPosition(): $Vector3dc;
        get renderType(): $RenderType;
        get renderRadius(): number;
        get renderRotation(): $Vector3fc;
        get packedLight(): number;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getAllModules(): $ParticleModule[];
        getCollisionModules(): $CollisionParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getInitModules(): $InitParticleModule[];
        updateEnabled(): void;
        getForceModules(): $ForceParticleModule[];
        getUpdateModules(): $UpdateParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get allModules(): $ParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get initModules(): $InitParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get updateModules(): $UpdateParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        remove(): void;
        init(): void;
        tick(): void;
        getLevel(): $ClientLevel;
        getData(): $QuasarParticleData;
        setAge(arg0: number): void;
        getScheduler(): $TickTaskScheduler;
        getRenderData(): $RenderData;
        onRemove(): void;
        getEmitter(): $ParticleEmitter;
        getSettings(): $ParticleSettings;
        getVelocity(): $Vector3d;
        getBlockPosition(): $BlockPos;
        render(arg0: number): void;
        getBlockStateInOrUnder(): $BlockState;
        getAge(): number;
        isRemoved(): boolean;
        getModules(): $ParticleModuleSet;
        getPosition(): $Vector3d;
        getEnvironment(): $MolangEnvironment;
        getBoundingBox(): $AABB;
        getRandomSource(): $RandomSource;
        getRotation(): $Vector3f;
        getLifetime(): number;
        setRadius(arg0: number): void;
        getRadius(): number;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get scheduler(): $TickTaskScheduler;
        get renderData(): $RenderData;
        get emitter(): $ParticleEmitter;
        get settings(): $ParticleSettings;
        get velocity(): $Vector3d;
        get blockPosition(): $BlockPos;
        get blockStateInOrUnder(): $BlockState;
        get removed(): boolean;
        get modules(): $ParticleModuleSet;
        get position(): $Vector3d;
        get environment(): $MolangEnvironment;
        get boundingBox(): $AABB;
        get randomSource(): $RandomSource;
        get rotation(): $Vector3f;
        get lifetime(): number;
    }
    export class $ParticleEmitter {
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        setParticleSettings(arg0: $ParticleSettings_): void;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        getParticleSettings(): $ParticleSettings;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        addModule(arg0: $ParticleModuleData): void;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        isRemoved(): boolean;
        getModules(): $List<$ParticleModuleData>;
        setCount(arg0: number): void;
        getPosition(): $Vector3d;
        getRegistryName(): $ResourceLocation;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: $Vector3dc): void;
        getRate(): number;
        setLoop(arg0: boolean): void;
        setRate(arg0: number): void;
        setParticleData(arg0: $QuasarParticleData): void;
        setMaxParticles(arg0: number): void;
        setAttachedEntity(arg0: $Entity): void;
        setForceSpawn(arg0: boolean): void;
        static clearErrors(): void;
        getParticleCount(): number;
        getMaxLifetime(): number;
        getAttachedEntity(): $Entity;
        isForceSpawn(): boolean;
        setMaxLifetime(arg0: number): void;
        removeModule(arg0: $ParticleModuleData): void;
        getMaxParticles(): number;
        getParticleData(): $QuasarParticleData;
        addCodeModule(arg0: $CodeModule_): void;
        get data(): $ParticleEmitterData;
        get removed(): boolean;
        get modules(): $List<$ParticleModuleData>;
        get registryName(): $ResourceLocation;
        get particleCount(): number;
    }
    export class $SpriteData extends $Record {
        frameCount(): number;
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        frameTime(): number;
        frameWidth(): number;
        sprite(): $ResourceLocation;
        stretchToLifetime(): boolean;
        frameHeight(): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, frameTime?: number, frameHeight?: number, frameCount?: number,  } | [stretchToLifetime?: boolean, frameWidth?: number, sprite?: $ResourceLocation_, frameTime?: number, frameHeight?: number, frameCount?: number, ];
}
