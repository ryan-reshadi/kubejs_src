import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $HudMod } from "@package/xaero/common";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/hud/minimap/world/state" {
    export class $MinimapWorldState {
        setAutoRootContainerPath(arg0: $XaeroPath): void;
        setOutdatedAutoRootContainerPath(arg0: number, arg1: $XaeroPath): void;
        getOutdatedAutoRootContainerPath(arg0: number): $XaeroPath;
        setAutoWorldPath(arg0: $XaeroPath): void;
        getAutoContainerPathIgnoreCaseCache(): $XaeroPath;
        setAutoContainerPathIgnoreCaseCache(arg0: $XaeroPath): void;
        getAutoRootContainerPath(): $XaeroPath;
        getCurrentWorldPath(): $XaeroPath;
        getCurrentWorldPath(arg0: $XaeroPath): $XaeroPath;
        getAutoWorldPath(): $XaeroPath;
        setCustomWorldPath(arg0: $XaeroPath): void;
        getCurrentContainerPath(): $XaeroPath;
        getCurrentRootContainerPath(): $XaeroPath;
        getCustomContainerPath(): $XaeroPath;
        getCustomWorldPath(): $XaeroPath;
        constructor();
        get currentContainerPath(): $XaeroPath;
        get currentRootContainerPath(): $XaeroPath;
        get customContainerPath(): $XaeroPath;
    }
    export class $MinimapWorldStateUpdater {
        update(): void;
        /**
         * @deprecated
         */
        update(arg0: $MinimapSession): void;
        init(): void;
        setCurrentWorldSpawn(arg0: $BlockPos_): void;
        getAutoRootContainerPath(arg0: number): $XaeroPath;
        /**
         * @deprecated
         */
        getAutoRootContainerPath(arg0: number, arg1: $ClientPacketListener, arg2: $MinimapSession): $XaeroPath;
        ignoreContainerCase(arg0: $XaeroPath, arg1: $XaeroPath): $XaeroPath;
        /**
         * @deprecated
         */
        ignoreContainerCase(arg0: $XaeroPath, arg1: $XaeroPath, arg2: $MinimapSession): $XaeroPath;
        /**
         * @deprecated
         */
        getPotentialWorldNode(arg0: $ResourceKey_<$Level>, arg1: boolean, arg2: $MinimapSession): string;
        getPotentialWorldNode(arg0: $ResourceKey_<$Level>, arg1: boolean): string;
        onServerLevelId(arg0: number): void;
        getPotentialContainerPath(): $XaeroPath;
        /**
         * @deprecated
         */
        getPotentialContainerPath(arg0: $MinimapSession): $XaeroPath;
        hasServerLevelId(arg0: $MinimapWorldRootContainer): boolean;
        getAutoWorldNodeBase(arg0: $MinimapWorldRootContainer): $Object;
        static ROOT_CONTAINER_FORMAT: number;
        constructor(arg0: $HudMod, arg1: $MinimapSession, arg2: $ClientPacketListener);
        set currentWorldSpawn(value: $BlockPos_);
    }
}
