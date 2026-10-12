import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties, $ModelProperties_, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3d, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        topLevelBones(): $List<$GeoBone>;
        getBone(arg0: string): ($GeoBone) | undefined;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>,  } | [properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>, ];
    export class $GeoBone {
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getWorldPosition(): $Vector3d;
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        getChildBones(): $List<$GeoBone>;
        markPositionAsChanged(): void;
        getMirror(): boolean;
        setHidden(arg0: boolean): void;
        getWorldSpaceNormal(): $Matrix3f;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        saveInitialSnapshot(): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        getModelSpaceMatrix(): $Matrix4f;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        getWorldSpaceMatrix(): $Matrix4f;
        getModelRotationMatrix(): $Matrix4f;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getRotationVector(): $Vector3d;
        getScaleX(): number;
        getScaleY(): number;
        setTrackingMatrices(arg0: boolean): void;
        getInitialSnapshot(): $BoneSnapshot;
        isHidingChildren(): boolean;
        isTrackingMatrices(): boolean;
        markScaleAsChanged(): void;
        hasPositionChanged(): boolean;
        getModelPosition(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        getPositionVector(): $Vector3d;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        setChildrenHidden(arg0: boolean): void;
        hasScaleChanged(): boolean;
        saveSnapshot(): $BoneSnapshot;
        resetStateChanges(): void;
        shouldNeverRender(): boolean;
        getScaleVector(): $Vector3d;
        getLocalPosition(): $Vector3d;
        hasRotationChanged(): boolean;
        markRotationAsChanged(): void;
        getLocalSpaceMatrix(): $Matrix4f;
        getCubes(): $List<$GeoCube>;
        getInflate(): number;
        setScaleZ(arg0: number): void;
        getPosY(): number;
        setRotZ(arg0: number): void;
        setPosX(arg0: number): void;
        getPivotY(): number;
        setPivotY(arg0: number): void;
        getPosZ(): number;
        getRotZ(): number;
        getPivotX(): number;
        getPosX(): number;
        getReset(): boolean;
        setScaleY(arg0: number): void;
        setPosY(arg0: number): void;
        setScaleX(arg0: number): void;
        setPivotX(arg0: number): void;
        getScaleZ(): number;
        getPivotZ(): number;
        setPivotZ(arg0: number): void;
        setPosZ(arg0: number): void;
        getRotY(): number;
        setRotX(arg0: number): void;
        getRotX(): number;
        setRotY(arg0: number): void;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get worldPosition(): $Vector3d;
        get name(): string;
        get parent(): $GeoBone;
        get childBones(): $List<$GeoBone>;
        get mirror(): boolean;
        get modelRotationMatrix(): $Matrix4f;
        get rotationVector(): $Vector3d;
        get initialSnapshot(): $BoneSnapshot;
        get hidingChildren(): boolean;
        get positionVector(): $Vector3d;
        set childrenHidden(value: boolean);
        get scaleVector(): $Vector3d;
        get localPosition(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        get inflate(): number;
        get reset(): boolean;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { normal?: $Vector3f, direction?: $Direction_, vertices?: $GeoVertex_[],  } | [normal?: $Vector3f, direction?: $Direction_, vertices?: $GeoVertex_[], ];
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        rotation(): $Vec3;
        mirror(): boolean;
        quads(): $GeoQuad[];
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, quads?: $GeoQuad_[], pivot?: $Vec3_,  } | [mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, quads?: $GeoQuad_[], pivot?: $Vec3_, ];
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        texU(): number;
        texV(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { texU?: number, texV?: number, position?: $Vector3f,  } | [texU?: number, texV?: number, position?: $Vector3f, ];
}
