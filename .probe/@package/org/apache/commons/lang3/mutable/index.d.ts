import { $Serializable } from "@package/java/io";
import { $Number, $Comparable } from "@package/java/lang";

declare module "@package/org/apache/commons/lang3/mutable" {
    export class $Mutable<T> {
    }
    export interface $Mutable<T> {
        getValue(): T;
        setValue(arg0: T): void;
    }
    export class $MutableObject<T> implements $Mutable<T>, $Serializable {
        getValue(): T;
        setValue(arg0: T): void;
        constructor();
        constructor(arg0: T);
    }
    export class $MutableInt extends $Number implements $Comparable<$MutableInt>, $Mutable<$Number> {
        toInteger(): number;
        incrementAndGet(): number;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: number): number;
        addAndGet(arg0: $Number): number;
        decrement(): void;
        subtract(arg0: $Number): void;
        subtract(arg0: number): void;
        getAndAdd(arg0: number): number;
        getAndAdd(arg0: $Number): number;
        compareTo(arg0: $MutableInt): number;
        add(arg0: $Number): void;
        add(arg0: number): void;
        increment(): void;
        setValue(arg0: number): void;
        setValue(arg0: $Number): void;
        getValue(): $MutableInt;
        constructor();
        constructor(arg0: $Number);
        constructor(arg0: string);
        constructor(arg0: number);
        get andIncrement(): number;
        get andDecrement(): number;
    }
    export class $MutableFloat extends $Number implements $Comparable<$MutableFloat>, $Mutable<$Number> {
        incrementAndGet(): number;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: number): number;
        addAndGet(arg0: $Number): number;
        decrement(): void;
        subtract(arg0: $Number): void;
        subtract(arg0: number): void;
        toFloat(): number;
        getAndAdd(arg0: $Number): number;
        getAndAdd(arg0: number): number;
        isInfinite(): boolean;
        compareTo(arg0: $MutableFloat): number;
        getValue(): number;
        add(arg0: number): void;
        add(arg0: $Number): void;
        increment(): void;
        isNaN(): boolean;
        setValue(arg0: number): void;
        setValue(arg0: $Number): void;
        constructor();
        constructor(arg0: number);
        constructor(arg0: string);
        constructor(arg0: $Number);
        get andIncrement(): number;
        get andDecrement(): number;
        get infinite(): boolean;
        get naN(): boolean;
    }
    export class $MutableBoolean implements $Mutable<boolean>, $Serializable, $Comparable<$MutableBoolean> {
        toBoolean(): boolean;
        isFalse(): boolean;
        setFalse(): void;
        isTrue(): boolean;
        compareTo(arg0: $MutableBoolean): number;
        booleanValue(): boolean;
        setValue(arg0: boolean): void;
        setValue(arg0: boolean): void;
        setTrue(): void;
        getValue(): boolean;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: boolean);
    }
}
