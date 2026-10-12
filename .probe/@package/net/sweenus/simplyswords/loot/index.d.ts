import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/sweenus/simplyswords/loot" {
    export class $PlayerPityState {
        copy(): $PlayerPityState;
        static readNbt(root: $CompoundTag_): $PlayerPityState;
        writeNbt(): $CompoundTag;
        clearTabletProgress(): void;
        setIgnoreRegionRestriction(ignore: boolean): void;
        clearUniqueProgress(): void;
        ignoresRegionRestriction(): boolean;
        hasCreditedUnique(dimension: string, region: number): boolean;
        tabletMisses(): number;
        hasCreditedTablet(dimension: string, region: number): boolean;
        setTabletMisses(misses: number): void;
        uniqueMisses(): number;
        setUniqueMisses(misses: number): void;
        missUnique(): void;
        missTablet(): void;
        creditTablet(dimension: string, region: number): boolean;
        creditUnique(dimension: string, region: number): boolean;
        resetUnique(): void;
        resetTablet(): void;
        constructor();
        set ignoreRegionRestriction(value: boolean);
    }
    export class $PityStateHolder {
    }
    export interface $PityStateHolder {
        simplyswords$getPityState(): $PlayerPityState;
        simplyswords$setPityState(arg0: $PlayerPityState): void;
    }
}
