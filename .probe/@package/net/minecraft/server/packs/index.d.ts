import { $ZipFileWrapperAccessor } from "@package/gg/essential/mixins/transformers/resources";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $FileTime } from "@package/java/nio/file/attribute";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $IoSupplier, $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $UUID, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $InclusiveRange, $StringRepresentable, $HttpUtil$DownloadProgressListener, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer, $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $BiConsumer, $Consumer, $Consumer_ } from "@package/java/util/function";
import { $IPackResourcesExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Proxy, $URL } from "@package/java/net";
import { $ResourcePackWithPath } from "@package/gg/essential/mixins/ext/client/resource";
import { $Enum, $Record, $AutoCloseable, $Class } from "@package/java/lang";
import { $File, $InputStream, $File_ } from "@package/java/io";
import { $HashFunction, $HashCode } from "@package/com/google/common/hash";
import { $ICachingResourcePack } from "@package/org/embeddedt/modernfix/resources";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PackResourcesExtension$PackResourceConsumer_, $PackResourcesExtension } from "@package/foundry/veil/ext";
import { $ZipFile } from "@package/java/util/zip";
import { $SharedZipFileAccessAccessor } from "@package/org/embeddedt/modernfix/common/mixin/perf/resourcepacks";
import { $Instant } from "@package/java/time";
import { $Pack$Position_, $PackSource, $Pack$Metadata_, $Pack$Position, $KnownPack_, $Pack$ResourcesSupplier, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
export * as repository from "@package/net/minecraft/server/packs/repository";
export * as linkfs from "@package/net/minecraft/server/packs/linkfs";
export * as resources from "@package/net/minecraft/server/packs/resources";
export * as metadata from "@package/net/minecraft/server/packs/metadata";

declare module "@package/net/minecraft/server/packs" {
    export class $VanillaPackResources implements $PackResources, $PackResourcesExtension {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
        asProvider(): $ResourceProvider;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        veil$getRawResourceRoots(): $List<any>;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        listRawPaths(packType: $PackType_, packLocation: $ResourceLocation_, output: $Consumer_<$Path>): void;
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        veil$getIcon(): $IoSupplier<any>;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        veil$isStatic(): boolean;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        veil$blurIcon(): boolean;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        veil$listPacks(): $Stream<$PackResources>;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        get hidden(): boolean;
    }
    export class $PathPackResources$PathResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        openPrimary(location: $PackLocationInfo_): $PackResources;
        constructor(content: $Path_);
    }
    export class $DownloadQueue$LogEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$LogEntry}.
     */
    export type $DownloadQueue$LogEntry_ = { errorOrFileInfo?: $Either<string, $DownloadQueue$FileInfoEntry_>, id?: $UUID_, url?: string, hash?: (string) | undefined, time?: $Instant,  } | [errorOrFileInfo?: $Either<string, $DownloadQueue$FileInfoEntry_>, id?: $UUID_, url?: string, hash?: (string) | undefined, time?: $Instant, ];
    export class $DownloadCacheCleaner$PathAndTime extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadCacheCleaner$PathAndTime}.
     */
    export type $DownloadCacheCleaner$PathAndTime_ = { path?: $Path_, modifiedTime?: $FileTime,  } | [path?: $Path_, modifiedTime?: $FileTime, ];
    export class $DownloadCacheCleaner$PathAndPriority extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadCacheCleaner$PathAndPriority}.
     */
    export type $DownloadCacheCleaner$PathAndPriority_ = { path?: $Path_, removalPriority?: number,  } | [path?: $Path_, removalPriority?: number, ];
    export class $DownloadQueue implements $AutoCloseable {
        close(): void;
        downloadBatch(batchConfig: $DownloadQueue$BatchConfig_, downloads: $Map_<$UUID_, $DownloadQueue$DownloadRequest_>): $CompletableFuture<$DownloadQueue$BatchResult>;
        constructor(cacheDir: $Path_);
    }
    export class $DownloadQueue$BatchResult extends $Record {
        failed(): $Set<$UUID>;
        downloaded(): $Map<$UUID, $Path>;
        constructor();
        constructor(arg0: $Map_<$UUID_, $Path_>, arg1: $Set_<$UUID_>);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$BatchResult}.
     */
    export type $DownloadQueue$BatchResult_ = { failed?: $Set_<$UUID_>, downloaded?: $Map_<$UUID_, $Path_>,  } | [failed?: $Set_<$UUID_>, downloaded?: $Map_<$UUID_, $Path_>, ];
    export class $BuiltInMetadata {
        get<T>(serializer: $MetadataSectionSerializer<T>): T;
        static of<T>(serializer: $MetadataSectionSerializer<T>, value: T): $BuiltInMetadata;
        static of<T1, T2>(serializer1: $MetadataSectionSerializer<T1>, value1: T1, serializer2: $MetadataSectionSerializer<T2>, value2: T2): $BuiltInMetadata;
        static of(): $BuiltInMetadata;
    }
    export class $DownloadCacheCleaner {
        static vacuumCacheDir(path: $Path_, maxEntries: number): void;
        constructor();
    }
    export class $CompositePackResources implements $PackResources {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        constructor(primaryPackResources: $PackResources, packResourcesStack: $List_<$PackResources>);
        get hidden(): boolean;
    }
    export class $FeatureFlagsMetadataSection extends $Record {
        flags(): $FeatureFlagSet;
        static TYPE: $MetadataSectionType<$FeatureFlagsMetadataSection>;
        constructor(arg0: $FeatureFlagSet);
    }
    /**
     * Values that may be interpreted as {@link $FeatureFlagsMetadataSection}.
     */
    export type $FeatureFlagsMetadataSection_ = { flags?: $FeatureFlagSet,  } | [flags?: $FeatureFlagSet, ];
    export class $FilePackResources$SharedZipFileAccess implements $AutoCloseable, $SharedZipFileAccessAccessor, $ZipFileWrapperAccessor {
        close(): void;
        getFile(): $File;
        mfix$getOrCreateZipFile(): $ZipFile;
        mfix$getFile(): $File;
        constructor(file: $File_);
        get file(): $File;
    }
    export class $PackResources {
        static PACK_META: string;
        static METADATA_EXTENSION: string;
    }
    export interface $PackResources extends $AutoCloseable, $IPackResourcesExtension {
        getResource(packType: $PackType_, location: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        knownPackInfo(): ($KnownPack) | undefined;
        listResources(packType: $PackType_, namespace: string, path: string, resourceOutput: $PackResources$ResourceOutput_): void;
        getNamespaces(type: $PackType_): $Set<string>;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        getRootResource(...elements: string[]): $IoSupplier<$InputStream>;
        packId(): string;
    }
    export class $FilePackResources extends $AbstractPackResources implements $ResourcePackWithPath {
        getEssential$path(): $Path;
        static extractNamespace(directory: string, name: string): string;
        constructor(location: $PackLocationInfo_, zipFileAccess: $FilePackResources$SharedZipFileAccess, prefix: string);
        get essential$path(): $Path;
    }
    export class $DownloadQueue$FileInfoEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$FileInfoEntry}.
     */
    export type $DownloadQueue$FileInfoEntry_ = { size?: number, name?: string,  } | [size?: number, name?: string, ];
    export class $OverlayMetadataSection extends $Record {
        overlays(): $List<$OverlayMetadataSection$OverlayEntry>;
        overlaysForVersion(version: number): $List<string>;
        static NEOFORGE_TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        static TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        constructor(overlays: $List_<$OverlayMetadataSection$OverlayEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $OverlayMetadataSection}.
     */
    export type $OverlayMetadataSection_ = { overlays?: $List_<$OverlayMetadataSection$OverlayEntry_>,  } | [overlays?: $List_<$OverlayMetadataSection$OverlayEntry_>, ];
    export class $DownloadQueue$BatchConfig extends $Record {
        maxSize(): number;
        proxy(): $Proxy;
        listener(): $HttpUtil$DownloadProgressListener;
        headers(): $Map<string, string>;
        hashFunction(): $HashFunction;
        constructor(arg0: $HashFunction, arg1: number, arg2: $Map_<string, string>, arg3: $Proxy, arg4: $HttpUtil$DownloadProgressListener);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$BatchConfig}.
     */
    export type $DownloadQueue$BatchConfig_ = { listener?: $HttpUtil$DownloadProgressListener, proxy?: $Proxy, maxSize?: number, headers?: $Map_<string, string>, hashFunction?: $HashFunction,  } | [listener?: $HttpUtil$DownloadProgressListener, proxy?: $Proxy, maxSize?: number, headers?: $Map_<string, string>, hashFunction?: $HashFunction, ];
    export class $PackLocationInfo extends $Record {
        id(): string;
        source(): $PackSource;
        knownPackInfo(): ($KnownPack) | undefined;
        title(): $Component;
        createChatLink(enabled: boolean, text: $Component_): $Component;
        constructor(arg0: string, arg1: $Component_, arg2: $PackSource, arg3: ($KnownPack_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PackLocationInfo}.
     */
    export type $PackLocationInfo_ = { knownPackInfo?: ($KnownPack_) | undefined, id?: string, source?: $PackSource, title?: $Component_,  } | [knownPackInfo?: ($KnownPack_) | undefined, id?: string, source?: $PackSource, title?: $Component_, ];
    export class $VanillaPackResourcesBuilder {
        build(location: $PackLocationInfo_): $VanillaPackResources;
        setMetadata(metadata: $BuiltInMetadata): $VanillaPackResourcesBuilder;
        pushClasspathResources(packType: $PackType_, clazz: $Class<never>): $VanillaPackResourcesBuilder;
        applyDevelopmentConfig(): $VanillaPackResourcesBuilder;
        pushJarResources(): $VanillaPackResourcesBuilder;
        exposeNamespace(...namespaces: string[]): $VanillaPackResourcesBuilder;
        pushAssetPath(packType: $PackType_, path: $Path_): $VanillaPackResourcesBuilder;
        pushUniversalPath(path: $Path_): $VanillaPackResourcesBuilder;
        static developmentConfig: $Consumer<$VanillaPackResourcesBuilder>;
        constructor();
        set metadata(value: $BuiltInMetadata);
    }
    export class $PathPackResources extends $AbstractPackResources implements $PackResources, $PackResourcesExtension, $ResourcePackWithPath, $ICachingResourcePack {
        static getResource(location: $ResourceLocation_, path: $Path_): $IoSupplier<$InputStream>;
        invalidateCache(): void;
        getEssential$path(): $Path;
        static listPath(namespace: string, namespacePath: $Path_, decomposedPath: $List_<string>, resourceOutput: $PackResources$ResourceOutput_): void;
        veil$getRawResourceRoots(): $List<any>;
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        veil$getIcon(): $IoSupplier<any>;
        static validatePath(path: $Path_): boolean;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        veil$isStatic(): boolean;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        veil$blurIcon(): boolean;
        veil$listPacks(): $Stream<$PackResources>;
        constructor(location: $PackLocationInfo_, root: $Path_);
        get essential$path(): $Path;
    }
    export class $FilePackResources$FileResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        openPrimary(location: $PackLocationInfo_): $PackResources;
        constructor(content: $Path_);
        constructor(content: $File_);
    }
    export class $DownloadQueue$DownloadRequest extends $Record {
        hash(): $HashCode;
        url(): $URL;
        constructor(arg0: $URL, arg1: $HashCode | null);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$DownloadRequest}.
     */
    export type $DownloadQueue$DownloadRequest_ = { hash?: $HashCode, url?: $URL,  } | [hash?: $HashCode, url?: $URL, ];
    export class $PackResources$ResourceOutput {
    }
    export interface $PackResources$ResourceOutput extends $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>> {
    }
    /**
     * Values that may be interpreted as {@link $PackResources$ResourceOutput}.
     */
    export type $PackResources$ResourceOutput_ = (() => void);
    export class $PackType extends $Enum<$PackType> implements $StringRepresentable {
        static values(): $PackType[];
        static valueOf(arg0: string): $PackType;
        getSerializedName(): string;
        getDirectory(): string;
        getRemappedEnumConstantName(): string;
        static CLIENT_RESOURCES: $PackType;
        static SERVER_DATA: $PackType;
        get serializedName(): string;
        get directory(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackType}.
     */
    export type $PackType_ = "client_resources" | "server_data";
    export class $AbstractPackResources implements $PackResources {
        location(): $PackLocationInfo;
        getMetadataSection<T>(deserializer: $MetadataSectionSerializer<T>): T;
        static getMetadataFromStream<T>(deserializer: $MetadataSectionSerializer<T>, inputStream: $InputStream): T;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        get hidden(): boolean;
    }
    export class $PackSelectionConfig extends $Record {
        required(): boolean;
        fixedPosition(): boolean;
        defaultPosition(): $Pack$Position;
        constructor(arg0: boolean, arg1: $Pack$Position_, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PackSelectionConfig}.
     */
    export type $PackSelectionConfig_ = { defaultPosition?: $Pack$Position_, fixedPosition?: boolean, required?: boolean,  } | [defaultPosition?: $Pack$Position_, fixedPosition?: boolean, required?: boolean, ];
    export class $OverlayMetadataSection$OverlayEntry extends $Record {
        format(): $InclusiveRange<number>;
        isApplicable(version: number): boolean;
        overlay(): string;
        static CODEC: $Codec<$OverlayMetadataSection$OverlayEntry>;
        constructor(format: $InclusiveRange_<number>, overlay: string);
    }
    /**
     * Values that may be interpreted as {@link $OverlayMetadataSection$OverlayEntry}.
     */
    export type $OverlayMetadataSection$OverlayEntry_ = { format?: $InclusiveRange_<number>, overlay?: string,  } | [format?: $InclusiveRange_<number>, overlay?: string, ];
}
