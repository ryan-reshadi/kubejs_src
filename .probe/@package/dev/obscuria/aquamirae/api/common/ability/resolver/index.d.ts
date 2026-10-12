import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AbilitySet } from "@package/dev/obscuria/aquamirae/api/common/ability";

declare module "@package/dev/obscuria/aquamirae/api/common/ability/resolver" {
    export class $AbilitySetResolver {
    }
    export interface $AbilitySetResolver {
        countPiecesForTooltip(arg0: $Holder_<$AbilitySet>, arg1: $LivingEntity, arg2: $ItemStack_): number;
        countPieces(arg0: $Holder_<$AbilitySet>, arg1: $LivingEntity): number;
    }
    /**
     * Values that may be interpreted as {@link $AbilitySetResolver}.
     */
    export type $AbilitySetResolver_ = ((arg0: $Holder<$AbilitySet>, arg1: $LivingEntity) => number);
}
