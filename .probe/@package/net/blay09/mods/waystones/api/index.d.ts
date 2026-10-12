import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $WaystoneTeleportError } from "@package/net/blay09/mods/waystones/api/error";
import { $UUID, $List, $Set, $UUID_, $Set_, $Collection_ } from "@package/java/util";
import { $WarpRequirement } from "@package/net/blay09/mods/waystones/api/requirement";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as event from "@package/net/blay09/mods/waystones/api/event";
export * as error from "@package/net/blay09/mods/waystones/api/error";
export * as requirement from "@package/net/blay09/mods/waystones/api/requirement";

declare module "@package/net/blay09/mods/waystones/api" {
    export class $MutablePersonalizedWaystone {
    }
    export interface $MutablePersonalizedWaystone extends $PersonalizedWaystone {
        setHidden(arg0: boolean): void;
        setAlias(arg0: $Component_): void;
        setConfiguredGroups(arg0: $Collection_<$ResourceLocation_>): void;
        set hidden(value: boolean);
        set alias(value: $Component_);
        set configuredGroups(value: $Collection_<$ResourceLocation_>);
    }
    export class $WaystoneTeleportContext {
    }
    export interface $WaystoneTeleportContext {
        addFlags(arg0: $Set_<$ResourceLocation_>): $WaystoneTeleportContext;
        getEntity(): $Entity;
        addFlag(arg0: $ResourceLocation_): $WaystoneTeleportContext;
        getFlags(): $Set<$ResourceLocation>;
        hasFlag(arg0: $ResourceLocation_): boolean;
        setTargetWaystone(arg0: $Waystone): $WaystoneTeleportContext;
        isDimensionalTeleport(): boolean;
        setRequirements(arg0: $WarpRequirement): $WaystoneTeleportContext;
        getAdditionalEntities(): $List<$Entity>;
        getLeashedEntities(): $List<$Mob>;
        setAppliesModifiers(arg0: boolean): $WaystoneTeleportContext;
        getTargetWaystone(): $Waystone;
        addAdditionalEntity(arg0: $Entity): $WaystoneTeleportContext;
        getFromWaystone(): ($Waystone) | undefined;
        setFromWaystone(arg0: $Waystone): $WaystoneTeleportContext;
        getWarpItem(): $ItemStack;
        setWarpItem(arg0: $ItemStack_): $WaystoneTeleportContext;
        getWarpHand(): $InteractionHand;
        setWarpHand(arg0: $InteractionHand_): $WaystoneTeleportContext;
        getRequirements(): $WarpRequirement;
        playsSound(): boolean;
        setPlaysSound(arg0: boolean): $WaystoneTeleportContext;
        playsEffect(): boolean;
        setPlaysEffect(arg0: boolean): $WaystoneTeleportContext;
        appliesModifiers(): boolean;
        removeFlag(arg0: $ResourceLocation_): $WaystoneTeleportContext;
        get entity(): $Entity;
        get flags(): $Set<$ResourceLocation>;
        get dimensionalTeleport(): boolean;
        get additionalEntities(): $List<$Entity>;
        get leashedEntities(): $List<$Mob>;
    }
    export class $MutableWaystone {
    }
    export interface $MutableWaystone {
        setName(arg0: $Component_): void;
        setVisibility(arg0: $WaystoneVisibility_): void;
        setPos(arg0: $BlockPos_): void;
        setOwnerUid(arg0: $UUID_): void;
        setOwnerUsername(arg0: string): void;
        setDimension(arg0: $ResourceKey_<$Level>): void;
        setTransient(arg0: boolean): void;
        set name(value: $Component_);
        set visibility(value: $WaystoneVisibility_);
        set pos(value: $BlockPos_);
        set ownerUid(value: $UUID_);
        set ownerUsername(value: string);
        set dimension(value: $ResourceKey_<$Level>);
        set transient(value: boolean);
    }
    export class $EntityTeleportResult {
        static failed(arg0: $Entity, arg1: $TeleportDestination_, arg2: $WaystoneTeleportError): $EntityTeleportResult;
        error(): $WaystoneTeleportError;
        entity(): $Entity;
        static success(arg0: $Entity, arg1: $TeleportDestination_, arg2: $TeleportDestination_): $EntityTeleportResult;
        isSuccessful(): boolean;
        originalDestination(): $TeleportDestination;
        resolvedDestination(): $TeleportDestination;
        originalVehicle(): ($Entity) | undefined;
        passengerIndex(): number;
        withOriginalVehicle(arg0: $Entity, arg1: number): $EntityTeleportResult;
        constructor(arg0: $Entity, arg1: $TeleportDestination_, arg2: $TeleportDestination_, arg3: $WaystoneTeleportError);
        constructor(arg0: $Entity, arg1: $TeleportDestination_, arg2: $TeleportDestination_, arg3: $WaystoneTeleportError, arg4: $Entity, arg5: number);
        get successful(): boolean;
    }
    export class $Waystone {
    }
    export interface $Waystone {
        isValid(): boolean;
        getDimension(): $ResourceKey<$Level>;
        hasName(): boolean;
        getOrigin(): $WaystoneOrigin;
        isTransient(): boolean;
        getName(): $Component;
        getVisibility(): $WaystoneVisibility;
        getPos(): $BlockPos;
        isValidInLevel(arg0: $ServerLevel): boolean;
        getWaystoneType(): $ResourceLocation;
        getOwnerUid(): $UUID;
        getWaystoneUid(): $UUID;
        getEffectiveName(): $Component;
        wasGenerated(): boolean;
        isOwner(arg0: $Player): boolean;
        getOwnerUsername(): string;
        hasOwner(): boolean;
        resolveDestination(arg0: $ServerLevel): ($TeleportDestination) | undefined;
        getWaystoneGroups(): $Set<$ResourceLocation>;
        get valid(): boolean;
        get dimension(): $ResourceKey<$Level>;
        get origin(): $WaystoneOrigin;
        get transient(): boolean;
        get name(): $Component;
        get visibility(): $WaystoneVisibility;
        get pos(): $BlockPos;
        get waystoneType(): $ResourceLocation;
        get ownerUid(): $UUID;
        get waystoneUid(): $UUID;
        get effectiveName(): $Component;
        get ownerUsername(): string;
        get waystoneGroups(): $Set<$ResourceLocation>;
    }
    export class $WaystoneGroup {
    }
    export interface $WaystoneGroup {
        color(): number;
        identifier(): $ResourceLocation;
        hidden(): boolean;
        name(): $Component;
        icon(): $ResourceLocation;
        inbuilt(): boolean;
        sortIndex(): number;
    }
    export class $WaystoneVisibility extends $Enum<$WaystoneVisibility> {
        static values(): $WaystoneVisibility[];
        static valueOf(arg0: string): $WaystoneVisibility;
        static fromWaystoneType(arg0: $ResourceLocation_): $WaystoneVisibility;
        isSupportedForWaystoneType(arg0: $ResourceLocation_): boolean;
        static ORANGE_SHARESTONE: $WaystoneVisibility;
        static ACTIVATION: $WaystoneVisibility;
        static BROWN_SHARESTONE: $WaystoneVisibility;
        static GREEN_SHARESTONE: $WaystoneVisibility;
        static YELLOW_SHARESTONE: $WaystoneVisibility;
        static MAGENTA_SHARESTONE: $WaystoneVisibility;
        static LIGHT_GRAY_SHARESTONE: $WaystoneVisibility;
        static LIME_SHARESTONE: $WaystoneVisibility;
        static SHARD_ONLY: $WaystoneVisibility;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WaystoneVisibility>;
        static RED_SHARESTONE: $WaystoneVisibility;
        static BLUE_SHARESTONE: $WaystoneVisibility;
        static LIST_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$WaystoneVisibility>>;
        static LIGHT_BLUE_SHARESTONE: $WaystoneVisibility;
        static BLACK_SHARESTONE: $WaystoneVisibility;
        static GLOBAL: $WaystoneVisibility;
        static PINK_SHARESTONE: $WaystoneVisibility;
        static TEAM: $WaystoneVisibility;
        static PURPLE_SHARESTONE: $WaystoneVisibility;
        static GRAY_SHARESTONE: $WaystoneVisibility;
        static CYAN_SHARESTONE: $WaystoneVisibility;
    }
    /**
     * Values that may be interpreted as {@link $WaystoneVisibility}.
     */
    export type $WaystoneVisibility_ = "activation" | "global" | "team" | "shard_only" | "orange_sharestone" | "magenta_sharestone" | "light_blue_sharestone" | "yellow_sharestone" | "lime_sharestone" | "pink_sharestone" | "gray_sharestone" | "light_gray_sharestone" | "cyan_sharestone" | "purple_sharestone" | "blue_sharestone" | "brown_sharestone" | "green_sharestone" | "red_sharestone" | "black_sharestone";
    export class $PersonalizedWaystone {
    }
    export interface $PersonalizedWaystone extends $Waystone {
        isHidden(): boolean;
        getBackingWaystone(): $Waystone;
        getConfiguredGroups(): $Set<$ResourceLocation>;
        getAlias(): ($Component) | undefined;
        get hidden(): boolean;
        get backingWaystone(): $Waystone;
        get configuredGroups(): $Set<$ResourceLocation>;
        get alias(): ($Component) | undefined;
    }
    export class $TeleportDestination extends $Record {
        direction(): $Direction;
        level(): $Level;
        location(): $Vec3;
        constructor(level: $Level_, location: $Vec3_, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $TeleportDestination}.
     */
    export type $TeleportDestination_ = { level?: $Level_, location?: $Vec3_, direction?: $Direction_,  } | [level?: $Level_, location?: $Vec3_, direction?: $Direction_, ];
    export class $WaystoneManager {
    }
    export interface $WaystoneManager {
        getGlobalWaystones(): $List<$Waystone>;
        getWaystoneAt(arg0: $BlockGetter, arg1: $BlockPos_): ($Waystone) | undefined;
        getWaystonesByType(arg0: $ResourceLocation_): $Stream<$Waystone>;
        getWaystoneById(arg0: $UUID_): ($Waystone) | undefined;
        getWaystones(): $Stream<$Waystone>;
        findWaystoneByName(arg0: string): ($Waystone) | undefined;
        get globalWaystones(): $List<$Waystone>;
        get waystones(): $Stream<$Waystone>;
    }
    export class $WaystoneOrigin extends $Enum<$WaystoneOrigin> implements $StringRepresentable {
        static values(): $WaystoneOrigin[];
        static valueOf(arg0: string): $WaystoneOrigin;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static VILLAGE: $WaystoneOrigin;
        static PLAYER: $WaystoneOrigin;
        static DUNGEON: $WaystoneOrigin;
        static UNKNOWN: $WaystoneOrigin;
        static WILDERNESS: $WaystoneOrigin;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WaystoneOrigin}.
     */
    export type $WaystoneOrigin_ = "unknown" | "wilderness" | "dungeon" | "village" | "player";
}
