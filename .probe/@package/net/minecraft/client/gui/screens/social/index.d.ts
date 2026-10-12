import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID, $List, $Set, $UUID_, $Collection_ } from "@package/java/util";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/gui/screens/social" {
    export class $SocialInteractionsScreen$Page extends $Enum<$SocialInteractionsScreen$Page> {
        static values(): $SocialInteractionsScreen$Page[];
        static valueOf(arg0: string): $SocialInteractionsScreen$Page;
        static ALL: $SocialInteractionsScreen$Page;
        static BLOCKED: $SocialInteractionsScreen$Page;
        static HIDDEN: $SocialInteractionsScreen$Page;
    }
    /**
     * Values that may be interpreted as {@link $SocialInteractionsScreen$Page}.
     */
    export type $SocialInteractionsScreen$Page_ = "all" | "hidden" | "blocked";
    export class $PlayerEntry extends $ContainerObjectSelectionList$Entry<$PlayerEntry> {
        setRemoved(hasRecentMessages: boolean): void;
        getPlayerId(): $UUID;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isRemoved(): boolean;
        getPlayerName(): string;
        getSkinGetter(): $Supplier<$PlayerSkin>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isChatReportable(): boolean;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        hasRecentMessages(): boolean;
        setHasRecentMessages(hasRecentMessages: boolean): void;
        static BG_FILL: number;
        static PLAYERNAME_COLOR: number;
        static BG_FILL_REMOVED: number;
        static SKIN_SHADE: number;
        static PLAYER_STATUS_COLOR: number;
        constructor(minecraft: $Minecraft, socialInteractionsScreen: $SocialInteractionsScreen, id: $UUID_, playerName: string, skinGetter: $Supplier_<$PlayerSkin>, playerReportable: boolean);
        get playerId(): $UUID;
        get playerName(): string;
        get skinGetter(): $Supplier<$PlayerSkin>;
        get chatReportable(): boolean;
    }
    export class $SocialInteractionsScreen extends $Screen {
        onAddPlayer(playerInfo: $PlayerInfo): void;
        onRemovePlayer(id: $UUID_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static LIST_START: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static SEARCH_START: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        constructor(lastScreen: $Screen | null);
    }
    export class $SocialInteractionsPlayerList extends $ContainerObjectSelectionList<$PlayerEntry> {
        removePlayer(id: $UUID_): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isEmpty(): boolean;
        setFilter(filter: string): void;
        addPlayer(playerInfo: $PlayerInfo, page: $SocialInteractionsScreen$Page_): void;
        updatePlayerList(ids: $Collection_<$UUID_>, scrollAmount: number, arg2: boolean): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $PlayerEntry;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        height: number;
        constructor(socialInteractionsScreen: $SocialInteractionsScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get empty(): boolean;
        set filter(value: string);
    }
    export class $PlayerSocialManager {
        removePlayer(id: $UUID_): void;
        isHidden(id: $UUID_): boolean;
        addPlayer(playerInfo: $PlayerInfo): void;
        shouldHideMessageFrom(id: $UUID_): boolean;
        stopOnlineMode(): void;
        startOnlineMode(): void;
        isBlocked(id: $UUID_): boolean;
        handler$bjl000$supplementaries$supp$removePlayer(arg0: $UUID_, arg1: $CallbackInfo): void;
        getHiddenPlayers(): $Set<$UUID>;
        getDiscoveredUUID(uuid: string): $UUID;
        handler$bjl000$supplementaries$supp$getPlayer(arg0: $PlayerInfo, arg1: $CallbackInfo): void;
        showPlayer(id: $UUID_): void;
        hidePlayer(id: $UUID_): void;
        constructor(minecraft: $Minecraft, service: $UserApiService);
        get hiddenPlayers(): $Set<$UUID>;
    }
}
