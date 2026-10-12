import { $ServerLinks_, $ServerLinks } from "@package/net/minecraft/server";
import { $LevelRenderer, $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $URL } from "@package/java/net";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $FriendlyByteBuf, $Connection, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $EquippedOutfitsManager } from "@package/gg/essential/network/connectionmanager/cosmetics";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $SignedMessageValidator, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $Duration_ } from "@package/java/time";
import { $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider, $SharedSuggestionProvider$TextCoordinates } from "@package/net/minecraft/commands";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ServerListAccessor } from "@package/gg/essential/mixins/transformers/client/multiplayer";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $UUID_, $ArrayList, $Map, $List, $Map_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Exception, $Throwable, $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $GameRules, $ChunkPos, $ColorResolver_, $GameType, $GameType_, $EntityGetter, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $ClientWorldAccessor } from "@package/gg/essential/mixins/transformers/client";
import { $Renderable, $DebugScreenOverlay, $ChatComponent$State } from "@package/net/minecraft/client/gui/components";
import { $ClientboundGameProfilePacket_, $ClientboundHelloPacket, $ClientboundLoginCompressionPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ParticleSystem } from "@package/gg/essential/model";
import { $ClientChunkCacheStorageAccessor } from "@package/dev/ryanhcode/sable/mixin/loaded_chunk_debug";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $SubLevelSuggestionProvider } from "@package/dev/ryanhcode/sable/command/argument";
import { $DebugQueryHandler, $Minecraft, $ClientRecipeBook, $User } from "@package/net/minecraft/client";
import { $ClientLevelAccessor as $ClientLevelAccessor$1 } from "@package/net/blay09/mods/waystones/mixin";
import { $ServerDataExt } from "@package/gg/essential/mixins/ext/client/multiplayer";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementTree$Listener, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $InteractionResult, $InteractionHand_, $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $EntityTickList } from "@package/net/minecraft/world/level/entity";
import { $NetworkPlayerInfoExt } from "@package/gg/essential/mixins/impl/client/network";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleSystemHolder } from "@package/gg/essential/mixins/ext/client";
import { $DebugChunkProviderAttachments } from "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $ClientLevelAccessor } from "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress";
import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $EntityHitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $LevelPoseProviderExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IngameEquippedOutfitsManager, $IngameEquippedOutfitsUpdateEncoder } from "@package/gg/essential/cosmetics";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetTitleTextPacket_, $ClientboundSetActionBarTextPacket_, $ClientboundTickingStatePacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundPlayerLookAtPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundSetExperiencePacket, $ClientboundTakeItemEntityPacket, $ClientboundStartConfigurationPacket, $ClientboundLightUpdatePacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockChangedAckPacket_, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundRemoveEntitiesPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundSetCameraPacket, $ClientboundLoginPacket_, $ClientboundSetEquipmentPacket, $ClientboundSetEntityLinkPacket, $ClientboundPlayerPositionPacket, $ClientboundRespawnPacket_, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundRecipePacket, $ClientboundAwardStatsPacket_, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundContainerClosePacket, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetEntityDataPacket_, $ClientboundSetObjectivePacket, $ClientboundPlaceGhostRecipePacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundHorseScreenOpenPacket, $ClientboundCommandsPacket, $ClientboundLevelParticlesPacket, $ClientboundLevelEventPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundClearTitlesPacket, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundProjectilePowerPacket, $ClientboundMerchantOffersPacket, $ClientboundSetScorePacket_, $ClientboundTeleportEntityPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundOpenScreenPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundMoveVehiclePacket, $ClientboundPlayerAbilitiesPacket, $ClientboundBlockEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ClientboundResetChatPacket, $ClientboundUpdateEnabledFeaturesPacket_, $ClientConfigurationPacketListener, $ClientboundFinishConfigurationPacket, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $WorldMapSession } from "@package/xaero/map";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $NetHandlerPlayClientExt } from "@package/gg/essential/mixins/ext/client/network";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ClientLevelAccessor as $ClientLevelAccessor$2 } from "@package/rbasamoyai/createbigcannons/mixin/client";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(registryKey: $ResourceKey_<$Registry<never>>, networkPayload: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(registryAccess: $RegistryAccess, isMemoryConnection: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
        constructor(userApiService: $UserApiService, uuid: $UUID_, gameDirectory: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener {
        tick(): void;
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        levelReady(): boolean;
        loadingPacketsReceived(): void;
        constructor(player: $LocalPlayer, level: $ClientLevel, levelRenderer: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler, $NetHandlerPlayClientExt {
        getId(): $UUID;
        close(): void;
        tick(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        getXaero_minimapSession(): $XaeroMinimapSession;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        sendUnsignedCommand(command: string): boolean;
        /**
         * Registers some server properties (gametype, hardcore-mode, terraintype, difficulty, player limit), creates a new WorldClient and sets the player initial dimension.
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        kjs$sessionData(): $KubeSessionData;
        searchTrees(): $SessionSearchTrees;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        /**
         * Updates the specified entity's position by the specified relative momentum and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        registryAccess(): $RegistryAccess$Frozen;
        getEssential$maxPlayers(): number;
        getServerData(): $ServerData;
        updateSearchTrees(): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        handler$zki000$bookshelf$onInit(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_, arg3: $CallbackInfo): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        isFeatureEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        getDebugQueryHandler(): $DebugQueryHandler;
        handleCustomPayload(payload: $CustomPacketPayload_): void;
        getXaero_serverChunkRadius(): number;
        getLocalGameProfile(): $GameProfile;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        clearLevel(): void;
        sendChat(message: string): void;
        handler$dbc000$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handler$zdn000$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$fik001$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$fik001$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        getEssential$ingameEquippedOutfitsUpdateEncoder(): $IngameEquippedOutfitsUpdateEncoder;
        handler$fik001$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$zdn000$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$fik000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handler$zdn000$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        getEssential$ingameEquippedOutfitsManager(): $IngameEquippedOutfitsManager;
        handler$fik000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$zdn000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$fik001$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$zdp000$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$zdn000$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$fik001$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$fik001$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        scoreboard(): $Scoreboard;
        /**
         * Gets the client's description information about another player on the server.
         */
        getPlayerInfo(name: string): $PlayerInfo;
        getPlayerInfo(uniqueId: $UUID_): $PlayerInfo;
        sendCommand(message: string): void;
        getRecipeManager(): $RecipeManager;
        potionBrewing(): $PotionBrewing;
        setKeyPair(keyPair: $ProfileKeyPair_): void;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        serverLinks(): $ServerLinks;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing, ...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        markMessageAsProcessed(chatMessage: $PlayerChatMessage_, acknowledged: boolean): void;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        handler$fik001$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$zdn000$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$fik001$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$zdn000$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        getXaero_worldmapSession(): $WorldMapSession;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        essential$getNameIdCache(): $Map<any, any>;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        handler$fik001$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$zdn000$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        catnip$getServerChunkRadius(): number;
        serverChunkRadius: number;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get id(): $UUID;
        get level(): $ClientLevel;
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        get advancements(): $ClientAdvancements;
        get essential$maxPlayers(): number;
        get serverData(): $ServerData;
        get debugQueryHandler(): $DebugQueryHandler;
        get xaero_serverChunkRadius(): number;
        get localGameProfile(): $GameProfile;
        get essential$ingameEquippedOutfitsUpdateEncoder(): $IngameEquippedOutfitsUpdateEncoder;
        get essential$ingameEquippedOutfitsManager(): $IngameEquippedOutfitsManager;
        get recipeManager(): $RecipeManager;
        set keyPair(value: $ProfileKeyPair_);
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        get suggestionsProvider(): $ClientSuggestionProvider;
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerDataExt {
        type(): $ServerData$Type;
        /**
         * Returns an NBTTagCompound with the server's name, IP and maybe acceptTextures.
         */
        write(): $CompoundTag;
        /**
         * Takes an NBTTagCompound with 'name' and 'ip' keys, returns a ServerData instance.
         */
        static read(nbtCompound: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(state: $ServerData$State_): void;
        copyFrom(serverData: $ServerData): void;
        setResourcePackStatus(packStatus: $ServerData$ServerPackStatus_): void;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        setIconBytes(iconBytes: number[] | null): void;
        static validateIcon(icon: number[] | null): number[];
        getIconBytes(): number[];
        copyNameIconFrom(serverData: $ServerData): void;
        setEssential$recommendedVersion(recommendedVersion: string): void;
        getEssential$recommendedVersion(): string;
        /**
         * Returns `true` if the server is a LAN server.
         */
        getEssential$skipModCompatCheck(): boolean;
        setEssential$showDownloadIcon(showDownloadIcon: boolean): void;
        setEssential$shareWithFriends(shareWithFriends: boolean): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        getEssential$showDownloadIcon(): boolean;
        getEssential$shareWithFriends(): boolean;
        setEssential$skipModCompatCheck(skipModCompatCheck: boolean): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isLan(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isRealm(): boolean;
        setEssential$pingRegion(pingRegion: string): void;
        getEssential$pingOverride(): number;
        setEssential$isTrusted(isTrusted: boolean): void;
        setEssential$pingOverride(pingOverride: number): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        getEssential$isTrusted(): boolean;
        getEssential$pingRegion(): string;
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(name: string, ip: string, type: $ServerData$Type_);
        get lan(): boolean;
        get realm(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        constructor(address: $ServerAddress, output: $LegacyServerPinger$Output_);
    }
    export class $ServerList implements $ServerListAccessor {
        remove(serverData: $ServerData): void;
        /**
         * Counts the number of ServerData instances in the list.
         */
        size(): number;
        get(ip: string): $ServerData;
        /**
         * Gets the ServerData instance stored for the given index in the list.
         */
        get(index: number): $ServerData;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        load(): void;
        replace(index: number, server: $ServerData): void;
        add(server: $ServerData, hidden: boolean): void;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        save(): void;
        /**
         * Takes two list indexes, and swaps their order around.
         */
        swap(pos1: number, pos2: number): void;
        unhide(ip: string): $ServerData;
        static saveSingleServer(serverData: $ServerData): void;
        getServers(): $List<$ServerData>;
        constructor(minecraft: $Minecraft);
        get servers(): $List<$ServerData>;
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
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
    export class $ClientChunkCache$Storage implements $ClientChunkCacheStorageAccessor {
        getChunks(): $AtomicReferenceArray<$LevelChunk>;
        chunks: $AtomicReferenceArray<$LevelChunk>;
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo implements $NetworkPlayerInfoExt {
        getSkin(): $PlayerSkin;
        getGameMode(): $GameType;
        hasVerifiableChat(): boolean;
        /**
         * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
         */
        getProfile(): $GameProfile;
        getLatency(): number;
        setEssential$equippedOutfitsManager(equippedOutfitsManager: $EquippedOutfitsManager): void;
        getChatSession(): $RemoteChatSession;
        getTabListDisplayName(): $Component;
        handler$gkl000$essential$getSkinTextures(info: $CallbackInfoReturnable<any>): void;
        getEssential$equippedOutfitsManager(): $EquippedOutfitsManager;
        getTeam(): $PlayerTeam;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(displayName: $Component_ | null): void;
        constructor(profile: $GameProfile, enforeSecureChat: boolean);
        get skin(): $PlayerSkin;
        get gameMode(): $GameType;
        get profile(): $GameProfile;
        get latency(): number;
        get chatSession(): $RemoteChatSession;
        get team(): $PlayerTeam;
        get messageValidator(): $SignedMessageValidator;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(packet: $ClientboundPongResponsePacket_): void;
        constructor(connection: $ClientPacketListener, delayTimer: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(userApiService: $UserApiService, user: $User, gameDirectory: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
    }
    export class $SessionSearchTrees {
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        updateCreativeTags(items: $List_<$ItemStack_>): void;
        recipes(): $SearchTree<$RecipeCollection>;
        updateRecipes(recipeBook: $ClientRecipeBook, registries: $RegistryAccess$Frozen): void;
        rebuildAfterLanguageChange(): void;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        updateCreativeTooltips(registries: $HolderLookup$Provider, items: $List_<$ItemStack_>): void;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { url?: $URL, hash?: string, id?: $UUID_,  } | [url?: $URL, hash?: string, id?: $UUID_, ];
    export class $ClientAdvancements {
        get(id: $ResourceLocation_): $AdvancementHolder;
        update(packet: $ClientboundUpdateAdvancementsPacket): void;
        getTree(): $AdvancementTree;
        setListener(listener: $ClientAdvancements$Listener | null): void;
        setSelectedTab(advancement: $AdvancementHolder_ | null, tellServer: boolean): void;
        constructor(minecraft: $Minecraft, telemetryManager: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener | null);
    }
    export class $MultiPlayerGameMode {
        /**
         * Syncs the current player item with the server
         */
        tick(): void;
        /**
         * Used in PlayerControllerMP to update the server with an ItemStack in a slot.
         */
        handleCreativeModeItemAdd(stack: $ItemStack_, slotId: number): void;
        continueDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        handlePlaceRecipe(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean): void;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook): $LocalPlayer;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean): $LocalPlayer;
        setLocalMode(localPlayerMode: $GameType_, previousLocalPlayerMode: $GameType_ | null): void;
        /**
         * Sets the game type for the player.
         */
        setLocalMode(type: $GameType_): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        adjustPlayer(player: $Player): void;
        getDestroyStage(): number;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasExperience(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        isDestroying(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasInfiniteItems(): boolean;
        /**
         * Syncs the current player item with the server
         */
        stopDestroyBlock(): void;
        startDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasMissTime(): boolean;
        handlePickItem(index: number): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        releaseUsingItem(player: $Player): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        isServerControlledInventory(): boolean;
        getPreviousPlayerMode(): $GameType;
        useItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult): $InteractionResult;
        useItem(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Handles right-clicking an entity from the entities side, sends a packet to the server.
         */
        interactAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_): $InteractionResult;
        /**
         * Handles right-clicking an entity, sends a packet to the server.
         */
        interact(player: $Player, target: $Entity, hand: $InteractionHand_): $InteractionResult;
        /**
         * Attacks an entity
         */
        attack(player: $Player, targetEntity: $Entity): void;
        getPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        isAlwaysFlying(): boolean;
        destroyBlock(pos: $BlockPos_): boolean;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        handleInventoryMouseClick(containerId: number, slotId: number, mouseButton: number, clickType: $ClickType_, player: $Player): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        canHurtPlayer(): boolean;
        /**
         * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
         */
        handleInventoryButtonClick(containerId: number, buttonId: number): void;
        /**
         * Sends a Packet107 to the server to drop the item on the ground
         */
        handleCreativeModeItemDrop(stack: $ItemStack_): void;
        destroyBlockPos: $BlockPos;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(minecraft: $Minecraft, connection: $ClientPacketListener);
        get destroyStage(): number;
        get destroying(): boolean;
        get serverControlledInventory(): boolean;
        get previousPlayerMode(): $GameType;
        get playerMode(): $GameType;
        get alwaysFlying(): boolean;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(version: number, motd: string, players: string, capacity: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener {
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        isAcceptingMessages(): boolean;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleHello(packet: $ClientboundHelloPacket): void;
        setMinigameName(minigameName: string | null): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        constructor(connection: $Connection, minecraft: $Minecraft, serverData: $ServerData | null, parent: $Screen | null, newWorld: boolean, worldLoadDuration: $Duration_ | null, updateStatus: $Consumer_<$Component>, cookies: $TransferState_ | null);
        get acceptingMessages(): boolean;
        set minigameName(value: string | null);
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(connection: $ClientPacketListener, debugScreenOverlay: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(registryKey: $ResourceKey_<$Registry<never>>, registryEntries: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        collectGameRegistries(resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, isMemoryConnection: boolean): $RegistryAccess$Frozen;
        appendTags(tags: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        constructor();
    }
    export class $ClientLevel extends $Level implements $IWorldMapClientWorld, $ClientLevelAccessor$2, $ClientLevelKJS, $IClientLevel, $ClientLevelAccessor$1, $BiomeSeedProvider, $ChunkTrackerHolder, $ClientLevelAccessor, $LevelPoseProviderExtension, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $IXaeroMinimapClientWorld, $ClientWorldAccessor, $ParticleSystemHolder {
        getSkyColor(pos: $Vec3_, partialTick: number): $Vec3;
        unload(chunk: $LevelChunk): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        /**
         * Sets the world time.
         */
        setDayTime(time: number): void;
        addEntity(entity: $Entity): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        sable$getPlotContainer(): $SubLevelContainer;
        removeEntity(entityId: number, reason: $Entity$RemovalReason_): void;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        /**
         * Sets the world time.
         */
        setGameTime(time: number): void;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $ClientLevel$ClientLevelData;
        animateTick(posX: number, posY: number, posZ: number): void;
        /**
         * If on MP, sends a quitting packet.
         */
        tickEntities(): void;
        handler$emd000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        /**
         * If on MP, sends a quitting packet.
         */
        sable$popPoseSupplier(): void;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        isLightUpdateQueueEmpty(): boolean;
        handleBlockChangedAck(sequence: number): void;
        entitiesForRendering(): $Iterable<$Entity>;
        getXaero_minimapData(): $MinimapClientWorldData;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        sodium$getBiomeZoomSeed(): number;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        getEntityCount(): number;
        setServerSimulationDistance(sequence: number): void;
        getServerSimulationDistance(): number;
        setServerVerifiedBlockState(pos: $BlockPos_, state: $BlockState_, flags: number): void;
        setSectionDirtyWithNeighbors(posX: number, posY: number, posZ: number): void;
        xaerolib_getData(): $ClientLevelData;
        xaerolib_setData(arg0: $ClientLevelData): void;
        tickNonPassenger(entity: $Entity): void;
        setDefaultSpawnPos(spawnPos: $BlockPos_, spawnAngle: number): void;
        effects(): $DimensionSpecialEffects;
        syncBlockState(pos: $BlockPos_, state: $BlockState_, playerPos: $Vec3_): void;
        queueLightUpdate(task: $Runnable_): void;
        /**
         * If on MP, sends a quitting packet.
         */
        pollLightUpdates(): void;
        calculateBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getParticleSystem(): $ParticleSystem;
        overrideMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        onChunkLoaded(chunkPos: $ChunkPos): void;
        getSkyFlashTime(): number;
        doAnimateTick(posX: number, posY: number, posZ: number, range: number, random: $RandomSource, block: $Block_ | null, blockPos: $BlockPos$MutableBlockPos): void;
        getStarBrightness(partialTick: number): number;
        /**
         * If on MP, sends a quitting packet.
         */
        clearTintCaches(): void;
        getCloudColor(partialTick: number): $Vec3;
        sodium$getTracker(): $ChunkTracker;
        getSkyDarken(partialTick: number): number;
        self(): $EntityGetter;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        getChunk(chunkX: number, chunkZ: number): $LevelChunk;
        getConnection(): $ClientPacketListener;
        waystones$getTickingEntities(): $EntityTickList;
        getLevelRenderer(): $LevelRenderer;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        levelRenderer: $LevelRenderer;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(connection: $ClientPacketListener, clientLevelData: $ClientLevel$ClientLevelData, dimension: $ResourceKey_<$Level>, dimensionType: $Holder_<$DimensionType>, viewDistance: number, serverSimulationDistance: number, profiler: $Supplier_<$ProfilerFiller>, levelRenderer: $LevelRenderer, isDebug: boolean, biomeZoomSeed: number);
        set gameTime(value: number);
        get levelData(): $ClientLevel$ClientLevelData;
        get lightUpdateQueueEmpty(): boolean;
        get entityCount(): number;
        get particleSystem(): $ParticleSystem;
        get skyFlashTime(): number;
        get connection(): $ClientPacketListener;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        setDayTime(dayTime: number): void;
        setRaining(difficultyLocked: boolean): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Get current world time
         */
        getDayTime(): number;
        setGameTime(dayTime: number): void;
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
        getHorizonHeight(level: $LevelHeightAccessor): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        setDifficultyLocked(difficultyLocked: boolean): void;
        setDifficulty(difficulty: $Difficulty_): void;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getClearColorScale(): number;
        constructor(difficulty: $Difficulty_, hardcore: boolean, isFlat: boolean);
        get hardcore(): boolean;
        get thundering(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get gameRules(): $GameRules;
        get clearColorScale(): number;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        pingServer(serverData: $ServerData, serverListUpdater: $Runnable_, stateUpdater: $Runnable_): void;
        static formatPlayerCount(players: number, capacity: number): $Component;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $DebugChunkProviderAttachments {
        updateViewRadius(viewDistance: number): void;
        updateViewCenter(x: number, z: number): void;
        drop(chunkPos: $ChunkPos): void;
        replaceWithPacketData(x: number, z: number, buffer: $FriendlyByteBuf, tag: $CompoundTag_, consumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        replaceBiomes(x: number, z: number, buffer: $FriendlyByteBuf): void;
        sable$loadedChunks(): $Collection<any>;
        lightEngine: $LevelLightEngine;
        storage: $ClientChunkCache$Storage;
        constructor(level: $ClientLevel, viewDistance: number);
    }
    export class $KnownPacksManager {
        createResourceManager(): $CloseableResourceManager;
        trySelectingPacks(packs: $List_<$KnownPack_>): $List<$KnownPack>;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>,  } | [expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>, ];
    export class $CommonListenerCookie extends $Record {
        receivedRegistries(): $RegistryAccess$Frozen;
        localGameProfile(): $GameProfile;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        enabledFeatures(): $FeatureFlagSet;
        telemetryManager(): $WorldSessionTelemetryManager;
        chatState(): $ChatComponent$State;
        serverData(): $ServerData;
        connectionType(): $ConnectionType;
        serverBrand(): string;
        serverLinks(): $ServerLinks;
        postDisconnectScreen(): $Screen;
        customReportDetails(): $Map<string, string>;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string | null, arg5: $ServerData | null, arg6: $Screen | null, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State | null, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string | null, serverData: $ServerData | null, postDisconnectScreen: $Screen | null, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State | null, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen, serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string,  } | [customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen, serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        handleKeepAlive(packet: $ClientboundKeepAlivePacket): void;
        handleTransfer(packet: $ClientboundTransferPacket_): void;
        handleStoreCookie(packet: $ClientboundStoreCookiePacket_): void;
        handleServerLinks(packet: $ClientboundServerLinksPacket_): void;
        handlePing(packet: $ClientboundPingPacket): void;
        send(packet: $Packet<never>): void;
        handleCustomPayload(packet: $ClientboundCustomPayloadPacket_): void;
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        serverBrand(): string;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        handleDisconnect(packet: $ClientboundDisconnectPacket_): void;
        handler$gkn000$essential$chat(packetIn: $Packet<any>, ci: $CallbackInfo): void;
        handleResourcePackPush(packet: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(packet: $ClientboundResourcePackPopPacket_): void;
        handleCustomReportDetails(packet: $ClientboundCustomReportDetailsPacket_): void;
        flow(): $PacketFlow;
        /**
         * {@inheritDoc}
         */
        disconnect(reason: $Component_): void;
        send(payload: $CustomPacketPayload_): void;
        /**
         * {@inheritDoc}
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(crashReport: $CrashReport): void;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        get connection(): $Connection;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $VeilClientSuggestionProvider, $SubLevelSuggestionProvider {
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        levels(): $Set<$ResourceKey<$Level>>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        hasPermission(level: number): boolean;
        getSelectedEntities(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getOnlinePlayerNames(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getSelectedSubLevel(): $SubLevel;
        getCustomTabSugggestions(): $Collection<string>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        completeCustomSuggestions(transaction: number, result: $Suggestions): void;
        modifyCustomCompletions(action: $ClientboundCustomChatCompletionsPacket$Action_, entries: $List_<string>): void;
        veil$getPostPipelineNames(): $Stream<any>;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        constructor(connection: $ClientPacketListener, minecraft: $Minecraft);
        get allTeams(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get onlinePlayerNames(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedSubLevel(): $SubLevel;
        get customTabSugggestions(): $Collection<string>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
    }
    export class $ChunkBatchSizeCalculator {
        onBatchStart(): void;
        onBatchFinished(batchSize: number): void;
        getDesiredChunksPerTick(): number;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
