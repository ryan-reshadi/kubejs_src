import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AbstractCookingRecipe, $RecipeSerializer_, $Ingredient, $Ingredient_, $Recipe, $AbstractCookingRecipe$Factory_, $SingleItemRecipe$Factory_, $AbstractCookingRecipe$Factory, $SingleItemRecipe$Factory, $CraftingBookCategory, $CookingBookCategory } from "@package/net/minecraft/world/item/crafting";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $List, $Map } from "@package/java/util";
import { $CachedOutput_, $DataProvider, $PackOutput } from "@package/net/minecraft/data";
import { $AdvancementHolder_, $Advancement$Builder, $Criterion, $Criterion_ } from "@package/net/minecraft/advancements";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $IRecipeOutputExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
export * as packs from "@package/net/minecraft/data/recipes/packs";

declare module "@package/net/minecraft/data/recipes" {
    export class $SmithingTrimRecipeBuilder {
        save(recipeOutput: $RecipeOutput, recipeId: $ResourceLocation_): void;
        unlocks(key: string, criterion: $Criterion_<never>): $SmithingTrimRecipeBuilder;
        static smithingTrim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_, category: $RecipeCategory_): $SmithingTrimRecipeBuilder;
        template: $Ingredient;
        criteria: $Map<string, $Criterion<never>>;
        category: $RecipeCategory;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(category: $RecipeCategory_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_);
    }
    export class $SpecialRecipeBuilder {
        save(recipeOutput: $RecipeOutput, recipeId: $ResourceLocation_): void;
        save(recipeOutput: $RecipeOutput, recipeId: string): void;
        static special(factory: $Function_<$CraftingBookCategory, $Recipe<never>>): $SpecialRecipeBuilder;
        constructor(factory: $Function_<$CraftingBookCategory, $Recipe<never>>);
    }
    export class $RecipeProvider implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $SmithingTransformRecipeBuilder {
        save(recipeOutput: $RecipeOutput, recipeId: string): void;
        save(recipeOutput: $RecipeOutput, recipeId: $ResourceLocation_): void;
        static smithing(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_, category: $RecipeCategory_, result: $Item_): $SmithingTransformRecipeBuilder;
        unlocks(key: string, criterion: $Criterion_<never>): $SmithingTransformRecipeBuilder;
        template: $Ingredient;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        category: $RecipeCategory;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_, category: $RecipeCategory_, result: $Item_);
    }
    export class $ShapelessRecipeBuilder implements $RecipeBuilder {
        getResult(): $Item;
        /**
         * Adds the given ingredient multiple times.
         */
        requires(item: $ItemLike_, quantity: number): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient of the given item.
         */
        requires(item: $ItemLike_): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient that can be any item in the given tag.
         */
        requires(tag: $TagKey_<$Item>): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient.
         */
        requires(ingredient: $Ingredient_): $ShapelessRecipeBuilder;
        /**
         * Adds an ingredient multiple times.
         */
        requires(ingredient: $Ingredient_, quantity: number): $ShapelessRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        static shapeless(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapelessRecipeBuilder;
        /**
         * Creates a new builder for a shapeless recipe.
         */
        static shapeless(category: $RecipeCategory_, result: $ItemLike_): $ShapelessRecipeBuilder;
        /**
         * Creates a new builder for a shapeless recipe.
         */
        static shapeless(category: $RecipeCategory_, result: $ItemLike_, count: number): $ShapelessRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: string): void;
        save(recipeOutput: $RecipeOutput): void;
        group(groupName: string | null): $RecipeBuilder;
        unlockedBy(name: string, criterion: $Criterion_<never>): $RecipeBuilder;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        count: number;
        resultStack: $ItemStack;
        ingredients: $NonNullList<$Ingredient>;
        category: $RecipeCategory;
        constructor(category: $RecipeCategory_, result: $ItemLike_, count: number);
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
    }
    export class $ShapedRecipeBuilder implements $RecipeBuilder {
        /**
         * Adds a key to the recipe pattern.
         */
        define(symbol: string, tag: $TagKey_<$Item>): $ShapedRecipeBuilder;
        /**
         * Adds a key to the recipe pattern.
         */
        define(symbol: string, ingredient: $Ingredient_): $ShapedRecipeBuilder;
        /**
         * Adds a key to the recipe pattern.
         */
        define(symbol: string, item: $ItemLike_): $ShapedRecipeBuilder;
        getResult(): $Item;
        pattern(groupName: string): $ShapedRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        unlockedBy(name: string, criterion: $Criterion_<never>): $ShapedRecipeBuilder;
        /**
         * Creates a new builder for a shaped recipe.
         */
        static shaped(category: $RecipeCategory_, result: $ItemLike_): $ShapedRecipeBuilder;
        /**
         * Creates a new builder for a shaped recipe.
         */
        static shaped(category: $RecipeCategory_, result: $ItemLike_, count: number): $ShapedRecipeBuilder;
        static shaped(arg0: $RecipeCategory_, arg1: $ItemStack_): $ShapedRecipeBuilder;
        showNotification(showNotification: boolean): $ShapedRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: string): void;
        save(recipeOutput: $RecipeOutput): void;
        group(groupName: string | null): $RecipeBuilder;
        result: $Item;
        criteria: $Map<string, $Criterion<never>>;
        count: number;
        resultStack: $ItemStack;
        category: $RecipeCategory;
        rows: $List<string>;
        key: $Map<string, $Ingredient>;
        constructor(arg0: $RecipeCategory_, arg1: $ItemStack_);
        constructor(category: $RecipeCategory_, result: $ItemLike_, count: number);
    }
    export class $RecipeBuilder {
        static getDefaultRecipeId(itemLike: $ItemLike_): $ResourceLocation;
        static determineBookCategory(category: $RecipeCategory_): $CraftingBookCategory;
        static ROOT_RECIPE_ADVANCEMENT: $ResourceLocation;
    }
    export interface $RecipeBuilder {
        getResult(): $Item;
        group(groupName: string | null): $RecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: string): void;
        save(recipeOutput: $RecipeOutput): void;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        unlockedBy(name: string, criterion: $Criterion_<never>): $RecipeBuilder;
        get result(): $Item;
    }
    export class $RecipeCategory extends $Enum<$RecipeCategory> {
        static values(): $RecipeCategory[];
        static valueOf(arg0: string): $RecipeCategory;
        getFolderName(): string;
        static BUILDING_BLOCKS: $RecipeCategory;
        static REDSTONE: $RecipeCategory;
        static TRANSPORTATION: $RecipeCategory;
        static COMBAT: $RecipeCategory;
        static MISC: $RecipeCategory;
        static BREWING: $RecipeCategory;
        static DECORATIONS: $RecipeCategory;
        static TOOLS: $RecipeCategory;
        static FOOD: $RecipeCategory;
        get folderName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RecipeCategory}.
     */
    export type $RecipeCategory_ = "building_blocks" | "decorations" | "redstone" | "transportation" | "tools" | "combat" | "food" | "brewing" | "misc";
    export class $RecipeOutput {
    }
    export interface $RecipeOutput extends $IRecipeOutputExtension {
        accept(location: $ResourceLocation_, recipe: $Recipe<never>, advancement: $AdvancementHolder_ | null): void;
        advancement(): $Advancement$Builder;
    }
    export class $SingleItemRecipeBuilder implements $RecipeBuilder {
        getResult(): $Item;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        static stonecutting(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_): $SingleItemRecipeBuilder;
        static stonecutting(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, count: number): $SingleItemRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: string): void;
        save(recipeOutput: $RecipeOutput): void;
        group(groupName: string | null): $RecipeBuilder;
        unlockedBy(name: string, criterion: $Criterion_<never>): $RecipeBuilder;
        result: $Item;
        factory: $SingleItemRecipe$Factory<never>;
        ingredient: $Ingredient;
        criteria: $Map<string, $Criterion<never>>;
        count: number;
        category: $RecipeCategory;
        constructor(category: $RecipeCategory_, factory: $SingleItemRecipe$Factory_<never>, ingredient: $Ingredient_, result: $ItemLike_, count: number);
    }
    export class $SimpleCookingRecipeBuilder implements $RecipeBuilder {
        static generic<T extends $AbstractCookingRecipe>(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number, cookingSerializer: $RecipeSerializer_<T>, factory: $AbstractCookingRecipe$Factory_<T>): $SimpleCookingRecipeBuilder;
        static generic<T extends $AbstractCookingRecipe>(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number, arg5: $RecipeSerializer_<T>, arg6: $AbstractCookingRecipe$Factory_<T>): $SimpleCookingRecipeBuilder;
        getResult(): $Item;
        group(groupName: string | null): $SimpleCookingRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: $ResourceLocation_): void;
        unlockedBy(name: string, criterion: $Criterion_<never>): $SimpleCookingRecipeBuilder;
        static smelting(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number): $SimpleCookingRecipeBuilder;
        static smelting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static blasting(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number): $SimpleCookingRecipeBuilder;
        static blasting(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smoking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        static smoking(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number): $SimpleCookingRecipeBuilder;
        static campfireCooking(ingredient: $Ingredient_, category: $RecipeCategory_, result: $ItemLike_, experience: number, cookingTime: number): $SimpleCookingRecipeBuilder;
        static campfireCooking(arg0: $Ingredient_, arg1: $RecipeCategory_, arg2: $ItemStack_, arg3: number, arg4: number): $SimpleCookingRecipeBuilder;
        save(recipeOutput: $RecipeOutput, id: string): void;
        save(recipeOutput: $RecipeOutput): void;
        result: $Item;
        factory: $AbstractCookingRecipe$Factory<never>;
        ingredient: $Ingredient;
        stackResult: $ItemStack;
        criteria: $Map<string, $Criterion<never>>;
        category: $RecipeCategory;
        experience: number;
        bookCategory: $CookingBookCategory;
        cookingTime: number;
    }
}
