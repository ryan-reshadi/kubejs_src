import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/net/blay09/mods/balm/api/container" {
    export class $BalmContainerProvider {
    }
    export interface $BalmContainerProvider {
        insertItemStacked(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        getContainer(): $Container;
        getContainer(arg0: $Direction_): $Container;
        dropItems(arg0: $Level_, arg1: $BlockPos_): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        insertItem(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $BalmContainerProvider}.
     */
    export type $BalmContainerProvider_ = (() => $Container);
}
