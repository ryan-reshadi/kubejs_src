import { $Supplier_, $BiConsumer_ } from "@package/java/util/function";
import { $FDModel } from "@package/com/finderfeed/fdlib/systems/bedrock/models";
import { $Animation, $AnimationContext, $Animation_, $Animation$LoopMode_, $Animation$LoopMode } from "@package/com/finderfeed/fdlib/systems/bedrock/animations";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $HashMap } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as model_system from "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system/model_system";

declare module "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system" {
    export class $AnimationTicker$Builder {
        reversed(): $AnimationTicker$Builder;
        build(): $AnimationTicker;
        startTime(arg0: number): $AnimationTicker$Builder;
        setToNullTransitionTime(arg0: number): $AnimationTicker$Builder;
        setSpeed(arg0: number): $AnimationTicker$Builder;
        nextAnimation(arg0: $AnimationTicker): $AnimationTicker$Builder;
        important(): $AnimationTicker$Builder;
        setLoopMode(arg0: $Animation$LoopMode_): $AnimationTicker$Builder;
        constructor(arg0: $Animation_);
        set toNullTransitionTime(value: number);
        set speed(value: number);
        set loopMode(value: $Animation$LoopMode_);
    }
    export class $AnimationTicker {
        getNext(): $AnimationTicker;
        tick(): void;
        getTime(arg0: number): number;
        static builder(arg0: $Animation_): $AnimationTicker$Builder;
        static builder(arg0: $Supplier_<$Animation>): $AnimationTicker$Builder;
        setToNullTransitionTime(arg0: number): void;
        getAnimation(): $Animation;
        setSpeedModifier(arg0: number): void;
        getSpeedModifier(): number;
        setLoopMode(arg0: $Animation$LoopMode_): void;
        isReversed(): boolean;
        getElapsedTime(): number;
        setAnimation(arg0: $Animation_): void;
        hasEnded(): boolean;
        getLoopMode(): $Animation$LoopMode;
        addVariables(arg0: $AnimationContext, arg1: number): void;
        getToNullTransitionTime(): number;
        resetTime(): void;
        isImportant(): boolean;
        static NO_NEXT_NETWORK_CODEC: $StreamCodec<$FriendlyByteBuf, $AnimationTicker>;
        static NETWORK_CODEC: $StreamCodec<$FriendlyByteBuf, $AnimationTicker>;
        constructor(arg0: $AnimationTicker);
        constructor(arg0: $Animation_);
        get next(): $AnimationTicker;
        get reversed(): boolean;
        get elapsedTime(): number;
        get important(): boolean;
    }
    export class $AnimationSystem {
        isFrozen(): boolean;
        tick(): void;
        getVariable(arg0: string): number;
        setVariable(arg0: string, arg1: number): void;
        applyAnimations(arg0: $FDModel, arg1: number): void;
        getTicker(arg0: string): $AnimationTicker;
        startAnimation(arg0: string, arg1: $AnimationTicker): void;
        onAnimationStart(arg0: string, arg1: $AnimationTicker): void;
        stopAnimation(arg0: string): void;
        getTickerAnimation(arg0: string): $Animation;
        getTickers(): $HashMap<string, $AnimationTicker>;
        onFreeze(arg0: boolean): void;
        setAnimationsApplyListener(arg0: $BiConsumer_<$FDModel, number>): void;
        setFrozen(arg0: boolean): void;
        onAnimationStop(arg0: string): void;
        onVariableAdded(arg0: string, arg1: number): void;
        constructor();
        get tickers(): $HashMap<string, $AnimationTicker>;
        set animationsApplyListener(value: $BiConsumer_<$FDModel, number>);
    }
}
