import { $IPlaceable, $VerticalAlignment_, $HorizontalAlignment_ } from "@package/mezz/jei/api/gui/placement";
import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $FormattedText } from "@package/net/minecraft/network/chat";
import { $RecipeSlotUnderMouse, $IJeiInputHandler, $IJeiGuiEventListener_, $IJeiInputHandler_ } from "@package/mezz/jei/api/gui/inputs";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $ScreenPosition_, $ScreenRectangle, $ScreenPosition } from "@package/net/minecraft/client/gui/navigation";
import { $IRecipeSlotDrawablesView, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/mezz/jei/api/gui/widgets" {
    export class $IScrollBoxWidget {
    }
    export interface $IScrollBoxWidget extends $IRecipeWidget, $IJeiInputHandler {
        setContents(arg0: $List_<$FormattedText>): $IScrollBoxWidget;
        setContents(arg0: $IDrawable): $IScrollBoxWidget;
        getContentAreaWidth(): number;
        getContentAreaHeight(): number;
        get contentAreaWidth(): number;
        get contentAreaHeight(): number;
    }
    export class $IRecipeWidgetBuilder<THIS extends $IRecipeWidgetBuilder<THIS>> {
    }
    export interface $IRecipeWidgetBuilder<THIS extends $IRecipeWidgetBuilder<THIS>> extends $IPlaceable<THIS> {
        getWidth(): number;
        getHeight(): number;
        setTooltip(arg0: $FormattedText): THIS;
        setTooltip(arg0: $Collection_<$FormattedText>): THIS;
        setTooltip(arg0: $TooltipComponent): THIS;
        setTooltip(arg0: $IRecipeWidgetTooltipCallback_): THIS;
        setPosition(arg0: number, arg1: number): THIS;
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): THIS;
        get width(): number;
        get height(): number;
    }
    /**
     * @deprecated
     */
    export class $ISlottedWidgetFactory<R> {
    }
    export interface $ISlottedWidgetFactory<R> {
        /**
         * @deprecated
         */
        createWidgetForSlots(arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List_<$IRecipeSlotDrawable>): void;
    }
    /**
     * Values that may be interpreted as {@link $ISlottedWidgetFactory}.
     */
    export type $ISlottedWidgetFactory_<R> = ((arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List<$IRecipeSlotDrawable>) => void);
    export class $IScrollGridWidget {
    }
    export interface $IScrollGridWidget extends $ISlottedRecipeWidget, $IPlaceable<$IScrollGridWidget> {
        getWidth(): number;
        getHeight(): number;
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
        getScreenRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): $IScrollGridWidget;
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): $IScrollGridWidget;
        get width(): number;
        get height(): number;
        get screenRectangle(): $ScreenRectangle;
    }
    export class $IRecipeExtrasBuilder {
    }
    export interface $IRecipeExtrasBuilder {
        addText(arg0: $FormattedText, arg1: number, arg2: number): $ITextWidget;
        addText(arg0: $List_<$FormattedText>, arg1: number, arg2: number): $ITextWidget;
        /**
         * @deprecated
         */
        addText(arg0: $FormattedText, arg1: number, arg2: number, arg3: number, arg4: number): $ITextWidget;
        /**
         * @deprecated
         */
        addText(arg0: $List_<$FormattedText>, arg1: number, arg2: number, arg3: number, arg4: number): $ITextWidget;
        addWidget(arg0: $IRecipeWidget_): void;
        getRecipeSlots(): $IRecipeSlotDrawablesView;
        addAnimatedRecipeArrowWidget(arg0: number): $IDrawableWidget;
        addAnimatedRecipeFlameWidget(arg0: number): $IDrawableWidget;
        addRecipePlusSignWidget(): $IDrawableWidget;
        addScrollGridWidget(arg0: $List_<$IRecipeSlotDrawable>, arg1: number, arg2: number): $IScrollGridWidget;
        addRecipeArrowWidget(): $IDrawableWidget;
        addScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        /**
         * @deprecated
         */
        addRecipeArrow(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        addRecipeArrow(): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addRecipePlusSign(): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addRecipePlusSign(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        addAnimatedRecipeArrow(arg0: number): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addAnimatedRecipeArrow(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        addAnimatedRecipeFlame(arg0: number): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addAnimatedRecipeFlame(arg0: number, arg1: number, arg2: number): void;
        addDrawableWidget(arg0: $IDrawable): $IDrawableWidget;
        addTooltipArea(arg0: number, arg1: number, arg2: number, arg3: number): $IDrawableWidget;
        /**
         * @deprecated
         */
        addDrawable(arg0: $IDrawable): $IPlaceable<never>;
        /**
         * @deprecated
         */
        addDrawable(arg0: $IDrawable, arg1: number, arg2: number): void;
        addSlottedWidget(arg0: $ISlottedRecipeWidget, arg1: $List_<$IRecipeSlotDrawable>): void;
        addInputHandler(arg0: $IJeiInputHandler_): void;
        addGuiEventListener(arg0: $IJeiGuiEventListener_): void;
        get recipeSlots(): $IRecipeSlotDrawablesView;
    }
    export class $IDrawableWidget {
    }
    export interface $IDrawableWidget extends $IRecipeWidgetBuilder<$IDrawableWidget> {
        getWidth(): number;
        getHeight(): number;
        setTooltip(arg0: $IRecipeWidgetTooltipCallback_): $IDrawableWidget;
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): $IDrawableWidget;
        setPosition(arg0: number, arg1: number): $IDrawableWidget;
        get width(): number;
        get height(): number;
        set tooltip(value: $IRecipeWidgetTooltipCallback_);
    }
    export class $ITextWidget {
    }
    export interface $ITextWidget extends $IRecipeWidgetBuilder<$ITextWidget> {
        setColor(arg0: number): $ITextWidget;
        getWidth(): number;
        setShadow(arg0: boolean): $ITextWidget;
        getHeight(): number;
        setPosition(arg0: number, arg1: number): $ITextWidget;
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): $ITextWidget;
        setTooltip(arg0: $FormattedText): $ITextWidget;
        setTooltip(arg0: $Collection_<$FormattedText>): $ITextWidget;
        setTooltip(arg0: $TooltipComponent): $ITextWidget;
        setFont(arg0: $Font): $ITextWidget;
        setTextAlignment(arg0: $HorizontalAlignment_): $ITextWidget;
        setTextAlignment(arg0: $VerticalAlignment_): $ITextWidget;
        setLineSpacing(arg0: number): $ITextWidget;
        /**
         * @deprecated
         */
        alignHorizontalLeft(): $ITextWidget;
        /**
         * @deprecated
         */
        alignHorizontalCenter(): $ITextWidget;
        /**
         * @deprecated
         */
        alignHorizontalRight(): $ITextWidget;
        /**
         * @deprecated
         */
        alignVerticalTop(): $ITextWidget;
        /**
         * @deprecated
         */
        alignVerticalCenter(): $ITextWidget;
        /**
         * @deprecated
         */
        alignVerticalBottom(): $ITextWidget;
        set color(value: number);
        get width(): number;
        set shadow(value: boolean);
        get height(): number;
        set font(value: $Font);
        set lineSpacing(value: number);
    }
    export class $IRecipeWidget {
    }
    export interface $IRecipeWidget {
        /**
         * @deprecated
         */
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        tick(): void;
        getPosition(): $ScreenPosition;
        getTooltip(arg0: $ITooltipBuilder, arg1: number, arg2: number): void;
        getScreenRectangle(): $ScreenRectangle;
        drawWidget(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        get position(): $ScreenPosition;
        get screenRectangle(): $ScreenRectangle;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeWidget}.
     */
    export type $IRecipeWidget_ = (() => $ScreenPosition_);
    export class $ISlottedRecipeWidget {
    }
    export interface $ISlottedRecipeWidget extends $IRecipeWidget {
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
    }
    export class $IRecipeWidgetTooltipCallback {
    }
    export interface $IRecipeWidgetTooltipCallback {
        onTooltip(arg0: $ITooltipBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeWidgetTooltipCallback}.
     */
    export type $IRecipeWidgetTooltipCallback_ = ((arg0: $ITooltipBuilder) => void);
    /**
     * @deprecated
     */
    export class $IScrollGridWidgetFactory<R> {
    }
    export interface $IScrollGridWidgetFactory<R> extends $ISlottedWidgetFactory<R> {
        setPosition(arg0: number, arg1: number): void;
        getArea(): $ScreenRectangle;
        get area(): $ScreenRectangle;
    }
}
