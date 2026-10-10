import { $Command_, $Command, $CommandDispatcher, $RedirectModifier, $RedirectModifier_, $ImmutableStringReader, $ResultConsumer_ } from "@package/com/mojang/brigadier";
import { $Enum, $Class } from "@package/java/lang";
import { $List, $List_, $Map_, $Map, $Collection } from "@package/java/util";
import { $CommandNode } from "@package/com/mojang/brigadier/tree";

declare module "@package/com/mojang/brigadier/context" {
    export class $CommandContext<S> {
        getChild(): $CommandContext<S>;
        getSource(): S;
        getLastChild(): $CommandContext<S>;
        getRootNode(): $CommandNode<S>;
        getInput(): string;
        getRange(): $StringRange;
        getArgument<V>(arg0: string, arg1: $Class<V>): V;
        copyFor(arg0: S): $CommandContext<S>;
        getNodes(): $List<$ParsedCommandNode<S>>;
        getCommand(): $Command<S>;
        hasNodes(): boolean;
        isForked(): boolean;
        getRedirectModifier(): $RedirectModifier<S>;
        constructor(arg0: S, arg1: string, arg2: $Map_<string, $ParsedArgument<S, never>>, arg3: $Command_<S>, arg4: $CommandNode<S>, arg5: $List_<$ParsedCommandNode<S>>, arg6: $StringRange, arg7: $CommandContext<S>, arg8: $RedirectModifier_<S>, arg9: boolean);
        get child(): $CommandContext<S>;
        get source(): S;
        get lastChild(): $CommandContext<S>;
        get rootNode(): $CommandNode<S>;
        get input(): string;
        get range(): $StringRange;
        get nodes(): $List<$ParsedCommandNode<S>>;
        get command(): $Command<S>;
        get forked(): boolean;
        get redirectModifier(): $RedirectModifier<S>;
    }
    export class $ParsedCommandNode<S> {
        getNode(): $CommandNode<S>;
        getRange(): $StringRange;
        constructor(arg0: $CommandNode<S>, arg1: $StringRange);
        get node(): $CommandNode<S>;
        get range(): $StringRange;
    }
    export class $StringRange {
        static between(arg0: number, arg1: number): $StringRange;
        getStart(): number;
        getEnd(): number;
        static at(arg0: number): $StringRange;
        get(arg0: $ImmutableStringReader): string;
        get(arg0: string): string;
        getLength(): number;
        isEmpty(): boolean;
        static encompassing(arg0: $StringRange, arg1: $StringRange): $StringRange;
        constructor(arg0: number, arg1: number);
        get start(): number;
        get end(): number;
        get length(): number;
        get empty(): boolean;
    }
    export class $ContextChain$Stage extends $Enum<$ContextChain$Stage> {
        static values(): $ContextChain$Stage[];
        static valueOf(arg0: string): $ContextChain$Stage;
        static EXECUTE: $ContextChain$Stage;
        static MODIFY: $ContextChain$Stage;
    }
    /**
     * Values that may be interpreted as {@link $ContextChain$Stage}.
     */
    export type $ContextChain$Stage_ = "modify" | "execute";
    export class $CommandContextBuilder<S> {
        getChild(): $CommandContextBuilder<S>;
        getSource(): S;
        withNode(arg0: $CommandNode<S>, arg1: $StringRange): $CommandContextBuilder<S>;
        getLastChild(): $CommandContextBuilder<S>;
        getArguments(): $Map<string, $ParsedArgument<S, never>>;
        getRootNode(): $CommandNode<S>;
        build(arg0: string): $CommandContext<S>;
        getRange(): $StringRange;
        getDispatcher(): $CommandDispatcher<S>;
        copy(): $CommandContextBuilder<S>;
        withCommand(arg0: $Command_<S>): $CommandContextBuilder<S>;
        withChild(arg0: $CommandContextBuilder<S>): $CommandContextBuilder<S>;
        findSuggestionContext(arg0: number): $SuggestionContext<S>;
        withSource(arg0: S): $CommandContextBuilder<S>;
        getNodes(): $List<$ParsedCommandNode<S>>;
        getCommand(): $Command<S>;
        withArgument(arg0: string, arg1: $ParsedArgument<S, never>): $CommandContextBuilder<S>;
        constructor(arg0: $CommandDispatcher<S>, arg1: S, arg2: $CommandNode<S>, arg3: number);
        get child(): $CommandContextBuilder<S>;
        get source(): S;
        get lastChild(): $CommandContextBuilder<S>;
        get arguments(): $Map<string, $ParsedArgument<S, never>>;
        get rootNode(): $CommandNode<S>;
        get range(): $StringRange;
        get dispatcher(): $CommandDispatcher<S>;
        get nodes(): $List<$ParsedCommandNode<S>>;
        get command(): $Command<S>;
    }
    export class $ContextChain<S> {
        nextStage(): $ContextChain<S>;
        static tryFlatten<S>(arg0: $CommandContext<S>): ($ContextChain<S>) | undefined;
        executeAll(arg0: S, arg1: $ResultConsumer_<S>): number;
        getStage(): $ContextChain$Stage;
        static runModifier<S>(arg0: $CommandContext<S>, arg1: S, arg2: $ResultConsumer_<S>, arg3: boolean): $Collection<S>;
        static runExecutable<S>(arg0: $CommandContext<S>, arg1: S, arg2: $ResultConsumer_<S>, arg3: boolean): number;
        getTopContext(): $CommandContext<S>;
        constructor(arg0: $List_<$CommandContext<S>>, arg1: $CommandContext<S>);
        get stage(): $ContextChain$Stage;
        get topContext(): $CommandContext<S>;
    }
    export class $ParsedArgument<S, T> {
        getResult(): T;
        getRange(): $StringRange;
        constructor(arg0: number, arg1: number, arg2: T);
        get result(): T;
        get range(): $StringRange;
    }
    export class $SuggestionContext<S> {
        parent: $CommandNode<S>;
        startPos: number;
        constructor(arg0: $CommandNode<S>, arg1: number);
    }
}
