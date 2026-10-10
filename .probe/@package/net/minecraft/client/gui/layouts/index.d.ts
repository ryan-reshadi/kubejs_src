import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        spacing(columnSpacing: number): $GridLayout;
        defaultCellSetting(): $LayoutSettings;
        createRowHelper(columns: number): $GridLayout$RowHelper;
        newCellSettings(): $LayoutSettings;
        rowSpacing(columnSpacing: number): $GridLayout;
        columnSpacing(columnSpacing: number): $GridLayout;
        constructor();
        constructor(x: number, y: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        defaultCellSetting(): $LayoutSettings;
        newCellSettings(): $LayoutSettings;
        getGrid(): $GridLayout;
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        arrangeElements(): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T): T;
        static alignInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_, deltaX: number, deltaY: number): void;
        static alignInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number, deltaX: number, deltaY: number): void;
        static centerInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number): void;
        static centerInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_): void;
        newChildLayoutSettings(): $LayoutSettings;
        setMinWidth(minHeight: number): $FrameLayout;
        setMinDimensions(minWidth: number, minHeight: number): $FrameLayout;
        defaultChildLayoutSetting(): $LayoutSettings;
        setMinHeight(minHeight: number): $FrameLayout;
        static alignInDimension(position: number, rectangleLength: number, childLength: number, setter: $Consumer_<number>, delta: number): void;
        constructor();
        constructor(width: number, height: number);
        constructor(x: number, y: number, width: number, height: number);
        set minWidth(value: number);
        set minHeight(value: number);
    }
    export class $LinearLayout implements $Layout {
        getY(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getWidth(): number;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        getX(): number;
        getHeight(): number;
        spacing(spacing: number): $LinearLayout;
        static horizontal(): $LinearLayout;
        static vertical(): $LinearLayout;
        defaultCellSetting(): $LayoutSettings;
        newCellSettings(): $LayoutSettings;
        setX(x: number): void;
        setY(x: number): void;
        arrangeElements(): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        constructor(width: number, height: number, orientation: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getY(): number;
        getWidth(): number;
        getX(): number;
        getHeight(): number;
        setX(x: number): void;
        setY(x: number): void;
        arrangeElements(): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        constructor(x: number, y: number, width: number, height: number);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getY(): number;
        getWidth(): number;
        getX(): number;
        getRectangle(): $ScreenRectangle;
        getHeight(): number;
        setX(x: number): void;
        setY(x: number): void;
        setPosition(x: number, y: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        get width(): number;
        get rectangle(): $ScreenRectangle;
        get height(): number;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        addChild<T extends $LayoutElement>(layout: $GridLayout, element: T, index: number, layoutSettings: $LayoutSettings): T;
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        padding(padding: number): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings;
        copy(): $LayoutSettings;
        paddingTop(padding: number): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        paddingLeft(padding: number): $LayoutSettings;
        paddingRight(padding: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        paddingHorizontal(padding: number): $LayoutSettings;
        paddingBottom(padding: number): $LayoutSettings;
        paddingVertical(padding: number): $LayoutSettings;
        alignHorizontally(xAlignment: number): $LayoutSettings;
        alignVertically(xAlignment: number): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        getY(): number;
        static height(height: number): $SpacerElement;
        getWidth(): number;
        static width(height: number): $SpacerElement;
        getX(): number;
        getHeight(): number;
        setX(x: number): void;
        setY(x: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(width: number, height: number): void;
        constructor(x: number, y: number, width: number, height: number);
        constructor(width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_, layoutSettings: $Consumer_<$LayoutSettings>): $Layout;
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, layoutSettingsCreator: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        constructor(width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
        constructor(x: number, y: number, width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings$LayoutSettingsImpl;
        paddingTop(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingLeft(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingHorizontal(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingVertical(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontallyCenter(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        padding(paddingLeft: number): $LayoutSettings;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings;
        copy(): $LayoutSettings;
        paddingRight(paddingLeft: number): $LayoutSettings;
        paddingBottom(paddingLeft: number): $LayoutSettings;
        alignHorizontally(yAlignment: number): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor();
        constructor(other: $LayoutSettings$LayoutSettingsImpl);
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        getY(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getWidth(): number;
        getX(): number;
        getHeight(): number;
        getContentHeight(): number;
        setX(footerHeight: number): void;
        setY(footerHeight: number): void;
        arrangeElements(): void;
        addTitleHeader(message: $Component_, font: $Font): void;
        addToContents<T extends $LayoutElement>(child: T): T;
        addToContents<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(child: T): T;
        setHeaderHeight(footerHeight: number): void;
        addToHeader<T extends $LayoutElement>(child: T): T;
        addToHeader<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        setFooterHeight(footerHeight: number): void;
        getHeaderHeight(): number;
        getFooterHeight(): number;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(screen: $Screen);
        constructor(screen: $Screen, height: number);
        constructor(screen: $Screen, headerHeight: number, footerHeight: number);
        get width(): number;
        get height(): number;
        get contentHeight(): number;
        get rectangle(): $ScreenRectangle;
    }
}
