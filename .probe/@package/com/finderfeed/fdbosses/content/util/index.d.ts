import { $Level } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/finderfeed/fdbosses/content/util" {
    export class $WorldBox {
        getDimension(): $ResourceKey<$Level>;
        isEntityInBox(arg0: $Entity): boolean;
        getBox(): $AABB;
        static CODEC: $Codec<$WorldBox>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WorldBox>;
        constructor(arg0: $ResourceKey_<$Level>, arg1: $AABB_);
        get dimension(): $ResourceKey<$Level>;
        get box(): $AABB;
    }
}
