import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $RegistryLayer, $WorldStem, $ReloadableServerResources, $RegistryLayer_ } from "@package/net/minecraft/server";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Collection_, $List_, $OptionalLong, $Map } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Function_, $Consumer_, $BiFunction, $BooleanSupplier_, $UnaryOperator } from "@package/java/util/function";
import { $Holder_, $RegistryAccess$Frozen, $Holder, $RegistryAccess, $Registry, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $GridLayoutTab } from "@package/net/minecraft/client/gui/components/tabs";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Enum, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $WorldDimensions, $WorldDimensions_, $WorldOptions, $WorldGenSettings_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $WorldDataConfiguration_, $GameRules$Value } from "@package/net/minecraft/world/level";
import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $ContainerObjectSelectionList, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess, $LevelSummary, $WorldData } from "@package/net/minecraft/world/level/storage";
import { $PackRepository, $Pack } from "@package/net/minecraft/server/packs/repository";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/net/minecraft/client/gui/screens/worldselection" {
    export class $SwitchGrid {
    }
    export class $EditGameRulesScreen$EntryFactory<T extends $GameRules$Value<T>> {
    }
    export interface $EditGameRulesScreen$EntryFactory<T extends $GameRules$Value<T>> {
    }
    /**
     * Values that may be interpreted as {@link $EditGameRulesScreen$EntryFactory}.
     */
    export type $EditGameRulesScreen$EntryFactory_<T> = (() => void);
    export class $EditGameRulesScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(gameRules: $GameRules, exitCallback: $Consumer_<($GameRules) | undefined>);
    }
    export class $PresetEditor {
        /**
         * @deprecated
         */
        static EDITORS: $Map<($ResourceKey<$WorldPreset>) | undefined, $PresetEditor>;
    }
    export interface $PresetEditor {
        createEditScreen(lastScreen: $CreateWorldScreen, context: $WorldCreationContext_): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $PresetEditor}.
     */
    export type $PresetEditor_ = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen);
    export class $WorldSelectionList extends $ObjectSelectionList<$WorldSelectionList$Entry> {
        setSelected(selected: $WorldSelectionList$Entry | null): void;
        getScreen(): $SelectWorldScreen;
        updateFilter(filter: string): void;
        getSelectedOpt(): ($WorldSelectionList$WorldListEntry) | undefined;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        static DATE_FORMAT: $DateTimeFormatter;
        active: boolean;
        hovered: $WorldSelectionList$Entry;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        height: number;
        constructor(screen: $SelectWorldScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number, filter: string, worlds: $WorldSelectionList | null);
        set selected(value: $WorldSelectionList$Entry | null);
        get screen(): $SelectWorldScreen;
        get selectedOpt(): ($WorldSelectionList$WorldListEntry) | undefined;
    }
    export class $WorldCreationContext$OptionsModifier {
    }
    export interface $WorldCreationContext$OptionsModifier extends $UnaryOperator<$WorldOptions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$OptionsModifier}.
     */
    export type $WorldCreationContext$OptionsModifier_ = (() => void);
    export class $SwitchGrid$SwitchBuilder {
        withIsActiveCondition(isActiveCondition: $BooleanSupplier_): $SwitchGrid$SwitchBuilder;
        withInfo(info: $Component_): $SwitchGrid$SwitchBuilder;
    }
    export class $EditGameRulesScreen$BooleanRuleEntry extends $EditGameRulesScreen$GameRuleEntry {
    }
    export class $CreateWorldScreen$GameTab extends $GridLayoutTab {
    }
    export class $WorldSelectionList$LoadingHeader extends $WorldSelectionList$Entry {
        constructor(minecraft: $Minecraft);
    }
    export class $ExperimentsScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $Screen, packRepository: $PackRepository, output: $Consumer_<$PackRepository>);
    }
    export class $EditWorldScreen extends $Screen {
        static create(minecraft: $Minecraft, levelAccess: $LevelStorageSource$LevelStorageAccess, callback: $BooleanConsumer_): $EditWorldScreen;
        static makeBackupAndShowToast(levelAccess: $LevelStorageSource$LevelStorageAccess): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $CreateWorldScreen$MoreTab extends $GridLayoutTab {
    }
    export class $WorldOpenFlows {
        openWorld(worldName: string, onFail: $Runnable_): void;
        createFreshLevel(levelName: string, levelSettings: $LevelSettings, worldOptions: $WorldOptions, dimensionGetter: $Function_<$RegistryAccess, $WorldDimensions>, lastScreen: $Screen): void;
        recreateWorldData(levelStorage: $LevelStorageSource$LevelStorageAccess): $Pair<$LevelSettings, $WorldCreationContext>;
        loadWorldStem(dynamic: $Dynamic<never>, safeMode: boolean, packRepository: $PackRepository): $WorldStem;
        createLevelFromExistingSettings(levelStorage: $LevelStorageSource$LevelStorageAccess, resources: $ReloadableServerResources, registries: $LayeredRegistryAccess<$RegistryLayer_>, worldData: $WorldData): void;
        static confirmWorldCreation(minecraft: $Minecraft, screen: $CreateWorldScreen, lifecycle: $Lifecycle, loadWorld: $Runnable_, skipWarnings: boolean): void;
        constructor(minecraft: $Minecraft, levelSource: $LevelStorageSource);
    }
    export class $OptimizeWorldScreen extends $Screen {
        static create(minecraft: $Minecraft, callback: $BooleanConsumer_, dataFixer: $DataFixer, levelStorage: $LevelStorageSource$LevelStorageAccess, eraseCache: boolean): $OptimizeWorldScreen;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $WorldSelectionList$WorldListEntry extends $WorldSelectionList$Entry implements $AutoCloseable {
        getLevelName(): string;
        editWorld(): void;
        joinWorld(): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        canJoin(): boolean;
        deleteWorld(): void;
        recreateWorld(): void;
        doDeleteWorld(): void;
        constructor(worldSelectionList: $WorldSelectionList, summary: $WorldSelectionList, arg2: $LevelSummary);
        get levelName(): string;
    }
    export class $EditGameRulesScreen$CategoryRuleEntry extends $EditGameRulesScreen$RuleEntry {
        constructor(label: $EditGameRulesScreen, arg1: $Component_);
    }
    export class $EditGameRulesScreen$GameRuleEntry extends $EditGameRulesScreen$RuleEntry {
    }
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $SwitchGrid$InfoUnderneathSettings extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SwitchGrid$InfoUnderneathSettings}.
     */
    export type $SwitchGrid$InfoUnderneathSettings_ = { maxInfoRows?: number, alwaysMaxHeight?: boolean,  } | [maxInfoRows?: number, alwaysMaxHeight?: boolean, ];
    export class $WorldCreationContext extends $Record {
        validate(): void;
        options(): $WorldOptions;
        dataPackResources(): $ReloadableServerResources;
        withSettings(options: $WorldOptions, selectedDimensions: $WorldDimensions_): $WorldCreationContext;
        withOptions(optionsModifier: $WorldCreationContext$OptionsModifier_): $WorldCreationContext;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $Registry<$LevelStem>;
        selectedDimensions(): $WorldDimensions;
        withDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): $WorldCreationContext;
        worldgenRegistries(): $LayeredRegistryAccess<$RegistryLayer>;
        withDataConfiguration(arg0: $WorldDataConfiguration_): $WorldCreationContext;
        worldgenLoadContext(): $RegistryAccess$Frozen;
        constructor(options: $WorldOptions, datapackDimensions: $Registry<$LevelStem_>, selectedDimensions: $WorldDimensions_, worldgenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(options: $WorldOptions, selectedDimensions: $WorldDimensions_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(worldGenSettings: $WorldGenSettings_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext}.
     */
    export type $WorldCreationContext_ = { dataConfiguration?: $WorldDataConfiguration_, options?: $WorldOptions, selectedDimensions?: $WorldDimensions_, worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>, datapackDimensions?: $Registry<$LevelStem_>, dataPackResources?: $ReloadableServerResources,  } | [dataConfiguration?: $WorldDataConfiguration_, options?: $WorldOptions, selectedDimensions?: $WorldDimensions_, worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>, datapackDimensions?: $Registry<$LevelStem_>, dataPackResources?: $ReloadableServerResources, ];
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry extends $ObjectSelectionList$Entry<$ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
    }
    export class $CreateWorldScreen$DataPackReloadCookie extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CreateWorldScreen$DataPackReloadCookie}.
     */
    export type $CreateWorldScreen$DataPackReloadCookie_ = { worldGenSettings?: $WorldGenSettings_, dataConfiguration?: $WorldDataConfiguration_,  } | [worldGenSettings?: $WorldGenSettings_, dataConfiguration?: $WorldDataConfiguration_, ];
    export class $WorldCreationContext$DimensionsUpdater {
    }
    export interface $WorldCreationContext$DimensionsUpdater extends $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, $WorldDimensions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$DimensionsUpdater}.
     */
    export type $WorldCreationContext$DimensionsUpdater_ = (() => void);
    export class $SwitchGrid$Builder {
        build(consumer: $Consumer_<$LayoutElement>): $SwitchGrid;
        addSwitch(label: $Component_, stateSupplier: $BooleanSupplier_, onClicked: $Consumer_<boolean>): $SwitchGrid$SwitchBuilder;
        withInfoUnderneath(maxInfoRows: number, alwaysMaxHeight: boolean): $SwitchGrid$Builder;
        withRowSpacing(paddingLeft: number): $SwitchGrid$Builder;
        withPaddingLeft(paddingLeft: number): $SwitchGrid$Builder;
        constructor(width: number);
    }
    export class $WorldCreationUiState {
        getGameMode(): $WorldCreationUiState$SelectedGameMode;
        getName(): string;
        setName(name: string): void;
        isDebug(): boolean;
        setSeed(name: string): void;
        getSeed(): string;
        addListener(listener: $Consumer_<$WorldCreationUiState>): void;
        setSettings(settings: $WorldCreationContext_): void;
        getSettings(): $WorldCreationContext;
        setGameMode(gameMode: $WorldCreationUiState$SelectedGameMode_): void;
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        onChanged(): void;
        getWorldType(): $WorldCreationUiState$WorldTypeEntry;
        setDifficulty(difficulty: $Difficulty_): void;
        isAllowCommands(): boolean;
        getGameRules(): $GameRules;
        setGenerateStructures(allowCommands: boolean): void;
        getNormalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        isGenerateStructures(): boolean;
        updateDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): void;
        setAllowCommands(allowCommands: boolean): void;
        getTargetFolder(): string;
        setGameRules(gameRules: $GameRules): void;
        setWorldType(worldType: $WorldCreationUiState$WorldTypeEntry_): void;
        getPresetEditor(): $PresetEditor;
        getAltPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        isBonusChest(): boolean;
        setBonusChest(allowCommands: boolean): void;
        constructor(savesFolder: $Path_, settings: $WorldCreationContext_, preset: ($ResourceKey_<$WorldPreset>) | undefined, seed: $OptionalLong);
        get debug(): boolean;
        get hardcore(): boolean;
        get normalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get targetFolder(): string;
        get presetEditor(): $PresetEditor;
        get altPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
    }
    export class $EditGameRulesScreen$RuleEntry extends $ContainerObjectSelectionList$Entry<$EditGameRulesScreen$RuleEntry> {
        constructor(tooltip: $List_<$FormattedCharSequence_> | null);
    }
    export class $WorldSelectionList$Entry extends $ObjectSelectionList$Entry<$WorldSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        constructor();
    }
    export class $SelectWorldScreen extends $Screen {
        updateButtonStatus(levelSummary: $LevelSummary | null): void;
        static MENU_BACKGROUND: $ResourceLocation;
        static TEST_OPTIONS: $WorldOptions;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen);
    }
    export class $EditGameRulesScreen$RuleList extends $ContainerObjectSelectionList<$EditGameRulesScreen$RuleEntry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $EditGameRulesScreen$RuleEntry;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        height: number;
        constructor(gameRules: $EditGameRulesScreen, arg1: $GameRules);
    }
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackList extends $ObjectSelectionList<$ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        static MENU_LIST_BACKGROUND: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        active: boolean;
        hovered: $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry;
        static INWORLD_MENU_LIST_BACKGROUND: $ResourceLocation;
        height: number;
    }
    export class $WorldCreationUiState$WorldTypeEntry extends $Record {
        preset(): $Holder<$WorldPreset>;
        describePreset(): $Component;
        isAmplified(): boolean;
        constructor(preset: $Holder_<$WorldPreset> | null);
        get amplified(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$WorldTypeEntry}.
     */
    export type $WorldCreationUiState$WorldTypeEntry_ = { preset?: $Holder_<$WorldPreset>,  } | [preset?: $Holder_<$WorldPreset>, ];
    export class $SwitchGrid$LabeledSwitch extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SwitchGrid$LabeledSwitch}.
     */
    export type $SwitchGrid$LabeledSwitch_ = { stateSupplier?: $BooleanSupplier_, button?: $CycleButton<boolean>, isActiveCondition?: $BooleanSupplier_,  } | [stateSupplier?: $BooleanSupplier_, button?: $CycleButton<boolean>, isActiveCondition?: $BooleanSupplier_, ];
    export class $WorldOpenFlows$1Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldOpenFlows$1Data}.
     */
    export type $WorldOpenFlows$1Data_ = { existingDimensions?: $Registry<$LevelStem_>, options?: $WorldOptions, levelSettings?: $LevelSettings,  } | [existingDimensions?: $Registry<$LevelStem_>, options?: $WorldOptions, levelSettings?: $LevelSettings, ];
    export class $ConfirmExperimentalFeaturesScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(enabledPacks: $Collection_<$Pack>, callback: $BooleanConsumer_);
    }
    export class $CreateWorldScreen$WorldTab extends $GridLayoutTab {
    }
    export class $EditGameRulesScreen$IntegerRuleEntry extends $EditGameRulesScreen$GameRuleEntry {
    }
    export class $WorldCreationUiState$SelectedGameMode extends $Enum<$WorldCreationUiState$SelectedGameMode> {
        static values(): $WorldCreationUiState$SelectedGameMode[];
        static valueOf(arg0: string): $WorldCreationUiState$SelectedGameMode;
        getInfo(): $Component;
        static SURVIVAL: $WorldCreationUiState$SelectedGameMode;
        gameType: $GameType;
        displayName: $Component;
        static CREATIVE: $WorldCreationUiState$SelectedGameMode;
        static DEBUG: $WorldCreationUiState$SelectedGameMode;
        static HARDCORE: $WorldCreationUiState$SelectedGameMode;
        get info(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$SelectedGameMode}.
     */
    export type $WorldCreationUiState$SelectedGameMode_ = "survival" | "hardcore" | "creative" | "debug";
    export class $CreateWorldScreen extends $Screen {
        static openFresh(minecraft: $Minecraft, lastScreen: $Screen | null): void;
        getUiState(): $WorldCreationUiState;
        repositionElements(): void;
        static createTempDataPackDirFromExistingWorld(datapackDir: $Path_, minecraft: $Minecraft): $Path;
        popScreen(): void;
        static createFromExisting(minecraft: $Minecraft, lastScreen: $Screen | null, levelSettings: $LevelSettings, settings: $WorldCreationContext_, tempDataPackDir: $Path_ | null): $CreateWorldScreen;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static TAB_HEADER_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        get uiState(): $WorldCreationUiState;
    }
}
