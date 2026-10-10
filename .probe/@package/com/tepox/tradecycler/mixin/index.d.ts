import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MerchantContainer } from "@package/net/minecraft/world/inventory";
import { $Merchant } from "@package/net/minecraft/world/item/trading";

declare module "@package/com/tepox/tradecycler/mixin" {
    export class $MerchantMenuAccessor {
    }
    export interface $MerchantMenuAccessor {
        tepox$getTrader(): $Merchant;
        tepox$getTradeContainer(): $MerchantContainer;
    }
    export class $VillagerInvoker {
    }
    export interface $VillagerInvoker {
        tepox$invokeUpdateSpecialPrices(arg0: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $VillagerInvoker}.
     */
    export type $VillagerInvoker_ = ((arg0: $Player) => void);
}
