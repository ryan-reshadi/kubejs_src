import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $SortedMap, $List_, $Locale, $Map } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/resources/language" {
    export class $I18n {
        /**
         * Translates the given string and then formats it. Equivalent to `String.format(translate(key), parameters)`.
         */
        static get(translateKey: string, ...parameters: $Object[]): string;
        static exists(key: string): boolean;
    }
    export class $LanguageManager implements $ResourceManagerReloadListener {
        getLanguage(code: string): $LanguageInfo;
        getSelected(): string;
        setSelected(selected: string): void;
        getJavaLocale(): $Locale;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getLanguages(): $SortedMap<string, $LanguageInfo>;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(currentCode: string, reloadFallback: $Consumer_<$ClientLanguage>);
        get javaLocale(): $Locale;
        get languages(): $SortedMap<string, $LanguageInfo>;
        get name(): string;
    }
    export class $ClientLanguage extends $Language {
        handler$zkj000$bookshelf$getOrDefault(arg0: string, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        handler$zkj000$bookshelf$has(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        static loadFrom(resourceManager: $ResourceManager, filenames: $List_<string>, defaultRightToLeft: boolean): $ClientLanguage;
        storage: $Map<string, string>;
        static DEFAULT: string;
    }
    export class $FormattedBidiReorder {
        static reorder(text: $FormattedText, defaultRightToLeft: boolean): $FormattedCharSequence;
        constructor();
    }
    export class $LanguageInfo extends $Record {
        name(): string;
        region(): string;
        toComponent(): $Component;
        bidirectional(): boolean;
        static CODEC: $Codec<$LanguageInfo>;
        constructor(arg0: string, arg1: string, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LanguageInfo}.
     */
    export type $LanguageInfo_ = { name?: string, region?: string, bidirectional?: boolean,  } | [name?: string, region?: string, bidirectional?: boolean, ];
}
