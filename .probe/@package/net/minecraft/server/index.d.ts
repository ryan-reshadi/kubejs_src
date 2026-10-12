import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $MinecraftServerData as $MinecraftServerData$1, $IMinecraftServer } from "@package/xaero/map/server";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerData, $IMinecraftServer as $IMinecraftServer$1 } from "@package/xaero/common/server";
import { $MinecraftServerExt } from "@package/gg/essential/mixins/ext/server";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $MinecraftServerExtension } from "@package/foundry/veil/ext";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $ServerStatus, $ServerStatus$Favicon_, $ServerStatus_, $ServerStatus$Favicon } from "@package/net/minecraft/network/protocol/status";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $MinecraftServerAccessor as $MinecraftServerAccessor$1 } from "@package/gg/essential/mixins/transformers/server";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_ } from "@package/java/lang";
import { $AccessorMixinMinecraftServer } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $Level_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $CoroutineDispatcher, $CoroutineScope } from "@package/kotlinx/coroutines";
import { $Trackable } from "@package/dev/uncandango/alltheleaks/mixin";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ITimeTrackingServer, $IProfilingServerFunctionManager } from "@package/org/embeddedt/modernfix/duck";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $PlayerAdvancements {
        save(): void;
        reload(manager: $ServerAdvancementManager): void;
        flushDirty(serverPlayer: $ServerPlayer): void;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        setPlayer(serverPlayer: $ServerPlayer): void;
        stopListening(): void;
        player: $ServerPlayer;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_ | null);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        cookie(): D;
        finalDimensions(): $RegistryAccess$Frozen;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { finalDimensions?: $RegistryAccess$Frozen, cookie?: any,  } | [finalDimensions?: $RegistryAccess$Frozen, cookie?: any, ];
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(msg: string, source: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        close(): void;
        resourceManager(): $CloseableResourceManager;
        managers(): $ReloadableServerResources;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager,  } | [managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager, ];
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener {
        get(location: $ResourceLocation_): $AdvancementHolder;
        tree(): $AdvancementTree;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        constructor(registries: $HolderLookup$Provider);
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMaxPlayers(): number;
        getPlayerCount(): number;
        getServerVersion(): string;
        getMotd(): string;
        get maxPlayers(): number;
        get playerCount(): number;
        get serverVersion(): string;
        get motd(): string;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        endTickWork(): void;
        isSprinting(): boolean;
        checkShouldSprintThisTick(): boolean;
        stopStepping(): boolean;
        stopSprinting(): boolean;
        stepGameIfPaused(sprintTime: number): boolean;
        requestGameToSprint(sprintTime: number): boolean;
        updateJoiningPlayer(player: $ServerPlayer): void;
        static MIN_TICKRATE: number;
        constructor(server: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $ServerLinks extends $Record {
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        packRepository(): $PackRepository;
        initMode(): boolean;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        safeMode(): boolean;
        initialDataConfig(): $WorldDataConfiguration;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { packRepository?: $PackRepository, initMode?: boolean, safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_,  } | [packRepository?: $PackRepository, initMode?: boolean, safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, ];
    export class $ChainedJsonException$Entry {
        getFilename(): string;
        getJsonKeys(): string;
        get filename(): string;
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(registries: $LayeredRegistryAccess<$RegistryLayer_>, resourceManager: $ResourceManager, backgroundExecutor: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(context: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        /**
         * Registers blocks, items, stats, etc.
         */
        static validate(): void;
        static realStdoutPrintln(message: string): void;
        /**
         * Registers blocks, items, stats, etc.
         */
        static bootStrap(): void;
        static checkBootstrapCalled(callSite: $Supplier_<string>): void;
        static getMissingTranslations(): $Set<string>;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        setFilenameAndFlush(message: string): void;
        static forException(exception: $Exception): $ChainedJsonException;
        prependJsonKey(message: string): void;
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(manager: $CloseableResourceManager, resources: $ReloadableServerResources, registryAccess: $LayeredRegistryAccess<$RegistryLayer_>, cookie: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(file: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(initConfig: $WorldLoader$InitConfig_, worldDataSupplier: $WorldLoader$WorldDataSupplier_<D>, resultFactory: $WorldLoader$ResultFactory_<D, R>, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        datapackWorldgen(): $RegistryAccess$Frozen;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $RegistryAccess$Frozen;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager, datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen,  } | [dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager, datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        getProperties(): $DedicatedServerProperties;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        /**
         * Never used, but "getServerPort" is already taken.
         */
        getServerPort(): number;
        get properties(): $DedicatedServerProperties;
        get serverName(): string;
        get playerNames(): string[];
        get levelIdName(): string;
        get pluginNames(): string;
        get serverIp(): string;
        get serverPort(): number;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener {
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get availableTags(): $Iterable<$ResourceLocation>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $IMinecraftServer, $ITimeTrackingServer, $VeilPacketManager$PacketSink, $MinecraftServerExtension, $MinecraftServerKJS, $Trackable, $MinecraftServerAccessor, $IMinecraftServer$1, $AccessorMixinMinecraftServer, $MinecraftServerAccessor$1, $MinecraftServerExt {
        getProfileCache(): $GameProfileCache;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        getCommandStorage(): $CommandStorage;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        getFile(path: string): $Path;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        getScheduledEvents(): $ScheduledEvents;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        sendPacket(arg0: $Packet<any>): void;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        isLevelEnabled(level: $Level_): boolean;
        getWorldData(): $WorldData;
        fillSystemReport(report: $SystemReport): $SystemReport;
        tickRateManager(): $ServerTickRateManager;
        getAdvancements(): $ServerAdvancementManager;
        registryAccess(): $RegistryAccess$Frozen;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        getModdedStatus(): $ModCheck;
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        addTickable(tickable: $Runnable_): void;
        getServerDirectory(): $Path;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        static setFatalException(fatalException: $RuntimeException): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        getTickTimesNanos(): number[];
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        getOverworld(): $ServerLevel;
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        getPackRepository(): $PackRepository;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        getSessionService(): $MinecraftSessionService;
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        stopTimeProfiler(): $ProfileResults;
        getNextTickTime(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        setPlayerList(list: $PlayerList): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        setPort(idleTimeout: number): void;
        getFixerUpper(): $DataFixer;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        getRunningThread(): $Thread;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getResourceManager(): $ResourceManager;
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        getStatus(): $ServerStatus;
        getPlayerList(): $PlayerList;
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        getSpawnRadius(level: $ServerLevel | null): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        essential$updateServerStatus(): void;
        createCommandSourceStack(): $CommandSourceStack;
        getProxy(): $Proxy;
        getWorldScreenshotFile(): ($Path) | undefined;
        getEssential$dispatcher(): $CoroutineDispatcher;
        getProfiler(): $ProfilerFiller;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        doRunTask(task: $TickTask): void;
        getFunctions(): $ServerFunctionManager;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        atl$getBaseClass(): $Class<any>;
        getData(): $AttachedData<any>;
        getConnection(): $ServerConnectionListener;
        getServerResources(): $MinecraftServer$ReloadableResources;
        sendSystemMessage(component: $Component_): void;
        getCommands(): $Commands;
        getScoreboard(): $ServerScoreboard;
        getForcedGameType(): $GameType;
        getDefaultGameType(): $GameType;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        getStructureManager(): $StructureTemplateManager;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        getProfilePermissions(profile: $GameProfile): number;
        restoreInventories(): $Map<any, any>;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        overworld(): $ServerLevel;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        handler$zmo000$veil$stopServer(arg0: $CallbackInfo): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        getEssential$coroutineScope(): $CoroutineScope;
        getRecipeManager(): $RecipeManager;
        potionBrewing(): $PotionBrewing;
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        getCustomBossEvents(): $CustomBossEvents;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        getWorldPath(levelResource: $LevelResource): $Path;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        setLocalIp(serverId: string): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        setMotd(serverId: string): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        handler$hbg000$essential$onSetGameType(gameMode: $GameType_, ci: $CallbackInfo): void;
        handler$hbe000$essential$onSetDifficulty(ci: $CallbackInfo, difficulty: $Difficulty_): void;
        serverLinks(): $ServerLinks;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        getGameRules(): $GameRules;
        getPersistentData(): $CompoundTag;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        getAverageTickTimeNanos(): number;
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        getSingleplayerProfile(): $GameProfile;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        getXaeroWorldMapServerData(): $MinecraftServerData$1;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        getScaledTrackingDistance(trackingDistance: number): number;
        setPlayerIdleTimeout(idleTimeout: number): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        getCurrentSmoothedTickTime(): number;
        mfix$getLastTickStartTime(): number;
        getProfileRepository(): $GameProfileRepository;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        isSingleplayerOwner(profile: $GameProfile): boolean;
        setXaeroWorldMapServerData(arg0: $MinecraftServerData$1): void;
        dumpServerProperties(path: $Path_): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        getXaeroMinimapServerData(): $MinecraftServerData;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        setStatusMessage(component: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        getName(): $Component;
        tell(component: $Component_): void;
        self(): $MinecraftServer;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        sendData(channel: string, data: $CompoundTag_): void;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        wrap(): $WeakReference<$Trackable>;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTracking(): void;
        sendData(serverId: string): void;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getDisplayName(): $Component;
        setFavicon(arg0: $ServerStatus$Favicon_): void;
        getServerThread(): $Thread;
        invokeCreateMetadata(): $ServerStatus;
        invokeLoadFavicon(): ($ServerStatus$Favicon) | undefined;
        setMetadata(arg0: $ServerStatus_): void;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        Lootr$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        resources: $MinecraftServer$ReloadableResources;
        pvp: boolean;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get profileCache(): $GameProfileCache;
        get chatDecorator(): $ChatDecorator;
        get allLevels(): $Iterable<$ServerLevel>;
        get commandStorage(): $CommandStorage;
        get shutdown(): boolean;
        get tickCount(): number;
        get keyPair(): $KeyPair;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get stopped(): boolean;
        get maxChainedNeighborUpdates(): number;
        get scheduledEvents(): $ScheduledEvents;
        get dedicated(): boolean;
        get worldData(): $WorldData;
        get advancements(): $ServerAdvancementManager;
        get published(): boolean;
        get moddedStatus(): $ModCheck;
        get serverModName(): string;
        get maxPlayers(): number;
        get spawningMonsters(): boolean;
        get playerCount(): number;
        get epollEnabled(): boolean;
        get serverVersion(): string;
        get serverDirectory(): $Path;
        get playerNames(): string[];
        static set fatalException(value: $RuntimeException);
        get statusJson(): string;
        get tickTimesNanos(): number[];
        get currentlySaving(): boolean;
        get packRepository(): $PackRepository;
        get sessionService(): $MinecraftSessionService;
        get recordingMetrics(): boolean;
        get nextTickTime(): number;
        get fixerUpper(): $DataFixer;
        get singleplayer(): boolean;
        get runningThread(): $Thread;
        get profileKeySignatureValidator(): $SignatureValidator;
        get resourceManager(): $ResourceManager;
        get running(): boolean;
        get status(): $ServerStatus;
        get proxy(): $Proxy;
        get worldScreenshotFile(): ($Path) | undefined;
        get essential$dispatcher(): $CoroutineDispatcher;
        get profiler(): $ProfilerFiller;
        get hardcore(): boolean;
        get ready(): boolean;
        get paused(): boolean;
        get functions(): $ServerFunctionManager;
        get data(): $AttachedData<any>;
        get connection(): $ServerConnectionListener;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get commands(): $Commands;
        get scoreboard(): $ServerScoreboard;
        get forcedGameType(): $GameType;
        get spawningAnimals(): boolean;
        get structureManager(): $StructureTemplateManager;
        get absoluteMaxWorldSize(): number;
        get functionCompilationLevel(): number;
        get rateLimitPacketsPerSecond(): number;
        get operatorUserPermissionLevel(): number;
        get essential$coroutineScope(): $CoroutineScope;
        get recipeManager(): $RecipeManager;
        get commandBlockEnabled(): boolean;
        set difficultyLocked(value: boolean);
        get customBossEvents(): $CustomBossEvents;
        get gameRules(): $GameRules;
        get persistentData(): $CompoundTag;
        get tickTimeLoggingEnabled(): boolean;
        get averageTickTimeNanos(): number;
        get spawnProtectionRadius(): number;
        get timeProfilerRunning(): boolean;
        get currentSmoothedTickTime(): number;
        get profileRepository(): $GameProfileRepository;
        get resourcePackRequired(): boolean;
        get compressionThreshold(): number;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get entities(): $EntityArrayList;
        get displayName(): $Component;
        set favicon(value: $ServerStatus$Favicon_);
        get serverThread(): $Thread;
        set metadata(value: $ServerStatus_);
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        close(): void;
        resourceManager(): $CloseableResourceManager;
        dataPackResources(): $ReloadableServerResources;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, resourceManager?: $CloseableResourceManager,  } | [dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, resourceManager?: $CloseableResourceManager, ];
    export class $ServerScoreboard extends $Scoreboard {
        addDirtyListener(runnable: $Runnable_): void;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        stopTrackingObjective(objective: $Objective): void;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        startTrackingObjective(objective: $Objective): void;
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        getRegistryLookup(): $HolderLookup$Provider;
        listeners(): $List<$PreparableReloadListener>;
        getAdvancements(): $ServerAdvancementManager;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        getConditionContext(): $ICondition$IContext;
        getCommands(): $Commands;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        getRecipeManager(): $RecipeManager;
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
        get registryLookup(): $HolderLookup$Provider;
        get advancements(): $ServerAdvancementManager;
        get functionLibrary(): $ServerFunctionLibrary;
        get conditionContext(): $ICondition$IContext;
        get commands(): $Commands;
        get recipeManager(): $RecipeManager;
    }
    export class $WorldLoader$InitConfig extends $Record {
        packConfig(): $WorldLoader$PackConfig;
        commandSelection(): $Commands$CommandSelection;
        functionCompilationLevel(): number;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { functionCompilationLevel?: number, packConfig?: $WorldLoader$PackConfig_, commandSelection?: $Commands$CommandSelection_,  } | [functionCompilationLevel?: number, packConfig?: $WorldLoader$PackConfig_, commandSelection?: $Commands$CommandSelection_, ];
    export class $TickTask implements $Runnable {
        run(): void;
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        constructor(tick: number, runnable: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        hash(): string;
        url(): string;
        id(): $UUID;
        isRequired(): boolean;
        prompt(): $Component;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { id?: $UUID_, prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string,  } | [id?: $UUID_, prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string, ];
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $Services extends $Record {
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        canValidateProfileKeys(): boolean;
        profileCache(): $GameProfileCache;
        profileRepository(): $GameProfileRepository;
        sessionService(): $MinecraftSessionService;
        profileKeySignatureValidator(): $SignatureValidator;
        servicesKeySet(): $ServicesKeySet;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_, sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_,  } | [profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_, sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_, ];
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        tick(): void;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        getTagNames(): $Iterable<$ResourceLocation>;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        mfix$getProfilingResults(): string;
        getGameLoopSender(): $CommandSourceStack;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get tagNames(): $Iterable<$ResourceLocation>;
        get functionNames(): $Iterable<$ResourceLocation>;
        get gameLoopSender(): $CommandSourceStack;
    }
}
