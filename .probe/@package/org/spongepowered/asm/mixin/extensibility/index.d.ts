import { $MixinEnvironment, $MixinEnvironment$Phase } from "@package/org/spongepowered/asm/mixin";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $Set_, $Set, $List } from "@package/java/util";

declare module "@package/org/spongepowered/asm/mixin/extensibility" {
    export class $IEnvironmentTokenProvider {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IEnvironmentTokenProvider {
        getToken(arg0: string, arg1: $MixinEnvironment): number;
        getPriority(): number;
        get priority(): number;
    }
    export class $IMixinConfigPlugin {
    }
    export interface $IMixinConfigPlugin {
        getMixins(): $List<string>;
        getRefMapperConfig(): string;
        postApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        onLoad(arg0: string): void;
        acceptTargets(arg0: $Set_<string>, arg1: $Set_<string>): void;
        preApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        shouldApplyMixin(arg0: string, arg1: string): boolean;
        get mixins(): $List<string>;
        get refMapperConfig(): string;
    }
    export class $IMixinInfo {
    }
    export interface $IMixinInfo {
        getPhase(): $MixinEnvironment$Phase;
        getTargetClasses(): $List<string>;
        getClassRef(): string;
        isDetachedSuper(): boolean;
        getClassBytes(): number[];
        getConfig(): $IMixinConfig;
        getClassNode(arg0: number): $ClassNode;
        getClassName(): string;
        getName(): string;
        getPriority(): number;
        get phase(): $MixinEnvironment$Phase;
        get targetClasses(): $List<string>;
        get classRef(): string;
        get detachedSuper(): boolean;
        get classBytes(): number[];
        get config(): $IMixinConfig;
        get className(): string;
        get name(): string;
        get priority(): number;
    }
    export class $IRemapper {
    }
    export interface $IRemapper {
        unmap(arg0: string): string;
        mapDesc(arg0: string): string;
        mapFieldName(arg0: string, arg1: string, arg2: string): string;
        mapMethodName(arg0: string, arg1: string, arg2: string): string;
        unmapDesc(arg0: string): string;
        map(arg0: string): string;
    }
    export class $IMixinConfigSource {
    }
    export interface $IMixinConfigSource {
        getDescription(): string;
        getId(): string;
        get description(): string;
        get id(): string;
    }
    export class $IMixinConfig {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IMixinConfig {
        getTargets(): $Set<string>;
        getSource(): $IMixinConfigSource;
        getCleanSourceId(): string;
        getDecoration<V>(arg0: string): V;
        getMixinPackage(): string;
        getPlugin(): $IMixinConfigPlugin;
        hasDecoration(arg0: string): boolean;
        isRequired(): boolean;
        getEnvironment(): $MixinEnvironment;
        getName(): string;
        getPriority(): number;
        decorate<V>(arg0: string, arg1: V): void;
        get targets(): $Set<string>;
        get source(): $IMixinConfigSource;
        get cleanSourceId(): string;
        get mixinPackage(): string;
        get plugin(): $IMixinConfigPlugin;
        get required(): boolean;
        get environment(): $MixinEnvironment;
        get name(): string;
        get priority(): number;
    }
}
