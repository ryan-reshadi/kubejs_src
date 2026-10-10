import { $Stream } from "@package/java/util/stream";
import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslTypeQualifier, $GlslSpecifiedType, $GlslStructSpecifier, $GlslType_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/variable" {
    export class $GlslGetArrayNode implements $GlslNode {
        getExpression(): $GlslNode;
        setIndex(arg0: $GlslNode): $GlslGetArrayNode;
        getIndex(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetArrayNode;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslVariableNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslVariableNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslStructDeclarationNode implements $GlslRootNode {
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslStructDeclarationNode;
        getSpecifiedType(): $GlslSpecifiedType;
        getStructSpecifier(): $GlslStructSpecifier;
        setSpecifiedType(arg0: $GlslSpecifiedType): $GlslStructDeclarationNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        isStruct(): boolean;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslSpecifiedType);
        get nodeType(): $GlslNodeType;
        get structSpecifier(): $GlslStructSpecifier;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get struct(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslGetFieldNode implements $GlslNode {
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetFieldNode;
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        stream(): $Stream<$GlslNode>;
        getFieldSelection(): string;
        setFieldSelection(arg0: string): $GlslGetFieldNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslNewFieldNode implements $GlslRootNode {
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        setType(arg0: $GlslType_): $GlslNewFieldNode;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getInitializer(): $GlslNode;
        setInitializer(arg0: $GlslNode): $GlslNewFieldNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        isStruct(): boolean;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        setName(arg0: string): $GlslRootNode;
        constructor(arg0: $GlslType_, arg1: string, arg2: $GlslNode);
        get nodeType(): $GlslNodeType;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get struct(): boolean;
    }
    export class $GlslVariableDeclarationNode implements $GlslRootNode {
        getNodeType(): $GlslNodeType;
        visit(arg0: $GlslNodeVisitor): void;
        getNames(): $List<string>;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslRootNode;
        getTypeQualifiers(): $List<$GlslTypeQualifier>;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        isStruct(): boolean;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $Collection_<$GlslTypeQualifier>, arg1: $Collection_<string>);
        get nodeType(): $GlslNodeType;
        get names(): $List<string>;
        get typeQualifiers(): $List<$GlslTypeQualifier>;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get struct(): boolean;
        get type(): $GlslSpecifiedType;
    }
}
