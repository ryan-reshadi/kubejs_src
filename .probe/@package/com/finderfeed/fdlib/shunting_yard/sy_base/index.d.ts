import { $HashMap } from "@package/java/util";

declare module "@package/com/finderfeed/fdlib/shunting_yard/sy_base" {
    export class $ExpressionContext {
        addVariable(arg0: string, arg1: number): $ExpressionContext;
        variables: $HashMap<string, number>;
        constructor(arg0: boolean);
    }
}
