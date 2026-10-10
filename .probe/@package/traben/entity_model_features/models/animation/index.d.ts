import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $EMFModelOrRenderVariable, $EMFModelOrRenderVariable_ } from "@package/traben/entity_model_features/models/animation/math/variables";
import { $PoseStack$Pose, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Enum } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $EMFModelPart } from "@package/traben/entity_model_features/models/parts";
export * as state from "@package/traben/entity_model_features/models/animation/state";
export * as math from "@package/traben/entity_model_features/models/animation/math";

declare module "@package/traben/entity_model_features/models/animation" {
    export class $EMFAttachment {
        translate(entry: $PoseStack): void;
        pose: $PoseStack$Pose;
        type: $EMFAttachment$Type;
        constructor(x: number, y: number, z: number, type: $EMFAttachment$Type_);
    }
    export class $EMFAnimationHandler$AnimLineData {
        isVar: boolean;
        asmIndex: number;
        partToApplyTo: $EMFModelPart;
        isBoolean: boolean;
        expression: string;
        applier: $EMFModelOrRenderVariable;
        animKey: string;
        isVarGlobal: boolean;
        constructor(animKey: string, expression: string, partToApplyTo: $EMFModelPart, applier: $EMFModelOrRenderVariable_);
    }
    export class $EMFAttachment$Type extends $Enum<$EMFAttachment$Type> {
        static values(): $EMFAttachment$Type[];
        static valueOf(name: string): $EMFAttachment$Type;
        static of(id: string): $EMFAttachment$Type;
        isHumanoidHand(): boolean;
        static HEAD: $EMFAttachment$Type;
        static ENDERMAN: $EMFAttachment$Type;
        static PARROT_RIGHT: $EMFAttachment$Type;
        static RIGHT_HAND: $EMFAttachment$Type;
        static WITCH: $EMFAttachment$Type;
        static PARROT_LEFT_AUTO: $EMFAttachment$Type;
        static PARROT_RIGHT_AUTO: $EMFAttachment$Type;
        static LEFT_HAND: $EMFAttachment$Type;
        static FOX: $EMFAttachment$Type;
        static VILLAGER: $EMFAttachment$Type;
        static DOLPHIN: $EMFAttachment$Type;
        static PARROT_LEFT: $EMFAttachment$Type;
        id: string;
        static PANDA: $EMFAttachment$Type;
        static NON_HANDS: $EMFAttachment$Type[];
        static SULFUR_CUBE: $EMFAttachment$Type;
        get humanoidHand(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EMFAttachment$Type}.
     */
    export type $EMFAttachment$Type_ = "right_hand" | "left_hand" | "head" | "sulfur_cube" | "enderman" | "villager" | "witch" | "panda" | "dolphin" | "fox" | "parrot_left" | "parrot_right" | "parrot_left_auto" | "parrot_right_auto";
    export class $EMFAnimationHandler {
        getLine(animKey: string): $EMFAnimationHandler$AnimLineData;
        lines(): $List<$EMFAnimationHandler$AnimLineData>;
        animate(pausedParts: $ModelPart[]): void;
        addAnimLineData(animLineData: $EMFAnimationHandler$AnimLineData): void;
        finishAndValidate(): boolean;
        modelName: string;
        constructor(modelName: string, animLineDataList: $List_<$EMFAnimationHandler$AnimLineData>);
    }
}
