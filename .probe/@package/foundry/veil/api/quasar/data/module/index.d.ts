import { $Supplier } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ParticleModuleSet$Builder } from "@package/foundry/veil/api/quasar/particle";
import { $Record } from "@package/java/lang";

declare module "@package/foundry/veil/api/quasar/data/module" {
    export class $ModuleType<T extends $ParticleModuleData> {
    }
    export interface $ModuleType<T extends $ParticleModuleData> {
        defaultValue(): $Supplier<T>;
        codec(): $MapCodec<T>;
        deprecationStatus(): $ModuleType$DeprecationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ModuleType}.
     */
    export type $ModuleType_<T> = RegistryTypes.VeilQuasarModuleType | (() => $MapCodec_<T>);
    export interface $ModuleType<T> extends RegistryMarked<RegistryTypes.VeilQuasarModuleTypeTag, RegistryTypes.VeilQuasarModuleType> {}
    export class $ModuleType$DeprecationStatus extends $Record {
        reason(): string;
        removeVersion(): string;
        constructor(reason: string, removeVersion: string);
    }
    /**
     * Values that may be interpreted as {@link $ModuleType$DeprecationStatus}.
     */
    export type $ModuleType$DeprecationStatus_ = { removeVersion?: string, reason?: string,  } | [removeVersion?: string, reason?: string, ];
    export class $ParticleModuleData {
        static CODEC: $Codec<$Holder<$ParticleModuleData>>;
        /**
         * @deprecated
         */
        static UPDATE_DIRECT_CODEC: $Codec<$ParticleModuleData>;
        /**
         * @deprecated
         */
        static RENDER_DIRECT_CODEC: $Codec<$ParticleModuleData>;
        /**
         * @deprecated
         */
        static RENDER_CODEC: $Codec<$Holder<$ParticleModuleData>>;
        /**
         * @deprecated
         */
        static UPDATE_CODEC: $Codec<$Holder<$ParticleModuleData>>;
        static DIRECT_CODEC: $Codec<$ParticleModuleData>;
        /**
         * @deprecated
         */
        static INIT_CODEC: $Codec<$Holder<$ParticleModuleData>>;
        /**
         * @deprecated
         */
        static INIT_DIRECT_CODEC: $Codec<$ParticleModuleData>;
    }
    export interface $ParticleModuleData {
        addModules(arg0: $ParticleModuleSet$Builder): void;
        getType(): $ModuleType<never>;
        get type(): $ModuleType<never>;
    }
    export class $CodeModule {
    }
    export interface $CodeModule extends $ParticleModuleData {
        getType(): $ModuleType<never>;
        get type(): $ModuleType<never>;
    }
    /**
     * Values that may be interpreted as {@link $CodeModule}.
     */
    export type $CodeModule_ = (() => void);
}
