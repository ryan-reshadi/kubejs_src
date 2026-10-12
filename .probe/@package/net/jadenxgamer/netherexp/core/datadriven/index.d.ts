import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CreativeModeTab$Output_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LivingDeathEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/jadenxgamer/netherexp/core/datadriven" {
    export class $ApparitionAggressions extends $Record {
        targetMob(): $ResourceLocation;
        targetPriority(): number;
        possessedMob(): $ResourceLocation;
        hasPossession(): boolean;
        preferredByPersonalities(): $List<number>;
        static CODEC: $Codec<$ApparitionAggressions>;
        constructor(preferredByPersonalities: $List_<number>, hasPossession: boolean, targetPriority: number, targetMob: $ResourceLocation_, possessedMob: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ApparitionAggressions}.
     */
    export type $ApparitionAggressions_ = RegistryTypes.NetherexpApparitionAggressions | { targetPriority?: number, hasPossession?: boolean, possessedMob?: $ResourceLocation_, targetMob?: $ResourceLocation_, preferredByPersonalities?: $List_<number>,  } | [targetPriority?: number, hasPossession?: boolean, possessedMob?: $ResourceLocation_, targetMob?: $ResourceLocation_, preferredByPersonalities?: $List_<number>, ];
    export interface $OnDeathGroundConversion extends RegistryMarked<RegistryTypes.NetherexpOnDeathGroundConversionTag, RegistryTypes.NetherexpOnDeathGroundConversion> {}
    export interface $ApparitionGargoyleStatues extends RegistryMarked<RegistryTypes.NetherexpApparitionGargoyleStatuesTag, RegistryTypes.NetherexpApparitionGargoyleStatues> {}
    export class $Antidote extends $Record {
        name(): string;
        color(): (number) | undefined;
        static populateCreativeInventoryForAllAntidotes(arg0: $CreativeModeTab$Output_): void;
        effects(): $List<$MobEffectInstance>;
        static CODEC: $Codec<$Antidote>;
        constructor(name: string, color: (number) | undefined, effects: $List_<$MobEffectInstance>);
    }
    /**
     * Values that may be interpreted as {@link $Antidote}.
     */
    export type $Antidote_ = RegistryTypes.NetherexpAntidote | { color?: (number) | undefined, name?: string, effects?: $List_<$MobEffectInstance>,  } | [color?: (number) | undefined, name?: string, effects?: $List_<$MobEffectInstance>, ];
    export class $EctoplasmHaunting extends $Record {
        target(): $HolderSet<$Block>;
        haunted(): $ResourceLocation;
        static CODEC: $Codec<$EctoplasmHaunting>;
        constructor(target: $HolderSet_<$Block>, haunted: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EctoplasmHaunting}.
     */
    export type $EctoplasmHaunting_ = RegistryTypes.NetherexpEctoplasmHaunting | { haunted?: $ResourceLocation_, target?: $HolderSet_<$Block>,  } | [haunted?: $ResourceLocation_, target?: $HolderSet_<$Block>, ];
    export class $ApparitionGargoyleStatues extends $Record {
        possessedMob(): $ResourceLocation;
        gargoyleStatue(): $ResourceLocation;
        preferredByPersonalities(): $List<number>;
        static CODEC: $Codec<$ApparitionGargoyleStatues>;
        constructor(gargoyleStatue: $ResourceLocation_, preferredByPersonalities: $List_<number>, possessedMob: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ApparitionGargoyleStatues}.
     */
    export type $ApparitionGargoyleStatues_ = RegistryTypes.NetherexpApparitionGargoyleStatues | { gargoyleStatue?: $ResourceLocation_, preferredByPersonalities?: $List_<number>, possessedMob?: $ResourceLocation_,  } | [gargoyleStatue?: $ResourceLocation_, preferredByPersonalities?: $List_<number>, possessedMob?: $ResourceLocation_, ];
    export interface $Antidote extends RegistryMarked<RegistryTypes.NetherexpAntidoteTag, RegistryTypes.NetherexpAntidote> {}
    export class $WispArchaeology extends $Record {
        biomes(): ($HolderSet<$Biome>) | undefined;
        lootTable(): $ResourceLocation;
        structure(): ($ResourceLocation) | undefined;
        static CODEC: $Codec<$WispArchaeology>;
        constructor(structure: ($ResourceLocation_) | undefined, biomes: ($HolderSet_<$Biome>) | undefined, lootTable: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WispArchaeology}.
     */
    export type $WispArchaeology_ = RegistryTypes.NetherexpWispArchaeology | { lootTable?: $ResourceLocation_, biomes?: ($HolderSet_<$Biome>) | undefined, structure?: ($ResourceLocation_) | undefined,  } | [lootTable?: $ResourceLocation_, biomes?: ($HolderSet_<$Biome>) | undefined, structure?: ($ResourceLocation_) | undefined, ];
    export interface $EctoplasmHaunting extends RegistryMarked<RegistryTypes.NetherexpEctoplasmHauntingTag, RegistryTypes.NetherexpEctoplasmHaunting> {}
    export interface $WispArchaeology extends RegistryMarked<RegistryTypes.NetherexpWispArchaeologyTag, RegistryTypes.NetherexpWispArchaeology> {}
    export interface $ApparitionAggressions extends RegistryMarked<RegistryTypes.NetherexpApparitionAggressionsTag, RegistryTypes.NetherexpApparitionAggressions> {}
    export class $OnDeathGroundConversion extends $Record {
        entityTypes(): $HolderSet<$EntityType<never>>;
        static onLivingDeath(arg0: $LivingDeathEvent): void;
        groundBlock(): $HolderSet<$Block>;
        conversionBlock(): $BlockState;
        static CODEC: $Codec<$OnDeathGroundConversion>;
        constructor(entityTypes: $HolderSet_<$EntityType<never>>, groundBlock: $HolderSet_<$Block>, conversionBlock: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $OnDeathGroundConversion}.
     */
    export type $OnDeathGroundConversion_ = RegistryTypes.NetherexpOnDeathGroundConversion | { conversionBlock?: $BlockState_, groundBlock?: $HolderSet_<$Block>, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [conversionBlock?: $BlockState_, groundBlock?: $HolderSet_<$Block>, entityTypes?: $HolderSet_<$EntityType<never>>, ];
}
