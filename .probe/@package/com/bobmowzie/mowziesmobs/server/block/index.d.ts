import { $Block_, $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/com/bobmowzie/mowziesmobs/server/block" {
    export class $ICopiedBlockProperties {
    }
    export interface $ICopiedBlockProperties {
        mowziesMobs$setBaseBlock(arg0: $Block_): void;
        mowziesMobs$getBaseBlock(): $Block;
    }
}
