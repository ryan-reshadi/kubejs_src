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
import { $LevelChunk, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
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
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetTitleTextPacket_, $ClientboundSetActionBarTextPacket_, $ClientboundTickingStatePacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundPlayerLookAtPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundTakeItemEntityPacket, $ClientboundSetExperiencePacket, $ClientboundStartConfigurationPacket, $ClientboundLightUpdatePacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundBlockChangedAckPacket_, $ClientboundStopSoundPacket, $ClientboundRemoveEntitiesPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundPlayerPositionPacket, $ClientboundRespawnPacket_, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundRecipePacket, $ClientboundAwardStatsPacket_, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundContainerClosePacket, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetEntityDataPacket_, $ClientboundSetObjectivePacket, $ClientboundPlaceGhostRecipePacket, $ClientboundSetTitlesAnimationPacket, $ClientboundHorseScreenOpenPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelParticlesPacket, $ClientboundLevelEventPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundClearTitlesPacket, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundProjectilePowerPacket, $ClientboundSetScorePacket_, $ClientboundMerchantOffersPacket, $ClientboundTeleportEntityPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundOpenScreenPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundMoveVehiclePacket, $ClientboundBlockEventPacket, $ClientboundPlayerAbilitiesPacket } from "@package/net/minecraft/network/protocol/game";
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
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
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
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        constructor(player: $LocalPlayer, level: $ClientLevel, levelRenderer: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler, $NetHandlerPlayClientExt {
        levels(): $Set<$ResourceKey<$Level>>;
        tick(): void;
        getLevel(): $ClientLevel;
        getEssential$maxPlayers(): number;
        clearLevel(): void;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        getId(): $UUID;
        close(): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        updateSearchTrees(): void;
        sendUnsignedCommand(command: string): boolean;
        scoreboard(): $Scoreboard;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing, ...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        /**
         * Registers some server properties (gametype, hardcore-mode, terraintype, difficulty, player limit), creates a new WorldClient and sets the player initial dimension.
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        handleCustomPayload(payload: $CustomPacketPayload_): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        getRecipeManager(): $RecipeManager;
        potionBrewing(): $PotionBrewing;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        sendCommand(message: string): void;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        serverLinks(): $ServerLinks;
        setKeyPair(keyPair: $ProfileKeyPair_): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        isFeatureEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        getLocalGameProfile(): $GameProfile;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        /**
         * Gets the client's description information about another player on the server.
         */
        getPlayerInfo(name: string): $PlayerInfo;
        getPlayerInfo(uniqueId: $UUID_): $PlayerInfo;
        sendChat(message: string): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        getDebugQueryHandler(): $DebugQueryHandler;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        getXaero_minimapSession(): $XaeroMinimapSession;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        /**
         * Updates the specified entity's position by the specified relative momentum and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        getEssential$ingameEquippedOutfitsManager(): $IngameEquippedOutfitsManager;
        getEssential$ingameEquippedOutfitsUpdateEncoder(): $IngameEquippedOutfitsUpdateEncoder;
        essential$getNameIdCache(): $Map<any, any>;
        getXaero_serverChunkRadius(): number;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        handler$zdn000$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$fhm001$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        handler$zdn000$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handler$fhm001$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        handler$zdn000$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$fhm001$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        handler$zdn000$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$fhm001$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        handler$zdn000$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$fhm001$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        handler$zdn000$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$fhm001$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handler$dae000$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        handler$zdn000$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$fhm001$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        searchTrees(): $SessionSearchTrees;
        kjs$sessionData(): $KubeSessionData;
        handler$zki000$bookshelf$onInit(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_, arg3: $CallbackInfo): void;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        handler$zdn000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$fhm001$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$zdp000$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$fhm001$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        handler$fhm000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$fhm000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        getXaero_worldmapSession(): $WorldMapSession;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        markMessageAsProcessed(chatMessage: $PlayerChatMessage_, acknowledged: boolean): void;
        catnip$getServerChunkRadius(): number;
        serverChunkRadius: number;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get level(): $ClientLevel;
        get essential$maxPlayers(): number;
        get serverData(): $ServerData;
        get id(): $UUID;
        get advancements(): $ClientAdvancements;
        get recipeManager(): $RecipeManager;
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        set keyPair(value: $ProfileKeyPair_);
        get localGameProfile(): $GameProfile;
        get debugQueryHandler(): $DebugQueryHandler;
        set titleText(value: $ClientboundSetTitleTextPacket_);
        get essential$ingameEquippedOutfitsManager(): $IngameEquippedOutfitsManager;
        get essential$ingameEquippedOutfitsUpdateEncoder(): $IngameEquippedOutfitsUpdateEncoder;
        get xaero_serverChunkRadius(): number;
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        get suggestionsProvider(): $ClientSuggestionProvider;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
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
        copyFrom(serverData: $ServerData): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isRealm(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isLan(): boolean;
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
        setResourcePackStatus(packStatus: $ServerData$ServerPackStatus_): void;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        copyNameIconFrom(serverData: $ServerData): void;
        getIconBytes(): number[];
        /**
         * Returns `true` if the server is a LAN server.
         */
        getEssential$isTrusted(): boolean;
        setEssential$isTrusted(isTrusted: boolean): void;
        getEssential$pingRegion(): string;
        setEssential$pingRegion(pingRegion: string): void;
        getEssential$pingOverride(): number;
        setEssential$pingOverride(pingOverride: number): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        getEssential$skipModCompatCheck(): boolean;
        setEssential$skipModCompatCheck(skipModCompatCheck: boolean): void;
        getEssential$shareWithFriends(): boolean;
        setEssential$shareWithFriends(shareWithFriends: boolean): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        getEssential$showDownloadIcon(): boolean;
        setEssential$showDownloadIcon(showDownloadIcon: boolean): void;
        getEssential$recommendedVersion(): string;
        setEssential$recommendedVersion(recommendedVersion: string): void;
        static validateIcon(icon: number[] | null): number[];
        setIconBytes(iconBytes: number[] | null): void;
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
        get realm(): boolean;
        get lan(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        constructor(address: $ServerAddress, output: $LegacyServerPinger$Output_);
    }
    export class $ServerList implements $ServerListAccessor {
        /**
         * Takes two list indexes, and swaps their order around.
         */
        swap(pos1: number, pos2: number): void;
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
        getLatency(): number;
        /**
         * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
         */
        getProfile(): $GameProfile;
        getTeam(): $PlayerTeam;
        getTabListDisplayName(): $Component;
        getChatSession(): $RemoteChatSession;
        getGameMode(): $GameType;
        getSkin(): $PlayerSkin;
        setEssential$equippedOutfitsManager(equippedOutfitsManager: $EquippedOutfitsManager): void;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(displayName: $Component_ | null): void;
        hasVerifiableChat(): boolean;
        handler$gje000$essential$getSkinTextures(info: $CallbackInfoReturnable<any>): void;
        getEssential$equippedOutfitsManager(): $EquippedOutfitsManager;
        constructor(profile: $GameProfile, enforeSecureChat: boolean);
        get latency(): number;
        get profile(): $GameProfile;
        get team(): $PlayerTeam;
        get chatSession(): $RemoteChatSession;
        get gameMode(): $GameType;
        get skin(): $PlayerSkin;
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
        recipes(): $SearchTree<$RecipeCollection>;
        updateRecipes(recipeBook: $ClientRecipeBook, registries: $RegistryAccess$Frozen): void;
        updateCreativeTags(items: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
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
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { id?: $UUID_, hash?: string, url?: $URL,  } | [id?: $UUID_, hash?: string, url?: $URL, ];
    export class $ClientAdvancements {
        getTree(): $AdvancementTree;
        get(id: $ResourceLocation_): $AdvancementHolder;
        update(packet: $ClientboundUpdateAdvancementsPacket): void;
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
        handlePickItem(index: number): void;
        handlePlaceRecipe(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean): void;
        continueDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Syncs the current player item with the server
         */
        stopDestroyBlock(): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasMissTime(): boolean;
        /**
         * Attacks an entity
         */
        attack(player: $Player, targetEntity: $Entity): void;
        startDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        isDestroying(): boolean;
        /**
         * Handles right-clicking an entity from the entities side, sends a packet to the server.
         */
        interactAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_): $InteractionResult;
        /**
         * Handles right-clicking an entity, sends a packet to the server.
         */
        interact(player: $Player, target: $Entity, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult): $InteractionResult;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasInfiniteItems(): boolean;
        useItem(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Returns `true` if player is in creative mode.
         */
        isServerControlledInventory(): boolean;
        /**
         * Sets player capabilities depending on current gametype.
         */
        releaseUsingItem(player: $Player): void;
        destroyBlock(pos: $BlockPos_): boolean;
        getPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        isAlwaysFlying(): boolean;
        handleInventoryMouseClick(containerId: number, slotId: number, mouseButton: number, clickType: $ClickType_, player: $Player): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        getPreviousPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        canHurtPlayer(): boolean;
        getDestroyStage(): number;
        /**
         * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
         */
        handleInventoryButtonClick(containerId: number, buttonId: number): void;
        /**
         * Sends a Packet107 to the server to drop the item on the ground
         */
        handleCreativeModeItemDrop(stack: $ItemStack_): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasExperience(): boolean;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook): $LocalPlayer;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean): $LocalPlayer;
        /**
         * Sets player capabilities depending on current gametype.
         */
        adjustPlayer(player: $Player): void;
        /**
         * Sets the game type for the player.
         */
        setLocalMode(type: $GameType_): void;
        setLocalMode(localPlayerMode: $GameType_, previousLocalPlayerMode: $GameType_ | null): void;
        destroyBlockPos: $BlockPos;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(minecraft: $Minecraft, connection: $ClientPacketListener);
        get destroying(): boolean;
        get serverControlledInventory(): boolean;
        get playerMode(): $GameType;
        get alwaysFlying(): boolean;
        get previousPlayerMode(): $GameType;
        get destroyStage(): number;
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
        isAcceptingMessages(): boolean;
        handleHello(packet: $ClientboundHelloPacket): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        setMinigameName(minigameName: string | null): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
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
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        unload(chunk: $LevelChunk): void;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $ClientLevel$ClientLevelData;
        /**
         * If on MP, sends a quitting packet.
         */
        tickEntities(): void;
        animateTick(posX: number, posY: number, posZ: number): void;
        sable$getPlotContainer(): $SubLevelContainer;
        effects(): $DimensionSpecialEffects;
        removeEntity(entityId: number, reason: $Entity$RemovalReason_): void;
        getSkyDarken(partialTick: number): number;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        xaerolib_getData(): $ClientLevelData;
        xaerolib_setData(arg0: $ClientLevelData): void;
        /**
         * Sets the world time.
         */
        setGameTime(time: number): void;
        /**
         * Sets the world time.
         */
        setDayTime(time: number): void;
        tickNonPassenger(entity: $Entity): void;
        addEntity(entity: $Entity): void;
        setDefaultSpawnPos(spawnPos: $BlockPos_, spawnAngle: number): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        getEntityCount(): number;
        getSkyColor(pos: $Vec3_, partialTick: number): $Vec3;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        /**
         * If on MP, sends a quitting packet.
         */
        sable$popPoseSupplier(): void;
        handleBlockChangedAck(sequence: number): void;
        setServerVerifiedBlockState(pos: $BlockPos_, state: $BlockState_, flags: number): void;
        syncBlockState(pos: $BlockPos_, state: $BlockState_, playerPos: $Vec3_): void;
        queueLightUpdate(task: $Runnable_): void;
        /**
         * If on MP, sends a quitting packet.
         */
        pollLightUpdates(): void;
        isLightUpdateQueueEmpty(): boolean;
        entitiesForRendering(): $Iterable<$Entity>;
        onChunkLoaded(chunkPos: $ChunkPos): void;
        /**
         * If on MP, sends a quitting packet.
         */
        clearTintCaches(): void;
        doAnimateTick(posX: number, posY: number, posZ: number, range: number, random: $RandomSource, block: $Block_ | null, blockPos: $BlockPos$MutableBlockPos): void;
        handler$elf000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        overrideMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        setSectionDirtyWithNeighbors(posX: number, posY: number, posZ: number): void;
        getSkyFlashTime(): number;
        getCloudColor(partialTick: number): $Vec3;
        getStarBrightness(partialTick: number): number;
        calculateBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        setServerSimulationDistance(sequence: number): void;
        getServerSimulationDistance(): number;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        sodium$getBiomeZoomSeed(): number;
        sodium$getTracker(): $ChunkTracker;
        getXaero_minimapData(): $MinimapClientWorldData;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        getParticleSystem(): $ParticleSystem;
        self(): $EntityGetter;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        getConnection(): $ClientPacketListener;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getLevelRenderer(): $LevelRenderer;
        waystones$getTickingEntities(): $EntityTickList;
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
        get levelData(): $ClientLevel$ClientLevelData;
        set gameTime(value: number);
        get entityCount(): number;
        get lightUpdateQueueEmpty(): boolean;
        get skyFlashTime(): number;
        get particleSystem(): $ParticleSystem;
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
        getClearColorScale(): number;
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
        setGameTime(dayTime: number): void;
        setRaining(difficultyLocked: boolean): void;
        setDayTime(dayTime: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        setDifficulty(difficulty: $Difficulty_): void;
        setDifficultyLocked(difficultyLocked: boolean): void;
        getHorizonHeight(level: $LevelHeightAccessor): number;
        constructor(difficulty: $Difficulty_, hardcore: boolean, isFlat: boolean);
        get clearColorScale(): number;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
    }
    export class $ServerStatusPinger {
        tick(): void;
        removeAll(): void;
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
        drop(chunkPos: $ChunkPos): void;
        replaceWithPacketData(x: number, z: number, buffer: $FriendlyByteBuf, tag: $CompoundTag_, consumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        replaceBiomes(x: number, z: number, buffer: $FriendlyByteBuf): void;
        updateViewRadius(viewDistance: number): void;
        updateViewCenter(x: number, z: number): void;
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
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number,  } | [packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number, ];
    export class $CommonListenerCookie extends $Record {
        enabledFeatures(): $FeatureFlagSet;
        serverData(): $ServerData;
        telemetryManager(): $WorldSessionTelemetryManager;
        connectionType(): $ConnectionType;
        serverLinks(): $ServerLinks;
        serverBrand(): string;
        localGameProfile(): $GameProfile;
        receivedRegistries(): $RegistryAccess$Frozen;
        chatState(): $ChatComponent$State;
        postDisconnectScreen(): $Screen;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        customReportDetails(): $Map<string, string>;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string | null, arg5: $ServerData | null, arg6: $Screen | null, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State | null, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string | null, serverData: $ServerData | null, postDisconnectScreen: $Screen | null, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State | null, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, serverBrand?: string, connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen,  } | [telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, serverBrand?: string, connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        send(packet: $Packet<never>): void;
        handleCustomPayload(packet: $ClientboundCustomPayloadPacket_): void;
        serverBrand(): string;
        handleDisconnect(packet: $ClientboundDisconnectPacket_): void;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleKeepAlive(packet: $ClientboundKeepAlivePacket): void;
        handlePing(packet: $ClientboundPingPacket): void;
        handleResourcePackPush(packet: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(packet: $ClientboundResourcePackPopPacket_): void;
        handleStoreCookie(packet: $ClientboundStoreCookiePacket_): void;
        handleTransfer(packet: $ClientboundTransferPacket_): void;
        handleCustomReportDetails(packet: $ClientboundCustomReportDetailsPacket_): void;
        handleServerLinks(packet: $ClientboundServerLinksPacket_): void;
        handler$gjg000$essential$chat(packetIn: $Packet<any>, ci: $CallbackInfo): void;
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
        hasChannel(payload: $CustomPacketPayload_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        get connection(): $Connection;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $VeilClientSuggestionProvider, $SubLevelSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        registryAccess(): $RegistryAccess;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getCustomTabSugggestions(): $Collection<string>;
        enabledFeatures(): $FeatureFlagSet;
        getOnlinePlayerNames(): $Collection<string>;
        getSelectedEntities(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        hasPermission(level: number): boolean;
        getSelectedSubLevel(): $SubLevel;
        getAllTeams(): $Collection<string>;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        completeCustomSuggestions(transaction: number, result: $Suggestions): void;
        modifyCustomCompletions(action: $ClientboundCustomChatCompletionsPacket$Action_, entries: $List_<string>): void;
        veil$getPostPipelineNames(): $Stream<any>;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        constructor(connection: $ClientPacketListener, minecraft: $Minecraft);
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedSubLevel(): $SubLevel;
        get allTeams(): $Collection<string>;
    }
    export class $ChunkBatchSizeCalculator {
        onBatchStart(): void;
        onBatchFinished(batchSize: number): void;
        getDesiredChunksPerTick(): number;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
