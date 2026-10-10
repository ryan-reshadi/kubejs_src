import { $IKeyEntry } from "@package/com/blamejared/controlling/api/entries";
import { $Event } from "@package/net/neoforged/bus/api";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blamejared/controlling/api/events" {
    export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
        get buttonId(): number;
    }
    export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {
        getY(): number;
        getEntry(): $IKeyEntry;
        getX(): number;
        getGuiGraphics(): $GuiGraphics;
        getMouseX(): number;
        getMouseY(): number;
        getRowWidth(): number;
        getRowLeft(): number;
        getSlotIndex(): number;
        isHovered(): boolean;
        getPartialTicks(): number;
        constructor(arg0: $IKeyEntry, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
        get y(): number;
        get entry(): $IKeyEntry;
        get x(): number;
        get guiGraphics(): $GuiGraphics;
        get mouseX(): number;
        get mouseY(): number;
        get rowWidth(): number;
        get rowLeft(): number;
        get slotIndex(): number;
        get hovered(): boolean;
        get partialTicks(): number;
    }
    export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
        get buttonId(): number;
    }
    export class $IKeyEntryListenersEvent {
    }
    export interface $IKeyEntryListenersEvent {
        getListeners(): $List<$GuiEventListener>;
        getEntry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
        get entry(): $IKeyEntry;
    }
    export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {
        getListeners(): $List<$GuiEventListener>;
        getEntry(): $IKeyEntry;
        constructor(arg0: $IKeyEntry);
        get listeners(): $List<$GuiEventListener>;
        get entry(): $IKeyEntry;
    }
    export class $IKeyEntryRenderEvent {
    }
    export interface $IKeyEntryRenderEvent {
        getY(): number;
        getEntry(): $IKeyEntry;
        getX(): number;
        getGuiGraphics(): $GuiGraphics;
        getMouseX(): number;
        getMouseY(): number;
        getRowWidth(): number;
        getRowLeft(): number;
        getSlotIndex(): number;
        isHovered(): boolean;
        getPartialTicks(): number;
        get y(): number;
        get entry(): $IKeyEntry;
        get x(): number;
        get guiGraphics(): $GuiGraphics;
        get mouseX(): number;
        get mouseY(): number;
        get rowWidth(): number;
        get rowLeft(): number;
        get slotIndex(): number;
        get hovered(): boolean;
        get partialTicks(): number;
    }
    export class $IKeyEntryMouseReleasedEvent {
    }
    export interface $IKeyEntryMouseReleasedEvent {
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
        get buttonId(): number;
    }
    export class $IKeyEntryMouseClickedEvent {
    }
    export interface $IKeyEntryMouseClickedEvent {
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
        get buttonId(): number;
    }
}
