import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $AbstractCoroutineContextKey, $Continuation, $AbstractCoroutineContextElement, $ContinuationInterceptor, $CoroutineContext } from "@package/kotlin/coroutines";
import { $Runnable_, $Object } from "@package/java/lang";

declare module "@package/kotlinx/coroutines" {
    export class $CoroutineDispatcher extends $AbstractCoroutineContextElement implements $ContinuationInterceptor {
        dispatch(arg0: $CoroutineContext, arg1: $Runnable_): void;
        plus(arg0: $CoroutineDispatcher): $CoroutineDispatcher;
        static limitedParallelism$default(arg0: $CoroutineDispatcher, arg1: number, arg2: string, arg3: number, arg4: $Object): $CoroutineDispatcher;
        interceptContinuation<T>(arg0: $Continuation<T>): $Continuation<T>;
        releaseInterceptedContinuation(arg0: $Continuation<never>): void;
        isDispatchNeeded(arg0: $CoroutineContext): boolean;
        dispatchYield(arg0: $CoroutineContext, arg1: $Runnable_): void;
        limitedParallelism(arg0: number, arg1: string): $CoroutineDispatcher;
        limitedParallelism(arg0: number): $CoroutineDispatcher;
        static Key: $CoroutineDispatcher$Key;
        constructor();
    }
    export class $CoroutineScope {
    }
    export interface $CoroutineScope {
        getCoroutineContext(): $CoroutineContext;
        get coroutineContext(): $CoroutineContext;
    }
    /**
     * Values that may be interpreted as {@link $CoroutineScope}.
     */
    export type $CoroutineScope_ = (() => $CoroutineContext);
    export class $CoroutineDispatcher$Key extends $AbstractCoroutineContextKey<$ContinuationInterceptor, $CoroutineDispatcher> {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
