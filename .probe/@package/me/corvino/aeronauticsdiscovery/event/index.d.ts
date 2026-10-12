import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vector3d } from "@package/org/joml";

declare module "@package/me/corvino/aeronauticsdiscovery/event" {
    export class $PlayerApproachesStructureEvent extends $Event {
        getLevel(): $ServerLevel;
        getSubLevel(): $ServerSubLevel;
        getPlayer(): $ServerPlayer;
        getTemplateId(): $ResourceLocation;
        constructor(arg0: $ServerLevel, arg1: $ServerPlayer, arg2: $ResourceLocation_, arg3: $ServerSubLevel);
        get level(): $ServerLevel;
        get subLevel(): $ServerSubLevel;
        get player(): $ServerPlayer;
        get templateId(): $ResourceLocation;
    }
    export class $SubLevelImpactEvent extends $Event {
        getLevel(): $ServerLevel;
        getHitBlock(): $BlockPos;
        getSubLevel(): $ServerSubLevel;
        getImpactStrength(): number;
        getImpactPosition(): $Vector3d;
        constructor(arg0: $ServerLevel, arg1: $ServerSubLevel, arg2: $Vector3d, arg3: number, arg4: $BlockPos_);
        get level(): $ServerLevel;
        get hitBlock(): $BlockPos;
        get subLevel(): $ServerSubLevel;
        get impactStrength(): number;
        get impactPosition(): $Vector3d;
    }
}
