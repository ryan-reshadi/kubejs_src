import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $PackRepository, $PackSource, $Pack, $PackCompatibility } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $EssentialGuiDraggableEntryScreen, $EssentialPostScreenDrawHook, $GuiDragDropEntryHandler, $EssentialGuiScreenBeforeClose } from "@package/gg/essential/mixins/impl/client/gui";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Path_ } from "@package/java/nio/file";
import { $PackListWidgetAccessor, $PackScreenAccessor, $PackLoadingManagerAccessor, $ResourcePackListEntryAccessor } from "@package/gg/essential/mixins/transformers/client/gui";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Runnable_, $AutoCloseable, $Runnable } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/packs" {
    export class $PackSelectionScreen$Watcher implements $AutoCloseable {
    }
    export class $PackSelectionModel implements $PackLoadingManagerAccessor {
        getSelected(): $Stream<$PackSelectionModel$Entry>;
        commit(): void;
        getUnselected(): $Stream<$PackSelectionModel$Entry>;
        findNewPacks(): void;
        essential$getChangeRunnable(): $Runnable;
        essential$getEnabledList(): $List<$Pack>;
        essential$getDisabledList(): $List<$Pack>;
        constructor(onListChanged: $Runnable_, iconGetter: $Function_<$Pack, $ResourceLocation>, repository: $PackRepository, output: $Consumer_<$PackRepository>);
        get selected(): $Stream<$PackSelectionModel$Entry>;
        get unselected(): $Stream<$PackSelectionModel$Entry>;
    }
    export class $PackSelectionModel$SelectedPackEntry extends $PackSelectionModel$EntryBase {
    }
    export class $PackSelectionModel$UnselectedPackEntry extends $PackSelectionModel$EntryBase {
    }
    export class $TransferableSelectionList extends $ObjectSelectionList<$TransferableSelectionList$PackEntry> implements $PackListWidgetAccessor {
        essential$getScreen(): $PackSelectionScreen;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $TransferableSelectionList$PackEntry;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        height: number;
        constructor(minecraft: $Minecraft, screen: $PackSelectionScreen, width: number, height: number, title: $Component_);
    }
    export class $PackSelectionModel$EntryBase implements $PackSelectionModel$Entry {
        getExtendedDescription(): $Component;
        canUnselect(): boolean;
        canSelect(): boolean;
        get extendedDescription(): $Component;
    }
    export class $PackSelectionScreen extends $Screen implements $PackScreenAccessor, $EssentialGuiDraggableEntryScreen<any>, $EssentialGuiScreenBeforeClose, $EssentialPostScreenDrawHook {
        essential$getDragHandlerOrNull(): $GuiDragDropEntryHandler<any>;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        essential$getQuickSwapIndex(): number;
        clearSelected(): void;
        updateFocus(selection: $TransferableSelectionList): void;
        essential$getAvailablePackList(): $TransferableSelectionList;
        essential$getSelectedPackList(): $TransferableSelectionList;
        essential$getPackLoadingManager(): $PackSelectionModel;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(repository: $PackRepository, output: $Consumer_<$PackRepository>, packDir: $Path_, title: $Component_);
    }
    export class $TransferableSelectionList$PackEntry extends $ObjectSelectionList$Entry<$TransferableSelectionList$PackEntry> implements $ResourcePackListEntryAccessor {
        getPackId(): string;
        keyboardSelection(): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        essential$isMovable(): boolean;
        constructor(minecraft: $Minecraft, parent: $TransferableSelectionList, pack: $PackSelectionModel$Entry);
        get packId(): string;
    }
    export class $PackSelectionModel$Entry {
    }
    export interface $PackSelectionModel$Entry {
        select(): void;
        isSelected(): boolean;
        getTitle(): $Component;
        isRequired(): boolean;
        getDescription(): $Component;
        getId(): string;
        getIconTexture(): $ResourceLocation;
        getCompatibility(): $PackCompatibility;
        isFixedPosition(): boolean;
        getPackSource(): $PackSource;
        moveDown(): void;
        moveUp(): void;
        canMoveUp(): boolean;
        canMoveDown(): boolean;
        getExtendedDescription(): $Component;
        unselect(): void;
        canUnselect(): boolean;
        canSelect(): boolean;
        get selected(): boolean;
        get title(): $Component;
        get required(): boolean;
        get description(): $Component;
        get id(): string;
        get iconTexture(): $ResourceLocation;
        get compatibility(): $PackCompatibility;
        get fixedPosition(): boolean;
        get packSource(): $PackSource;
        get extendedDescription(): $Component;
    }
}
