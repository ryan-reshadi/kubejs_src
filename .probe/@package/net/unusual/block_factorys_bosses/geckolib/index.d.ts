import { $Matrix4f, $Quaternionf } from "@package/org/joml";

declare module "@package/net/unusual/block_factorys_bosses/geckolib" {
    export class $CommonPoseStack {
    }
    export interface $CommonPoseStack {
        bosses_rise_java$mulPose(arg0: $Quaternionf): void;
        bosses_rise_java$mulPose(arg0: $Matrix4f): void;
        bosses_rise_java$scale(arg0: number, arg1: number, arg2: number): void;
        bosses_rise_java$pop(): void;
        bosses_rise_java$last(): $Matrix4f;
        bosses_rise_java$push(): void;
        bosses_rise_java$translate(arg0: number, arg1: number, arg2: number): void;
        bosses_rise_java$translate(arg0: number, arg1: number, arg2: number): void;
    }
}
