import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $ListTag, $ListTag_ } from "@package/net/minecraft/nbt";
import { $AmbientParticleSettings, $Biome$ClimateSettings, $MobSpawnSettings$Builder, $AmbientAdditionsSettings, $BiomeGenerationSettings$PlainBuilder, $BiomeGenerationSettings, $BiomeSpecialEffects, $BiomeSpecialEffects$Builder, $Biome, $Biome$TemperatureModifier_, $AmbientMoodSettings, $MobSpawnSettings$MobSpawnCost, $Biome$TemperatureModifier, $MobSpawnSettings, $MobSpawnSettings$SpawnerData, $BiomeSpecialEffects$GrassColorModifier, $MobSpawnSettings$MobSpawnCost_, $Biome$ClimateSettings_ } from "@package/net/minecraft/world/level/biome";
import { $EntityType_, $MobCategory_, $EntityType, $MobCategory } from "@package/net/minecraft/world/entity";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ClientboundLevelChunkWithLightPacket } from "@package/net/minecraft/network/protocol/game";
import { $List, $Map_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Predicate_ } from "@package/java/util/function";
import { $AuxiliaryLightManagerMixin } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Holder_, $HolderSet, $HolderSet_, $Holder, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Record } from "@package/java/lang";
import { $Structure$StructureSettings_, $TerrainAdjustment, $Structure$StructureSettings, $StructureSpawnOverride$BoundingBoxType_, $BoundingBox, $TerrainAdjustment_, $StructureSpawnOverride_, $Structure, $StructureSpawnOverride, $StructureSpawnOverride$BoundingBoxType } from "@package/net/minecraft/world/level/levelgen/structure";
import { $GenerationStep$Carving, $GenerationStep$Decoration, $GenerationStep$Decoration_, $GenerationStep$Carving_ } from "@package/net/minecraft/world/level/levelgen";
import { $SodiumAuxiliaryLightManager } from "@package/net/caffeinemc/mods/sodium/client/world";
export * as poi from "@package/net/neoforged/neoforge/common/world/poi";
export * as chunk from "@package/net/neoforged/neoforge/common/world/chunk";

declare module "@package/net/neoforged/neoforge/common/world" {
    export class $BiomeModifiers$AddCarversBiomeModifier extends $Record implements $BiomeModifier {
        step(): $GenerationStep$Carving;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        carvers(): $HolderSet<$ConfiguredWorldCarver<never>>;
        codec(): $MapCodec<$BiomeModifier>;
        constructor(biomes: $HolderSet_<$Biome>, carvers: $HolderSet_<$ConfiguredWorldCarver<never>>, step: $GenerationStep$Carving_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddCarversBiomeModifier}.
     */
    export type $BiomeModifiers$AddCarversBiomeModifier_ = { carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, step?: $GenerationStep$Carving_, biomes?: $HolderSet_<$Biome>,  } | [carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, step?: $GenerationStep$Carving_, biomes?: $HolderSet_<$Biome>, ];
    export class $BiomeModifiers$RemoveSpawnsBiomeModifier extends $Record implements $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        constructor(biomes: $HolderSet_<$Biome>, entityTypes: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveSpawnsBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveSpawnsBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>, ];
    export class $BiomeGenerationSettingsBuilder extends $BiomeGenerationSettings$PlainBuilder {
        getFeatures(stage: $GenerationStep$Decoration_): $List<$Holder<$PlacedFeature>>;
        getCarvers(stage: $GenerationStep$Carving_): $List<$Holder<$ConfiguredWorldCarver<never>>>;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        constructor(orig: $BiomeGenerationSettings);
    }
    export class $LevelChunkAuxiliaryLightManager implements $AuxiliaryLightManager, $INBTSerializable<$ListTag> {
        deserializeNBT(provider: $HolderLookup$Provider, list: $ListTag_): void;
        serializeNBT(provider: $HolderLookup$Provider): $ListTag;
        setLightAt(pos: $BlockPos_, value: number): void;
        getLightAt(pos: $BlockPos_): number;
        sendLightDataTo(chunkPacket: $ClientboundLevelChunkWithLightPacket): $Packet<never>;
        handleLightDataSync(lights: $Map_<$BlockPos_, number>): void;
        /**
         * Remove the light value at the given position
         */
        removeLightAt(pos: $BlockPos_): void;
        static LIGHT_NBT_KEY: string;
        constructor(owner: $LevelChunk);
    }
    export class $BiomeModifiers$RemoveCarversBiomeModifier extends $Record implements $BiomeModifier {
        steps(): $Set<$GenerationStep$Carving>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        carvers(): $HolderSet<$ConfiguredWorldCarver<never>>;
        codec(): $MapCodec<$BiomeModifier>;
        static allSteps(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$ConfiguredWorldCarver<never>>): $BiomeModifiers$RemoveCarversBiomeModifier;
        constructor(biomes: $HolderSet_<$Biome>, carvers: $HolderSet_<$ConfiguredWorldCarver<never>>, steps: $Set_<$GenerationStep$Carving_>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveCarversBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveCarversBiomeModifier_ = { carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, steps?: $Set_<$GenerationStep$Carving_>, biomes?: $HolderSet_<$Biome>,  } | [carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, steps?: $Set_<$GenerationStep$Carving_>, biomes?: $HolderSet_<$Biome>, ];
    export class $MobSpawnSettingsBuilder extends $MobSpawnSettings$Builder {
        getSpawner(type: $MobCategory_): $List<$MobSpawnSettings$SpawnerData>;
        getCost(type: $EntityType_<never>): $MobSpawnSettings$MobSpawnCost;
        getSpawnerTypes(): $Set<$MobCategory>;
        getEntityTypes(): $Set<$EntityType<never>>;
        removeSpawnCost(...arg0: $EntityType_<never>[]): $MobSpawnSettingsBuilder;
        getProbability(): number;
        disablePlayerSpawn(): $MobSpawnSettingsBuilder;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>;
        constructor(orig: $MobSpawnSettings);
        get spawnerTypes(): $Set<$MobCategory>;
        get entityTypes(): $Set<$EntityType<never>>;
        get probability(): number;
    }
    export class $ModifiableStructureInfo$StructureInfo extends $Record {
        structureSettings(): $Structure$StructureSettings;
        constructor(structureSettings: $Structure$StructureSettings_);
    }
    /**
     * Values that may be interpreted as {@link $ModifiableStructureInfo$StructureInfo}.
     */
    export type $ModifiableStructureInfo$StructureInfo_ = { structureSettings?: $Structure$StructureSettings_,  } | [structureSettings?: $Structure$StructureSettings_, ];
    export class $ModifiableBiomeInfo$BiomeInfo$Builder {
        build(): $ModifiableBiomeInfo$BiomeInfo;
        static copyOf(arg0: $ModifiableBiomeInfo$BiomeInfo_): $ModifiableBiomeInfo$BiomeInfo$Builder;
        getGenerationSettings(): $BiomeGenerationSettingsBuilder;
        getClimateSettings(): $ClimateSettingsBuilder;
        getSpecialEffects(): $BiomeSpecialEffectsBuilder;
        getMobSpawnSettings(): $MobSpawnSettingsBuilder;
        get generationSettings(): $BiomeGenerationSettingsBuilder;
        get climateSettings(): $ClimateSettingsBuilder;
        get specialEffects(): $BiomeSpecialEffectsBuilder;
        get mobSpawnSettings(): $MobSpawnSettingsBuilder;
    }
    /**
     * Implement this interface in a `StructurePiece` class extension to modify its `Beardifier` behavior.
     */
    export class $PieceBeardifierModifier {
    }
    export interface $PieceBeardifierModifier {
        getGroundLevelDelta(): number;
        getTerrainAdjustment(): $TerrainAdjustment;
        getBeardifierBox(): $BoundingBox;
        get groundLevelDelta(): number;
        get terrainAdjustment(): $TerrainAdjustment;
        get beardifierBox(): $BoundingBox;
    }
    export class $BiomeModifiers$RemoveSpawnCostsBiomeModifier extends $Record implements $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        constructor(biomes: $HolderSet_<$Biome>, entityTypes: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveSpawnCostsBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveSpawnCostsBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>, ];
    /**
     * Builder for `ClimateSettings`.
     */
    export class $ClimateSettingsBuilder {
        static create(arg0: boolean, arg1: number, arg2: $Biome$TemperatureModifier_, arg3: number): $ClimateSettingsBuilder;
        build(): $Biome$ClimateSettings;
        static copyOf(arg0: $Biome$ClimateSettings_): $ClimateSettingsBuilder;
        /**
         * @return Synced to clients, affects foliage color, freezing, and weather effects
         * Vanilla values are in the range [-0.5, 2.0].
         */
        getTemperature(): number;
        hasPrecipitation(): boolean;
        setTemperature(temperature: number): void;
        setTemperatureModifier(arg0: $Biome$TemperatureModifier_): void;
        setHasPrecipitation(hasPrecipitation: boolean): void;
        setDownfall(temperature: number): void;
        /**
         * @return Synced to clients, affects foliage color, freezing, and weather effects
         * Vanilla values are in the range [-0.5, 2.0].
         */
        getDownfall(): number;
        getTemperatureModifier(): $Biome$TemperatureModifier;
    }
    export class $StructureSettingsBuilder$StructureSpawnOverrideBuilder {
        build(): $StructureSpawnOverride;
        static copyOf(arg0: $StructureSpawnOverride_): $StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        /**
         * Gets the type of bounding box for this structures spawn overrides.
         */
        getBoundingBox(): $StructureSpawnOverride$BoundingBoxType;
        /**
         * Sets the way the structure checks for spawn overrides. Whether it is on a piece by piece basis or within the bounds of the overall structure.
         */
        setBoundingBox(boundingBox: $StructureSpawnOverride$BoundingBoxType_): void;
        /**
         * Adds a spawn to the overrides.
         */
        addSpawn(spawn: $MobSpawnSettings$SpawnerData): void;
        /**
         * Adds a spawn to the overrides.
         */
        removeSpawn(spawn: $MobSpawnSettings$SpawnerData): void;
        /**
         * Unmodifiable view of the possible spawns.
         */
        getSpawns(): $List<$MobSpawnSettings$SpawnerData>;
        removeSpawns(spawnPredicate: $Predicate_<$MobSpawnSettings$SpawnerData>): void;
        get spawns(): $List<$MobSpawnSettings$SpawnerData>;
    }
    /**
     * JSON-serializable structure modifier.
     * Requires a `Codec` to deserialize structure modifiers from structure modifier jsons.
     * 
     * Structure modifier jsons have the following json format:
     * 
     * {
     * "type": "yourmod:yourserializer", // Indicates a registered structure modifier serializer
     * // Additional fields can be specified here according to the codec
     * }
     * 
     * Datapacks can also disable a structure modifier by overriding the json and using `"type": "neoforge:none"`.
     */
    export class $StructureModifier {
        static DIRECT_CODEC: $Codec<$StructureModifier>;
        static LIST_CODEC: $Codec<$HolderSet<$StructureModifier>>;
        static REFERENCE_CODEC: $Codec<$Holder<$StructureModifier>>;
    }
    export interface $StructureModifier {
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        codec(): $MapCodec<$StructureModifier>;
    }
    /**
     * Values that may be interpreted as {@link $StructureModifier}.
     */
    export type $StructureModifier_ = RegistryTypes.NeoforgeStructureModifier;
    export class $StructureModifiers$ClearSpawnsStructureModifier extends $Record implements $StructureModifier {
        categories(): $Set<$MobCategory>;
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        codec(): $MapCodec<$StructureModifier>;
        structures(): $HolderSet<$Structure>;
        constructor(structures: $HolderSet_<$Structure>, categories: $Set_<$MobCategory_>);
    }
    /**
     * Values that may be interpreted as {@link $StructureModifiers$ClearSpawnsStructureModifier}.
     */
    export type $StructureModifiers$ClearSpawnsStructureModifier_ = { categories?: $Set_<$MobCategory_>, structures?: $HolderSet_<$Structure>,  } | [categories?: $Set_<$MobCategory_>, structures?: $HolderSet_<$Structure>, ];
    export class $StructureModifiers {
    }
    export class $BiomeModifier$Phase extends $Enum<$BiomeModifier$Phase> {
        static values(): $BiomeModifier$Phase[];
        static valueOf(arg0: string): $BiomeModifier$Phase;
        static ADD: $BiomeModifier$Phase;
        static MODIFY: $BiomeModifier$Phase;
        static AFTER_EVERYTHING: $BiomeModifier$Phase;
        static REMOVE: $BiomeModifier$Phase;
        static BEFORE_EVERYTHING: $BiomeModifier$Phase;
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifier$Phase}.
     */
    export type $BiomeModifier$Phase_ = "before_everything" | "add" | "remove" | "modify" | "after_everything";
    /**
     * JSON-serializable biome modifier.
     * Requires a `Codec` to deserialize biome modifiers from biome modifier jsons.
     * 
     * Biome modifier jsons have the following json format:
     * 
     * {
     * "type": "yourmod:yourserializer", // Indicates a registered biome modifier serializer
     * // Additional fields can be specified here according to the codec
     * }
     * 
     * Datapacks can also disable a biome modifier by overriding the json and using `"type": "neoforge:none"`.
     */
    export class $BiomeModifier {
        static DIRECT_CODEC: $Codec<$BiomeModifier>;
        static LIST_CODEC: $Codec<$HolderSet<$BiomeModifier>>;
        static REFERENCE_CODEC: $Codec<$Holder<$BiomeModifier>>;
    }
    export interface $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        codec(): $MapCodec<$BiomeModifier>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifier}.
     */
    export type $BiomeModifier_ = RegistryTypes.NeoforgeBiomeModifier;
    export class $StructureModifiers$AddSpawnsStructureModifier extends $Record implements $StructureModifier {
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        codec(): $MapCodec<$StructureModifier>;
        structures(): $HolderSet<$Structure>;
        spawners(): $List<$MobSpawnSettings$SpawnerData>;
        static singleSpawn(arg0: $HolderSet_<$Structure>, arg1: $MobSpawnSettings$SpawnerData): $StructureModifiers$AddSpawnsStructureModifier;
        constructor(structures: $HolderSet_<$Structure>, spawners: $List_<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $StructureModifiers$AddSpawnsStructureModifier}.
     */
    export type $StructureModifiers$AddSpawnsStructureModifier_ = { structures?: $HolderSet_<$Structure>, spawners?: $List_<$MobSpawnSettings$SpawnerData>,  } | [structures?: $HolderSet_<$Structure>, spawners?: $List_<$MobSpawnSettings$SpawnerData>, ];
    export class $StructureSettingsBuilder {
        build(): $Structure$StructureSettings;
        static copyOf(arg0: $Structure$StructureSettings_): $StructureSettingsBuilder;
        getBiomes(): $HolderSet<$Biome>;
        getOrAddSpawnOverrides(arg0: $MobCategory_): $StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        getSpawnOverrides(arg0: $MobCategory_): $StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        /**
         * Removes the spawn overrides for the given mob category.
         */
        removeSpawnOverrides(category: $MobCategory_): void;
        setBiomes(biomes: $HolderSet_<$Biome>): void;
        /**
         * Gets the world generation decoration step the structure spawns during.
         */
        getDecorationStep(): $GenerationStep$Decoration;
        /**
         * Gets the way the structure adapts to the terrain during generation.
         */
        getTerrainAdaptation(): $TerrainAdjustment;
        /**
         * Sets the world generation decoration step the structure spawns during.
         */
        setDecorationStep(step: $GenerationStep$Decoration_): void;
        /**
         * Sets the way the structure adapts to the terrain during generation.
         */
        setTerrainAdaptation(terrainAdaptation: $TerrainAdjustment_): void;
    }
    export class $StructureModifiers$RemoveSpawnsStructureModifier extends $Record implements $StructureModifier {
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        codec(): $MapCodec<$StructureModifier>;
        structures(): $HolderSet<$Structure>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        constructor(structures: $HolderSet_<$Structure>, entityTypes: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $StructureModifiers$RemoveSpawnsStructureModifier}.
     */
    export type $StructureModifiers$RemoveSpawnsStructureModifier_ = { structures?: $HolderSet_<$Structure>, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [structures?: $HolderSet_<$Structure>, entityTypes?: $HolderSet_<$EntityType<never>>, ];
    export class $NoneStructureModifier implements $StructureModifier {
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        codec(): $MapCodec<$StructureModifier>;
        /**
         * @deprecated
         */
        static INSTANCE: $NoneStructureModifier;
        constructor();
    }
    export class $NoneBiomeModifier implements $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        codec(): $MapCodec<$BiomeModifier>;
        /**
         * @deprecated
         */
        static INSTANCE: $NoneBiomeModifier;
        constructor();
    }
    export class $BiomeModifiers$RemoveFeaturesBiomeModifier extends $Record implements $BiomeModifier {
        steps(): $Set<$GenerationStep$Decoration>;
        features(): $HolderSet<$PlacedFeature>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        static allSteps(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$PlacedFeature>): $BiomeModifiers$RemoveFeaturesBiomeModifier;
        constructor(biomes: $HolderSet_<$Biome>, features: $HolderSet_<$PlacedFeature>, steps: $Set_<$GenerationStep$Decoration_>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveFeaturesBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveFeaturesBiomeModifier_ = { steps?: $Set_<$GenerationStep$Decoration_>, biomes?: $HolderSet_<$Biome>, features?: $HolderSet_<$PlacedFeature>,  } | [steps?: $Set_<$GenerationStep$Decoration_>, biomes?: $HolderSet_<$Biome>, features?: $HolderSet_<$PlacedFeature>, ];
    export interface $StructureModifier extends RegistryMarked<RegistryTypes.NeoforgeStructureModifierTag, RegistryTypes.NeoforgeStructureModifier> {}
    export class $ModifiableStructureInfo$StructureInfo$Builder {
        build(): $ModifiableStructureInfo$StructureInfo;
        static copyOf(arg0: $ModifiableStructureInfo$StructureInfo_): $ModifiableStructureInfo$StructureInfo$Builder;
        getStructureSettings(): $StructureSettingsBuilder;
        get structureSettings(): $StructureSettingsBuilder;
    }
    export class $BiomeModifiers$AddFeaturesBiomeModifier extends $Record implements $BiomeModifier {
        step(): $GenerationStep$Decoration;
        features(): $HolderSet<$PlacedFeature>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        constructor(biomes: $HolderSet_<$Biome>, features: $HolderSet_<$PlacedFeature>, step: $GenerationStep$Decoration_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddFeaturesBiomeModifier}.
     */
    export type $BiomeModifiers$AddFeaturesBiomeModifier_ = { step?: $GenerationStep$Decoration_, biomes?: $HolderSet_<$Biome>, features?: $HolderSet_<$PlacedFeature>,  } | [step?: $GenerationStep$Decoration_, biomes?: $HolderSet_<$Biome>, features?: $HolderSet_<$PlacedFeature>, ];
    /**
     * Manager for light values controlled by dynamic data in `BlockEntity`s.
     */
    export class $AuxiliaryLightManager {
    }
    export interface $AuxiliaryLightManager extends $AuxiliaryLightManagerMixin, $SodiumAuxiliaryLightManager {
        /**
         * Set the light value at the given position to the given value
         */
        setLightAt(pos: $BlockPos_, value: number): void;
        /**
         * Remove the light value at the given position
         */
        removeLightAt(pos: $BlockPos_): void;
        /**
         * @return the light value at the given position or 0 if none is present
         */
        getLightAt(pos: $BlockPos_): number;
    }
    /**
     * Holds lazy-evaluable modified structure info.
     * Memoizers are not used because it's important to return null
     * without evaluating the structure info if it's accessed outside of a server context.
     */
    export class $ModifiableStructureInfo {
        get(): $ModifiableStructureInfo$StructureInfo;
        getOriginalStructureInfo(): $ModifiableStructureInfo$StructureInfo;
        getModifiedStructureInfo(): $ModifiableStructureInfo$StructureInfo;
        /**
         * Internal NeoForge method. Will do nothing if this modifier had already been applied.
         * Creates and caches the modified structure info.
         */
        applyStructureModifiers(structure: $Holder_<$Structure>, structureModifiers: $List_<$StructureModifier_>): void;
        constructor(arg0: $ModifiableStructureInfo$StructureInfo_);
        get originalStructureInfo(): $ModifiableStructureInfo$StructureInfo;
        get modifiedStructureInfo(): $ModifiableStructureInfo$StructureInfo;
    }
    /**
     * Extension of the vanilla builder but also provides read access and a copy-from-existing-data helper.
     * Also, the base builder crashes if certain values aren't specified on build, so this enforces the setting of those.
     */
    export class $BiomeSpecialEffectsBuilder extends $BiomeSpecialEffects$Builder {
        static create(fogColor: number, waterColor: number, waterFogColor: number, skyColor: number): $BiomeSpecialEffectsBuilder;
        getBackgroundMusic(): ($Music) | undefined;
        static copyOf(baseEffects: $BiomeSpecialEffects): $BiomeSpecialEffectsBuilder;
        getGrassColorOverride(): (number) | undefined;
        getFoliageColorOverride(): (number) | undefined;
        getSkyColor(): number;
        getFogColor(): number;
        getWaterFogColor(): number;
        getAmbientParticle(): ($AmbientParticleSettings) | undefined;
        getGrassColorModifier(): $BiomeSpecialEffects$GrassColorModifier;
        waterColor(): number;
        getAmbientLoopSound(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMoodSound(): ($AmbientMoodSettings) | undefined;
        getAmbientAdditionsSound(): ($AmbientAdditionsSettings) | undefined;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
    }
    export class $BiomeModifiers {
    }
    export class $ModifiableBiomeInfo$BiomeInfo extends $Record {
        climateSettings(): $Biome$ClimateSettings;
        effects(): $BiomeSpecialEffects;
        generationSettings(): $BiomeGenerationSettings;
        mobSpawnSettings(): $MobSpawnSettings;
        constructor(climateSettings: $Biome$ClimateSettings_, effects: $BiomeSpecialEffects, generationSettings: $BiomeGenerationSettings, mobSpawnSettings: $MobSpawnSettings);
    }
    /**
     * Values that may be interpreted as {@link $ModifiableBiomeInfo$BiomeInfo}.
     */
    export type $ModifiableBiomeInfo$BiomeInfo_ = { generationSettings?: $BiomeGenerationSettings, effects?: $BiomeSpecialEffects, climateSettings?: $Biome$ClimateSettings_, mobSpawnSettings?: $MobSpawnSettings,  } | [generationSettings?: $BiomeGenerationSettings, effects?: $BiomeSpecialEffects, climateSettings?: $Biome$ClimateSettings_, mobSpawnSettings?: $MobSpawnSettings, ];
    export class $BiomeModifiers$AddSpawnCostsBiomeModifier extends $Record implements $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        spawnCost(): $MobSpawnSettings$MobSpawnCost;
        constructor(biomes: $HolderSet_<$Biome>, entityTypes: $HolderSet_<$EntityType<never>>, spawnCost: $MobSpawnSettings$MobSpawnCost_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddSpawnCostsBiomeModifier}.
     */
    export type $BiomeModifiers$AddSpawnCostsBiomeModifier_ = { entityTypes?: $HolderSet_<$EntityType<never>>, biomes?: $HolderSet_<$Biome>, spawnCost?: $MobSpawnSettings$MobSpawnCost_,  } | [entityTypes?: $HolderSet_<$EntityType<never>>, biomes?: $HolderSet_<$Biome>, spawnCost?: $MobSpawnSettings$MobSpawnCost_, ];
    export class $BiomeModifiers$AddSpawnsBiomeModifier extends $Record implements $BiomeModifier {
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        codec(): $MapCodec<$BiomeModifier>;
        spawners(): $List<$MobSpawnSettings$SpawnerData>;
        static singleSpawn(arg0: $HolderSet_<$Biome>, arg1: $MobSpawnSettings$SpawnerData): $BiomeModifiers$AddSpawnsBiomeModifier;
        constructor(biomes: $HolderSet_<$Biome>, spawners: $List_<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddSpawnsBiomeModifier}.
     */
    export type $BiomeModifiers$AddSpawnsBiomeModifier_ = { spawners?: $List_<$MobSpawnSettings$SpawnerData>, biomes?: $HolderSet_<$Biome>,  } | [spawners?: $List_<$MobSpawnSettings$SpawnerData>, biomes?: $HolderSet_<$Biome>, ];
    /**
     * Holds lazy-evaluable modified biome info.
     * Memoizers are not used because it's important to return null
     * without evaluating the biome info if it's accessed outside of a server context.
     */
    export class $ModifiableBiomeInfo {
        get(): $ModifiableBiomeInfo$BiomeInfo;
        getOriginalBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
        /**
         * Internal NeoForge method. Will do nothing if this modifier had already been applied.
         * Creates and caches the modified biome info.
         */
        applyBiomeModifiers(biome: $Holder_<$Biome>, biomeModifiers: $List_<$BiomeModifier_>, registryAccess: $RegistryAccess): boolean;
        getModifiedBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
        constructor(arg0: $ModifiableBiomeInfo$BiomeInfo_);
        get originalBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
        get modifiedBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
    }
    export class $StructureModifier$Phase extends $Enum<$StructureModifier$Phase> {
        static values(): $StructureModifier$Phase[];
        static valueOf(arg0: string): $StructureModifier$Phase;
        static ADD: $StructureModifier$Phase;
        static MODIFY: $StructureModifier$Phase;
        static AFTER_EVERYTHING: $StructureModifier$Phase;
        static REMOVE: $StructureModifier$Phase;
        static BEFORE_EVERYTHING: $StructureModifier$Phase;
    }
    /**
     * Values that may be interpreted as {@link $StructureModifier$Phase}.
     */
    export type $StructureModifier$Phase_ = "before_everything" | "add" | "remove" | "modify" | "after_everything";
    export interface $BiomeModifier extends RegistryMarked<RegistryTypes.NeoforgeBiomeModifierTag, RegistryTypes.NeoforgeBiomeModifier> {}
}
