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
        setConfiguredGroups(arg0: $Collection_<$ResourceLocation_>): void;
        setAlias(arg0: $Component_): void;
        set hidden(value: boolean);
        set configuredGroups(value: $Collection_<$ResourceLocation_>);
        set alias(value: $Component_);
    }
    export class $WaystoneTeleportContext {
    }
    export interface $WaystoneTeleportContext {
        addFlag(arg0: $ResourceLocation_): $WaystoneTeleportContext;
        getFlags(): $Set<$ResourceLocation>;
        getEntity(): $Entity;
        addFlags(arg0: $Set_<$ResourceLocation_>): $WaystoneTeleportContext;
        hasFlag(arg0: $ResourceLocation_): boolean;
        getWarpItem(): $ItemStack;
        getWarpHand(): $InteractionHand;
        getLeashedEntities(): $List<$Mob>;
        setWarpHand(arg0: $InteractionHand_): $WaystoneTeleportContext;
        setWarpItem(arg0: $ItemStack_): $WaystoneTeleportContext;
        setPlaysEffect(arg0: boolean): $WaystoneTeleportContext;
        playsEffect(): boolean;
        getFromWaystone(): ($Waystone) | undefined;
        setPlaysSound(arg0: boolean): $WaystoneTeleportContext;
        getRequirements(): $WarpRequirement;
        appliesModifiers(): boolean;
        setRequirements(arg0: $WarpRequirement): $WaystoneTeleportContext;
        getTargetWaystone(): $Waystone;
        setTargetWaystone(arg0: $Waystone): $WaystoneTeleportContext;
        setFromWaystone(arg0: $Waystone): $WaystoneTeleportContext;
        playsSound(): boolean;
        removeFlag(arg0: $ResourceLocation_): $WaystoneTeleportContext;
        getAdditionalEntities(): $List<$Entity>;
        setAppliesModifiers(arg0: boolean): $WaystoneTeleportContext;
        addAdditionalEntity(arg0: $Entity): $WaystoneTeleportContext;
        isDimensionalTeleport(): boolean;
        get flags(): $Set<$ResourceLocation>;
        get entity(): $Entity;
        get leashedEntities(): $List<$Mob>;
        get additionalEntities(): $List<$Entity>;
        get dimensionalTeleport(): boolean;
    }
    export class $MutableWaystone {
    }
    export interface $MutableWaystone {
        setName(arg0: $Component_): void;
        setVisibility(arg0: $WaystoneVisibility_): void;
        setPos(arg0: $BlockPos_): void;
        setDimension(arg0: $ResourceKey_<$Level>): void;
        setTransient(arg0: boolean): void;
        setOwnerUsername(arg0: string): void;
        setOwnerUid(arg0: $UUID_): void;
        set name(value: $Component_);
        set visibility(value: $WaystoneVisibility_);
        set pos(value: $BlockPos_);
        set dimension(value: $ResourceKey_<$Level>);
        set transient(value: boolean);
        set ownerUsername(value: string);
        set ownerUid(value: $UUID_);
    }
    export class $EntityTeleportResult {
        error(): $WaystoneTeleportError;
        static success(arg0: $Entity, arg1: $TeleportDestination_, arg2: $TeleportDestination_): $EntityTeleportResult;
        entity(): $Entity;
        isSuccessful(): boolean;
        static failed(arg0: $Entity, arg1: $TeleportDestination_, arg2: $WaystoneTeleportError): $EntityTeleportResult;
        originalVehicle(): ($Entity) | undefined;
        passengerIndex(): number;
        originalDestination(): $TeleportDestination;
        resolvedDestination(): $TeleportDestination;
        withOriginalVehicle(arg0: $Entity, arg1: number): $EntityTeleportResult;
        constructor(arg0: $Entity, arg1: $TeleportDestination_, arg2: $TeleportDestination_, arg3: $WaystoneTeleportError);
        constructor(arg0: $Entity, arg1: $TeleportDestination_, arg2: $TeleportDestination_, arg3: $WaystoneTeleportError, arg4: $Entity, arg5: number);
        get successful(): boolean;
    }
    export class $Waystone {
    }
    export interface $Waystone {
        getName(): $Component;
        isTransient(): boolean;
        isValid(): boolean;
        isOwner(arg0: $Player): boolean;
        hasOwner(): boolean;
        getWaystoneUid(): $UUID;
        getDimension(): $ResourceKey<$Level>;
        getOrigin(): $WaystoneOrigin;
        getVisibility(): $WaystoneVisibility;
        hasName(): boolean;
        isValidInLevel(arg0: $ServerLevel): boolean;
        getPos(): $BlockPos;
        getWaystoneType(): $ResourceLocation;
        getWaystoneGroups(): $Set<$ResourceLocation>;
        resolveDestination(arg0: $ServerLevel): ($TeleportDestination) | undefined;
        getOwnerUid(): $UUID;
        getEffectiveName(): $Component;
        wasGenerated(): boolean;
        getOwnerUsername(): string;
        get name(): $Component;
        get transient(): boolean;
        get valid(): boolean;
        get waystoneUid(): $UUID;
        get dimension(): $ResourceKey<$Level>;
        get origin(): $WaystoneOrigin;
        get visibility(): $WaystoneVisibility;
        get pos(): $BlockPos;
        get waystoneType(): $ResourceLocation;
        get waystoneGroups(): $Set<$ResourceLocation>;
        get ownerUid(): $UUID;
        get effectiveName(): $Component;
        get ownerUsername(): string;
    }
    export class $WaystoneGroup {
    }
    export interface $WaystoneGroup {
        name(): $Component;
        color(): number;
        inbuilt(): boolean;
        sortIndex(): number;
        identifier(): $ResourceLocation;
        hidden(): boolean;
        icon(): $ResourceLocation;
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
        getAlias(): ($Component) | undefined;
        getConfiguredGroups(): $Set<$ResourceLocation>;
        getBackingWaystone(): $Waystone;
        get hidden(): boolean;
        get alias(): ($Component) | undefined;
        get configuredGroups(): $Set<$ResourceLocation>;
        get backingWaystone(): $Waystone;
    }
    export class $TeleportDestination extends $Record {
        location(): $Vec3;
        direction(): $Direction;
        level(): $Level;
        constructor(level: $Level_, location: $Vec3_, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $TeleportDestination}.
     */
    export type $TeleportDestination_ = { level?: $Level_, direction?: $Direction_, location?: $Vec3_,  } | [level?: $Level_, direction?: $Direction_, location?: $Vec3_, ];
    export class $WaystoneManager {
    }
    export interface $WaystoneManager {
        getWaystoneAt(arg0: $BlockGetter, arg1: $BlockPos_): ($Waystone) | undefined;
        getWaystonesByType(arg0: $ResourceLocation_): $Stream<$Waystone>;
        getWaystones(): $Stream<$Waystone>;
        getWaystoneById(arg0: $UUID_): ($Waystone) | undefined;
        findWaystoneByName(arg0: string): ($Waystone) | undefined;
        getGlobalWaystones(): $List<$Waystone>;
        get waystones(): $Stream<$Waystone>;
        get globalWaystones(): $List<$Waystone>;
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
