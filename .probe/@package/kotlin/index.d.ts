import { $Serializable } from "@package/java/io";
import { $Object } from "@package/java/lang";
export * as enums from "@package/kotlin/enums";
export * as coroutines from "@package/kotlin/coroutines";
export * as jvm from "@package/kotlin/jvm";
export * as reflect from "@package/kotlin/reflect";
export * as random from "@package/kotlin/random";
export * as sequences from "@package/kotlin/sequences";

declare module "@package/kotlin" {
    export class $Unit {
        static INSTANCE: $Unit;
    }
    export class $Lazy<T> {
    }
    export interface $Lazy<T> {
        isInitialized(): boolean;
        getValue(): T;
        get initialized(): boolean;
        get value(): T;
    }
    export class $Function<R> {
    }
    export interface $Function<R> {
    }
    export class $Pair<A, B> implements $Serializable {
        getSecond(): B;
        getFirst(): A;
        copy(arg0: A, arg1: B): $Pair<A, B>;
        component1(): A;
        component2(): B;
        static copy$default(arg0: $Pair<any, any>, arg1: $Object, arg2: $Object, arg3: number, arg4: $Object): $Pair<any, any>;
        constructor(arg0: A, arg1: B);
        get second(): B;
        get first(): A;
    }
}
