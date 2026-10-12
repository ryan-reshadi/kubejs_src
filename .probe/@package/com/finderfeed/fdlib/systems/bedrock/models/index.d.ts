import { $JsonObject_ } from "@package/com/google/gson";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $List, $List_, $Map } from "@package/java/util";
import { $Matrix4f, $Vector3f } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/finderfeed/fdlib/systems/bedrock/models" {
    export class $FDModelInfo {
        load(arg0: $JsonObject_): void;
        getModelName(): $ResourceLocation;
        getCubeScale(): number;
        partDefinitionList: $List<$FDModelPartDefinition>;
        constructor(arg0: $ResourceLocation_, arg1: number);
        get modelName(): $ResourceLocation;
        get cubeScale(): number;
    }
    /**
     * Values that may be interpreted as {@link $FDModelInfo}.
     */
    export type $FDModelInfo_ = RegistryTypes.FdlibBedrockModels;
    export class $FDModelPart {
        getY(): number;
        render(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getChildren(): $Map<string, $FDModelPart>;
        getX(): number;
        getZ(): number;
        reset(): void;
        transform(arg0: $Matrix4f): void;
        getParent(): $FDModelPart;
        setVisible(arg0: boolean): void;
        getXRot(): number;
        getYRot(): number;
        setYRot(arg0: number): void;
        setXRot(arg0: number): void;
        addYRot(arg0: number): void;
        getYScale(): number;
        addXRot(arg0: number): void;
        setZRot(arg0: number): void;
        getZRot(): number;
        addZRot(arg0: number): void;
        getXScale(): number;
        getZScale(): number;
        parent: $FDModelPart;
        xScale: number;
        cubes: $List<$FDCube>;
        x: number;
        initRotation: $Vector3f;
        name: string;
        y: number;
        pivot: $Vector3f;
        z: number;
        isVisible: boolean;
        yScale: number;
        zScale: number;
        constructor(arg0: string, arg1: $FDModelPart, arg2: $List_<$FDCube>, arg3: $Vector3f, arg4: $Vector3f);
        get children(): $Map<string, $FDModelPart>;
        set visible(value: boolean);
        get YScale(): number;
        get XScale(): number;
        get ZScale(): number;
    }
    export class $FDFace {
        getVertices(): $FDVertex[];
        getNormal(): $Vector3f;
        static CODEC: $StreamCodec<$FriendlyByteBuf, $FDFace>;
        get vertices(): $FDVertex[];
        get normal(): $Vector3f;
    }
    export class $FDCube {
        static fromJson(arg0: $JsonObject_, arg1: $Vector3f, arg2: number, arg3: number, arg4: number): $FDCube;
        render(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getFaces(): $FDFace[];
        static CODEC: $StreamCodec<$FriendlyByteBuf, $FDCube>;
        get faces(): $FDFace[];
    }
    export class $FDVertex {
        getU(): number;
        getPosition(): $Vector3f;
        getV(): number;
        static CODEC: $StreamCodec<$FriendlyByteBuf, $FDVertex>;
        get u(): number;
        get position(): $Vector3f;
        get v(): number;
    }
    export class $FDModel {
        render(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getModelPartTransformation(arg0: $FDModelPart): $Matrix4f;
        getModelPartTransformation(arg0: string): $Matrix4f;
        resetTransformations(): void;
        transformPoint(arg0: string, arg1: $Vector3f): $Vector3f;
        getModelPart(arg0: string): $FDModelPart;
        traceCubesInModelPart(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f, arg3: string): $Vector3f;
        getPartOrNull(arg0: string): $FDModelPart;
        getModelInfoId(): $ResourceLocation;
        main: $FDModelPart;
        constructor(arg0: $FDModelInfo_);
        get modelInfoId(): $ResourceLocation;
    }
    export class $FDModelPartDefinition {
        parent: string;
        static CODEC: $StreamCodec<$FriendlyByteBuf, $FDModelPartDefinition>;
        cubes: $List<$FDCube>;
        initRotation: $Vector3f;
        name: string;
        pivot: $Vector3f;
        constructor(arg0: $List_<$FDCube>, arg1: string, arg2: string, arg3: $Vector3f, arg4: $Vector3f);
    }
    export interface $FDModelInfo extends RegistryMarked<RegistryTypes.FdlibBedrockModelsTag, RegistryTypes.FdlibBedrockModels> {}
}
