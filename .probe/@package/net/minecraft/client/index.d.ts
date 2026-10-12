import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CameraZoomExtension } from "@package/dev/ryanhcode/sable/mixinterface/camera/camera_zoom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftClientAccessor } from "@package/traben/entity_model_features/mixin/mixins/accessor";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $IWorldMapMinecraftClient } from "@package/xaero/map/core";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $List_, $Collection, $Locale, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $KeyMappingAccessor as $KeyMappingAccessor$1, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/net/blay09/mods/balm/mixin";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $AccessorMinecraft } from "@package/net/darkhax/bookshelf/common/mixin/access/client";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Throwable, $Runnable, $Enum, $Comparable, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $File_, $File } from "@package/java/io";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $MouseHelperAccessor } from "@package/gg/essential/mixins/transformers/client";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType_, $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $Narrator } from "@package/com/mojang/text2speech";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $CameraWaterOcclusionExtension } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $KeyMappingAccessor } from "@package/net/blay09/mods/kuma/mixin";
import { $KeyMappingsAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $CameraInject } from "@package/net/unusual/block_factorys_bosses/client";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $MinecraftExt } from "@package/gg/essential/mixins/impl/client";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MinecraftExt as $MinecraftExt$1 } from "@package/gg/essential/mixins/ext/client";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $ChatVisiblity } from "@package/net/minecraft/world/entity/player";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $MinecraftAccessor as $MinecraftAccessor$1 } from "@package/gg/essential/mixins/transformers/feature/skin_overwrites";
import { $KeyMappingInvoker } from "@package/dev/simulated_team/simulated/mixin/hold_interaction";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $DynamicRenderTickCounterAccessor } from "@package/gg/essential/mixins/transformers/client/renderer";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CameraAccessor as $CameraAccessor$1 } from "@package/com/squishy/cbcaeronauticsmissiles/client/mixin";
import { $CameraAccessor } from "@package/dev/kosmx/playerAnim/mixin/firstPerson";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $ProfileResult_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $GameOptionsAccessor, $KeyBindingAccessor } from "@package/gg/essential/mixins/transformers/client/options";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $MouseHandlerAccessor$1, $MouseHandlerAccessor, $MouseHelperAccessor {
        setup(windowPointer: number): void;
        getYVelocity(): number;
        getXVelocity(): number;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isLeftPressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMiddlePressed(): boolean;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        handleAccumulatedMovement(): void;
        ypos(): number;
        xpos(): number;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        cursorEntered(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        setIgnoreFirstMove(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        releaseMouse(): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMouseGrabbed(): boolean;
        handler$eaj000$fdlib$turnPlayer(arg0: number, arg1: $CallbackInfo): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        grabMouse(): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isRightPressed(): boolean;
        create$setYPos(movementTime: number): void;
        create$setXPos(movementTime: number): void;
        setMouseX(movementTime: number): void;
        setMouseY(movementTime: number): void;
        getMouseY(): number;
        getMouseX(): number;
        accumulatedDX: number;
        accumulatedDY: number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
        get YVelocity(): number;
        get XVelocity(): number;
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get mouseGrabbed(): boolean;
        get rightPressed(): boolean;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getSessionId(): string;
        getProfileId(): $UUID;
        getAccessToken(): string;
        getClientId(): (string) | undefined;
        getXuid(): (string) | undefined;
        constructor(name: string, uuid: $UUID_, accessToken: string, xuid: (string) | undefined, clientId: (string) | undefined, type: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get sessionId(): string;
        get profileId(): $UUID;
        get accessToken(): string;
        get clientId(): (string) | undefined;
        get xuid(): (string) | undefined;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        setupCollections(recipes: $Iterable_<$RecipeHolder<never>>, registryAccess: $RegistryAccess): void;
        getCollections(): $List<$RecipeCollection>;
        getCollection(categories: $RecipeBookCategories_): $List<$RecipeCollection>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        height: number;
    }
    export class $HotbarManager {
        get(index: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(gameDirectory: $Path_, fixerUpper: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isKeyboard(): boolean;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $Supplier<$List<T>>;
        codec(): $Codec<T>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { validateValue?: $Function_<any, (T) | undefined>, values?: $Supplier_<$List<any>>, codec?: $Codec<any>,  } | [validateValue?: $Function_<any, (T) | undefined>, values?: $Supplier_<$List<any>>, codec?: $Codec<any>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(delay: number, arg1: number, period: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { delay?: number, message?: string, title?: string, period?: number,  } | [delay?: number, message?: string, title?: string, period?: number, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        addRegion(buffer: $ByteBuffer, width: number, height: number, rowWidth: number, rowHeight: number): void;
        saveRow(): void;
        /**
         * Saves a screenshot in the game directory with a time-stamped filename.
         */
        static grab(gameDirectory: $File_, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        static grab(gameDirectory: $File_, screenshotName: string | null, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        static takeScreenshot(framebuffer: $RenderTarget): $NativeImage;
        static SCREENSHOT_DIR: string;
        constructor(gameDirectory: $File_, width: number, height: number, rowHeight: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
    }
    export class $Options implements $GameOptionsAccessor {
        fov(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
        autoJump(): $OptionInstance<boolean>;
        load(arg0: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        load(): void;
        /**
         * Send a client info packet with settings information to the server
         */
        save(): void;
        getFile(): $File;
        getBackgroundColor(chatColor: number): number;
        getBackgroundColor(opacity: number): number;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        chatColors(): $OptionInstance<boolean>;
        fullscreen(): $OptionInstance<boolean>;
        chatLinks(): $OptionInstance<boolean>;
        dumpOptionsForReport(): string;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        gamma(): $OptionInstance<number>;
        chatOpacity(): $OptionInstance<number>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        getCameraType(): $CameraType;
        setCameraType(pointOfView: $CameraType_): void;
        ambientOcclusion(): $OptionInstance<boolean>;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        framerateLimit(): $OptionInstance<number>;
        glintStrength(): $OptionInstance<number>;
        rawMouseInput(): $OptionInstance<boolean>;
        mipmapLevels(): $OptionInstance<number>;
        enableVsync(): $OptionInstance<boolean>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        setKey(keyBinding: $KeyMapping, input: $InputConstants$Key): void;
        renderDistance(): $OptionInstance<number>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        getSoundSourceOptionInstance(soundSource: $SoundSource_): $OptionInstance<number>;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        glintSpeed(): $OptionInstance<number>;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        getMenuBackgroundBlurriness(): number;
        guiScale(): $OptionInstance<number>;
        particles(): $OptionInstance<$ParticleStatus>;
        textBackgroundOpacity(): $OptionInstance<number>;
        loadSelectedResourcePacks(resourcePackList: $PackRepository): void;
        chatLinksPrompt(): $OptionInstance<boolean>;
        narrator(): $OptionInstance<$NarratorStatus>;
        chatDelay(): $OptionInstance<number>;
        simulationDistance(): $OptionInstance<number>;
        getCloudsType(): $CloudStatus;
        fovEffectScale(): $OptionInstance<number>;
        touchscreen(): $OptionInstance<boolean>;
        screenEffectScale(): $OptionInstance<number>;
        damageTiltStrength(): $OptionInstance<number>;
        hideLightningFlash(): $OptionInstance<boolean>;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        /**
         * Send a client info packet with settings information to the server
         */
        onboardingAccessibilityFinished(): void;
        static genericValueOrOffLabel(text: $Component_, value: number): $Component;
        darknessEffectScale(): $OptionInstance<number>;
        getSoundSourceVolume(category: $SoundSource_): number;
        updateResourcePacks(resourcePackList: $PackRepository): void;
        getBackgroundOpacity(opacity: number): number;
        buildPlayerInformation(): $ClientInformation;
        setServerRenderDistance(serverRenderDistance: number): void;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        entityDistanceScaling(): $OptionInstance<number>;
        notificationDisplayTime(): $OptionInstance<number>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        chatHeightUnfocused(): $OptionInstance<number>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        hideSplashTexts(): $OptionInstance<boolean>;
        operatorItemsTab(): $OptionInstance<boolean>;
        invertYMouse(): $OptionInstance<boolean>;
        entityShadows(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        autoSuggestions(): $OptionInstance<boolean>;
        sensitivity(): $OptionInstance<number>;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        hideMatchedNames(): $OptionInstance<boolean>;
        chatLineSpacing(): $OptionInstance<number>;
        highContrast(): $OptionInstance<boolean>;
        chatHeightFocused(): $OptionInstance<number>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        /**
         * Returns `true` if the client connect to a server using the native transport system.
         */
        useNativeTransport(): boolean;
        panoramaSpeed(): $OptionInstance<number>;
        toggleSprint(): $OptionInstance<boolean>;
        narratorHotkey(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        toggleCrouch(): $OptionInstance<boolean>;
        isModelPartEnabled(playerModelPart: $PlayerModelPart_): boolean;
        toggleModelPart(modelPart: $PlayerModelPart_, enable: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        broadcastOptions(): void;
        static genericValueLabel(text: $Component_, value: $Component_): $Component;
        static genericValueLabel(text: $Component_, value: number): $Component;
        setKeyBindings(arg0: $KeyMapping[]): void;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        keyMappings: $KeyMapping[];
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(minecraft: $Minecraft, gameDirectory: $File_);
        get file(): $File;
        get effectiveRenderDistance(): number;
        get cloudsType(): $CloudStatus;
        set serverRenderDistance(value: number);
        set keyBindings(value: $KeyMapping[]);
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        applyValueImmediately(): boolean;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        validateValue(value: number): (number) | undefined;
        constructor(minInclusive: number, maxInclusive: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { maxInclusive?: number, minInclusive?: number, applyValueImmediately?: boolean,  } | [maxInclusive?: number, minInclusive?: number, applyValueImmediately?: boolean, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        modifyReturnValue$fjd000$xaerominimap$onIsDown(arg0: boolean): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string, needsToggle: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(id: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        codec(): $Codec<number>;
        xmap<R>(encoder: $DoubleFunction_<R>, decoder: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        validateValue(value: number): (number) | undefined;
        fromSliderValue(value: number): $Object;
        toSliderValue(value: number): number;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor, $DynamicRenderTickCounterAccessor {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        updatePauseState(frozen: boolean): void;
        updateFrozenState(frozen: boolean): void;
        advanceTime(time: number, arg1: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        essential$getRawTickDelta(): number;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        deltaTickResidual: number;
        constructor(ticksPerSecond: number, time: number, arg2: $FloatUnaryOperator_);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        isFirstPerson(): boolean;
        cycle(): $CameraType;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front" | "sub_level_view" | "sub_level_view_unlocked";
    export class $GuiMessage$Line extends $Record {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        endOfEntry(): boolean;
        addedTime(): number;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_ | null, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { tag?: $GuiMessageTag_, addedTime?: number, endOfEntry?: boolean, content?: $FormattedCharSequence_,  } | [tag?: $GuiMessageTag_, addedTime?: number, endOfEntry?: boolean, content?: $FormattedCharSequence_, ];
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        sayChat(message: $Component_): void;
        updateNarratorStatus(status: $NarratorStatus_): void;
        checkStatus(narratorEnabled: boolean): void;
        sayNow(message: string): void;
        sayNow(message: $Component_): void;
        say(message: $Component_): void;
        narrator: $Narrator;
        static NO_TITLE: $Component;
        constructor(minecraft: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        encodableMaxInclusive(): number;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        validateValue(value: number): (number) | undefined;
        maxSupplier(): $IntSupplier;
        createCycleButton(): boolean;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { minInclusive?: number, maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number,  } | [minInclusive?: number, maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
    export class $GuiMessageTag extends $Record {
        static system(): $GuiMessageTag;
        text(): $Component;
        static chatError(): $GuiMessageTag;
        logTag(): string;
        icon(): $GuiMessageTag$Icon;
        static systemSinglePlayer(): $GuiMessageTag;
        indicatorColor(): number;
        static chatModified(originalText: string): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_ | null, arg2: $Component_ | null, arg3: string | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { indicatorColor?: number, text?: $Component_, logTag?: string, icon?: $GuiMessageTag$Icon_,  } | [indicatorColor?: number, text?: $Component_, logTag?: string, icon?: $GuiMessageTag$Icon_, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        close(): void;
        constructor(notifications: $ResourceLocation_, selector: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record {
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        content(): $Component;
        addedTime(): number;
        icon(): $GuiMessageTag$Icon;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_ | null, arg3: $GuiMessageTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { tag?: $GuiMessageTag_, addedTime?: number, signature?: $MessageSignature_, content?: $Component_,  } | [tag?: $GuiMessageTag_, addedTime?: number, signature?: $MessageSignature_, content?: $Component_, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum {
        static getCategories(recipeBookType: $RecipeBookType_): $List<$RecipeBookCategories>;
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getExtensionInfo(): $ExtensionInfo;
        getIconItems(): $List<$ItemStack>;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_SEARCH: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_DRINKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static FARMERSDELIGHT_COOKING_MEALS: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_MISC: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static get extensionInfo(): $ExtensionInfo;
        get iconItems(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown" | "farmersdelight_cooking_drinks" | "farmersdelight_cooking_meals" | "farmersdelight_cooking_misc" | "farmersdelight_cooking_search";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        codec(): $Codec<T>;
        validateValue(arg0: T): (T) | undefined;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { codec?: $Codec<any>, values?: $List_<any>,  } | [codec?: $Codec<any>, values?: $List_<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(value: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        addCommand(command: string): void;
        history(): $Collection<string>;
        constructor(path: $Path_);
    }
    export class $Camera implements $CameraAccessor, $CameraInject, $CameraZoomExtension, $CameraWaterOcclusionExtension, $CameraAccessor$1 {
        /**
         * @deprecated
         */
        setRotation(yRot: number, xRot: number): void;
        reset(): void;
        setup(level: $BlockGetter, entity: $Entity, detached: boolean, thirdPersonReverse: boolean, partialTick: number): void;
        move(zoom: number, dy: number, dx: number): void;
        tick(): void;
        modifyReturnValue$enj000$sable$getFluidInCamera(arg0: $FogType_): $FogType;
        getEntity(): $Entity;
        sable$setZoomAmount(arg0: number): void;
        isDetached(): boolean;
        getNearPlane(): $Camera$NearPlane;
        isCinematic(): boolean;
        getBlockAtCamera(): $BlockState;
        setCinematic(arg0: boolean): void;
        getUpVector(): $Vector3f;
        sable$isOccluded(): boolean;
        isInitialized(): boolean;
        getBlockPosition(): $BlockPos;
        rotation(): $Quaternionf;
        getLeftVector(): $Vector3f;
        handler$bik000$supplementaries$supp$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        sable$getZoomAmount(): number;
        getYRot(): number;
        getXRot(): number;
        handler$elo000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        getPosition(): $Vec3;
        getRoll(): number;
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        getMaxZoom(maxZoom: number): number;
        handler$fcl000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        setCinematicPosition(pos: $Vec3_): void;
        sable$isIgnoreOcclusion(): boolean;
        setPosition(pos: $Vec3_): void;
        getLookVector(): $Vector3f;
        setDetached(arg0: boolean): void;
        /**
         * Sets the position and blockpos of the active render
         */
        cbcaeronauticsmissiles$setPosition(x: number, arg1: number, y: number): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        eyeHeight: number;
        constructor();
        get entity(): $Entity;
        get nearPlane(): $Camera$NearPlane;
        get blockAtCamera(): $BlockState;
        get upVector(): $Vector3f;
        get initialized(): boolean;
        get blockPosition(): $BlockPos;
        get leftVector(): $Vector3f;
        get YRot(): number;
        get XRot(): number;
        get roll(): number;
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
        set cinematicPosition(value: $Vec3_);
        get lookVector(): $Vector3f;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(style: $Style, currentPos: number, contentWidth: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(typeName: string): $User$Type;
        static byName(typeName: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        realmsClient(): $RealmsClient;
        quickPlayData(): $GameConfig$QuickPlayData;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_,  } | [realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_, ];
    export class $OptionInstance<T> implements $OptionInstanceAccessor<any> {
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(value: $Object): void;
        static createBoolean(key: string, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, valueStringifier: $OptionInstance$CaptionBasedToString_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        codec(): $Codec<$Object>;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        static cachedConstantTooltip<T>(message: $Component_): $OptionInstance$TooltipSupplier<T>;
        createButton(options: $Options, x: number, y: number, width: number): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<$Object>): $AbstractWidget;
        createButton(options: $Options): $AbstractWidget;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        getInitialValue(): $Object;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, codec: $Codec<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $IWorldMapMinecraftClient, $AccessorMinecraft, $MinecraftClientAccessor, $MinecraftClientKJS, $MinecraftAccessor, $IXaeroMinimapMinecraftClient, $MinecraftExt$1, $MinecraftExt, $MinecraftAccessor$1 {
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        run(): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        static getInstance(): $Minecraft;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        stop(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        destroy(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        tick(): void;
        setLevel(level: $ClientLevel, reason: $ReceivingLevelScreen$Reason_): void;
        getGuiSprites(): $GuiSpriteManager;
        disconnect(nextScreen: $Screen): void;
        disconnect(nextScreen: $Screen, keepResourcePacks: boolean): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        disconnect(): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        static getLauncherBrand(): string;
        emergencySaveAndCrash(report: $CrashReport): void;
        handler$zng002$veil$close(arg0: $CallbackInfo): void;
        handler$eai000$fdlib$init(arg0: $Minecraft$GameLoadCookie_, arg1: $CallbackInfo): void;
        debugClientMetricsStart(logger: $Consumer_<$Component>): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasSingleplayerServer(): boolean;
        /**
         * Returns the currently running integrated server
         */
        getSingleplayerServer(): $IntegratedServer;
        reloadResourcePacks(): $CompletableFuture<void>;
        clearResourcePacksOnError(throwable: $Throwable, errorMessage: $Component_ | null, gameLoadCookie: $Minecraft$GameLoadCookie_ | null): void;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        debugFpsMeterKeyPress(keyCount: number): void;
        getMainRenderTarget(): $RenderTarget;
        getResourcePackRepository(): $PackRepository;
        getResourcePackDirectory(): $Path;
        getTelemetryManager(): $ClientTelemetryManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        telemetryOptInExtra(): boolean;
        getSituationalMusic(): $Music;
        createWorldOpenFlows(): $WorldOpenFlows;
        getDownloadedPackSource(): $DownloadedPackSource;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useAmbientOcclusion(): boolean;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        extraTelemetryAvailable(): boolean;
        getMinecraftSessionService(): $MinecraftSessionService;
        shouldEntityAppearGlowing(entity: $Entity): boolean;
        updateReportEnvironment(reportEnvironment: $ReportEnvironment_): void;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useShaderTransparency(): boolean;
        /**
         * Gets the sprite uploader used for potions.
         */
        getMobEffectTextures(): $MobEffectTextureManager;
        getProgressListener(): $StoringChunkProgressListener;
        getScheduledEvents(): $ScheduledEvents;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isTextFilteringEnabled(): boolean;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        prepareForMultiplayer(): void;
        getEssential$executor(): $Executor;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        getReportingContext(): $ReportingContext;
        getXaeroWorldMap_fps(): number;
        getPlayerSocialManager(): $PlayerSocialManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        canValidateProfileKeys(): boolean;
        getXaeroMinimap_fps(): number;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        showOnlyReducedInfo(): boolean;
        grabPanoramixScreenshot(gameDirectory: $File_, width: number, height: number): $Component;
        /**
         * Gets the sprite uploader used for paintings.
         */
        getPaintingTextures(): $PaintingTextureManager;
        static crash(minecraft: $Minecraft | null, gameDirectory: $File_, crashReport: $CrashReport): void;
        handler$ekh000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cursorEntered(): void;
        setLastInputType(lastInputType: $InputType_): void;
        getFrameTimeNs(): number;
        /**
         * Return the musicTicker's instance
         */
        getMusicManager(): $MusicManager;
        forceSetScreen(nextScreen: $Screen): void;
        clearClientLevel(nextScreen: $Screen): void;
        getGpuUtilization(): number;
        getCameraEntity(): $Entity;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isNameBanned(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static renderNames(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsRealms(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useFancyGraphics(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsTelemetry(): boolean;
        getItemRenderer(): $ItemRenderer;
        renderBuffers(): $RenderBuffers;
        realmsDataFetcher(): $RealmsDataFetcher;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsMultiplayer(): boolean;
        quickPlayLog(): $QuickPlayLog;
        commandHistory(): $CommandHistory;
        directoryValidator(): $DirectoryValidator;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isLocalServer(): boolean;
        setWindowActive(leftClick: boolean): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isGameLoadFinished(): boolean;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        resizeDisplay(): void;
        doWorldLoad(levelStorage: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, newWorld: boolean): void;
        getBlockRenderer(): $BlockRenderDispatcher;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isEnforceUnicode(): boolean;
        getChatStatus(): $Minecraft$ChatStatus;
        /**
         * Returns the save loader that is currently being used
         */
        getLevelSource(): $LevelStorageSource;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateTitle(): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getVersionType(): string;
        multiplayerBan(): $BanDetails;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getLaunchedVersion(): string;
        delayCrashRaw(report: $CrashReport): void;
        getModelManager(): $ModelManager;
        getDebugOverlay(): $DebugScreenOverlay;
        static checkModStatus(): $ModCheck;
        getTextureManager(): $TextureManager;
        modifyExpressionValue$gin000$essential$modifyMultiplayerWindowTitleOther(original: string): string;
        modifyExpressionValue$gin000$essential$modifyMultiplayerWindowTitleLAN(original: string): string;
        getGameProfile(): $GameProfile;
        getFixerUpper(): $DataFixer;
        getBlockColors(): $BlockColors;
        addCustomNbtData(stack: $ItemStack_, blockEntity: $BlockEntity, registryAccess: $RegistryAccess): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isSingleplayer(): boolean;
        getTextureAtlas(location: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getSoundManager(): $SoundManager;
        getLanguageManager(): $LanguageManager;
        getSkinManager(): $SkinManager;
        getTutorial(): $Tutorial;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWindowActive(): boolean;
        getHotbarManager(): $HotbarManager;
        setCameraEntity(viewingEntity: $Entity): void;
        delayTextureReload(): $CompletableFuture<void>;
        isLocalPlayer(playerUUID: $UUID_): boolean;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getTitle(): string;
        getEntityModels(): $EntityModelSet;
        getNarrator(): $GameNarrator;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        updateMaxMipLevel(keyCount: number): void;
        getSplashManager(): $SplashManager;
        getChatListener(): $ChatListener;
        getLastInputType(): $InputType;
        getItemColors(): $ItemColors;
        localvar$gom000$essential$displayGuiScreen(screen: $Screen): $Screen;
        modify$zea000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$gom000$essential$displayGuiScreen(screen: $Screen, info: $CallbackInfo): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        clearDownloadedResourcePacks(): void;
        getCurrentServer(): $ServerData;
        getResourceManager(): $ResourceManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isRunning(): boolean;
        handler$zea000$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        handler$dck000$nochatrestrictions$onCheckNameBan(arg0: $CallbackInfoReturnable<any>): void;
        handler$gol000$essential$fireGuiOpenedEvent(screen: $Screen, info: $CallbackInfo): void;
        handler$gnc000$essential$runTasksIfOverlayPresent(ci: $CallbackInfo): void;
        getProxy(): $Proxy;
        getProfiler(): $ProfilerFiller;
        getToasts(): $ToastComponent;
        /**
         * Adds core server Info (GL version, Texture pack, isModded, type), and the worldInfo to the crash report.
         */
        fillReport(theCrash: $CrashReport): $CrashReport;
        static fillReport(minecraft: $Minecraft | null, languageManager: $LanguageManager | null, launchVersion: string, options: $Options | null, report: $CrashReport): void;
        delayCrash(report: $CrashReport): void;
        getFps(): number;
        pauseGame(leftClick: boolean): void;
        getUser(): $User;
        isBlocked(playerUUID: $UUID_): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isDemo(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isPaused(): boolean;
        getOverlay(): $Overlay;
        setSession(session: $User): void;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        handler$zmc000$veil$beginFrame(arg0: $CallbackInfo): void;
        handler$zmc000$veil$endFrame(arg0: $CallbackInfo): void;
        constant$ghn000$essential$modify(value: number): number;
        getConnection(): $ClientPacketListener;
        setOverlay(loadingGui: $Overlay | null): void;
        getWindow(): $Window;
        setScreen(nextScreen: $Screen | null): void;
        handler$dck000$nochatrestrictions$onGetUserProperties(arg0: $CallbackInfoReturnable<any>): void;
        getVanillaPackResources(): $VanillaPackResources;
        handler$dck000$nochatrestrictions$onCreateUserApi(arg0: $YggdrasilAuthenticationService, arg1: $GameConfig, arg2: $CallbackInfoReturnable<any>): void;
        /**
         * Retrieves the `Locale` set by the player.
         * Useful for creating string and number formatters.
         */
        getLocale(): $Locale;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        popGuiLayer(): void;
        pushGuiLayer(nextScreen: $Screen): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(defaultText: string): void;
        getCurrentScreen(): $Screen;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setCurrentScreen(nextScreen: $Screen): void;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getKeyBindPressedTicks(id: string): number;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getCurrentWorldName(): string;
        isKeyBindDown(id: string): boolean;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isAltDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(defaultText: string): void;
        getName(): $Component;
        setTitle(defaultText: string): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isShiftDown(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isCtrlDown(): boolean;
        tell(message: $Component_): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        self(): $Minecraft;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        bookshelf$getFontManager(): $FontManager;
        setGameProfileFuture(arg0: $CompletableFuture<$ProfileResult_>): void;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        create$setMissTime(keyCount: number): void;
        getTimer(): $DeltaTracker$Timer;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        level: $ClientLevel;
        rightClickDelay: number;
        gameDirectory: $File;
        static fps: number;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(gameConfig: $GameConfig);
        static get instance(): $Minecraft;
        get guiSprites(): $GuiSpriteManager;
        static get launcherBrand(): string;
        get singleplayerServer(): $IntegratedServer;
        get mainRenderTarget(): $RenderTarget;
        get resourcePackRepository(): $PackRepository;
        get resourcePackDirectory(): $Path;
        get telemetryManager(): $ClientTelemetryManager;
        get situationalMusic(): $Music;
        get downloadedPackSource(): $DownloadedPackSource;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get minecraftSessionService(): $MinecraftSessionService;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get mobEffectTextures(): $MobEffectTextureManager;
        get progressListener(): $StoringChunkProgressListener;
        get scheduledEvents(): $ScheduledEvents;
        get textFilteringEnabled(): boolean;
        get essential$executor(): $Executor;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get reportingContext(): $ReportingContext;
        get xaeroWorldMap_fps(): number;
        get playerSocialManager(): $PlayerSocialManager;
        get xaeroMinimap_fps(): number;
        get paintingTextures(): $PaintingTextureManager;
        get frameTimeNs(): number;
        get musicManager(): $MusicManager;
        get gpuUtilization(): number;
        get nameBanned(): boolean;
        get itemRenderer(): $ItemRenderer;
        get localServer(): boolean;
        get gameLoadFinished(): boolean;
        get blockRenderer(): $BlockRenderDispatcher;
        get enforceUnicode(): boolean;
        get chatStatus(): $Minecraft$ChatStatus;
        get levelSource(): $LevelStorageSource;
        get versionType(): string;
        get launchedVersion(): string;
        get modelManager(): $ModelManager;
        get debugOverlay(): $DebugScreenOverlay;
        get textureManager(): $TextureManager;
        get gameProfile(): $GameProfile;
        get fixerUpper(): $DataFixer;
        get blockColors(): $BlockColors;
        get singleplayer(): boolean;
        get soundManager(): $SoundManager;
        get languageManager(): $LanguageManager;
        get skinManager(): $SkinManager;
        get tutorial(): $Tutorial;
        get hotbarManager(): $HotbarManager;
        get entityModels(): $EntityModelSet;
        get narrator(): $GameNarrator;
        get splashManager(): $SplashManager;
        get chatListener(): $ChatListener;
        get itemColors(): $ItemColors;
        get profileKeySignatureValidator(): $SignatureValidator;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get currentServer(): $ServerData;
        get resourceManager(): $ResourceManager;
        get running(): boolean;
        get proxy(): $Proxy;
        get profiler(): $ProfilerFiller;
        get toasts(): $ToastComponent;
        get user(): $User;
        get demo(): boolean;
        get paused(): boolean;
        set session(value: $User);
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get connection(): $ClientPacketListener;
        get window(): $Window;
        get vanillaPackResources(): $VanillaPackResources;
        get locale(): $Locale;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set statusMessage(value: $Component_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set activePostShader(value: $ResourceLocation_);
        get currentWorldName(): string;
        get altDown(): boolean;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get displayName(): $Component;
        set gameProfileFuture(value: $CompletableFuture<$ProfileResult_>);
        get timer(): $DeltaTracker$Timer;
    }
    export class $Camera$NearPlane {
        getBottomRight(): $Vec3;
        getPointOnPlane(leftScale: number, upScale: number): $Vec3;
        getBottomLeft(): $Vec3;
        getTopRight(): $Vec3;
        getTopLeft(): $Vec3;
        get bottomRight(): $Vec3;
        get bottomLeft(): $Vec3;
        get topRight(): $Vec3;
        get topLeft(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified";
    export class $KeyboardHandler {
        setup(window: number): void;
        tick(): void;
        handler$zko000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$zko000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        getClipboard(): string;
        keyPress(windowPointer: number, arg1: number, key: number, scanCode: number, action: number): void;
        handler$dhn000$chloride$redirect$handleFullScreenToggle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        setClipboard(string: string): void;
        static DEBUG_CRASH_TIME: number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(codePoint: number, style: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startReload(reloadReason: $ResourceLoadStateTracker$ReloadReason_, packs: $List_<$PackResources>): void;
        startRecovery(error: $Throwable): void;
        fillCrashReport(report: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        codec(): $Codec<T>;
        validateValue(value: T): (T) | undefined;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(part: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        altValues(): $List<T>;
        codec(): $Codec<T>;
        validateValue(arg0: T): (T) | undefined;
        altCondition(): $BooleanSupplier;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>,  } | [altCondition?: $BooleanSupplier_, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter {
        plainTailByWidth(content: string, maxWidth: number, style: $Style): string;
        plainHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        plainIndexAtWidth(content: string, maxWidth: number, style: $Style): number;
        findLineBreak(content: string, maxWidth: number, style: $Style): number;
        splitLines(content: string, maxWidth: number, style: $Style, withNewLines: boolean, linePos: $StringSplitter$LinePosConsumer_): void;
        splitLines(content: string, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, splitifier: $BiConsumer_<$FormattedText, boolean>): void;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, prefix: $FormattedText): $List<$FormattedText>;
        stringWidth(content: $FormattedText): number;
        stringWidth(content: $FormattedCharSequence_): number;
        stringWidth(content: string | null): number;
        headByWidth(content: $FormattedText, maxWidth: number, style: $Style): $FormattedText;
        componentStyleAtWidth(content: $FormattedText, maxWidth: number): $Style;
        componentStyleAtWidth(content: $FormattedCharSequence_, maxWidth: number): $Style;
        formattedHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        formattedIndexByWidth(content: string, maxWidth: number, style: $Style): number;
        static getWordPosition(content: string, skipCount: number, cursorPoint: number, includeWhitespace: boolean): number;
        constructor(widthProvider: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $KeyMappingAccessor, $AccessKeyMapping, $KeyMappingsAccessor, $KeyMappingInvoker, $KeyMappingAccessor$1, $KeyBindingAccessor {
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(keysym: number, scancode: number): boolean;
        static set(key: $InputConstants$Key, held: boolean): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDefault(): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static setAll(): void;
        getCategory(): string;
        static click(key: $InputConstants$Key): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        consumeClick(): boolean;
        /**
         * Returns a supplier which gets a keybind's current binding (eg, `key.forward` returns W by default), or the keybind's name if no such keybind exists (eg, `key.invalid` returns key.invalid)
         */
        static createNameSupplier(key: string): $Supplier<$Component>;
        setKey(key: $InputConstants$Key): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static releaseAll(): void;
        static getKeybinds$essential_$md$b7e275$0(): $Map<any, any>;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        same(binding: $KeyMapping): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDown(): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isUnbound(): boolean;
        getDefaultKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetToggleKeys(): void;
        setDown(value: boolean): void;
        saveString(): string;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getTranslatedKeyMessage(): $Component;
        getDefaultKeyModifier(): $KeyModifier;
        setKeyConflictContext(keyConflictContext: $IKeyConflictContext): void;
        setKeyModifierAndCode(keyModifier: $KeyModifier_, keyCode: $InputConstants$Key): void;
        getKeyConflictContext(): $IKeyConflictContext;
        /**
         * Returns `true` if the `KeyMapping` is set to a mouse key and the key matches.
         */
        matchesMouse(key: number): boolean;
        getKeyModifier(): $KeyModifier;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetMapping(): void;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getDisplayName(): $Component;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        setToDefault(): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isConflictContextAndModifierActive(): boolean;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        hasKeyModifierConflict(binding: $KeyMapping): boolean;
        /**
         * @return true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise
         */
        isActiveAndMatches(keyCode: $InputConstants$Key): boolean;
        getKey(): $InputConstants$Key;
        controlling$getKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        invokeUnpressKey(): void;
        getBoundKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        invokeRelease(): void;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(name: string, keyCode: number, category: string);
        constructor(name: string, type: $InputConstants$Type_, keyCode: number, category: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        get name(): string;
        get default(): boolean;
        get category(): string;
        static get keybinds$essential_$md$b7e275$0(): $Map<any, any>;
        get unbound(): boolean;
        get defaultKey(): $InputConstants$Key;
        get translatedKeyMessage(): $Component;
        get defaultKeyModifier(): $KeyModifier;
        get keyModifier(): $KeyModifier;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
        get boundKey(): $InputConstants$Key;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(name: string, value: T, stringValuefier: $Function_<string, T>, valueStringifier: $Function_<T, string>): T;
        process(name: string, value: number): number;
        process(name: string, value: string): string;
        process(name: string, value: boolean): boolean;
        process(name: string, value: number): number;
    }
    export class $DebugQueryHandler {
        queryEntityTag(entId: number, tag: $Consumer_<$CompoundTag>): void;
        queryBlockEntityTag(pos: $BlockPos_, tag: $Consumer_<$CompoundTag>): void;
        handleResponse(transactionId: number, tag: $CompoundTag_ | null): boolean;
        constructor(connection: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        shouldNarrateSystem(): boolean;
        static byId(id: number): $NarratorStatus;
        shouldNarrateChat(): boolean;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(isLocalServer: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(caption: $Component_, value: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(instance: $OptionInstance<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
