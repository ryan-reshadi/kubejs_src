import { $FramebufferRenderTargetAccessor } from "@package/foundry/veil/mixin/framebuffer/accessor";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Enum } from "@package/java/lang";
import { $RenderTargetExtension, $PerformanceRenderTargetExtension } from "@package/foundry/veil/ext";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $FramebufferRenderTargetAccessor, $PerformanceRenderTargetExtension, $RenderTargetExtension {
        clear(useDepth: boolean): void;
        resize(width: number, height: number, disableBlend: boolean): void;
        blitToScreen(width: number, height: number, disableBlend: boolean): void;
        blitToScreen(width: number, height: number): void;
        unbindWrite(): void;
        setClearColor(red: number, green: number, blue: number, alpha: number): void;
        checkStatus(): void;
        destroyBuffers(): void;
        unbindRead(): void;
        bindRead(): void;
        veil$clearColorBuffer(useDepth: boolean): void;
        bindWrite(useDepth: boolean): void;
        copyDepthFrom(otherTarget: $RenderTarget): void;
        getColorTextureId(): number;
        handler$zmf000$veil$createBuffers(arg0: $CallbackInfo): void;
        handler$zmf000$veil$destroyBuffers(arg0: $CallbackInfo): void;
        handler$zlm000$veil$copyDepthFrom(arg0: $RenderTarget, arg1: $CallbackInfo): void;
        handler$zmf000$veil$bindRead(arg0: $CallbackInfo): void;
        handler$zmf000$veil$bindWrite(arg0: boolean, arg1: $CallbackInfo): void;
        handler$dfh000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        handler$zlm000$veil$clear(arg0: boolean, arg1: $CallbackInfo): void;
        veil$getTexture(arg0: number): number;
        createBuffers(width: number, height: number, disableBlend: boolean): void;
        veil$setWrapper(arg0: $AdvancedFbo): void;
        enableStencil(): void;
        isStencilEnabled(): boolean;
        setFilterMode(filterMode: number, force: boolean): void;
        setFilterMode(filterMode: number): void;
        getDepthTextureId(): number;
        handler$zmf000$veil$getColorTextureId(arg0: $CallbackInfoReturnable<any>): void;
        handler$zmf000$veil$getDepthTextureId(arg0: $CallbackInfoReturnable<any>): void;
        getClearChannels(): number[];
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(useDepth: boolean);
        get colorTextureId(): number;
        get stencilEnabled(): boolean;
        get depthTextureId(): number;
        get clearChannels(): number[];
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(width: number, height: number);
    }
    export class $RenderPipeline {
        recordRenderCall(renderCall: $RenderCall_): void;
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        canBeginRecording(): boolean;
        beginProcessing(): boolean;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        endProcessing(): void;
        canBeginProcessing(): boolean;
        beginRecording(): boolean;
        endRecording(): void;
        processRecordedQueue(): void;
        constructor();
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(width: number, height: number, useDepth: boolean, clearError: boolean);
    }
}
