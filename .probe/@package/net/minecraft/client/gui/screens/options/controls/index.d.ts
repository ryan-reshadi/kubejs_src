import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $KeyMapping, $Options } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $AccessKeyBindsScreen, $AccessKeyBindsScreenNeoForge } from "@package/com/blamejared/controlling/mixin";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";

declare module "@package/net/minecraft/client/gui/screens/options/controls" {
    export class $KeyBindsList extends $ContainerObjectSelectionList<$KeyBindsList$Entry> {
        resetMappingAndUpdateButtons(): void;
        refreshEntries(): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $KeyBindsList$Entry;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        height: number;
        constructor(keyBindsScreen: $KeyBindsScreen, minecraft: $Minecraft);
    }
    export class $KeyBindsList$Entry extends $ContainerObjectSelectionList$Entry<$KeyBindsList$Entry> {
        constructor();
    }
    export class $ControlsScreen extends $OptionsSubScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $KeyBindsList$CategoryEntry extends $KeyBindsList$Entry {
        constructor(name: $KeyBindsList, arg1: $Component_);
    }
    export class $KeyBindsList$KeyEntry extends $KeyBindsList$Entry {
    }
    export class $KeyBindsScreen extends $OptionsSubScreen implements $AccessKeyBindsScreen, $AccessKeyBindsScreenNeoForge {
        controlling$setKeyBindsList(arg0: $KeyBindsList): void;
        controlling$getKeyBindsList(): $KeyBindsList;
        controlling$getResetButton(): $Button;
        controlling$setResetButton(arg0: $Button): void;
        getLastPressedModifier(): $InputConstants$Key;
        setLastPressedModifier(arg0: $InputConstants$Key): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isIsLastKeyHeldDown(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setIsLastKeyHeldDown(focused: boolean): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isIsLastModifierHeldDown(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setIsLastModifierHeldDown(focused: boolean): void;
        getLastPressedKey(): $InputConstants$Key;
        setLastPressedKey(arg0: $InputConstants$Key): void;
        selectedKey: $KeyMapping;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        lastKeySelection: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
}
