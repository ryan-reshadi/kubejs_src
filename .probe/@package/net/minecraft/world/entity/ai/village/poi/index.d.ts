import { $ChunkPos, $LevelHeightAccessor, $LevelReader } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $Set, $Set_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $RandomSource } from "@package/net/minecraft/util";
import { $RegionStorageInfo_, $ChunkIOErrorReporter, $SectionStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $Predicate, $Consumer_, $BiConsumer, $Predicate_, $BiPredicate_, $BooleanSupplier_ } from "@package/java/util/function";
import { $SectionTracker } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Holder_, $RegistryAccess, $Registry, $SectionPos, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Runnable_, $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/entity/ai/village/poi" {
    export class $PoiType extends $Record {
        is(state: $BlockState_): boolean;
        matchingStates(): $Set<$BlockState>;
        maxTickets(): number;
        validRange(): number;
        static NONE: $Predicate<$Holder<$PoiType>>;
        constructor(matchingStates: $Set_<$BlockState_>, maxTickets: number, validRange: number);
    }
    /**
     * Values that may be interpreted as {@link $PoiType}.
     */
    export type $PoiType_ = RegistryTypes.PointOfInterestType | { matchingStates?: $Set_<$BlockState_>, validRange?: number, maxTickets?: number,  } | [matchingStates?: $Set_<$BlockState_>, validRange?: number, maxTickets?: number, ];
    export class $PoiManager extends $SectionStorage<$PoiSection> {
        findAll(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$BlockPos>;
        release(pos: $BlockPos_): boolean;
        tick(aheadOfTime: $BooleanSupplier_): void;
        take(typePredicate: $Predicate_<$Holder<$PoiType>>, combinedTypePosPredicate: $BiPredicate_<$Holder<$PoiType>, $BlockPos>, pos: $BlockPos_, distance: number): ($BlockPos) | undefined;
        getRandom(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, status: $PoiManager$Occupancy_, pos: $BlockPos_, distance: number, random: $RandomSource): ($BlockPos) | undefined;
        exists(pos: $BlockPos_, typePredicate: $Predicate_<$Holder<$PoiType>>): boolean;
        remove(pos: $BlockPos_): void;
        add(pos: $BlockPos_, type: $Holder_<$PoiType>): void;
        find(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): ($BlockPos) | undefined;
        getType(pos: $BlockPos_): ($Holder<$PoiType>) | undefined;
        getInRange(typePredicate: $Predicate_<$Holder<$PoiType>>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        findClosest(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): ($BlockPos) | undefined;
        findClosest(typePredicate: $Predicate_<$Holder<$PoiType>>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): ($BlockPos) | undefined;
        sectionsToVillage(sectionPos: $SectionPos): number;
        existsAtPosition(type: $ResourceKey_<$PoiType>, pos: $BlockPos_): boolean;
        findAllWithType(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        getInChunk(typePredicate: $Predicate_<$Holder<$PoiType>>, posChunk: $ChunkPos, status: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        getInSquare(typePredicate: $Predicate_<$Holder<$PoiType>>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        checkConsistencyWithBlocks(sectionPos: $SectionPos, levelChunkSection: $LevelChunkSection): void;
        ensureLoadedAndValid(levelReader: $LevelReader, pos: $BlockPos_, coordinateOffset: number): void;
        findClosestWithType(typePredicate: $Predicate_<$Holder<$PoiType>>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): ($Pair<$Holder<$PoiType>, $BlockPos>) | undefined;
        getCountInRange(typePredicate: $Predicate_<$Holder<$PoiType>>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): number;
        findAllClosestFirstWithType(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        /**
         * @deprecated
         */
        getFreeTickets(pos: $BlockPos_): number;
        static MAX_VILLAGE_DISTANCE: number;
        static VILLAGE_SECTION_SIZE: number;
        constructor(info: $RegionStorageInfo_, folder: $Path_, fixerUpper: $DataFixer, sync: boolean, registryAccess: $RegistryAccess, errorReporter: $ChunkIOErrorReporter, levelHeightAccessor: $LevelHeightAccessor);
    }
    export interface $PoiType extends RegistryMarked<RegistryTypes.PointOfInterestTypeTag, RegistryTypes.PointOfInterestType> {}
    export class $PoiManager$DistanceTracker extends $SectionTracker {
        static SOURCE: number;
    }
    export class $PoiManager$Occupancy extends $Enum<$PoiManager$Occupancy> {
        static values(): $PoiManager$Occupancy[];
        static valueOf(arg0: string): $PoiManager$Occupancy;
        getTest(): $Predicate<$PoiRecord>;
        static IS_OCCUPIED: $PoiManager$Occupancy;
        static HAS_SPACE: $PoiManager$Occupancy;
        static ANY: $PoiManager$Occupancy;
        get test(): $Predicate<$PoiRecord>;
    }
    /**
     * Values that may be interpreted as {@link $PoiManager$Occupancy}.
     */
    export type $PoiManager$Occupancy_ = "has_space" | "is_occupied" | "any";
    export class $PoiRecord {
        static codec(executable: $Runnable_): $Codec<$PoiRecord>;
        getPos(): $BlockPos;
        getPoiType(): $Holder<$PoiType>;
        isOccupied(): boolean;
        hasSpace(): boolean;
        /**
         * @deprecated
         */
        getFreeTickets(): number;
        constructor(pod: $BlockPos_, poiType: $Holder_<$PoiType>, setDirty: $Runnable_);
        get pos(): $BlockPos;
        get poiType(): $Holder<$PoiType>;
        get occupied(): boolean;
        get freeTickets(): number;
    }
    export class $PoiTypes {
        static bootstrap(registry: $Registry<$PoiType_>): $PoiType;
        static hasPoi(state: $BlockState_): boolean;
        static registerBlockStates(poi: $Holder_<$PoiType>, states: $Set_<$BlockState_>): void;
        static forState(state: $BlockState_): ($Holder<$PoiType>) | undefined;
        static CARTOGRAPHER: $ResourceKey<$PoiType>;
        static MASON: $ResourceKey<$PoiType>;
        static SHEPHERD: $ResourceKey<$PoiType>;
        static ARMORER: $ResourceKey<$PoiType>;
        static TOOLSMITH: $ResourceKey<$PoiType>;
        static MEETING: $ResourceKey<$PoiType>;
        static BEE_NEST: $ResourceKey<$PoiType>;
        static LODESTONE: $ResourceKey<$PoiType>;
        static FARMER: $ResourceKey<$PoiType>;
        static FLETCHER: $ResourceKey<$PoiType>;
        static LEATHERWORKER: $ResourceKey<$PoiType>;
        static LIBRARIAN: $ResourceKey<$PoiType>;
        static CLERIC: $ResourceKey<$PoiType>;
        static FISHERMAN: $ResourceKey<$PoiType>;
        static BUTCHER: $ResourceKey<$PoiType>;
        static BEEHIVE: $ResourceKey<$PoiType>;
        static NETHER_PORTAL: $ResourceKey<$PoiType>;
        static WEAPONSMITH: $ResourceKey<$PoiType>;
        static LIGHTNING_ROD: $ResourceKey<$PoiType>;
        static HOME: $ResourceKey<$PoiType>;
        constructor();
    }
    export class $PoiSection {
        refresh(posToTypeConsumer: $Consumer_<$BiConsumer<$BlockPos, $Holder<$PoiType>>>): void;
        release(pos: $BlockPos_): boolean;
        exists(pos: $BlockPos_, typePredicate: $Predicate_<$Holder<$PoiType>>): boolean;
        remove(pos: $BlockPos_): void;
        add(pos: $BlockPos_, type: $Holder_<$PoiType>): void;
        getType(pos: $BlockPos_): ($Holder<$PoiType>) | undefined;
        static codec(executable: $Runnable_): $Codec<$PoiSection>;
        getRecords(typePredicate: $Predicate_<$Holder<$PoiType>>, status: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        /**
         * @deprecated
         */
        getFreeTickets(pos: $BlockPos_): number;
        constructor(setDirty: $Runnable_);
    }
}
