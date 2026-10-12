export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        setHost(arg0: string): void;
        setPort(arg0: number): void;
        setProtocol(arg0: string): void;
        getProtocol(): string;
        getPassword(): string;
        getUserName(): string;
        getHost(): string;
        getPort(): number;
        setPassword(arg0: string): void;
        setUserName(arg0: string): void;
        getNonProxyHosts(): string;
        setNonProxyHosts(arg0: string): void;
        getNtlmHost(): string;
        setNtlmHost(arg0: string): void;
        setNtlmDomain(arg0: string): void;
        getNtlmDomain(): string;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
