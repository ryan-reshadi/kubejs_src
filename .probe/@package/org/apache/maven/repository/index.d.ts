export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        getHost(): string;
        getPort(): number;
        getProtocol(): string;
        setProtocol(arg0: string): void;
        setPassword(arg0: string): void;
        getUserName(): string;
        getPassword(): string;
        setPort(arg0: number): void;
        setHost(arg0: string): void;
        setNtlmDomain(arg0: string): void;
        setNtlmHost(arg0: string): void;
        getNtlmHost(): string;
        getNtlmDomain(): string;
        setUserName(arg0: string): void;
        setNonProxyHosts(arg0: string): void;
        getNonProxyHosts(): string;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
