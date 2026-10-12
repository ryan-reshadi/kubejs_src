import { $InputStream, $OutputStream } from "@package/java/io";
export * as entity from "@package/org/apache/http/entity";

declare module "@package/org/apache/http" {
    export class $HttpEntity {
    }
    export interface $HttpEntity {
        getContent(): $InputStream;
        writeTo(arg0: $OutputStream): void;
        getContentEncoding(): $Header;
        getContentLength(): number;
        getContentType(): $Header;
        isStreaming(): boolean;
        isRepeatable(): boolean;
        isChunked(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        get content(): $InputStream;
        get contentEncoding(): $Header;
        get contentLength(): number;
        get contentType(): $Header;
        get streaming(): boolean;
        get repeatable(): boolean;
        get chunked(): boolean;
    }
    export class $HeaderElement {
    }
    export interface $HeaderElement {
        getParameters(): $NameValuePair[];
        getParameter(arg0: number): $NameValuePair;
        getName(): string;
        getValue(): string;
        getParameterCount(): number;
        getParameterByName(arg0: string): $NameValuePair;
        get parameters(): $NameValuePair[];
        get name(): string;
        get value(): string;
        get parameterCount(): number;
    }
    export class $Header {
    }
    export interface $Header extends $NameValuePair {
        getElements(): $HeaderElement[];
        get elements(): $HeaderElement[];
    }
    export class $NameValuePair {
    }
    export interface $NameValuePair {
        getName(): string;
        getValue(): string;
        get name(): string;
        get value(): string;
    }
}
