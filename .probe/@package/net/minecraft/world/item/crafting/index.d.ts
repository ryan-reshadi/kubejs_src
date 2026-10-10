import { $JsonElement } from "@package/com/google/gson";
import { $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ShapedRecipeAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $IntFunction, $Predicate_, $Predicate } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { RegistryMarked, RegistryTypes, SpecialTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $ISidedRecipeManager } from "@package/net/darkhax/bookshelf/common/api/data";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Enum, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $SizedIngredient, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemLike_, $ItemLike, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ExtendedIngredient } from "@package/org/embeddedt/modernfix/neoforge/recipe";
import { $FireworkExplosion$Shape } from "@package/net/minecraft/world/item/component";
import { $Multimap } from "@package/com/google/common/collect";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $AccessorRecipeManager } from "@package/net/darkhax/bookshelf/common/mixin/access/level";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Stream } from "@package/java/util/stream";
import { $RecipeInputMixin } from "@package/dev/latvian/mods/kubejs/core/mixin";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $IngredientKJS, $RecipeHolderKJS, $ReloadableServerResourcesKJS, $RecipeInputKJS, $RecipeManagerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/crafting" {
    export class $RecipeCache$Entry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RecipeCache$Entry}.
     */
    export type $RecipeCache$Entry_ = { value?: $RecipeHolder_<$CraftingRecipe>, height?: number, key?: $NonNullList<$ItemStack_>, width?: number,  } | [value?: $RecipeHolder_<$CraftingRecipe>, height?: number, key?: $NonNullList<$ItemStack_>, width?: number, ];
    export class $Recipe<T extends $RecipeInput> {
        static CODEC: $Codec<$Recipe<never>>;
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$Recipe<never>>) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Recipe<never>>;
    }
    export interface $Recipe<T extends $RecipeInput> {
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        matches(input: T, level: $Level_): boolean;
        getType(): $RecipeType<never>;
        assemble(input: T, registries: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(input: T): $NonNullList<$ItemStack>;
        getSerializer(): $RecipeSerializer<never>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        get group(): string;
        get special(): boolean;
        get type(): $RecipeType<never>;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $CampfireCookingRecipe extends $AbstractCookingRecipe {
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $SmithingRecipeInput extends $Record implements $RecipeInput {
        addition(): $ItemStack;
        getItem(arg0: number): $ItemStack;
        template(): $ItemStack;
        base(): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SmithingRecipeInput}.
     */
    export type $SmithingRecipeInput_ = { template?: $ItemStack_, addition?: $ItemStack_, base?: $ItemStack_,  } | [template?: $ItemStack_, addition?: $ItemStack_, base?: $ItemStack_, ];
    export class $Ingredient$TagValue extends $Record implements $Ingredient$Value {
        tag(): $TagKey<$Item>;
        getItems(): $Collection<$ItemStack>;
        constructor(tag: $TagKey_<$Item>);
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$TagValue}.
     */
    export type $Ingredient$TagValue_ = { tag?: $TagKey_<$Item>,  } | [tag?: $TagKey_<$Item>, ];
    export class $RecipeCache {
        get(level: $Level_, input: $CraftingInput): ($RecipeHolder<$CraftingRecipe>) | undefined;
        constructor(size: number);
    }
    export class $RecipeHolder<T extends $Recipe<never>> extends $Record implements $RecipeHolderKJS {
        value(): T;
        id(): $ResourceLocation;
        kjs$getTypeKey(): $ResourceKey<any>;
        self(): $RecipeHolder<never>;
        getSerializer(): $RecipeSerializer<never>;
        getRecipe(): $Recipe<never>;
        getGroup(): string;
        setGroup(group: string): void;
        getOrCreateId(): $ResourceLocation;
        getSchema(): $RecipeSchema;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getType(): $ResourceLocation;
        getMod(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeHolder<never>>;
        constructor(arg0: $ResourceLocation_, arg1: T);
        get serializer(): $RecipeSerializer<never>;
        get recipe(): $Recipe<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
        get type(): $ResourceLocation;
        get mod(): string;
    }
    /**
     * Values that may be interpreted as {@link $RecipeHolder}.
     */
    export type $RecipeHolder_<T> = { value?: $Recipe<never>, id?: $ResourceLocation_,  } | [value?: $Recipe<never>, id?: $ResourceLocation_, ];
    export class $SuspiciousStewRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $Ingredient$Value {
        static CODEC: $Codec<$Ingredient$Value>;
        static MAP_CODEC: $MapCodec<$Ingredient$Value>;
    }
    export interface $Ingredient$Value {
        getItems(): $Collection<$ItemStack>;
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$Value}.
     */
    export type $Ingredient$Value_ = (() => $Collection_<$ItemStack_>);
    export interface $RecipeType<T> extends RegistryMarked<RegistryTypes.RecipeTypeTag, RegistryTypes.RecipeType> {}
    export class $SingleItemRecipe$Factory<T extends $SingleItemRecipe> {
    }
    export interface $SingleItemRecipe$Factory<T extends $SingleItemRecipe> {
        create(group: string, ingredient: $Ingredient_, result: $ItemStack_): T;
    }
    /**
     * Values that may be interpreted as {@link $SingleItemRecipe$Factory}.
     */
    export type $SingleItemRecipe$Factory_<T> = ((arg0: string, arg1: $Ingredient, arg2: $ItemStack) => T);
    export class $CraftingInput implements $RecipeInput {
        items(): $List<$ItemStack>;
        getItem(index: number): $ItemStack;
        getItem(row: number, column: number): $ItemStack;
        static ofPositioned(width: number, height: number, items: $List_<$ItemStack_>): $CraftingInput$Positioned;
        height(): number;
        width(): number;
        size(): number;
        isEmpty(): boolean;
        static of(width: number, height: number, items: $List_<$ItemStack_>): $CraftingInput;
        stackedContents(): $StackedContents;
        ingredientCount(): number;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        static EMPTY: $CraftingInput;
        constructor(width: number, height: number, item: $List_<$ItemStack_>);
        get empty(): boolean;
    }
    export class $CookingBookCategory extends $Enum<$CookingBookCategory> implements $StringRepresentable {
        static values(): $CookingBookCategory[];
        static valueOf(arg0: string): $CookingBookCategory;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$CookingBookCategory>;
        static BLOCKS: $CookingBookCategory;
        static MISC: $CookingBookCategory;
        static FOOD: $CookingBookCategory;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CookingBookCategory}.
     */
    export type $CookingBookCategory_ = "food" | "blocks" | "misc";
    export class $Ingredient implements $Predicate<$ItemStack>, $ExtendedIngredient, $IngredientKJS {
        isSimple(): boolean;
        getValues(): $Ingredient$Value[];
        test(stack: $ItemStack_ | null): boolean;
        isEmpty(): boolean;
        static of(...stacks: $ItemStack_[]): $Ingredient;
        static of(stream: $Stream<$ItemStack_>): $Ingredient;
        static of(tag: $TagKey_<$Item>): $Ingredient;
        static of(...items: $ItemLike_[]): $Ingredient;
        static of(): $Ingredient;
        self(): $Ingredient;
        static fromValues(stream: $Stream<$Ingredient$Value_>): $Ingredient;
        getStackingIds(): $IntList;
        isCustom(): boolean;
        hasNoItems(): boolean;
        handler$zfb000$modernfix$hasNoItems(arg0: $CallbackInfoReturnable<any>): void;
        getCustomIngredient(): $ICustomIngredient;
        mfix$clearReference(): void;
        canBeUsedForMatching(): boolean;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        isWildcard(): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        asIngredient(): $Ingredient;
        withCount(count: number): $SizedIngredient;
        and(ingredient: $Ingredient_): $Ingredient;
        getStackArray(): $ItemStack[];
        getDisplayStacks(): $ItemStackSet;
        or(ingredient: $Ingredient_): $Ingredient;
        except(subtracted: $Ingredient_): $Ingredient;
        asStack(): $SizedIngredient;
        getTagKey(): $TagKey<$Item>;
        containsAnyTag(): boolean;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        static CODEC: $Codec<$Ingredient>;
        static LIST_CODEC_NONEMPTY: $Codec<$List<$Ingredient>>;
        stackingIds: $IntList;
        static CODEC_NONEMPTY: $Codec<$Ingredient>;
        static CONTENTS_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Ingredient>;
        values: $Ingredient$Value[];
        static LIST_CODEC: $Codec<$List<$Ingredient>>;
        itemStacks: $ItemStack[];
        static EMPTY: $Ingredient;
        static MAP_CODEC_NONEMPTY: $MapCodec<$Ingredient>;
        constructor(values: $Stream<$Ingredient$Value_>);
        constructor(arg0: $ICustomIngredient);
        get simple(): boolean;
        get empty(): boolean;
        get custom(): boolean;
        get customIngredient(): $ICustomIngredient;
        get codec(): $Codec<never>;
        get wildcard(): boolean;
        get stackArray(): $ItemStack[];
        get displayStacks(): $ItemStackSet;
        get tagKey(): $TagKey<$Item>;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient}.
     */
    export type $Ingredient_ = $ItemStack_ | $Ingredient[] | RegExp | "*" | "-" | `#${RegistryTypes.ItemTag}` | `@${SpecialTypes.ModId}` | `%${RegistryTypes.CreativeModeTab}`;
    export class $SmithingTransformRecipe implements $SmithingRecipe {
        matches(input: $SmithingRecipeInput_, level: $Level_): boolean;
        isTemplateIngredient(stack: $ItemStack_): boolean;
        isBaseIngredient(stack: $ItemStack_): boolean;
        isAdditionIngredient(stack: $ItemStack_): boolean;
        assemble(input: $SmithingRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getType(): $RecipeType<never>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getToastSymbol(): $ItemStack;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getRemainingItems(input: $SmithingRecipeInput_): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        template: $Ingredient;
        result: $ItemStack;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_, result: $ItemStack_);
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get type(): $RecipeType<never>;
        get toastSymbol(): $ItemStack;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
    }
    export interface $RecipeSerializer<T> extends RegistryMarked<RegistryTypes.RecipeSerializerTag, RegistryTypes.RecipeSerializer> {}
    export class $SmokingRecipe extends $AbstractCookingRecipe {
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $RecipeManager extends $SimpleJsonResourceReloadListener implements $AccessorRecipeManager, $ISidedRecipeManager, $RecipeManagerKJS {
        byKey(recipeId: $ResourceLocation_): ($RecipeHolder<never>) | undefined;
        kjs$getRecipeIdMap(): $Map<any, any>;
        kjs$replaceRecipes(map: $Map_<any, any>): void;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        getRecipeIds(): $Stream<$ResourceLocation>;
        getAllRecipesFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>): $List<$RecipeHolder<T>>;
        getRecipesFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_): $List<$RecipeHolder<T>>;
        getRecipes(): $Collection<$RecipeHolder<never>>;
        static createCheck<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>): $RecipeManager$CachedCheck<I, T>;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_, lastRecipe: $RecipeHolder_<T> | null): ($RecipeHolder<T>) | undefined;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_, lastRecipe: $ResourceLocation_ | null): ($RecipeHolder<T>) | undefined;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_): ($RecipeHolder<T>) | undefined;
        getRemainingItemsFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, lvel: $Level_): $NonNullList<$ItemStack>;
        replaceRecipes(recipes: $Iterable_<$RecipeHolder<never>>): void;
        bookshelf$setLogicalClient(): void;
        getOrderedRecipes(): $Collection<$RecipeHolder<never>>;
        hadErrorsLoading(): boolean;
        bookshelf$setLogicalServer(): void;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        bookshelf$byTypeMap(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        static LOGGER: $Logger;
        constructor(registries: $HolderLookup$Provider);
        get recipeIds(): $Stream<$ResourceLocation>;
        get recipes(): $Collection<$RecipeHolder<never>>;
        get orderedRecipes(): $Collection<$RecipeHolder<never>>;
    }
    export class $SimpleCraftingRecipeSerializer<T extends $CraftingRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(_constructor: $SimpleCraftingRecipeSerializer$Factory_<T>);
    }
    export class $CraftingBookCategory extends $Enum<$CraftingBookCategory> implements $StringRepresentable {
        static values(): $CraftingBookCategory[];
        static valueOf(arg0: string): $CraftingBookCategory;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static EQUIPMENT: $CraftingBookCategory;
        static CODEC: $Codec<$CraftingBookCategory>;
        static BUILDING: $CraftingBookCategory;
        static REDSTONE: $CraftingBookCategory;
        static MISC: $CraftingBookCategory;
        static BY_ID: $IntFunction<$CraftingBookCategory>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CraftingBookCategory>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CraftingBookCategory}.
     */
    export type $CraftingBookCategory_ = "building" | "redstone" | "equipment" | "misc";
    export class $MapExtendingRecipe extends $ShapedRecipe {
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        constructor(category: $CraftingBookCategory_);
    }
    export class $CraftingInput$Positioned extends $Record {
        input(): $CraftingInput;
        left(): number;
        top(): number;
        static EMPTY: $CraftingInput$Positioned;
        constructor(arg0: $CraftingInput, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingInput$Positioned}.
     */
    export type $CraftingInput$Positioned_ = { input?: $CraftingInput, left?: number, top?: number,  } | [input?: $CraftingInput, left?: number, top?: number, ];
    export class $ShapedRecipe$Serializer implements $RecipeSerializer<$ShapedRecipe> {
        codec(): $MapCodec<$ShapedRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipe>;
        static CODEC: $MapCodec<$ShapedRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipe>;
        constructor();
    }
    export class $CraftingRecipe {
    }
    export interface $CraftingRecipe extends $Recipe<$CraftingInput> {
        category(): $CraftingBookCategory;
        getType(): $RecipeType<never>;
        get type(): $RecipeType<never>;
    }
    export class $ShapedRecipe implements $CraftingRecipe, $ShapedRecipeAccessor {
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        category(): $CraftingBookCategory;
        getWidth(): number;
        matches(input: $CraftingInput, level: $Level_): boolean;
        getHeight(): number;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getType(): $RecipeType<never>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        getToastSymbol(): $ItemStack;
        create$getPattern(): $ShapedRecipePattern;
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        constructor(group: string, category: $CraftingBookCategory_, pattern: $ShapedRecipePattern, result: $ItemStack_, showNotification: boolean);
        constructor(group: string, category: $CraftingBookCategory_, pattern: $ShapedRecipePattern, result: $ItemStack_);
        get group(): string;
        get width(): number;
        get height(): number;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $FireworkStarRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        static SHAPE_INGREDIENT: $Ingredient;
        static SHAPE_BY_ITEM: $Map<$Item, $FireworkExplosion$Shape>;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SmithingRecipe {
    }
    export interface $SmithingRecipe extends $Recipe<$SmithingRecipeInput> {
        getType(): $RecipeType<never>;
        isTemplateIngredient(stack: $ItemStack_): boolean;
        isBaseIngredient(stack: $ItemStack_): boolean;
        isAdditionIngredient(stack: $ItemStack_): boolean;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getToastSymbol(): $ItemStack;
        get type(): $RecipeType<never>;
        get toastSymbol(): $ItemStack;
    }
    export class $SingleRecipeInput extends $Record implements $RecipeInput {
        getItem(arg0: number): $ItemStack;
        item(): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(arg0: $ItemStack_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SingleRecipeInput}.
     */
    export type $SingleRecipeInput_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $AbstractCookingRecipe implements $Recipe<$SingleRecipeInput> {
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        category(): $CookingBookCategory;
        matches(input: $SingleRecipeInput_, level: $Level_): boolean;
        getType(): $RecipeType<never>;
        assemble(input: $SingleRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        /**
         * Gets the cook time in ticks
         */
        getCookingTime(): number;
        /**
         * Gets the experience of this recipe
         */
        getExperience(): number;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getRemainingItems(input: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(type: $RecipeType_<never>, group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
        get group(): string;
        get type(): $RecipeType<never>;
        get cookingTime(): number;
        get experience(): number;
        get ingredients(): $NonNullList<$Ingredient>;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $ShieldDecorationRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $ArmorDyeRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $Ingredient$ItemValue extends $Record implements $Ingredient$Value {
        item(): $ItemStack;
        getItems(): $Collection<$ItemStack>;
        constructor(item: $ItemStack_);
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$ItemValue}.
     */
    export type $Ingredient$ItemValue_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $SimpleCookingSerializer<T extends $AbstractCookingRecipe> implements $RecipeSerializer<T> {
        create(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number): $AbstractCookingRecipe;
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(factory: $AbstractCookingRecipe$Factory_<T>, cookingTime: number);
    }
    export class $MapCloningRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SingleItemRecipe$Serializer<T extends $SingleItemRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    export class $ShapelessRecipe$Serializer implements $RecipeSerializer<$ShapelessRecipe> {
        codec(): $MapCodec<$ShapelessRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessRecipe>;
        static CODEC: $MapCodec<$ShapelessRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessRecipe>;
        constructor();
    }
    export class $ShapedRecipePattern$Data extends $Record {
        pattern(): $List<string>;
        key(): $Map<string, $Ingredient>;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern$Data>;
        constructor(key: $Map_<string, $Ingredient_>, pattern: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $ShapedRecipePattern$Data}.
     */
    export type $ShapedRecipePattern$Data_ = { pattern?: $List_<string>, key?: $Map_<string, $Ingredient_>,  } | [pattern?: $List_<string>, key?: $Map_<string, $Ingredient_>, ];
    export class $ShapedRecipePattern {
        height(): number;
        width(): number;
        matches(input: $CraftingInput): boolean;
        static of(key: $Map_<string, $Ingredient_>, pattern: $List_<string>): $ShapedRecipePattern;
        static of(key: $Map_<string, $Ingredient_>, ...pattern: string[]): $ShapedRecipePattern;
        ingredients(): $NonNullList<$Ingredient>;
        static getMaxWidth(): number;
        static getMaxHeight(): number;
        static setCraftingSize(arg0: number, arg1: number): void;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern>;
        symmetrical: boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipePattern>;
        constructor(width: number, height: number, ingredients: $NonNullList<$Ingredient_>, data: ($ShapedRecipePattern$Data_) | undefined);
        static get maxWidth(): number;
        static get maxHeight(): number;
    }
    export class $ShapelessRecipe implements $CraftingRecipe {
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        category(): $CraftingBookCategory;
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getType(): $RecipeType<never>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        result: $ItemStack;
        ingredients: $NonNullList<$Ingredient>;
        group: string;
        constructor(group: string, category: $CraftingBookCategory_, result: $ItemStack_, ingredients: $NonNullList<$Ingredient_>);
        get serializer(): $RecipeSerializer<never>;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $BannerDuplicateRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SingleItemRecipe implements $Recipe<$SingleRecipeInput> {
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getType(): $RecipeType<never>;
        assemble(input: $SingleRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getRemainingItems(input: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(type: $RecipeType_<never>, serializer: $RecipeSerializer_<never>, group: string, ingredient: $Ingredient_, result: $ItemStack_);
        get group(): string;
        get type(): $RecipeType<never>;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $FireworkRocketRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $DecoratedPotRecipe extends $CustomRecipe {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $StonecutterRecipe extends $SingleItemRecipe {
        matches(input: $SingleRecipeInput_, level: $Level_): boolean;
        constructor(group: string, ingredient: $Ingredient_, result: $ItemStack_);
    }
    export class $BlastingRecipe extends $AbstractCookingRecipe {
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $SmithingTransformRecipe$Serializer implements $RecipeSerializer<$SmithingTransformRecipe> {
        codec(): $MapCodec<$SmithingTransformRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTransformRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTransformRecipe>;
        constructor();
    }
    export class $ShulkerBoxColoring extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $TippedArrowRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> {
    }
    export interface $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> {
        create(category: $CraftingBookCategory_): T;
    }
    /**
     * Values that may be interpreted as {@link $SimpleCraftingRecipeSerializer$Factory}.
     */
    export type $SimpleCraftingRecipeSerializer$Factory_<T> = ((arg0: $CraftingBookCategory) => T);
    export class $SmithingTrimRecipe$Serializer implements $RecipeSerializer<$SmithingTrimRecipe> {
        codec(): $MapCodec<$SmithingTrimRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTrimRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTrimRecipe>;
        constructor();
    }
    export class $CustomRecipe implements $CraftingRecipe {
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        category(): $CraftingBookCategory;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getType(): $RecipeType<never>;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        constructor(category: $CraftingBookCategory_);
        get special(): boolean;
        get type(): $RecipeType<never>;
        get group(): string;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $SmithingTrimRecipe implements $SmithingRecipe {
        matches(input: $SmithingRecipeInput_, level: $Level_): boolean;
        isTemplateIngredient(stack: $ItemStack_): boolean;
        isBaseIngredient(stack: $ItemStack_): boolean;
        isAdditionIngredient(stack: $ItemStack_): boolean;
        assemble(input: $SmithingRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getType(): $RecipeType<never>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getToastSymbol(): $ItemStack;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getRemainingItems(input: $SmithingRecipeInput_): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        template: $Ingredient;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_);
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get type(): $RecipeType<never>;
        get toastSymbol(): $ItemStack;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
    }
    export class $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<I>> {
    }
    export interface $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<I>> {
        getRecipeFor(input: I, level: $Level_): ($RecipeHolder<T>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $RecipeManager$CachedCheck}.
     */
    export type $RecipeManager$CachedCheck_<I, T> = ((arg0: I, arg1: $Level) => ($RecipeHolder_<T>) | undefined);
    export class $RecipeType<T extends $Recipe<never>> {
        static register<T extends $Recipe<never>>(identifier: string): $RecipeType<T>;
        static simple<T extends $Recipe<never>>(arg0: $ResourceLocation_): $RecipeType<T>;
        static BLASTING: $RecipeType<$BlastingRecipe>;
        static STONECUTTING: $RecipeType<$StonecutterRecipe>;
        static CRAFTING: $RecipeType<$CraftingRecipe>;
        static SMELTING: $RecipeType<$SmeltingRecipe>;
        static SMOKING: $RecipeType<$SmokingRecipe>;
        static CAMPFIRE_COOKING: $RecipeType<$CampfireCookingRecipe>;
        static SMITHING: $RecipeType<$SmithingRecipe>;
    }
    export interface $RecipeType<T extends $Recipe<never>> {
    }
    /**
     * Values that may be interpreted as {@link $RecipeType}.
     */
    export type $RecipeType_<T> = RegistryTypes.RecipeType;
    export class $SmeltingRecipe extends $AbstractCookingRecipe {
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $AbstractCookingRecipe$Factory<T extends $AbstractCookingRecipe> {
    }
    export interface $AbstractCookingRecipe$Factory<T extends $AbstractCookingRecipe> {
        create(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number): T;
    }
    /**
     * Values that may be interpreted as {@link $AbstractCookingRecipe$Factory}.
     */
    export type $AbstractCookingRecipe$Factory_<T> = ((arg0: string, arg1: $CookingBookCategory, arg2: $Ingredient, arg3: $ItemStack, arg4: number, arg5: number) => T);
    export class $RecipeInput {
    }
    export interface $RecipeInput extends $RecipeInputKJS, $RecipeInputMixin {
        getItem(index: number): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        get empty(): boolean;
    }
    export class $RecipeSerializer<T extends $Recipe<never>> {
        static register<S extends $RecipeSerializer<T>, T extends $Recipe<never>>(key: string, recipeSerializer: S): S;
        static MAP_CLONING: $RecipeSerializer<$MapCloningRecipe>;
        static SMELTING_RECIPE: $RecipeSerializer<$SmeltingRecipe>;
        static REPAIR_ITEM: $RecipeSerializer<$RepairItemRecipe>;
        static FIREWORK_STAR: $RecipeSerializer<$FireworkStarRecipe>;
        static FIREWORK_STAR_FADE: $RecipeSerializer<$FireworkStarFadeRecipe>;
        static SMOKING_RECIPE: $RecipeSerializer<$SmokingRecipe>;
        static SHAPED_RECIPE: $RecipeSerializer<$ShapedRecipe>;
        static ARMOR_DYE: $RecipeSerializer<$ArmorDyeRecipe>;
        static MAP_EXTENDING: $RecipeSerializer<$MapExtendingRecipe>;
        static BOOK_CLONING: $RecipeSerializer<$BookCloningRecipe>;
        static SMITHING_TRANSFORM: $RecipeSerializer<$SmithingTransformRecipe>;
        static BANNER_DUPLICATE: $RecipeSerializer<$BannerDuplicateRecipe>;
        static CAMPFIRE_COOKING_RECIPE: $RecipeSerializer<$CampfireCookingRecipe>;
        static STONECUTTER: $RecipeSerializer<$StonecutterRecipe>;
        static DECORATED_POT_RECIPE: $RecipeSerializer<$DecoratedPotRecipe>;
        static TIPPED_ARROW: $RecipeSerializer<$TippedArrowRecipe>;
        static SHIELD_DECORATION: $RecipeSerializer<$ShieldDecorationRecipe>;
        static BLASTING_RECIPE: $RecipeSerializer<$BlastingRecipe>;
        static SHAPELESS_RECIPE: $RecipeSerializer<$ShapelessRecipe>;
        static SHULKER_BOX_COLORING: $RecipeSerializer<$ShulkerBoxColoring>;
        static SMITHING_TRIM: $RecipeSerializer<$SmithingTrimRecipe>;
        static SUSPICIOUS_STEW: $RecipeSerializer<$SuspiciousStewRecipe>;
        static FIREWORK_ROCKET: $RecipeSerializer<$FireworkRocketRecipe>;
    }
    export interface $RecipeSerializer<T extends $Recipe<never>> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeSerializer}.
     */
    export type $RecipeSerializer_<T> = RegistryTypes.RecipeSerializer;
    export class $FireworkStarFadeRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $RepairItemRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $BookCloningRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        constructor(category: $CraftingBookCategory_);
    }
}
