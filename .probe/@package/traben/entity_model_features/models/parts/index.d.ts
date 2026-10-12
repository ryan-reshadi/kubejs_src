import { $EMFJemData } from "@package/traben/entity_model_features/models/jem_objects";
import { $ETFLruCache$UUIDInteger } from "@package/traben/entity_texture_features/utils";
import { $Consumer } from "@package/java/util/function";
import { $EMFEntityRenderState } from "@package/traben/entity_model_features/models/animation/state";
import { $ModelPart, $PartPose, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EMFAnimationHandler, $EMFAttachment$Type_ } from "@package/traben/entity_model_features/models/animation";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ETFApi$ETFVariantSuffixProvider } from "@package/traben/entity_texture_features";
import { $EMFDirectoryHandler } from "@package/traben/entity_model_features/utils";
import { $Record } from "@package/java/lang";
import { $HashMap, $List, $Map_, $Map, $UUID_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $EMFModel_ID } from "@package/traben/entity_model_features/models";

declare module "@package/traben/entity_model_features/models/parts" {
    export class $EMFModelPartWithState extends $EMFModelPart {
        copyVariantTo(from: number, to: number): void;
        setVariantStateTo(newVariant: number): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(cuboids: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>, root: $EMFModelPartRoot);
        set variantStateTo(value: number);
    }
    export class $EMFModelPart extends $ModelPart {
        toStringShort(): string;
        getRoot(): $EMFModelPartRoot;
        renderBoxes(matrices: $PoseStack, vertices: $VertexConsumer, alpha: number): void;
        simplePrintChildren(depth: number): string;
        getVanillaModelPartsOfCurrentState(): $ModelPart;
        getAllChildPartsAsAnimationMap(prefixableParents: string, variantNum: number, optifinePartNameMap: $Map_<string, string>): $HashMap<string, $EMFModelPart>;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        children: $Map<string, $ModelPart>;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(cuboids: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>, root: $EMFModelPartRoot);
        get root(): $EMFModelPartRoot;
        get vanillaModelPartsOfCurrentState(): $ModelPart;
    }
    export class $EMFModelPartRoot extends $EMFModelPartVanilla {
        animate(): void;
        getPositionerForAttachment(type: $EMFAttachment$Type_): $Consumer<$PoseStack>;
        getAllVanillaPartsEMF(): $Collection<$EMFModelPartVanilla>;
        getAllVanillaPartsByNameEMF(): $Map<string, $EMFModelPartVanilla>;
        oneTimeRunnable(): void;
        doVariantCheck(emfState: $EMFEntityRenderState): void;
        checkIfShouldExpireEntity(emfState: $EMFEntityRenderState, id: $UUID_): void;
        hasAnimation(): boolean;
        animateNoPause(): void;
        getTopLevelJemTexture(): $ResourceLocation;
        resetVanillaPartsToDefaults(): void;
        addAndSetVariantOfJem(jemData: $EMFJemData, variant: number): void;
        discoverAndInitVariants(fallbackPropertiesName: string): void;
        setVariant1ToVanilla0(): void;
        receiveAnimationHandler(variant: number, animationHandler: $EMFAnimationHandler): void;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        xRot: number;
        containsCustomAnims: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        vanillaRoot: $ModelPart;
        zScale: number;
        isMainModel: boolean;
        visible: boolean;
        yRot: number;
        yScale: number;
        variantTester: $ETFApi$ETFVariantSuffixProvider;
        directoryContext: $EMFDirectoryHandler;
        modelName: $EMFModel_ID;
        isSetByAnimation: boolean;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        entitySuffixMap: $ETFLruCache$UUIDInteger;
        containsCustomModel: boolean;
        constructor(mobNameForFileAndMap: $EMFModel_ID, directoryContext: $EMFDirectoryHandler, vanillaRoot: $ModelPart, optifinePartNames: $Collection_<string>, mapForCreatedParts: $Map_<string, $EMFModelPartVanilla>);
        get allVanillaPartsEMF(): $Collection<$EMFModelPartVanilla>;
        get allVanillaPartsByNameEMF(): $Map<string, $EMFModelPartVanilla>;
        get topLevelJemTexture(): $ResourceLocation;
    }
    export class $EMFModelPartWithState$EMFModelState extends $Record {
        texture(): $ResourceLocation;
        visible(): boolean;
        hidden(): boolean;
        copy(visibleOverride: boolean): $EMFModelPartWithState$EMFModelState;
        copy(): $EMFModelPartWithState$EMFModelState;
        copy(visibleOverride: boolean, keepTexture: boolean): $EMFModelPartWithState$EMFModelState;
        xScale(): number;
        yScale(): number;
        copyWithoutTexture(): $EMFModelPartWithState$EMFModelState;
        zScale(): number;
        cuboids(): $List<$ModelPart$Cube>;
        defaultTransform(): $PartPose;
        variantChildren(): $Map<string, $ModelPart>;
        constructor(defaultTransform: $PartPose, cuboids: $List_<$ModelPart$Cube>, variantChildren: $Map_<string, $ModelPart>, xScale: number, yScale: number, zScale: number, visible: boolean, hidden: boolean, texture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EMFModelPartWithState$EMFModelState}.
     */
    export type $EMFModelPartWithState$EMFModelState_ = { hidden?: boolean, visible?: boolean, xScale?: number, variantChildren?: $Map_<string, $ModelPart>, zScale?: number, defaultTransform?: $PartPose, texture?: $ResourceLocation_, cuboids?: $List_<$ModelPart$Cube>, yScale?: number,  } | [hidden?: boolean, visible?: boolean, xScale?: number, variantChildren?: $Map_<string, $ModelPart>, zScale?: number, defaultTransform?: $PartPose, texture?: $ResourceLocation_, cuboids?: $List_<$ModelPart$Cube>, yScale?: number, ];
    export class $EMFModelPartVanilla extends $EMFModelPartWithState {
        setHideInTheseStates(variant: number): void;
        getAllEMFCustomChildren(): $ModelPart[];
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(name: string, vanillaPart: $ModelPart, optifinePartNames: $Collection_<string>, allVanillaParts: $Map_<string, $EMFModelPartVanilla>, root: $EMFModelPartRoot);
        set hideInTheseStates(value: number);
        get allEMFCustomChildren(): $ModelPart[];
    }
}
