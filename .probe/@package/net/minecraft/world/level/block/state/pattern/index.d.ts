import { $LevelReader } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LoadingCache, $CacheLoader } from "@package/com/google/common/cache";

declare module "@package/net/minecraft/world/level/block/state/pattern" {
    export class $BlockPattern$BlockCacheLoader extends $CacheLoader<$BlockPos, $BlockInWorld> {
    }
    export class $BlockPatternBuilder {
        where(symbol: string, blockMatcher: $Predicate_<$BlockInWorld>): $BlockPatternBuilder;
        build(): $BlockPattern;
        static start(): $BlockPatternBuilder;
        /**
         * Adds a single aisle to this pattern, going in the z axis. (so multiple calls to this will increase the z-size by 1)
         */
        aisle(...aisle: string[]): $BlockPatternBuilder;
    }
    export class $BlockInWorld {
        static hasState(state: $Predicate_<$BlockState>): $Predicate<$BlockInWorld>;
        getLevel(): $LevelReader;
        /**
         * Gets the BlockEntity as currently held, or (if it has not gotten it from the level) loads it from the level.
         */
        getEntity(): $BlockEntity;
        /**
         * Gets the block state as currently held, or (if it has not gotten it from the level) loads it from the level.
         * This will only look up the state from the world if `#loadChunks` is true or the block position is loaded.
         */
        getState(): $BlockState;
        getPos(): $BlockPos;
        constructor(level: $LevelReader, pos: $BlockPos_, loadChunks: boolean);
        get level(): $LevelReader;
        get entity(): $BlockEntity;
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $BlockPattern {
        getDepth(): number;
        getPattern(): $Predicate<$BlockInWorld>[][][];
        getWidth(): number;
        matches(level: $LevelReader, pos: $BlockPos_, finger: $Direction_, thumb: $Direction_): $BlockPattern$BlockPatternMatch;
        /**
         * Calculates whether the given world position matches the pattern. Warning, fairly heavy function.
         * @return a BlockPatternMatch if found, null otherwise.
         */
        find(level: $LevelReader, pos: $BlockPos_): $BlockPattern$BlockPatternMatch;
        getHeight(): number;
        static createLevelCache(level: $LevelReader, forceLoad: boolean): $LoadingCache<$BlockPos, $BlockInWorld>;
        constructor(pattern: $Predicate_<$BlockInWorld>[][][]);
        get depth(): number;
        get pattern(): $Predicate<$BlockInWorld>[][][];
        get width(): number;
        get height(): number;
    }
    export class $BlockPattern$BlockPatternMatch {
        getDepth(): number;
        getWidth(): number;
        getBlock(palmOffset: number, thumbOffset: number, fingerOffset: number): $BlockInWorld;
        getHeight(): number;
        getFrontTopLeft(): $BlockPos;
        getUp(): $Direction;
        getForwards(): $Direction;
        constructor(frontTopLeft: $BlockPos_, forwards: $Direction_, up: $Direction_, cache: $LoadingCache<$BlockPos_, $BlockInWorld>, width: number, height: number, depth: number);
        get depth(): number;
        get width(): number;
        get height(): number;
        get frontTopLeft(): $BlockPos;
        get up(): $Direction;
        get forwards(): $Direction;
    }
}
