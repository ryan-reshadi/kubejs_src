import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentPredicate$Builder, $DataComponentPredicate } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $ArrayList } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/trading" {
    export class $MerchantOffer {
        getResult(): $ItemStack;
        take(playerOfferA: $ItemStack_, playerOfferB: $ItemStack_): boolean;
        copy(): $MerchantOffer;
        assemble(): $ItemStack;
        getUses(): number;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        resetSpecialPriceDiff(): void;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        updateDemand(): void;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        resetUses(): void;
        needsRestock(): boolean;
        getPriceMultiplier(): number;
        addToSpecialPriceDiff(add: number): void;
        getBaseCostA(): $ItemStack;
        shouldRewardExp(): boolean;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        increaseUses(): void;
        getItemCostA(): $ItemCost;
        getItemCostB(): ($ItemCost) | undefined;
        getXp(): number;
        getCostA(): $ItemStack;
        getCostB(): $ItemStack;
        isOutOfStock(): boolean;
        getMaxUses(): number;
        getDemand(): number;
        satisfiedBy(playerOfferA: $ItemStack_, playerOfferB: $ItemStack_): boolean;
        setSpecialPriceDiff(add: number): void;
        getSpecialPriceDiff(): number;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        setToOutOfStock(): void;
        static createFromStream(buffer: $RegistryFriendlyByteBuf): $MerchantOffer;
        static CODEC: $Codec<$MerchantOffer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(baseCostA: $ItemCost_, result: $ItemStack_, maxUses: number, xp: number, priceMultiplier: number);
        constructor(baseCostA: $ItemCost_, costB: ($ItemCost_) | undefined, result: $ItemStack_, maxUses: number, xp: number, priceMultiplier: number);
        constructor(baseCostA: $ItemCost_, costB: ($ItemCost_) | undefined, result: $ItemStack_, uses: number, maxUses: number, xp: number, priceMultiplier: number);
        constructor(baseCostA: $ItemCost_, costB: ($ItemCost_) | undefined, result: $ItemStack_, uses: number, maxUses: number, xp: number, priceMultiplier: number, demand: number);
        get result(): $ItemStack;
        get uses(): number;
        get priceMultiplier(): number;
        get baseCostA(): $ItemStack;
        get itemCostA(): $ItemCost;
        get itemCostB(): ($ItemCost) | undefined;
        get xp(): number;
        get costA(): $ItemStack;
        get costB(): $ItemStack;
        get outOfStock(): boolean;
        get maxUses(): number;
        get demand(): number;
    }
    export class $MerchantOffers extends $ArrayList<$MerchantOffer> {
        copy(): $MerchantOffers;
        getRecipeFor(stackA: $ItemStack_, stackB: $ItemStack_, index: number): $MerchantOffer;
        static CODEC: $Codec<$MerchantOffers>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffers>;
        constructor();
    }
    export class $Merchant {
    }
    export interface $Merchant {
        getOffers(): $MerchantOffers;
        isClientSide(): boolean;
        setTradingPlayer(tradingPlayer: $Player | null): void;
        openTradingScreen(player: $Player, displayName: $Component_, level: number): void;
        getTradingPlayer(): $Player;
        canRestock(): boolean;
        showProgressBar(): boolean;
        overrideOffers(offers: $MerchantOffers): void;
        overrideXp(xp: number): void;
        notifyTrade(offer: $MerchantOffer): void;
        /**
         * Notifies the merchant of a possible merchant recipe being fulfilled or not. Usually, this is just a sound byte being played depending on whether the suggested `ItemStack` is not empty.
         */
        notifyTradeUpdated(stack: $ItemStack_): void;
        getNotifyTradeSound(): $SoundEvent;
        getVillagerXp(): number;
        get offers(): $MerchantOffers;
        get clientSide(): boolean;
        get notifyTradeSound(): $SoundEvent;
        get villagerXp(): number;
    }
    export class $ItemCost extends $Record {
        components(): $DataComponentPredicate;
        item(): $Holder<$Item>;
        test(stack: $ItemStack_): boolean;
        count(): number;
        itemStack(): $ItemStack;
        withComponents(components: $UnaryOperator_<$DataComponentPredicate$Builder>): $ItemCost;
        static CODEC: $Codec<$ItemCost>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($ItemCost) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCost>;
        constructor(item: $ItemLike_);
        constructor(item: $ItemLike_, count: number);
        constructor(item: $Holder_<$Item>, count: number, componentPredicate: $DataComponentPredicate);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate, arg3: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $ItemCost}.
     */
    export type $ItemCost_ = { item?: $Holder_<$Item>, count?: number, components?: $DataComponentPredicate, itemStack?: $ItemStack_,  } | [item?: $Holder_<$Item>, count?: number, components?: $DataComponentPredicate, itemStack?: $ItemStack_, ];
}
