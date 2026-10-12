import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Animation } from "@package/com/ilexiconn/llibrary/server/animation";

declare module "@package/com/ilexiconn/llibrary/server/event" {
    export class $AnimationEvent<T extends $Entity> extends $Event {
        getEntity(): T;
        getAnimation(): $Animation;
        get entity(): T;
        get animation(): $Animation;
    }
    export class $AnimationEvent$Start<T extends $Entity> extends $AnimationEvent<T> implements $ICancellableEvent {
        setAnimation(arg0: $Animation): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: T, arg1: $Animation);
        set animation(value: $Animation);
    }
    export class $AnimationEvent$Tick<T extends $Entity> extends $AnimationEvent<T> {
        getTick(): number;
        constructor(arg0: T, arg1: $Animation, arg2: number);
        get tick(): number;
    }
}
