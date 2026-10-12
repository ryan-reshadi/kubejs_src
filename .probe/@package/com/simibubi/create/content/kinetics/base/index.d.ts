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
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        hideStressImpact(): boolean;
        showCapacityWithAnnotation(): boolean;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        getTextColor(): $ChatFormatting;
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getColor(): number;
        getSpeedValue(): number;
        getParticleSpeed(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get textColor(): $ChatFormatting;
        get color(): number;
        get speedValue(): number;
        get particleSpeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension, $HeldKineticAngleAccess, $PreciseKineticOutputAccess, $DirectionalPreciseKineticOutputAccess {
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        onSpeedChanged(arg0: number): void;
        warnOfMovement(): void;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        clearKineticInformation(): void;
        setSource(arg0: $BlockPos_): void;
        calculateStressApplied(): number;
        getTheoreticalSpeed(): number;
        isSource(): boolean;
        calculateAddedStressCapacity(): number;
        isSpeedRequirementFulfilled(): boolean;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        setNetwork(arg0: number): void;
        tickAudio(): void;
        hasSource(): boolean;
        hasNetwork(): boolean;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        handler$zpi000$simulated$injectRemove(arg0: $CallbackInfo): void;
        handler$zpi000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        ct$applyDirectionalPreciseAngleOutput(arg0: $Direction_, arg1: number): void;
        handler$zpi000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$zpi000$simulated$removeConnected(arg0: $CallbackInfo): void;
        redirect$zpi000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        ct$clearDirectionalPreciseAngleOutput(): void;
        redirect$zpi000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        simulated$getConnectedToExtraKinetics(): boolean;
        handler$zpo000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        ct$getAbsoluteRotationAngle(arg0: $Direction$Axis_): number;
        simulated$setValidationCountdown(arg0: number): void;
        getOrCreateNetwork(): $KineticNetwork;
        needsSpeedUpdate(): boolean;
        attachKinetics(): void;
        getFlickerScore(): number;
        removeSource(): void;
        detachKinetics(): void;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        getGeneratedSpeed(): number;
        static convertToAngular(arg0: number): number;
        static convertToLinear(arg0: number): number;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        ct$hasHeldAngle(arg0: $Direction$Axis_): boolean;
        ct$setHeldAngle(arg0: $Direction$Axis_, arg1: number): boolean;
        ct$clearHeldAngles(): boolean;
        isOverStressed(): boolean;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        ct$applyPreciseAngleOutput(arg0: number): void;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        ct$clearPreciseAngleOutput(): void;
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
        get theoreticalSpeed(): number;
        get speedRequirementFulfilled(): boolean;
        get orCreateNetwork(): $KineticNetwork;
        get flickerScore(): number;
        get generatedSpeed(): number;
        get overStressed(): boolean;
    }
}
