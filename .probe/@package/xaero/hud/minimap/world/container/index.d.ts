import { $Level } from "@package/net/minecraft/world/level";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $List, $Map$Entry } from "@package/java/util";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerWaypointManager } from "@package/xaero/hud/minimap/waypoint/server";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort, $WaypointWorldContainer } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ThirdPartyWaypointManager } from "@package/xaero/hud/minimap/waypoint/thirdparty";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as config from "@package/xaero/hud/minimap/world/container/config";

declare module "@package/xaero/hud/minimap/world/container" {
    export class $MinimapWorldContainer {
        getPath(): $XaeroPath;
        setPath(arg0: $XaeroPath): void;
        getSubName(): string;
        getSession(): $MinimapSession;
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getThirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        getLastNode(): string;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        removeName(arg0: string): void;
        /**
         * @deprecated
         */
        getServerWaypointManager(): $ServerWaypointManager;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        getEquivalentDimKey(): $ResourceKey<$Level>;
        getEquivalentDimId(): $ResourceLocation;
        removeWorld(arg0: string): void;
        getWorlds(): $Iterable<$MinimapWorld>;
        getDirectoryPath(): $Path;
        containsSubContainer(arg0: $XaeroPath): boolean;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getFullWorldName(arg0: string, arg1: string): string;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        getWorldsCopy(): $List<$MinimapWorld>;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get subName(): string;
        get session(): $MinimapSession;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get thirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get lastNode(): string;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get serverWaypointManager(): $ServerWaypointManager;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get equivalentDimKey(): $ResourceKey<$Level>;
        get equivalentDimId(): $ResourceLocation;
        get worlds(): $Iterable<$MinimapWorld>;
        get directoryPath(): $Path;
        get worldsCopy(): $List<$MinimapWorld>;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        updateConnectionsField(arg0: $WaypointSession): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        updateDimensionType(arg0: $ClientLevel): void;
        renameOldContainer(arg0: $XaeroPath): void;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
