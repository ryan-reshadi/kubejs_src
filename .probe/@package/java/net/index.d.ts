import { $Serializable, $InputStream, $OutputStream, $Closeable } from "@package/java/io";
import { $Stream } from "@package/java/util/stream";
import { $Permission } from "@package/java/security";
import { $Enum, $Comparable, $Object, $Class } from "@package/java/lang";
import { $Enumeration, $List, $Map, $Set } from "@package/java/util";
import { $DatagramChannel, $SocketChannel, $ServerSocketChannel } from "@package/java/nio/channels";
export * as http from "@package/java/net/http";

declare module "@package/java/net" {
    export class $ServerSocket implements $Closeable {
        setReuseAddress(arg0: boolean): void;
        setReceiveBufferSize(arg0: number): void;
        setSoTimeout(arg0: number): void;
        getReceiveBufferSize(): number;
        getSoTimeout(): number;
        setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        static setSocketFactory(arg0: $SocketImplFactory_): void;
        getChannel(): $ServerSocketChannel;
        getInetAddress(): $InetAddress;
        getLocalSocketAddress(): $SocketAddress;
        isBound(): boolean;
        getLocalPort(): number;
        getReuseAddress(): boolean;
        isClosed(): boolean;
        supportedOptions(): $Set<$SocketOption<never>>;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $ServerSocket;
        bind(arg0: $SocketAddress, arg1: number): void;
        bind(arg0: $SocketAddress): void;
        getOption<T>(arg0: $SocketOption<T>): T;
        accept(): $Socket;
        close(): void;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: $InetAddress);
        constructor();
        constructor(arg0: number, arg1: number);
        static set socketFactory(value: $SocketImplFactory_);
        get channel(): $ServerSocketChannel;
        get inetAddress(): $InetAddress;
        get localSocketAddress(): $SocketAddress;
        get bound(): boolean;
        get localPort(): number;
        get closed(): boolean;
    }
    export class $NetworkInterface {
        getIndex(): number;
        getInterfaceAddresses(): $List<$InterfaceAddress>;
        getSubInterfaces(): $Enumeration<$NetworkInterface>;
        subInterfaces(): $Stream<$NetworkInterface>;
        static getByIndex(arg0: number): $NetworkInterface;
        isPointToPoint(): boolean;
        supportsMulticast(): boolean;
        getMTU(): number;
        static getNetworkInterfaces(): $Enumeration<$NetworkInterface>;
        getInetAddresses(): $Enumeration<$InetAddress>;
        static getByInetAddress(arg0: $InetAddress): $NetworkInterface;
        getHardwareAddress(): number[];
        isLoopback(): boolean;
        isUp(): boolean;
        static getByName(arg0: string): $NetworkInterface;
        static networkInterfaces(): $Stream<$NetworkInterface>;
        inetAddresses(): $Stream<$InetAddress>;
        getDisplayName(): string;
        getName(): string;
        isVirtual(): boolean;
        getParent(): $NetworkInterface;
        get index(): number;
        get interfaceAddresses(): $List<$InterfaceAddress>;
        get pointToPoint(): boolean;
        get MTU(): number;
        get hardwareAddress(): number[];
        get loopback(): boolean;
        get up(): boolean;
        get displayName(): string;
        get name(): string;
        get virtual(): boolean;
        get parent(): $NetworkInterface;
    }
    export class $URLStreamHandlerFactory {
    }
    export interface $URLStreamHandlerFactory {
        createURLStreamHandler(arg0: string): $URLStreamHandler;
    }
    /**
     * Values that may be interpreted as {@link $URLStreamHandlerFactory}.
     */
    export type $URLStreamHandlerFactory_ = ((arg0: string) => $URLStreamHandler);
    export class $InterfaceAddress {
        getAddress(): $InetAddress;
        getNetworkPrefixLength(): number;
        getBroadcast(): $InetAddress;
        get address(): $InetAddress;
        get networkPrefixLength(): number;
        get broadcast(): $InetAddress;
    }
    export class $SocketImplFactory {
    }
    export interface $SocketImplFactory {
        createSocketImpl(): $SocketImpl;
    }
    /**
     * Values that may be interpreted as {@link $SocketImplFactory}.
     */
    export type $SocketImplFactory_ = (() => $SocketImpl);
    export class $URI implements $Comparable<$URI>, $Serializable {
        static create(arg0: string): $URI;
        normalize(): $URI;
        relativize(arg0: $URI): $URI;
        getAuthority(): string;
        getQuery(): string;
        getPath(): string;
        getUserInfo(): string;
        toURL(): $URL;
        getScheme(): string;
        isOpaque(): boolean;
        getRawAuthority(): string;
        getRawFragment(): string;
        getRawQuery(): string;
        getRawPath(): string;
        getHost(): string;
        getPort(): number;
        getRawSchemeSpecificPart(): string;
        parseServerAuthority(): $URI;
        getSchemeSpecificPart(): string;
        getRawUserInfo(): string;
        getFragment(): string;
        toASCIIString(): string;
        compareTo(arg0: $URI): number;
        isAbsolute(): boolean;
        resolve(arg0: string): $URI;
        resolve(arg0: $URI): $URI;
        constructor(arg0: string);
        constructor(arg0: string, arg1: string, arg2: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string);
        get authority(): string;
        get query(): string;
        get path(): string;
        get userInfo(): string;
        get scheme(): string;
        get opaque(): boolean;
        get rawAuthority(): string;
        get rawFragment(): string;
        get rawQuery(): string;
        get rawPath(): string;
        get host(): string;
        get port(): number;
        get rawSchemeSpecificPart(): string;
        get schemeSpecificPart(): string;
        get rawUserInfo(): string;
        get fragment(): string;
        get absolute(): boolean;
    }
    export class $URL implements $Serializable {
        getContent(arg0: $Class<never>[]): $Object;
        getContent(): $Object;
        getProtocol(): string;
        getAuthority(): string;
        getFile(): string;
        getRef(): string;
        getQuery(): string;
        getPath(): string;
        getUserInfo(): string;
        toURI(): $URI;
        static setURLStreamHandlerFactory(arg0: $URLStreamHandlerFactory_): void;
        getHost(): string;
        getPort(): number;
        getDefaultPort(): number;
        sameFile(arg0: $URL): boolean;
        toExternalForm(): string;
        openConnection(arg0: $Proxy): $URLConnection;
        openConnection(): $URLConnection;
        static of(arg0: $URI, arg1: $URLStreamHandler): $URL;
        openStream(): $InputStream;
        /**
         * @deprecated
         */
        constructor(arg0: $URL, arg1: string, arg2: $URLStreamHandler);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: $URLStreamHandler);
        /**
         * @deprecated
         */
        constructor(arg0: string);
        /**
         * @deprecated
         */
        constructor(arg0: $URL, arg1: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: number, arg3: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: string);
        get protocol(): string;
        get authority(): string;
        get file(): string;
        get ref(): string;
        get query(): string;
        get path(): string;
        get userInfo(): string;
        static set URLStreamHandlerFactory(value: $URLStreamHandlerFactory_);
        get host(): string;
        get port(): number;
        get defaultPort(): number;
    }
    export class $SocketImpl implements $SocketOptions {
        constructor();
    }
    export class $Proxy {
        address(): $SocketAddress;
        type(): $Proxy$Type;
        static NO_PROXY: $Proxy;
        constructor(arg0: $Proxy$Type_, arg1: $SocketAddress);
    }
    export class $DatagramSocket implements $Closeable {
        disconnect(): void;
        setReuseAddress(arg0: boolean): void;
        setReceiveBufferSize(arg0: number): void;
        setSoTimeout(arg0: number): void;
        setTrafficClass(arg0: number): void;
        getReceiveBufferSize(): number;
        getSendBufferSize(): number;
        getSoTimeout(): number;
        getTrafficClass(): number;
        setSendBufferSize(arg0: number): void;
        getPort(): number;
        getChannel(): $DatagramChannel;
        getInetAddress(): $InetAddress;
        getRemoteSocketAddress(): $SocketAddress;
        getLocalSocketAddress(): $SocketAddress;
        isBound(): boolean;
        getLocalPort(): number;
        getReuseAddress(): boolean;
        send(arg0: $DatagramPacket): void;
        isClosed(): boolean;
        supportedOptions(): $Set<$SocketOption<never>>;
        isConnected(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $DatagramSocket;
        setBroadcast(arg0: boolean): void;
        getBroadcast(): boolean;
        joinGroup(arg0: $SocketAddress, arg1: $NetworkInterface): void;
        /**
         * @deprecated
         */
        static setDatagramSocketImplFactory(arg0: $DatagramSocketImplFactory_): void;
        bind(arg0: $SocketAddress): void;
        getLocalAddress(): $InetAddress;
        getOption<T>(arg0: $SocketOption<T>): T;
        receive(arg0: $DatagramPacket): void;
        connect(arg0: $SocketAddress): void;
        connect(arg0: $InetAddress, arg1: number): void;
        close(): void;
        leaveGroup(arg0: $SocketAddress, arg1: $NetworkInterface): void;
        constructor(arg0: number);
        constructor(arg0: number, arg1: $InetAddress);
        constructor(arg0: $SocketAddress);
        constructor();
        get port(): number;
        get channel(): $DatagramChannel;
        get inetAddress(): $InetAddress;
        get remoteSocketAddress(): $SocketAddress;
        get localSocketAddress(): $SocketAddress;
        get bound(): boolean;
        get localPort(): number;
        get closed(): boolean;
        get connected(): boolean;
        static set datagramSocketImplFactory(value: $DatagramSocketImplFactory_);
        get localAddress(): $InetAddress;
    }
    export class $InetAddress implements $Serializable {
        getAddress(): number[];
        static getLoopbackAddress(): $InetAddress;
        getHostName(): string;
        static getLocalHost(): $InetAddress;
        isLoopbackAddress(): boolean;
        static getByName(arg0: string): $InetAddress;
        isReachable(arg0: number): boolean;
        isReachable(arg0: $NetworkInterface, arg1: number, arg2: number): boolean;
        static getAllByName(arg0: string): $InetAddress[];
        static getByAddress(arg0: string, arg1: number[]): $InetAddress;
        static getByAddress(arg0: number[]): $InetAddress;
        isMulticastAddress(): boolean;
        isSiteLocalAddress(): boolean;
        isMCGlobal(): boolean;
        isMCNodeLocal(): boolean;
        isMCLinkLocal(): boolean;
        isMCSiteLocal(): boolean;
        isMCOrgLocal(): boolean;
        getCanonicalHostName(): string;
        isAnyLocalAddress(): boolean;
        isLinkLocalAddress(): boolean;
        getHostAddress(): string;
        get address(): number[];
        get hostName(): string;
        static get localHost(): $InetAddress;
        get multicastAddress(): boolean;
        get siteLocalAddress(): boolean;
        get MCGlobal(): boolean;
        get MCNodeLocal(): boolean;
        get MCLinkLocal(): boolean;
        get MCSiteLocal(): boolean;
        get MCOrgLocal(): boolean;
        get canonicalHostName(): string;
        get anyLocalAddress(): boolean;
        get linkLocalAddress(): boolean;
        get hostAddress(): string;
    }
    export class $FileNameMap {
    }
    export interface $FileNameMap {
        getContentTypeFor(arg0: string): string;
    }
    /**
     * Values that may be interpreted as {@link $FileNameMap}.
     */
    export type $FileNameMap_ = ((arg0: string) => string);
    export class $ContentHandlerFactory {
    }
    export interface $ContentHandlerFactory {
        createContentHandler(arg0: string): $ContentHandler;
    }
    /**
     * Values that may be interpreted as {@link $ContentHandlerFactory}.
     */
    export type $ContentHandlerFactory_ = ((arg0: string) => $ContentHandler);
    export class $URLConnection {
        getInputStream(): $InputStream;
        getContent(arg0: $Class<never>[]): $Object;
        getContent(): $Object;
        getPermission(): $Permission;
        static getDefaultUseCaches(arg0: string): boolean;
        getDefaultUseCaches(): boolean;
        getHeaderFieldLong(arg0: string, arg1: number): number;
        getHeaderFieldDate(arg0: string, arg1: number): number;
        static getFileNameMap(): $FileNameMap;
        static setFileNameMap(arg0: $FileNameMap_): void;
        setConnectTimeout(arg0: number): void;
        getConnectTimeout(): number;
        setReadTimeout(arg0: number): void;
        getReadTimeout(): number;
        getContentEncoding(): string;
        getExpiration(): number;
        getDate(): number;
        getLastModified(): number;
        getHeaderFieldInt(arg0: string, arg1: number): number;
        setDoInput(arg0: boolean): void;
        getDoInput(): boolean;
        setDoOutput(arg0: boolean): void;
        getDoOutput(): boolean;
        setAllowUserInteraction(arg0: boolean): void;
        getAllowUserInteraction(): boolean;
        static setDefaultAllowUserInteraction(arg0: boolean): void;
        static getDefaultAllowUserInteraction(): boolean;
        getUseCaches(): boolean;
        setIfModifiedSince(arg0: number): void;
        getIfModifiedSince(): number;
        static setDefaultUseCaches(arg0: string, arg1: boolean): void;
        setDefaultUseCaches(arg0: boolean): void;
        /**
         * @deprecated
         */
        static setDefaultRequestProperty(arg0: string, arg1: string): void;
        /**
         * @deprecated
         */
        static getDefaultRequestProperty(arg0: string): string;
        static setContentHandlerFactory(arg0: $ContentHandlerFactory_): void;
        getContentLength(): number;
        getContentLengthLong(): number;
        getHeaderFields(): $Map<string, $List<string>>;
        getHeaderField(arg0: number): string;
        getHeaderField(arg0: string): string;
        static guessContentTypeFromStream(arg0: $InputStream): string;
        static guessContentTypeFromName(arg0: string): string;
        setRequestProperty(arg0: string, arg1: string): void;
        addRequestProperty(arg0: string, arg1: string): void;
        getRequestProperty(arg0: string): string;
        getRequestProperties(): $Map<string, $List<string>>;
        getHeaderFieldKey(arg0: number): string;
        getContentType(): string;
        getOutputStream(): $OutputStream;
        setUseCaches(arg0: boolean): void;
        getURL(): $URL;
        connect(): void;
        get inputStream(): $InputStream;
        get permission(): $Permission;
        get contentEncoding(): string;
        get expiration(): number;
        get date(): number;
        get lastModified(): number;
        static set contentHandlerFactory(value: $ContentHandlerFactory_);
        get contentLength(): number;
        get contentLengthLong(): number;
        get headerFields(): $Map<string, $List<string>>;
        get requestProperties(): $Map<string, $List<string>>;
        get contentType(): string;
        get outputStream(): $OutputStream;
        get URL(): $URL;
    }
    export class $ProtocolFamily {
    }
    export interface $ProtocolFamily {
        name(): string;
    }
    /**
     * Values that may be interpreted as {@link $ProtocolFamily}.
     */
    export type $ProtocolFamily_ = (() => string);
    export class $Authenticator {
        static requestPasswordAuthentication(arg0: string, arg1: $InetAddress, arg2: number, arg3: string, arg4: string, arg5: string): $PasswordAuthentication;
        static requestPasswordAuthentication(arg0: $InetAddress, arg1: number, arg2: string, arg3: string, arg4: string): $PasswordAuthentication;
        static requestPasswordAuthentication(arg0: $Authenticator, arg1: string, arg2: $InetAddress, arg3: number, arg4: string, arg5: string, arg6: string, arg7: $URL, arg8: $Authenticator$RequestorType_): $PasswordAuthentication;
        static requestPasswordAuthentication(arg0: string, arg1: $InetAddress, arg2: number, arg3: string, arg4: string, arg5: string, arg6: $URL, arg7: $Authenticator$RequestorType_): $PasswordAuthentication;
        requestPasswordAuthenticationInstance(arg0: string, arg1: $InetAddress, arg2: number, arg3: string, arg4: string, arg5: string, arg6: $URL, arg7: $Authenticator$RequestorType_): $PasswordAuthentication;
        static setDefault(arg0: $Authenticator): void;
        static getDefault(): $Authenticator;
        constructor();
    }
    export class $InetSocketAddress extends $SocketAddress {
        getHostString(): string;
        getAddress(): $InetAddress;
        isUnresolved(): boolean;
        getHostName(): string;
        getPort(): number;
        static createUnresolved(arg0: string, arg1: number): $InetSocketAddress;
        constructor(arg0: string, arg1: number);
        constructor(arg0: $InetAddress, arg1: number);
        constructor(arg0: number);
        get hostString(): string;
        get address(): $InetAddress;
        get unresolved(): boolean;
        get hostName(): string;
        get port(): number;
    }
    export class $PasswordAuthentication {
        getPassword(): string[];
        getUserName(): string;
        constructor(arg0: string, arg1: string[]);
        get password(): string[];
        get userName(): string;
    }
    export class $Socket implements $Closeable {
        setKeepAlive(arg0: boolean): void;
        setOOBInline(arg0: boolean): void;
        setReuseAddress(arg0: boolean): void;
        setReceiveBufferSize(arg0: number): void;
        setSoLinger(arg0: boolean, arg1: number): void;
        setSoTimeout(arg0: number): void;
        setTcpNoDelay(arg0: boolean): void;
        setTrafficClass(arg0: number): void;
        getReceiveBufferSize(): number;
        getSendBufferSize(): number;
        getSoLinger(): number;
        getSoTimeout(): number;
        getTrafficClass(): number;
        setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
        setSendBufferSize(arg0: number): void;
        getInputStream(): $InputStream;
        getPort(): number;
        getChannel(): $SocketChannel;
        isOutputShutdown(): boolean;
        isInputShutdown(): boolean;
        getInetAddress(): $InetAddress;
        getRemoteSocketAddress(): $SocketAddress;
        getLocalSocketAddress(): $SocketAddress;
        isBound(): boolean;
        getLocalPort(): number;
        getTcpNoDelay(): boolean;
        getKeepAlive(): boolean;
        getReuseAddress(): boolean;
        sendUrgentData(arg0: number): void;
        getOOBInline(): boolean;
        /**
         * @deprecated
         */
        static setSocketImplFactory(arg0: $SocketImplFactory_): void;
        isClosed(): boolean;
        getOutputStream(): $OutputStream;
        supportedOptions(): $Set<$SocketOption<never>>;
        isConnected(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $Socket;
        bind(arg0: $SocketAddress): void;
        getLocalAddress(): $InetAddress;
        getOption<T>(arg0: $SocketOption<T>): T;
        shutdownInput(): void;
        shutdownOutput(): void;
        connect(arg0: $SocketAddress, arg1: number): void;
        connect(arg0: $SocketAddress): void;
        close(): void;
        /**
         * @deprecated
         */
        constructor(arg0: $InetAddress, arg1: number, arg2: boolean);
        constructor(arg0: string, arg1: number);
        constructor(arg0: $Proxy);
        constructor();
        constructor(arg0: $InetAddress, arg1: number, arg2: $InetAddress, arg3: number);
        constructor(arg0: string, arg1: number, arg2: $InetAddress, arg3: number);
        constructor(arg0: $InetAddress, arg1: number);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: number, arg2: boolean);
        get inputStream(): $InputStream;
        get port(): number;
        get channel(): $SocketChannel;
        get outputShutdown(): boolean;
        get inputShutdown(): boolean;
        get inetAddress(): $InetAddress;
        get remoteSocketAddress(): $SocketAddress;
        get localSocketAddress(): $SocketAddress;
        get bound(): boolean;
        get localPort(): number;
        static set socketImplFactory(value: $SocketImplFactory_);
        get closed(): boolean;
        get outputStream(): $OutputStream;
        get connected(): boolean;
        get localAddress(): $InetAddress;
    }
    export class $HttpURLConnection extends $URLConnection {
        setAuthenticator(arg0: $Authenticator): void;
        setFixedLengthStreamingMode(arg0: number): void;
        setFixedLengthStreamingMode(arg0: number): void;
        setChunkedStreamingMode(arg0: number): void;
        static setFollowRedirects(arg0: boolean): void;
        static getFollowRedirects(): boolean;
        getInstanceFollowRedirects(): boolean;
        getRequestMethod(): string;
        getResponseMessage(): string;
        disconnect(): void;
        usingProxy(): boolean;
        setInstanceFollowRedirects(arg0: boolean): void;
        setRequestMethod(arg0: string): void;
        getResponseCode(): number;
        getErrorStream(): $InputStream;
        static HTTP_SEE_OTHER: number;
        static HTTP_CLIENT_TIMEOUT: number;
        static HTTP_BAD_REQUEST: number;
        static HTTP_ACCEPTED: number;
        static HTTP_NOT_ACCEPTABLE: number;
        static HTTP_PROXY_AUTH: number;
        static HTTP_REQ_TOO_LONG: number;
        static HTTP_RESET: number;
        static HTTP_LENGTH_REQUIRED: number;
        static HTTP_VERSION: number;
        static HTTP_PRECON_FAILED: number;
        static HTTP_GATEWAY_TIMEOUT: number;
        static HTTP_PAYMENT_REQUIRED: number;
        /**
         * @deprecated
         */
        static HTTP_SERVER_ERROR: number;
        static HTTP_NOT_MODIFIED: number;
        static HTTP_BAD_METHOD: number;
        static HTTP_BAD_GATEWAY: number;
        static HTTP_MOVED_PERM: number;
        static HTTP_NO_CONTENT: number;
        static HTTP_ENTITY_TOO_LARGE: number;
        static HTTP_MOVED_TEMP: number;
        static HTTP_NOT_AUTHORITATIVE: number;
        static HTTP_UNAVAILABLE: number;
        static HTTP_USE_PROXY: number;
        static HTTP_INTERNAL_ERROR: number;
        static HTTP_OK: number;
        static HTTP_MULT_CHOICE: number;
        static HTTP_CONFLICT: number;
        static HTTP_CREATED: number;
        static HTTP_UNAUTHORIZED: number;
        static HTTP_FORBIDDEN: number;
        static HTTP_NOT_IMPLEMENTED: number;
        static HTTP_GONE: number;
        static HTTP_UNSUPPORTED_TYPE: number;
        static HTTP_PARTIAL: number;
        static HTTP_NOT_FOUND: number;
        set authenticator(value: $Authenticator);
        set chunkedStreamingMode(value: number);
        get responseMessage(): string;
        get responseCode(): number;
        get errorStream(): $InputStream;
    }
    export class $SocketAddress implements $Serializable {
        constructor();
    }
    export class $URLStreamHandler {
        constructor();
    }
    export class $DatagramPacket {
        getAddress(): $InetAddress;
        setPort(arg0: number): void;
        getSocketAddress(): $SocketAddress;
        getData(): number[];
        getPort(): number;
        setData(arg0: number[]): void;
        setData(arg0: number[], arg1: number, arg2: number): void;
        getOffset(): number;
        getLength(): number;
        setLength(arg0: number): void;
        setSocketAddress(arg0: $SocketAddress): void;
        setAddress(arg0: $InetAddress): void;
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: number[], arg1: number);
        constructor(arg0: number[], arg1: number, arg2: number, arg3: $InetAddress, arg4: number);
        constructor(arg0: number[], arg1: number, arg2: number, arg3: $SocketAddress);
        constructor(arg0: number[], arg1: number, arg2: $SocketAddress);
        constructor(arg0: number[], arg1: number, arg2: $InetAddress, arg3: number);
        get offset(): number;
    }
    export class $ContentHandler {
        getContent(arg0: $URLConnection): $Object;
        getContent(arg0: $URLConnection, arg1: $Class<any>[]): $Object;
        constructor();
    }
    export class $DatagramSocketImplFactory {
    }
    export interface $DatagramSocketImplFactory {
        createDatagramSocketImpl(): $DatagramSocketImpl;
    }
    /**
     * Values that may be interpreted as {@link $DatagramSocketImplFactory}.
     */
    export type $DatagramSocketImplFactory_ = (() => $DatagramSocketImpl);
    export class $SocketOption<T> {
    }
    export interface $SocketOption<T> {
        name(): string;
        type(): $Class<T>;
    }
    export class $Proxy$Type extends $Enum<$Proxy$Type> {
        static values(): $Proxy$Type[];
        static valueOf(arg0: string): $Proxy$Type;
        static SOCKS: $Proxy$Type;
        static HTTP: $Proxy$Type;
        static DIRECT: $Proxy$Type;
    }
    /**
     * Values that may be interpreted as {@link $Proxy$Type}.
     */
    export type $Proxy$Type_ = "direct" | "http" | "socks";
    export class $Authenticator$RequestorType extends $Enum<$Authenticator$RequestorType> {
        static values(): $Authenticator$RequestorType[];
        static valueOf(arg0: string): $Authenticator$RequestorType;
        static PROXY: $Authenticator$RequestorType;
        static SERVER: $Authenticator$RequestorType;
    }
    /**
     * Values that may be interpreted as {@link $Authenticator$RequestorType}.
     */
    export type $Authenticator$RequestorType_ = "proxy" | "server";
}
