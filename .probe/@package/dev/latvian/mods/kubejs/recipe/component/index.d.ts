import { $JsonObject_ } from "@package/com/google/gson";
import { $Ingredient_, $Ingredient, $CraftingBookCategory, $CookingBookCategory } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $AbstractMap, $Map$Entry, $Set, $List, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Predicate_, $Function, $Function_ } from "@package/java/util/function";
import { $EnumTypeInfo, $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Reference2ObjectOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Registry, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $OpsContainer, $WrappedJS, $TinyMap, $TickDuration, $TinyMap_, $TickDuration_, $RegistryOpsContainer, $ErrorStack, $IntBounds_, $IntBounds, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Enum, $Number, $StringBuilder, $Comparable, $Record, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $SourceLine_ } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient_, $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Pattern } from "@package/java/util/regex";
import { $RecipeScriptContext, $RecipeTypeRegistryContext, $RecipeTypeRegistryContext_, $KubeRecipeContext, $KubeRecipe, $RecipeKey } from "@package/dev/latvian/mods/kubejs/recipe";
import { $RegistryType, $RegistryType_ } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Scriptable, $BaseFunction } from "@package/dev/latvian/mods/rhino";

declare module "@package/dev/latvian/mods/kubejs/recipe/component" {
    export class $NestedRecipeComponent implements $RecipeComponent<$KubeRecipe> {
        type(): $RecipeComponentType<never>;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$KubeRecipe>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        spread(value: $KubeRecipe): $List<never>;
        asList(): $ListRecipeComponent<$KubeRecipe>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $KubeRecipe>>;
        asConditionalList(): $ListRecipeComponent<$KubeRecipe>;
        withCodec(codec: $Codec<$KubeRecipe>): $RecipeComponent<$KubeRecipe>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $KubeRecipe>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$KubeRecipe, O>;
        inputKey(name: string): $RecipeKey<$KubeRecipe>;
        otherKey(name: string): $RecipeKey<$KubeRecipe>;
        toString(ops: $OpsContainer, value: $KubeRecipe): string;
        isEmpty(value: $KubeRecipe): boolean;
        replace(cx: $RecipeScriptContext, original: $KubeRecipe, match: $ReplacementMatchInfo_, arg3: $Object): $KubeRecipe;
        matches(cx: $RecipeMatchContext, value: $KubeRecipe, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $KubeRecipe): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$KubeRecipe>;
        asConditionalListOrSelf(): $ListRecipeComponent<$KubeRecipe>;
        orSelf(): $RecipeComponent<$KubeRecipe>;
        asListOrSelf(): $ListRecipeComponent<$KubeRecipe>;
        outputKey(name: string): $RecipeKey<$KubeRecipe>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$KubeRecipe>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $KubeRecipe): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$KubeRecipe>, json: $JsonObject_): void;
        wrap(cx: $RecipeScriptContext, from: $Object): $KubeRecipe;
        static RECIPE: $RecipeComponentType<$KubeRecipe>;
        constructor();
        get ignored(): boolean;
    }
    export class $IngredientComponent extends $Record implements $RecipeComponent<$Ingredient> {
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $Ingredient_): string;
        isEmpty(value: $Ingredient_): boolean;
        matches(cx: $RecipeMatchContext, value: $Ingredient_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$Ingredient>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Ingredient_): void;
        spread(value: $Ingredient_): $List<never>;
        asList(): $ListRecipeComponent<$Ingredient>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Ingredient>>;
        asConditionalList(): $ListRecipeComponent<$Ingredient>;
        withCodec(codec: $Codec<$Ingredient_>): $RecipeComponent<$Ingredient>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Ingredient>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Ingredient, O>;
        inputKey(name: string): $RecipeKey<$Ingredient>;
        otherKey(name: string): $RecipeKey<$Ingredient>;
        wrap(cx: $RecipeScriptContext, from: $Object): $Ingredient;
        replace(cx: $RecipeScriptContext, original: $Ingredient_, match: $ReplacementMatchInfo_, arg3: $Object): $Ingredient;
        validate(ctx: $RecipeValidationContext, value: $Ingredient_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Ingredient>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Ingredient>;
        orSelf(): $RecipeComponent<$Ingredient>;
        asListOrSelf(): $ListRecipeComponent<$Ingredient>;
        outputKey(name: string): $RecipeKey<$Ingredient>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Ingredient_>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Ingredient_>, json: $JsonObject_): void;
        static OPTIONAL_INGREDIENT: $RecipeComponentType<$Ingredient>;
        static INGREDIENT: $RecipeComponentType<$Ingredient>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$Ingredient_>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IngredientComponent}.
     */
    export type $IngredientComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$Ingredient_>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$Ingredient_>, ];
    export class $RegistryComponent<T> extends $Record implements $RecipeComponent<$Holder<T>> {
        registry(): $Registry<$Holder<T>>;
        type(): $RecipeComponentType<never>;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$Holder<$Holder<T>>>;
        regType(): $RegistryType<$Holder<T>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Holder_<$Holder<T>>): void;
        spread(value: $Holder_<T>): $List<never>;
        asList(): $ListRecipeComponent<$Holder<T>>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Holder<T>>>;
        asConditionalList(): $ListRecipeComponent<$Holder<T>>;
        withCodec(codec: $Codec<$Holder_<T>>): $RecipeComponent<$Holder<T>>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Holder<T>>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Holder<T>, O>;
        inputKey(name: string): $RecipeKey<$Holder<T>>;
        otherKey(name: string): $RecipeKey<$Holder<T>>;
        toString(ops: $OpsContainer, value: $Holder_<T>): string;
        isEmpty(value: $Holder_<T>): boolean;
        replace(cx: $RecipeScriptContext, original: $Holder_<T>, match: $ReplacementMatchInfo_, arg3: $Object): $Holder<T>;
        matches(cx: $RecipeMatchContext, value: $Holder_<T>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $Holder_<T>): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Holder<T>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Holder<T>>;
        orSelf(): $RecipeComponent<$Holder<T>>;
        asListOrSelf(): $ListRecipeComponent<$Holder<T>>;
        outputKey(name: string): $RecipeKey<$Holder<T>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Holder_<T>>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Holder_<T>>, json: $JsonObject_): void;
        wrap(cx: $RecipeScriptContext, from: $Object): $Holder<T>;
        static TYPE: $RecipeComponentType<never>;
        constructor(registries: $RegistryAccessContainer, regType: $RegistryType_<$Holder_<T>>, key: $ResourceKey_<any>);
        constructor(registries: $RegistryAccessContainer, key: $ResourceKey_<any>);
        constructor(registry: $Registry<$Holder_<T>>, regType: $RegistryType_<$Holder_<T>>, codec: $Codec<$Holder_<$Holder<T>>>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RegistryComponent}.
     */
    export type $RegistryComponent_<T> = { typeInfo?: $TypeInfo_, regType?: $RegistryType_<any>, codec?: $Codec<$Holder_<any>>, registry?: $Registry<any>,  } | [typeInfo?: $TypeInfo_, regType?: $RegistryType_<any>, codec?: $Codec<$Holder_<any>>, registry?: $Registry<any>, ];
    export class $NumberComponent$FloatRange extends $Record implements $NumberComponent<$NumberComponent$FloatRange, number> {
        range(min: number, max: number): $NumberComponent$FloatRange;
        type(): $RecipeComponentType<never>;
        min(): number;
        static of(typeOverride: $RecipeComponentType<never>, min: number, max: number): $NumberComponent$FloatRange;
        typeInfo(): $TypeInfo;
        codec(): $Codec<number>;
        typeOverride(): $RecipeComponentType<never>;
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: number, max: number): string;
        min(min: number): $NumberComponent<$NumberComponent$FloatRange, number>;
        max(max: number): $NumberComponent<$NumberComponent$FloatRange, number>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        spread(value: number): $List<never>;
        asList(): $ListRecipeComponent<number>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, number>>;
        asConditionalList(): $ListRecipeComponent<number>;
        withCodec(codec: $Codec<number>): $RecipeComponent<number>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, number>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<number, O>;
        inputKey(name: string): $RecipeKey<number>;
        otherKey(name: string): $RecipeKey<number>;
        toString(ops: $OpsContainer, value: number): string;
        isEmpty(value: number): boolean;
        replace(cx: $RecipeScriptContext, original: number, match: $ReplacementMatchInfo_, arg3: $Object): number;
        matches(cx: $RecipeMatchContext, value: number, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: number): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<number>;
        asConditionalListOrSelf(): $ListRecipeComponent<number>;
        orSelf(): $RecipeComponent<number>;
        asListOrSelf(): $ListRecipeComponent<number>;
        outputKey(name: string): $RecipeKey<number>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: number): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        max(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): number;
        constructor(typeOverride: $RecipeComponentType<never>, min: number, max: number, codec: $Codec<number>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NumberComponent$FloatRange}.
     */
    export type $NumberComponent$FloatRange_ = { max?: number, min?: number, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>,  } | [max?: number, min?: number, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, ];
    export class $UniqueIdBuilder extends $Record {
        appendSeparator(): void;
        build(): string;
        append(id: $ResourceLocation_): void;
        append(string: string): void;
        append(key: $ResourceKey_<never>): void;
        builder(): $StringBuilder;
        static MULTIPLE_UNDERSCORES_PATTERN: $Pattern;
        static NON_W_PATTERN: $Pattern;
        constructor(builder: $StringBuilder);
    }
    /**
     * Values that may be interpreted as {@link $UniqueIdBuilder}.
     */
    export type $UniqueIdBuilder_ = { builder?: $StringBuilder,  } | [builder?: $StringBuilder, ];
    export class $MapRecipeComponent<K, V> extends $Record implements $RecipeComponent<$TinyMap<K, V>> {
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): $TinyMap<K, V>;
        isEmpty(value: $TinyMap_<K, V>): boolean;
        replace(cx: $RecipeScriptContext, original: $TinyMap_<K, V>, match: $ReplacementMatchInfo_, arg3: $Object): $TinyMap<K, V>;
        matches(cx: $RecipeMatchContext, value: $TinyMap_<K, V>, match: $ReplacementMatchInfo_): boolean;
        static of<K, V>(key: $RecipeComponent<K>, component: $RecipeComponent<V>, bounds: $IntBounds_): $MapRecipeComponent<K, V>;
        validate(ctx: $RecipeValidationContext, value: $TinyMap_<K, V>): void;
        component(): $RecipeComponent<V>;
        bounds(): $IntBounds;
        typeInfo(): $TypeInfo;
        key(): $RecipeComponent<K>;
        codec(): $Codec<$TinyMap<K, V>>;
        static patternOf<V>(component: $RecipeComponent<V>, bounds: $IntBounds_): $MapRecipeComponent<string, V>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $TinyMap_<K, V>): void;
        patternKey(): boolean;
        spread(value: $TinyMap_<K, V>): $List<never>;
        asList(): $ListRecipeComponent<$TinyMap<K, V>>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $TinyMap<K, V>>>;
        asConditionalList(): $ListRecipeComponent<$TinyMap<K, V>>;
        withCodec(codec: $Codec<$TinyMap_<K, V>>): $RecipeComponent<$TinyMap<K, V>>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $TinyMap<K, V>>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$TinyMap<K, V>, O>;
        inputKey(name: string): $RecipeKey<$TinyMap<K, V>>;
        otherKey(name: string): $RecipeKey<$TinyMap<K, V>>;
        toString(ops: $OpsContainer, value: $TinyMap_<K, V>): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<$TinyMap<K, V>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$TinyMap<K, V>>;
        orSelf(): $RecipeComponent<$TinyMap<K, V>>;
        asListOrSelf(): $ListRecipeComponent<$TinyMap<K, V>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$TinyMap<K, V>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TinyMap_<K, V>>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TinyMap_<K, V>>, json: $JsonObject_): void;
        static PATTERN_TYPE: $RecipeComponentType<never>;
        static TYPE: $RecipeComponentType<never>;
        constructor(key: $RecipeComponent<K>, component: $RecipeComponent<V>, bounds: $IntBounds_, patternKey: boolean);
        constructor(key: $RecipeComponent<K>, component: $RecipeComponent<V>, patternKey: boolean, bounds: $IntBounds_, codec: $Codec<$TinyMap_<K, V>>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MapRecipeComponent}.
     */
    export type $MapRecipeComponent_<K, V> = { codec?: $Codec<$TinyMap_<any, any>>, bounds?: $IntBounds_, component?: $RecipeComponent<any>, key?: $RecipeComponent<any>, typeInfo?: $TypeInfo_, patternKey?: boolean,  } | [codec?: $Codec<$TinyMap_<any, any>>, bounds?: $IntBounds_, component?: $RecipeComponent<any>, key?: $RecipeComponent<any>, typeInfo?: $TypeInfo_, patternKey?: boolean, ];
    export class $TimeComponent extends $Record implements $RecipeComponent<$TickDuration> {
        type(): $RecipeComponentType<never>;
        scale(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): $TickDuration;
        isEmpty(value: $TickDuration_): boolean;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$TickDuration>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $TickDuration_): void;
        spread(value: $TickDuration_): $List<never>;
        asList(): $ListRecipeComponent<$TickDuration>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $TickDuration>>;
        asConditionalList(): $ListRecipeComponent<$TickDuration>;
        withCodec(codec: $Codec<$TickDuration_>): $RecipeComponent<$TickDuration>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $TickDuration>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$TickDuration, O>;
        inputKey(name: string): $RecipeKey<$TickDuration>;
        otherKey(name: string): $RecipeKey<$TickDuration>;
        toString(ops: $OpsContainer, value: $TickDuration_): string;
        replace(cx: $RecipeScriptContext, original: $TickDuration_, match: $ReplacementMatchInfo_, arg3: $Object): $TickDuration;
        matches(cx: $RecipeMatchContext, value: $TickDuration_, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $TickDuration_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$TickDuration>;
        asConditionalListOrSelf(): $ListRecipeComponent<$TickDuration>;
        orSelf(): $RecipeComponent<$TickDuration>;
        asListOrSelf(): $ListRecipeComponent<$TickDuration>;
        outputKey(name: string): $RecipeKey<$TickDuration>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TickDuration_>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TickDuration_>, json: $JsonObject_): void;
        static HOURS: $RecipeComponentType<$TickDuration>;
        static TICKS: $RecipeComponentType<$TickDuration>;
        static SECONDS: $RecipeComponentType<$TickDuration>;
        static MINUTES: $RecipeComponentType<$TickDuration>;
        constructor(type: $RecipeComponentType<never>, scale: number, codec: $Codec<$TickDuration_>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TimeComponent}.
     */
    export type $TimeComponent_ = { type?: $RecipeComponentType<never>, codec?: $Codec<$TickDuration_>, scale?: number,  } | [type?: $RecipeComponentType<never>, codec?: $Codec<$TickDuration_>, scale?: number, ];
    export class $CustomObjectRecipeComponent implements $RecipeComponent<$List<$CustomObjectRecipeComponent$Value>> {
        type(): $RecipeComponentType<never>;
        wrap(rcx: $RecipeScriptContext, from: $Object): $List<$CustomObjectRecipeComponent$Value>;
        isEmpty(value: $List_<$CustomObjectRecipeComponent$Value_>): boolean;
        replace(cx: $RecipeScriptContext, original: $List_<$CustomObjectRecipeComponent$Value_>, match: $ReplacementMatchInfo_, arg3: $Object): $List<$CustomObjectRecipeComponent$Value>;
        matches(cx: $RecipeMatchContext, value: $List_<$CustomObjectRecipeComponent$Value_>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $List_<$CustomObjectRecipeComponent$Value_>): void;
        typeInfo(): $TypeInfo;
        keys(): $List<$CustomObjectRecipeComponent$Key>;
        mapCodec(): $MapCodec<$List<$CustomObjectRecipeComponent$Value>>;
        codec(): $Codec<$List<$CustomObjectRecipeComponent$Value>>;
        hasPriority(hasPriority: $Predicate_<$Set<string>>): $CustomObjectRecipeComponent;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        createCopy(): $CustomObjectRecipeComponent;
        buildUniqueId(builder: $UniqueIdBuilder_, list: $List_<$CustomObjectRecipeComponent$Value_>): void;
        spread(value: $List_<$CustomObjectRecipeComponent$Value_>): $List<never>;
        asList(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $List<$CustomObjectRecipeComponent$Value>>>;
        asConditionalList(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        withCodec(codec: $Codec<$List_<$CustomObjectRecipeComponent$Value_>>): $RecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $List<$CustomObjectRecipeComponent$Value>>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$List<$CustomObjectRecipeComponent$Value>, O>;
        inputKey(name: string): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        otherKey(name: string): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        toString(ops: $OpsContainer, value: $List_<$CustomObjectRecipeComponent$Value_>): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        orSelf(): $RecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        asListOrSelf(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        outputKey(name: string): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<$CustomObjectRecipeComponent$Value_>>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<$CustomObjectRecipeComponent$Value_>>, json: $JsonObject_): void;
        static TYPE: $RecipeComponentType<never>;
        constructor(keys: $List_<$CustomObjectRecipeComponent$Key_>);
        get ignored(): boolean;
    }
    export class $BookCategoryComponent {
        static CRAFTING_BOOK_CATEGORY: $RecipeComponentType<$CraftingBookCategory>;
        static COOKING_BOOK_CATEGORY: $RecipeComponentType<$CookingBookCategory>;
        constructor();
    }
    export class $EitherRecipeComponent<H, L> extends $Record implements $RecipeComponent<$Either<H, L>> {
        spread(value: $Either<H, L>): $List<never>;
        left(): $RecipeComponent<H>;
        right(): $RecipeComponent<L>;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $Either<H, L>): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $Either<H, L>;
        replace(cx: $RecipeScriptContext, original: $Either<H, L>, match: $ReplacementMatchInfo_, arg3: $Object): $Either<H, L>;
        matches(cx: $RecipeMatchContext, value: $Either<H, L>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $Either<H, L>): void;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$Either<H, L>>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Either<H, L>): void;
        asList(): $ListRecipeComponent<$Either<H, L>>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Either<H, L>>>;
        asConditionalList(): $ListRecipeComponent<$Either<H, L>>;
        withCodec(codec: $Codec<$Either<H, L>>): $RecipeComponent<$Either<H, L>>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Either<H, L>>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Either<H, L>, O>;
        inputKey(name: string): $RecipeKey<$Either<H, L>>;
        otherKey(name: string): $RecipeKey<$Either<H, L>>;
        isEmpty(value: $Either<H, L>): boolean;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Either<H, L>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Either<H, L>>;
        orSelf(): $RecipeComponent<$Either<H, L>>;
        asListOrSelf(): $ListRecipeComponent<$Either<H, L>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$Either<H, L>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Either<H, L>>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Either<H, L>>, json: $JsonObject_): void;
        static TYPE: $RecipeComponentType<never>;
        constructor(left: $RecipeComponent<H>, right: $RecipeComponent<L>);
        constructor(left: $RecipeComponent<H>, right: $RecipeComponent<L>, codec: $Codec<$Either<H, L>>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EitherRecipeComponent}.
     */
    export type $EitherRecipeComponent_<H, L> = { right?: $RecipeComponent<any>, typeInfo?: $TypeInfo_, left?: $RecipeComponent<any>, codec?: $Codec<$Either<any, any>>,  } | [right?: $RecipeComponent<any>, typeInfo?: $TypeInfo_, left?: $RecipeComponent<any>, codec?: $Codec<$Either<any, any>>, ];
    export class $IgnoreComponent extends $Enum<$IgnoreComponent> implements $RecipeComponent<$Object> {
        isIgnored(): boolean;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        static values(): $IgnoreComponent[];
        static valueOf(name: string): $IgnoreComponent;
        wrap(cx: $RecipeScriptContext, from: $Object): $Object;
        isEmpty(value: $Object): boolean;
        validate(ctx: $RecipeValidationContext, value: $Object): void;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$Object>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Object): void;
        spread(value: $Object): $List<never>;
        asList(): $ListRecipeComponent<$Object>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Object>>;
        asConditionalList(): $ListRecipeComponent<$Object>;
        withCodec(codec: $Codec<$Object>): $RecipeComponent<$Object>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Object>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Object, O>;
        inputKey(name: string): $RecipeKey<$Object>;
        otherKey(name: string): $RecipeKey<$Object>;
        toString(ops: $OpsContainer, value: $Object): string;
        replace(cx: $RecipeScriptContext, original: $Object, match: $ReplacementMatchInfo_, arg3: $Object): $Object;
        matches(cx: $RecipeMatchContext, value: $Object, match: $ReplacementMatchInfo_): boolean;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Object>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Object>;
        orSelf(): $RecipeComponent<$Object>;
        asListOrSelf(): $ListRecipeComponent<$Object>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$Object>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Object>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Object>, json: $JsonObject_): void;
        static CODEC: $Codec<$Object>;
        static INSTANCE: $IgnoreComponent;
        static TYPE: $RecipeComponentType<$Object>;
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IgnoreComponent}.
     */
    export type $IgnoreComponent_ = "instance";
    export class $RecipeComponentValueFunction extends $BaseFunction {
        call(scope: $Scriptable, thisObj: $Scriptable, args: $Object[]): $KubeRecipe;
        componentValue: $RecipeComponentValue<never>;
        static DONTENUM: number;
        static CONST: number;
        recipe: $KubeRecipe;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(recipe: $KubeRecipe, componentValue: $RecipeComponentValue<never>);
    }
    export class $CharacterComponent extends $SimpleRecipeComponent<string> {
        toString(ops: $OpsContainer, value: string): string;
        isEmpty(value: string): boolean;
        static CHARACTER: $RecipeComponentType<string>;
        constructor(type: $RecipeComponentType<never>);
    }
    export class $ItemStackComponent extends $Record implements $RecipeComponent<$ItemStack> {
        spread(value: $ItemStack_): $List<$ItemStack>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $ItemStack_): string;
        isEmpty(value: $ItemStack_): boolean;
        matches(cx: $RecipeMatchContext, value: $ItemStack_, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $ItemStack_): void;
        filter(): $Ingredient;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$ItemStack>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $ItemStack_): void;
        asList(): $ListRecipeComponent<$ItemStack>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $ItemStack>>;
        asConditionalList(): $ListRecipeComponent<$ItemStack>;
        withCodec(codec: $Codec<$ItemStack_>): $RecipeComponent<$ItemStack>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $ItemStack>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$ItemStack, O>;
        inputKey(name: string): $RecipeKey<$ItemStack>;
        otherKey(name: string): $RecipeKey<$ItemStack>;
        wrap(cx: $RecipeScriptContext, from: $Object): $ItemStack;
        replace(cx: $RecipeScriptContext, original: $ItemStack_, match: $ReplacementMatchInfo_, arg3: $Object): $ItemStack;
        key(name: string, role: $ComponentRole_): $RecipeKey<$ItemStack>;
        asConditionalListOrSelf(): $ListRecipeComponent<$ItemStack>;
        orSelf(): $RecipeComponent<$ItemStack>;
        asListOrSelf(): $ListRecipeComponent<$ItemStack>;
        outputKey(name: string): $RecipeKey<$ItemStack>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ItemStack_>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ItemStack_>, json: $JsonObject_): void;
        static ITEM_STACK: $RecipeComponentType<$ItemStack>;
        static FILTERED_ITEM_STACK: $RecipeComponentType<never>;
        static OPTIONAL_ITEM_STACK: $RecipeComponentType<$ItemStack>;
        constructor(type: $RecipeComponentType<never>, allowEmpty: boolean, filter: $Ingredient_);
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$ItemStack_>, allowEmpty: boolean, filter: $Ingredient_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemStackComponent}.
     */
    export type $ItemStackComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, filter?: $Ingredient_, codec?: $Codec<$ItemStack_>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, filter?: $Ingredient_, codec?: $Codec<$ItemStack_>, ];
    export class $BooleanComponent implements $RecipeComponent<boolean> {
        type(): $RecipeComponentType<never>;
        typeInfo(): $TypeInfo;
        codec(): $Codec<boolean>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        spread(value: boolean): $List<never>;
        asList(): $ListRecipeComponent<boolean>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, boolean>>;
        asConditionalList(): $ListRecipeComponent<boolean>;
        withCodec(codec: $Codec<boolean>): $RecipeComponent<boolean>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, boolean>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<boolean, O>;
        inputKey(name: string): $RecipeKey<boolean>;
        otherKey(name: string): $RecipeKey<boolean>;
        toString(ops: $OpsContainer, value: boolean): string;
        isEmpty(value: boolean): boolean;
        replace(cx: $RecipeScriptContext, original: boolean, match: $ReplacementMatchInfo_, arg3: $Object): boolean;
        matches(cx: $RecipeMatchContext, value: boolean, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: boolean): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<boolean>;
        asConditionalListOrSelf(): $ListRecipeComponent<boolean>;
        orSelf(): $RecipeComponent<boolean>;
        asListOrSelf(): $ListRecipeComponent<boolean>;
        outputKey(name: string): $RecipeKey<boolean>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<boolean>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: boolean): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<boolean>, json: $JsonObject_): void;
        wrap(cx: $RecipeScriptContext, from: $Object): boolean;
        static BOOLEAN: $RecipeComponentType<boolean>;
        constructor();
        get ignored(): boolean;
    }
    export class $RecipeValidationContext$Impl extends $Record implements $RecipeValidationContext {
        errors(): $ErrorStack;
        recipe(): $KubeRecipe;
        ops(): $RegistryOpsContainer;
        registries(): $RegistryAccessContainer;
        constructor(recipe: $KubeRecipe, errors: $ErrorStack);
    }
    /**
     * Values that may be interpreted as {@link $RecipeValidationContext$Impl}.
     */
    export type $RecipeValidationContext$Impl_ = { errors?: $ErrorStack, recipe?: $KubeRecipe,  } | [errors?: $ErrorStack, recipe?: $KubeRecipe, ];
    export class $TagKeyComponent<T> extends $Record implements $RecipeComponent<$TagKey<T>> {
        registry(): $ResourceKey<$Registry<$TagKey<T>>>;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): $TagKey<$TagKey<T>>;
        typeInfo(): $TypeInfo;
        hashed(): boolean;
        codec(): $Codec<$TagKey<$TagKey<T>>>;
        registryType(): $TypeInfo;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $TagKey_<$TagKey<T>>): void;
        typeOverride(): $RecipeComponentType<never>;
        spread(value: $TagKey_<T>): $List<never>;
        asList(): $ListRecipeComponent<$TagKey<T>>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $TagKey<T>>>;
        asConditionalList(): $ListRecipeComponent<$TagKey<T>>;
        withCodec(codec: $Codec<$TagKey_<T>>): $RecipeComponent<$TagKey<T>>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $TagKey<T>>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$TagKey<T>, O>;
        inputKey(name: string): $RecipeKey<$TagKey<T>>;
        otherKey(name: string): $RecipeKey<$TagKey<T>>;
        toString(ops: $OpsContainer, value: $TagKey_<T>): string;
        isEmpty(value: $TagKey_<T>): boolean;
        replace(cx: $RecipeScriptContext, original: $TagKey_<T>, match: $ReplacementMatchInfo_, arg3: $Object): $TagKey<T>;
        matches(cx: $RecipeMatchContext, value: $TagKey_<T>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $TagKey_<T>): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$TagKey<T>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$TagKey<T>>;
        orSelf(): $RecipeComponent<$TagKey<T>>;
        asListOrSelf(): $ListRecipeComponent<$TagKey<T>>;
        outputKey(name: string): $RecipeKey<$TagKey<T>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TagKey_<T>>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TagKey_<T>>, json: $JsonObject_): void;
        static ITEM: $RecipeComponentType<$TagKey<$Item>>;
        static HASHED_FLUID: $RecipeComponentType<$TagKey<$Fluid>>;
        static HASHED_ENTITY_TYPE: $RecipeComponentType<$TagKey<$EntityType<never>>>;
        static BIOME: $RecipeComponentType<$TagKey<$Biome>>;
        static FLUID: $RecipeComponentType<$TagKey<$Fluid>>;
        static HASHED_ITEM: $RecipeComponentType<$TagKey<$Item>>;
        static BLOCK: $RecipeComponentType<$TagKey<$Block>>;
        static TAG_KEY_TYPE: $TypeInfo;
        static HASHED_BLOCK: $RecipeComponentType<$TagKey<$Block>>;
        static ENTITY_TYPE: $RecipeComponentType<$TagKey<$EntityType<never>>>;
        static TYPE: $RecipeComponentType<never>;
        static HASHED_BIOME: $RecipeComponentType<$TagKey<$Biome>>;
        constructor(typeOverride: $RecipeComponentType<never>, registry: $ResourceKey_<$Registry<$TagKey<T>>>, registryType: $TypeInfo_, hashed: boolean);
        constructor(typeOverride: $RecipeComponentType<never>, registry: $ResourceKey_<$Registry<$TagKey<T>>>, registryType: $TypeInfo_, codec: $Codec<$TagKey_<$TagKey<T>>>, typeInfo: $TypeInfo_, hashed: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TagKeyComponent}.
     */
    export type $TagKeyComponent_<T> = { codec?: $Codec<$TagKey_<any>>, registry?: $ResourceKey_<$Registry<any>>, registryType?: $TypeInfo_, typeOverride?: $RecipeComponentType<never>, typeInfo?: $TypeInfo_, hashed?: boolean,  } | [codec?: $Codec<$TagKey_<any>>, registry?: $ResourceKey_<$Registry<any>>, registryType?: $TypeInfo_, typeOverride?: $RecipeComponentType<never>, typeInfo?: $TypeInfo_, hashed?: boolean, ];
    export class $BlockComponent extends $Record implements $RecipeComponent<$Block> {
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $Block_): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $Block;
        isEmpty(value: $Block_): boolean;
        matches(cx: $RecipeMatchContext, value: $Block_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$Block>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Block_): void;
        spread(value: $Block_): $List<never>;
        asList(): $ListRecipeComponent<$Block>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Block>>;
        asConditionalList(): $ListRecipeComponent<$Block>;
        withCodec(codec: $Codec<$Block_>): $RecipeComponent<$Block>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Block>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Block, O>;
        inputKey(name: string): $RecipeKey<$Block>;
        otherKey(name: string): $RecipeKey<$Block>;
        replace(cx: $RecipeScriptContext, original: $Block_, match: $ReplacementMatchInfo_, arg3: $Object): $Block;
        validate(ctx: $RecipeValidationContext, value: $Block_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Block>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Block>;
        orSelf(): $RecipeComponent<$Block>;
        asListOrSelf(): $ListRecipeComponent<$Block>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$Block>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Block_>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Block_>, json: $JsonObject_): void;
        static BLOCK: $RecipeComponentType<$Block>;
        static OPTIONAL_BLOCK: $RecipeComponentType<$Block>;
        constructor(allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockComponent}.
     */
    export type $BlockComponent_ = { allowEmpty?: boolean,  } | [allowEmpty?: boolean, ];
    export class $RecipeComponentType$Unit$Simple<T> extends $Record implements $Function<$RecipeComponentType<T>, $RecipeComponent<T>> {
        compose<V>(arg0: $Function_<V, $RecipeComponentType<T>>): $Function<V, $RecipeComponent<T>>;
        andThen<V>(arg0: $Function_<$RecipeComponent<T>, V>): $Function<$RecipeComponentType<T>, V>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentType$Unit$Simple}.
     */
    export type $RecipeComponentType$Unit$Simple_<T> = { value?: $RecipeComponent<any>,  } | [value?: $RecipeComponent<any>, ];
    export class $RecipeComponentWithParent<T> {
    }
    export interface $RecipeComponentWithParent<T> extends $RecipeComponent<T> {
        spread(value: T): $List<never>;
        allowEmpty(): boolean;
        createBuilder(): $RecipeComponentBuilder;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        typeInfo(): $TypeInfo;
        codec(): $Codec<T>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        parentComponent(): $RecipeComponent<T>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
    }
    export class $FluidStackComponent extends $Record implements $RecipeComponent<$FluidStack> {
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        isEmpty(value: $FluidStack_): boolean;
        matches(cx: $RecipeMatchContext, value: $FluidStack_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$FluidStack>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $FluidStack_): void;
        spread(value: $FluidStack_): $List<never>;
        asList(): $ListRecipeComponent<$FluidStack>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $FluidStack>>;
        asConditionalList(): $ListRecipeComponent<$FluidStack>;
        withCodec(codec: $Codec<$FluidStack_>): $RecipeComponent<$FluidStack>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $FluidStack>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$FluidStack, O>;
        inputKey(name: string): $RecipeKey<$FluidStack>;
        otherKey(name: string): $RecipeKey<$FluidStack>;
        toString(ops: $OpsContainer, value: $FluidStack_): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $FluidStack;
        replace(cx: $RecipeScriptContext, original: $FluidStack_, match: $ReplacementMatchInfo_, arg3: $Object): $FluidStack;
        validate(ctx: $RecipeValidationContext, value: $FluidStack_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$FluidStack>;
        asConditionalListOrSelf(): $ListRecipeComponent<$FluidStack>;
        orSelf(): $RecipeComponent<$FluidStack>;
        asListOrSelf(): $ListRecipeComponent<$FluidStack>;
        outputKey(name: string): $RecipeKey<$FluidStack>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$FluidStack_>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$FluidStack_>, json: $JsonObject_): void;
        static FLUID_STACK: $RecipeComponentType<$FluidStack>;
        static OPTIONAL_FLUID_STACK: $RecipeComponentType<$FluidStack>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$FluidStack_>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidStackComponent}.
     */
    export type $FluidStackComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$FluidStack_>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$FluidStack_>, ];
    export class $CustomObjectRecipeComponent$Value extends $Record implements $Map$Entry<$CustomObjectRecipeComponent$Key, $Object>, $Comparable<$CustomObjectRecipeComponent$Value> {
        index(): number;
        value(): $Object;
        compareTo(value: $CustomObjectRecipeComponent$Value_): number;
        getValue(): $Object;
        key(): $CustomObjectRecipeComponent$Key;
        setValue(object: $Object): $Object;
        getKey(): $CustomObjectRecipeComponent$Key;
        constructor(key: $CustomObjectRecipeComponent$Key_, index: number, value: $Object);
    }
    /**
     * Values that may be interpreted as {@link $CustomObjectRecipeComponent$Value}.
     */
    export type $CustomObjectRecipeComponent$Value_ = { index?: number, value?: $Object, key?: $CustomObjectRecipeComponent$Key_,  } | [index?: number, value?: $Object, key?: $CustomObjectRecipeComponent$Key_, ];
    export class $SimpleRecipeComponent<T> implements $RecipeComponent<T> {
        type(): $RecipeComponentType<never>;
        typeInfo(): $TypeInfo;
        codec(): $Codec<T>;
        spread(value: T): $List<never>;
        asList(): $ListRecipeComponent<T>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, T>>;
        asConditionalList(): $ListRecipeComponent<T>;
        withCodec(codec: $Codec<T>): $RecipeComponent<T>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, T>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<T, O>;
        inputKey(name: string): $RecipeKey<T>;
        otherKey(name: string): $RecipeKey<T>;
        toString(ops: $OpsContainer, value: T): string;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        asConditionalListOrSelf(): $ListRecipeComponent<T>;
        orSelf(): $RecipeComponent<T>;
        asListOrSelf(): $ListRecipeComponent<T>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<T>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<T>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    export class $RecipeComponentCodecFactory<CT extends $RecipeComponent<never>> {
    }
    export interface $RecipeComponentCodecFactory<CT extends $RecipeComponent<never>> {
        create(type: $RecipeComponentType<never>, ctx: $RecipeTypeRegistryContext_): $MapCodec<CT>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentCodecFactory}.
     */
    export type $RecipeComponentCodecFactory_<CT> = ((type: $RecipeComponentType<never>, ctx: $RecipeTypeRegistryContext) => $MapCodec_<CT>);
    export class $RecipeComponentTypeRegistry {
    }
    export interface $RecipeComponentTypeRegistry {
        register(type: $RecipeComponentType<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentTypeRegistry}.
     */
    export type $RecipeComponentTypeRegistry_ = ((type: $RecipeComponentType<never>) => void);
    export class $ComponentValueMap extends $Reference2ObjectOpenHashMap<$RecipeKey<never>, $Object> {
        getValue<T>(cx: $RecipeScriptContext, key: $RecipeKey<T>): T;
        constructor(init: number);
    }
    export class $RecipeComponentType$Unit<T> extends $RecipeComponentType<T> {
    }
    export class $RecipeComponentValue<T> implements $WrappedJS, $Map$Entry<$RecipeKey<T>, T> {
        getIndex(): number;
        getValue(): T;
        replace(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        matches(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, sourceLine: $SourceLine_): void;
        write(): void;
        setValue(newValue: T): T;
        copy(): $RecipeComponentValue<T>;
        shouldWrite(): boolean;
        getKey(): $RecipeKey<T>;
        static EMPTY_ARRAY: $RecipeComponentValue<never>[];
        index: number;
        value: T;
        key: $RecipeKey<T>;
        constructor(key: $RecipeKey<T>, index: number);
    }
    export class $BlockStateComponent extends $Record implements $RecipeComponent<$BlockState> {
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $BlockState_): string;
        isEmpty(value: $BlockState_): boolean;
        matches(cx: $RecipeMatchContext, value: $BlockState_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$BlockState>;
        preferObjectForm(): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $BlockState_): void;
        spread(value: $BlockState_): $List<never>;
        asList(): $ListRecipeComponent<$BlockState>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $BlockState>>;
        asConditionalList(): $ListRecipeComponent<$BlockState>;
        withCodec(codec: $Codec<$BlockState_>): $RecipeComponent<$BlockState>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $BlockState>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$BlockState, O>;
        inputKey(name: string): $RecipeKey<$BlockState>;
        otherKey(name: string): $RecipeKey<$BlockState>;
        replace(cx: $RecipeScriptContext, original: $BlockState_, match: $ReplacementMatchInfo_, arg3: $Object): $BlockState;
        validate(ctx: $RecipeValidationContext, value: $BlockState_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$BlockState>;
        asConditionalListOrSelf(): $ListRecipeComponent<$BlockState>;
        orSelf(): $RecipeComponent<$BlockState>;
        asListOrSelf(): $ListRecipeComponent<$BlockState>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$BlockState>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$BlockState_>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$BlockState_>, json: $JsonObject_): void;
        wrap(cx: $RecipeScriptContext, from: $Object): $BlockState;
        static OPTIONAL_BLOCK_STRING: $RecipeComponentType<$BlockState>;
        static BLOCK_STRING: $RecipeComponentType<$BlockState>;
        static TYPE_INFO: $TypeInfo;
        static BLOCK: $RecipeComponentType<$BlockState>;
        static OPTIONAL_BLOCK: $RecipeComponentType<$BlockState>;
        constructor(type: $RecipeComponentType<never>, preferObjectForm: boolean, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockStateComponent}.
     */
    export type $BlockStateComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, preferObjectForm?: boolean,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, preferObjectForm?: boolean, ];
    export class $ResourceKeyComponent<T> extends $Record implements $RecipeComponent<$ResourceKey<T>> {
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $ResourceKey_<$ResourceKey<T>>): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $ResourceKey<$ResourceKey<T>>;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$ResourceKey<$ResourceKey<T>>>;
        registryKey(): $ResourceKey<$Registry<$ResourceKey<T>>>;
        typeOverride(): $RecipeComponentType<never>;
        spread(value: $ResourceKey_<T>): $List<never>;
        asList(): $ListRecipeComponent<$ResourceKey<T>>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $ResourceKey<T>>>;
        asConditionalList(): $ListRecipeComponent<$ResourceKey<T>>;
        withCodec(codec: $Codec<$ResourceKey_<T>>): $RecipeComponent<$ResourceKey<T>>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $ResourceKey<T>>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$ResourceKey<T>, O>;
        inputKey(name: string): $RecipeKey<$ResourceKey<T>>;
        otherKey(name: string): $RecipeKey<$ResourceKey<T>>;
        isEmpty(value: $ResourceKey_<T>): boolean;
        replace(cx: $RecipeScriptContext, original: $ResourceKey_<T>, match: $ReplacementMatchInfo_, arg3: $Object): $ResourceKey<T>;
        matches(cx: $RecipeMatchContext, value: $ResourceKey_<T>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $ResourceKey_<T>): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$ResourceKey<T>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$ResourceKey<T>>;
        orSelf(): $RecipeComponent<$ResourceKey<T>>;
        asListOrSelf(): $ListRecipeComponent<$ResourceKey<T>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$ResourceKey<T>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ResourceKey_<T>>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $ResourceKey_<T>): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ResourceKey_<T>>, json: $JsonObject_): void;
        static DIMENSION: $RecipeComponentType<$ResourceKey<$Level>>;
        static LOOT_TABLE: $RecipeComponentType<$ResourceKey<$LootTable>>;
        static TYPE: $RecipeComponentType<never>;
        constructor(typeOverride: $RecipeComponentType<never>, registryKey: $ResourceKey_<$Registry<$ResourceKey<T>>>, codec: $Codec<$ResourceKey_<$ResourceKey<T>>>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ResourceKeyComponent}.
     */
    export type $ResourceKeyComponent_<T> = { registryKey?: $ResourceKey_<$Registry<any>>, typeInfo?: $TypeInfo_, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<$ResourceKey_<any>>,  } | [registryKey?: $ResourceKey_<$Registry<any>>, typeInfo?: $TypeInfo_, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<$ResourceKey_<any>>, ];
    export class $NumberComponent$LongRange extends $Record implements $NumberComponent<$NumberComponent$LongRange, number> {
        range(min: number, max: number): $NumberComponent$LongRange;
        type(): $RecipeComponentType<never>;
        min(): number;
        static of(typeOverride: $RecipeComponentType<never>, min: number, max: number): $NumberComponent$LongRange;
        typeInfo(): $TypeInfo;
        codec(): $Codec<number>;
        typeOverride(): $RecipeComponentType<never>;
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: number, max: number): string;
        min(min: number): $NumberComponent<$NumberComponent$LongRange, number>;
        max(max: number): $NumberComponent<$NumberComponent$LongRange, number>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        spread(value: number): $List<never>;
        asList(): $ListRecipeComponent<number>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, number>>;
        asConditionalList(): $ListRecipeComponent<number>;
        withCodec(codec: $Codec<number>): $RecipeComponent<number>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, number>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<number, O>;
        inputKey(name: string): $RecipeKey<number>;
        otherKey(name: string): $RecipeKey<number>;
        toString(ops: $OpsContainer, value: number): string;
        isEmpty(value: number): boolean;
        replace(cx: $RecipeScriptContext, original: number, match: $ReplacementMatchInfo_, arg3: $Object): number;
        matches(cx: $RecipeMatchContext, value: number, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: number): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<number>;
        asConditionalListOrSelf(): $ListRecipeComponent<number>;
        orSelf(): $RecipeComponent<number>;
        asListOrSelf(): $ListRecipeComponent<number>;
        outputKey(name: string): $RecipeKey<number>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: number): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        max(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): number;
        constructor(typeOverride: $RecipeComponentType<never>, min: number, max: number, codec: $Codec<number>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NumberComponent$LongRange}.
     */
    export type $NumberComponent$LongRange_ = { max?: number, min?: number, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>,  } | [max?: number, min?: number, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, ];
    export class $RecipeComponent<T> {
        static builder(...keys: $CustomObjectRecipeComponent$Key_[]): $CustomObjectRecipeComponent;
        static builder(keys: $List_<$CustomObjectRecipeComponent$Key_>): $CustomObjectRecipeComponent;
    }
    export interface $RecipeComponent<T> {
        spread(value: T): $List<never>;
        asList(): $ListRecipeComponent<T>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, T>>;
        asConditionalList(): $ListRecipeComponent<T>;
        withCodec(codec: $Codec<T>): $RecipeComponent<T>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, T>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<T, O>;
        inputKey(name: string): $RecipeKey<T>;
        otherKey(name: string): $RecipeKey<T>;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: T): string;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        typeInfo(): $TypeInfo;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        asConditionalListOrSelf(): $ListRecipeComponent<T>;
        codec(): $Codec<T>;
        orSelf(): $RecipeComponent<T>;
        asListOrSelf(): $ListRecipeComponent<T>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<T>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        get ignored(): boolean;
    }
    export class $RecipeComponentWithCodec<T> extends $Record implements $RecipeComponentWithParent<T> {
        parent(): $RecipeComponent<T>;
        type(): $RecipeComponentType<never>;
        codec(): $Codec<T>;
        parentComponent(): $RecipeComponent<T>;
        spread(value: T): $List<never>;
        allowEmpty(): boolean;
        createBuilder(): $RecipeComponentBuilder;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        typeInfo(): $TypeInfo;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        asList(): $ListRecipeComponent<T>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, T>>;
        asConditionalList(): $ListRecipeComponent<T>;
        withCodec(codec: $Codec<T>): $RecipeComponent<T>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, T>>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<T, O>;
        inputKey(name: string): $RecipeKey<T>;
        otherKey(name: string): $RecipeKey<T>;
        toString(ops: $OpsContainer, value: T): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        asConditionalListOrSelf(): $ListRecipeComponent<T>;
        orSelf(): $RecipeComponent<T>;
        asListOrSelf(): $ListRecipeComponent<T>;
        outputKey(name: string): $RecipeKey<T>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        constructor(parent: $RecipeComponent<T>, codec: $Codec<T>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentWithCodec}.
     */
    export type $RecipeComponentWithCodec_<T> = { codec?: $Codec<any>, parent?: $RecipeComponent<any>,  } | [codec?: $Codec<any>, parent?: $RecipeComponent<any>, ];
    export class $FluidIngredientComponent extends $Record implements $RecipeComponent<$FluidIngredient> {
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $FluidIngredient_): string;
        isEmpty(value: $FluidIngredient_): boolean;
        matches(cx: $RecipeMatchContext, value: $FluidIngredient_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$FluidIngredient>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $FluidIngredient_): void;
        spread(value: $FluidIngredient_): $List<never>;
        asList(): $ListRecipeComponent<$FluidIngredient>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $FluidIngredient>>;
        asConditionalList(): $ListRecipeComponent<$FluidIngredient>;
        withCodec(codec: $Codec<$FluidIngredient_>): $RecipeComponent<$FluidIngredient>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $FluidIngredient>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$FluidIngredient, O>;
        inputKey(name: string): $RecipeKey<$FluidIngredient>;
        otherKey(name: string): $RecipeKey<$FluidIngredient>;
        wrap(cx: $RecipeScriptContext, from: $Object): $FluidIngredient;
        replace(cx: $RecipeScriptContext, original: $FluidIngredient_, match: $ReplacementMatchInfo_, arg3: $Object): $FluidIngredient;
        validate(ctx: $RecipeValidationContext, value: $FluidIngredient_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$FluidIngredient>;
        asConditionalListOrSelf(): $ListRecipeComponent<$FluidIngredient>;
        orSelf(): $RecipeComponent<$FluidIngredient>;
        asListOrSelf(): $ListRecipeComponent<$FluidIngredient>;
        outputKey(name: string): $RecipeKey<$FluidIngredient>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$FluidIngredient_>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$FluidIngredient_>, json: $JsonObject_): void;
        static FLUID_INGREDIENT: $RecipeComponentType<$FluidIngredient>;
        static OPTIONAL_FLUID_INGREDIENT: $RecipeComponentType<$FluidIngredient>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$FluidIngredient_>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredientComponent}.
     */
    export type $FluidIngredientComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$FluidIngredient_>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$FluidIngredient_>, ];
    export class $SizedFluidIngredientComponent extends $Record implements $RecipeComponent<$SizedFluidIngredient> {
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        isEmpty(value: $SizedFluidIngredient): boolean;
        matches(cx: $RecipeMatchContext, value: $SizedFluidIngredient, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$SizedFluidIngredient>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $SizedFluidIngredient): void;
        spread(value: $SizedFluidIngredient): $List<never>;
        asList(): $ListRecipeComponent<$SizedFluidIngredient>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $SizedFluidIngredient>>;
        asConditionalList(): $ListRecipeComponent<$SizedFluidIngredient>;
        withCodec(codec: $Codec<$SizedFluidIngredient>): $RecipeComponent<$SizedFluidIngredient>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $SizedFluidIngredient>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$SizedFluidIngredient, O>;
        inputKey(name: string): $RecipeKey<$SizedFluidIngredient>;
        otherKey(name: string): $RecipeKey<$SizedFluidIngredient>;
        toString(ops: $OpsContainer, value: $SizedFluidIngredient): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $SizedFluidIngredient;
        replace(cx: $RecipeScriptContext, original: $SizedFluidIngredient, match: $ReplacementMatchInfo_, arg3: $Object): $SizedFluidIngredient;
        validate(ctx: $RecipeValidationContext, value: $SizedFluidIngredient): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$SizedFluidIngredient>;
        asConditionalListOrSelf(): $ListRecipeComponent<$SizedFluidIngredient>;
        orSelf(): $RecipeComponent<$SizedFluidIngredient>;
        asListOrSelf(): $ListRecipeComponent<$SizedFluidIngredient>;
        outputKey(name: string): $RecipeKey<$SizedFluidIngredient>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$SizedFluidIngredient>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$SizedFluidIngredient>, json: $JsonObject_): void;
        static OPTIONAL_FLAT: $RecipeComponentType<$SizedFluidIngredient>;
        static OPTIONAL_NESTED: $RecipeComponentType<$SizedFluidIngredient>;
        static FLAT: $RecipeComponentType<$SizedFluidIngredient>;
        static NESTED: $RecipeComponentType<$SizedFluidIngredient>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$SizedFluidIngredient>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SizedFluidIngredientComponent}.
     */
    export type $SizedFluidIngredientComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$SizedFluidIngredient>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$SizedFluidIngredient>, ];
    export class $NumberComponent<S, T extends $Number> {
        static longRange(min: number, max: number): $NumberComponent$LongRange;
        static intRange(min: number, max: number): $NumberComponent$IntRange;
        static floatRange(min: number, max: number): $NumberComponent$FloatRange;
        static doubleRange(min: number, max: number): $NumberComponent$DoubleRange;
        static NON_NEGATIVE_DOUBLE: $RecipeComponentType<number>;
        static POSITIVE_FLOAT: $RecipeComponentType<number>;
        static FLOAT: $NumberComponent$FloatRange;
        static DOUBLE_TYPE: $RecipeComponentType<never>;
        static LONG_TYPE: $RecipeComponentType<never>;
        static POSITIVE_INT: $RecipeComponentType<number>;
        static NON_NEGATIVE_FLOAT: $RecipeComponentType<number>;
        static FLOAT_TYPE: $RecipeComponentType<never>;
        static INT: $NumberComponent$IntRange;
        static NON_NEGATIVE_INT: $RecipeComponentType<number>;
        static POSITIVE_LONG: $RecipeComponentType<number>;
        static NON_NEGATIVE_LONG: $RecipeComponentType<number>;
        static DOUBLE: $NumberComponent$DoubleRange;
        static POSITIVE_DOUBLE: $RecipeComponentType<number>;
        static LONG: $NumberComponent$LongRange;
        static INT_TYPE: $RecipeComponentType<never>;
    }
    export interface $NumberComponent<S, T extends $Number> extends $RecipeComponent<T> {
        range(min: T, max: T): $NumberComponent<S, T>;
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: T, max: T): string;
        min(min: T): $NumberComponent<S, T>;
        min(): T;
        max(): T;
        max(max: T): $NumberComponent<S, T>;
        typeInfo(): $TypeInfo;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
    }
    export class $RecipeComponentType$Dynamic$Simple extends $Record implements $RecipeComponentCodecFactory<$RecipeComponent<never>> {
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentType$Dynamic$Simple}.
     */
    export type $RecipeComponentType$Dynamic$Simple_ = { mapCodec?: $MapCodec_<any>,  } | [mapCodec?: $MapCodec_<any>, ];
    export class $RecipeValidationContext {
    }
    export interface $RecipeValidationContext extends $KubeRecipeContext, $RecipeMatchContext {
        errors(): $ErrorStack;
    }
    export class $RecipeComponentBuilder {
    }
    export interface $RecipeComponentBuilder {
    }
    export class $ComponentRole extends $Enum<$ComponentRole> implements $StringRepresentable {
        isOther(): boolean;
        static values(): $ComponentRole[];
        static valueOf(name: string): $ComponentRole;
        getSerializedName(): string;
        isInput(): boolean;
        isOutput(): boolean;
        getRemappedEnumConstantName(): string;
        static OTHER: $ComponentRole;
        static INPUT: $ComponentRole;
        static CODEC: $Codec<$ComponentRole>;
        static OUTPUT: $ComponentRole;
        get other(): boolean;
        get serializedName(): string;
        get input(): boolean;
        get output(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ComponentRole}.
     */
    export type $ComponentRole_ = "input" | "output" | "other";
    export class $RecipeComponentType$Dynamic<T> extends $RecipeComponentType<T> {
    }
    export class $NumberComponent$IntRange extends $Record implements $NumberComponent<$NumberComponent$IntRange, number> {
        range(min: number, max: number): $NumberComponent$IntRange;
        type(): $RecipeComponentType<never>;
        min(): number;
        static of(typeOverride: $RecipeComponentType<never>, min: number, max: number): $NumberComponent$IntRange;
        typeInfo(): $TypeInfo;
        codec(): $Codec<number>;
        typeOverride(): $RecipeComponentType<never>;
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: number, max: number): string;
        min(min: number): $NumberComponent<$NumberComponent$IntRange, number>;
        max(max: number): $NumberComponent<$NumberComponent$IntRange, number>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        spread(value: number): $List<never>;
        asList(): $ListRecipeComponent<number>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, number>>;
        asConditionalList(): $ListRecipeComponent<number>;
        withCodec(codec: $Codec<number>): $RecipeComponent<number>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, number>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<number, O>;
        inputKey(name: string): $RecipeKey<number>;
        otherKey(name: string): $RecipeKey<number>;
        toString(ops: $OpsContainer, value: number): string;
        isEmpty(value: number): boolean;
        replace(cx: $RecipeScriptContext, original: number, match: $ReplacementMatchInfo_, arg3: $Object): number;
        matches(cx: $RecipeMatchContext, value: number, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: number): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<number>;
        asConditionalListOrSelf(): $ListRecipeComponent<number>;
        orSelf(): $RecipeComponent<number>;
        asListOrSelf(): $ListRecipeComponent<number>;
        outputKey(name: string): $RecipeKey<number>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: number): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        max(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): number;
        constructor(typeOverride: $RecipeComponentType<never>, min: number, max: number, codec: $Codec<number>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NumberComponent$IntRange}.
     */
    export type $NumberComponent$IntRange_ = { max?: number, min?: number, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>,  } | [max?: number, min?: number, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, ];
    export class $NumberComponent$DoubleRange extends $Record implements $NumberComponent<$NumberComponent$DoubleRange, number> {
        range(min: number, max: number): $NumberComponent$DoubleRange;
        type(): $RecipeComponentType<never>;
        min(): number;
        static of(typeOverride: $RecipeComponentType<never>, min: number, max: number): $NumberComponent$DoubleRange;
        typeInfo(): $TypeInfo;
        codec(): $Codec<number>;
        typeOverride(): $RecipeComponentType<never>;
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: number, max: number): string;
        min(min: number): $NumberComponent<$NumberComponent$DoubleRange, number>;
        max(max: number): $NumberComponent<$NumberComponent$DoubleRange, number>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        spread(value: number): $List<never>;
        asList(): $ListRecipeComponent<number>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, number>>;
        asConditionalList(): $ListRecipeComponent<number>;
        withCodec(codec: $Codec<number>): $RecipeComponent<number>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, number>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<number, O>;
        inputKey(name: string): $RecipeKey<number>;
        otherKey(name: string): $RecipeKey<number>;
        toString(ops: $OpsContainer, value: number): string;
        isEmpty(value: number): boolean;
        replace(cx: $RecipeScriptContext, original: number, match: $ReplacementMatchInfo_, arg3: $Object): number;
        matches(cx: $RecipeMatchContext, value: number, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: number): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<number>;
        asConditionalListOrSelf(): $ListRecipeComponent<number>;
        orSelf(): $RecipeComponent<number>;
        asListOrSelf(): $ListRecipeComponent<number>;
        outputKey(name: string): $RecipeKey<number>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: number): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        max(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): number;
        constructor(typeOverride: $RecipeComponentType<never>, min: number, max: number, codec: $Codec<number>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NumberComponent$DoubleRange}.
     */
    export type $NumberComponent$DoubleRange_ = { max?: number, min?: number, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>,  } | [max?: number, min?: number, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, ];
    export class $RecipeComponentValueMap extends $AbstractMap<$RecipeKey<never>, $Object> {
        put(key: $RecipeKey<never>, value: $Object): $Object;
        getHolder(key: $Object): $RecipeComponentValue<never>;
        holders: $RecipeComponentValue<never>[];
        static EMPTY: $RecipeComponentValueMap;
        constructor(holders: $RecipeComponentValue<never>[]);
        constructor(keys: $List_<$RecipeKey<never>>);
    }
    export class $SizedIngredientComponent extends $Record implements $RecipeComponent<$SizedIngredient> {
        spread(value: $SizedIngredient_): $List<$Ingredient>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        isEmpty(value: $SizedIngredient_): boolean;
        matches(cx: $RecipeMatchContext, value: $SizedIngredient_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        codec(): $Codec<$SizedIngredient>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $SizedIngredient_): void;
        asList(): $ListRecipeComponent<$SizedIngredient>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $SizedIngredient>>;
        asConditionalList(): $ListRecipeComponent<$SizedIngredient>;
        withCodec(codec: $Codec<$SizedIngredient_>): $RecipeComponent<$SizedIngredient>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $SizedIngredient>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$SizedIngredient, O>;
        inputKey(name: string): $RecipeKey<$SizedIngredient>;
        otherKey(name: string): $RecipeKey<$SizedIngredient>;
        toString(ops: $OpsContainer, value: $SizedIngredient_): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $SizedIngredient;
        replace(cx: $RecipeScriptContext, original: $SizedIngredient_, match: $ReplacementMatchInfo_, arg3: $Object): $SizedIngredient;
        validate(ctx: $RecipeValidationContext, value: $SizedIngredient_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$SizedIngredient>;
        asConditionalListOrSelf(): $ListRecipeComponent<$SizedIngredient>;
        orSelf(): $RecipeComponent<$SizedIngredient>;
        asListOrSelf(): $ListRecipeComponent<$SizedIngredient>;
        outputKey(name: string): $RecipeKey<$SizedIngredient>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$SizedIngredient_>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$SizedIngredient_>, json: $JsonObject_): void;
        static OPTIONAL_FLAT: $RecipeComponentType<$SizedIngredient>;
        static OPTIONAL_SIZED_INGREDIENT: $RecipeComponentType<$SizedIngredient>;
        static FLAT: $RecipeComponentType<$SizedIngredient>;
        static SIZED_INGREDIENT: $RecipeComponentType<$SizedIngredient>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$SizedIngredient_>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SizedIngredientComponent}.
     */
    export type $SizedIngredientComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$SizedIngredient_>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$SizedIngredient_>, ];
    export class $StringComponent extends $Record implements $RecipeComponent<string> {
        spread(value: string): $List<string>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: string): string;
        isEmpty(value: string): boolean;
        typeInfo(): $TypeInfo;
        codec(): $Codec<string>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asList(): $ListRecipeComponent<string>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, string>>;
        asConditionalList(): $ListRecipeComponent<string>;
        withCodec(codec: $Codec<string>): $RecipeComponent<string>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, string>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<string, O>;
        inputKey(name: string): $RecipeKey<string>;
        otherKey(name: string): $RecipeKey<string>;
        wrap(cx: $RecipeScriptContext, from: $Object): string;
        replace(cx: $RecipeScriptContext, original: string, match: $ReplacementMatchInfo_, arg3: $Object): string;
        matches(cx: $RecipeMatchContext, value: string, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: string): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<string>;
        asConditionalListOrSelf(): $ListRecipeComponent<string>;
        orSelf(): $RecipeComponent<string>;
        asListOrSelf(): $ListRecipeComponent<string>;
        outputKey(name: string): $RecipeKey<string>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<string>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: string): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<string>, json: $JsonObject_): void;
        static OPTIONAL_STRING: $RecipeComponentType<string>;
        static STRING: $RecipeComponentType<string>;
        static ID: $RecipeComponentType<string>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<string>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StringComponent}.
     */
    export type $StringComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<string>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<string>, ];
    export class $CustomObjectRecipeComponent$Key extends $Record {
        optional(): boolean;
        name(): string;
        component(): $RecipeComponent<never>;
        static createCodec(ctx: $RecipeTypeRegistryContext_): $Codec<$CustomObjectRecipeComponent$Key>;
        alwaysWrite(): boolean;
        constructor(name: string, component: $RecipeComponent<never>, optional: boolean);
        constructor(name: string, component: $RecipeComponent<never>, optional: boolean, alwaysWrite: boolean);
        constructor(name: string, component: $RecipeComponent<never>);
    }
    /**
     * Values that may be interpreted as {@link $CustomObjectRecipeComponent$Key}.
     */
    export type $CustomObjectRecipeComponent$Key_ = { name?: string, optional?: boolean, alwaysWrite?: boolean, component?: $RecipeComponent<never>,  } | [name?: string, optional?: boolean, alwaysWrite?: boolean, component?: $RecipeComponent<never>, ];
    export class $ListRecipeComponent<T> extends $Record implements $RecipeComponent<$List<T>> {
        spread(): ($RecipeComponent<never>) | undefined;
        spread(value: $List_<$List_<T>>): $List<never>;
        static create<L>(component: $RecipeComponent<L>, canWriteSelf: boolean, conditional: boolean, bounds: $IntBounds_, spread: ($RecipeComponent<never>) | undefined): $ListRecipeComponent<L>;
        static create<L>(component: $RecipeComponent<L>, canWriteSelf: boolean, conditional: boolean): $ListRecipeComponent<L>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): $List<$List<T>>;
        isEmpty(value: $List_<$List_<T>>): boolean;
        replace(cx: $RecipeScriptContext, original: $List_<$List_<T>>, match: $ReplacementMatchInfo_, arg3: $Object): $List<$List<T>>;
        matches(cx: $RecipeMatchContext, value: $List_<$List_<T>>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $List_<$List_<T>>): void;
        component(): $RecipeComponent<$List<T>>;
        bounds(): $IntBounds;
        typeInfo(): $TypeInfo;
        conditional(): boolean;
        codec(): $Codec<$List<$List<T>>>;
        listCodec(): $Codec<$List<$List<T>>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        withBounds(bounds: $IntBounds_): $ListRecipeComponent<$List<T>>;
        canWriteSelf(): boolean;
        listTypeInfo(): $TypeInfo;
        asConditional(): $ListRecipeComponent<$List<T>>;
        spreadWrap(): ($RecipeComponent<never>) | undefined;
        static wrap0<T>(cx: $RecipeScriptContext, component: $RecipeComponent<T>, from: $Object): $List<T>;
        withSpread(spread: ($RecipeComponent<never>) | undefined): $ListRecipeComponent<$List<T>>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $List_<$List_<T>>): void;
        asList(): $ListRecipeComponent<$List<T>>;
        isIgnored(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $List<T>>>;
        asConditionalList(): $ListRecipeComponent<$List<T>>;
        withCodec(codec: $Codec<$List_<T>>): $RecipeComponent<$List<T>>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $List<T>>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$List<T>, O>;
        inputKey(name: string): $RecipeKey<$List<T>>;
        otherKey(name: string): $RecipeKey<$List<T>>;
        toString(ops: $OpsContainer, value: $List_<T>): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<$List<T>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$List<T>>;
        asListOrSelf(): $ListRecipeComponent<$List<T>>;
        outputKey(name: string): $RecipeKey<$List<T>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<T>>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<T>>, json: $JsonObject_): void;
        orSelf(): $RecipeComponent<$List<T>>;
        static TYPE: $RecipeComponentType<never>;
        constructor(component: $RecipeComponent<$List_<T>>, canWriteSelf: boolean, listTypeInfo: $TypeInfo_, listCodec: $Codec<$List_<$List_<T>>>, conditional: boolean, bounds: $IntBounds_, spread: ($RecipeComponent<never>) | undefined, spreadWrap: ($RecipeComponent<never>) | undefined);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ListRecipeComponent}.
     */
    export type $ListRecipeComponent_<T> = { listCodec?: $Codec<$List_<any>>, conditional?: boolean, listTypeInfo?: $TypeInfo_, bounds?: $IntBounds_, spread?: ($RecipeComponent<never>) | undefined, spreadWrap?: ($RecipeComponent<never>) | undefined, component?: $RecipeComponent<any>, canWriteSelf?: boolean,  } | [listCodec?: $Codec<$List_<any>>, conditional?: boolean, listTypeInfo?: $TypeInfo_, bounds?: $IntBounds_, spread?: ($RecipeComponent<never>) | undefined, spreadWrap?: ($RecipeComponent<never>) | undefined, component?: $RecipeComponent<any>, canWriteSelf?: boolean, ];
    export class $EnumComponent<T extends $Enum<T>> extends $Record implements $RecipeComponent<T> {
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: T): string;
        static of<T extends $Enum<T>>(id: $ResourceLocation_, enumClass: $Class<T>): $RecipeComponentType<T>;
        static of<T extends $Enum<T>>(id: $ResourceLocation_, enumClass: $Class<T>, codec: $Codec<T>): $RecipeComponentType<T>;
        typeInfo(): $EnumTypeInfo;
        codec(): $Codec<T>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        typeOverride(): $RecipeComponentType<never>;
        spread(value: T): $List<never>;
        asList(): $ListRecipeComponent<T>;
        isIgnored(): boolean;
        allowEmpty(): boolean;
        asPatternKey(): $RecipeComponent<$TinyMap<string, T>>;
        asConditionalList(): $ListRecipeComponent<T>;
        withCodec(codec: $Codec<T>): $RecipeComponent<T>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, T>>;
        createBuilder(): $RecipeComponentBuilder;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<T, O>;
        inputKey(name: string): $RecipeKey<T>;
        otherKey(name: string): $RecipeKey<T>;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        asConditionalListOrSelf(): $ListRecipeComponent<T>;
        orSelf(): $RecipeComponent<T>;
        asListOrSelf(): $ListRecipeComponent<T>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<T>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        static TYPE: $RecipeComponentType<never>;
        constructor(typeOverride: $RecipeComponentType<never>, typeInfo: $EnumTypeInfo, codec: $Codec<T>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnumComponent}.
     */
    export type $EnumComponent_<T> = { typeInfo?: $EnumTypeInfo, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<$Enum<T>>,  } | [typeInfo?: $EnumTypeInfo, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<$Enum<T>>, ];
    export class $RecipeComponentType<T> {
        instance(): $RecipeComponent<T>;
        static unit<T>(id: $ResourceLocation_, instanceGetter: $Function_<$RecipeComponentType<T>, $RecipeComponent<T>>): $RecipeComponentType$Unit<T>;
        static unit<T>(id: $ResourceLocation_, instance: $RecipeComponent<T>): $RecipeComponentType$Unit<T>;
        static dynamic<CT extends $RecipeComponent<never>>(id: $ResourceLocation_, mapCodec: $MapCodec_<CT>): $RecipeComponentType<never>;
        static dynamic<CT extends $RecipeComponent<never>>(id: $ResourceLocation_, codecFactory: $RecipeComponentCodecFactory_<CT>): $RecipeComponentType<never>;
        inputKey(name: string): $RecipeKey<T>;
        otherKey(name: string): $RecipeKey<T>;
        id(): $ResourceLocation;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        mapCodec(ctx: $RecipeTypeRegistryContext_): $MapCodec<$RecipeComponent<never>>;
        isUnit(): boolean;
        outputKey(name: string): $RecipeKey<T>;
        constructor(id: $ResourceLocation_);
    }
}
