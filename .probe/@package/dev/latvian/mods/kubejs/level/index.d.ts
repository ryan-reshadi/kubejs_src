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
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedBlocks(): $List<$LevelBlock>;
        get affectedEntities(): $EntityArrayList;
    }
    export class $WrappedSpawner extends $Record {
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        entity(): $Entity;
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
        clearCache(): void;
        getLevel(): $Level;
        setBlockState(state: $BlockState_, flags: number): void;
        getEntity(): $BlockEntity;
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        setBlockState(state: $BlockState_): void;
        getLight(): number;
        getEast(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        popItem(item: $ItemStack_): void;
        getUp(): $LevelBlock;
        getWest(): $LevelBlock;
        getNorth(): $LevelBlock;
        getDown(): $LevelBlock;
        getSouth(): $LevelBlock;
        createEntity(type: $EntityType_<never>): $Entity;
        getY(): number;
        getDimension(): $ResourceLocation;
        getEntityData(): $CompoundTag;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getCenterY(): number;
        getZ(): number;
        getX(): number;
        canSeeSkyFromBelowWater(): boolean;
        getBlock(): $Block;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterZ(): number;
        getCenterX(): number;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDimensionKey(): $ResourceKey<$Level>;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        getEntityId(): string;
        getBlockLight(): number;
        mergeEntityData(tag: $CompoundTag_): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        getCanSeeSky(): boolean;
        toBlockStateString(): string;
        getTypeData(): $Map<string, $Object>;
        getKey(): $ResourceKey<$Block>;
        asHolder(): $Holder<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        getId(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Block>>;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get light(): number;
        get east(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get up(): $LevelBlock;
        get west(): $LevelBlock;
        get north(): $LevelBlock;
        get down(): $LevelBlock;
        get south(): $LevelBlock;
        get y(): number;
        get dimension(): $ResourceLocation;
        get centerY(): number;
        get z(): number;
        get x(): number;
        get block(): $Block;
        get centerZ(): number;
        get centerX(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get skyLight(): number;
        get entityId(): string;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get typeData(): $Map<string, $Object>;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get id(): string;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tags(): $List<$ResourceLocation>;
        get tagKeys(): $List<$TagKey<$Block>>;
    }
    export class $ExplosionProperties extends $Record {
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        strength(): (number) | undefined;
        damageSource(): $DamageSource;
        particles(): (boolean) | undefined;
        damageCalculator(): $ExplosionDamageCalculator;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        explosionSound(): $Holder<$SoundEvent>;
        causesFire(): (boolean) | undefined;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        constructor(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_ | null, particles: (boolean) | undefined, smallParticles: $ParticleOptions_ | null, largeParticles: $ParticleOptions_ | null, explosionSound: $Holder_<$SoundEvent> | null);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { particles?: (boolean) | undefined, causesFire?: (boolean) | undefined, mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined, smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_,  } | [particles?: (boolean) | undefined, causesFire?: (boolean) | undefined, mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined, smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
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
        constructor(l: $Level_);
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSWorldEventHandler {
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getLevel(): $Level;
        getItem(): $ItemStack;
        setBlockState(state: $BlockState_): void;
        setBlockState(state: $BlockState_, flags: number): void;
        getLight(): number;
        getEast(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        popItem(item: $ItemStack_): void;
        getUp(): $LevelBlock;
        getWest(): $LevelBlock;
        getNorth(): $LevelBlock;
        getDown(): $LevelBlock;
        getSouth(): $LevelBlock;
        getEntity(): $BlockEntity;
        createEntity(type: $EntityType_<never>): $Entity;
        getY(): number;
        getDimension(): $ResourceLocation;
        getEntityData(): $CompoundTag;
        getBlockState(): $BlockState;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getCenterY(): number;
        getZ(): number;
        getX(): number;
        canSeeSkyFromBelowWater(): boolean;
        getBlock(): $Block;
        explode(properties: $ExplosionProperties_): $Explosion;
        getPos(): $BlockPos;
        getCenterZ(): number;
        getCenterX(): number;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDimensionKey(): $ResourceKey<$Level>;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        getEntityId(): string;
        getBlockLight(): number;
        mergeEntityData(tag: $CompoundTag_): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        getCanSeeSky(): boolean;
        toBlockStateString(): string;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get item(): $ItemStack;
        get light(): number;
        get east(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get up(): $LevelBlock;
        get west(): $LevelBlock;
        get north(): $LevelBlock;
        get down(): $LevelBlock;
        get south(): $LevelBlock;
        get entity(): $BlockEntity;
        get y(): number;
        get dimension(): $ResourceLocation;
        get centerY(): number;
        get z(): number;
        get x(): number;
        get block(): $Block;
        get pos(): $BlockPos;
        get centerZ(): number;
        get centerX(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get skyLight(): number;
        get entityId(): string;
        get blockLight(): number;
        get canSeeSky(): boolean;
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
        getLevel(): $Level;
        getBlock(): $LevelBlock;
        getY(): number;
        getZ(): number;
        getX(): number;
        getPosition(): $Vec3;
        getExploder(): $LivingEntity;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
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
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
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
        constructor(level: $Level_, explosion: $Explosion);
        get level(): $Level;
        get block(): $LevelBlock;
        get y(): number;
        get z(): number;
        get x(): number;
        get position(): $Vec3;
        get exploder(): $LivingEntity;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
