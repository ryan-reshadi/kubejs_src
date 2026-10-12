import { $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/lib/client/gui/widget/dropdown" {
    export class $DropDownWidget extends $AbstractWidget {
        isClosed(): boolean;
        size(): number;
        onDropDown(arg0: number, arg1: number, arg2: boolean, arg3: number): boolean;
        onDropDown(arg0: number, arg1: number, arg2: number): boolean;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        setClosed(arg0: boolean): void;
        getSelected(): number;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        getRenderYWithOffset(): number;
        setActive(arg0: boolean): void;
        mouseReleased(arg0: number, arg1: number, arg2: number, arg3: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        getRenderY(): number;
        getXWithOffset(): number;
        selectId(arg0: number, arg1: boolean): void;
        static SELECTED_DEFAULT_BACKGROUND: number;
        static SELECTED_DEFAULT_HOVERED_BACKGROUND: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static TRIM: number;
        static TRIM_OPEN: number;
        active: boolean;
        static DEFAULT_BACKGROUND: number;
        static TRIM_INSIDE: number;
        static LINE_HEIGHT: number;
        height: number;
        get selected(): number;
        get renderYWithOffset(): number;
        get renderY(): number;
        get XWithOffset(): number;
    }
}
