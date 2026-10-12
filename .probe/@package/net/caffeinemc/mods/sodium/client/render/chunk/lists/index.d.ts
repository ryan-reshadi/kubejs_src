import { $SectionPos } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ByteIterator } from "@package/net/caffeinemc/mods/sodium/client/util/iterator";
import { $SortedRenderListsAccessor } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $Iterator } from "@package/java/util";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists" {
    export class $ChunkRenderListIterable {
    }
    export interface $ChunkRenderListIterable {
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
        iterator(): $Iterator<$ChunkRenderList>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderListIterable}.
     */
    export type $ChunkRenderListIterable_ = ((arg0: boolean) => $Iterator<$ChunkRenderList>);
    export class $SortedRenderLists implements $ChunkRenderListIterable, $SortedRenderListsAccessor {
        static empty(): $SortedRenderLists;
        static init$veil_$md$90c85e$0(arg0: $ObjectArrayList<any>): $SortedRenderLists;
        iterator(): $Iterator<$ChunkRenderList>;
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
    }
    export class $ChunkRenderList {
        getRegion(): $RenderRegion;
        size(): number;
        reset(arg0: number, arg1: boolean): void;
        add(arg0: number, arg1: number): void;
        sectionsWithSpritesIterator(): $ByteIterator;
        getLastVisibleFrame(): number;
        getSectionsWithGeometryCount(): number;
        sectionsWithEntitiesIterator(): $ByteIterator;
        prepareForRender(arg0: $SectionPos, arg1: $SortItemsProvider): void;
        sectionsWithGeometryIterator(arg0: boolean): $ByteIterator;
        getSectionsWithSpritesCount(): number;
        getSectionsWithEntitiesCount(): number;
        constructor(arg0: $RenderRegion);
        get region(): $RenderRegion;
        get lastVisibleFrame(): number;
        get sectionsWithGeometryCount(): number;
        get sectionsWithSpritesCount(): number;
        get sectionsWithEntitiesCount(): number;
    }
    export class $SortItemsProvider {
    }
    export interface $SortItemsProvider {
        setCachedSortItems(arg0: number[]): void;
        getCachedSortItems(): number[];
        ensureSortItemsOfLength(arg0: number): number[];
    }
}
