import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        setEnabled(arg0: boolean): void;
        setChecksumPolicy(arg0: string): void;
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor();
    }
    export class $Authentication {
        getPrivateKey(): string;
        setPassword(arg0: string): void;
        getPassword(): string;
        setUsername(arg0: string): void;
        getUsername(): string;
        setPassphrase(arg0: string): void;
        setPrivateKey(arg0: string): void;
        getPassphrase(): string;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getUrl(): string;
        setBlocked(arg0: boolean): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        getLayout(): $ArtifactRepositoryLayout;
        setId(arg0: string): void;
        setProxy(arg0: $Proxy): void;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        getProxy(): $Proxy;
        isBlocked(): boolean;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        setAuthentication(arg0: $Authentication): void;
        isProjectAware(): boolean;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        getAuthentication(): $Authentication;
        findVersions(arg0: $Artifact): $List<string>;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        pathOf(arg0: $Artifact): string;
        getBasedir(): string;
        setUrl(arg0: string): void;
        get key(): string;
        get protocol(): string;
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get projectAware(): boolean;
        get uniqueVersion(): boolean;
        get basedir(): string;
    }
}
