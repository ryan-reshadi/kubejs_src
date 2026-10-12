import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMajorVersion(): number;
        parseVersion(arg0: string): void;
        getIncrementalVersion(): number;
        getBuildNumber(): number;
        getQualifier(): string;
        getMinorVersion(): number;
        get majorVersion(): number;
        get incrementalVersion(): number;
        get buildNumber(): number;
        get qualifier(): string;
        get minorVersion(): number;
    }
    export class $VersionRange {
        getRestrictions(): $List<$Restriction>;
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        getRecommendedVersion(): $ArtifactVersion;
        static createFromVersion(arg0: string): $VersionRange;
        restrict(arg0: $VersionRange): $VersionRange;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        hasRestrictions(): boolean;
        containsVersion(arg0: $ArtifactVersion): boolean;
        static createFromVersionSpec(arg0: string): $VersionRange;
        get restrictions(): $List<$Restriction>;
        get recommendedVersion(): $ArtifactVersion;
    }
    export class $Restriction {
        getLowerBound(): $ArtifactVersion;
        getUpperBound(): $ArtifactVersion;
        isLowerBoundInclusive(): boolean;
        isUpperBoundInclusive(): boolean;
        containsVersion(arg0: $ArtifactVersion): boolean;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get lowerBound(): $ArtifactVersion;
        get upperBound(): $ArtifactVersion;
        get lowerBoundInclusive(): boolean;
        get upperBoundInclusive(): boolean;
    }
}
