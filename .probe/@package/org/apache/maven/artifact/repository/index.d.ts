import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        setEnabled(arg0: boolean): void;
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
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
        constructor();
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor(arg0: boolean, arg1: string, arg2: string);
    }
    export class $Authentication {
        getPassword(): string;
        setPassword(arg0: string): void;
        getPrivateKey(): string;
        setUsername(arg0: string): void;
        getUsername(): string;
        getPassphrase(): string;
        setPassphrase(arg0: string): void;
        setPrivateKey(arg0: string): void;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        getProtocol(): string;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        getUrl(): string;
        getLayout(): $ArtifactRepositoryLayout;
        setId(arg0: string): void;
        isBlocked(): boolean;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProxy(): $Proxy;
        setBlocked(arg0: boolean): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        setProxy(arg0: $Proxy): void;
        setUrl(arg0: string): void;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOf(arg0: $Artifact): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        getBasedir(): string;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        findVersions(arg0: $Artifact): $List<string>;
        isProjectAware(): boolean;
        setAuthentication(arg0: $Authentication): void;
        getAuthentication(): $Authentication;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get key(): string;
        get basedir(): string;
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get uniqueVersion(): boolean;
        get projectAware(): boolean;
    }
}
