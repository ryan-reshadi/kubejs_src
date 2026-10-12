import { $Supplier_, $BooleanSupplier_ } from "@package/java/util/function";
import { $MolangVariable, $MolangJavaFunction_, $MolangVariableProvider_ } from "@package/gg/moonflower/molangcompiler/api/bridge";
import { $MolangObject } from "@package/gg/moonflower/molangcompiler/api/object";
import { $Collection } from "@package/java/util";
export * as bridge from "@package/gg/moonflower/molangcompiler/api/bridge";
export * as object from "@package/gg/moonflower/molangcompiler/api/object";

declare module "@package/gg/moonflower/molangcompiler/api" {
    export class $MolangExpression {
        static lazy(arg0: $Supplier_<number>): $MolangExpression;
        static lazy(arg0: $BooleanSupplier_): $MolangExpression;
        static of(arg0: $BooleanSupplier_): $MolangExpression;
        static of(arg0: $MolangVariable): $MolangExpression;
        static of(...arg0: $MolangExpression_[]): $MolangExpression;
        static of(arg0: number): $MolangExpression;
        static of(arg0: boolean): $MolangExpression;
        static of(arg0: $Supplier_<number>): $MolangExpression;
        static "function"(arg0: number, arg1: $MolangJavaFunction_): $MolangExpression;
        static "function"(arg0: $MolangJavaFunction_): $MolangExpression;
        static ZERO: $MolangExpression;
    }
    export interface $MolangExpression {
        getConstant(): number;
        isConstant(): boolean;
        getCopy(): $MolangExpression;
        get(arg0: $MolangEnvironment): number;
        /**
         * @deprecated
         */
        resolve(arg0: $MolangEnvironment): number;
        /**
         * @deprecated
         */
        safeResolve(arg0: $MolangEnvironment): number;
        get copy(): $MolangExpression;
    }
    /**
     * Values that may be interpreted as {@link $MolangExpression}.
     */
    export type $MolangExpression_ = ((arg0: $MolangEnvironment) => number);
    export class $MolangEnvironmentBuilder<V extends $MolangEnvironment> {
    }
    export interface $MolangEnvironmentBuilder<V extends $MolangEnvironment> {
        create(arg0: number): V;
        create(): V;
        setGlobal(arg0: string, arg1: number): $MolangEnvironmentBuilder<V>;
        setGlobal(arg0: string, arg1: $Supplier_<number>): $MolangEnvironmentBuilder<V>;
        setGlobal(arg0: string, arg1: $MolangExpression_): $MolangEnvironmentBuilder<V>;
        setGlobal(arg0: string, arg1: number, arg2: $MolangJavaFunction_): $MolangEnvironmentBuilder<V>;
        loadLibrary(arg0: string, arg1: $MolangObject): $MolangEnvironmentBuilder<V>;
        copy(arg0: $MolangEnvironment): $MolangEnvironmentBuilder<V>;
        setVariable(arg0: string, arg1: $MolangExpression_): $MolangEnvironmentBuilder<V>;
        setVariable(arg0: string, arg1: $MolangVariable): $MolangEnvironmentBuilder<V>;
        setVariable(arg0: string, arg1: $Supplier_<number>): $MolangEnvironmentBuilder<V>;
        setVariable(arg0: string, arg1: number): $MolangEnvironmentBuilder<V>;
        setQuery(arg0: string, arg1: number, arg2: $MolangJavaFunction_): $MolangEnvironmentBuilder<V>;
        setQuery(arg0: string, arg1: $Supplier_<number>): $MolangEnvironmentBuilder<V>;
        setQuery(arg0: string, arg1: number): $MolangEnvironmentBuilder<V>;
        setQuery(arg0: string, arg1: $MolangExpression_): $MolangEnvironmentBuilder<V>;
        setVariables(arg0: $MolangVariableProvider_): $MolangEnvironmentBuilder<V>;
        unloadLibrary(arg0: string): $MolangEnvironmentBuilder<V>;
        removeQuery(arg0: string): $MolangEnvironmentBuilder<V>;
        removeGlobal(arg0: string): $MolangEnvironmentBuilder<V>;
        removeVariable(arg0: string): $MolangEnvironmentBuilder<V>;
        clearLibraries(): $MolangEnvironmentBuilder<V>;
        clearQuery(): $MolangEnvironmentBuilder<V>;
        clearGlobal(): $MolangEnvironmentBuilder<V>;
        clearVariable(): $MolangEnvironmentBuilder<V>;
        set variables(value: $MolangVariableProvider_);
    }
    export class $MolangEnvironment {
        static immutable(arg0: $MolangEnvironment): $MolangEnvironment;
    }
    export interface $MolangEnvironment {
        getObjects(): $Collection<string>;
        getParameters(): number;
        has(arg0: string): boolean;
        getParameter(arg0: number): number;
        get(arg0: string): $MolangObject;
        loadLibrary(arg0: string, arg1: $MolangObject): void;
        loadLibrary(arg0: string, arg1: $MolangObject, ...arg2: string[]): void;
        resolve(arg0: $MolangExpression_): number;
        copy(): $MolangEnvironment;
        loadAlias(arg0: string, arg1: string, ...arg2: string[]): void;
        loadParameter(arg0: number): void;
        clearParameters(): void;
        edit(): $MolangEnvironmentBuilder<$MolangEnvironment>;
        hasParameter(arg0: number): boolean;
        setThisValue(arg0: number): void;
        canEdit(): boolean;
        getThis(): number;
        safeResolve(arg0: $MolangExpression_): number;
        get objects(): $Collection<string>;
        get parameters(): number;
        set thisValue(value: number);
        get this(): number;
    }
}
