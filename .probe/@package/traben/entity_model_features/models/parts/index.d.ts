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
        setVariantStateTo(newVariant: number): void;
        copyVariantTo(from: number, to: number): void;
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
        getRoot(): $EMFModelPartRoot;
        getVanillaModelPartsOfCurrentState(): $ModelPart;
        getAllChildPartsAsAnimationMap(prefixableParents: string, variantNum: number, optifinePartNameMap: $Map_<string, string>): $HashMap<string, $EMFModelPart>;
        simplePrintChildren(depth: number): string;
        toStringShort(): string;
        renderBoxes(matrices: $PoseStack, vertices: $VertexConsumer, alpha: number): void;
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
        hasAnimation(): boolean;
        getPositionerForAttachment(type: $EMFAttachment$Type_): $Consumer<$PoseStack>;
        getAllVanillaPartsEMF(): $Collection<$EMFModelPartVanilla>;
        checkIfShouldExpireEntity(emfState: $EMFEntityRenderState, id: $UUID_): void;
        getTopLevelJemTexture(): $ResourceLocation;
        resetVanillaPartsToDefaults(): void;
        getAllVanillaPartsByNameEMF(): $Map<string, $EMFModelPartVanilla>;
        oneTimeRunnable(): void;
        doVariantCheck(emfState: $EMFEntityRenderState): void;
        animateNoPause(): void;
        discoverAndInitVariants(fallbackPropertiesName: string): void;
        setVariant1ToVanilla0(): void;
        addAndSetVariantOfJem(jemData: $EMFJemData, variant: number): void;
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
        get topLevelJemTexture(): $ResourceLocation;
        get allVanillaPartsByNameEMF(): $Map<string, $EMFModelPartVanilla>;
    }
    export class $EMFModelPartWithState$EMFModelState extends $Record {
        copy(): $EMFModelPartWithState$EMFModelState;
        copy(visibleOverride: boolean, keepTexture: boolean): $EMFModelPartWithState$EMFModelState;
        copy(visibleOverride: boolean): $EMFModelPartWithState$EMFModelState;
        visible(): boolean;
        xScale(): number;
        yScale(): number;
        variantChildren(): $Map<string, $ModelPart>;
        defaultTransform(): $PartPose;
        zScale(): number;
        texture(): $ResourceLocation;
        hidden(): boolean;
        copyWithoutTexture(): $EMFModelPartWithState$EMFModelState;
        cuboids(): $List<$ModelPart$Cube>;
        constructor(defaultTransform: $PartPose, cuboids: $List_<$ModelPart$Cube>, variantChildren: $Map_<string, $ModelPart>, xScale: number, yScale: number, zScale: number, visible: boolean, hidden: boolean, texture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EMFModelPartWithState$EMFModelState}.
     */
    export type $EMFModelPartWithState$EMFModelState_ = { visible?: boolean, hidden?: boolean, yScale?: number, cuboids?: $List_<$ModelPart$Cube>, texture?: $ResourceLocation_, defaultTransform?: $PartPose, zScale?: number, variantChildren?: $Map_<string, $ModelPart>, xScale?: number,  } | [visible?: boolean, hidden?: boolean, yScale?: number, cuboids?: $List_<$ModelPart$Cube>, texture?: $ResourceLocation_, defaultTransform?: $PartPose, zScale?: number, variantChildren?: $Map_<string, $ModelPart>, xScale?: number, ];
    export class $EMFModelPartVanilla extends $EMFModelPartWithState {
        getAllEMFCustomChildren(): $ModelPart[];
        setHideInTheseStates(variant: number): void;
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
        get allEMFCustomChildren(): $ModelPart[];
        set hideInTheseStates(value: number);
    }
}
