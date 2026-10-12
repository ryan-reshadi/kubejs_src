import { $Function1, $Function0 } from "@package/kotlin/jvm/functions";
import { $List, $Collection } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Unit } from "@package/kotlin";

declare module "@package/kotlin/reflect" {
    export class $KProperty0<V> {
    }
    export interface $KProperty0<V> extends $KProperty<V>, $Function0<V> {
        getDelegate(): $Object;
        get(): V;
        getGetter(): $KProperty$Getter<V>;
        get delegate(): $Object;
        get getter(): $KProperty$Getter<V>;
    }
    export class $KMutableProperty0<V> {
    }
    export interface $KMutableProperty0<V> extends $KProperty0<V>, $KMutableProperty<V> {
        set(arg0: V): void;
        getSetter(): $KMutableProperty0$Setter<V>;
        get setter(): $KMutableProperty0$Setter<V>;
    }
    export class $KMutableProperty<V> {
    }
    export interface $KMutableProperty<V> extends $KProperty<V> {
        getSetter(): $KMutableProperty$Setter<V>;
        get setter(): $KMutableProperty$Setter<V>;
    }
    export class $KClass<T> {
    }
    export interface $KClass<T> extends $KDeclarationContainer, $KAnnotatedElement, $KClassifier {
        isAbstract(): boolean;
        isValue(): boolean;
        getQualifiedName(): string;
        isData(): boolean;
        isInner(): boolean;
        getObjectInstance(): T;
        equals(arg0: $Object): boolean;
        hashCode(): number;
        isInstance(arg0: $Object): boolean;
        getTypeParameters(): $List<$KTypeParameter>;
        getSimpleName(): string;
        isFinal(): boolean;
        isOpen(): boolean;
        getConstructors(): $Collection<$KFunction<T>>;
        isSealed(): boolean;
        getMembers(): $Collection<$KCallable<never>>;
        getVisibility(): $KVisibility;
        isFun(): boolean;
        getNestedClasses(): $Collection<$KClass<never>>;
        getSupertypes(): $List<$KType>;
        getSealedSubclasses(): $List<$KClass<T>>;
        isCompanion(): boolean;
        get abstract(): boolean;
        get value(): boolean;
        get qualifiedName(): string;
        get data(): boolean;
        get inner(): boolean;
        get objectInstance(): T;
        get typeParameters(): $List<$KTypeParameter>;
        get simpleName(): string;
        get final(): boolean;
        get open(): boolean;
        get constructors(): $Collection<$KFunction<T>>;
        get sealed(): boolean;
        get members(): $Collection<$KCallable<never>>;
        get visibility(): $KVisibility;
        get fun(): boolean;
        get nestedClasses(): $Collection<$KClass<never>>;
        get supertypes(): $List<$KType>;
        get sealedSubclasses(): $List<$KClass<T>>;
        get companion(): boolean;
    }
    export class $KMutableProperty0$Setter<V> {
    }
    export interface $KMutableProperty0$Setter<V> extends $KMutableProperty$Setter<V>, $Function1<V, $Unit> {
    }
}
