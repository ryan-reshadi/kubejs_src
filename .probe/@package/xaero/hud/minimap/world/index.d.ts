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
        getDimensionDivision(arg0: $MinimapWorld): number;
        getDimCoordinateScale(arg0: $MinimapWorld): number;
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        constructor();
    }
    export class $MinimapWorldManager {
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        getAutoRootContainer(): $MinimapWorldRootContainer;
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        getAutoWorld(): $MinimapWorld;
        removeContainer(arg0: $XaeroPath): boolean;
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(): $MinimapWorld;
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        containerExists(arg0: $XaeroPath): boolean;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        hasCustomWaypoints(): boolean;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get autoRootContainer(): $MinimapWorldRootContainer;
        get autoWorld(): $MinimapWorld;
        get rootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        get currentRootContainer(): $MinimapWorldRootContainer;
        get rootContainers(): $Iterable<$MinimapWorldRootContainer>;
    }
    export class $MinimapWorld {
        getNode(): string;
        setNode(arg0: string): void;
        getCurrentWaypointSetId(): string;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        setCurrentWaypointSetId(arg0: string): void;
        getCurrentWaypointSet(): $WaypointSet;
        getContainer(): $MinimapWorldContainer;
        getRootConfig(): $RootConfig;
        getSlimeChunkSeed(): number;
        setSlimeChunkSeed(arg0: number): void;
        getFullPath(): $XaeroPath;
        getDimId(): $ResourceKey<$Level>;
        setContainer(arg0: $MinimapWorldContainer): void;
        getWaypointSet(arg0: string): $WaypointSet;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        removeWaypointSet(arg0: string): $WaypointSet;
        getSetCount(): number;
        cleanupOnSave(arg0: $Path_): void;
        getLocalWorldKey(): $XaeroPath;
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        addWaypointSet(arg0: string): void;
        hasSomethingToRemoveOnSave(): boolean;
        requestRemovalOnSave(arg0: string): void;
        static DEFAULT_SET: string;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
        get currentWaypointSet(): $WaypointSet;
        get rootConfig(): $RootConfig;
        get fullPath(): $XaeroPath;
        get setCount(): number;
        get localWorldKey(): $XaeroPath;
    }
}
