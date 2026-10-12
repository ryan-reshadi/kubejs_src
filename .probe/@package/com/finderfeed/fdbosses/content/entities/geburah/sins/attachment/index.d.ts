import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $WorldBox } from "@package/com/finderfeed/fdbosses/content/util";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/finderfeed/fdbosses/content/entities/geburah/sins/attachment" {
    export class $ActivePlayerSinInstance {
        setCustomData(arg0: number): void;
        getCustomData(): number;
        getSinActiveBox(): $WorldBox;
        getActiveSinTime(): number;
        setActiveSinTime(arg0: number): void;
        getSin(): $PlayerSin;
        setSin(arg0: $PlayerSin_): void;
        static CODEC: $Codec<$ActivePlayerSinInstance>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ActivePlayerSinInstance>;
        constructor(arg0: $PlayerSin_, arg1: $WorldBox, arg2: number);
        constructor(arg0: $PlayerSin_, arg1: $WorldBox, arg2: number, arg3: number);
        get sinActiveBox(): $WorldBox;
    }
    export interface $PlayerSin extends RegistryMarked<RegistryTypes.FdbossesPlayerSinTag, RegistryTypes.FdbossesPlayerSin> {}
    export class $PlayerSin {
        onSinAdded(arg0: $Player, arg1: $ActivePlayerSinInstance): void;
        playerTick(arg0: $Player, arg1: $ActivePlayerSinInstance): void;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $PlayerSin}.
     */
    export type $PlayerSin_ = RegistryTypes.FdbossesPlayerSin;
}
