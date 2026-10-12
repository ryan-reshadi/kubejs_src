import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Map, $List_ } from "@package/java/util";
import { $LootFunctionList, $LootConditionList, $LootEntryList } from "@package/com/almostreliable/lootjs/loot";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootType, $LootType_ } from "@package/com/almostreliable/lootjs/core";
import { $DebugInfo } from "@package/com/almostreliable/lootjs/util";
import { $Object } from "@package/java/lang";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootTable, $LootPool, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/almostreliable/lootjs/loot/extension" {
    export class $LootItemFunctionExtension {
    }
    export interface $LootItemFunctionExtension {
        when(arg0: $Consumer_<$LootConditionList>): $LootItemFunction;
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunctionExtension}.
     */
    export type $LootItemFunctionExtension_ = ((arg0: $Consumer<$LootConditionList>) => $LootItemFunction);
    export class $LootParamsExtension {
    }
    export interface $LootParamsExtension {
        getType(): $LootType;
        setType(arg0: $LootType_): void;
    }
    export class $LootContextExtension {
        static cast(arg0: $LootContext): $LootContextExtension;
    }
    export interface $LootContextExtension {
        isExploded(): boolean;
        getTool(): $ItemStack;
        getData(): $Map<string, $Object>;
        isType(arg0: $LootType_): boolean;
        getType(): $LootType;
        self(): $LootContext;
        getId(): $ResourceLocation;
        getPosition(): $Vec3;
        getServer(): $MinecraftServer;
        getEntity(): $Entity;
        getKillerPlayer(): $ServerPlayer;
        getAttackingEntity(): $Entity;
        getDamageSource(): $DamageSource;
        getExplosionRadius(): number;
        get exploded(): boolean;
        get tool(): $ItemStack;
        get data(): $Map<string, $Object>;
        get id(): $ResourceLocation;
        get position(): $Vec3;
        get server(): $MinecraftServer;
        get entity(): $Entity;
        get killerPlayer(): $ServerPlayer;
        get attackingEntity(): $Entity;
        get damageSource(): $DamageSource;
        get explosionRadius(): number;
    }
    export class $LootTableExtension {
        static cast(arg0: $LootTable): $LootTableExtension;
    }
    export interface $LootTableExtension {
        lootjs$getPools(): $List<$LootPool>;
        lootjs$setPools(arg0: $List_<$LootPool>): void;
        lootjs$setParamSet(arg0: $LootContextParamSet): void;
        lootjs$getParamSet(): $LootContextParamSet;
        lootjs$createFunctionList(): $LootFunctionList;
        lootjs$getRandomSequence(): $ResourceLocation;
        lootjs$setRandomSequence(arg0: $ResourceLocation_ | null): void;
    }
    export class $CompositeEntryBaseExtension {
    }
    export interface $CompositeEntryBaseExtension {
        lootjs$getEntries(): $List<$LootPoolEntryContainer>;
    }
    export class $LootPoolExtension {
        static cast(arg0: $LootPool): $LootPoolExtension;
    }
    export interface $LootPoolExtension {
        lootjs$getEntries(): $LootEntryList;
        lootjs$setName(arg0: string): void;
        lootjs$asVanillaPool(): $LootPool;
        lootjs$collectDebugInfo(arg0: $DebugInfo): void;
        lootjs$getConditions(): $LootConditionList;
        lootjs$getFunctions(): $LootFunctionList;
    }
}
