import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $Stack } from "@package/java/util";

declare module "@package/com/finderfeed/fdbosses/mixin" {
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        getDamageContainers(): $Stack<$DamageContainer>;
        get damageContainers(): $Stack<$DamageContainer>;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => $Stack<$DamageContainer>);
}
