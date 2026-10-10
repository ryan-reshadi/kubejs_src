import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List_, $List } from "@package/java/util";
import { $EntitySectionStorage, $PersistentEntitySectionManager, $EntityAccess } from "@package/net/minecraft/world/level/entity";

declare module "@package/me/corvino/aeronauticsdiscovery/mixin/accessor" {
    export class $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> {
    }
    export interface $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> {
        getSectionStorage(): $EntitySectionStorage<T>;
        get sectionStorage(): $EntitySectionStorage<T>;
    }
    /**
     * Values that may be interpreted as {@link $PersistentEntitySectionManagerAccessor}.
     */
    export type $PersistentEntitySectionManagerAccessor_<T> = (() => $EntitySectionStorage<T>);
    export class $LevelAccessor {
    }
    export interface $LevelAccessor {
        getEntityManager(): $PersistentEntitySectionManager<$Entity>;
        get entityManager(): $PersistentEntitySectionManager<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $LevelAccessor}.
     */
    export type $LevelAccessor_ = (() => $PersistentEntitySectionManager<$Entity>);
    export class $StructureTemplatePoolAccessor {
    }
    export interface $StructureTemplatePoolAccessor {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
    }
}
