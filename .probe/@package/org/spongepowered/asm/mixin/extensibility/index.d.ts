import { $MixinEnvironment, $MixinEnvironment$Phase } from "@package/org/spongepowered/asm/mixin";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $Set_, $Set, $List } from "@package/java/util";

declare module "@package/org/spongepowered/asm/mixin/extensibility" {
    export class $IEnvironmentTokenProvider {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IEnvironmentTokenProvider {
        getPriority(): number;
        getToken(arg0: string, arg1: $MixinEnvironment): number;
        get priority(): number;
    }
    export class $IMixinConfigPlugin {
    }
    export interface $IMixinConfigPlugin {
        getRefMapperConfig(): string;
        shouldApplyMixin(arg0: string, arg1: string): boolean;
        acceptTargets(arg0: $Set_<string>, arg1: $Set_<string>): void;
        onLoad(arg0: string): void;
        preApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        getMixins(): $List<string>;
        postApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        get refMapperConfig(): string;
        get mixins(): $List<string>;
    }
    export class $IMixinInfo {
    }
    export interface $IMixinInfo {
        getTargetClasses(): $List<string>;
        getClassRef(): string;
        isDetachedSuper(): boolean;
        getClassBytes(): number[];
        getName(): string;
        getPriority(): number;
        getClassName(): string;
        getClassNode(arg0: number): $ClassNode;
        getConfig(): $IMixinConfig;
        getPhase(): $MixinEnvironment$Phase;
        get targetClasses(): $List<string>;
        get classRef(): string;
        get detachedSuper(): boolean;
        get classBytes(): number[];
        get name(): string;
        get priority(): number;
        get className(): string;
        get config(): $IMixinConfig;
        get phase(): $MixinEnvironment$Phase;
    }
    export class $IRemapper {
    }
    export interface $IRemapper {
        map(arg0: string): string;
        unmapDesc(arg0: string): string;
        mapDesc(arg0: string): string;
        mapFieldName(arg0: string, arg1: string, arg2: string): string;
        mapMethodName(arg0: string, arg1: string, arg2: string): string;
        unmap(arg0: string): string;
    }
    export class $IMixinConfigSource {
    }
    export interface $IMixinConfigSource {
        getId(): string;
        getDescription(): string;
        get id(): string;
        get description(): string;
    }
    export class $IMixinConfig {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IMixinConfig {
        getCleanSourceId(): string;
        getDecoration<V>(arg0: string): V;
        getMixinPackage(): string;
        hasDecoration(arg0: string): boolean;
        getName(): string;
        getPriority(): number;
        getSource(): $IMixinConfigSource;
        getTargets(): $Set<string>;
        isRequired(): boolean;
        getPlugin(): $IMixinConfigPlugin;
        decorate<V>(arg0: string, arg1: V): void;
        getEnvironment(): $MixinEnvironment;
        get cleanSourceId(): string;
        get mixinPackage(): string;
        get name(): string;
        get priority(): number;
        get source(): $IMixinConfigSource;
        get targets(): $Set<string>;
        get required(): boolean;
        get plugin(): $IMixinConfigPlugin;
        get environment(): $MixinEnvironment;
    }
}
