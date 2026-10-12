import { $Function } from "@package/java/util/function";
import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";
import { $Map_, $Map } from "@package/java/util";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $EasingType } from "@package/software/bernie/geckolib/animation";

declare module "@package/net/unusual/block_factorys_bosses/mixins/accessor" {
    export class $AnimatableManagerAccessor {
    }
    export interface $AnimatableManagerAccessor {
        invokeFinishFirstTick(): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimatableManagerAccessor}.
     */
    export type $AnimatableManagerAccessor_ = (() => void);
    export class $AnimationProcessorAccessor {
    }
    export interface $AnimationProcessorAccessor {
        getBones(): $Map<string, $GeoBone>;
        get bones(): $Map<string, $GeoBone>;
    }
    /**
     * Values that may be interpreted as {@link $AnimationProcessorAccessor}.
     */
    export type $AnimationProcessorAccessor_ = (() => $Map_<string, $GeoBone>);
    export class $AnimationControllerAccessor<T extends $GeoAnimatable> {
    }
    export interface $AnimationControllerAccessor<T extends $GeoAnimatable> {
        setIsJustStarting(arg0: boolean): void;
        getOverrideEasingTypeFunction(): $Function<T, $EasingType>;
        set isJustStarting(value: boolean);
        get overrideEasingTypeFunction(): $Function<T, $EasingType>;
    }
}
