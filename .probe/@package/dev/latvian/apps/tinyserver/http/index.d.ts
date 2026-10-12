import { $Instant } from "@package/java/time";
import { $HTTPResponse, $HTTPPayload } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $OptionalString, $HTTPServer, $OptionalString_, $CompiledPath, $CompiledPath_, $HTTPConnection } from "@package/dev/latvian/apps/tinyserver";
import { $Throwable, $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
export * as file from "@package/dev/latvian/apps/tinyserver/http/file";
export * as response from "@package/dev/latvian/apps/tinyserver/http/response";

declare module "@package/dev/latvian/apps/tinyserver/http" {
    export class $HTTPMethod extends $Enum<$HTTPMethod> {
        static fromString(method: string): $HTTPMethod;
        body(): boolean;
        static values(): $HTTPMethod[];
        static valueOf(name: string): $HTTPMethod;
        static TRACE: $HTTPMethod;
        static HEAD: $HTTPMethod;
        static DELETE: $HTTPMethod;
        static POST: $HTTPMethod;
        static GET: $HTTPMethod;
        static CONNECT: $HTTPMethod;
        static OPTIONS: $HTTPMethod;
        static PUT: $HTTPMethod;
        static PATCH: $HTTPMethod;
    }
    /**
     * Values that may be interpreted as {@link $HTTPMethod}.
     */
    export type $HTTPMethod_ = "head" | "get" | "post" | "put" | "patch" | "delete" | "options" | "trace" | "connect";
    export class $HTTPPathHandler<REQ extends $HTTPRequest> extends $Record {
        path(): $CompiledPath;
        method(): $HTTPMethod;
        handler(): $HTTPHandler<REQ>;
        static DEFAULT: $HTTPPathHandler<never>;
        constructor(method: $HTTPMethod_, path: $CompiledPath_, handler: $HTTPHandler_<REQ>);
    }
    /**
     * Values that may be interpreted as {@link $HTTPPathHandler}.
     */
    export type $HTTPPathHandler_<REQ> = { method?: $HTTPMethod_, handler?: $HTTPHandler_<$HTTPRequest>, path?: $CompiledPath_,  } | [method?: $HTTPMethod_, handler?: $HTTPHandler_<$HTTPRequest>, path?: $CompiledPath_, ];
    export class $Body {
        text(): string;
        property(key: string): $OptionalString;
        byteBuffer(): $ByteBuffer;
        contentType(): string;
        name(): string;
        fileName(): string;
        bytes(): number[];
        getPostData(): $Map<string, $OptionalString>;
        constructor();
        get postData(): $Map<string, $OptionalString>;
    }
    export class $HTTPRequest {
        headers(): $List<$Header>;
        server(): $HTTPServer<never>;
        header(name: string): $OptionalString;
        ip(): string;
        ipv6(): string;
        pathParts(): string[];
        connection(): $HTTPConnection<never>;
        query(): $Map<string, $OptionalString>;
        query(key: string): $OptionalString;
        path(): string;
        cookies(): $Map<string, $OptionalString>;
        cookie(key: string): $OptionalString;
        country(): string;
        variable(name: string): $OptionalString;
        userAgent(): string;
        method(): $HTTPMethod;
        init(path: string, pathParts: string[], compiledPath: $CompiledPath_, headers: $List_<$Header_>, queryString: string, query: $Map_<string, $OptionalString_>): void;
        startTime(): $Instant;
        fullPath(): string;
        handleResponse(payload: $HTTPPayload, response: $HTTPResponse, error: $Throwable): $HTTPResponse;
        bodyBuffer(): $ByteBuffer;
        preInit(session: $HTTPConnection<never>, startTime: $Instant, method: $HTTPMethod_): void;
        queryString(): string;
        variables(): $Map<string, $OptionalString>;
        afterInit(): void;
        afterResponse(payload: $HTTPPayload, response: $HTTPResponse, handler: $HTTPHandler_<never>, error: $Throwable): void;
        createPreResponse(handler: $HTTPHandler_<never>): $HTTPResponse;
        formData(key: string): $OptionalString;
        formData(): $Map<string, $OptionalString>;
        acceptedEncodings(): $Set<string>;
        bodyList(): $List<$Body>;
        gitHubSignature(): string;
        gitHubEvent(): string;
        mainBody(): $Body;
        constructor();
    }
    export class $Header extends $Record {
        is(name: string): boolean;
        value(): $OptionalString;
        key(): string;
        constructor(key: string, value: string);
        constructor(key: string, value: $OptionalString_);
    }
    /**
     * Values that may be interpreted as {@link $Header}.
     */
    export type $Header_ = { value?: $OptionalString_, key?: string,  } | [value?: $OptionalString_, key?: string, ];
    export class $HTTPHandler<REQ extends $HTTPRequest> {
    }
    export interface $HTTPHandler<REQ extends $HTTPRequest> {
        handle(req: REQ): $HTTPResponse;
        isFileHandler(): boolean;
        get fileHandler(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HTTPHandler}.
     */
    export type $HTTPHandler_<REQ> = ((req: REQ) => $HTTPResponse);
    export class $HTTPUpgrade<REQ extends $HTTPRequest> {
    }
    export interface $HTTPUpgrade<REQ extends $HTTPRequest> {
        protocol(): string;
        isClosed(): boolean;
        start(req: REQ): void;
        get closed(): boolean;
    }
}
