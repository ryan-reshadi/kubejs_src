import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/noobanidus/mods/lootr/common/api/client" {
    export class $FrustumExtension {
    }
    export interface $FrustumExtension {
        lootr$isVisible(arg0: $Vec3_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FrustumExtension}.
     */
    export type $FrustumExtension_ = ((arg0: $Vec3) => boolean);
}
