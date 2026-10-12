import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getFlags(): number;
        getLight(arg0: number): number;
        getY(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        hasColor(): boolean;
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        getZ(arg0: number): number;
        getX(arg0: number): number;
        getColor(arg0: number): number;
        getColorIndex(): number;
        getVertexNormal(arg0: number): number;
        calculateNormal(): number;
        getLightFace(): $Direction;
        getFaceNormal(): number;
        getAccurateNormal(arg0: number): number;
        get flags(): number;
        get sprite(): $TextureAtlasSprite;
        get colorIndex(): number;
        get lightFace(): $Direction;
        get faceNormal(): number;
    }
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        hasShade(): boolean;
        getFaceNormal(): number;
        getNormalFace(): $ModelQuadFacing;
        hasAO(): boolean;
        get faceNormal(): number;
        get normalFace(): $ModelQuadFacing;
    }
}
