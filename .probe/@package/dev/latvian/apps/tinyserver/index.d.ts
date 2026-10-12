import { $HTTPPayload } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $Instant, $ZoneId, $Duration_ } from "@package/java/time";
import { $Consumer_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $FileResponseHandler_ } from "@package/dev/latvian/apps/tinyserver/http/file";
import { $IntStream, $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $WSSessionFactory_, $WSHandler, $WSSession } from "@package/dev/latvian/apps/tinyserver/ws";
import { $HTTPRequest, $HTTPHandler_, $HTTPPathHandler, $HTTPHandler, $HTTPUpgrade, $HTTPMethod_, $HTTPMethod } from "@package/dev/latvian/apps/tinyserver/http";
import { $Set } from "@package/java/util";
import { $Runnable_, $Record, $Runnable } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $SocketChannel } from "@package/java/nio/channels";
export * as ws from "@package/dev/latvian/apps/tinyserver/ws";
export * as http from "@package/dev/latvian/apps/tinyserver/http";
export * as content from "@package/dev/latvian/apps/tinyserver/content";

declare module "@package/dev/latvian/apps/tinyserver" {
    export class $OptionalString extends $Record {
        as<T>(mapper: $Function_<string, T>): T;
        as<T>(mapper: $Function_<string, T>, def: T): T;
        require(): $OptionalString;
        asDouble(def: number): number;
        asDouble(): number;
        asBoolean(def: boolean): boolean;
        asBoolean(): boolean;
        asString(def: string): string;
        asString(): string;
        asInt(def: number): number;
        asInt(): number;
        value(): string;
        static of(str: string): $OptionalString;
        isPresent(): boolean;
        asLong(def: number): number;
        asLong(): number;
        asFloat(def: number): number;
        asFloat(): number;
        isMissing(): boolean;
        asULong(def: number): number;
        asULong(): number;
        asZoneId(): $ZoneId;
        static MISSING: $OptionalString;
        static EMPTY: $OptionalString;
        constructor(value: string);
        get present(): boolean;
        get missing(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $OptionalString}.
     */
    export type $OptionalString_ = { value?: string,  } | [value?: string, ];
    export class $StatusCode extends $Record {
        code(): number;
        message(): string;
        constructor(code: number, message: string);
    }
    /**
     * Values that may be interpreted as {@link $StatusCode}.
     */
    export type $StatusCode_ = { code?: number, message?: string,  } | [code?: number, message?: string, ];
    export class $CompiledPath$Part extends $Record {
        variable(): boolean;
        name(): string;
        matches(string: string): boolean;
        constructor(name: string, variable: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CompiledPath$Part}.
     */
    export type $CompiledPath$Part_ = { variable?: boolean, name?: string,  } | [variable?: boolean, name?: string, ];
    export class $HTTPConnection<REQ extends $HTTPRequest> implements $Runnable {
        readFloat(): number;
        server(): $HTTPServer<REQ>;
        readShort(): number;
        readDouble(): number;
        readLong(): number;
        readByte(): number;
        readBytes(bytes: number[]): void;
        readBytes(bytes: number[], off: number, len: number): void;
        upgrade(): $HTTPUpgrade<REQ>;
        run(): void;
        write(buffer: $ByteBuffer): void;
        read(buffer: $ByteBuffer): void;
        close(): void;
        close(reason: string, error: boolean): void;
        readInt(): number;
        writeDirectly(buffer: $ByteBuffer): void;
        readDirectly(buffer: $ByteBuffer): number;
        readCRLF(): string;
        static SOCKET_CLOSED: $StatusCode;
        static CLOSED: $StatusCode;
        static INVALID_REQUEST: $StatusCode;
        createdTime: $Instant;
        static TIMEOUT: $StatusCode;
        static OPEN: $StatusCode;
        constructor(server: $HTTPServer<REQ>, socketChannel: $SocketChannel, createdTime: $Instant);
    }
    export class $HTTPServer<REQ extends $HTTPRequest> implements $Runnable, $ServerRegistry<REQ> {
        setPort(port: number): void;
        setPort(range: $IntStream): void;
        handlers(): $Stream<$HTTPPathHandler<REQ>>;
        setBufferSize(bufferSize: number): void;
        isRunning(): boolean;
        createBuilder(req: REQ, handler: $HTTPHandler_<REQ>): $HTTPPayload;
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<REQ>): void;
        run(): void;
        setDaemon(daemon: boolean): void;
        start(): number;
        stop(): void;
        connections(): $Set<$HTTPConnection<REQ>>;
        setAddress(address: string): void;
        setServerName(name: string): void;
        setMaxKeepAliveConnections(max: number): void;
        setKeepAliveTimeout(duration: $Duration_): void;
        ws<WSS extends $WSSession<REQ>>(path: string, factory: $WSSessionFactory_<REQ, WSS>): $WSHandler<REQ, WSS>;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<REQ, WSS>;
        redirect(path: string, redirect: string): void;
        post(path: string, handler: $HTTPHandler_<REQ>): void;
        patch(path: string, handler: $HTTPHandler_<REQ>): void;
        get(path: string, handler: $HTTPHandler_<REQ>): void;
        put(path: string, handler: $HTTPHandler_<REQ>): void;
        "delete"(path: string, handler: $HTTPHandler_<REQ>): void;
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        constructor(requestFactory: $Supplier_<REQ>);
        set bufferSize(value: number);
        get running(): boolean;
        set daemon(value: boolean);
        set address(value: string);
        set serverName(value: string);
        set maxKeepAliveConnections(value: number);
        set keepAliveTimeout(value: $Duration_);
    }
    export class $CompiledPath extends $Record {
        string(): string;
        wildcard(): boolean;
        parts(): $CompiledPath$Part[];
        matches(path: string[]): string[];
        static compile(string: string): $CompiledPath;
        variables(): number;
        static EMPTY: $CompiledPath;
        constructor(parts: $CompiledPath$Part_[], string: string, variables: number, wildcard: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CompiledPath}.
     */
    export type $CompiledPath_ = { wildcard?: boolean, string?: string, parts?: $CompiledPath$Part_[], variables?: number,  } | [wildcard?: boolean, string?: string, parts?: $CompiledPath$Part_[], variables?: number, ];
    export class $ServerRegistry<REQ extends $HTTPRequest> {
    }
    export interface $ServerRegistry<REQ extends $HTTPRequest> {
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<REQ>): void;
        ws<WSS extends $WSSession<REQ>>(path: string, factory: $WSSessionFactory_<REQ, WSS>): $WSHandler<REQ, WSS>;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<REQ, WSS>;
        redirect(path: string, redirect: string): void;
        post(path: string, handler: $HTTPHandler_<REQ>): void;
        patch(path: string, handler: $HTTPHandler_<REQ>): void;
        get(path: string, handler: $HTTPHandler_<REQ>): void;
        put(path: string, handler: $HTTPHandler_<REQ>): void;
        "delete"(path: string, handler: $HTTPHandler_<REQ>): void;
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerRegistry}.
     */
    export type $ServerRegistry_<REQ> = ((method: $HTTPMethod, path: string, handler: $HTTPHandler<REQ>) => void);
}
