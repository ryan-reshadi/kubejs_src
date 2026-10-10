import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $ITrackBlock, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $UUID, $Map, $UUID_ } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $WeakReference } from "@package/java/lang/ref";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $TrackNodeLocation, $TrackNode } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DoorControlBehaviour } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $MapDecoration } from "@package/net/minecraft/world/level/saveddata/maps";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Couple, $WorldAttached } from "@package/net/createmod/catnip/data";
import { $Level, $BlockGetter, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandlerModifiable, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/trains/station" {
    export class $StationBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        assemble(arg0: $UUID_): void;
        updateName(arg0: string): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getAssemblyDirection(): $Direction;
        getStation(): $GlobalStation;
        getAutoSchedule(): $ItemStack;
        dropSchedule(arg0: $ServerPlayer, arg1: $Train): void;
        resolveFlagAngle(): boolean;
        trackClicked(arg0: $Player, arg1: $InteractionHand_, arg2: $ITrackBlock, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        cancelAssembly(): void;
        isAssembling(): boolean;
        refreshAssemblyInfo(): void;
        isValidBogeyOffset(arg0: number): boolean;
        tryDisassembleTrain(arg0: $ServerPlayer): boolean;
        tryEnterAssemblyMode(): boolean;
        enterAssemblyMode(arg0: $ServerPlayer): boolean;
        exitAssemblyMode(): boolean;
        updateMapColor(arg0: number): void;
        attachPackagePort(arg0: $PackagePortBlockEntity): void;
        removePackagePort(arg0: $PackagePortBlockEntity): void;
        lastDisassembledTrainName: $Component;
        flag: $LerpedFloat;
        static assemblyAreas: $WorldAttached<$Map<$BlockPos, $BoundingBox>>;
        static ATTACHMENTS_NBT_KEY: string;
        doorControls: $DoorControlBehaviour;
        lastDisassembledMapColorIndex: number;
        computerBehaviour: $AbstractComputerBehaviour;
        edgePoint: $TrackTargetingBehaviour<$GlobalStation>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get assemblyDirection(): $Direction;
        get station(): $GlobalStation;
        get autoSchedule(): $ItemStack;
        get assembling(): boolean;
    }
    export class $GlobalStation extends $SingleBlockEntityEdgePoint {
        getPresentTrain(): $Train;
        getNearestTrain(): $Train;
        cancelReservation(arg0: $Train): void;
        canApproachFrom(arg0: $TrackNode): boolean;
        reserveFor(arg0: $Train): void;
        trainDeparted(arg0: $Train): void;
        getImminentTrain(): $Train;
        runMailTransfer(): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        connectedPorts: $Map<$BlockPos, $GlobalPackagePort>;
        blockEntityDimension: $ResourceKey<$Level>;
        name: string;
        assembling: boolean;
        id: $UUID;
        position: number;
        nearestTrain: $WeakReference<$Train>;
        constructor();
        get presentTrain(): $Train;
        get imminentTrain(): $Train;
    }
    export class $GlobalPackagePort {
        saveOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        restoreOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        address: string;
        primed: boolean;
        offlineBuffer: $ItemStackHandler;
        constructor();
    }
    export class $StationMarker {
        getSource(): $BlockPos;
        getTarget(): $BlockPos;
        getName(): $Component;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $StationMarker;
        getId(): string;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromWorld(arg0: $BlockGetter, arg1: $BlockPos_): $StationMarker;
        static createStationDecoration(arg0: number, arg1: number, arg2: ($Component_) | undefined): $MapDecoration;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $Component_);
        get source(): $BlockPos;
        get target(): $BlockPos;
        get name(): $Component;
        get id(): string;
    }
    export class $StationMapData {
    }
    export interface $StationMapData {
        addStationMarker(arg0: $StationMarker): void;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
    }
}
