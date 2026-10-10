import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/unusual/block_factorys_bosses/client" {
    export class $CameraInject {
    }
    export interface $CameraInject {
        isCinematic(): boolean;
        setCinematic(arg0: boolean): void;
        setCinematicPosition(arg0: $Vec3_): void;
        set cinematicPosition(value: $Vec3_);
    }
    export class $CinematicEntity {
    }
    export interface $CinematicEntity {
        setCameraBone(arg0: string): void;
        getCameraBone(): $GeoBone;
    }
}
