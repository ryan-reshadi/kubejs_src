import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Waystone, $WaystoneOrigin, $MutableWaystone, $TeleportDestination, $WaystoneManager, $WaystoneVisibility_, $WaystoneVisibility, $WaystoneOrigin_ } from "@package/net/blay09/mods/waystones/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $UUID, $List, $Set, $UUID_, $Collection_, $Collection } from "@package/java/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $WarpPlateBlockEntity } from "@package/net/blay09/mods/waystones/block/entity";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/blay09/mods/waystones/core" {
    export class $WaystoneImpl implements $Waystone, $MutableWaystone {
        getName(): $Component;
        static write(arg0: $Waystone, arg1: $CompoundTag_, arg2: $HolderLookup$Provider): $CompoundTag;
        static write(arg0: $RegistryFriendlyByteBuf, arg1: $Waystone): void;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $Waystone;
        static read(arg0: $RegistryFriendlyByteBuf): $Waystone;
        setName(arg0: $Component_): void;
        isTransient(): boolean;
        isValid(): boolean;
        isOwner(arg0: $Player): boolean;
        getWaystoneUid(): $UUID;
        getDimension(): $ResourceKey<$Level>;
        getOrigin(): $WaystoneOrigin;
        static readList(arg0: $RegistryFriendlyByteBuf): $List<$Waystone>;
        setVisibility(arg0: $WaystoneVisibility_): void;
        getVisibility(): $WaystoneVisibility;
        setPos(arg0: $BlockPos_): void;
        isValidInLevel(arg0: $ServerLevel): boolean;
        getPos(): $BlockPos;
        getWaystoneType(): $ResourceLocation;
        static writeList(arg0: $RegistryFriendlyByteBuf, arg1: $Collection_<$Waystone>): void;
        setDimension(arg0: $ResourceKey_<$Level>): void;
        setTransient(arg0: boolean): void;
        getOwnerUid(): $UUID;
        getOwnerUsername(): string;
        setOwnerUsername(arg0: string): void;
        setOwnerUid(arg0: $UUID_): void;
        hasOwner(): boolean;
        hasName(): boolean;
        getWaystoneGroups(): $Set<$ResourceLocation>;
        resolveDestination(arg0: $ServerLevel): ($TeleportDestination) | undefined;
        getEffectiveName(): $Component;
        wasGenerated(): boolean;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Collection<$Waystone>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Waystone>;
        constructor(arg0: $ResourceLocation_, arg1: $UUID_, arg2: $ResourceKey_<$Level>, arg3: $BlockPos_, arg4: $WaystoneOrigin_, arg5: $UUID_);
        constructor(arg0: $ResourceLocation_, arg1: $UUID_, arg2: $ResourceKey_<$Level>, arg3: $BlockPos_, arg4: $WaystoneOrigin_, arg5: $UUID_, arg6: string);
        get valid(): boolean;
        get waystoneUid(): $UUID;
        get origin(): $WaystoneOrigin;
        get waystoneType(): $ResourceLocation;
        get waystoneGroups(): $Set<$ResourceLocation>;
        get effectiveName(): $Component;
    }
    export class $WaystoneTeleportedEntity {
    }
    export interface $WaystoneTeleportedEntity {
        waystones$markTeleportedByWaystone(): void;
        waystones$setTicksPassedOnWarpPlate(arg0: number): void;
        waystones$getTicksPassedOnWarpPlate(): number;
        waystones$getTicksPassedSinceWarpPlate(): number;
        waystones$setTicksPassedSinceWarpPlate(arg0: number): void;
        waystones$consumeTeleportedByWaystone(): boolean;
        waystones$getLastWarpPlate(): $WarpPlateBlockEntity;
        waystones$setLastWarpPlate(arg0: $WarpPlateBlockEntity): void;
    }
    export class $WaystoneManagerImpl extends $SavedData implements $WaystoneManager {
        static get(arg0: $MinecraftServer): $WaystoneManagerImpl;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $WaystoneManagerImpl;
        updateWaystone(arg0: $Waystone): void;
        getWaystoneAt(arg0: $BlockGetter, arg1: $BlockPos_): ($Waystone) | undefined;
        getWaystonesByType(arg0: $ResourceLocation_): $Stream<$Waystone>;
        removeWaystone(arg0: $Waystone): void;
        getWaystones(): $Stream<$Waystone>;
        getWaystoneById(arg0: $UUID_): ($Waystone) | undefined;
        addWaystone(arg0: $Waystone): void;
        findWaystoneByName(arg0: string): ($Waystone) | undefined;
        getGlobalWaystones(): $List<$Waystone>;
        constructor();
        get waystones(): $Stream<$Waystone>;
        get globalWaystones(): $List<$Waystone>;
    }
}
