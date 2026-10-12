import { $Explosion, $Level$ExplosionInteraction, $Level$ExplosionInteraction_, $Level, $ExplosionDamageCalculator, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockProviderKJS, $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ExplosionEvent$Detonate, $LevelEvent$Unload, $ExplosionEvent$Start, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as ruletest from "@package/dev/latvian/mods/kubejs/level/ruletest";

declare module "@package/dev/latvian/mods/kubejs/level" {
    export class $ExplosionKubeEvent$After extends $ExplosionKubeEvent {
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedBlocks(): $List<$LevelBlock>;
        get affectedEntities(): $EntityArrayList;
    }
    export class $WrappedSpawner extends $Record {
        block(): $LevelBlock;
        entity(): $Entity;
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        isWorldgen(): boolean;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedSpawner}.
     */
    export type $WrappedSpawner_ = { block?: $LevelBlock, entity?: $Entity,  } | [block?: $LevelBlock, entity?: $Entity, ];
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $CachedLevelBlock implements $LevelBlock {
        getLevel(): $Level;
        getEntity(): $BlockEntity;
        clearCache(): void;
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        setBlockState(state: $BlockState_, flags: number): void;
        getY(): number;
        getDimension(): $ResourceLocation;
        getItem(): $ItemStack;
        getCenterX(): number;
        getCenterY(): number;
        createEntity(type: $EntityType_<never>): $Entity;
        getX(): number;
        getZ(): number;
        offset(f: $Direction_): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        explode(properties: $ExplosionProperties_): $Explosion;
        canSeeSkyFromBelowWater(): boolean;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getDimensionKey(): $ResourceKey<$Level>;
        setBlockState(state: $BlockState_): void;
        getCenterZ(): number;
        setEntityData(tag: $CompoundTag_): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getDown(): $LevelBlock;
        getUp(): $LevelBlock;
        getNorth(): $LevelBlock;
        getSouth(): $LevelBlock;
        getWest(): $LevelBlock;
        getEast(): $LevelBlock;
        getEntityId(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getLight(): number;
        getSkyLight(): number;
        getBlockLight(): number;
        getCanSeeSky(): boolean;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItem(item: $ItemStack_): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        getBiomeId(): $ResourceLocation;
        toBlockStateString(): string;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        getTypeData(): $Map<string, $Object>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get y(): number;
        get dimension(): $ResourceLocation;
        get item(): $ItemStack;
        get centerX(): number;
        get centerY(): number;
        get x(): number;
        get z(): number;
        get properties(): $Map<string, string>;
        get block(): $Block;
        get dimensionKey(): $ResourceKey<$Level>;
        get centerZ(): number;
        get down(): $LevelBlock;
        get up(): $LevelBlock;
        get north(): $LevelBlock;
        get south(): $LevelBlock;
        get west(): $LevelBlock;
        get east(): $LevelBlock;
        get entityId(): string;
        get light(): number;
        get skyLight(): number;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get biomeId(): $ResourceLocation;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $ExplosionProperties extends $Record {
        strength(): (number) | undefined;
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        particles(): (boolean) | undefined;
        damageSource(): $DamageSource;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        causesFire(): (boolean) | undefined;
        constructor(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_ | null, particles: (boolean) | undefined, smallParticles: $ParticleOptions_ | null, largeParticles: $ParticleOptions_ | null, explosionSound: $Holder_<$SoundEvent> | null);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity,  } | [mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(l: $Level_);
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSWorldEventHandler {
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        getY(): number;
        getDimension(): $ResourceLocation;
        getItem(): $ItemStack;
        getCenterX(): number;
        getCenterY(): number;
        getLevel(): $Level;
        createEntity(type: $EntityType_<never>): $Entity;
        getEntity(): $BlockEntity;
        getX(): number;
        getZ(): number;
        offset(f: $Direction_): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getBlockState(): $BlockState;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        explode(properties: $ExplosionProperties_): $Explosion;
        canSeeSkyFromBelowWater(): boolean;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getDimensionKey(): $ResourceKey<$Level>;
        getPos(): $BlockPos;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        getCenterZ(): number;
        setEntityData(tag: $CompoundTag_): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getDown(): $LevelBlock;
        getUp(): $LevelBlock;
        getNorth(): $LevelBlock;
        getSouth(): $LevelBlock;
        getWest(): $LevelBlock;
        getEast(): $LevelBlock;
        getEntityId(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getLight(): number;
        getSkyLight(): number;
        getBlockLight(): number;
        getCanSeeSky(): boolean;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItem(item: $ItemStack_): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        getBiomeId(): $ResourceLocation;
        toBlockStateString(): string;
        get y(): number;
        get dimension(): $ResourceLocation;
        get item(): $ItemStack;
        get centerX(): number;
        get centerY(): number;
        get level(): $Level;
        get entity(): $BlockEntity;
        get x(): number;
        get z(): number;
        get properties(): $Map<string, string>;
        get block(): $Block;
        get dimensionKey(): $ResourceKey<$Level>;
        get pos(): $BlockPos;
        get centerZ(): number;
        get down(): $LevelBlock;
        get up(): $LevelBlock;
        get north(): $LevelBlock;
        get south(): $LevelBlock;
        get west(): $LevelBlock;
        get east(): $LevelBlock;
        get entityId(): string;
        get light(): number;
        get skyLight(): number;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get biomeId(): $ResourceLocation;
    }
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        constructor(level: $Level_, explosion: $Explosion);
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getY(): number;
        getLevel(): $Level;
        getPosition(): $Vec3;
        getBlock(): $LevelBlock;
        getX(): number;
        getZ(): number;
        getExploder(): $LivingEntity;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(level: $Level_, explosion: $Explosion);
        get y(): number;
        get level(): $Level;
        get position(): $Vec3;
        get block(): $LevelBlock;
        get x(): number;
        get z(): number;
        get exploder(): $LivingEntity;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
