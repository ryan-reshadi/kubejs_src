import { $IRecipeLayoutBuilder, $IIngredientConsumer, $ITooltipBuilder, $IRecipeSlotBuilder } from "@package/mezz/jei/api/gui/builder";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Stream } from "@package/java/util/stream";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IIngredientType_, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $RecipeIngredientRole, $RecipeIngredientRole_ } from "@package/mezz/jei/api/recipe";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/gui/ingredient" {
    export class $IRecipeSlotView {
    }
    export interface $IRecipeSlotView {
        getIngredients<T>(arg0: $IIngredientType_<T>): $Stream<T>;
        isEmpty(): boolean;
        getRole(): $RecipeIngredientRole;
        getAllIngredients(): $Stream<$ITypedIngredient<never>>;
        getDisplayedIngredient<T>(arg0: $IIngredientType_<T>): (T) | undefined;
        getDisplayedIngredient(): ($ITypedIngredient<never>) | undefined;
        getSlotName(): (string) | undefined;
        getItemStacks(): $Stream<$ItemStack>;
        drawHighlight(arg0: $GuiGraphics, arg1: number): void;
        getDisplayedIngredients(): $Stream<$ITypedIngredient<never>>;
        getAllIngredientsList(): $List<$ITypedIngredient<never>>;
        getTagKey(): ($TagKey<never>) | undefined;
        getDisplayedItemStack(): ($ItemStack) | undefined;
        get empty(): boolean;
        get role(): $RecipeIngredientRole;
        get allIngredients(): $Stream<$ITypedIngredient<never>>;
        get slotName(): (string) | undefined;
        get itemStacks(): $Stream<$ItemStack>;
        get displayedIngredients(): $Stream<$ITypedIngredient<never>>;
        get allIngredientsList(): $List<$ITypedIngredient<never>>;
        get tagKey(): ($TagKey<never>) | undefined;
        get displayedItemStack(): ($ItemStack) | undefined;
    }
    export class $IRecipeSlotRichTooltipCallback {
    }
    export interface $IRecipeSlotRichTooltipCallback {
        onRichTooltip(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotRichTooltipCallback}.
     */
    export type $IRecipeSlotRichTooltipCallback_ = ((arg0: $IRecipeSlotView, arg1: $ITooltipBuilder) => void);
    export class $IRecipeSlotsView {
    }
    export interface $IRecipeSlotsView {
        getSlotViews(): $List<$IRecipeSlotView>;
        getSlotViews(arg0: $RecipeIngredientRole_): $List<$IRecipeSlotView>;
        findSlotByName(arg0: string): ($IRecipeSlotView) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotsView}.
     */
    export type $IRecipeSlotsView_ = (() => $List_<$IRecipeSlotView>);
    export class $IRecipeSlotDrawable {
    }
    export interface $IRecipeSlotDrawable extends $IRecipeSlotView {
        /**
         * @deprecated
         */
        addTooltipCallback(arg0: $IRecipeSlotTooltipCallback_): void;
        /**
         * @deprecated
         */
        draw(arg0: $GuiGraphics): void;
        draw(arg0: $GuiGraphics, arg1: boolean): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        getTooltip(arg0: $ITooltipBuilder): void;
        /**
         * @deprecated
         */
        getTooltip(): $List<$Component>;
        setPosition(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        getRect(): $Rect2i;
        /**
         * @deprecated
         */
        drawHoverOverlays(arg0: $GuiGraphics): void;
        clearDisplayOverrides(): void;
        createDisplayOverrides(): $IIngredientConsumer;
        drawTooltip(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getAreaIncludingBackground(): $Rect2i;
        get rect(): $Rect2i;
        get areaIncludingBackground(): $Rect2i;
    }
    export class $IRecipeSlotDrawablesView {
    }
    export interface $IRecipeSlotDrawablesView {
        getSlots(): $List<$IRecipeSlotDrawable>;
        getSlots(arg0: $RecipeIngredientRole_): $List<$IRecipeSlotDrawable>;
        findSlotByName(arg0: string): ($IRecipeSlotDrawable) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotDrawablesView}.
     */
    export type $IRecipeSlotDrawablesView_ = (() => $List_<$IRecipeSlotDrawable>);
    export class $ICraftingGridHelper {
    }
    export interface $ICraftingGridHelper {
        createAndSetInputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$List_<$ItemStack_>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        createAndSetInputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<$List_<T>>, arg3: number, arg4: number): $List<$IRecipeSlotBuilder>;
        createAndSetNamedIngredients(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Pair<string, $Ingredient_>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        setInputs<T>(arg0: $List_<$IRecipeSlotBuilder>, arg1: $IIngredientType_<T>, arg2: $List_<$List_<T>>, arg3: number, arg4: number): void;
        createAndSetNamedInputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<$Pair<string, $List_<T>>>, arg3: number, arg4: number): $List<$IRecipeSlotBuilder>;
        createAndSetNamedInputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Pair<string, $List_<$ItemStack_>>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        createAndSetOutputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<T>): $IRecipeSlotBuilder;
        createAndSetOutputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$ItemStack_>): $IRecipeSlotBuilder;
        createAndSetIngredients(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Ingredient_>, arg2: number, arg3: number): void;
    }
    /**
     * @deprecated
     */
    export class $IRecipeSlotTooltipCallback {
    }
    export interface $IRecipeSlotTooltipCallback {
        /**
         * @deprecated
         */
        onRichTooltip(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void;
        /**
         * @deprecated
         */
        onTooltip(arg0: $IRecipeSlotView, arg1: $List_<$Component_>): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotTooltipCallback}.
     */
    export type $IRecipeSlotTooltipCallback_ = ((arg0: $IRecipeSlotView, arg1: $List<$Component>) => void);
}
