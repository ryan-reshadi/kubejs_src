import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List_, $List } from "@package/java/util";
import { $ClampedItemPropertyFunction_ } from "@package/net/minecraft/client/renderer/item";
import { $EntityTickList } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/blay09/mods/waystones/mixin" {
    export class $ItemPropertiesAccessor {
        static callRegister(arg0: $Item_, arg1: $ResourceLocation_, arg2: $ClampedItemPropertyFunction_): void;
    }
    export interface $ItemPropertiesAccessor {
    }
    export class $StructureTemplatePoolAccessor {
    }
    export interface $StructureTemplatePoolAccessor {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
    }
    export class $ClientLevelAccessor {
    }
    export interface $ClientLevelAccessor {
        waystones$getTickingEntities(): $EntityTickList;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelAccessor}.
     */
    export type $ClientLevelAccessor_ = (() => $EntityTickList);
}
