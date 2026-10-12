import { $GlslVariableDeclarationNode, $GlslStructDeclarationNode, $GlslGetFieldNode, $GlslNewFieldNode, $GlslGetArrayNode, $GlslVariableNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $GlslPrimitiveConstructorNode, $GlslInvokeFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslConstantNode } from "@package/io/github/ocelot/glslprocessor/api/node/constant";
import { $GlslJumpNode_, $GlslCaseLabelNode, $GlslSwitchNode, $GlslIfNode, $GlslForLoopNode, $GlslWhileLoopNode, $GlslReturnNode } from "@package/io/github/ocelot/glslprocessor/api/node/branch";
import { $GlslUnaryNode, $GlslAssignmentNode, $GlslPrecisionNode, $GlslCompareNode, $GlslBitwiseNode, $GlslConditionalNode, $GlslOperationNode } from "@package/io/github/ocelot/glslprocessor/api/node/expression";

declare module "@package/io/github/ocelot/glslprocessor/api/visitor" {
    export class $GlslNodeVisitor {
        visitOperation(arg0: $GlslOperationNode): void;
        visitConstant(arg0: $GlslConstantNode): void;
        visitReturn(arg0: $GlslReturnNode): void;
        visitBitwise(arg0: $GlslBitwiseNode): $GlslBitwiseVisitor;
        visitCondition(arg0: $GlslConditionalNode): void;
        visitGetField(arg0: $GlslGetFieldNode): void;
        visitForLoopEnd(arg0: $GlslForLoopNode): void;
        visitNewField(arg0: $GlslNewFieldNode): void;
        visitVariable(arg0: $GlslVariableNode): void;
        visitSwitch(arg0: $GlslSwitchNode): $GlslSwitchVisitor;
        visitAssign(arg0: $GlslAssignmentNode): void;
        visitPrecision(arg0: $GlslPrecisionNode): void;
        visitForLoop(arg0: $GlslForLoopNode): $GlslNodeVisitor;
        visitWhileLoop(arg0: $GlslWhileLoopNode): $GlslNodeVisitor;
        visitGetArray(arg0: $GlslGetArrayNode): void;
        visitWhileLoopEnd(arg0: $GlslWhileLoopNode): void;
        visitCompare(arg0: $GlslCompareNode): void;
        visitFunctionInvocation(arg0: $GlslInvokeFunctionNode): $GlslInvokeVisitor;
        visitPrimitiveConstructor(arg0: $GlslPrimitiveConstructorNode): void;
        visitVariableDeclaration(arg0: $GlslVariableDeclarationNode): void;
        visitStructDeclaration(arg0: $GlslStructDeclarationNode): void;
        visitUnary(arg0: $GlslUnaryNode): void;
        visitIf(arg0: $GlslIfNode): $GlslIfVisitor;
        visitJump(arg0: $GlslJumpNode_): void;
        constructor();
        constructor(arg0: $GlslNodeVisitor);
    }
    export class $GlslSwitchVisitor {
        visitLabel(arg0: $GlslCaseLabelNode): $GlslNodeVisitor;
        visitSwitchEnd(arg0: $GlslSwitchNode): void;
        constructor();
        constructor(arg0: $GlslSwitchVisitor);
    }
    export class $GlslBitwiseVisitor {
        visitNode(arg0: number): $GlslNodeVisitor;
        visitBitwiseExpressionEnd(arg0: $GlslBitwiseNode): void;
        constructor();
        constructor(arg0: $GlslBitwiseVisitor);
    }
    export class $GlslInvokeVisitor {
        visitParameter(arg0: number): $GlslNodeVisitor;
        visitInvokeEnd(arg0: $GlslInvokeFunctionNode): void;
        visitHeader(): void;
        constructor();
        constructor(arg0: $GlslInvokeVisitor);
    }
    export class $GlslIfVisitor {
        visitElse(): $GlslNodeVisitor;
        visitIfEnd(arg0: $GlslIfNode): void;
        visitIf(): $GlslNodeVisitor;
        constructor();
        constructor(arg0: $GlslIfVisitor);
    }
}
