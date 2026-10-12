import { $JsonObject_ } from "@package/com/google/gson";
import { $FDModel } from "@package/com/finderfeed/fdlib/systems/bedrock/models";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $HashMap } from "@package/java/util";
import { $ExpressionContext } from "@package/com/finderfeed/fdlib/shunting_yard/sy_base";
export * as animation_system from "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system";

declare module "@package/com/finderfeed/fdlib/systems/bedrock/animations" {
    export class $Animation$LoopMode extends $Enum<$Animation$LoopMode> {
        static values(): $Animation$LoopMode[];
        static valueOf(arg0: string): $Animation$LoopMode;
        static ONCE: $Animation$LoopMode;
        static LOOP: $Animation$LoopMode;
        static HOLD_ON_LAST_FRAME: $Animation$LoopMode;
    }
    /**
     * Values that may be interpreted as {@link $Animation$LoopMode}.
     */
    export type $Animation$LoopMode_ = "loop" | "once" | "hold_on_last_frame";
    export class $Animation {
        getName(): $ResourceLocation;
        load(arg0: $ResourceLocation_, arg1: $JsonObject_): void;
        applyAnimation(arg0: $AnimationContext, arg1: $FDModel, arg2: number): void;
        createTransitionTo(arg0: $AnimationContext, arg1: $Animation_, arg2: number, arg3: number, arg4: boolean): $Animation;
        isToNullTransition(): boolean;
        isTransition(): boolean;
        getAnimTime(): number;
        getDefaultLoopMode(): $Animation$LoopMode;
        getFileLocation(): $ResourceLocation;
        static TRANSITION: string;
        static TO_NULL_TRANSITION: string;
        constructor();
        constructor(arg0: $ResourceLocation_);
        get name(): $ResourceLocation;
        get toNullTransition(): boolean;
        get transition(): boolean;
        get animTime(): number;
        get defaultLoopMode(): $Animation$LoopMode;
        get fileLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $Animation}.
     */
    export type $Animation_ = RegistryTypes.FdlibBedrockAnimations;
    export class $AnimationContext extends $ExpressionContext {
        setAnimation(arg0: $Animation_): void;
        getAnimation(): $Animation;
        getCurrentLoopMode(): $Animation$LoopMode;
        setCurrentLoopMode(arg0: $Animation$LoopMode_): void;
        variables: $HashMap<string, number>;
        constructor();
        constructor(arg0: $Animation_, arg1: boolean);
        constructor(arg0: $Animation_, arg1: $Animation$LoopMode_);
    }
    export interface $Animation extends RegistryMarked<RegistryTypes.FdlibBedrockAnimationsTag, RegistryTypes.FdlibBedrockAnimations> {}
}
