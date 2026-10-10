import { $RegistryBuilder } from "@package/net/neoforged/neoforge/registries";
import { $JsonDeserializationContext_, $JsonDeserializer, $JsonSerializationContext, $JsonElement_, $JsonElement, $JsonSerializer } from "@package/com/google/gson";
import { $RegistryDataAccessor } from "@package/foundry/veil/mixin/registry/accessor";
import { $Decoder, $Decoder$Simple, $Codec$ResultFunction, $Encoder_, $DataResult, $DynamicOps, $MapLike, $ListBuilder, $Codec, $Decoder$Boxed, $Lifecycle, $Dynamic, $RecordBuilder, $MapCodec, $Encoder, $Decoder$Terminal, $Decoder_ } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $ResourceManager, $Resource, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $BiConsumer, $Consumer, $BiConsumer_, $Supplier_, $Function_, $Consumer_, $UnaryOperator_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $RegistryAccess$Frozen, $HolderSet, $HolderSet_, $Holder, $HolderLookup$RegistryLookup, $RegistrySynchronization$PackedRegistryEntry_, $RegistryAccess, $Registry, $Holder$Reference, $HolderOwner, $WritableRegistry, $HolderGetter } from "@package/net/minecraft/core";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $IntStream, $LongStream, $Stream } from "@package/java/util/stream";
import { RegistryTypes } from "@special/types";
import { $Type } from "@package/java/lang/reflect";
import { $SpecialEquality } from "@package/dev/latvian/mods/rhino/util";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record, $Number, $Exception, $Comparable, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/resources" {
    /**
     * An immutable location of a resource, in terms of a path and namespace.
     * 
     * This is used as an identifier for a resource, usually for those housed in a `Registry`, such as blocks and items.
     * 
     * `minecraft` is always taken as the default namespace for a resource location when none is explicitly stated. When using this for registering objects, this namespace **should** only be used for resources added by Minecraft itself.
     * 
     * Generally, and by the implementation of `#toString()`, the string representation of this class is expressed in the form `namespace:path`. The colon is also used as the default separator for parsing strings as a `ResourceLocation`.
     * @see net.minecraft.resources.ResourceKey
     */
    export class $ResourceLocation implements $Comparable<$ResourceLocation>, $SpecialEquality {
        withPrefix(location: string): $ResourceLocation;
        withSuffix(location: string): $ResourceLocation;
        getPath(): string;
        getNamespace(): string;
        compareTo(other: $ResourceLocation_): number;
        static read(reader: $StringReader): $ResourceLocation;
        static read(location: string): $DataResult<$ResourceLocation>;
        static parse(location: string): $ResourceLocation;
        static tryParse(location: string): $ResourceLocation;
        /**
         * @return `true` if the specified `namespace` is valid: consists only of `[a-z0-9_.-]` characters
         */
        static isValidPath(namespace: string): boolean;
        static fromNamespaceAndPath(namespace: string, path: string): $ResourceLocation;
        static withDefaultNamespace(location: string): $ResourceLocation;
        /**
         * @return `true` if the specified `namespace` is valid: consists only of `[a-z0-9_.-]` characters
         */
        static isValidNamespace(namespace: string): boolean;
        static bySeparator(location: string, seperator: string): $ResourceLocation;
        static tryBySeparator(location: string, seperator: string): $ResourceLocation;
        static tryBuild(namespace: string, path: string): $ResourceLocation;
        withPath(location: string): $ResourceLocation;
        withPath(pathOperator: $UnaryOperator_<string>): $ResourceLocation;
        compareNamespaced(other: $ResourceLocation_): number;
        toDebugFileName(): string;
        toLanguageKey(namespace: string, path: string): string;
        toLanguageKey(): string;
        toLanguageKey(type: string): string;
        toShortLanguageKey(): string;
        static isAllowedInResourceLocation(character: string): boolean;
        static readNonEmpty(reader: $StringReader): $ResourceLocation;
        static validPathChar(character: string): boolean;
        static validNamespaceChar(character: string): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static CODEC: $Codec<$ResourceLocation>;
        static REALMS_NAMESPACE: string;
        static ERROR_INVALID: $SimpleCommandExceptionType;
        static NAMESPACE_SEPARATOR: string;
        static DEFAULT_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ResourceLocation>;
        get path(): string;
        get namespace(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLocation}.
     */
    export type $ResourceLocation_ = string;
    export class $RegistryDataLoader$LoadingFunction {
    }
    export interface $RegistryDataLoader$LoadingFunction {
        apply(loader: $RegistryDataLoader$Loader_<never>, registryInfoLookup: $RegistryOps$RegistryInfoLookup_): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataLoader$LoadingFunction}.
     */
    export type $RegistryDataLoader$LoadingFunction_ = ((arg0: $RegistryDataLoader$Loader<never>, arg1: $RegistryOps$RegistryInfoLookup) => void);
    export class $RegistryDataLoader$RegistryData<T> extends $Record implements $RegistryDataAccessor {
        key(): $ResourceKey<$Registry<T>>;
        elementCodec(): $Codec<T>;
        requiredNonEmpty(): boolean;
        registryBuilderConsumer(): $Consumer<$RegistryBuilder<T>>;
        runWithArguments(runner: $BiConsumer_<$ResourceKey<$Registry<T>>, $Codec<T>>): void;
        invokeCreate(registryLifecycle: $Lifecycle, loadingErrors: $Map_<$ResourceKey_<never>, $Exception>): $RegistryDataLoader$Loader<never>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Codec<T>, arg2: boolean);
        constructor(key: $ResourceKey_<$Registry<T>>, elementCodec: $Codec<T>, requiredNonEmpty: boolean, registryBuilderConsumer: $Consumer_<$RegistryBuilder<T>>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataLoader$RegistryData}.
     */
    export type $RegistryDataLoader$RegistryData_<T> = { registryBuilderConsumer?: $Consumer_<$RegistryBuilder<any>>, elementCodec?: $Codec<any>, key?: $ResourceKey_<$Registry<any>>, requiredNonEmpty?: boolean,  } | [registryBuilderConsumer?: $Consumer_<$RegistryBuilder<any>>, elementCodec?: $Codec<any>, key?: $ResourceKey_<$Registry<any>>, requiredNonEmpty?: boolean, ];
    export class $HolderSetCodec<E> implements $Codec<$HolderSet<E>> {
        static create<E>(registryKey: $ResourceKey_<$Registry<E>>, holderCodec: $Codec<$Holder_<E>>, disallowInline: boolean): $Codec<$HolderSet<E>>;
        decode<T>(ops: $DynamicOps<T>, input: T): $DataResult<$Pair<$HolderSet<E>, T>>;
        encode<T>(input: $HolderSet_<E>, ops: $DynamicOps<T>, prefix: T): $DataResult<T>;
        stable(): $Codec<$HolderSet<E>>;
        orElseGet(arg0: $Supplier_<$HolderSet<E>>): $Codec<$HolderSet<E>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$HolderSet<E>>): $Codec<$HolderSet<E>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$HolderSet<E>>): $Codec<$HolderSet<E>>;
        dispatch<E>(arg0: $Function_<E, $HolderSet<E>>, arg1: $Function_<$HolderSet<E>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $HolderSet<E>>, arg2: $Function_<$HolderSet<E>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$HolderSet<E>, $DataResult<$HolderSet<E>>>): $Codec<$HolderSet<E>>;
        orElse(arg0: $Consumer_<string>, arg1: $HolderSet_<E>): $Codec<$HolderSet<E>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $HolderSet_<E>): $Codec<$HolderSet<E>>;
        orElse(arg0: $HolderSet_<E>): $Codec<$HolderSet<E>>;
        xmap<S>(arg0: $Function_<$HolderSet<E>, S>, arg1: $Function_<S, $HolderSet<E>>): $Codec<S>;
        listOf(): $Codec<$List<$HolderSet<E>>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$HolderSet<E>>>;
        withLifecycle(arg0: $Lifecycle): $Codec<$HolderSet<E>>;
        deprecated(arg0: number): $Codec<$HolderSet<E>>;
        flatXmap<S>(arg0: $Function_<$HolderSet<E>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$HolderSet<E>>>): $Codec<S>;
        fieldOf(arg0: string): $MapCodec<$HolderSet<E>>;
        optionalFieldOf(arg0: string): $MapCodec<($HolderSet<E>) | undefined>;
        optionalFieldOf(arg0: string, arg1: $HolderSet_<E>): $MapCodec<$HolderSet<E>>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $HolderSet_<E>, arg3: $Lifecycle): $MapCodec<$HolderSet<E>>;
        optionalFieldOf(arg0: string, arg1: $HolderSet_<E>, arg2: $Lifecycle): $MapCodec<$HolderSet<E>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($HolderSet<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $HolderSet_<E>): $MapCodec<$HolderSet<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $HolderSet_<E>, arg2: $Lifecycle): $MapCodec<$HolderSet<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $HolderSet_<E>, arg3: $Lifecycle): $MapCodec<$HolderSet<E>>;
        mapResult(arg0: $Codec$ResultFunction<$HolderSet_<E>>): $Codec<$HolderSet<E>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$HolderSet<E>>>, arg2: $Function_<$HolderSet<E>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: $Function_<E, $HolderSet<E>>, arg1: $Function_<$HolderSet<E>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $HolderSet<E>>, arg2: $Function_<$HolderSet<E>, $MapCodec<E>>): $MapCodec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$HolderSet<E>>>;
        comapFlatMap<S>(arg0: $Function_<$HolderSet<E>, $DataResult<S>>, arg1: $Function_<S, $HolderSet<E>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$HolderSet<E>, S>, arg1: $Function_<S, $DataResult<$HolderSet<E>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $HolderSet<E>>, arg1: $Function_<$HolderSet<E>, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, $HolderSet<E>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$HolderSet<E>>>): $Encoder<B>;
        encodeStart<T>(ops: $DynamicOps<T>, input: $HolderSet_<E>): $DataResult<T>;
        boxed(): $Decoder$Boxed<$HolderSet<E>>;
        terminal(): $Decoder$Terminal<$HolderSet<E>>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$HolderSet<E>, T>>;
        map<B>(arg0: $Function_<$HolderSet<E>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$HolderSet<E>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$HolderSet<E>>;
        parse<T>(ops: $DynamicOps<T>, input: T): $DataResult<$HolderSet<E>>;
        simple(): $Decoder$Simple<$HolderSet<E>>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<$HolderSet<E>>;
        elementCodec: $Codec<$Holder<E>>;
    }
    export class $RegistryOps<T> extends $DelegatingOps<T> {
        static create<T>(delegate: $DynamicOps<T>, registries: $HolderLookup$Provider): $RegistryOps<T>;
        static create<T>(delegate: $DynamicOps<T>, lookupProvider: $RegistryOps$RegistryInfoLookup_): $RegistryOps<T>;
        getter<E>(registryKey: $ResourceKey_<$Registry<E>>): ($HolderGetter<E>) | undefined;
        owner<E>(registryKey: $ResourceKey_<$Registry<E>>): ($HolderOwner<E>) | undefined;
        withParent<U>(ops: $DynamicOps<U>): $RegistryOps<U>;
        static injectRegistryContext<T>(dynamic: $Dynamic<T>, registries: $HolderLookup$Provider): $Dynamic<T>;
        static retrieveGetter<E, O>(key: $ResourceKey_<$Registry<E>>): $RecordCodecBuilder<O, $HolderGetter<E>>;
        static retrieveRegistryLookup<E>(arg0: $ResourceKey_<$Registry<E>>): $MapCodec<$HolderLookup$RegistryLookup<E>>;
        static retrieveElement<E, O>(key: $ResourceKey_<E>): $RecordCodecBuilder<O, $Holder$Reference<E>>;
        lookupProvider: $RegistryOps$RegistryInfoLookup;
    }
    export class $RegistryOps$RegistryInfo<T> extends $Record {
        getter(): $HolderGetter<T>;
        owner(): $HolderOwner<T>;
        elementsLifecycle(): $Lifecycle;
        static fromRegistryLookup<T>(registryLookup: $HolderLookup$RegistryLookup<T>): $RegistryOps$RegistryInfo<T>;
        constructor(owner: $HolderOwner<T>, getter: $HolderGetter<T>, elementsLifecycle: $Lifecycle);
        get ter(): $HolderGetter<T>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOps$RegistryInfo}.
     */
    export type $RegistryOps$RegistryInfo_<T> = { elementsLifecycle?: $Lifecycle, getter?: $HolderGetter<any>, owner?: $HolderOwner<any>,  } | [elementsLifecycle?: $Lifecycle, getter?: $HolderGetter<any>, owner?: $HolderOwner<any>, ];
    export class $RegistryOps$RegistryInfoLookup {
    }
    export interface $RegistryOps$RegistryInfoLookup {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($RegistryOps$RegistryInfo<T>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOps$RegistryInfoLookup}.
     */
    export type $RegistryOps$RegistryInfoLookup_ = ((arg0: $ResourceKey<$Registry<any>>) => ($RegistryOps$RegistryInfo_<T>) | undefined);
    /**
     * A `DynamicOps` that delegates all functionality to an internal delegate. Comments and parameters here are copied from `DynamicOps` in DataFixerUpper.
     */
    export class $DelegatingOps<T> implements $DynamicOps<T> {
        createList(input: $Stream<T>): T;
        mapBuilder(): $RecordBuilder<T>;
        getNumberValue(input: T): $DataResult<$Number>;
        emptyMap(): T;
        getMap(input: T): $DataResult<$MapLike<T>>;
        createLong(value: number): T;
        createString(value: string): T;
        getByteBuffer(input: T): $DataResult<$ByteBuffer>;
        getStream(input: T): $DataResult<$Stream<T>>;
        getBooleanValue(input: T): $DataResult<boolean>;
        getStringValue(input: T): $DataResult<string>;
        createFloat(value: number): T;
        createDouble(value: number): T;
        createMap(input: $Stream<$Pair<T, T>>): T;
        createMap(map: $Map_<T, T>): T;
        remove(input: T, key: string): T;
        empty(): T;
        emptyList(): T;
        getList(input: T): $DataResult<$Consumer<$Consumer<T>>>;
        createBoolean(value: boolean): T;
        createNumeric(i: $Number): T;
        getMapValues(input: T): $DataResult<$Stream<$Pair<T, T>>>;
        convertTo<U>(outOps: $DynamicOps<U>, input: T): U;
        getMapEntries(input: T): $DataResult<$Consumer<$BiConsumer<T, T>>>;
        listBuilder(): $ListBuilder<T>;
        compressMaps(): boolean;
        /**
         * Only successful if first argument is a list/array or empty.
         */
        mergeToPrimitive(list: T, value: T): $DataResult<T>;
        createByte(value: number): T;
        createShort(value: number): T;
        createInt(value: number): T;
        createByteList(input: $ByteBuffer): T;
        getIntStream(input: T): $DataResult<$IntStream>;
        createIntList(input: $IntStream): T;
        getLongStream(input: T): $DataResult<$LongStream>;
        createLongList(input: $LongStream): T;
        /**
         * Only successful if first argument is a list/array or empty.
         */
        mergeToList(list: T, value: T): $DataResult<T>;
        mergeToList(list: T, values: $List_<T>): $DataResult<T>;
        mergeToMap(map: T, values: $MapLike<T>): $DataResult<T>;
        mergeToMap(map: T, values: $Map_<T, T>): $DataResult<T>;
        /**
         * Only successful if first argument is a map or empty.
         */
        mergeToMap(map: T, key: T, value: T): $DataResult<T>;
        getNumberValue(arg0: T, arg1: $Number): $Number;
        /**
         * Only successful if first argument is a list/array or empty.
         */
        getGeneric(list: T, value: T): $DataResult<T>;
        get(arg0: T, arg1: string): $DataResult<T>;
        update(arg0: T, arg1: string, arg2: $Function_<T, T>): T;
        set(arg0: T, arg1: string, arg2: T): T;
        updateGeneric(arg0: T, arg1: T, arg2: $Function_<T, T>): T;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<T>>;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<$Pair<E, T>>>;
        withParser<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<E>>;
        convertList<U>(outOps: $DynamicOps<U>, input: T): U;
        convertMap<U>(outOps: $DynamicOps<U>, input: T): U;
    }
    /**
     * A codec that wraps a single element, or "file", within a registry. Possibly allows inline definitions, and always falls back to the element codec (and thus writing the registry element inline) if it fails to decode from the registry.
     */
    export class $RegistryFileCodec<E> implements $Codec<$Holder<E>> {
        /**
         * Creates a codec for a single registry element, which is held as an un-resolved `Supplier`. Both inline definitions of the object, and references to an existing registry element id are allowed.
         */
        static create<E>(registryKey: $ResourceKey_<$Registry<E>>, elementCodec: $Codec<E>): $RegistryFileCodec<E>;
        static create<E>(registryKey: $ResourceKey_<$Registry<E>>, elementCodec: $Codec<E>, allowInline: boolean): $RegistryFileCodec<E>;
        decode<T>(ops: $DynamicOps<T>, input: T): $DataResult<$Pair<$Holder<E>, T>>;
        encode<T>(input: $Holder_<E>, ops: $DynamicOps<T>, prefix: T): $DataResult<T>;
        stable(): $Codec<$Holder<E>>;
        orElseGet(arg0: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        dispatch<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Holder<E>, $DataResult<$Holder<E>>>): $Codec<$Holder<E>>;
        orElse(arg0: $Consumer_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $Holder_<E>): $Codec<$Holder<E>>;
        xmap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        listOf(): $Codec<$List<$Holder<E>>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Holder<E>>>;
        withLifecycle(arg0: $Lifecycle): $Codec<$Holder<E>>;
        deprecated(arg0: number): $Codec<$Holder<E>>;
        flatXmap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        fieldOf(arg0: string): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        mapResult(arg0: $Codec$ResultFunction<$Holder_<E>>): $Codec<$Holder<E>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Holder<E>>>, arg2: $Function_<$Holder<E>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Holder<E>>>;
        comapFlatMap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, $Holder<E>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Holder<E>>>): $Encoder<B>;
        encodeStart<T>(ops: $DynamicOps<T>, input: $Holder_<E>): $DataResult<T>;
        boxed(): $Decoder$Boxed<$Holder<E>>;
        terminal(): $Decoder$Terminal<$Holder<E>>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Holder<E>, T>>;
        map<B>(arg0: $Function_<$Holder<E>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Holder<E>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Holder<E>>;
        parse<T>(ops: $DynamicOps<T>, input: T): $DataResult<$Holder<E>>;
        simple(): $Decoder$Simple<$Holder<E>>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<$Holder<E>>;
        registryKey: $ResourceKey<$Registry<E>>;
        elementCodec: $Codec<E>;
        allowInline: boolean;
    }
    export class $ResourceLocation$Serializer implements $JsonDeserializer<$ResourceLocation>, $JsonSerializer<$ResourceLocation> {
        serialize(src: $ResourceLocation_, typeOfSrc: $Type, context: $JsonSerializationContext): $JsonElement;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ResourceLocation;
        constructor();
    }
    /**
     * An immutable key for a resource, in terms of the name of its parent registry and its location in that registry.
     * 
     * `Registry` uses this to return resource keys for registry objects via `Registry#getResourceKey(Object)`. It also uses this class to store its name, with the parent registry name set to `minecraft:root`. When used in this way it is usually referred to as a "registry key".
     * 
     * @param  The type of the resource represented by this `ResourceKey`, or the type of the registry if it is a registry key.
     * @see net.minecraft.resources.ResourceLocation
     */
    export class $ResourceKey<T> implements $Comparable<$ResourceKey<never>>, $SpecialEquality {
        /**
         * @note_to_llm `ResourceKey` is a reference to a registry entry. KubeJS has special type wrapper for `ResourceKey<T>`
         * that allows you to use string literals as `ResourceKey`. For example, "minecraf:apple" can be used as a `ResourceKey<Item>`.
         * Check available literals for registry entries using the #tool:prunoideae.probejs/listRegistries #tool:prunoideae.probejs/queryRegistryObjectsByRegex #tool:prunoideae.probejs/queryTaggedObjects tools.
         */
        /**
         * Constructs a new `ResourceKey` for a resource with the specified `location` within the registry specified by the given `registryKey`.
         * 
         * @return the created resource key. The registry name is set to the location of the specified `registryKey` and with the specified `location` as the location of the resource.
         */
        static create<T>(registryKey: $ResourceKey_<$Registry<T>>, location: $ResourceLocation_): $ResourceKey<T>;
        registry(): $ResourceLocation;
        cast<E>(registryKey: $ResourceKey_<$Registry<E>>): ($ResourceKey<E>) | undefined;
        compareTo(arg0: $ResourceKey_<never>): number;
        location(): $ResourceLocation;
        static codec<T>(registryKey: $ResourceKey_<$Registry<T>>): $Codec<$ResourceKey<T>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        /**
         * @return the created registry key. The registry name is set to `minecraft:root` and the location the specified `registryName`.
         */
        static createRegistryKey<T>(location: $ResourceLocation_): $ResourceKey<$Registry<T>>;
        registryKey(): $ResourceKey<$Registry<$ResourceKey<never>>>;
        /**
         * @return `true` if this resource key is a direct child of the specified `registryKey`.
         */
        isFor(registryKey: $ResourceKey_<$Registry<never>>): boolean;
        static streamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$ByteBuf, $ResourceKey<T>>;
        getNamespace(): string;
        getPath(): string;
        constructor(registryName: $ResourceLocation_, location: $ResourceLocation_);
        get namespace(): string;
        get path(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResourceKey}.
     */
    export type $ResourceKey_<T> = RegistryTypes.ResolveObject<T>;
    export class $RegistryDataLoader {
        static createContext(registryAccess: $RegistryAccess, registryLoaders: $List_<$RegistryDataLoader$Loader_<never>>): $RegistryOps$RegistryInfoLookup;
        static load(elements: $Map_<$ResourceKey_<$Registry<never>>, $List_<$RegistrySynchronization$PackedRegistryEntry_>>, resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, registryData: $List_<$RegistryDataLoader$RegistryData_<never>>): $RegistryAccess$Frozen;
        static load(resourceManager: $ResourceManager, registryAccess: $RegistryAccess, registryData: $List_<$RegistryDataLoader$RegistryData_<never>>): $RegistryAccess$Frozen;
        static WORLDGEN_REGISTRIES: $List<$RegistryDataLoader$RegistryData<never>>;
        static SYNCHRONIZED_REGISTRIES: $List<$RegistryDataLoader$RegistryData<never>>;
        static DIMENSION_REGISTRIES: $List<$RegistryDataLoader$RegistryData<never>>;
        constructor();
    }
    export class $RegistryFixedCodec<E> implements $Codec<$Holder<E>> {
        static create<E>(registryKey: $ResourceKey_<$Registry<E>>): $RegistryFixedCodec<E>;
        decode<T>(ops: $DynamicOps<T>, value: T): $DataResult<$Pair<$Holder<E>, T>>;
        encode<T>(holder: $Holder_<E>, ops: $DynamicOps<T>, value: T): $DataResult<T>;
        stable(): $Codec<$Holder<E>>;
        orElseGet(arg0: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Holder<E>>): $Codec<$Holder<E>>;
        dispatch<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Holder<E>, $DataResult<$Holder<E>>>): $Codec<$Holder<E>>;
        orElse(arg0: $Consumer_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Holder_<E>): $Codec<$Holder<E>>;
        orElse(arg0: $Holder_<E>): $Codec<$Holder<E>>;
        xmap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        listOf(): $Codec<$List<$Holder<E>>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Holder<E>>>;
        withLifecycle(arg0: $Lifecycle): $Codec<$Holder<E>>;
        deprecated(arg0: number): $Codec<$Holder<E>>;
        flatXmap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        fieldOf(arg0: string): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        optionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Holder<E>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Holder_<E>, arg2: $Lifecycle): $MapCodec<$Holder<E>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Holder_<E>, arg3: $Lifecycle): $MapCodec<$Holder<E>>;
        mapResult(arg0: $Codec$ResultFunction<$Holder_<E>>): $Codec<$Holder<E>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Holder<E>>>, arg2: $Function_<$Holder<E>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Holder<E>>, arg2: $Function_<$Holder<E>, $MapCodec<E>>): $MapCodec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Holder<E>>>;
        comapFlatMap<S>(arg0: $Function_<$Holder<E>, $DataResult<S>>, arg1: $Function_<S, $Holder<E>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$Holder<E>, S>, arg1: $Function_<S, $DataResult<$Holder<E>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $Holder<E>>, arg1: $Function_<$Holder<E>, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, $Holder<E>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Holder<E>>>): $Encoder<B>;
        encodeStart<T>(ops: $DynamicOps<T>, value: $Holder_<E>): $DataResult<T>;
        boxed(): $Decoder$Boxed<$Holder<E>>;
        terminal(): $Decoder$Terminal<$Holder<E>>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Holder<E>, T>>;
        map<B>(arg0: $Function_<$Holder<E>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Holder<E>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Holder<E>>;
        parse<T>(ops: $DynamicOps<T>, value: T): $DataResult<$Holder<E>>;
        simple(): $Decoder$Simple<$Holder<E>>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<$Holder<E>>;
        registryKey: $ResourceKey<$Registry<E>>;
    }
    export class $ResourceKey$InternKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ResourceKey$InternKey}.
     */
    export type $ResourceKey$InternKey_ = { registry?: $ResourceLocation_, location?: $ResourceLocation_,  } | [registry?: $ResourceLocation_, location?: $ResourceLocation_, ];
    export class $FileToIdConverter {
        static json(name: string): $FileToIdConverter;
        idToFile(file: $ResourceLocation_): $ResourceLocation;
        listMatchingResources(resourceManager: $ResourceManager): $Map<$ResourceLocation, $Resource>;
        fileToId(file: $ResourceLocation_): $ResourceLocation;
        listMatchingResourceStacks(resourceManager: $ResourceManager): $Map<$ResourceLocation, $List<$Resource>>;
        listMatchingResourcesFromNamespace(arg0: $ResourceManager, arg1: string): $Map<$ResourceLocation, $Resource>;
        listMatchingResourceStacksFromNamespace(arg0: $ResourceManager, arg1: string): $Map<$ResourceLocation, $List<$Resource>>;
        constructor(prefix: string, extenstion: string);
    }
    export class $RegistryDataLoader$Loader<T> extends $Record {
        registry(): $WritableRegistry<T>;
        data(): $RegistryDataLoader$RegistryData<T>;
        loadFromNetwork(elements: $Map_<$ResourceKey_<$Registry<never>>, $List_<$RegistrySynchronization$PackedRegistryEntry_>>, resourceProvider: $ResourceProvider_, registryInfoLookup: $RegistryOps$RegistryInfoLookup_): void;
        loadFromResources(resouceManager: $ResourceManager, registryInfoLookup: $RegistryOps$RegistryInfoLookup_): void;
        loadingErrors(): $Map<$ResourceKey<never>, $Exception>;
        constructor(data: $RegistryDataLoader$RegistryData_<T>, registry: $WritableRegistry<T>, loadingErrors: $Map_<$ResourceKey_<never>, $Exception>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryDataLoader$Loader}.
     */
    export type $RegistryDataLoader$Loader_<T> = { data?: $RegistryDataLoader$RegistryData_<any>, loadingErrors?: $Map_<$ResourceKey_<never>, $Exception>, registry?: $WritableRegistry<any>,  } | [data?: $RegistryDataLoader$RegistryData_<any>, loadingErrors?: $Map_<$ResourceKey_<never>, $Exception>, registry?: $WritableRegistry<any>, ];
    export class $RegistryOps$HolderLookupAdapter implements $RegistryOps$RegistryInfoLookup {
        lookup<E>(registryKey: $ResourceKey_<$Registry<E>>): ($RegistryOps$RegistryInfo<E>) | undefined;
        lookupProvider: $HolderLookup$Provider;
        constructor(lookupProvider: $HolderLookup$Provider);
    }
}
