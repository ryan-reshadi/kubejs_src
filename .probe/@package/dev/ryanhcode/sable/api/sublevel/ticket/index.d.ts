import { $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Codec } from "@package/com/mojang/serialization";
import { $GlobalSavedSubLevelPointer, $GlobalSavedSubLevelPointer_ } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";
import { $Unit } from "@package/net/minecraft/util";

declare module "@package/dev/ryanhcode/sable/api/sublevel/ticket" {
    export class $SubLevelLoadingTicket<T> extends $Record {
        type(): $SubLevelLoadingTicketType<T>;
        key(): T;
        subLevelId(): $UUID;
        toCompactString(): string;
        constructor(type: $SubLevelLoadingTicketType_<T>, subLevelId: $UUID_, key: T);
    }
    /**
     * Values that may be interpreted as {@link $SubLevelLoadingTicket}.
     */
    export type $SubLevelLoadingTicket_<T> = { type?: $SubLevelLoadingTicketType_<any>, key?: any, subLevelId?: $UUID_,  } | [type?: $SubLevelLoadingTicketType_<any>, key?: any, subLevelId?: $UUID_, ];
    export class $SubLevelLoadingTicketType<T> extends $Record {
        static create<T>(arg0: $ResourceLocation_, arg1: $Codec<T>): $SubLevelLoadingTicketType<T>;
        static byName(arg0: $ResourceLocation_): $SubLevelLoadingTicketType<never>;
        name(): $ResourceLocation;
        codec(): $Codec<T>;
        static COMMAND_FORCED: $SubLevelLoadingTicketType<$Unit>;
        constructor(name: $ResourceLocation_, codec: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $SubLevelLoadingTicketType}.
     */
    export type $SubLevelLoadingTicketType_<T> = { name?: $ResourceLocation_, codec?: $Codec<any>,  } | [name?: $ResourceLocation_, codec?: $Codec<any>, ];
    export class $SubLevelTicketInfo {
        getPointer(): $GlobalSavedSubLevelPointer;
        setPointer(arg0: $GlobalSavedSubLevelPointer_): void;
        tickets(): $ObjectSet<$SubLevelLoadingTicket<never>>;
        constructor();
        constructor(arg0: $GlobalSavedSubLevelPointer_, arg1: $ObjectSet<$SubLevelLoadingTicket_<never>>);
    }
}
