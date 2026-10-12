import { $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SwingAnimation } from "@package/net/mehvahdjukaar/amendments/common";
import { $ModBlockProperties$PostType } from "@package/net/mehvahdjukaar/amendments/reg";

declare module "@package/net/mehvahdjukaar/amendments/common/tile" {
    export class $HangingSignTileExtension {
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        getFrontItem(): $ItemStack;
        getClientAnimation(): $SwingAnimation;
        updateAttachments(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        getBackItem(): $ItemStack;
        canSwing(): boolean;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): void;
        getRightAttachment(): $ModBlockProperties$PostType;
        getLeftAttachment(): $ModBlockProperties$PostType;
        setBackItem(arg0: $ItemStack_): void;
        setFrontItem(arg0: $ItemStack_): void;
        constructor(arg0: $BlockState_);
        get clientAnimation(): $SwingAnimation;
        get rightAttachment(): $ModBlockProperties$PostType;
        get leftAttachment(): $ModBlockProperties$PostType;
    }
}
