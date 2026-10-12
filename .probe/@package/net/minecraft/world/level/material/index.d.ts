import { $MapCodec_, $Codec } from "@package/com/mojang/serialization";
import { $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FlowingFluidAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map$Entry } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $HolderSet_, $Holder, $BlockPos_, $Direction_, $Registry, $Holder$Reference, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Reference2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $IFluidStateExtension, $IFluidExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StateDefinition, $BlockState_, $StateHolder, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $Explosion, $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $InjectedFluidExtension } from "@package/dev/architectury/extensions/injected";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/material" {
    export class $EmptyFluid extends $Fluid {
        getFlow(blockReader: $BlockGetter, pos: $BlockPos_, fluidState: $FluidState): $Vec3;
        canBeReplacedWith(fluidState: $FluidState, blockReader: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        constructor();
    }
    export class $LavaFluid$Flowing extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export interface $Fluid extends RegistryMarked<RegistryTypes.FluidTag, RegistryTypes.Fluid> {}
    export class $LavaFluid$Source extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $WaterFluid extends $FlowingFluid {
        animateTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        createLegacyBlock(state: $FluidState): $BlockState;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(fluidState: $FluidState, blockReader: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        wrapOperation$eja000$sable$addUnderwaterParticle(arg0: $Level_, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        getSlopeFindDistance(level: $LevelReader): number;
        getDropOff(level: $LevelReader): number;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
        get dripParticle(): $ParticleOptions;
    }
    export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
        static values(): $MapColor$Brightness[];
        static valueOf(arg0: string): $MapColor$Brightness;
        static byId(id: number): $MapColor$Brightness;
        static LOWEST: $MapColor$Brightness;
        static HIGH: $MapColor$Brightness;
        static LOW: $MapColor$Brightness;
        modifier: number;
        id: number;
        static NORMAL: $MapColor$Brightness;
    }
    /**
     * Values that may be interpreted as {@link $MapColor$Brightness}.
     */
    export type $MapColor$Brightness_ = "low" | "normal" | "high" | "lowest";
    export class $Fluid implements $IFluidExtension, $InjectedFluidExtension, $FluidKJS {
        getShape(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        /**
         * @deprecated
         */
        is(tag: $TagKey_<$Fluid>): boolean;
        getBucket(): $Item;
        getStateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        getKey(): $ResourceKey<any>;
        getHeight(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): number;
        getOwnHeight(state: $FluidState): number;
        /**
         * Returns the type of this fluid.
         * 
         * Important: This MUST be overridden on your fluid, otherwise an
         * error will be thrown.
         */
        getFluidType(): $FluidType;
        getId(): string;
        getAmount(state: $FluidState): number;
        defaultFluidState(): $FluidState;
        isSame(fluid: $Fluid_): boolean;
        asHolder(): $Holder<any>;
        isSource(state: $FluidState): boolean;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Fluid>;
        getTickDelay(level: $LevelReader): number;
        getPickupSound(): ($SoundEvent) | undefined;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(state: $FluidState, entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns whether the block can be extinguished by this fluid.
         */
        canExtinguish(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(state: $FluidState, level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(state: $FluidState, boat: $Boat): boolean;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        arch$holder(): $Holder<$Fluid>;
        isEmpty(): boolean;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        getAmount(): number;
        getFluid(): $Fluid;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        copy(amount: number): $FluidLike;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        get bucket(): $Item;
        get stateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        get key(): $ResourceKey<any>;
        get fluidType(): $FluidType;
        get id(): string;
        get pickupSound(): ($SoundEvent) | undefined;
        get empty(): boolean;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
        get fluid(): $Fluid;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        get tags(): $List<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $Fluid}.
     */
    export type $Fluid_ = RegistryTypes.Fluid;
    export class $MapColor {
        static byId(id: number): $MapColor;
        calculateRGBColor(brightness: $MapColor$Brightness_): number;
        static getColorFromPackedId(packedId: number): number;
        getPackedId(brightness: $MapColor$Brightness_): number;
        col: number;
        static WOOD: $MapColor;
        static CRIMSON_STEM: $MapColor;
        static TERRACOTTA_LIGHT_BLUE: $MapColor;
        static PODZOL: $MapColor;
        static WARPED_WART_BLOCK: $MapColor;
        static COLOR_LIGHT_GREEN: $MapColor;
        static COLOR_BLACK: $MapColor;
        static TERRACOTTA_GREEN: $MapColor;
        static WARPED_NYLIUM: $MapColor;
        static FIRE: $MapColor;
        static GRASS: $MapColor;
        static TERRACOTTA_ORANGE: $MapColor;
        static GLOW_LICHEN: $MapColor;
        static COLOR_CYAN: $MapColor;
        id: number;
        static NONE: $MapColor;
        static WOOL: $MapColor;
        static QUARTZ: $MapColor;
        static WATER: $MapColor;
        static TERRACOTTA_YELLOW: $MapColor;
        static SAND: $MapColor;
        static SNOW: $MapColor;
        static DIRT: $MapColor;
        static LAPIS: $MapColor;
        static DEEPSLATE: $MapColor;
        static COLOR_YELLOW: $MapColor;
        static COLOR_LIGHT_GRAY: $MapColor;
        static TERRACOTTA_LIGHT_GRAY: $MapColor;
        static CRIMSON_NYLIUM: $MapColor;
        static TERRACOTTA_BLUE: $MapColor;
        static WARPED_HYPHAE: $MapColor;
        static METAL: $MapColor;
        static TERRACOTTA_GRAY: $MapColor;
        static WARPED_STEM: $MapColor;
        static PLANT: $MapColor;
        static GOLD: $MapColor;
        static DIAMOND: $MapColor;
        static COLOR_RED: $MapColor;
        static COLOR_ORANGE: $MapColor;
        static COLOR_BLUE: $MapColor;
        static NETHER: $MapColor;
        static TERRACOTTA_BLACK: $MapColor;
        static TERRACOTTA_PINK: $MapColor;
        static COLOR_MAGENTA: $MapColor;
        static TERRACOTTA_WHITE: $MapColor;
        static COLOR_GRAY: $MapColor;
        static COLOR_LIGHT_BLUE: $MapColor;
        static TERRACOTTA_LIGHT_GREEN: $MapColor;
        static COLOR_GREEN: $MapColor;
        static COLOR_PURPLE: $MapColor;
        static EMERALD: $MapColor;
        static ICE: $MapColor;
        static COLOR_BROWN: $MapColor;
        static TERRACOTTA_PURPLE: $MapColor;
        static TERRACOTTA_BROWN: $MapColor;
        static TERRACOTTA_MAGENTA: $MapColor;
        static RAW_IRON: $MapColor;
        static COLOR_PINK: $MapColor;
        static TERRACOTTA_RED: $MapColor;
        static CRIMSON_HYPHAE: $MapColor;
        static STONE: $MapColor;
        static TERRACOTTA_CYAN: $MapColor;
        static CLAY: $MapColor;
    }
    export class $WaterFluid$Source extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $FlowingFluid extends $Fluid implements $FlowingFluidAccessor {
        getSource(falling: boolean): $FluidState;
        getSource(): $Fluid;
        tick(level: $Level_, pos: $BlockPos_, state: $FluidState): void;
        getFlow(blockReader: $BlockGetter, pos: $BlockPos_, fluidState: $FluidState): $Vec3;
        getFlowing(level: number, falling: boolean): $FluidState;
        getFlowing(): $Fluid;
        create$getNewLiquid(level: $Level_, pos: $BlockPos_, blockState: $BlockState_): $FluidState;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $PushReaction extends $Enum<$PushReaction> {
        static values(): $PushReaction[];
        static valueOf(arg0: string): $PushReaction;
        static DESTROY: $PushReaction;
        static BLOCK: $PushReaction;
        static PUSH_ONLY: $PushReaction;
        static IGNORE: $PushReaction;
        static NORMAL: $PushReaction;
    }
    /**
     * Values that may be interpreted as {@link $PushReaction}.
     */
    export type $PushReaction_ = "normal" | "destroy" | "block" | "ignore" | "push_only";
    export class $FluidState extends $StateHolder<$Fluid, $FluidState> implements $IFluidStateExtension {
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        is(tag: $TagKey_<$Fluid>): boolean;
        is(fluid: $Fluid_): boolean;
        is(fluids: $HolderSet_<$Fluid>): boolean;
        tick(level: $Level_, pos: $BlockPos_): void;
        randomTick(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        isEmpty(): boolean;
        holder(): $Holder<$Fluid>;
        getType(): $Fluid;
        animateTick(level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        getHeight(level: $BlockGetter, pos: $BlockPos_): number;
        getTags(): $Stream<$TagKey<$Fluid>>;
        getFlow(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        getOwnHeight(): number;
        getAmount(): number;
        /**
         * @deprecated
         */
        getExplosionResistance(): number;
        isRandomlyTicking(): boolean;
        isSource(): boolean;
        createLegacyBlock(): $BlockState;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(level: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        shouldRenderBackwardUpFace(level: $BlockGetter, pos: $BlockPos_): boolean;
        isSourceOfType(fluid: $Fluid_): boolean;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns the type of this fluid.
         */
        getFluidType(): $FluidType;
        canExtinguish(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(boat: $Boat): boolean;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        static PROPERTIES_TAG: string;
        static AMOUNT_MAX: number;
        static CODEC: $Codec<$FluidState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static AMOUNT_FULL: number;
        static NAME_TAG: string;
        constructor(owner: $Fluid_, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$FluidState>);
        get empty(): boolean;
        get type(): $Fluid;
        get tags(): $Stream<$TagKey<$Fluid>>;
        get ownHeight(): number;
        get amount(): number;
        get randomlyTicking(): boolean;
        get source(): boolean;
        get dripParticle(): $ParticleOptions;
        get fluidType(): $FluidType;
    }
    export class $WaterFluid$Flowing extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
    }
    export class $Fluids {
        static LAVA: $FlowingFluid;
        static FLOWING_WATER: $FlowingFluid;
        static EMPTY: $Fluid;
        static FLOWING_LAVA: $FlowingFluid;
        static WATER: $FlowingFluid;
        constructor();
    }
    export class $LavaFluid extends $FlowingFluid {
        randomTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        animateTick(level: $Level_, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        getSpreadDelay(level: $Level_, pos: $BlockPos_, currentState: $FluidState, newState: $FluidState): number;
        createLegacyBlock(state: $FluidState): $BlockState;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(fluidState: $FluidState, blockReader: $BlockGetter, pos: $BlockPos_, fluid: $Fluid_, direction: $Direction_): boolean;
        getSlopeFindDistance(level: $LevelReader): number;
        getDropOff(level: $LevelReader): number;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor();
        get dripParticle(): $ParticleOptions;
    }
    export class $FogType extends $Enum<$FogType> {
        static values(): $FogType[];
        static valueOf(arg0: string): $FogType;
        static LAVA: $FogType;
        static POWDER_SNOW: $FogType;
        static NONE: $FogType;
        static WATER: $FogType;
    }
    /**
     * Values that may be interpreted as {@link $FogType}.
     */
    export type $FogType_ = "lava" | "water" | "powder_snow" | "none";
}
