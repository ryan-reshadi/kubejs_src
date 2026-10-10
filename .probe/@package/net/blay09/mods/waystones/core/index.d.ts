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
        isValid(): boolean;
        getDimension(): $ResourceKey<$Level>;
        getOrigin(): $WaystoneOrigin;
        isTransient(): boolean;
        getName(): $Component;
        static write(arg0: $Waystone, arg1: $CompoundTag_, arg2: $HolderLookup$Provider): $CompoundTag;
        static write(arg0: $RegistryFriendlyByteBuf, arg1: $Waystone): void;
        static read(arg0: $RegistryFriendlyByteBuf): $Waystone;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $Waystone;
        setName(arg0: $Component_): void;
        getVisibility(): $WaystoneVisibility;
        setVisibility(arg0: $WaystoneVisibility_): void;
        static readList(arg0: $RegistryFriendlyByteBuf): $List<$Waystone>;
        setPos(arg0: $BlockPos_): void;
        getPos(): $BlockPos;
        setOwnerUid(arg0: $UUID_): void;
        setOwnerUsername(arg0: string): void;
        isValidInLevel(arg0: $ServerLevel): boolean;
        getWaystoneType(): $ResourceLocation;
        getOwnerUid(): $UUID;
        setDimension(arg0: $ResourceKey_<$Level>): void;
        setTransient(arg0: boolean): void;
        getWaystoneUid(): $UUID;
        isOwner(arg0: $Player): boolean;
        getOwnerUsername(): string;
        static writeList(arg0: $RegistryFriendlyByteBuf, arg1: $Collection_<$Waystone>): void;
        hasName(): boolean;
        getEffectiveName(): $Component;
        wasGenerated(): boolean;
        hasOwner(): boolean;
        resolveDestination(arg0: $ServerLevel): ($TeleportDestination) | undefined;
        getWaystoneGroups(): $Set<$ResourceLocation>;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Collection<$Waystone>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Waystone>;
        constructor(arg0: $ResourceLocation_, arg1: $UUID_, arg2: $ResourceKey_<$Level>, arg3: $BlockPos_, arg4: $WaystoneOrigin_, arg5: $UUID_);
        constructor(arg0: $ResourceLocation_, arg1: $UUID_, arg2: $ResourceKey_<$Level>, arg3: $BlockPos_, arg4: $WaystoneOrigin_, arg5: $UUID_, arg6: string);
        get valid(): boolean;
        get origin(): $WaystoneOrigin;
        get waystoneType(): $ResourceLocation;
        get waystoneUid(): $UUID;
        get effectiveName(): $Component;
        get waystoneGroups(): $Set<$ResourceLocation>;
    }
    export class $WaystoneTeleportedEntity {
    }
    export interface $WaystoneTeleportedEntity {
        waystones$markTeleportedByWaystone(): void;
        waystones$consumeTeleportedByWaystone(): boolean;
        waystones$getTicksPassedOnWarpPlate(): number;
        waystones$setTicksPassedOnWarpPlate(arg0: number): void;
        waystones$getTicksPassedSinceWarpPlate(): number;
        waystones$setTicksPassedSinceWarpPlate(arg0: number): void;
        waystones$getLastWarpPlate(): $WarpPlateBlockEntity;
        waystones$setLastWarpPlate(arg0: $WarpPlateBlockEntity): void;
    }
    export class $WaystoneManagerImpl extends $SavedData implements $WaystoneManager {
        static get(arg0: $MinecraftServer): $WaystoneManagerImpl;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $WaystoneManagerImpl;
        getGlobalWaystones(): $List<$Waystone>;
        getWaystoneAt(arg0: $BlockGetter, arg1: $BlockPos_): ($Waystone) | undefined;
        getWaystonesByType(arg0: $ResourceLocation_): $Stream<$Waystone>;
        getWaystoneById(arg0: $UUID_): ($Waystone) | undefined;
        getWaystones(): $Stream<$Waystone>;
        removeWaystone(arg0: $Waystone): void;
        addWaystone(arg0: $Waystone): void;
        updateWaystone(arg0: $Waystone): void;
        findWaystoneByName(arg0: string): ($Waystone) | undefined;
        constructor();
        get globalWaystones(): $List<$Waystone>;
        get waystones(): $Stream<$Waystone>;
    }
}
