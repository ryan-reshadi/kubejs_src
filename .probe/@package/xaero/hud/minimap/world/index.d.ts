import { $Level } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MinimapWorldContainer, $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $HudMod } from "@package/xaero/common";
import { $HashMap } from "@package/java/util";
import { $WaypointSet } from "@package/xaero/hud/minimap/waypoint/set";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as connection from "@package/xaero/hud/minimap/world/connection";
export * as io from "@package/xaero/hud/minimap/world/io";
export * as container from "@package/xaero/hud/minimap/world/container";
export * as state from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/world" {
    export class $MinimapDimensionHelper {
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        getDimCoordinateScale(arg0: $MinimapWorld): number;
        getDimensionDivision(arg0: $MinimapWorld): number;
        constructor();
    }
    export class $MinimapWorldManager {
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        removeContainer(arg0: $XaeroPath): boolean;
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        hasCustomWaypoints(): boolean;
        getAutoRootContainer(): $MinimapWorldRootContainer;
        getAutoWorld(): $MinimapWorld;
        getCurrentWorld(): $MinimapWorld;
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        containerExists(arg0: $XaeroPath): boolean;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get currentRootContainer(): $MinimapWorldRootContainer;
        get rootContainers(): $Iterable<$MinimapWorldRootContainer>;
        get autoRootContainer(): $MinimapWorldRootContainer;
        get autoWorld(): $MinimapWorld;
        get rootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
    }
    export class $MinimapWorld {
        setNode(arg0: string): void;
        getContainer(): $MinimapWorldContainer;
        getNode(): string;
        getFullPath(): $XaeroPath;
        setContainer(arg0: $MinimapWorldContainer): void;
        getDimId(): $ResourceKey<$Level>;
        cleanupOnSave(arg0: $Path_): void;
        addWaypointSet(arg0: string): void;
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        getLocalWorldKey(): $XaeroPath;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        getCurrentWaypointSetId(): string;
        setCurrentWaypointSetId(arg0: string): void;
        getWaypointSet(arg0: string): $WaypointSet;
        getCurrentWaypointSet(): $WaypointSet;
        getRootConfig(): $RootConfig;
        getSlimeChunkSeed(): number;
        setSlimeChunkSeed(arg0: number): void;
        removeWaypointSet(arg0: string): $WaypointSet;
        requestRemovalOnSave(arg0: string): void;
        getSetCount(): number;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        hasSomethingToRemoveOnSave(): boolean;
        static DEFAULT_SET: string;
        get fullPath(): $XaeroPath;
        get localWorldKey(): $XaeroPath;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
        get currentWaypointSet(): $WaypointSet;
        get rootConfig(): $RootConfig;
        get setCount(): number;
    }
}
