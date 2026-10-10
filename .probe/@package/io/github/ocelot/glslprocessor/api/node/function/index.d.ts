import { $GlslNewFieldNode, $GlslVariableDeclarationNode, $GlslStructDeclarationNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType, $GlslParameterDeclaration, $GlslFunctionHeader, $GlslTypeSpecifier, $GlslTypeSpecifier_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/function" {
    export class $GlslFunctionNode implements $GlslRootNode {
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getParameters(): $List<$GlslParameterDeclaration>;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        visit(arg0: $GlslNodeVisitor): void;
        getHeader(): $GlslFunctionHeader;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getReturnType(): $GlslSpecifiedType;
        setName(arg0: string): $GlslFunctionNode;
        setHeader(arg0: $GlslFunctionHeader): void;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        isStruct(): boolean;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslFunctionHeader, arg1: $Collection_<$GlslNode>);
        get parameters(): $List<$GlslParameterDeclaration>;
        get nodeType(): $GlslNodeType;
        get returnType(): $GlslSpecifiedType;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get struct(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslInvokeFunctionNode implements $GlslNode {
        getParameters(): $List<$GlslNode>;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        getHeader(): $GlslNode;
        stream(): $Stream<$GlslNode>;
        setHeader(arg0: $GlslNode): void;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
        get parameters(): $List<$GlslNode>;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslPrimitiveConstructorNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        getPrimitiveType(): $GlslTypeSpecifier;
        setPrimitiveType(arg0: $GlslTypeSpecifier_): void;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslTypeSpecifier_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
}
