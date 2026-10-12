import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $PostChain } from "@package/net/minecraft/client/renderer";
import { $Event } from "@package/net/neoforged/bus/api";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $ResourceProvider_, $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $DeltaTracker } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/com/finderfeed/fdlib/systems/post_shaders" {
    export class $FDRenderPostShaderEvent$Level extends $FDRenderPostShaderEvent {
        constructor(arg0: $DeltaTracker);
    }
    export class $FDPostShaderInitializeEvent$PostChainShaderLoadInstance extends $Record {
        onLoad(): $Consumer<$PostChain>;
        postChainLoad(): $PostChainLoad;
        constructor(postChainLoad: $PostChainLoad_, onLoad: $Consumer_<$PostChain>);
    }
    /**
     * Values that may be interpreted as {@link $FDPostShaderInitializeEvent$PostChainShaderLoadInstance}.
     */
    export type $FDPostShaderInitializeEvent$PostChainShaderLoadInstance_ = { onLoad?: $Consumer_<$PostChain>, postChainLoad?: $PostChainLoad_,  } | [onLoad?: $Consumer_<$PostChain>, postChainLoad?: $PostChainLoad_, ];
    export class $FDRenderPostShaderEvent extends $Event {
        getDeltaTracker(): $DeltaTracker;
        doDefaultShaderBeforeShaderStuff(): void;
        constructor(arg0: $DeltaTracker);
        get deltaTracker(): $DeltaTracker;
    }
    export class $FDPostShaderInitializeEvent extends $Event {
        getPostChainRegistry(): $List<$FDPostShaderInitializeEvent$PostChainShaderLoadInstance>;
        registerPostChain(arg0: $PostChainLoad_, arg1: $Consumer_<$PostChain>): void;
        constructor();
        get postChainRegistry(): $List<$FDPostShaderInitializeEvent$PostChainShaderLoadInstance>;
    }
    export class $FDRenderPostShaderEvent$Screen extends $FDRenderPostShaderEvent {
        constructor(arg0: $DeltaTracker);
    }
    export class $PostChainLoad {
    }
    export interface $PostChainLoad {
        loadPostChain(arg0: $TextureManager, arg1: $ResourceProvider_, arg2: $RenderTarget): $PostChain;
    }
    /**
     * Values that may be interpreted as {@link $PostChainLoad}.
     */
    export type $PostChainLoad_ = ((arg0: $TextureManager, arg1: $ResourceProvider, arg2: $RenderTarget) => $PostChain);
}
