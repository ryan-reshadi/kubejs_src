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
        constructor(entryData: $JsonObject_);
        constructor(user: $GameProfile, level: number, bypassesPlayerLimit: boolean);
        get level(): number;
        get bypassesPlayerLimit(): boolean;
    }
    export class $OldUsersConverter {
        static convertMobOwnerIfNecessary(server: $MinecraftServer, username: string): $UUID;
        static convertUserBanlist(server: $MinecraftServer): boolean;
        static convertIpBanlist(server: $MinecraftServer): boolean;
        static convertOpsList(server: $MinecraftServer): boolean;
        static convertWhiteList(server: $MinecraftServer): boolean;
        static convertPlayers(server: $DedicatedServer): boolean;
        static serverReadyAfterUserconversion(server: $MinecraftServer): boolean;
        static OLD_OPLIST: $File;
        static OLD_USERBANLIST: $File;
        static OLD_IPBANLIST: $File;
        static OLD_WHITELIST: $File;
        constructor();
    }
    export class $GameProfileCache {
        getAsync(name: string): $CompletableFuture<($GameProfile) | undefined>;
        get(uuid: $UUID_): ($GameProfile) | undefined;
        get(profileName: string): ($GameProfile) | undefined;
        load(): $List<$GameProfileCache$GameProfileInfo>;
        /**
         * Add an entry to this cache
         */
        add(gameProfile: $GameProfile): void;
        /**
         * Save the cached profiles to disk
         */
        save(): void;
        setExecutor(exectutor: $Executor_): void;
        static setUsesAuthentication(onlineMode: boolean): void;
        /**
         * Save the cached profiles to disk
         */
        clearExecutor(): void;
        profilesByName: $Map<string, $GameProfileCache$GameProfileInfo>;
        constructor(profileRepository: $GameProfileRepository_, file: $File_);
        set executor(value: $Executor_);
        static set usesAuthentication(value: boolean);
    }
    export class $UserBanListEntry extends $BanListEntry<$GameProfile> {
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(user: $GameProfile | null);
        constructor(entryData: $JsonObject_);
        constructor(profile: $GameProfile | null, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
    }
    export class $BanListEntry<T> extends $StoredUserEntry<T> {
        getSource(): string;
        getReason(): string;
        getDisplayName(): $Component;
        getCreated(): $Date;
        getExpires(): $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(user: T | null, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
        get source(): string;
        get reason(): string;
        get displayName(): $Component;
        get created(): $Date;
        get expires(): $Date;
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
        areEnoughSleeping(requiredSleepPercentage: number): boolean;
        areEnoughDeepSleeping(requiredSleepPercentage: number, sleepingPlayers: $List_<$ServerPlayer>): boolean;
        removeAllSleepers(): void;
        amountSleeping(): number;
        sleepersNeeded(requiredSleepPercentage: number): number;
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
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        tick(): void;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        removeAll(): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        remove(player: $ServerPlayer): void;
        load(player: $ServerPlayer): ($CompoundTag) | undefined;
        op(profile: $GameProfile): void;
        broadcastChatMessage(message: $PlayerChatMessage_, sender: $ServerPlayer, boundChatType: $ChatType$Bound_): void;
        broadcastChatMessage(message: $PlayerChatMessage_, sender: $CommandSourceStack, boundChatType: $ChatType$Bound_): void;
        respawn(player: $ServerPlayer, keepInventory: boolean, reason: $Entity$RemovalReason_): $ServerPlayer;
        getOps(): $ServerOpList;
        getServer(): $MinecraftServer;
        broadcast(except: $Player, x: number, arg2: number, y: number, arg4: number, z: $ResourceKey_<any>, arg6: $Packet<any>): void;
        isOp(profile: $GameProfile): boolean;
        /**
         * Gets the ServerPlayer object representing the player with the UUID.
         */
        getPlayer(playerUUID: $UUID_): $ServerPlayer;
        getPlayerStats(player: $Player): $ServerStatsCounter;
        getPlayerAdvancements(player: $ServerPlayer): $PlayerAdvancements;
        broadcastSystemMessage(serverMessage: $Component_, playerMessageFactory: $Function_<$ServerPlayer, $Component>, bypassHiddenChat: boolean): void;
        broadcastSystemMessage(message: $Component_, bypassHiddenChat: boolean): void;
        broadcastSystemToTeam(player: $Player, message: $Component_): void;
        broadcastSystemToAllExceptTeam(player: $Player, message: $Component_): void;
        broadcastAll(packet: $Packet<never>, dimension: $ResourceKey_<$Level>): void;
        broadcastAll(packet: $Packet<never>): void;
        sendActiveEffects(entity: $LivingEntity, connection: $ServerGamePacketListenerImpl): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendPlayerPermissionLevel(player: $ServerPlayer): void;
        /**
         * Updates the time and weather for the given player to those of the given world
         */
        sendLevelInfo(player: $ServerPlayer, level: $ServerLevel): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendAllPlayerInfo(player: $ServerPlayer): void;
        /**
         * Called when a player disconnects from the game. Writes player data to disk and removes them from the world.
         */
        sendActivePlayerEffects(player: $ServerPlayer): void;
        getBans(): $UserBanList;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getViewDistance(): number;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getSimulationDistance(): number;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        saveAll(): void;
        getPlayers(): $List<$ServerPlayer>;
        setViewDistance(simulationDistance: number): void;
        setSimulationDistance(simulationDistance: number): void;
        setAllowCommandsForAllPlayers(allowCommandsForAllPlayers: boolean): void;
        getPlayerByName(username: string): $ServerPlayer;
        setUsingWhiteList(allowCommandsForAllPlayers: boolean): void;
        /**
         * On integrated servers, returns the host's player data to be written to level.dat.
         */
        getSingleplayerData(): $CompoundTag;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getMaxPlayers(): number;
        /**
         * Returns the maximum number of players allowed on the server.
         */
        getPlayerCount(): number;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNamesArray(): string[];
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        reloadResources(): void;
        isWhiteListed(profile: $GameProfile): boolean;
        isAllowCommandsForAllPlayers(): boolean;
        deop(profile: $GameProfile): void;
        getWhiteList(): $UserWhiteList;
        addWorldborderListener(level: $ServerLevel): void;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getOpNames(): string[];
        getIpBans(): $IpBanList;
        handler$fhg001$xaerominimap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        handler$dad000$xaerolib$onSendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        getPlayersWithAddress(address: string): $List<$ServerPlayer>;
        isUsingWhitelist(): boolean;
        /**
         * Kicks everyone with "Server closed" as reason.
         */
        reloadWhiteList(): void;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getWhiteListNames(): string[];
        handler$zdl000$xaeroworldmap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        placeNewPlayer(connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_): void;
        canPlayerLogin(socketAddress: $SocketAddress, gameProfile: $GameProfile): $Component;
        canBypassPlayerLimit(profile: $GameProfile): boolean;
        getPlayerForLogin(gameProfile: $GameProfile, clientInformation: $ClientInformation_): $ServerPlayer;
        disconnectAllPlayersWithProfile(profile: $GameProfile): boolean;
        getPlayerEntityList(): $List<$ServerPlayer>;
        static WHITELIST_FILE: $File;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(server: $MinecraftServer, registries: $LayeredRegistryAccess<$RegistryLayer_>, playerIo: $PlayerDataStorage, maxPlayers: number);
        get ops(): $ServerOpList;
        get server(): $MinecraftServer;
        get bans(): $UserBanList;
        get players(): $List<$ServerPlayer>;
        set usingWhiteList(value: boolean);
        get singleplayerData(): $CompoundTag;
        get maxPlayers(): number;
        get playerCount(): number;
        get playerNamesArray(): string[];
        get whiteList(): $UserWhiteList;
        get opNames(): string[];
        get ipBans(): $IpBanList;
        get usingWhitelist(): boolean;
        get whiteListNames(): string[];
        get playerEntityList(): $List<$ServerPlayer>;
    }
    export class $StoredUserList<K, V extends $StoredUserEntry<K>> {
        getFile(): $File;
        getEntries(): $Collection<V>;
        /**
         * Adds an entry to the list
         */
        remove(entry: $StoredUserEntry<K>): void;
        remove(user: K): void;
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
        getUserList(): string[];
        constructor(file: $File_);
        get file(): $File;
        get entries(): $Collection<V>;
        get empty(): boolean;
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
        constructor(ip: string);
        constructor(entryData: $JsonObject_);
        constructor(ip: string, created: $Date | null, source: string | null, expires: $Date | null, reason: string | null);
    }
}
