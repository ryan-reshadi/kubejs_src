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
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        getSession(): $MinimapSession;
        setPath(arg0: $XaeroPath): void;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        getSubName(): string;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getEquivalentDimId(): $ResourceLocation;
        removeWorld(arg0: string): void;
        getDirectoryPath(): $Path;
        getWorldsCopy(): $List<$MinimapWorld>;
        getFullWorldName(arg0: string, arg1: string): string;
        removeName(arg0: string): void;
        getWorlds(): $Iterable<$MinimapWorld>;
        getRootConfig(): $RootConfig;
        getThirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        getFirstWorld(): $MinimapWorld;
        /**
         * @deprecated
         */
        getServerWaypointManager(): $ServerWaypointManager;
        getEquivalentDimKey(): $ResourceKey<$Level>;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        containsSubContainer(arg0: $XaeroPath): boolean;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        getLastNode(): string;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get session(): $MinimapSession;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get subName(): string;
        get equivalentDimId(): $ResourceLocation;
        get directoryPath(): $Path;
        get worldsCopy(): $List<$MinimapWorld>;
        get worlds(): $Iterable<$MinimapWorld>;
        get rootConfig(): $RootConfig;
        get thirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        get firstWorld(): $MinimapWorld;
        get serverWaypointManager(): $ServerWaypointManager;
        get equivalentDimKey(): $ResourceKey<$Level>;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get lastNode(): string;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        renameOldContainer(arg0: $XaeroPath): void;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        isConfigLoaded(): boolean;
        getConfig(): $RootConfig;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        updateDimensionType(arg0: $ClientLevel): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        updateConnectionsField(arg0: $WaypointSession): void;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get configLoaded(): boolean;
        get config(): $RootConfig;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
