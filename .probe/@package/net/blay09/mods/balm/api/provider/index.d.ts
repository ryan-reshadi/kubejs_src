import { $Direction } from "@package/net/minecraft/core";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $List } from "@package/java/util";
import { $Class } from "@package/java/lang";

declare module "@package/net/blay09/mods/balm/api/provider" {
    /**
     * @deprecated
     */
    export class $BalmProvider<T> {
        getProviderClass(): $Class<T>;
        getInstance(): T;
        constructor(arg0: $Class<T>, arg1: T);
        get providerClass(): $Class<T>;
        get instance(): T;
    }
    /**
     * @deprecated
     */
    export class $BalmProviderHolder {
    }
    export interface $BalmProviderHolder {
        /**
         * @deprecated
         */
        getProviders(): $List<$BalmProvider<never>>;
        /**
         * @deprecated
         */
        getSidedProviders(): $List<$Pair<$Direction, $BalmProvider<never>>>;
        get providers(): $List<$BalmProvider<never>>;
        get sidedProviders(): $List<$Pair<$Direction, $BalmProvider<never>>>;
    }
}
