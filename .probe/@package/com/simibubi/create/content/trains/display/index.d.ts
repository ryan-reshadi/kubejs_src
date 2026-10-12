import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $MutableComponent, $Component_, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Comparable } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/simibubi/create/content/trains/display" {
    export class $FlapDisplaySection {
        update(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $FlapDisplaySection;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        getSize(): number;
        tick(arg0: boolean, arg1: $RandomSource): number;
        getText(): $Component;
        setText(arg0: $Component_): void;
        rightAligned(): $FlapDisplaySection;
        renderCharsIndividually(): boolean;
        refresh(arg0: boolean): void;
        wideFlaps(): $FlapDisplaySection;
        static getFlapCycle(arg0: string): string[];
        static WIDE_MONOSPACE: number;
        static MONOSPACE: number;
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: boolean);
        get size(): number;
    }
    export class $GlobalTrainDisplayData$TrainDeparturePrediction implements $Comparable<$GlobalTrainDisplayData$TrainDeparturePrediction> {
        compareTo(arg0: $GlobalTrainDisplayData$TrainDeparturePrediction): number;
        scheduleTitle: $MutableComponent;
        ticks: number;
        destination: string;
        train: $Train;
        constructor(arg0: $Train, arg1: number, arg2: $MutableComponent_, arg3: string);
    }
    export class $FlapDisplayBlockEntity extends $KineticBlockEntity {
        setGlowing(arg0: number): void;
        getMaxCharCount(arg0: number): number;
        getMaxCharCount(): number;
        getDirection(): $Direction;
        getController(): $FlapDisplayBlockEntity;
        getLines(): $List<$FlapDisplayLayout>;
        initDefaultSections(): void;
        updateControllerStatus(): void;
        getLineColor(arg0: number): number;
        getLineIndexAt(arg0: number): number;
        isLineGlowing(arg0: number): boolean;
        applyTextManually(arg0: number, arg1: $Component_): void;
        setColour(arg0: number, arg1: $DyeColor_): void;
        glowingLines: boolean[];
        static ATTACHMENTS_NBT_KEY: string;
        ySize: number;
        source: $BlockPos;
        isController: boolean;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        colour: $DyeColor[];
        manualLines: boolean[];
        isRunning: boolean;
        updateSpeed: boolean;
        xSize: number;
        lines: $List<$FlapDisplayLayout>;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set glowing(value: number);
        get direction(): $Direction;
        get controller(): $FlapDisplayBlockEntity;
    }
    export class $FlapDisplayLayout {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        configure(arg0: string, arg1: $List_<$FlapDisplaySection>): void;
        isLayout(arg0: string): boolean;
        getSections(): $List<$FlapDisplaySection>;
        loadDefault(arg0: number): void;
        constructor(arg0: number);
        get sections(): $List<$FlapDisplaySection>;
    }
}
