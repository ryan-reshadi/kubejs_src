import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapDimensionHelper, $MinimapWorldManager } from "@package/xaero/hud/minimap/world";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapWorldManagerIO } from "@package/xaero/hud/minimap/world/io";
import { $HudMod } from "@package/xaero/common";
import { $HudModule, $ModuleSession } from "@package/xaero/hud/module";
import { $Minecraft } from "@package/net/minecraft/client";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $MinimapWorldState, $MinimapWorldStateUpdater } from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/module" {
    export class $MinimapSession extends $ModuleSession<$MinimapSession> {
        getProcessor(): $MinimapProcessor;
        getMc(): $Minecraft;
        getWorldManager(): $MinimapWorldManager;
        getWaypointSession(): $WaypointSession;
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getRadarSession(): $RadarSession;
        getDimensionHelper(): $MinimapDimensionHelper;
        getConfiguredWidth(): number;
        getHideMinimapUnderScreen(): boolean;
        getHideMinimapUnderF3(): boolean;
        getWorldState(): $MinimapWorldState;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get processor(): $MinimapProcessor;
        get mc(): $Minecraft;
        get worldManager(): $MinimapWorldManager;
        get waypointSession(): $WaypointSession;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get radarSession(): $RadarSession;
        get dimensionHelper(): $MinimapDimensionHelper;
        get configuredWidth(): number;
        get hideMinimapUnderScreen(): boolean;
        get hideMinimapUnderF3(): boolean;
        get worldState(): $MinimapWorldState;
        get worldManagerIO(): $MinimapWorldManagerIO;
    }
}
