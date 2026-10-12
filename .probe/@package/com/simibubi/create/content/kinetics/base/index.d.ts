import { $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_ } from "@package/java/util";
import { $DirectionalPreciseKineticOutputAccess, $HeldKineticAngleAccess, $PreciseKineticOutputAccess } from "@package/com/rieno/gadgetsandgizmos/lib/kinetics";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ChatFormatting } from "@package/net/minecraft";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        hideStressImpact(): boolean;
        showCapacityWithAnnotation(): boolean;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getColor(): number;
        getTextColor(): $ChatFormatting;
        getSpeedValue(): number;
        getParticleSpeed(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get color(): number;
        get textColor(): $ChatFormatting;
        get speedValue(): number;
        get particleSpeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension, $HeldKineticAngleAccess, $PreciseKineticOutputAccess, $DirectionalPreciseKineticOutputAccess {
        setSource(arg0: $BlockPos_): void;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        warnOfMovement(): void;
        clearKineticInformation(): void;
        getSpeed(): number;
        setSpeed(arg0: number): void;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        onSpeedChanged(arg0: number): void;
        isSource(): boolean;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        ct$getAbsoluteRotationAngle(arg0: $Direction$Axis_): number;
        ct$hasHeldAngle(arg0: $Direction$Axis_): boolean;
        ct$applyPreciseAngleOutput(arg0: number): void;
        ct$clearPreciseAngleOutput(): void;
        ct$applyDirectionalPreciseAngleOutput(arg0: $Direction_, arg1: number): void;
        ct$clearDirectionalPreciseAngleOutput(): void;
        detachKinetics(): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        hasNetwork(): boolean;
        getOrCreateNetwork(): $KineticNetwork;
        needsSpeedUpdate(): boolean;
        attachKinetics(): void;
        getFlickerScore(): number;
        hasSource(): boolean;
        removeSource(): void;
        getGeneratedSpeed(): number;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        calculateStressApplied(): number;
        calculateAddedStressCapacity(): number;
        handler$zpi000$simulated$injectRemove(arg0: $CallbackInfo): void;
        handler$zpi000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$zpi000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        getTheoreticalSpeed(): number;
        setNetwork(arg0: number): void;
        handler$zpi000$simulated$removeConnected(arg0: $CallbackInfo): void;
        isSpeedRequirementFulfilled(): boolean;
        handler$zpo000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        static convertToLinear(arg0: number): number;
        static convertToAngular(arg0: number): number;
        isOverStressed(): boolean;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        tickAudio(): void;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        simulated$getConnectedToExtraKinetics(): boolean;
        redirect$zpi000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$zpi000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        simulated$setValidationCountdown(arg0: number): void;
        ct$setHeldAngle(arg0: $Direction$Axis_, arg1: number): boolean;
        ct$clearHeldAngles(): boolean;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get orCreateNetwork(): $KineticNetwork;
        get flickerScore(): number;
        get generatedSpeed(): number;
        get theoreticalSpeed(): number;
        get speedRequirementFulfilled(): boolean;
        get overStressed(): boolean;
    }
}
