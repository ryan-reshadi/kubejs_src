import { $Level } from "@package/net/minecraft/world/level";
import { $BiomeClimate_, $NoiseRouterTarget_, $WeightedSpawnerData_, $BiomeEffects } from "@package/dev/worldgen/lithostitched/api/worldgen/util";
import { $StructurePoolElement, $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $CompositeConfig$Type_ } from "@package/dev/worldgen/lithostitched/worldgen/feature/config";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $AmbientParticleSettings, $AmbientMoodSettings, $BiomeSpecialEffects$GrassColorModifier_, $AmbientAdditionsSettings, $Biome } from "@package/net/minecraft/world/level/biome";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $StructureProcessorList, $StructureProcessor } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List_ } from "@package/java/util";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $Music, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $RegistryAccess, $Registry, $HolderSet_ } from "@package/net/minecraft/core";
import { $InjectionType_ } from "@package/dev/worldgen/lithostitched/api/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $LoadPredicate } from "@package/dev/worldgen/lithostitched/api/predicate";
import { $PlacementCondition } from "@package/dev/worldgen/lithostitched/api/worldgen/placementcondition";
import { $Structure, $StructureSet, $StructureSet$StructureSelectionEntry_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $DensityFunction_, $SurfaceRules$RuleSource_, $DensityFunction, $GenerationStep$Decoration_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/modifier" {
    export class $WorldgenModifier {
        static builder(): $WorldgenModifier$ModifierBuilder;
        static builder(arg0: $LoadPredicate): $WorldgenModifier$ModifierBuilder;
        static resetRegistrationInfo<T>(arg0: $Registry<T>, arg1: $Holder_<T>): void;
        static PRIORITY_DEFAULT_CODEC: $MapCodec<number>;
        static CODEC: $Codec<$WorldgenModifier>;
        static REMOVAL_PRIORITY: number;
        static DEFAULT_PRIORITY: number;
        static PRIORITY_REMOVE_CODEC: $MapCodec<number>;
    }
    export interface $WorldgenModifier {
        priority(): number;
        apply(arg0: $RegistryAccess): void;
        predicate(): ($LoadPredicate) | undefined;
        codec(): $MapCodec<$WorldgenModifier>;
        shouldRecompileSortedFeatures(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldgenModifier}.
     */
    export type $WorldgenModifier_ = RegistryTypes.LithostitchedWorldgenModifier;
    export class $WorldgenModifier$ModifierBuilder {
        priority(arg0: number): $WorldgenModifier$ModifierBuilder;
        noop(): $WorldgenModifier;
        addBiomeSpawns(arg0: $Holder_<$Biome>, ...arg1: $WeightedSpawnerData_[]): $WorldgenModifier;
        addBiomeSpawns(arg0: $HolderSet_<$Biome>, ...arg1: $WeightedSpawnerData_[]): $WorldgenModifier;
        setPoolAliases(arg0: $Holder_<$Structure>, arg1: boolean, ...arg2: $PoolAliasBinding[]): $WorldgenModifier;
        setPoolAliases(arg0: $HolderSet_<$Structure>, arg1: boolean, ...arg2: $PoolAliasBinding[]): $WorldgenModifier;
        addProcessorListProcessors(arg0: $HolderSet_<$StructureProcessorList>, ...arg1: $StructureProcessor[]): $WorldgenModifier;
        addProcessorListProcessors(arg0: $Holder_<$StructureProcessorList>, ...arg1: $StructureProcessor[]): $WorldgenModifier;
        addStructureSetEntries(arg0: $HolderSet_<$StructureSet>, ...arg1: $StructureSet$StructureSelectionEntry_[]): $WorldgenModifier;
        addStructureSetEntries(arg0: $Holder_<$StructureSet>, ...arg1: $StructureSet$StructureSelectionEntry_[]): $WorldgenModifier;
        addTemplatePoolElements(arg0: $Holder_<$StructureTemplatePool>, ...arg1: $Pair<$StructurePoolElement, number>[]): $WorldgenModifier;
        addTemplatePoolElements(arg0: $HolderSet_<$StructureTemplatePool>, ...arg1: $Pair<$StructurePoolElement, number>[]): $WorldgenModifier;
        removeStructureSetEntries(arg0: $HolderSet_<$StructureSet>, ...arg1: $Holder_<$Structure>[]): $WorldgenModifier;
        removeStructureSetEntries(arg0: $Holder_<$StructureSet>, ...arg1: $Holder_<$Structure>[]): $WorldgenModifier;
        setStructureSpawnCondition(arg0: $HolderSet_<$Structure>, arg1: $PlacementCondition, arg2: boolean): $WorldgenModifier;
        setStructureSpawnCondition(arg0: $Holder_<$Structure>, arg1: $PlacementCondition, arg2: boolean): $WorldgenModifier;
        setPoolElementProcessors(arg0: $Holder_<$StructureTemplatePool>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean): $WorldgenModifier;
        setPoolElementProcessors(arg0: $HolderSet_<$StructureTemplatePool>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean, ...arg3: $ResourceLocation_[]): $WorldgenModifier;
        setPoolElementProcessors(arg0: $HolderSet_<$StructureTemplatePool>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean): $WorldgenModifier;
        setPoolElementProcessors(arg0: $Holder_<$StructureTemplatePool>, arg1: $Holder_<$StructureProcessorList>, arg2: boolean, ...arg3: $ResourceLocation_[]): $WorldgenModifier;
        wrapDensityFunction(arg0: $Holder_<$DensityFunction>, arg1: $Holder_<$DensityFunction>): $WorldgenModifier;
        wrapDensityFunction(arg0: $Holder_<$DensityFunction>, arg1: $DensityFunction_): $WorldgenModifier;
        removeFeatures(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(arg0: $Holder_<$Biome>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(arg0: $HolderSet_<$Biome>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(arg0: $Holder_<$Biome>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        wrapNoiseRouter(arg0: $ResourceKey_<$Level>, arg1: $NoiseRouterTarget_, arg2: $DensityFunction_): $WorldgenModifier;
        wrapNoiseRouter(arg0: $ResourceKey_<$Level>, arg1: $NoiseRouterTarget_, arg2: $Holder_<$DensityFunction>): $WorldgenModifier;
        stackFeatures(arg0: $Holder_<$ConfiguredFeature<never, never>>, arg1: $Holder_<$PlacedFeature>, arg2: $CompositeConfig$Type_): $WorldgenModifier;
        stackFeatures(arg0: $HolderSet_<$ConfiguredFeature<never, never>>, arg1: $Holder_<$PlacedFeature>, arg2: $CompositeConfig$Type_): $WorldgenModifier;
        replaceClimate(arg0: $HolderSet_<$Biome>, arg1: $BiomeClimate_): $WorldgenModifier;
        replaceClimate(arg0: $Holder_<$Biome>, arg1: $BiomeClimate_): $WorldgenModifier;
        addFeatures(arg0: $Holder_<$Biome>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(arg0: $Holder_<$Biome>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(arg0: $HolderSet_<$Biome>, arg1: $Holder_<$PlacedFeature>, arg2: $GenerationStep$Decoration_): $WorldgenModifier;
        addSurfaceRule(arg0: $ResourceKey_<$Level>, arg1: $InjectionType_, arg2: $SurfaceRules$RuleSource_): $WorldgenModifier;
        addSurfaceRule(arg0: $List_<$ResourceKey_<$Level>>, arg1: $InjectionType_, arg2: $SurfaceRules$RuleSource_): $WorldgenModifier;
        replaceEffects(arg0: $HolderSet_<$Biome>, arg1: $UnaryOperator_<$BiomeEffectsBuilder>): $WorldgenModifier;
        replaceEffects(arg0: $Holder_<$Biome>, arg1: $UnaryOperator_<$BiomeEffectsBuilder>): $WorldgenModifier;
        removeBiomeSpawns(arg0: $Holder_<$Biome>, arg1: $Holder_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(arg0: $Holder_<$Biome>, arg1: $HolderSet_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(arg0: $HolderSet_<$Biome>, arg1: $Holder_<$EntityType<never>>): $WorldgenModifier;
    }
    export class $BiomeEffectsBuilder {
        static create(): $BiomeEffectsBuilder;
    }
    export interface $BiomeEffectsBuilder {
        foliageColor(arg0: number): $BiomeEffectsBuilder;
        build(): $BiomeEffects;
        fogColor(arg0: number): $BiomeEffectsBuilder;
        waterColor(arg0: number): $BiomeEffectsBuilder;
        grassColor(arg0: number): $BiomeEffectsBuilder;
        skyColor(arg0: number): $BiomeEffectsBuilder;
        music(arg0: $Music): $BiomeEffectsBuilder;
        waterFogColor(arg0: number): $BiomeEffectsBuilder;
        grassColorModifier(arg0: $BiomeSpecialEffects$GrassColorModifier_): $BiomeEffectsBuilder;
        ambientSound(arg0: $Holder_<$SoundEvent>): $BiomeEffectsBuilder;
        moodSound(arg0: $AmbientMoodSettings): $BiomeEffectsBuilder;
        ambientParticle(arg0: $AmbientParticleSettings): $BiomeEffectsBuilder;
        dryFoliageColor(arg0: number): $BiomeEffectsBuilder;
        musicVolume(arg0: number): $BiomeEffectsBuilder;
        additionsSound(arg0: $AmbientAdditionsSettings): $BiomeEffectsBuilder;
    }
    export interface $WorldgenModifier extends RegistryMarked<RegistryTypes.LithostitchedWorldgenModifierTag, RegistryTypes.LithostitchedWorldgenModifier> {}
}
