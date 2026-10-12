import { $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BalmProviderHolder, $BalmProvider } from "@package/net/blay09/mods/balm/api/provider";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $BalmBlockEntityBase } from "@package/net/blay09/mods/balm/api/block/entity";
import { $List, $List_ } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/blay09/mods/balm/common" {
    export class $BalmBlockEntity extends $BalmBlockEntityBase implements $BalmProviderHolder {
        sync(): void;
        /**
         * @deprecated
         */
        getProvider<T>(arg0: $Class<T>): T;
        createUpdateTag(arg0: $BlockEntity): $CompoundTag;
        createUpdatePacket(): $Packet<$ClientGamePacketListener>;
        /**
         * @deprecated
         */
        buildProviders(arg0: $List_<$Object>): void;
        /**
         * @deprecated
         */
        getProviders(): $List<$BalmProvider<never>>;
        /**
         * @deprecated
         */
        getSidedProviders(): $List<$Pair<$Direction, $BalmProvider<never>>>;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get providers(): $List<$BalmProvider<never>>;
        get sidedProviders(): $List<$Pair<$Direction, $BalmProvider<never>>>;
    }
}
