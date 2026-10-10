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
        getBone(arg0: string): ($GeoBone) | undefined;
        topLevelBones(): $List<$GeoBone>;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_,  } | [topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_, ];
    export class $GeoBone {
        getScaleX(): number;
        getScaleY(): number;
        getMirror(): boolean;
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getRotationVector(): $Vector3d;
        setTrackingMatrices(arg0: boolean): void;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        setHidden(arg0: boolean): void;
        getRotY(): number;
        setRotY(arg0: number): void;
        getRotX(): number;
        setRotX(arg0: number): void;
        getWorldPosition(): $Vector3d;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        markRotationAsChanged(): void;
        setRotZ(arg0: number): void;
        markPositionAsChanged(): void;
        setPosX(arg0: number): void;
        setPosY(arg0: number): void;
        setPosZ(arg0: number): void;
        markScaleAsChanged(): void;
        setChildrenHidden(arg0: boolean): void;
        setPivotX(arg0: number): void;
        setPivotY(arg0: number): void;
        setPivotZ(arg0: number): void;
        saveSnapshot(): $BoneSnapshot;
        getLocalSpaceMatrix(): $Matrix4f;
        getModelSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getPosX(): number;
        getPosY(): number;
        getPosZ(): number;
        getRotZ(): number;
        getScaleZ(): number;
        getInitialSnapshot(): $BoneSnapshot;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getPivotX(): number;
        getPivotY(): number;
        getPivotZ(): number;
        isHidingChildren(): boolean;
        hasScaleChanged(): boolean;
        hasRotationChanged(): boolean;
        hasPositionChanged(): boolean;
        resetStateChanges(): void;
        saveInitialSnapshot(): void;
        shouldNeverRender(): boolean;
        getReset(): boolean;
        isTrackingMatrices(): boolean;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getWorldSpaceNormal(): $Matrix3f;
        getLocalPosition(): $Vector3d;
        getModelPosition(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        getModelRotationMatrix(): $Matrix4f;
        getPositionVector(): $Vector3d;
        getScaleVector(): $Vector3d;
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        setScaleZ(arg0: number): void;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        getCubes(): $List<$GeoCube>;
        getChildBones(): $List<$GeoBone>;
        getInflate(): number;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get mirror(): boolean;
        get name(): string;
        get parent(): $GeoBone;
        get rotationVector(): $Vector3d;
        get worldPosition(): $Vector3d;
        set childrenHidden(value: boolean);
        get initialSnapshot(): $BoneSnapshot;
        get hidingChildren(): boolean;
        get reset(): boolean;
        get localPosition(): $Vector3d;
        get modelRotationMatrix(): $Matrix4f;
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        get childBones(): $List<$GeoBone>;
        get inflate(): number;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { vertices?: $GeoVertex_[], direction?: $Direction_, normal?: $Vector3f,  } | [vertices?: $GeoVertex_[], direction?: $Direction_, normal?: $Vector3f, ];
    export class $GeoCube extends $Record {
        quads(): $GeoQuad[];
        pivot(): $Vec3;
        size(): $Vec3;
        inflate(): number;
        mirror(): boolean;
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, pivot?: $Vec3_, quads?: $GeoQuad_[],  } | [rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, pivot?: $Vec3_, quads?: $GeoQuad_[], ];
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
    export type $GeoVertex_ = { texU?: number, position?: $Vector3f, texV?: number,  } | [texU?: number, position?: $Vector3f, texV?: number, ];
}
