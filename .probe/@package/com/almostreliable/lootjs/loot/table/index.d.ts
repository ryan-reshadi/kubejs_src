import { $JsonObject_ } from "@package/com/google/gson";
import { $LootFunctionList, $LootConditionList, $LootEntryList } from "@package/com/almostreliable/lootjs/loot";
import { $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootBucket, $LootType } from "@package/com/almostreliable/lootjs/core";
import { $ItemFilter_, $IdFilter_ } from "@package/com/almostreliable/lootjs/core/filters";
import { $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $List_ } from "@package/java/util";
import { $ItemLootEntry, $SimpleLootEntry, $LootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTable, $LootPool, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/almostreliable/lootjs/loot/table" {
    export class $MutableLootTable implements $LootEntriesTransformer {
        clear(): $MutableLootTable;
        apply(arg0: $Consumer_<$LootFunctionList>): $MutableLootTable;
        getLocation(): $ResourceLocation;
        print(): void;
        getPool(arg0: number): $MutableLootPool;
        getFunctions(): $LootFunctionList;
        getRandomSequence(): $ResourceLocation;
        setRandomSequence(arg0: $ResourceLocation_ | null): void;
        getLootType(): $LootType;
        onDrop(arg0: $PostLootAction_): $MutableLootTable;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $MutableLootTable;
        getPools(): $List<$MutableLootPool>;
        modifyPool(arg0: number, arg1: $Consumer_<$MutableLootPool>): $MutableLootTable;
        modifyPoolByName(arg0: string, arg1: $Consumer_<$MutableLootPool>): $MutableLootTable;
        writeToVanillaTable(): void;
        firstPool(arg0: $Consumer_<$MutableLootPool>): $MutableLootTable;
        firstPool(): $MutableLootPool;
        createPool(): $MutableLootPool;
        createPool(arg0: $Consumer_<$MutableLootPool>): $MutableLootTable;
        getPoolByName(arg0: string): $MutableLootPool;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        constructor(arg0: $LootTable);
        constructor(arg0: $LootContextParamSet, arg1: $ResourceLocation_);
        constructor(arg0: $LootTable, arg1: $ResourceLocation_);
        get location(): $ResourceLocation;
        get functions(): $LootFunctionList;
        get lootType(): $LootType;
        get pools(): $List<$MutableLootPool>;
    }
    export class $PostLootAction {
    }
    export interface $PostLootAction {
        alter(arg0: $LootContext, arg1: $LootBucket): void;
    }
    /**
     * Values that may be interpreted as {@link $PostLootAction}.
     */
    export type $PostLootAction_ = ((arg0: $LootContext, arg1: $LootBucket) => void);
    export class $LootEntriesTransformer {
    }
    export interface $LootEntriesTransformer {
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
    }
    export class $LootEntryAppender {
    }
    export interface $LootEntryAppender {
        addEntry(arg0: $LootEntry): $LootEntryAppender;
        addCustomEntry(arg0: $JsonObject_): $LootEntryAppender;
    }
    /**
     * Values that may be interpreted as {@link $LootEntryAppender}.
     */
    export type $LootEntryAppender_ = ((arg0: $LootEntry) => $LootEntryAppender);
    export class $MutableLootPool implements $LootEntriesTransformer, $LootEntryAppender {
        getEntries(): $LootEntryList;
        when(arg0: $Consumer_<$LootConditionList>): $MutableLootPool;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $MutableLootPool;
        getConditions(): $LootConditionList;
        getName(): string;
        name(arg0: string): $MutableLootPool;
        apply(arg0: $Consumer_<$LootFunctionList>): $MutableLootPool;
        addEntry(arg0: $LootEntry): $MutableLootPool;
        getFunctions(): $LootFunctionList;
        rolls(arg0: $NumberProvider_): $MutableLootPool;
        bonusRolls(arg0: $NumberProvider_): $MutableLootPool;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $MutableLootPool;
        getVanillaPool(): $LootPool;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        addCustomEntry(arg0: $JsonObject_): $LootEntryAppender;
        constructor(arg0: $LootPool);
        get entries(): $LootEntryList;
        get conditions(): $LootConditionList;
        get functions(): $LootFunctionList;
        get vanillaPool(): $LootPool;
    }
    export class $LootTableList implements $LootEntriesTransformer, $Iterable<$MutableLootTable> {
        getTables(): $List<$MutableLootTable>;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootTableList;
        clear(): $LootTableList;
        iterator(): $Iterator<$MutableLootTable>;
        apply(arg0: $Consumer_<$LootFunctionList>): $LootTableList;
        onDrop(arg0: $PostLootAction_): $LootTableList;
        firstPool(arg0: $Consumer_<$MutableLootPool>): $LootTableList;
        createPool(arg0: $Consumer_<$MutableLootPool>): $LootTableList;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        spliterator(): $Spliterator<$MutableLootTable>;
        forEach(arg0: $Consumer_<$MutableLootTable>): void;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        constructor(arg0: $List_<$MutableLootTable>);
        [Symbol.iterator](): Iterator<$MutableLootTable>
        get tables(): $List<$MutableLootTable>;
    }
    export class $PostLootActionOwner {
    }
    export interface $PostLootActionOwner {
        lootjs$setPostLootAction(arg0: $PostLootAction_): void;
        lootjs$getPostLootAction(): $PostLootAction;
    }
}
