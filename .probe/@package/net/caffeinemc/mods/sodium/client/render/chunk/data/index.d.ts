import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $GlBufferSegment, $GlBufferArena } from "@package/net/caffeinemc/mods/sodium/client/gl/arena";
import { $NativeBuffer } from "@package/net/caffeinemc/mods/sodium/client/util";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/data" {
    export class $BuiltSectionInfo {
        culledBlockEntities: $BlockEntity[];
        globalBlockEntities: $BlockEntity[];
        visibilityData: number;
        flags: number;
        animatedSprites: $TextureAtlasSprite[];
        static EMPTY: $BuiltSectionInfo;
    }
    export class $SectionRenderDataStorage {
        "delete"(): void;
        getDataPointer(arg0: number): number;
        onBufferResized(): void;
        removeIndexData(arg0: number): void;
        setVertexData(arg0: number, arg1: $GlBufferSegment, arg2: number[]): void;
        removeVertexData(arg0: number): void;
        setIndexData(arg0: number, arg1: $GlBufferSegment): void;
        removeData(arg0: number): void;
        onIndexBufferResized(): void;
        setSharedIndexUsage(arg0: number, arg1: number): boolean;
        updateSharedIndexData(arg0: $CommandList, arg1: $GlBufferArena, arg2: number): boolean;
        needsSharedIndexUpdate(): boolean;
        constructor(arg0: boolean);
    }
    export class $BuiltSectionMeshParts {
        computeVertexCounts(): number[];
        getVertexSegments(): number[];
        getVertexData(): $NativeBuffer;
        constructor(arg0: $NativeBuffer, arg1: number[]);
        get vertexSegments(): number[];
        get vertexData(): $NativeBuffer;
    }
}
