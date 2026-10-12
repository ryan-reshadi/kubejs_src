import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        rowSpacing(columnSpacing: number): $GridLayout;
        spacing(columnSpacing: number): $GridLayout;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number): T;
        newCellSettings(): $LayoutSettings;
        createRowHelper(columns: number): $GridLayout$RowHelper;
        defaultCellSetting(): $LayoutSettings;
        columnSpacing(columnSpacing: number): $GridLayout;
        constructor();
        constructor(x: number, y: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T): T;
        getGrid(): $GridLayout;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
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
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        static centerInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number): void;
        static centerInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_): void;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        setMinWidth(minHeight: number): $FrameLayout;
        static alignInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_, deltaX: number, deltaY: number): void;
        static alignInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number, deltaX: number, deltaY: number): void;
        setMinHeight(minHeight: number): $FrameLayout;
        static alignInDimension(position: number, rectangleLength: number, childLength: number, setter: $Consumer_<number>, delta: number): void;
        setMinDimensions(minWidth: number, minHeight: number): $FrameLayout;
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        constructor(x: number, y: number, width: number, height: number);
        constructor(width: number, height: number);
        constructor();
        set minWidth(value: number);
        set minHeight(value: number);
    }
    export class $LinearLayout implements $Layout {
        spacing(spacing: number): $LinearLayout;
        getWidth(): number;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getY(): number;
        getX(): number;
        getHeight(): number;
        static vertical(): $LinearLayout;
        setY(x: number): void;
        setX(x: number): void;
        static horizontal(): $LinearLayout;
        arrangeElements(): void;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        constructor(width: number, height: number, orientation: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getWidth(): number;
        getY(): number;
        getX(): number;
        getHeight(): number;
        setY(x: number): void;
        setX(x: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
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
        getWidth(): number;
        getY(): number;
        getX(): number;
        getRectangle(): $ScreenRectangle;
        getHeight(): number;
        setY(x: number): void;
        setX(x: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        get width(): number;
        get rectangle(): $ScreenRectangle;
        get height(): number;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        addChild<T extends $LayoutElement>(layout: $GridLayout, element: T, index: number, layoutSettings: $LayoutSettings): T;
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
        copy(): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        padding(padding: number): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        paddingTop(padding: number): $LayoutSettings;
        paddingRight(padding: number): $LayoutSettings;
        paddingLeft(padding: number): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        paddingBottom(padding: number): $LayoutSettings;
        paddingHorizontal(padding: number): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontally(xAlignment: number): $LayoutSettings;
        paddingVertical(padding: number): $LayoutSettings;
        alignVertically(xAlignment: number): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        static width(height: number): $SpacerElement;
        getWidth(): number;
        getY(): number;
        static height(height: number): $SpacerElement;
        getX(): number;
        getHeight(): number;
        setY(x: number): void;
        setX(x: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(width: number, height: number): void;
        constructor(width: number, height: number);
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_): $Layout;
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_, layoutSettings: $Consumer_<$LayoutSettings>): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, layoutSettingsCreator: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        constructor(width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
        constructor(x: number, y: number, width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        copy(): $LayoutSettings$LayoutSettingsImpl;
        align(xAlignment: number, yAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingTop(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingRight(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        paddingVertical(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        padding(paddingLeft: number): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        paddingLeft(paddingLeft: number): $LayoutSettings;
        paddingBottom(paddingLeft: number): $LayoutSettings;
        paddingHorizontal(paddingLeft: number): $LayoutSettings;
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
        addToHeader<T extends $LayoutElement>(child: T): T;
        addToHeader<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        setHeaderHeight(footerHeight: number): void;
        setFooterHeight(footerHeight: number): void;
        getWidth(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getY(): number;
        getX(): number;
        getContentHeight(): number;
        getHeight(): number;
        setY(footerHeight: number): void;
        setX(footerHeight: number): void;
        addToContents<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToContents<T extends $LayoutElement>(child: T): T;
        addToFooter<T extends $LayoutElement>(child: T): T;
        addToFooter<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        arrangeElements(): void;
        addTitleHeader(message: $Component_, font: $Font): void;
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
        get contentHeight(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
}
