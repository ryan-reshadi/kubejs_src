import { $SpruceWidget } from "@package/dev/lambdaurora/spruceui/widget";
export * as widget from "@package/dev/lambdaurora/spruceui/widget";
export * as util from "@package/dev/lambdaurora/spruceui/util";
export * as option from "@package/dev/lambdaurora/spruceui/option";

declare module "@package/dev/lambdaurora/spruceui" {
    export class $Position implements $SprucePositioned {
        static of(anchor: $SprucePositioned, x: number, y: number): $Position;
        static of(x: number, y: number): $Position;
        copy(): $Position;
        move(x: number, y: number): $Position;
        static origin(): $Position;
        getY(): number;
        setAnchor(anchor: $SprucePositioned): void;
        getRelativeY(): number;
        setRelativeX(x: number): void;
        getRelativeX(): number;
        static center(anchor: $SprucePositioned, width: number, y: number): $Position;
        static center(width: number, y: number): $Position;
        static center(parent: $SpruceWidget, y: number): $Position;
        getX(): number;
        getAnchor(): $SprucePositioned;
        setRelativeY(y: number): void;
        get y(): number;
        get x(): number;
    }
}
