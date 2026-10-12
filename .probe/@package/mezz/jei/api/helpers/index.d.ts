import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IScalableDrawable, $IDrawableBuilder, $IDrawable, $IDrawableAnimated, $IDrawableAnimated$StartDirection_, $IDrawableStatic } from "@package/mezz/jei/api/gui/drawable";
import { $ICraftingGridHelper } from "@package/mezz/jei/api/gui/ingredient";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $List, $List_, $Set } from "@package/java/util";
import { $IIngredientVisibility, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $IIngredientHelper, $IIngredientRenderer, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $IRecipeManager, $IFocusFactory, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Class, $Object } from "@package/java/lang";
import { $IRecipeWidget, $IScrollGridWidgetFactory, $IScrollBoxWidget } from "@package/mezz/jei/api/gui/widgets";
import { $ITickTimer } from "@package/mezz/jei/api/gui";

declare module "@package/mezz/jei/api/helpers" {
    export class $ICodecHelper {
    }
    export interface $ICodecHelper {
        getIngredientTypeCodec(): $Codec<$IIngredientType<never>>;
        getRecipeTypeCodec(arg0: $IRecipeManager): $Codec<$RecipeType<never>>;
        getRecipeHolderCodec<T extends $RecipeHolder<never>>(): $Codec<T>;
        getSlowRecipeCategoryCodec<T>(arg0: $IRecipeCategory<T>, arg1: $IRecipeManager): $Codec<T>;
        getTypedIngredientCodec(): $MapCodec<$ITypedIngredient<never>>;
        getTypedIngredientCodec<T>(arg0: $IIngredientType_<T>): $Codec<$ITypedIngredient<T>>;
        get ingredientTypeCodec(): $Codec<$IIngredientType<never>>;
        get recipeHolderCodec(): $Codec<T>;
    }
    export class $IPlatformFluidHelper<T> {
    }
    export interface $IPlatformFluidHelper<T> {
        create(arg0: $Holder_<$Fluid>, arg1: number): T;
        create(arg0: $Holder_<$Fluid>, arg1: number, arg2: $DataComponentPatch_): T;
        bucketVolume(): number;
        getFluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
        get fluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
    }
    export class $IStackHelper {
    }
    export interface $IStackHelper {
        isEquivalent(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $UidContext_): boolean;
        getUidForStack(arg0: $ItemStack_, arg1: $UidContext_): $Object;
        getUidForStack(arg0: $ITypedIngredient<$ItemStack_>, arg1: $UidContext_): $Object;
        /**
         * @deprecated
         */
        getUniqueIdentifierForStack(arg0: $ItemStack_, arg1: $UidContext_): string;
    }
    export class $IJeiHelpers {
    }
    export interface $IJeiHelpers {
        getColorHelper(): $IColorHelper;
        getFocusFactory(): $IFocusFactory;
        getRecipeType(arg0: $ResourceLocation_): ($RecipeType<never>) | undefined;
        getRecipeType<T>(arg0: $ResourceLocation_, arg1: $Class<T>): ($RecipeType<T>) | undefined;
        getIngredientManager(): $IIngredientManager;
        getStackHelper(): $IStackHelper;
        getIngredientVisibility(): $IIngredientVisibility;
        getPlatformFluidHelper(): $IPlatformFluidHelper<never>;
        getCodecHelper(): $ICodecHelper;
        getAllRecipeTypes(): $Stream<$RecipeType<never>>;
        getModIdHelper(): $IModIdHelper;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        getGuiHelper(): $IGuiHelper;
        get colorHelper(): $IColorHelper;
        get focusFactory(): $IFocusFactory;
        get ingredientManager(): $IIngredientManager;
        get stackHelper(): $IStackHelper;
        get ingredientVisibility(): $IIngredientVisibility;
        get platformFluidHelper(): $IPlatformFluidHelper<never>;
        get codecHelper(): $ICodecHelper;
        get allRecipeTypes(): $Stream<$RecipeType<never>>;
        get modIdHelper(): $IModIdHelper;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
        get guiHelper(): $IGuiHelper;
    }
    export class $IColorHelper {
    }
    export interface $IColorHelper {
        getColors(arg0: $TextureAtlasSprite, arg1: number, arg2: number): $List<number>;
        getColors(arg0: $ItemStack_, arg1: number): $List<number>;
        getClosestColorName(arg0: number): string;
    }
    export class $IModIdHelper {
    }
    export interface $IModIdHelper {
        getModNameForModId(arg0: string): string;
        getFormattedModNameComponentForModId(arg0: string): $Component;
        getModAliases(arg0: string): $Set<string>;
        /**
         * @deprecated
         */
        getFormattedModNameForModId(arg0: string): string;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: $ITypedIngredient<T>): $List<$Component>;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: T, arg2: $IIngredientHelper<T>): $List<$Component>;
        getModNameForTooltip<T>(arg0: $ITypedIngredient<T>): ($Component) | undefined;
        isDisplayingModNameEnabled(): boolean;
        get displayingModNameEnabled(): boolean;
    }
    export class $IGuiHelper {
    }
    export interface $IGuiHelper {
        getRecipePlusSign(): $IDrawableStatic;
        getRecipeArrow(): $IDrawableStatic;
        getOutputSlot(): $IDrawableStatic;
        getRecipeArrowFilled(): $IDrawableStatic;
        createTickTimer(arg0: number, arg1: number, arg2: boolean): $ITickTimer;
        getSlotDrawable(): $IDrawableStatic;
        createDrawable(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableStatic;
        drawableBuilder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableBuilder;
        createScalableDrawableSprite(arg0: $TextureAtlas, arg1: $ResourceLocation_): $IScalableDrawable;
        /**
         * @deprecated
         */
        getScrollBoxScrollbarExtraWidth(): number;
        createDrawableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): $IDrawable;
        createDrawableIngredient<V>(arg0: $IIngredientRenderer<V>, arg1: V): $IDrawable;
        createDrawableIngredient<V>(arg0: $ITypedIngredient<V>): $IDrawable;
        createAnimatedRecipeArrow(arg0: number): $IDrawableAnimated;
        /**
         * @deprecated
         */
        createScrollGridFactory(arg0: number, arg1: number): $IScrollGridWidgetFactory<never>;
        /**
         * @deprecated
         */
        createScrollBoxWidget(arg0: $IDrawable, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createDrawableItemStack(arg0: $ItemStack_): $IDrawable;
        createWidgetFromDrawable(arg0: $IDrawable, arg1: number, arg2: number): $IRecipeWidget;
        createDrawableSprite(arg0: $TextureAtlas, arg1: $ResourceLocation_, arg2: number, arg3: number): $IDrawableStatic;
        /**
         * @deprecated
         */
        createDrawableSprite(arg0: $TextureAtlas, arg1: $ResourceLocation_): $IDrawableStatic;
        getRecipeFlameEmpty(): $IDrawableStatic;
        getRecipeFlameFilled(): $IDrawableStatic;
        createCraftingGridHelper(): $ICraftingGridHelper;
        createDrawableItemLike(arg0: $ItemLike_): $IDrawable;
        createAnimatedRecipeFlame(arg0: number): $IDrawableAnimated;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: number, arg2: $IDrawableAnimated$StartDirection_, arg3: boolean): $IDrawableAnimated;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: $ITickTimer, arg2: $IDrawableAnimated$StartDirection_): $IDrawableAnimated;
        createBlankDrawable(arg0: number, arg1: number): $IDrawableStatic;
        get recipePlusSign(): $IDrawableStatic;
        get recipeArrow(): $IDrawableStatic;
        get outputSlot(): $IDrawableStatic;
        get recipeArrowFilled(): $IDrawableStatic;
        get slotDrawable(): $IDrawableStatic;
        get scrollBoxScrollbarExtraWidth(): number;
        get recipeFlameEmpty(): $IDrawableStatic;
        get recipeFlameFilled(): $IDrawableStatic;
    }
}
