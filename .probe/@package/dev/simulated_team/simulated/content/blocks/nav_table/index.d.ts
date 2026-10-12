import { $Clearable } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $SingleSlotContainer, $ContainerSlot } from "@package/dev/simulated_team/simulated/multiloader/inventory";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $NavigationTarget } from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $Quaterniond } from "@package/org/joml";
export * as navigation_target from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";

declare module "@package/dev/simulated_team/simulated/content/blocks/nav_table" {
    export class $NavTableInventory extends $SingleSlotContainer {
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: $NavTableBlockEntity);
    }
    export class $NavTableBlockEntity extends $SmartBlockEntity implements $Clearable {
        getRedstoneStrength(arg0: $Direction_): number;
        getHeldItem(): $ItemStack;
        setHeldItem(arg0: $ItemStack_): $ItemStack;
        lastDistanceToTarget(): number;
        clearContent(): void;
        dropHeldItem(): void;
        getNavTableItem(): $NavigationTarget;
        distanceToTarget(): number;
        getTargetPosition(arg0: boolean): $Vec3;
        getRelativeAngle(): number;
        getSublevelRot(): $Quaterniond;
        forceCurrentAngle(arg0: number): void;
        getClientTargetAngle(arg0: number): number;
        getProjectedSelfPos(): $Vec3;
        isPowering: boolean;
        currentTarget: $Vec3;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $NavTableInventory;
        lerpedAngleDegrees: $LerpedFloat;
        subLevel: $SubLevel;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get navTableItem(): $NavigationTarget;
        get relativeAngle(): number;
        get sublevelRot(): $Quaterniond;
        get projectedSelfPos(): $Vec3;
    }
}
