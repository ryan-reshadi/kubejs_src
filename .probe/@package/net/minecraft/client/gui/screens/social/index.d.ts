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
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isRemoved(): boolean;
        setRemoved(hasRecentMessages: boolean): void;
        getPlayerName(): string;
        getPlayerId(): $UUID;
        getSkinGetter(): $Supplier<$PlayerSkin>;
        setHasRecentMessages(hasRecentMessages: boolean): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        hasRecentMessages(): boolean;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isChatReportable(): boolean;
        static BG_FILL: number;
        static PLAYERNAME_COLOR: number;
        static BG_FILL_REMOVED: number;
        static SKIN_SHADE: number;
        static PLAYER_STATUS_COLOR: number;
        constructor(minecraft: $Minecraft, socialInteractionsScreen: $SocialInteractionsScreen, id: $UUID_, playerName: string, skinGetter: $Supplier_<$PlayerSkin>, playerReportable: boolean);
        get playerName(): string;
        get playerId(): $UUID;
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
        setFilter(filter: string): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isEmpty(): boolean;
        addPlayer(playerInfo: $PlayerInfo, page: $SocialInteractionsScreen$Page_): void;
        updatePlayerList(ids: $Collection_<$UUID_>, scrollAmount: number, arg2: boolean): void;
        removePlayer(id: $UUID_): void;
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
        set filter(value: string);
        get empty(): boolean;
    }
    export class $PlayerSocialManager {
        stopOnlineMode(): void;
        isBlocked(id: $UUID_): boolean;
        shouldHideMessageFrom(id: $UUID_): boolean;
        isHidden(id: $UUID_): boolean;
        startOnlineMode(): void;
        addPlayer(playerInfo: $PlayerInfo): void;
        getHiddenPlayers(): $Set<$UUID>;
        removePlayer(id: $UUID_): void;
        hidePlayer(id: $UUID_): void;
        showPlayer(id: $UUID_): void;
        getDiscoveredUUID(uuid: string): $UUID;
        handler$bjl000$supplementaries$supp$getPlayer(arg0: $PlayerInfo, arg1: $CallbackInfo): void;
        handler$bjl000$supplementaries$supp$removePlayer(arg0: $UUID_, arg1: $CallbackInfo): void;
        constructor(minecraft: $Minecraft, service: $UserApiService);
        get hiddenPlayers(): $Set<$UUID>;
    }
}
