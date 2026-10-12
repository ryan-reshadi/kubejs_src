import { $LevelAccessor, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SignalBoundary, $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $TrackMaterial, $BezierConnection } from "@package/com/simibubi/create/content/trains/track";
import { $UUID, $List, $Map_, $UUID_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Vec3i } from "@package/net/minecraft/core";
import { $TrackObserver } from "@package/com/simibubi/create/content/trains/observer";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/graph" {
    export class $TrackEdge {
        getDirection(arg0: boolean): $Vec3;
        getIntersection(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge, arg3: $TrackNode, arg4: $TrackNode): $Collection<number[]>;
        getPosition(arg0: $TrackGraph, arg1: number): $Vec3;
        getLength(): number;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $TrackNode, arg1: $TrackNode, arg2: $CompoundTag_, arg3: $TrackGraph, arg4: $DimensionPalette): $TrackEdge;
        getNormal(arg0: $TrackGraph, arg1: number): $Vec3;
        getTrackMaterial(): $TrackMaterial;
        getTurn(): $BezierConnection;
        isTurn(): boolean;
        isInterDimensional(): boolean;
        incrementT(arg0: number, arg1: number): number;
        canTravelTo(arg0: $TrackEdge): boolean;
        getEdgeData(): $EdgeData;
        getDirectionAt(arg0: number): $Vec3;
        getPositionSmoothed(arg0: $TrackGraph, arg1: number): $Vec3;
        getNormalSmoothed(arg0: $TrackGraph, arg1: number): $Vec3;
        node2: $TrackNode;
        node1: $TrackNode;
        constructor(arg0: $TrackNode, arg1: $TrackNode, arg2: $BezierConnection, arg3: $TrackMaterial);
        get length(): number;
        get trackMaterial(): $TrackMaterial;
        get interDimensional(): boolean;
        get edgeData(): $EdgeData;
    }
    export class $TrackGraph {
        transfer(arg0: $LevelAccessor, arg1: $TrackNode, arg2: $TrackGraph): void;
        getChecksum(): number;
        getPoint<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: $UUID_): T;
        getConnection(arg0: $Couple<$TrackNode>): $TrackEdge;
        setId(arg0: $UUID_): void;
        getNode(arg0: number): $TrackNode;
        removeNode(arg0: $LevelAccessor, arg1: $TrackNodeLocation): boolean;
        isEmpty(): boolean;
        getBounds(arg0: $Level_): $TrackGraphBounds;
        write(arg0: $HolderLookup$Provider, arg1: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $DimensionPalette): $TrackGraph;
        addNode(arg0: $TrackNode): void;
        getNodes(): $Set<$TrackNodeLocation>;
        getPoints<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>): $Collection<T>;
        markDirty(): void;
        findDisconnectedGraphs(arg0: $LevelAccessor, arg1: $Map_<number, $Pair<number, $UUID_>>): $Set<$TrackGraph>;
        locateNode(arg0: $Level_, arg1: $Vec3_): $TrackNode;
        locateNode(arg0: $TrackNodeLocation): $TrackNode;
        tickPoints(arg0: boolean): void;
        resolveIntersectingEdgeGroups(arg0: $Level_): void;
        setNetId(arg0: number): void;
        addPoint<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: T): void;
        removePoint<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: $UUID_): T;
        getConnectionsFrom(arg0: $TrackNode): $Map<$TrackNode, $TrackEdge>;
        loadNode(arg0: $TrackNodeLocation, arg1: number, arg2: $Vec3_): void;
        putConnection(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge): boolean;
        distanceToLocationSqr(arg0: $Level_, arg1: $Vec3_): number;
        static nextNodeId(): number;
        static nextGraphId(): number;
        addNodeIfAbsent(arg0: $TrackNode): boolean;
        invalidateBounds(): void;
        disconnectNodes(arg0: $TrackNode, arg1: $TrackNode): void;
        deferIntersectionUpdate(arg0: $TrackEdge): void;
        createNodeIfAbsent(arg0: $TrackNodeLocation$DiscoveredLocation): boolean;
        connectNodes(arg0: $LevelAccessor, arg1: $TrackNodeLocation$DiscoveredLocation, arg2: $TrackNodeLocation$DiscoveredLocation, arg3: $BezierConnection): void;
        transferAll(arg0: $TrackGraph): void;
        static graphNetIdGenerator: $AtomicInteger;
        static nodeNetIdGenerator: $AtomicInteger;
        color: $Color;
        id: $UUID;
        constructor();
        constructor(arg0: $UUID_);
        get checksum(): number;
        get empty(): boolean;
        get nodes(): $Set<$TrackNodeLocation>;
        set netId(value: number);
    }
    export class $TrackEdgeIntersection {
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $DimensionPalette): $TrackEdgeIntersection;
        targets(arg0: $TrackNodeLocation, arg1: $TrackNodeLocation): boolean;
        isNear(arg0: number): boolean;
        groupId: $UUID;
        location: number;
        id: $UUID;
        targetLocation: number;
        target: $Couple<$TrackNodeLocation>;
        constructor();
    }
    export class $EdgePointType<T extends $TrackEdgePoint> {
        create(): T;
        static register<T extends $TrackEdgePoint>(arg0: $ResourceLocation_, arg1: $Supplier_<T>): $EdgePointType<T>;
        static read(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): $TrackEdgePoint;
        getId(): $ResourceLocation;
        static TYPES: $Map<$ResourceLocation, $EdgePointType<never>>;
        static SIGNAL: $EdgePointType<$SignalBoundary>;
        static STATION: $EdgePointType<$GlobalStation>;
        static OBSERVER: $EdgePointType<$TrackObserver>;
        constructor(arg0: $ResourceLocation_, arg1: $Supplier_<T>);
        get id(): $ResourceLocation;
    }
    export class $DiscoveredPath {
        path: $List<$Couple<$TrackNode>>;
        cost: number;
        distance: number;
        destination: $GlobalStation;
        constructor(arg0: number, arg1: number, arg2: $List_<$Couple<$TrackNode>>, arg3: $GlobalStation);
    }
    export class $TrackGraphBounds {
        beziers: $List<$BezierConnection>;
        box: $AABB;
        constructor(arg0: $TrackGraph, arg1: $ResourceKey_<$Level>);
    }
    export class $DimensionPalette {
        send(arg0: $FriendlyByteBuf): void;
        static receive(arg0: $FriendlyByteBuf): $DimensionPalette;
        decode(arg0: number): $ResourceKey<$Level>;
        encode(arg0: $ResourceKey_<$Level>): number;
        write(arg0: $CompoundTag_): void;
        static read(arg0: $CompoundTag_): $DimensionPalette;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DimensionPalette>;
        constructor();
        constructor(arg0: $List_<$ResourceKey_<$Level>>);
    }
    export class $TrackNode {
        getLocation(): $TrackNodeLocation;
        getNormal(): $Vec3;
        getNetId(): number;
        constructor(arg0: $TrackNodeLocation, arg1: number, arg2: $Vec3_);
        get location(): $TrackNodeLocation;
        get normal(): $Vec3;
        get netId(): number;
    }
    export class $TrackGraphLocation {
        edge: $Couple<$TrackNodeLocation>;
        position: number;
        graph: $TrackGraph;
        constructor();
    }
    export class $EdgeData {
        get<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: number): T;
        next(arg0: number): $TrackEdgePoint;
        next<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: number): T;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackEdge, arg2: $TrackGraph, arg3: $DimensionPalette): $EdgeData;
        getPoints(): $List<$TrackEdgePoint>;
        addPoint<T extends $TrackEdgePoint>(arg0: $TrackGraph, arg1: $TrackEdgePoint): void;
        removePoint(arg0: $TrackGraph, arg1: $TrackEdgePoint): void;
        setSingleSignalGroup(arg0: $TrackGraph, arg1: $UUID_): void;
        hasSignalBoundaries(): boolean;
        getSingleSignalGroup(): $UUID;
        getEffectiveEdgeGroupId(arg0: $TrackGraph): $UUID;
        hasPoints(): boolean;
        addIntersection(arg0: $TrackGraph, arg1: $UUID_, arg2: number, arg3: $TrackNode, arg4: $TrackNode, arg5: number): void;
        getGroupAtPosition(arg0: $TrackGraph, arg1: number): $UUID;
        getIntersections(): $List<$TrackEdgeIntersection>;
        removeIntersection(arg0: $TrackGraph, arg1: $UUID_): void;
        refreshIntersectingSignalGroups(arg0: $TrackGraph): void;
        hasIntersections(): boolean;
        static passiveGroup: $UUID;
        constructor(arg0: $TrackEdge);
        get points(): $List<$TrackEdgePoint>;
        get intersections(): $List<$TrackEdgeIntersection>;
    }
    export class $TrackNodeLocation$DiscoveredLocation extends $TrackNodeLocation {
        getDirection(): $Vec3;
        getTurn(): $BezierConnection;
        withDirection(arg0: $Vec3_): $TrackNodeLocation$DiscoveredLocation;
        materials(arg0: $TrackMaterial, arg1: $TrackMaterial): $TrackNodeLocation$DiscoveredLocation;
        viaTurn(arg0: $BezierConnection): $TrackNodeLocation$DiscoveredLocation;
        materialA(arg0: $TrackMaterial): $TrackNodeLocation$DiscoveredLocation;
        materialB(arg0: $TrackMaterial): $TrackNodeLocation$DiscoveredLocation;
        withNormal(arg0: $Vec3_): $TrackNodeLocation$DiscoveredLocation;
        withYOffset(arg0: number): $TrackNodeLocation$DiscoveredLocation;
        forceNode(): $TrackNodeLocation$DiscoveredLocation;
        connectedViaTurn(): boolean;
        shouldForceNode(): boolean;
        differentMaterials(): boolean;
        notInLineWith(arg0: $Vec3_): boolean;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        yOffsetPixels: number;
        dimension: $ResourceKey<$Level>;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Level_, arg1: $Vec3_);
        constructor(arg0: $ResourceKey_<$Level>, arg1: $Vec3_);
        get direction(): $Vec3;
        get turn(): $BezierConnection;
    }
    export class $TrackNodeLocation extends $Vec3i {
        getDimension(): $ResourceKey<$Level>;
        send(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        static receive(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): $TrackNodeLocation;
        getLocation(): $Vec3;
        write(arg0: $DimensionPalette): $CompoundTag;
        "in"(arg0: $ResourceKey_<$Level>): $TrackNodeLocation;
        "in"(arg0: $Level_): $TrackNodeLocation;
        static read(arg0: $CompoundTag_, arg1: $DimensionPalette): $TrackNodeLocation;
        allAdjacent(): $Collection<$BlockPos>;
        equalsIgnoreDim(arg0: $Object): boolean;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        yOffsetPixels: number;
        dimension: $ResourceKey<$Level>;
        constructor(arg0: $Vec3_);
        constructor(arg0: number, arg1: number, arg2: number);
        get location(): $Vec3;
    }
}
