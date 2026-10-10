import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getY(arg0: number): number;
        getFlags(): number;
        getX(arg0: number): number;
        getZ(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getColor(arg0: number): number;
        getVertexNormal(arg0: number): number;
        getColorIndex(): number;
        calculateNormal(): number;
        getLightFace(): $Direction;
        getTexV(arg0: number): number;
        getFaceNormal(): number;
        getTexU(arg0: number): number;
        getAccurateNormal(arg0: number): number;
        getLight(arg0: number): number;
        hasColor(): boolean;
        get flags(): number;
        get sprite(): $TextureAtlasSprite;
        get colorIndex(): number;
        get lightFace(): $Direction;
        get faceNormal(): number;
    }
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        getFaceNormal(): number;
        hasShade(): boolean;
        getNormalFace(): $ModelQuadFacing;
        hasAO(): boolean;
        get faceNormal(): number;
        get normalFace(): $ModelQuadFacing;
    }
}
