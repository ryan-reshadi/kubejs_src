import { $CreativeModeTab } from "@package/net/minecraft/world/item";

declare module "@package/ace/flight/neoforge/mixin/creativetab" {
    export class $CreativeModeInventoryScreenAccessor {
        static createFlightControl$getSelectedTab(): $CreativeModeTab;
    }
    export interface $CreativeModeInventoryScreenAccessor {
    }
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        createFlightControl$getLeftPos(): number;
        createFlightControl$getTopPos(): number;
    }
}
