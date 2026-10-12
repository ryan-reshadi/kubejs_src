import { $ServerLinks_ } from "@package/net/minecraft/server";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $ContainerObjectSelectionList, $Button, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $GuiMultiplayerExt, $ServerListEntryNormalExt, $SelectionListWithDividers } from "@package/gg/essential/mixins/ext/client/gui";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Map_, $TreeMap, $List_ } from "@package/java/util";
import { $LanServer } from "@package/net/minecraft/client/server";
import { $ServerData, $ServerList, $ServerStatusPinger } from "@package/net/minecraft/client/multiplayer";
import { $EssentialGuiDraggableEntryScreen, $EssentialPostScreenDrawHook, $GuiDragDropEntryHandler } from "@package/gg/essential/mixins/impl/client/gui";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ServerSelectionListAccessor, $GuiMultiplayerAccessor, $ServerListEntryNormalAccessor } from "@package/gg/essential/mixins/transformers/client/gui";
import { $FriendsIndicator, $EssentialMultiplayerGui } from "@package/gg/essential/gui/multiplayer";
import { $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object, $AutoCloseable } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $NewServerDiscoveryManager$ImpressionConsumer_ } from "@package/gg/essential/network/connectionmanager/serverdiscovery";

declare module "@package/net/minecraft/client/gui/screens/multiplayer" {
    export class $ServerSelectionList$NetworkServerEntry extends $ServerSelectionList$Entry {
        getServerData(): $LanServer;
        getServerNarration(): $Component;
        get serverData(): $LanServer;
        get serverNarration(): $Component;
    }
    export class $ServerSelectionList$Entry extends $ObjectSelectionList$Entry<$ServerSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        constructor();
    }
    export class $JoinMultiplayerScreen extends $Screen implements $GuiMultiplayerAccessor, $EssentialPostScreenDrawHook, $GuiMultiplayerExt, $EssentialGuiDraggableEntryScreen<any> {
        getPinger(): $ServerStatusPinger;
        essential$getDragHandlerOrNull(): $GuiDragDropEntryHandler<any>;
        setSelected(selected: $ServerSelectionList$Entry): void;
        essential$close(): void;
        essential$refresh(): void;
        joinSelectedServer(): void;
        essential$getEssentialGui(): $EssentialMultiplayerGui;
        getServers(): $ServerList;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        essential$getQuickSwapIndex(): number;
        getParentScreen(): $Screen;
        getBtnSelectServer(): $Button;
        getServerListSelector(): $ServerSelectionList;
        static MENU_BACKGROUND: $ResourceLocation;
        static LOWER_ROW_BUTTON_WIDTH: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static FOOTER_HEIGHT: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TOP_ROW_BUTTON_WIDTH: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static BUTTON_ROW_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen);
        get pinger(): $ServerStatusPinger;
        set selected(value: $ServerSelectionList$Entry);
        get servers(): $ServerList;
        get parentScreen(): $Screen;
        get btnSelectServer(): $Button;
        get serverListSelector(): $ServerSelectionList;
    }
    export class $SafetyScreen extends $WarningScreen {
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
        constructor(previous: $Screen);
    }
    export class $ServerReconfigScreen extends $Screen {
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
        constructor(title: $Component_, connection: $Connection);
    }
    export class $WarningScreen extends $Screen {
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
    }
    export class $ServerLinksScreen$LinkListEntry extends $ContainerObjectSelectionList$Entry<$ServerLinksScreen$LinkListEntry> {
    }
    export class $ServerSelectionList extends $ObjectSelectionList<$ServerSelectionList$Entry> implements $SelectionListWithDividers<any>, $ServerSelectionListAccessor {
        removed(): void;
        setSelected(entry: $ServerSelectionList$Entry | null): void;
        updateOnlineServers(servers: $ServerList): void;
        updateNetworkServers(lanServers: $List_<$LanServer>): void;
        getEssential$offsetDividers(): $TreeMap<any, any>;
        setEssential$offsetDividers(dividers: $TreeMap<any, any>): void;
        handler$gil000$essential$modifyListEntries(ci: $CallbackInfo): void;
        essential$setDividers(dividers: $Map_<number, $Object>): void;
        updateList(): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getServerListInternet(): $List<$ServerSelectionList$OnlineServerEntry>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getServerListLan(): $List<$ServerSelectionList$NetworkServerEntry>;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $ServerSelectionList$Entry;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        height: number;
        constructor(screen: $JoinMultiplayerScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        set selected(value: $ServerSelectionList$Entry | null);
        get serverListInternet(): $List<$ServerSelectionList$OnlineServerEntry>;
        get serverListLan(): $List<$ServerSelectionList$NetworkServerEntry>;
    }
    export class $ServerSelectionList$OnlineServerEntry extends $ServerSelectionList$Entry implements $ServerListEntryNormalExt, $ServerListEntryNormalAccessor {
        getServerData(): $ServerData;
        static create$essential_$md$b7e275$0(arg0: $ServerSelectionList, arg1: $JoinMultiplayerScreen, arg2: $ServerData): $ServerSelectionList$OnlineServerEntry;
        updateServerList(): void;
        essential$setImpressionConsumer(consumer: $NewServerDiscoveryManager$ImpressionConsumer_): void;
        essential$getFriends(): $FriendsIndicator;
        get serverData(): $ServerData;
    }
    export class $ServerSelectionList$LANHeader extends $ServerSelectionList$Entry {
        constructor();
    }
    export class $ServerLinksScreen$LinkList extends $ContainerObjectSelectionList<$ServerLinksScreen$LinkListEntry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $ServerLinksScreen$LinkListEntry;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        height: number;
    }
    export class $ServerLinksScreen extends $Screen {
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
        constructor(lastScreen: $Screen, links: $ServerLinks_);
    }
}
