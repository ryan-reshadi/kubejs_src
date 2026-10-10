import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";

declare module "@package/xaero/hud/minimap/waypoint/thirdparty" {
    export class $ThirdPartyWaypointManager {
        getByIndex(arg0: number): $ThirdPartyWaypoints;
        getAll(): $List<$ThirdPartyWaypoints>;
        get(arg0: $ResourceLocation_): $ThirdPartyWaypoints;
        clear(): void;
        getCount(): number;
        clearOrigin(arg0: $ResourceLocation_): void;
        getOriginCount(): number;
        constructor(arg0: $MinimapSession);
        get all(): $List<$ThirdPartyWaypoints>;
        get count(): number;
        get originCount(): number;
    }
}
