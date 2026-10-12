import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        isActive(): boolean;
        getWidth(): number;
        getY(): number;
        setVisible(arg0: boolean): void;
        getX(): number;
        setActive(arg0: boolean): void;
        getPosition(): $Position;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        getHeight(): number;
        isVisible(): boolean;
        getEndX(): number;
        getEndY(): number;
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        get width(): number;
        get y(): number;
        get x(): number;
        get position(): $Position;
        get height(): number;
        get endX(): number;
        get endY(): number;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
    }
}
