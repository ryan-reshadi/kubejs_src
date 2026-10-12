import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";

declare module "@package/net/jadenxgamer/elysium_api/impl/core/datadriven/brewing_recipe" {
    export interface $ElysiumBrewingRecipe extends RegistryMarked<RegistryTypes.ElysiumApiBrewingRecipesTag, RegistryTypes.ElysiumApiBrewingRecipes> {}
    export class $ElysiumBrewingRecipe extends $Record {
        createResult(arg0: $ItemStack_): $ItemStack;
        outputItem(): $Item;
        ingredient(): $Item;
        inputComponents(): $DataComponentPatch;
        inputItem(): $Item;
        outputComponents(): $DataComponentPatch;
        matchesInput(arg0: $ItemStack_): boolean;
        matchesIngredient(arg0: $ItemStack_): boolean;
        copyInputComponents(): boolean;
        static CODEC: $Codec<$ElysiumBrewingRecipe>;
        constructor(inputItem: $Item_, inputComponents: $DataComponentPatch_, ingredient: $Item_, outputItem: $Item_, outputComponents: $DataComponentPatch_, copyInputComponents: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ElysiumBrewingRecipe}.
     */
    export type $ElysiumBrewingRecipe_ = RegistryTypes.ElysiumApiBrewingRecipes | { copyInputComponents?: boolean, inputItem?: $Item_, outputComponents?: $DataComponentPatch_, inputComponents?: $DataComponentPatch_, ingredient?: $Item_, outputItem?: $Item_,  } | [copyInputComponents?: boolean, inputItem?: $Item_, outputComponents?: $DataComponentPatch_, inputComponents?: $DataComponentPatch_, ingredient?: $Item_, outputItem?: $Item_, ];
}
