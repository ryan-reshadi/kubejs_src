import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad" {
    export class $TQuad {
        getQuadHash(): number;
        getExtents(): number[];
        getCenter(): $Vector3fc;
        getFacing(): $ModelQuadFacing;
        getAccurateNormal(): $Vector3fc;
        getQuantizedNormal(): $Vector3fc;
        static extentsEqual(arg0: number[], arg1: number[]): boolean;
        extentsEqual(arg0: number[]): boolean;
        static extentsIntersect(arg0: $TQuad, arg1: $TQuad): boolean;
        static extentsIntersect(arg0: number[], arg1: number[]): boolean;
        getPackedNormal(): number;
        useQuantizedFacing(): $ModelQuadFacing;
        getVertexPositions(): number[];
        getAccurateDotProduct(): number;
        getQuantizedDotProduct(): number;
        static VERTEX_EPSILON: number;
        static QUANTIZE_EPSILON: number;
        get quadHash(): number;
        get extents(): number[];
        get center(): $Vector3fc;
        get facing(): $ModelQuadFacing;
        get accurateNormal(): $Vector3fc;
        get quantizedNormal(): $Vector3fc;
        get packedNormal(): number;
        get vertexPositions(): number[];
        get accurateDotProduct(): number;
        get quantizedDotProduct(): number;
    }
}
