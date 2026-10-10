import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/sweenus/simplyswords/loot" {
    export class $PlayerPityState {
        copy(): $PlayerPityState;
        static readNbt(root: $CompoundTag_): $PlayerPityState;
        writeNbt(): $CompoundTag;
        setIgnoreRegionRestriction(ignore: boolean): void;
        setUniqueMisses(misses: number): void;
        setTabletMisses(misses: number): void;
        clearUniqueProgress(): void;
        clearTabletProgress(): void;
        hasCreditedUnique(dimension: string, region: number): boolean;
        hasCreditedTablet(dimension: string, region: number): boolean;
        ignoresRegionRestriction(): boolean;
        tabletMisses(): number;
        uniqueMisses(): number;
        resetUnique(): void;
        resetTablet(): void;
        missUnique(): void;
        missTablet(): void;
        creditUnique(dimension: string, region: number): boolean;
        creditTablet(dimension: string, region: number): boolean;
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
