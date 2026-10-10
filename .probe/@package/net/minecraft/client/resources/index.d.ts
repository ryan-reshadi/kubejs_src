import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $User } from "@package/net/minecraft/client";
import { $ResourceManager, $SimplePreparableReloadListener, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $UUID_, $Set_ } from "@package/java/util";
import { $PaintingVariant_ } from "@package/net/minecraft/world/entity/decoration";
import { $SkinProviderFileCacheAccessor } from "@package/gg/essential/mixins/transformers/client/resources";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Supplier } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MapDecoration_ } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $Property_ } from "@package/com/mojang/authlib/properties";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $SplashRenderer } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Splitter } from "@package/com/google/common/base";
import { $TextureAtlasExtension } from "@package/foundry/veil/ext";
import { $BuiltInPackSource, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $PlayerSkinProviderAccessor } from "@package/gg/essential/mixins/impl/client/resources";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PlayerSkinAccessor } from "@package/net/jadenxgamer/elysium_api/impl/mixin/entity";
import { $MinecraftSessionService, $MinecraftProfileTexture, $MinecraftProfileTexture$Type } from "@package/com/mojang/authlib/minecraft";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as model from "@package/net/minecraft/client/resources/model";
export * as metadata from "@package/net/minecraft/client/resources/metadata";
export * as sounds from "@package/net/minecraft/client/resources/sounds";
export * as server from "@package/net/minecraft/client/resources/server";
export * as language from "@package/net/minecraft/client/resources/language";

declare module "@package/net/minecraft/client/resources" {
    export class $PlayerSkin$Model extends $Enum<$PlayerSkin$Model> {
        static byName(name: string | null): $PlayerSkin$Model;
        static values(): $PlayerSkin$Model[];
        static valueOf(name: string): $PlayerSkin$Model;
        id(): string;
        static SLIM: $PlayerSkin$Model;
        static WIDE: $PlayerSkin$Model;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin$Model}.
     */
    export type $PlayerSkin$Model_ = "slim" | "wide";
    export class $SplashManager extends $SimplePreparableReloadListener<$List<string>> {
        getSplash(): $SplashRenderer;
        static SPLASHES_LOCATION: $ResourceLocation;
        constructor(user: $User);
        get splash(): $SplashRenderer;
    }
    export class $GrassColorReloadListener extends $SimplePreparableReloadListener<number[]> {
        constructor();
    }
    export class $TextureAtlasHolder implements $PreparableReloadListener, $AutoCloseable, $TextureAtlasExtension {
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        close(): void;
        /**
         * Gets a sprite associated with the passed resource location.
         */
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        getName(): string;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_);
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_, metadataSections: $Set_<$MetadataSectionSerializer<never>>);
        get name(): string;
    }
    export class $IndexedAssetSource {
        static createIndexFs(assetDirectory: $Path_, assetIndex: string): $Path;
        static PATH_SPLITTER: $Splitter;
        constructor();
    }
    export class $SkinManager$TextureCache implements $SkinProviderFileCacheAccessor {
        getOrLoad(texture: $MinecraftProfileTexture): $CompletableFuture<$ResourceLocation>;
        getType(): $MinecraftProfileTexture$Type;
        invokeGet(texture: $MinecraftProfileTexture): $CompletableFuture<$ResourceLocation>;
        textureManager: $TextureManager;
        get type(): $MinecraftProfileTexture$Type;
    }
    export class $MobEffectTextureManager extends $TextureAtlasHolder {
        get(effect: $Holder_<$MobEffect>): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
    }
    export class $PaintingTextureManager extends $TextureAtlasHolder {
        get(paintingVariant: $PaintingVariant_): $TextureAtlasSprite;
        getBackSprite(): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
        get backSprite(): $TextureAtlasSprite;
    }
    export class $FoliageColorReloadListener extends $SimplePreparableReloadListener<number[]> {
        constructor();
    }
    export class $LegacyStuffWrapper {
        /**
         * @deprecated
         */
        static getPixels(manager: $ResourceManager, location: $ResourceLocation_): number[];
        constructor();
    }
    export class $MapDecorationTextureManager extends $TextureAtlasHolder {
        get(mapDecoration: $MapDecoration_): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
    }
    export class $SkinManager$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SkinManager$CacheKey}.
     */
    export type $SkinManager$CacheKey_ = { profileId?: $UUID_, packedTextures?: $Property_,  } | [profileId?: $UUID_, packedTextures?: $Property_, ];
    export class $DefaultPlayerSkin {
        static get(uuid: $UUID_): $PlayerSkin;
        static get(profile: $GameProfile): $PlayerSkin;
        static getDefaultTexture(): $ResourceLocation;
        constructor();
        static get defaultTexture(): $ResourceLocation;
    }
    export class $PlayerSkin extends $Record implements $PlayerSkinAccessor {
        secure(): boolean;
        texture(): $ResourceLocation;
        model(): $PlayerSkin$Model;
        textureUrl(): string;
        elytraTexture(): $ResourceLocation;
        capeTexture(): $ResourceLocation;
        elysium_api$setCapeTexture(arg0: $ResourceLocation_): void;
        constructor(arg0: $ResourceLocation_, arg1: string | null, arg2: $ResourceLocation_ | null, arg3: $ResourceLocation_ | null, arg4: $PlayerSkin$Model_, arg5: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin}.
     */
    export type $PlayerSkin_ = { capeTexture?: $ResourceLocation_, elytraTexture?: $ResourceLocation_, model?: $PlayerSkin$Model_, secure?: boolean, textureUrl?: string, texture?: $ResourceLocation_,  } | [capeTexture?: $ResourceLocation_, elytraTexture?: $ResourceLocation_, model?: $PlayerSkin$Model_, secure?: boolean, textureUrl?: string, texture?: $ResourceLocation_, ];
    export class $SkinManager implements $PlayerSkinProviderAccessor {
        getOrLoad(profile: $GameProfile): $CompletableFuture<$PlayerSkin>;
        lookupInsecure(profile: $GameProfile): $Supplier<$PlayerSkin>;
        getInsecureSkin(profile: $GameProfile): $PlayerSkin;
        getSkinCache(): $SkinProviderFileCacheAccessor;
        getCapeCache(): $SkinProviderFileCacheAccessor;
        getElytraCache(): $SkinProviderFileCacheAccessor;
        skinTextures: $SkinManager$TextureCache;
        constructor(textureManager: $TextureManager, root: $Path_, sessionService: $MinecraftSessionService, executor: $Executor_);
        get skinCache(): $SkinProviderFileCacheAccessor;
        get capeCache(): $SkinProviderFileCacheAccessor;
        get elytraCache(): $SkinProviderFileCacheAccessor;
    }
    export class $ClientPackSource extends $BuiltInPackSource {
        static createVanillaPackSource(assetIndex: $Path_): $VanillaPackResources;
        static HIGH_CONTRAST_PACK: string;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(assetIndex: $Path_, validator: $DirectoryValidator);
    }
}
