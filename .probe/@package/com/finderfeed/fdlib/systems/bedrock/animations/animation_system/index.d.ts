import { $Supplier_, $BiConsumer_ } from "@package/java/util/function";
import { $FDModel } from "@package/com/finderfeed/fdlib/systems/bedrock/models";
import { $Animation, $AnimationContext, $Animation_, $Animation$LoopMode_, $Animation$LoopMode } from "@package/com/finderfeed/fdlib/systems/bedrock/animations";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $HashMap } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as model_system from "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system/model_system";

declare module "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system" {
    export class $AnimationTicker$Builder {
        startTime(arg0: number): $AnimationTicker$Builder;
        reversed(): $AnimationTicker$Builder;
        build(): $AnimationTicker;
        important(): $AnimationTicker$Builder;
        setToNullTransitionTime(arg0: number): $AnimationTicker$Builder;
        setSpeed(arg0: number): $AnimationTicker$Builder;
        nextAnimation(arg0: $AnimationTicker): $AnimationTicker$Builder;
        setLoopMode(arg0: $Animation$LoopMode_): $AnimationTicker$Builder;
        constructor(arg0: $Animation_);
        set toNullTransitionTime(value: number);
        set speed(value: number);
        set loopMode(value: $Animation$LoopMode_);
    }
    export class $AnimationTicker {
        getSpeedModifier(): number;
        static builder(arg0: $Supplier_<$Animation>): $AnimationTicker$Builder;
        static builder(arg0: $Animation_): $AnimationTicker$Builder;
        getTime(arg0: number): number;
        tick(): void;
        getNext(): $AnimationTicker;
        getToNullTransitionTime(): number;
        setAnimation(arg0: $Animation_): void;
        setToNullTransitionTime(arg0: number): void;
        getAnimation(): $Animation;
        resetTime(): void;
        isReversed(): boolean;
        setSpeedModifier(arg0: number): void;
        isImportant(): boolean;
        setLoopMode(arg0: $Animation$LoopMode_): void;
        getLoopMode(): $Animation$LoopMode;
        addVariables(arg0: $AnimationContext, arg1: number): void;
        hasEnded(): boolean;
        getElapsedTime(): number;
        static NO_NEXT_NETWORK_CODEC: $StreamCodec<$FriendlyByteBuf, $AnimationTicker>;
        static NETWORK_CODEC: $StreamCodec<$FriendlyByteBuf, $AnimationTicker>;
        constructor(arg0: $AnimationTicker);
        constructor(arg0: $Animation_);
        get next(): $AnimationTicker;
        get reversed(): boolean;
        get important(): boolean;
        get elapsedTime(): number;
    }
    export class $AnimationSystem {
        isFrozen(): boolean;
        tick(): void;
        startAnimation(arg0: string, arg1: $AnimationTicker): void;
        applyAnimations(arg0: $FDModel, arg1: number): void;
        setAnimationsApplyListener(arg0: $BiConsumer_<$FDModel, number>): void;
        getVariable(arg0: string): number;
        setVariable(arg0: string, arg1: number): void;
        onFreeze(arg0: boolean): void;
        getTickers(): $HashMap<string, $AnimationTicker>;
        setFrozen(arg0: boolean): void;
        getTicker(arg0: string): $AnimationTicker;
        onAnimationStart(arg0: string, arg1: $AnimationTicker): void;
        onAnimationStop(arg0: string): void;
        getTickerAnimation(arg0: string): $Animation;
        onVariableAdded(arg0: string, arg1: number): void;
        stopAnimation(arg0: string): void;
        constructor();
        set animationsApplyListener(value: $BiConsumer_<$FDModel, number>);
        get tickers(): $HashMap<string, $AnimationTicker>;
    }
}
