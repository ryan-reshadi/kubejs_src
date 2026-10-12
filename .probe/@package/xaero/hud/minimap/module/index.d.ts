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
        getDimensionHelper(): $MinimapDimensionHelper;
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getRadarSession(): $RadarSession;
        getWaypointSession(): $WaypointSession;
        getProcessor(): $MinimapProcessor;
        getWorldManager(): $MinimapWorldManager;
        getMc(): $Minecraft;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        getWorldState(): $MinimapWorldState;
        getConfiguredWidth(): number;
        getHideMinimapUnderF3(): boolean;
        getHideMinimapUnderScreen(): boolean;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get dimensionHelper(): $MinimapDimensionHelper;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get radarSession(): $RadarSession;
        get waypointSession(): $WaypointSession;
        get processor(): $MinimapProcessor;
        get worldManager(): $MinimapWorldManager;
        get mc(): $Minecraft;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get worldManagerIO(): $MinimapWorldManagerIO;
        get worldState(): $MinimapWorldState;
        get configuredWidth(): number;
        get hideMinimapUnderF3(): boolean;
        get hideMinimapUnderScreen(): boolean;
    }
}
