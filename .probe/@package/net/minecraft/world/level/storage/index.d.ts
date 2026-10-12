import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $ServerWorldInfoAccessor } from "@package/gg/essential/mixins/transformers/server/integrated";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Map, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $AccessorMixinDimensionDataStorage } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File, $File_ } from "@package/java/io";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        lockFile(): $Path;
        resourcePath(resource: $LevelResource): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData,  } | [dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        enabledFeatures(): $FeatureFlagSet;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setGameType(type: $GameType_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        getDataConfiguration(): $WorldDataConfiguration;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getRemovedFeatureFlags(): $Set<string>;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getStorageVersionName(storageVersionId: number): string;
        setDifficultyLocked(locked: boolean): void;
        getKnownServerBrands(): $Set<string>;
        worldGenSettingsLifecycle(): $Lifecycle;
        getCustomBossEvents(): $CompoundTag;
        setDifficulty(difficulty: $Difficulty_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        overworldData(): $ServerLevelData;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setModdedInfo(name: string, isModded: boolean): void;
        getLevelSettings(): $LevelSettings;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get flatWorld(): boolean;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get allowCommands(): boolean;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
        get gameRules(): $GameRules;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isCompatible(dataVersion: $DataVersion): boolean;
        isSideSeries(): boolean;
        getSeries(): string;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Get current world time
         */
        getDayTime(): number;
        getDayTimeFraction(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(time: number): void;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get levelName(): string;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get allowCommands(): boolean;
        get gameRules(): $GameRules;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        get dayTime(): number;
        get gameTime(): number;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get difficultyLocked(): boolean;
        get thundering(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get gameRules(): $GameRules;
    }
    export class $DimensionDataStorage implements $AccessorMixinDimensionDataStorage {
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        getCache(): $Map<string, $SavedData>;
        dataFolder: $File;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
        get cache(): $Map<string, $SavedData>;
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        getTranslationKey(): string;
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        isSevere(): boolean;
        shouldBackup(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get translationKey(): string;
        get severe(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        getIconFile(): ($Path) | undefined;
        getLevelId(): string;
        getLevelPath(folderName: $LevelResource): $Path;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        getFileModificationTime(useFallback: boolean): $Instant;
        hasWorldData(): boolean;
        deleteLevel(): void;
        createPlayerStorage(): $PlayerDataStorage;
        checkForLowDiskSpace(): boolean;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        safeClose(): void;
        getWorldDir(): $Path;
        makeWorldBackup(): number;
        getDataTagFallback(): $Dynamic<never>;
        estimateDiskSpace(): number;
        renameLevel(saveName: string): void;
        handler$zdo000$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$fin001$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        renameAndDropPlayer(saveName: string): void;
        restoreLevelDataFromOld(): boolean;
        getDataTag(): $Dynamic<never>;
        get iconFile(): ($Path) | undefined;
        get levelId(): string;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
        get worldDir(): $Path;
        get dataTagFallback(): $Dynamic<never>;
        get dataTag(): $Dynamic<never>;
    }
    export class $PlayerDataStorage {
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        getPlayerDir(): $File;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        getDayTimeFraction(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(time: number): void;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        get levelName(): string;
        set dayTime(value: number);
        set gameTime(value: number);
        set thundering(value: boolean);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get allowCommands(): boolean;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        minecraftVersion(): $DataVersion;
        lastPlayed(): number;
        minecraftVersionName(): string;
        levelDataVersion(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        getLevelPath(saveName: string): $Path;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        isNewLevelIdAcceptable(saveName: string): boolean;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        getWorldDirValidator(): $DirectoryValidator;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        levelExists(saveName: string): boolean;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get baseDir(): $Path;
        get worldDirValidator(): $DirectoryValidator;
        get backupPath(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension, $ServerWorldInfoAccessor {
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setRaining(locked: boolean): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Get current world time
         */
        getDayTime(): number;
        getDayTimeFraction(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        setInitialized(locked: boolean): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        setPreset(arg0: $ResourceLocation_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setRainTime(time: number): void;
        worldGenOptions(): $WorldOptions;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setThundering(locked: boolean): void;
        endDragonFightData(): $EndDragonFight$Data;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(time: number): void;
        setGameType(type: $GameType_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getRemovedFeatureFlags(): $Set<string>;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        setDifficultyLocked(locked: boolean): void;
        getKnownServerBrands(): $Set<string>;
        worldGenSettingsLifecycle(): $Lifecycle;
        getCustomBossEvents(): $CompoundTag;
        setDifficulty(difficulty: $Difficulty_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        overworldData(): $ServerLevelData;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setModdedInfo(name: string, isModded: boolean): void;
        getLevelSettings(): $LevelSettings;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        getPreset(): $ResourceLocation;
        handler$hbf000$essential$onSetDifficultyLocked(ci: $CallbackInfo, locked: boolean): void;
        enabledFeatures(): $FeatureFlagSet;
        getStorageVersionName(storageVersionId: number): string;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        getWorldSettings(): $LevelSettings;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get allowCommands(): boolean;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
        get gameRules(): $GameRules;
        set endDragonFight(value: $EndDragonFight$Data_);
        get worldSettings(): $LevelSettings;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        isExperimental(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        getInfo(): $Component;
        isCompatible(): boolean;
        canDelete(): boolean;
        getIcon(): $Path;
        getSettings(): $LevelSettings;
        isDisabled(): boolean;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        canEdit(): boolean;
        canUpload(): boolean;
        primaryActionActive(): boolean;
        requiresManualConversion(): boolean;
        getWorldVersionName(): $MutableComponent;
        primaryActionMessage(): $Component;
        levelVersion(): $LevelVersion;
        isDowngrade(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        canRecreate(): boolean;
        shouldBackup(): boolean;
        getLastPlayed(): number;
        hasCommands(): boolean;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get experimental(): boolean;
        get gameMode(): $GameType;
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get compatible(): boolean;
        get icon(): $Path;
        get settings(): $LevelSettings;
        get disabled(): boolean;
        get hardcore(): boolean;
        get levelId(): string;
        get worldVersionName(): $MutableComponent;
        get downgrade(): boolean;
        get lastPlayed(): number;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource {
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(id: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
