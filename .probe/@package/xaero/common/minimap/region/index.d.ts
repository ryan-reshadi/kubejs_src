import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        getTile(arg0: number, arg1: number): $MinimapTile;
        getX(): number;
        getZ(): number;
        reset(arg0: number, arg1: number): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        updateBuffers(arg0: number): void;
        setChanged(arg0: boolean): void;
        bindTexture(arg0: number): number;
        isHasSomething(): boolean;
        isChanged(): boolean;
        setLevelsBuffered(arg0: number): void;
        recycleTiles(): void;
        getLevelsBuffered(): number;
        setBlockTextureUpload(arg0: boolean): void;
        getGlTexture(arg0: number): number;
        setGlTexture(arg0: number, arg1: number): void;
        isRefreshRequired(arg0: number): boolean;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        setHasSomething(arg0: boolean): void;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntBuffer, arg7: number): void;
        getLevelToRefresh(arg0: number): number;
        isBlockTextureUpload(): boolean;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get x(): number;
        get z(): number;
    }
    export class $MinimapTile {
        setSuccess(arg0: boolean): void;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getX(): number;
        getZ(): number;
        isSuccess(): boolean;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        getHeight(arg0: number, arg1: number): number;
        recycle(): void;
        isChunkGrid(): boolean;
        isHasSomething(): boolean;
        setWasTransfered(arg0: boolean): void;
        setHasSomething(arg0: boolean): void;
        getHighlightVersion(): number;
        getHighlights(): number[];
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasTerrain(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        setHighlightVersion(arg0: number): void;
        hasTerrain(): boolean;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get x(): number;
        get z(): number;
        get chunkGrid(): boolean;
    }
}
