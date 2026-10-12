import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $VariableFormatter_ } from "@package/dev/obscuria/aquamirae/api/common/ability/variable/formatter";
export * as formatter from "@package/dev/obscuria/aquamirae/api/common/ability/variable/formatter";

declare module "@package/dev/obscuria/aquamirae/api/common/ability/variable" {
    export class $VariableMap$Builder {
    }
    export interface $VariableMap$Builder {
        define(arg0: string, arg1: $Variable, arg2: $VariableFormatter_): $VariableMap$Builder;
        build(): $VariableMap;
    }
    export class $VariableMap {
        static builder(): $VariableMap$Builder;
    }
    export interface $VariableMap {
        computeVariable(arg0: string, arg1: $LivingEntity): number;
        formatDescription(arg0: $Component_, arg1: $LivingEntity, arg2: boolean): $Component;
    }
    export class $Variable {
    }
    export interface $Variable {
        baseValue(): number;
        compute(arg0: $LivingEntity): number;
        classify(arg0: number): $ValueState;
        ignoreFraction(): boolean;
    }
}
