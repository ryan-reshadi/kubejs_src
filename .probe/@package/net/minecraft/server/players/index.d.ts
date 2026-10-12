import { $JsonObject_ } from "@package/com/google/gson";
import { $MinecraftServer, $PlayerAdvancements, $RegistryLayer_ } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LanConnectionsAccessor } from "@package/gg/essential/mixins/transformers/server/integrated";
import { $UUID, $List, $UUID_, $Date, $List_, $Collection, $Map } from "@package/java/util";
import { $SimpleDateFormat } from "@package/java/text";
import { $Function_ } from "@package/java/util/function";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $Connection } from "@package/net/minecraft/network";
import { $SocketAddress } from "@package/java/net";
import { $GameProfileRepository_, $GameProfile } from "@package/com/mojang/authlib";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $RuntimeException } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $File, $File_ } from "@package/java/io";
import { $Component_, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $ServerGamePacketListenerImpl, $CommonListenerCookie_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerDataStorage } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $DedicatedServer } from "@package/net/minecraft/server/dedicated";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerStatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/server/players" {
    export class $ServerOpListEntry extends $StoredUserEntry<$GameProfile> {
        /**
         * Gets the permission level of the user, as defined in the "level" attribute of the ops.json file
         */
        getLevel(): number;
        getBypassesPlayerLimit(): boolean;
        constructor(user: $GameProfile, level: number, bypassesPlayerLimit: boolean);
        constructor(entryData: $JsonObject_);
        get level(): number;
        get bypassesPlayerLimit(): boolean;
    }
    export class $OldUsersConverter {
        static convertMobOwnerIfNecessary(server: $MinecraftServer, username: string): $UUID;
        static serverReadyAfterUserconversion(server: $MinecraftServer): boolean;
        static convertPlayers(server: $DedicatedServer): boolean;
        static convertOpsList(server: $MinecraftServer): boolean;
        static convertIpBanlist(server: $MinecraftServer): boolean;
        static convertWhiteList(server: $MinecraftServer): boolean;
        static convertUserBanlist(server: $MinecraftServer): boolean;
        static OLD_OPLIST: $File;
        static OLD_USERBANLIST: $File;
        static OLD_IPBANLIST: $File;
        static OLD_WHITELIST: $File;
        constructor();
    }
    export class $GameProfileCache {
        get(profileName: string): ($GameProfile) | undefined;
        get(uuid: $UUID_): ($GameProfile) | undefined;
        load(): $List<$GameProfileCache$GameProfileInfo>;
        /**
         * Add an entry to this cache
         */
        add(gameProfile: $GameProfile): void;
        /**
         * Save the cached profiles to disk
         */
        save(): void;
        static setUsesAuthentication(onlineMode: boolean): void;
        getAsync(name: string): $CompletableFuture<($GameProfile) | undefined>;
        setExecutor(exectutor: $Executor_): void;
        /**
         * Save the cached profiles to disk
         */
        clearExecutor(): void;
        profilesByName: $Map<string, $GameProfileCache$GameProfileInfo>;
        constructor(profileRepository: $GameProfileRepository_, file: $File_);
        static set usesAuthentication(value: boolean);
        set executor(value: $Executor_);
    }
    export class $UserBanListEntry extends $BanListEntry<$GameProfile> {
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(entryData: $JsonObject_);
        constructor(profile: $GameProfile | null, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        constructor(user: $GameProfile | null);
    }
    export class $BanListEntry<T> extends $StoredUserEntry<T> {
        getDisplayName(): $Component;
        getSource(): string;
        getExpires(): $Date;
        getCreated(): $Date;
        getReason(): string;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(user: T | null, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        get displayName(): $Component;
        get source(): string;
        get expires(): $Date;
        get created(): $Date;
        get reason(): string;
    }
    export class $IpBanList extends $StoredUserList<string, $IpBanListEntry> {
        get(address: $SocketAddress): $IpBanListEntry;
        isBanned(address: $SocketAddress): boolean;
        isBanned(address: string): boolean;
        constructor(file: $File_);
    }
    export class $UserWhiteListEntry extends $StoredUserEntry<$GameProfile> {
        constructor(user: $GameProfile);
        constructor(entryData: $JsonObject_);
    }
    export class $SleepStatus {
        update(players: $List_<$ServerPlayer>): boolean;
        removeAllSleepers(): void;
        amountSleeping(): number;
        areEnoughSleeping(requiredSleepPercentage: number): boolean;
        sleepersNeeded(requiredSleepPercentage: number): number;
        areEnoughDeepSleeping(requiredSleepPercentage: number, sleepingPlayers: $List_<$ServerPlayer>): boolean;
        constructor();
    }
    export class $ServerOpList extends $StoredUserList<$GameProfile, $ServerOpListEntry> {
        canBypassPlayerLimit(profile: $GameProfile): boolean;
        constructor(file: $File_);
    }
    export class $GameProfileCache$GameProfileInfo {
        /**
         * Get the player's GameProfile
         */
        getProfile(): $GameProfile;
        setLastAccess(lastAccess: number): void;
        getLastAccess(): number;
        /**
         * Get the date that this entry will expire
         */
        getExpirationDate(): $Date;
        get profile(): $GameProfile;
        get expirationDate(): $Date;
    }
    export class $UserBanList extends $StoredUserList<$GameProfile, $UserBanListEntry> {
        isBanned(profile: $GameProfile): boolean;
        constructor(file: $File_);
    }
    export class $UserWhiteList extends $StoredUserList<$GameProfile, $UserWhiteListEntry> {
        /**
         * Returns `true` if the profile is in the whitelist.
         */
        isWhiteListed(profile: $GameProfile): boolean;
        constructor(file: $File_);
    }
    export class $PlayerList implements $LanConnectionsAccessor {
        getPlayerByName(username: string): $ServerPlayer;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        remove(player: $ServerPlayer): void;
        load(player: $ServerPlayer): ($CompoundTag) | undefined;
        op(profile: $GameProfile): void;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        removeAll(): void;
        broadcast(except: $Player, x: number, arg2: number, y: number, arg4: number, z: $ResourceKey_<any>, arg6: $Packet<any>): void;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        tick(): void;
        getBans(): $UserBanList;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        saveAll(): void;
        getPlayers(): $List<$ServerPlayer>;
        handler$fie001$xaerominimap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        handler$zdl000$xaeroworldmap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getMaxPlayers(): number;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getPlayerCount(): number;
        isWhiteListed(profile: $GameProfile): boolean;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        reloadResources(): void;
        setViewDistance(simulationDistance: number): void;
        getOps(): $ServerOpList;
        getPlayerStats(player: $Player): $ServerStatsCounter;
        broadcastSystemToAllExceptTeam(player: $Player, message: $Component_): void;
        respawn(player: $ServerPlayer, keepInventory: boolean, reason: $Entity$RemovalReason_): $ServerPlayer;
        /**
         * Gets the ServerPlayer object representing the player with the UUID.
         */
        getPlayer(playerUUID: $UUID_): $ServerPlayer;
        isOp(profile: $GameProfile): boolean;
        getServer(): $MinecraftServer;
        broadcastAll(packet: $Packet<never>, dimension: $ResourceKey_<$Level>): void;
        broadcastAll(packet: $Packet<never>): void;
        sendActiveEffects(entity: $LivingEntity, connection: $ServerGamePacketListenerImpl): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendAllPlayerInfo(player: $ServerPlayer): void;
        /**
         * Updates the time and weather for the given player to those of the given world
         */
        sendLevelInfo(player: $ServerPlayer, level: $ServerLevel): void;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getViewDistance(): number;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getSimulationDistance(): number;
        getPlayerAdvancements(player: $ServerPlayer): $PlayerAdvancements;
        broadcastSystemMessage(serverMessage: $Component_, playerMessageFactory: $Function_<$ServerPlayer, $Component>, bypassHiddenChat: boolean): void;
        broadcastSystemMessage(message: $Component_, bypassHiddenChat: boolean): void;
        broadcastSystemToTeam(player: $Player, message: $Component_): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendActivePlayerEffects(player: $ServerPlayer): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendPlayerPermissionLevel(player: $ServerPlayer): void;
        isAllowCommandsForAllPlayers(): boolean;
        setAllowCommandsForAllPlayers(allowCommandsForAllPlayers: boolean): void;
        getWhiteList(): $UserWhiteList;
        setUsingWhiteList(allowCommandsForAllPlayers: boolean): void;
        addWorldborderListener(level: $ServerLevel): void;
        /**
         * On integrated servers, returns the host's player data to be written to level.dat.
         */
        getSingleplayerData(): $CompoundTag;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNamesArray(): string[];
        setSimulationDistance(simulationDistance: number): void;
        deop(profile: $GameProfile): void;
        broadcastChatMessage(message: $PlayerChatMessage_, sender: $ServerPlayer, boundChatType: $ChatType$Bound_): void;
        broadcastChatMessage(message: $PlayerChatMessage_, sender: $CommandSourceStack, boundChatType: $ChatType$Bound_): void;
        placeNewPlayer(connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_): void;
        getPlayerForLogin(gameProfile: $GameProfile, clientInformation: $ClientInformation_): $ServerPlayer;
        canPlayerLogin(socketAddress: $SocketAddress, gameProfile: $GameProfile): $Component;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getWhiteListNames(): string[];
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        reloadWhiteList(): void;
        isUsingWhitelist(): boolean;
        getIpBans(): $IpBanList;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getOpNames(): string[];
        handler$dbb000$xaerolib$onSendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        disconnectAllPlayersWithProfile(profile: $GameProfile): boolean;
        getPlayersWithAddress(address: string): $List<$ServerPlayer>;
        canBypassPlayerLimit(profile: $GameProfile): boolean;
        getPlayerEntityList(): $List<$ServerPlayer>;
        static WHITELIST_FILE: $File;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(server: $MinecraftServer, registries: $LayeredRegistryAccess<$RegistryLayer_>, playerIo: $PlayerDataStorage, maxPlayers: number);
        get bans(): $UserBanList;
        get players(): $List<$ServerPlayer>;
        get maxPlayers(): number;
        get playerCount(): number;
        get ops(): $ServerOpList;
        get server(): $MinecraftServer;
        get whiteList(): $UserWhiteList;
        set usingWhiteList(value: boolean);
        get singleplayerData(): $CompoundTag;
        get playerNamesArray(): string[];
        get whiteListNames(): string[];
        get usingWhitelist(): boolean;
        get ipBans(): $IpBanList;
        get opNames(): string[];
        get playerEntityList(): $List<$ServerPlayer>;
    }
    export class $StoredUserList<K, V extends $StoredUserEntry<K>> {
        remove(user: K): void;
        /**
         * Adds an entry to the list
         */
        remove(entry: $StoredUserEntry<K>): void;
        get(obj: K): V;
        /**
         * Removes expired bans from the list. See `BanEntry#hasBanExpired`
         */
        load(): void;
        isEmpty(): boolean;
        /**
         * Adds an entry to the list
         */
        add(entry: V): void;
        /**
         * Removes expired bans from the list. See `BanEntry#hasBanExpired`
         */
        save(): void;
        getFile(): $File;
        getEntries(): $Collection<V>;
        getUserList(): string[];
        constructor(file: $File_);
        get empty(): boolean;
        get file(): $File;
        get entries(): $Collection<V>;
        get userList(): string[];
    }
    export class $StoredUserEntry<T> {
        constructor(user: T | null);
    }
    export class $OldUsersConverter$ConversionError extends $RuntimeException {
    }
    export class $IpBanListEntry extends $BanListEntry<string> {
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(entryData: $JsonObject_);
        constructor(ip: string, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        constructor(ip: string);
    }
}
