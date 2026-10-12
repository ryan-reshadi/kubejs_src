import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder, $Ingredient_, $CraftingBookCategory_, $CraftingRecipe, $SmeltingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/recipe/vanilla" {
    export class $IVanillaRecipeFactory {
    }
    export interface $IVanillaRecipeFactory {
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        createGrindstoneRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: number, arg4: number, arg5: $ResourceLocation_): $IJeiGrindstoneRecipe;
        createSmeltingRecipe(arg0: $Ingredient_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $ResourceLocation_): $RecipeHolder<$SmeltingRecipe>;
        createSmeltingRecipe(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: number, arg5: number, arg6: $ResourceLocation_): $RecipeHolder<$SmeltingRecipe>;
        createShapedRecipeBuilder(arg0: $CraftingBookCategory_, arg1: $List_<$ItemStack_>): $IJeiShapedRecipeBuilder;
    }
    export class $IJeiShapedRecipeBuilder {
    }
    export interface $IJeiShapedRecipeBuilder {
        define(arg0: string, arg1: $Ingredient_): $IJeiShapedRecipeBuilder;
        build(): $CraftingRecipe;
        group(arg0: string): $IJeiShapedRecipeBuilder;
        pattern(arg0: string): $IJeiShapedRecipeBuilder;
    }
    export class $IJeiGrindstoneRecipe {
    }
    export interface $IJeiGrindstoneRecipe {
        getUid(): $ResourceLocation;
        getOutputs(): $List<$ItemStack>;
        getTopInputs(): $List<$ItemStack>;
        getBottomInputs(): $List<$ItemStack>;
        getMinXpReward(): number;
        getMaxXpReward(): number;
        isOutputRenderOnly(): boolean;
        get uid(): $ResourceLocation;
        get outputs(): $List<$ItemStack>;
        get topInputs(): $List<$ItemStack>;
        get bottomInputs(): $List<$ItemStack>;
        get minXpReward(): number;
        get maxXpReward(): number;
        get outputRenderOnly(): boolean;
    }
    export class $IJeiBrewingRecipe {
    }
    export interface $IJeiBrewingRecipe {
        getIngredients(): $List<$ItemStack>;
        getUid(): $ResourceLocation;
        getBrewingSteps(): number;
        getPotionInputs(): $List<$ItemStack>;
        getPotionOutput(): $ItemStack;
        get ingredients(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get brewingSteps(): number;
        get potionInputs(): $List<$ItemStack>;
        get potionOutput(): $ItemStack;
    }
    export class $IJeiAnvilRecipe {
    }
    export interface $IJeiAnvilRecipe {
        getUid(): $ResourceLocation;
        getLeftInputs(): $List<$ItemStack>;
        getRightInputs(): $List<$ItemStack>;
        getOutputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get leftInputs(): $List<$ItemStack>;
        get rightInputs(): $List<$ItemStack>;
        get outputs(): $List<$ItemStack>;
    }
}
