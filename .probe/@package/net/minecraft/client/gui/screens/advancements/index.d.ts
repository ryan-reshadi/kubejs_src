import { $AdvancementHolder_, $DisplayInfo, $AdvancementProgress, $AdvancementType_, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $ClientAdvancements, $ClientAdvancements$Listener } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/advancements" {
    export class $AdvancementTabType extends $Enum<$AdvancementTabType> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType}.
     */
    export type $AdvancementTabType_ = "above" | "below" | "left" | "right";
    export class $AdvancementTabType$Sprites extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType$Sprites}.
     */
    export type $AdvancementTabType$Sprites_ = { middle?: $ResourceLocation_, first?: $ResourceLocation_, last?: $ResourceLocation_,  } | [middle?: $ResourceLocation_, first?: $ResourceLocation_, last?: $ResourceLocation_, ];
    export class $AdvancementsScreen extends $Screen implements $ClientAdvancements$Listener {
        renderWindow(guiGraphics: $GuiGraphics, offsetX: number, offsetY: number): void;
        onAddAdvancementRoot(advancement: $AdvancementNode): void;
        onRemoveAdvancementRoot(advancement: $AdvancementNode): void;
        onAddAdvancementTask(advancement: $AdvancementNode): void;
        onRemoveAdvancementTask(advancement: $AdvancementNode): void;
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        getAdvancementWidget(advancement: $AdvancementNode): $AdvancementWidget;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
        onAdvancementsCleared(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        static WINDOW_INSIDE_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static WINDOW_HEIGHT: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static WINDOW_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static WINDOW_INSIDE_WIDTH: number;
        static BACKGROUND_TILE_COUNT_X: number;
        static BACKGROUND_TILE_COUNT_Y: number;
        static BACKGROUND_TILE_WIDTH: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static BACKGROUND_TILE_HEIGHT: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(advancements: $ClientAdvancements, lastScreen: $Screen | null);
        constructor(advancements: $ClientAdvancements);
    }
    export class $AdvancementWidgetType extends $Enum<$AdvancementWidgetType> {
        static values(): $AdvancementWidgetType[];
        static valueOf(arg0: string): $AdvancementWidgetType;
        boxSprite(): $ResourceLocation;
        frameSprite(type: $AdvancementType_): $ResourceLocation;
        static OBTAINED: $AdvancementWidgetType;
        static UNOBTAINED: $AdvancementWidgetType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementWidgetType}.
     */
    export type $AdvancementWidgetType_ = "obtained" | "unobtained";
    export class $AdvancementTab {
        static create(minecraft: $Minecraft, screen: $AdvancementsScreen, index: number, rootNode: $AdvancementNode): $AdvancementTab;
        getIndex(): number;
        getRootNode(): $AdvancementNode;
        getTitle(): $Component;
        getType(): $AdvancementTabType;
        isMouseOver(offsetX: number, offsetY: number, mouseX: number, arg3: number): boolean;
        getWidget(advancement: $AdvancementHolder_): $AdvancementWidget;
        getScreen(): $AdvancementsScreen;
        getPage(): number;
        scroll(dragX: number, arg1: number): void;
        drawContents(guiGraphics: $GuiGraphics, x: number, y: number): void;
        drawTab(guiGraphics: $GuiGraphics, offsetX: number, offsetY: number, isSelected: boolean): void;
        drawIcon(guiGraphics: $GuiGraphics, x: number, y: number): void;
        drawTooltips(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, width: number, height: number): void;
        addAdvancement(node: $AdvancementNode): void;
        getDisplay(): $DisplayInfo;
        constructor(minecraft: $Minecraft, screen: $AdvancementsScreen, type: $AdvancementTabType_, index: number, rootNode: $AdvancementNode, display: $DisplayInfo);
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: number, arg5: $AdvancementNode, arg6: $DisplayInfo);
        get index(): number;
        get rootNode(): $AdvancementNode;
        get title(): $Component;
        get type(): $AdvancementTabType;
        get screen(): $AdvancementsScreen;
        get page(): number;
        get display(): $DisplayInfo;
    }
    export class $AdvancementWidget {
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        getY(): number;
        getWidth(): number;
        addChild(advancementWidget: $AdvancementWidget): void;
        getX(): number;
        isMouseOver(x: number, y: number, mouseX: number, mouseY: number): boolean;
        setProgress(progress: $AdvancementProgress): void;
        drawHover(guiGraphics: $GuiGraphics, x: number, y: number, fade: number, width: number, height: number): void;
        attachToParent(): void;
        drawConnectivity(guiGraphics: $GuiGraphics, x: number, y: number, dropShadow: boolean): void;
        constructor(tab: $AdvancementTab, minecraft: $Minecraft, advancementNode: $AdvancementNode, display: $DisplayInfo);
        get y(): number;
        get width(): number;
        get x(): number;
        set progress(value: $AdvancementProgress);
    }
}
