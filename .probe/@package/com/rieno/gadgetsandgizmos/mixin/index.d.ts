import { $CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters_ } from "@package/net/minecraft/world/item";

declare module "@package/com/rieno/gadgetsandgizmos/mixin" {
    export class $CreativeModeTabsAccessor {
        static createthrusters$getCachedParameters(): $CreativeModeTab$ItemDisplayParameters;
        static createthrusters$buildAllTabContents(arg0: $CreativeModeTab$ItemDisplayParameters_): void;
    }
    export interface $CreativeModeTabsAccessor {
    }
}
