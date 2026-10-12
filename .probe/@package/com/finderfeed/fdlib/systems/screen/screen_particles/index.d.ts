import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";

declare module "@package/com/finderfeed/fdlib/systems/screen/screen_particles" {
    export class $ScreenParticlesRenderEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor();
    }
    export class $ScreenParticlesRenderEvent$Screen extends $ScreenParticlesRenderEvent {
        constructor();
    }
    export class $ScreenParticlesRenderEvent$Gui extends $ScreenParticlesRenderEvent {
        constructor();
    }
}
