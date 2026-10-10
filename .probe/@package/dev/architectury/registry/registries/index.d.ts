import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $RegistrarOption } from "@package/dev/architectury/registry/registries/options";
import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map$Entry, $Set } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $OptionalSupplier } from "@package/dev/architectury/utils";
export * as options from "@package/dev/architectury/registry/registries/options";

declare module "@package/dev/architectury/registry/registries" {
    export class $RegistrySupplier<T> {
    }
    export interface $RegistrySupplier<T> extends $DeferredSupplier<T>, $Holder<T> {
        listen(callback: $Consumer_<T>): void;
        getRegistrar(): $Registrar<T>;
        getRegistrarManager(): $RegistrarManager;
        get registrar(): $Registrar<T>;
        get registrarManager(): $RegistrarManager;
    }
    export class $RegistrarManager {
        getModId(): string;
        static get(modId: string): $RegistrarManager;
        /**
         * @deprecated
         */
        get<T>(registry: $Registry<T>): $Registrar<T>;
        get<T>(key: $ResourceKey_<$Registry<T>>): $Registrar<T>;
        builder<T>(registryId: $ResourceLocation_, ...typeGetter: T[]): $RegistrarBuilder<T>;
        /**
         * @deprecated
         */
        static getId<T>(object: T, fallback: $Registry<T>): $ResourceLocation;
        static getId<T>(object: T, fallback: $ResourceKey_<$Registry<T>>): $ResourceLocation;
        forRegistry<T>(key: $ResourceKey_<$Registry<T>>, callback: $Consumer_<$Registrar<T>>): void;
        get modId(): string;
    }
    export class $Registrar<T> {
    }
    export interface $Registrar<T> extends $Iterable<T> {
        delegate(arg0: $ResourceLocation_): $RegistrySupplier<T>;
        getIds(): $Set<$ResourceLocation>;
        get(arg0: $ResourceLocation_): T;
        wrap<R extends T>(obj: R): $RegistrySupplier<R>;
        contains(arg0: $ResourceLocation_): boolean;
        entrySet(): $Set<$Map$Entry<$ResourceKey<T>, T>>;
        getKey(arg0: T): ($ResourceKey<T>) | undefined;
        register<E extends T>(arg0: $ResourceLocation_, arg1: $Supplier_<E>): $RegistrySupplier<E>;
        key(): $ResourceKey<$Registry<T>>;
        listen<R extends T>(supplier: $RegistrySupplier<R>, callback: $Consumer_<R>): void;
        listen(arg0: $ResourceLocation_, arg1: $Consumer_<T>): void;
        getId(arg0: T): $ResourceLocation;
        containsValue(arg0: T): boolean;
        getHolder(id: $ResourceLocation_): $Holder<T>;
        getHolder(arg0: $ResourceKey_<T>): $Holder<T>;
        getRawId(arg0: T): number;
        byRawId(arg0: number): T;
        get ids(): $Set<$ResourceLocation>;
    }
    export class $DeferredSupplier<T> {
    }
    export interface $DeferredSupplier<T> extends $OptionalSupplier<T> {
        getKey(): $ResourceKey<T>;
        getId(): $ResourceLocation;
        getRegistryId(): $ResourceLocation;
        getRegistryKey(): $ResourceKey<$Registry<T>>;
        get key(): $ResourceKey<T>;
        get id(): $ResourceLocation;
        get registryId(): $ResourceLocation;
        get registryKey(): $ResourceKey<$Registry<T>>;
    }
    export class $RegistrarBuilder<T> {
    }
    export interface $RegistrarBuilder<T> {
        option(arg0: $RegistrarOption): $RegistrarBuilder<T>;
        build(): $Registrar<T>;
        syncToClients(): $RegistrarBuilder<T>;
    }
}
