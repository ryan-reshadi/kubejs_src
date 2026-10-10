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
        resourcePath(resource: $LevelResource): $Path;
        path(): $Path;
        dataFile(): $Path;
        directoryName(): string;
        iconFile(): $Path;
        oldDataFile(): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
        lockFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
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
        /**
         * Get current world name
         */
        getLevelName(): string;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        getVersion(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        worldGenSettingsLifecycle(): $Lifecycle;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        setModdedInfo(name: string, isModded: boolean): void;
        getStorageVersionName(storageVersionId: number): string;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        setDifficultyLocked(locked: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        get levelName(): string;
        get version(): number;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get flatWorld(): boolean;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
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
        isCompatible(dataVersion: $DataVersion): boolean;
        getVersion(): number;
        isSideSeries(): boolean;
        getSeries(): string;
        static MAIN_SERIES: string;
        constructor(version: number, series: string);
        constructor(version: number);
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
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getDayTimeFraction(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setGameType(type: $GameType_): void;
        setClearWeatherTime(time: number): void;
        setRainTime(time: number): void;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get levelName(): string;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get difficultyLocked(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get allowCommands(): boolean;
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
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        get hardcore(): boolean;
        get gameTime(): number;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get dayTime(): number;
        get difficultyLocked(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
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
        isSevere(): boolean;
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        shouldBackup(): boolean;
        getTranslationKey(): string;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get severe(): boolean;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        safeClose(): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        getLevelId(): string;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        deleteLevel(): void;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        getFileModificationTime(useFallback: boolean): $Instant;
        checkForLowDiskSpace(): boolean;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getLevelPath(folderName: $LevelResource): $Path;
        hasWorldData(): boolean;
        getIconFile(): ($Path) | undefined;
        createPlayerStorage(): $PlayerDataStorage;
        handler$zdo000$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        estimateDiskSpace(): number;
        getDataTag(): $Dynamic<never>;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        handler$fhp001$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        renameLevel(saveName: string): void;
        renameAndDropPlayer(saveName: string): void;
        makeWorldBackup(): number;
        restoreLevelDataFromOld(): boolean;
        get levelId(): string;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
        get iconFile(): ($Path) | undefined;
        get dataTag(): $Dynamic<never>;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
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
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        getWorldBorder(): $WorldBorder$Settings;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setGameType(type: $GameType_): void;
        setClearWeatherTime(time: number): void;
        setRainTime(time: number): void;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        get levelName(): string;
        set gameTime(value: number);
        set thundering(value: boolean);
        set dayTime(value: number);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get allowCommands(): boolean;
    }
    export class $LevelVersion {
        minecraftVersion(): $DataVersion;
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        levelDataVersion(): number;
        lastPlayed(): number;
        minecraftVersionName(): string;
    }
    export class $LevelStorageSource {
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        getName(): string;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        isNewLevelIdAcceptable(saveName: string): boolean;
        levelExists(saveName: string): boolean;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        getLevelPath(saveName: string): $Path;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get baseDir(): $Path;
        get backupPath(): $Path;
        get worldDirValidator(): $DirectoryValidator;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension, $ServerWorldInfoAccessor {
        /**
         * Get current world name
         */
        getLevelName(): string;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getDayTimeFraction(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setGameType(type: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setClearWeatherTime(time: number): void;
        setRainTime(time: number): void;
        setThunderTime(time: number): void;
        setRaining(locked: boolean): void;
        setThundering(locked: boolean): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        worldGenSettingsLifecycle(): $Lifecycle;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        setModdedInfo(name: string, isModded: boolean): void;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        setDifficultyLocked(locked: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getPreset(): $ResourceLocation;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        setPreset(arg0: $ResourceLocation_): void;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        handler$gpo000$essential$onSetDifficultyLocked(ci: $CallbackInfo, locked: boolean): void;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        getStorageVersionName(storageVersionId: number): string;
        getWorldSettings(): $LevelSettings;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get levelName(): string;
        get version(): number;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        set endDragonFight(value: $EndDragonFight$Data_);
        get worldSettings(): $LevelSettings;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        isCompatible(): boolean;
        getSettings(): $LevelSettings;
        getInfo(): $Component;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        isLocked(): boolean;
        isExperimental(): boolean;
        canDelete(): boolean;
        compareTo(other: $LevelSummary): number;
        isDisabled(): boolean;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        getIcon(): $Path;
        requiresManualConversion(): boolean;
        levelVersion(): $LevelVersion;
        getLastPlayed(): number;
        hasCommands(): boolean;
        getWorldVersionName(): $MutableComponent;
        shouldBackup(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        isDowngrade(): boolean;
        primaryActionMessage(): $Component;
        primaryActionActive(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        canRecreate(): boolean;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get compatible(): boolean;
        get settings(): $LevelSettings;
        get info(): $Component;
        get levelName(): string;
        get locked(): boolean;
        get experimental(): boolean;
        get disabled(): boolean;
        get hardcore(): boolean;
        get levelId(): string;
        get gameMode(): $GameType;
        get icon(): $Path;
        get lastPlayed(): number;
        get worldVersionName(): $MutableComponent;
        get downgrade(): boolean;
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
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
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
