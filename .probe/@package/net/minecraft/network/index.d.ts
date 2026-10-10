import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $ClientStatusPacketListener } from "@package/net/minecraft/network/protocol/status";
import { $Tag_, $Tag, $NbtAccounter, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $UUID_, $Map, $UUID, $List, $EnumSet, $Map_, $Date, $Collection_, $Collection, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $NetworkManagerAccessor, $DecoderHandlerAccessor } from "@package/gg/essential/mixins/transformers/network";
import { $ByteToMessageDecoder$Cumulator, $MessageToMessageEncoder, $EncoderException, $MessageToMessageDecoder, $ByteToMessageDecoder, $MessageToByteEncoder } from "@package/io/netty/handler/codec";
import { $IntFunction_, $Supplier_, $IntFunction, $Consumer_, $Function, $BiConsumer_, $Function_, $BiFunction_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $RegistryAccess, $Registry, $SectionPos } from "@package/net/minecraft/core";
import { $IFriendlyByteBufExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path_, $Path } from "@package/java/nio/file";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $InetSocketAddress, $SocketAddress, $URI } from "@package/java/net";
import { $PacketType, $PacketFlow, $PacketFlow_, $BundlerInfo, $PacketType_, $Packet } from "@package/net/minecraft/network/protocol";
import { $CharSequence, $Enum, $Exception, $Throwable, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $Cipher } from "@package/javax/crypto";
import { $OutputStream } from "@package/java/io";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Marker } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $PublicKey } from "@package/java/security";
import { $Instant } from "@package/java/time";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $ChannelHandlerContext, $Channel, $ChannelDuplexHandler, $ChannelPipeline, $ChannelInboundHandlerAdapter, $DefaultEventLoopGroup, $SimpleChannelInboundHandler, $ChannelFuture, $ChannelOutboundHandlerAdapter } from "@package/io/netty/channel";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ConnectionExtension } from "@package/dev/ryanhcode/sable/mixinterface/udp";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $TriConsumer_ } from "@package/org/apache/commons/lang3/function";
import { $StreamCodec, $StreamEncoder_, $StreamDecoder_ } from "@package/net/minecraft/network/codec";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
export * as protocol from "@package/net/minecraft/network/protocol";
export * as chat from "@package/net/minecraft/network/chat";
export * as syncher from "@package/net/minecraft/network/syncher";
export * as codec from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network" {
    /**
     * Channel handler that handles protocol decryption.
     * 
     * @see Connection#setEncryptionKey
     */
    export class $CipherDecoder extends $MessageToMessageDecoder<$ByteBuf> {
        constructor(cipher: $Cipher);
    }
    export class $Utf8String {
        static write(buffer: $ByteBuf, string: $CharSequence, maxLength: number): void;
        static read(buffer: $ByteBuf, maxLength: number): string;
        constructor();
    }
    export class $MonitorFrameDecoder extends $ChannelInboundHandlerAdapter {
        constructor(monitor: $BandwidthDebugMonitor);
    }
    export class $VarLong {
        static write(buffer: $ByteBuf, value: number): $ByteBuf;
        static read(buffer: $ByteBuf): number;
        static getByteSize(data: number): number;
        static hasContinuationBit(data: number): boolean;
        constructor();
    }
    /**
     * Variant of `Connection` that monitors the amount of received packets and disables receiving if the set limit is exceeded.
     */
    export class $RateKickingConnection extends $Connection {
        static PACKET_MARKER: $Marker;
        static PACKET_SENT_MARKER: $Marker;
        static NETWORK_WORKER_GROUP: $Supplier<$NioEventLoopGroup>;
        static PACKET_RECEIVED_MARKER: $Marker;
        static LOCAL_WORKER_GROUP: $Supplier<$DefaultEventLoopGroup>;
        static ROOT_MARKER: $Marker;
        static NETWORK_EPOLL_WORKER_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(rateLimitPacketsPerSecond: number);
    }
    export class $DisconnectionDetails extends $Record {
        reason(): $Component;
        report(): ($Path) | undefined;
        bugReportLink(): ($URI) | undefined;
        constructor(reason: $Component_);
        constructor(arg0: $Component_, arg1: ($Path_) | undefined, arg2: ($URI) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DisconnectionDetails}.
     */
    export type $DisconnectionDetails_ = { reason?: $Component_, report?: ($Path_) | undefined, bugReportLink?: ($URI) | undefined,  } | [reason?: $Component_, report?: ($Path_) | undefined, bugReportLink?: ($URI) | undefined, ];
    /**
     * Describes how packets are handled. There are various implementations of this class for each possible protocol (e.g. PLAY, CLIENTBOUND; PLAY, SERVERBOUND; etc.)
     */
    export class $PacketListener {
    }
    export interface $PacketListener {
        flow(): $PacketFlow;
        protocol(): $ConnectionProtocol;
        fillCrashReport(crashReport: $CrashReport): void;
        isAcceptingMessages(): boolean;
        onDisconnect(details: $DisconnectionDetails_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        get acceptingMessages(): boolean;
    }
    export class $ProtocolInfo$Unbound<T extends $PacketListener, B extends $ByteBuf> {
    }
    export interface $ProtocolInfo$Unbound<T extends $PacketListener, B extends $ByteBuf> {
        flow(): $PacketFlow;
        bind(bufferFactory: $Function_<$ByteBuf, B>): $ProtocolInfo<T>;
        id(): $ConnectionProtocol;
        listPackets(visitor: $ProtocolInfo$Unbound$PacketVisitor_): void;
    }
    export class $UnconfiguredPipelineHandler$Outbound extends $ChannelOutboundHandlerAdapter {
        constructor();
    }
    /**
     * Describes the set of packets a connection understands at a given point.
     * A connection always starts out in state `#HANDSHAKING`. In this state the client sends its desired protocol using
     * `ClientIntentionPacket`. The server then either accepts the connection and switches to the desired protocol or it disconnects the client (for example in case of an outdated client).
     * 
     * Each protocol has a `PacketListener` implementation tied to it for server and client respectively.
     * 
     * Every packet must correspond to exactly one protocol.
     */
    export class $ConnectionProtocol extends $Enum<$ConnectionProtocol> {
        static values(): $ConnectionProtocol[];
        static valueOf(arg0: string): $ConnectionProtocol;
        id(): string;
        isPlay(): boolean;
        isConfiguration(): boolean;
        static PLAY: $ConnectionProtocol;
        static STATUS: $ConnectionProtocol;
        static CONFIGURATION: $ConnectionProtocol;
        static LOGIN: $ConnectionProtocol;
        static HANDSHAKING: $ConnectionProtocol;
        get play(): boolean;
        get configuration(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionProtocol}.
     */
    export type $ConnectionProtocol_ = "handshaking" | "play" | "status" | "login" | "configuration";
    export class $NoOpFrameEncoder extends $ChannelOutboundHandlerAdapter {
        constructor();
    }
    export class $RegistryFriendlyByteBuf extends $FriendlyByteBuf {
        registryAccess(): $RegistryAccess;
        getConnectionType(): $ConnectionType;
        /**
         * @deprecated
         */
        static decorator(registry: $RegistryAccess): $Function<$ByteBuf, $RegistryFriendlyByteBuf>;
        static decorator(arg0: $RegistryAccess, arg1: $ConnectionType_): $Function<$ByteBuf, $RegistryFriendlyByteBuf>;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        constructor(arg0: $ByteBuf, arg1: $RegistryAccess, arg2: $ConnectionType_);
        /**
         * @deprecated
         */
        constructor(source: $ByteBuf, registryAccess: $RegistryAccess);
        get connectionType(): $ConnectionType;
    }
    export class $ProtocolSwapHandler {
        static handleOutboundTerminalPacket(context: $ChannelHandlerContext, packet: $Packet<never>): void;
        static handleInboundTerminalPacket(context: $ChannelHandlerContext, packet: $Packet<never>): void;
    }
    export interface $ProtocolSwapHandler {
    }
    /**
     * Channel handler that handles protocol encryption.
     * 
     * @see Connection#setEncryptionKey
     */
    export class $CipherEncoder extends $MessageToByteEncoder<$ByteBuf> {
        constructor(cipher: $Cipher);
    }
    export class $TickablePacketListener {
    }
    export interface $TickablePacketListener extends $PacketListener {
        tick(): void;
    }
    export class $FriendlyByteBuf extends $ByteBuf implements $IFriendlyByteBufExtension {
        capacity(newCapacity: number): $FriendlyByteBuf;
        /**
         * Reads an enum of the given type T using the ordinal encoded as a VarInt from the buffer.
         * 
         * @see #writeEnum
         */
        readEnum<T extends $Enum<T>>(enumClass: $Class<T>): T;
        /**
         * Write a timestamp as milliseconds since the unix epoch.
         * 
         * @see #readDate
         */
        writeDate(time: $Date): $FriendlyByteBuf;
        skipBytes(newCapacity: number): $FriendlyByteBuf;
        writeBoolean(value: boolean): $FriendlyByteBuf;
        writeByte(newCapacity: number): $FriendlyByteBuf;
        writeLong(value: number): $FriendlyByteBuf;
        /**
         * Reads a String with a maximum length of `Short.MAX_VALUE`.
         * 
         * @see #readUtf(int)
         * @see #writeUtf
         */
        readUtf(): string;
        /**
         * Reads a string with a maximum length from this buffer.
         * 
         * @see #writeUtf
         */
        readUtf(maxLength: number): string;
        getSource(): $ByteBuf;
        retain(): $FriendlyByteBuf;
        readBytes(destination: $ByteBuf, length: number): $FriendlyByteBuf;
        readBytes(destination: $ByteBuf, destinationIndex: number, length: number): $FriendlyByteBuf;
        readBytes(destination: $ByteBuf): $FriendlyByteBuf;
        writeBytes(destination: $ByteBuffer): $FriendlyByteBuf;
        writeBytes(destination: number[], destinationIndex: number, length: number): $FriendlyByteBuf;
        writeBytes(destination: number[]): $FriendlyByteBuf;
        getBytes(index: number, destination: $ByteBuffer): $FriendlyByteBuf;
        getBytes(index: number, out: $OutputStream, length: number): $FriendlyByteBuf;
        getBytes(index: number, destination: $ByteBuf, length: number): $FriendlyByteBuf;
        getBytes(index: number, destination: $ByteBuf, destinationIndex: number, length: number): $FriendlyByteBuf;
        getBytes(index: number, destination: number[]): $FriendlyByteBuf;
        getBytes(index: number, destination: number[], destinationIndex: number, length: number): $FriendlyByteBuf;
        getBytes(index: number, destination: $ByteBuf): $FriendlyByteBuf;
        setByte(index: number, value: number): $FriendlyByteBuf;
        setChar(index: number, value: number): $FriendlyByteBuf;
        setInt(index: number, value: number): $FriendlyByteBuf;
        setLong(index: number, value: number): $FriendlyByteBuf;
        setDouble(index: number, value: number): $FriendlyByteBuf;
        static readVector3f(buffer: $ByteBuf): $Vector3f;
        readVector3f(): $Vector3f;
        writeVector3f(vector3f: $Vector3f): void;
        static writeVector3f(buffer: $ByteBuf, vector3f: $Vector3f): void;
        readQuaternion(): $Quaternionf;
        static readQuaternion(buffer: $ByteBuf): $Quaternionf;
        static writeQuaternion(buffer: $ByteBuf, quaternion: $Quaternionf): void;
        writeQuaternion(quaternion: $Quaternionf): void;
        readNullable<T>(reader: $StreamDecoder_<$FriendlyByteBuf, T>): T;
        static readNullable<T, B extends $ByteBuf>(buffer: B, reader: $StreamDecoder_<B, T>): T;
        writeNullable<T>(value: T | null, writer: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        static writeNullable<T, B extends $ByteBuf>(buffer: B, value: T | null, writer: $StreamEncoder_<B, T>): void;
        readList<T>(elementReader: $StreamDecoder_<$FriendlyByteBuf, T>): $List<T>;
        readMap<K, V, M extends $Map<K, V>>(mapFactory: $IntFunction_<M>, keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $StreamDecoder_<$FriendlyByteBuf, V>): M;
        readMap<K, V>(keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $StreamDecoder_<$FriendlyByteBuf, V>): $Map<K, V>;
        /**
         * Reads a UUID encoded as two longs from this buffer.
         * 
         * @see #writeUUID
         */
        readUUID(): $UUID;
        static readUUID(buffer: $ByteBuf): $UUID;
        static writeUUID(buffer: $ByteBuf, id: $UUID_): void;
        /**
         * Writes a UUID encoded as two longs to this buffer.
         * 
         * @see #readUUID
         */
        writeUUID(uuid: $UUID_): $FriendlyByteBuf;
        readByteArray(): number[];
        static readByteArray(buffer: $ByteBuf, maxSize: number): number[];
        readByteArray(maxLength: number): number[];
        static readByteArray(buffer: $ByteBuf): number[];
        static writeByteArray(buffer: $ByteBuf, array: number[]): void;
        writeByteArray(destination: number[]): $FriendlyByteBuf;
        /**
         * Reads a NBT CompoundTag from this buffer.
         * `null` is a valid value and may be returned.
         * 
         * This method will read a maximum of 0x200000 bytes.
         * 
         * @see #writeNbt
         * @see #readAnySizeNbt
         * @see #readNbt(NbtAccounter)
         */
        readNbt(): $CompoundTag;
        static readNbt(buffer: $ByteBuf): $CompoundTag;
        readNbt(nbtAccounter: $NbtAccounter): $Tag;
        static readNbt(buffer: $ByteBuf, nbtAccounter: $NbtAccounter): $Tag;
        static writeNbt(buffer: $ByteBuf, nbt: $Tag_ | null): void;
        writeNbt(tag: $Tag_ | null): $FriendlyByteBuf;
        /**
         * Writes a BlockPos encoded as a long to the buffer.
         * 
         * @see #readBlockPos
         */
        writeBlockPos(pos: $BlockPos_): $FriendlyByteBuf;
        static writeBlockPos(buffer: $ByteBuf, pos: $BlockPos_): void;
        touch(hint: $Object): $FriendlyByteBuf;
        resetReaderIndex(): $FriendlyByteBuf;
        markWriterIndex(): $FriendlyByteBuf;
        resetWriterIndex(): $FriendlyByteBuf;
        ensureWritable(newCapacity: number): $FriendlyByteBuf;
        setShortLE(index: number, value: number): $FriendlyByteBuf;
        setIntLE(index: number, value: number): $FriendlyByteBuf;
        setBytes(index: number, destination: number[]): $FriendlyByteBuf;
        setBytes(index: number, destination: number[], destinationIndex: number, length: number): $FriendlyByteBuf;
        setBytes(index: number, destination: $ByteBuffer): $FriendlyByteBuf;
        setBytes(index: number, destination: $ByteBuf): $FriendlyByteBuf;
        setBytes(index: number, destination: $ByteBuf, destinationIndex: number, length: number): $FriendlyByteBuf;
        writeMedium(newCapacity: number): $FriendlyByteBuf;
        writeMediumLE(newCapacity: number): $FriendlyByteBuf;
        /**
         * @deprecated
         */
        readWithCodecTrusted<T>(ops: $DynamicOps<$Tag_>, codec: $Codec<T>): T;
        /**
         * @deprecated
         */
        readWithCodec<T>(ops: $DynamicOps<$Tag_>, codec: $Codec<T>, nbtAccounter: $NbtAccounter): T;
        /**
         * @deprecated
         */
        writeWithCodec<T>(ops: $DynamicOps<$Tag_>, codec: $Codec<T>, value: T): $FriendlyByteBuf;
        readJsonWithCodec<T>(codec: $Codec<T>): T;
        writeJsonWithCodec<T>(codec: $Codec<T>, value: T): void;
        /**
         * Writes a String with a maximum length of `Short.MAX_VALUE`.
         * 
         * @see #readUtf
         */
        writeUtf(string: string): $FriendlyByteBuf;
        /**
         * Writes a String with a maximum length.
         * 
         * @see #readUtf
         */
        writeUtf(string: string, maxLength: number): $FriendlyByteBuf;
        static limitValue<T>(_function: $IntFunction_<T>, limit: number): $IntFunction<T>;
        readCollection<T, C extends $Collection<T>>(collectionFactory: $IntFunction_<C>, elementReader: $StreamDecoder_<$FriendlyByteBuf, T>): C;
        /**
         * Reads a compressed int from the buffer. To do so it maximally reads 5 byte-sized chunks whose most significant bit dictates whether another byte should be read.
         * 
         * @see #writeVarInt
         */
        readVarInt(): number;
        writeCollection<T>(collection: $Collection_<T>, elementWriter: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        writeVarInt(newCapacity: number): $FriendlyByteBuf;
        /**
         * Read an IntList of VarInts from this buffer.
         * 
         * @see #writeIntIdList
         */
        readIntIdList(): $IntList;
        /**
         * Write an IntList to this buffer. Every element is encoded as a VarInt.
         * 
         * @see #readIntIdList
         */
        writeIntIdList(itIdList: $IntList): void;
        /**
         * Read a VarInt N from this buffer, then reads N values by calling `reader`.
         */
        readWithCount(reader: $Consumer_<$FriendlyByteBuf>): void;
        writeEnumSet<E extends $Enum<E>>(enumSet: $EnumSet<E>, enumClass: $Class<E>): void;
        writeFixedBitSet(bitSet: $BitSet, size: number): void;
        readEnumSet<E extends $Enum<E>>(enumClass: $Class<E>): $EnumSet<E>;
        readFixedBitSet(size: number): $BitSet;
        writeOptional<T>(optional: (T) | undefined, writer: $StreamEncoder_<$FriendlyByteBuf, T>): void;
        readOptional<T>(reader: $StreamDecoder_<$FriendlyByteBuf, T>): (T) | undefined;
        /**
         * Writes an array of VarInts to the buffer, prefixed by the length of the array (as a VarInt).
         * 
         * @see #readVarIntArray
         */
        writeVarIntArray(array: number[]): $FriendlyByteBuf;
        /**
         * Reads an array of VarInts with a maximum length from this buffer.
         * 
         * @see #writeVarIntArray
         */
        readVarIntArray(maxLength: number): number[];
        /**
         * Reads an array of VarInts from this buffer.
         * 
         * @see #writeVarIntArray
         */
        readVarIntArray(): number[];
        /**
         * Writes an array of longs to the buffer, prefixed by the length of the array (as a VarInt).
         * 
         * @see #readLongArray
         */
        writeLongArray(array: number[]): $FriendlyByteBuf;
        /**
         * Reads a length-prefixed array of longs from the buffer.
         * Will try to use the given long[] if possible. Note that if an array with the correct size is given, maxLength is ignored.
         */
        readLongArray(array: number[] | null): number[];
        /**
         * Reads a length-prefixed array of longs with a maximum length from the buffer.
         * Will try to use the given long[] if possible. Note that if an array with the correct size is given, maxLength is ignored.
         */
        readLongArray(array: number[] | null, maxLength: number): number[];
        /**
         * Reads a length-prefixed array of longs from the buffer.
         */
        readLongArray(): number[];
        /**
         * Reads a BlockPos encoded as a long from the buffer.
         * 
         * @see #writeBlockPos
         */
        readBlockPos(): $BlockPos;
        static readBlockPos(buffer: $ByteBuf): $BlockPos;
        /**
         * Reads a ChunkPos encoded as a long from the buffer.
         * 
         * @see #writeChunkPos
         */
        readChunkPos(): $ChunkPos;
        /**
         * Writes a ChunkPos encoded as a long to the buffer.
         * 
         * @see #readChunkPos
         */
        writeChunkPos(chunkPos: $ChunkPos): $FriendlyByteBuf;
        /**
         * Reads a SectionPos encoded as a long from the buffer.
         * 
         * @see #writeSectionPos
         */
        readSectionPos(): $SectionPos;
        /**
         * Writes a SectionPos encoded as a long to the buffer.
         * 
         * @see #readSectionPos
         */
        writeSectionPos(sectionPos: $SectionPos): $FriendlyByteBuf;
        readGlobalPos(): $GlobalPos;
        readResourceKey<T>(registryKey: $ResourceKey_<$Registry<T>>): $ResourceKey<T>;
        writeGlobalPos(pos: $GlobalPos_): void;
        writeResourceKey(resourceKey: $ResourceKey_<never>): void;
        readVec3(): $Vec3;
        writeVec3(vec3: $Vec3_): void;
        readById<T>(idLookuo: $IntFunction_<T>): T;
        writeById<T>(idGetter: $ToIntFunction_<T>, value: T): $FriendlyByteBuf;
        /**
         * Reads a compressed long from the buffer. To do so it maximally reads 10 byte-sized chunks whose most significant bit dictates whether another byte should be read.
         * 
         * @see #writeVarLong
         */
        readVarLong(): number;
        writeVarLong(value: number): $FriendlyByteBuf;
        /**
         * Read a ResourceLocation using its String representation.
         * 
         * @see #writeResourceLocation
         */
        readResourceLocation(): $ResourceLocation;
        /**
         * Write a ResourceLocation using its String representation.
         * 
         * @see #readResourceLocation
         */
        writeResourceLocation(resourceLocation: $ResourceLocation_): $FriendlyByteBuf;
        readRegistryKey<T>(): $ResourceKey<$Registry<T>>;
        /**
         * Read a timestamp as milliseconds since the unix epoch.
         * 
         * @see #writeDate
         */
        readDate(): $Date;
        readInstant(): $Instant;
        writeInstant(instant: $Instant): void;
        readPublicKey(): $PublicKey;
        writePublicKey(publicKey: $PublicKey): $FriendlyByteBuf;
        /**
         * Read a BlockHitResult.
         * 
         * @see #writeBlockHitResult
         */
        readBlockHitResult(): $BlockHitResult;
        /**
         * Write a BlockHitResult.
         * 
         * @see #readBlockHitResult
         */
        writeBlockHitResult(result: $BlockHitResult): void;
        /**
         * Read a BitSet as a long[].
         * 
         * @see #writeBitSet
         */
        readBitSet(): $BitSet;
        /**
         * Write a BitSet as a long[].
         * 
         * @see #readBitSet
         */
        writeBitSet(bitSet: $BitSet): void;
        writeMap<K, V>(map: $Map_<K, V>, keyWriter: $StreamEncoder_<$FriendlyByteBuf, K>, valueWriter: $StreamEncoder_<$FriendlyByteBuf, V>): void;
        /**
         * Writes an enum of the given type T using the ordinal encoded as a VarInt to the buffer.
         * 
         * @see #readEnum
         */
        writeEnum(value: $Enum<never>): $FriendlyByteBuf;
        readArray<T>(arg0: $IntFunction_<T[]>, arg1: $StreamDecoder_<$FriendlyByteBuf, T>): T[];
        /**
         * Writes a byte to the buffer
         */
        writeByte(value: number): $FriendlyByteBuf;
        writeArray<T>(arg0: T[], arg1: $StreamEncoder_<$FriendlyByteBuf, T>): $FriendlyByteBuf;
        /**
         * Variant of `FriendlyByteBuf#readMap(StreamDecoder, StreamDecoder)` that allows reading values
         * that depend on the key.
         */
        readMap<K, V>(keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $BiFunction_<$FriendlyByteBuf, K, V>): $Map<K, V>;
        /**
         * Writes the entries in the given set to the buffer, by first writing the count and then writing each entry.
         */
        writeObjectCollection<T>(set: $Collection_<T>, writer: $BiConsumer_<T, $FriendlyByteBuf>): void;
        /**
         * Variant of `FriendlyByteBuf#writeMap(Map, StreamEncoder, StreamEncoder)` that allows writing values
         * that depend on the key.
         */
        writeMap<K, V>(map: $Map_<K, V>, keyWriter: $StreamEncoder_<$FriendlyByteBuf, K>, valueWriter: $TriConsumer_<$FriendlyByteBuf, K, V>): void;
        static MAX_COMPONENT_STRING_LENGTH: number;
        static MAX_STRING_LENGTH: number;
        static DEFAULT_NBT_QUOTA: number;
        constructor(source: $ByteBuf);
        get source(): $ByteBuf;
    }
    export class $VarInt {
        static write(buffer: $ByteBuf, value: number): $ByteBuf;
        static read(buffer: $ByteBuf): number;
        static getByteSize(data: number): number;
        static hasContinuationBit(data: number): boolean;
        constructor();
    }
    export class $ProtocolInfo$Unbound$PacketVisitor {
    }
    export interface $ProtocolInfo$Unbound$PacketVisitor {
        accept(packetType: $PacketType_<never>, index: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ProtocolInfo$Unbound$PacketVisitor}.
     */
    export type $ProtocolInfo$Unbound$PacketVisitor_ = ((arg0: $PacketType<never>, arg1: number) => void);
    /**
     * Used to signify that a packet encoding error is not fatal. If a packet fails to encode, but `Packet#isSkippable` returns true, then this exception is thrown instead and `Connection` will log a message instead of closing the connection.
     */
    export class $SkipPacketException extends $EncoderException {
        constructor(cause: $Throwable);
    }
    export class $UnconfiguredPipelineHandler$InboundConfigurationTask {
    }
    export interface $UnconfiguredPipelineHandler$InboundConfigurationTask {
        andThen(task: $UnconfiguredPipelineHandler$InboundConfigurationTask_): $UnconfiguredPipelineHandler$InboundConfigurationTask;
        run(context: $ChannelHandlerContext): void;
    }
    /**
     * Values that may be interpreted as {@link $UnconfiguredPipelineHandler$InboundConfigurationTask}.
     */
    export type $UnconfiguredPipelineHandler$InboundConfigurationTask_ = ((arg0: $ChannelHandlerContext) => void);
    /**
     * Main netty packet decoder. Reads the packet ID as a VarInt and creates the corresponding packet
     * based on the current `ConnectionProtocol`.
     */
    export class $PacketDecoder<T extends $PacketListener> extends $ByteToMessageDecoder implements $ProtocolSwapHandler, $DecoderHandlerAccessor<any> {
        getState(): $ProtocolInfo<$Object>;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(protocolInfo: $ProtocolInfo<$Object>);
        get state(): $ProtocolInfo<$Object>;
    }
    export class $PacketSendListener {
        static thenRun(onSuccessOrFailure: $Runnable_): $PacketSendListener;
        static exceptionallySend(exceptionalPacketSupplier: $Supplier_<$Packet<never>>): $PacketSendListener;
    }
    export interface $PacketSendListener {
        onFailure(): $Packet<never>;
        onSuccess(): void;
    }
    /**
     * Handles compression of network traffic.
     * 
     * @see Connection#setupCompression
     */
    export class $CompressionEncoder extends $MessageToByteEncoder<$ByteBuf> {
        getThreshold(): number;
        setThreshold(threshold: number): void;
        constructor(threshold: number);
    }
    export class $PacketBundlePacker extends $MessageToMessageDecoder<$Packet<never>> {
        constructor(bundlerInfo: $BundlerInfo);
    }
    export class $ClientboundPacketListener {
    }
    export interface $ClientboundPacketListener extends $PacketListener {
        flow(): $PacketFlow;
    }
    /**
     * Main netty packet encoder. Writes the packet ID as a VarInt based on the current `ConnectionProtocol` as well as the packet's data.
     */
    export class $PacketEncoder<T extends $PacketListener> extends $MessageToByteEncoder<$Packet<T>> {
        getProtocolInfo(): $ProtocolInfo<T>;
        constructor(protocolInfo: $ProtocolInfo<T>);
        get protocolInfo(): $ProtocolInfo<T>;
    }
    /**
     * Prepends each frame ("packet") with its length encoded as a VarInt. Every frame's length must fit within a 3-byte VarInt.
     * 
     * @see Varint21FrameDecoder
     */
    export class $Varint21LengthFieldPrepender extends $MessageToByteEncoder<$ByteBuf> {
        static MAX_VARINT21_BYTES: number;
        constructor();
    }
    export class $BandwidthDebugMonitor {
        tick(): void;
        onReceive(amount: number): void;
        constructor(bandwithLogger: $LocalSampleLogger);
    }
    export class $NoOpFrameDecoder extends $ChannelInboundHandlerAdapter {
        constructor();
    }
    export class $CipherBase {
    }
    /**
     * Handles decompression of network traffic.
     * 
     * @see Connection#setupCompression
     */
    export class $CompressionDecoder extends $ByteToMessageDecoder {
        setThreshold(threshold: number, validateDecompressed: boolean): void;
        static MAXIMUM_UNCOMPRESSED_LENGTH: number;
        static MAXIMUM_COMPRESSED_LENGTH: number;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(threshold: number, validateDecompressed: boolean);
    }
    export class $HandlerNames {
        static LEGACY_QUERY: string;
        static ENCODER: string;
        static DECOMPRESS: string;
        static BUNDLER: string;
        static PACKET_HANDLER: string;
        static COMPRESS: string;
        static INBOUND_CONFIG: string;
        static DECRYPT: string;
        static UNBUNDLER: string;
        static OUTBOUND_CONFIG: string;
        static SPLITTER: string;
        static LATENCY: string;
        static ENCRYPT: string;
        static TIMEOUT: string;
        static PREPENDER: string;
        static DECODER: string;
        constructor();
    }
    export class $PacketBundleUnpacker extends $MessageToMessageEncoder<$Packet<never>> {
        constructor(bundlerInfo: $BundlerInfo);
    }
    export class $UnconfiguredPipelineHandler {
        static setupOutboundProtocol<T extends $PacketListener>(protocolInfo: $ProtocolInfo<T>): $UnconfiguredPipelineHandler$OutboundConfigurationTask;
        static setupInboundProtocol<T extends $PacketListener>(protocolInfo: $ProtocolInfo<T>): $UnconfiguredPipelineHandler$InboundConfigurationTask;
        constructor();
        static set upOutboundProtocol(value: $ProtocolInfo<T>);
        static set upInboundProtocol(value: $ProtocolInfo<T>);
    }
    export class $ServerboundPacketListener {
    }
    export interface $ServerboundPacketListener extends $PacketListener {
        flow(): $PacketFlow;
    }
    export class $UnconfiguredPipelineHandler$Inbound extends $ChannelDuplexHandler {
        constructor();
    }
    export class $Connection extends $SimpleChannelInboundHandler<$Packet<never>> implements $ConnectionExtension, $NetworkManagerAccessor {
        disconnect(disconnectionDetails: $DisconnectionDetails_): void;
        /**
         * Closes the channel with a given reason. The reason is stored for later and will be used for informational purposes (info log on server,
         * disconnection screen on the client). This method is also called on the client when the server requests disconnection via
         * `ClientboundDisconnectPacket`.
         * 
         * Closing the channel this way does not send any disconnection packets, it simply terminates the underlying netty channel.
         */
        disconnect(message: $Component_): void;
        /**
         * The receiving packet direction (i.e. SERVERBOUND on the server and CLIENTBOUND on the client).
         */
        getDirection(): $PacketFlow;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        tick(): void;
        /**
         * Prepares a clientside Connection for a local in-memory connection ("single player").
         * Establishes a connection to the socket supplied and configures the channel pipeline (only the packet handler is necessary,
         * since this is for an in-memory connection). Returns the newly created instance.
         */
        static connectToLocalServer(address: $SocketAddress): $Connection;
        initiateServerboundPlayConnection(hostName: string, port: number, packetListener: $ClientLoginPacketListener): void;
        initiateServerboundPlayConnection<S extends $ServerboundPacketListener, C extends $ClientboundPacketListener>(hostName: string, port: number, serverboundProtocol: $ProtocolInfo<S>, clientbountProtocol: $ProtocolInfo<C>, packetListener: C, isTransfer: boolean): void;
        channel(): $Channel;
        send(packet: $Packet<never>): void;
        send(packet: $Packet<never>, sendListener: $PacketSendListener | null): void;
        send(packet: $Packet<never>, sendListener: $PacketSendListener | null, flush: boolean): void;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isConnected(): boolean;
        /**
         * Returns the socket address of the remote side. Server-only.
         */
        getRemoteAddress(): $SocketAddress;
        static connect(address: $InetSocketAddress, useEpollIfAvailable: boolean, connection: $Connection): $ChannelFuture;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        setReadOnly(): void;
        setupOutboundProtocol(protocolInfo: $ProtocolInfo<never>): void;
        setupInboundProtocol<T extends $PacketListener>(protocolInfo: $ProtocolInfo<T>, packetInfo: T): void;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isMemoryConnection(): boolean;
        getInboundProtocol(): $ProtocolInfo<never>;
        static connectToServer(address: $InetSocketAddress, useEpollIfAvailable: boolean, sampleLogger: $LocalSampleLogger | null): $Connection;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isEncrypted(): boolean;
        /**
         * Gets the current handler for processing packets
         */
        getPacketListener(): $PacketListener;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        flushChannel(): void;
        /**
         * Will iterate through the outboundPacketQueue and dispatch all Packets
         */
        handleDisconnection(): void;
        /**
         * The receiving packet direction (i.e. SERVERBOUND on the server and CLIENTBOUND on the client).
         */
        getSending(): $PacketFlow;
        /**
         * The receiving packet direction (i.e. SERVERBOUND on the server and CLIENTBOUND on the client).
         */
        getReceiving(): $PacketFlow;
        setListenerForServerboundHandshake(packetListener: $PacketListener): void;
        initiateServerboundStatusConnection(hostName: string, port: number, packetListener: $ClientStatusPacketListener): void;
        runOnceConnected(action: $Consumer_<$Connection>): void;
        getLoggableAddress(logIps: boolean): string;
        setBandwidthLogger(bandwithLogger: $LocalSampleLogger): void;
        configurePacketHandler(pipeline: $ChannelPipeline): void;
        static configureSerialization(pipeline: $ChannelPipeline, flow: $PacketFlow_, memoryOnly: boolean, bandwithDebugMonitor: $BandwidthDebugMonitor | null): void;
        static configureInMemoryPipeline(pipeline: $ChannelPipeline, flow: $PacketFlow_): void;
        /**
         * Enables encryption for this connection using the given decrypting and encrypting ciphers.
         * This adds new handlers to this connection's pipeline which handle the decrypting and encrypting.
         * This happens as part of the normal network handshake.
         * 
         * @see net.minecraft.network.protocol.login.ClientboundHelloPacket
         * @see net.minecraft.network.protocol.login.ServerboundKeyPacket
         */
        setEncryptionKey(decryptingCipher: $Cipher, encryptingCipher: $Cipher): void;
        /**
         * Returns `true` if this `Connection` has an active channel, `false` otherwise.
         */
        isConnecting(): boolean;
        getDisconnectionDetails(): $DisconnectionDetails;
        /**
         * Enables or disables compression for this connection. If `threshold` is >= 0 then a `CompressionDecoder` and `CompressionEncoder`
         * are installed in the pipeline or updated if they already exist. If `threshold` is < 0 then any such codec are removed.
         * 
         * Compression is enabled as part of the connection handshake when the server sends `ClientboundLoginCompressionPacket`.
         */
        setupCompression(threshold: number, validateDecompressed: boolean): void;
        getAverageReceivedPackets(): number;
        getAverageSentPackets(): number;
        sable$setUDPChannel(arg0: $Channel): void;
        sable$getUDPChannel(): $Channel;
        getChannel(): $Channel;
        static PACKET_MARKER: $Marker;
        static PACKET_SENT_MARKER: $Marker;
        static NETWORK_WORKER_GROUP: $Supplier<$NioEventLoopGroup>;
        static PACKET_RECEIVED_MARKER: $Marker;
        static LOCAL_WORKER_GROUP: $Supplier<$DefaultEventLoopGroup>;
        static ROOT_MARKER: $Marker;
        static NETWORK_EPOLL_WORKER_GROUP: $Supplier<$EpollEventLoopGroup>;
        constructor(receiving: $PacketFlow_);
        get direction(): $PacketFlow;
        get connected(): boolean;
        get remoteAddress(): $SocketAddress;
        set upOutboundProtocol(value: $ProtocolInfo<never>);
        get memoryConnection(): boolean;
        get inboundProtocol(): $ProtocolInfo<never>;
        get encrypted(): boolean;
        get packetListener(): $PacketListener;
        get sending(): $PacketFlow;
        get receiving(): $PacketFlow;
        set listenerForServerboundHandshake(value: $PacketListener);
        set bandwidthLogger(value: $LocalSampleLogger);
        get connecting(): boolean;
        get disconnectionDetails(): $DisconnectionDetails;
        get averageReceivedPackets(): number;
        get averageSentPackets(): number;
    }
    export class $ProtocolInfo<T extends $PacketListener> {
    }
    export interface $ProtocolInfo<T extends $PacketListener> {
        flow(): $PacketFlow;
        id(): $ConnectionProtocol;
        codec(): $StreamCodec<$ByteBuf, $Packet<T>>;
        bundlerInfo(): $BundlerInfo;
    }
    /**
     * Counterpart to `Varint21LengthFieldPrepender`. Decodes each frame ("packet") by first reading its length and then its data.
     */
    export class $Varint21FrameDecoder extends $ByteToMessageDecoder {
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        constructor(monitor: $BandwidthDebugMonitor | null);
    }
    export class $UnconfiguredPipelineHandler$OutboundConfigurationTask {
    }
    export interface $UnconfiguredPipelineHandler$OutboundConfigurationTask {
        andThen(task: $UnconfiguredPipelineHandler$OutboundConfigurationTask_): $UnconfiguredPipelineHandler$OutboundConfigurationTask;
        run(context: $ChannelHandlerContext): void;
    }
    /**
     * Values that may be interpreted as {@link $UnconfiguredPipelineHandler$OutboundConfigurationTask}.
     */
    export type $UnconfiguredPipelineHandler$OutboundConfigurationTask_ = ((arg0: $ChannelHandlerContext) => void);
}
