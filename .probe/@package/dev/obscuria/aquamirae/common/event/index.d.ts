import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/obscuria/aquamirae/common/event" {
    export interface $PathDefinition extends RegistryMarked<RegistryTypes.AquamiraePathTag, RegistryTypes.AquamiraePath> {}
    export class $PathDefinition extends $Record {
        resolve(arg0: $ServerLevel, arg1: $Vec3_): $List<$Vec3>;
        vScale(): number;
        points(): $List<$Vec3>;
        hScale(): number;
        static CODEC: $Codec<$Holder<$PathDefinition>>;
        static DIRECT_CODEC: $Codec<$PathDefinition>;
        static DEFAULT: $ResourceKey<$PathDefinition>;
        constructor(hScale: number, vScale: number, points: $List_<$Vec3_>);
    }
    /**
     * Values that may be interpreted as {@link $PathDefinition}.
     */
    export type $PathDefinition_ = RegistryTypes.AquamiraePath | { vScale?: number, points?: $List_<$Vec3_>, hScale?: number,  } | [vScale?: number, points?: $List_<$Vec3_>, hScale?: number, ];
}
