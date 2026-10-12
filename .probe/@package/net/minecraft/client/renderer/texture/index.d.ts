import { $TextureAtlasSpriteExtension, $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $ResourceTextureAtlasAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Function_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $UImage } from "@package/gg/essential/universal";
import { $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1, $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $Record, $RuntimeException, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $File, $File_, $Closeable } from "@package/java/io";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $TextureAtlasExtension, $TextureManagerExtension, $AbstractTextureExtension } from "@package/foundry/veil/ext";
import { $Darkness$DynamicTextureHook } from "@package/me/srrapero720/chloride/impl";
import { $PlayerSkinTextureExt } from "@package/gg/essential/mixins/ext/client/renderer";
import { $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $SpriteContentsExtension as $SpriteContentsExtension$1, $TickerExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsExtension } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(entry: $Stitcher$Entry, allSprites: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        stitch(): void;
        getWidth(): number;
        getHeight(): number;
        registerSprite(stitcherEntry: T): void;
        gatherSprites(loader: $Stitcher$SpriteLoader_<T>): void;
        constructor(maxWidth: number, maxHeight: number, mipLevel: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(x: number, y: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable, $AbstractTextureExtension {
        setFilter(blur: boolean, mipmap: boolean): void;
        bind(): void;
        reset(textureManager: $TextureManager, resourceManager: $ResourceManager, path: $ResourceLocation_, executor: $Executor_): void;
        load(resourceManager: $ResourceManager): void;
        getId(): number;
        close(): void;
        handler$zlk000$veil$setFilterDSA(arg0: boolean, arg1: boolean, arg2: $CallbackInfo, arg3: number, arg4: number): void;
        setBlurMipmap(blur: boolean, mipmap: boolean): void;
        restoreLastBlurMipmap(): void;
        releaseId(): void;
        handler$zlk000$veil$bind(arg0: $CallbackInfo): void;
        getTextureTarget(): number;
        static NOT_ASSIGNED: number;
        constructor();
        get id(): number;
        get textureTarget(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static u(u: number): number;
        static pack(u: number, hurt: boolean): number;
        static pack(u: number, v: number): number;
        static v(hurt: boolean): number;
        close(): void;
        teardownOverlayColor(): void;
        setupOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture implements $PlayerSkinTextureExt {
        processLegacySkin(image: $NativeImage): $NativeImage;
        essential$getImage(): $UImage;
        essential$setImage(image: $UImage): void;
        static NOT_ASSIGNED: number;
        file: $File;
        constructor(file: $File_ | null, urlString: string, location: $ResourceLocation_, processLegacySkin: boolean, onDownloaded: $Runnable_ | null);
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        close(): void;
        handler$dgc000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
    }
    export class $SpriteLoader$Preparations extends $Record {
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        height(): number;
        width(): number;
        missing(): $TextureAtlasSprite;
        mipLevel(): number;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, height?: number, missing?: $TextureAtlasSprite, width?: number,  } | [readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, height?: number, missing?: $TextureAtlasSprite, width?: number, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        height(): number;
        width(): number;
        entry(): T;
        constructor(entry: T, mipLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { height?: number, width?: number, entry?: $Stitcher$Entry,  } | [height?: number, width?: number, entry?: $Stitcher$Entry, ];
    export class $SpriteLoader {
        static create(atlas: $TextureAtlas): $SpriteLoader;
        stitch(contents: $List_<$SpriteContents>, mipLevel: number, executor: $Executor_): $SpriteLoader$Preparations;
        loadAndStitch(resouceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(resourceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_, sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        static runSpriteSuppliers(spriteResourceLoader: $SpriteResourceLoader_, factories: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, executor: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(location: $ResourceLocation_, maxSupportedTextureSize: number, minWidth: number, minHeight: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(entry: T, x: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getTexture(): $DynamicTexture;
        static create(): $SpriteContents;
        static getLocation(): $ResourceLocation;
        constructor();
        static get texture(): $DynamicTexture;
        static get location(): $ResourceLocation;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        get index(): number;
        get time(): number;
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        height(): number;
        width(): number;
        name(): $ResourceLocation;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        static NOT_ASSIGNED: number;
        constructor(resourceManager: $ResourceManager, location: $ResourceLocation_, backgroundExecutor: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $TickerExtension, $SpriteContentsTickerAccessor {
        close(): void;
        tickAndUpload(x: number, y: number): void;
        handler$dfo000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        simulated$isPlaying(): boolean;
        simulated$setPlaying(arg0: boolean): void;
        getFrameIndex(): number;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getFrameTicks(): number;
        get frameIndex(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
        get frameTicks(): number;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$1, $SpriteContentsInvoker, $SpriteContentsExtension, $SpriteContentsAccessor, $SpriteContentsExtension$2 {
        height(): number;
        metadata(): $ResourceMetadata;
        width(): number;
        name(): $ResourceLocation;
        close(): void;
        createTicker(): $SpriteTicker;
        uploadFirstFrame(x: number, y: number): void;
        isTransparent(frame: number, x: number, y: number): boolean;
        getFrameCount(): number;
        getOriginalImage(): $NativeImage;
        increaseMipLevel(mipLevel: number): void;
        getUniqueFrames(): $IntStream;
        sodium$hasTransparentPixels(): boolean;
        sodium$hasTranslucentPixels(): boolean;
        simulated$getTicker(): $SpriteContents$Ticker;
        simulated$setTicker(arg0: $SpriteContents$Ticker): void;
        sodium$setActive(arg0: boolean): void;
        sodium$hasAnimation(): boolean;
        sodium$isActive(): boolean;
        invokeUpload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getImages(): $NativeImage[];
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(name: $ResourceLocation_, frameSize: $FrameSize_, originalImage: $NativeImage, metadata: $ResourceMetadata_);
        get frameCount(): number;
        get uniqueFrames(): $IntStream;
        get images(): $NativeImage[];
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $Darkness$DynamicTextureHook {
        upload(): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        wrapOperation$doa000$moonlight$forceMipMap(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        wrapOperation$doa000$moonlight$forceMipMap(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Operation_<any>): void;
        getPixels(): $NativeImage;
        setPixels(pixels: $NativeImage): void;
        chloride$enableDarkness(): void;
        static NOT_ASSIGNED: number;
        constructor(pixels: $NativeImage);
        constructor(width: number, height: number, useCalloc: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor {
        createTicker(): $SpriteTicker;
        uploadFirstFrame(x: number, y: number): void;
        getFrameX(frameIndex: number): number;
        getFrameY(frameIndex: number): number;
        getUniqueFrames(): $IntStream;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        getFrameRowSize(): number;
        get uniqueFrames(): $IntStream;
        get frames(): $List<$SpriteContents$FrameInfo>;
        get frameRowSize(): number;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $SpriteFinderImpl$SpriteFinderAccess, $ResourceTextureAtlasAccessor, $TextureAtlasExtension, $TextureAtlasAccessor {
        tick(): void;
        location(): $ResourceLocation;
        getSprite(name: $ResourceLocation_): $TextureAtlasSprite;
        upload(preparations: $SpriteLoader$Preparations_): void;
        maxSupportedTextureSize(): number;
        fabric_spriteFinder(): $SpriteFinderImpl;
        clearTextureData(): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        cycleAnimationFrames(): void;
        updateFilter(preparations: $SpriteLoader$Preparations_): void;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        getMipLevel(): number;
        sodium$getWidth(): number;
        sodium$getHeight(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        width: number;
        height: number;
        constructor(location: $ResourceLocation_);
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        getY(): number;
        walk(spriteLoader: $Stitcher$SpriteLoader_<T>): void;
        getX(): number;
        add(holder: $Stitcher$Holder_<T>): boolean;
        constructor(originX: number, originY: number, width: number, height: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture extends $AbstractTexture {
        static NOT_ASSIGNED: number;
        constructor(location: $ResourceLocation_);
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $TextureManagerExtension {
        getTexture(path: $ResourceLocation_): $AbstractTexture;
        getTexture(path: $ResourceLocation_, defaultTexture: $AbstractTexture): $AbstractTexture;
        release(path: $ResourceLocation_): void;
        tick(): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        register(path: $ResourceLocation_, texture: $AbstractTexture): void;
        register(name: string, texture: $DynamicTexture): $ResourceLocation;
        close(): void;
        bindForSetup(path: $ResourceLocation_): void;
        handler$zlc000$veil$applyLabel(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $CallbackInfo): void;
        modify$zmh000$veil$wrap(arg0: $AbstractTexture, arg1: $ResourceLocation_): $AbstractTexture;
        preload(path: $ResourceLocation_, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        veil$registerPreloadedTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $Executor_): $CompletableFuture<any>;
        dumpAllSheets(path: $Path_): void;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(resourceManager: $ResourceManager);
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension {
        getY(): number;
        contents(): $SpriteContents;
        getU(u: number): number;
        getX(): number;
        wrap(consumer: $VertexConsumer): $VertexConsumer;
        atlasLocation(): $ResourceLocation;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV1(): number;
        getV(u: number): number;
        createTicker(): $TextureAtlasSprite$Ticker;
        uploadFirstFrame(): void;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        uvShrinkRatio(): number;
        getUOffset(u: number): number;
        getVOffset(u: number): number;
        sodium$hasUnknownImageContents(): boolean;
        constructor(atlasLocation: $ResourceLocation_, contents: $SpriteContents, originX: number, originY: number, x: number, y: number);
        get y(): number;
        get x(): number;
        get u0(): number;
        get u1(): number;
        get v0(): number;
        get v1(): number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
    }
    export class $MipmapGenerator {
        static generateMipLevels(images: $NativeImage[], mipLevel: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
