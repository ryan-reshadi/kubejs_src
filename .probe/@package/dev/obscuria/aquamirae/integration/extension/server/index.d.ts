import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $SubPartEntity } from "@package/dev/obscuria/aquamirae/api/common/entity";
import { $TickableEvent } from "@package/dev/obscuria/aquamirae/api/server";

declare module "@package/dev/obscuria/aquamirae/integration/extension/server" {
    export class $ExtensionServerLevel {
    }
    export interface $ExtensionServerLevel {
        aquamirae$triggerEvent(arg0: $TickableEvent): void;
        aquamirae$getSubParts(): $Int2ObjectMap<$SubPartEntity<never>>;
    }
}
