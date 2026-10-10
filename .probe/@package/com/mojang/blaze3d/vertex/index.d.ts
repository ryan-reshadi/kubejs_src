import { $PoseTransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $URenderTypeToVertexConsumer, $ETFVertexConsumer } from "@package/traben/entity_texture_features/utils";
import { $RenderType, $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $CommonPoseStack } from "@package/net/unusual/block_factorys_bosses/geckolib";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Deque } from "@package/java/util";
import { $ByteBuffer, $FloatBuffer } from "@package/java/nio";
import { $PoseStackExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Consumer_ } from "@package/java/util/function";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IPoseStackExtension, $IVertexConsumerExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BufferBuilderExtension } from "@package/net/caffeinemc/mods/sodium/client/render/vertex/buffer";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $MemoryStack } from "@package/org/lwjgl/system";
import { $MeshDataAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/render/immediate/buffer_builder/sorting";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $BufferBuilderAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/render/immediate/buffer_builder/intrinsics";
import { $IVertexBuffer } from "@package/team/lodestar/lodestone/systems/rendering";
import { $PoseStackAccessor as $PoseStackAccessor$1 } from "@package/dev/engine_room/flywheel/impl/mixin";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $VertexFormatExtensions } from "@package/net/caffeinemc/mods/sodium/api/vertex/format";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $VertexBufferExtension, $DebugVertexBufferExt } from "@package/foundry/veil/ext";
import { $VertexBufferWriter } from "@package/net/caffeinemc/mods/sodium/api/vertex/buffer";
import { $ETFTexture } from "@package/traben/entity_texture_features/features/texture_handlers";
import { $BufferBuilderAccessor as $BufferBuilderAccessor$2 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $Transformation } from "@package/com/mojang/math";
import { $BufferBuilderAccessor as $BufferBuilderAccessor$1 } from "@package/rbasamoyai/createbigcannons/mixin/client";
import { $PoseStackAccessor } from "@package/org/embeddedt/modernfix/common/mixin/bugfix/entity_pose_stack";
import { $Vector3dc, $Matrix4f, $Vector3f, $Quaterniondc, $Matrix3f, $Vector3fc, $Quaternionf, $Quaternionfc } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/vertex" {
    export class $DefaultVertexFormat {
        static POSITION_COLOR_NORMAL: $VertexFormat;
        static BLIT_SCREEN: $VertexFormat;
        static PARTICLE: $VertexFormat;
        static POSITION_TEX_COLOR_NORMAL: $VertexFormat;
        static BLOCK: $VertexFormat;
        static POSITION_TEX: $VertexFormat;
        static POSITION_TEX_COLOR: $VertexFormat;
        static POSITION: $VertexFormat;
        static POSITION_TEX_LIGHTMAP_COLOR: $VertexFormat;
        static POSITION_COLOR_LIGHTMAP: $VertexFormat;
        static POSITION_COLOR: $VertexFormat;
        static POSITION_COLOR_TEX_LIGHTMAP: $VertexFormat;
        static NEW_ENTITY: $VertexFormat;
        constructor();
    }
    export class $ByteBufferBuilder implements $AutoCloseable {
        reserve(bytes: number): number;
        discard(): void;
        build(): $ByteBufferBuilder$Result;
        clear(): void;
        close(): void;
        pointer: number;
        constructor(capacity: number);
    }
    export class $VertexConsumer {
    }
    export interface $VertexConsumer extends $IVertexConsumerExtension {
        setColor(color: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, x: number, y: number, z: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setLight(color: number): $VertexConsumer;
        setWhiteAlpha(color: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        setOverlay(color: number): $VertexConsumer;
        set light(value: number);
        set whiteAlpha(value: number);
        set overlay(value: number);
    }
    export class $VertexFormat$Mode extends $Enum<$VertexFormat$Mode> {
        static values(): $VertexFormat$Mode[];
        static valueOf(arg0: string): $VertexFormat$Mode;
        indexCount(vertices: number): number;
        asGLMode: number;
        static QUADS: $VertexFormat$Mode;
        primitiveLength: number;
        primitiveStride: number;
        connectedPrimitives: boolean;
        static TRIANGLE_FAN: $VertexFormat$Mode;
        static DEBUG_LINES: $VertexFormat$Mode;
        static TRIANGLES: $VertexFormat$Mode;
        static DEBUG_LINE_STRIP: $VertexFormat$Mode;
        static LINE_STRIP: $VertexFormat$Mode;
        static LINES: $VertexFormat$Mode;
        static TRIANGLE_STRIP: $VertexFormat$Mode;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormat$Mode}.
     */
    export type $VertexFormat$Mode_ = "lines" | "line_strip" | "debug_lines" | "debug_line_strip" | "triangles" | "triangle_strip" | "triangle_fan" | "quads";
    export class $VertexSorting$DistanceFunction {
    }
    export interface $VertexSorting$DistanceFunction {
        apply(vector: $Vector3f): number;
    }
    /**
     * Values that may be interpreted as {@link $VertexSorting$DistanceFunction}.
     */
    export type $VertexSorting$DistanceFunction_ = ((arg0: $Vector3f) => number);
    export class $MeshData$SortState extends $Record {
        indexType(): $VertexFormat$IndexType;
        buildSortedIndexBuffer(bufferBuilder: $ByteBufferBuilder, sorting: $VertexSorting_): $ByteBufferBuilder$Result;
        centroids(): $Vector3f[];
        constructor(arg0: $Vector3f[], arg1: $VertexFormat$IndexType_);
    }
    /**
     * Values that may be interpreted as {@link $MeshData$SortState}.
     */
    export type $MeshData$SortState_ = { indexType?: $VertexFormat$IndexType_, centroids?: $Vector3f[],  } | [indexType?: $VertexFormat$IndexType_, centroids?: $Vector3f[], ];
    export class $VertexMultiConsumer {
        static create(first: $VertexConsumer, second: $VertexConsumer): $VertexConsumer;
        static create(...delegates: $VertexConsumer[]): $VertexConsumer;
        static create(): $VertexConsumer;
        static create(consumer: $VertexConsumer): $VertexConsumer;
        constructor();
    }
    export class $VertexMultiConsumer$Multiple extends $Record implements $VertexConsumer, $VertexBufferWriter {
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        delegates(): $VertexConsumer[];
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        setUv(u: number, v: number): $VertexConsumer;
        canUseIntrinsics(): boolean;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
        setColor(packedOverlay: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setLight(packedOverlay: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setOverlay(packedOverlay: number): $VertexConsumer;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        set light(value: number);
        set whiteAlpha(value: number);
        set overlay(value: number);
    }
    /**
     * Values that may be interpreted as {@link $VertexMultiConsumer$Multiple}.
     */
    export type $VertexMultiConsumer$Multiple_ = { delegates?: $VertexConsumer[],  } | [delegates?: $VertexConsumer[], ];
    export class $BufferBuilder implements $VertexConsumer, $ETFVertexConsumer, $BufferBuilderAccessor$1, $BufferBuilderExtension, $VertexBufferWriter, $BufferBuilderAccessor, $BufferBuilderAccessor$2 {
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(color: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        build(): $MeshData;
        buildOrThrow(): $MeshData;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setLight(color: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        setOverlay(color: number): $VertexConsumer;
        sodium$duplicateVertex(): void;
        etf$getETFTexture(): $ETFTexture;
        etf$getProvider(): $URenderTypeToVertexConsumer;
        etf$getRenderLayer(): $RenderType;
        etf$initETFVertexConsumer(provider: $URenderTypeToVertexConsumer, renderLayer: $RenderType): void;
        beginElement(element: $VertexFormatElement_): number;
        sodium$getVertexFormat(): $VertexFormat;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setWhiteAlpha(color: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
        canUseIntrinsics(): boolean;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        sodium$fastFormat(): boolean;
        callBeginElement(element: $VertexFormatElement_): number;
        catnip$getVertices(): number;
        buffer: $ByteBufferBuilder;
        building: boolean;
        constructor(buffer: $ByteBufferBuilder, mode: $VertexFormat$Mode_, format: $VertexFormat);
        set light(value: number);
        set overlay(value: number);
        set whiteAlpha(value: number);
    }
    export class $VertexSorting {
        static byDistance(x: number, y: number, z: number): $VertexSorting;
        static byDistance(distanceFunction: $VertexSorting$DistanceFunction_): $VertexSorting;
        static byDistance(vector: $Vector3f): $VertexSorting;
        static ORTHOGRAPHIC_Z: $VertexSorting;
        static DISTANCE_TO_ORIGIN: $VertexSorting;
    }
    export interface $VertexSorting {
        sort(vectors: $Vector3f[]): number[];
    }
    /**
     * Values that may be interpreted as {@link $VertexSorting}.
     */
    export type $VertexSorting_ = ((arg0: $Vector3f[]) => number[]);
    export class $VertexFormatElement$Type extends $Enum<$VertexFormatElement$Type> {
        glType(): number;
        size(): number;
        static values(): $VertexFormatElement$Type[];
        static valueOf(arg0: string): $VertexFormatElement$Type;
        static UBYTE: $VertexFormatElement$Type;
        static FLOAT: $VertexFormatElement$Type;
        static BYTE: $VertexFormatElement$Type;
        static USHORT: $VertexFormatElement$Type;
        static UINT: $VertexFormatElement$Type;
        static INT: $VertexFormatElement$Type;
        static SHORT: $VertexFormatElement$Type;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Type}.
     */
    export type $VertexFormatElement$Type_ = "float" | "ubyte" | "byte" | "ushort" | "short" | "uint" | "int";
    export class $VertexFormatElement$Usage$SetupState {
    }
    export interface $VertexFormatElement$Usage$SetupState {
        setupBufferState(size: number, type: number, stride: number, pointer: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Usage$SetupState}.
     */
    export type $VertexFormatElement$Usage$SetupState_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $VertexFormat implements $VertexFormatExtensions {
        getElements(): $List<$VertexFormatElement>;
        getElementName(element: $VertexFormatElement_): string;
        getOffset(element: $VertexFormatElement_): number;
        static builder(): $VertexFormat$Builder;
        contains(element: $VertexFormatElement_): boolean;
        getVertexSize(): number;
        getOffsetsByElement(): number[];
        getElementsMask(): number;
        setupBufferState(): void;
        clearBufferState(): void;
        getImmediateDrawVertexBuffer(): $VertexBuffer;
        handler$zld000$veil$nameImmediateDrawVertexBuffer(arg0: $CallbackInfoReturnable<any>): void;
        getElementMapping(): $ImmutableMap<string, $VertexFormatElement>;
        hasPosition(): boolean;
        hasNormal(): boolean;
        hasColor(): boolean;
        hasUV(arg0: number): boolean;
        sodium$getGlobalId(): number;
        getElementAttributeNames(): $List<string>;
        static UNKNOWN_ELEMENT: number;
        get elements(): $List<$VertexFormatElement>;
        get vertexSize(): number;
        get offsetsByElement(): number[];
        get elementsMask(): number;
        get immediateDrawVertexBuffer(): $VertexBuffer;
        get elementMapping(): $ImmutableMap<string, $VertexFormatElement>;
        get elementAttributeNames(): $List<string>;
    }
    export class $ByteBufferBuilder$Result implements $AutoCloseable {
        byteBuffer(): $ByteBuffer;
        close(): void;
    }
    export class $MeshData implements $AutoCloseable, $MeshDataAccessor {
        close(): void;
        vertexBuffer(): $ByteBuffer;
        sortQuads(bufferBuilder: $ByteBufferBuilder, sorting: $VertexSorting_): $MeshData$SortState;
        drawState(): $MeshData$DrawState;
        indexBuffer(): $ByteBuffer;
        sodium$setIndexBuffer(arg0: $ByteBufferBuilder$Result): void;
        constructor(vertexBuffer: $ByteBufferBuilder$Result, drawState: $MeshData$DrawState_);
    }
    export class $VertexFormatElement$Usage extends $Enum<$VertexFormatElement$Usage> implements $IExtensibleEnum {
        static getExtensionInfo(): $ExtensionInfo;
        static values(): $VertexFormatElement$Usage[];
        static valueOf(arg0: string): $VertexFormatElement$Usage;
        static POSITION: $VertexFormatElement$Usage;
        static UV: $VertexFormatElement$Usage;
        static GENERIC: $VertexFormatElement$Usage;
        static COLOR: $VertexFormatElement$Usage;
        static NORMAL: $VertexFormatElement$Usage;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Usage}.
     */
    export type $VertexFormatElement$Usage_ = "position" | "normal" | "color" | "uv" | "generic";
    export class $Tesselator {
        clear(): void;
        begin(mode: $VertexFormat$Mode_, format: $VertexFormat): $BufferBuilder;
        static getInstance(): $Tesselator;
        static init(): void;
        constructor();
        constructor(capacity: number);
        static get instance(): $Tesselator;
    }
    export class $MeshData$DrawState extends $Record {
        mode(): $VertexFormat$Mode;
        format(): $VertexFormat;
        indexType(): $VertexFormat$IndexType;
        indexCount(): number;
        vertexCount(): number;
        constructor(arg0: $VertexFormat, arg1: number, arg2: number, arg3: $VertexFormat$Mode_, arg4: $VertexFormat$IndexType_);
    }
    /**
     * Values that may be interpreted as {@link $MeshData$DrawState}.
     */
    export type $MeshData$DrawState_ = { vertexCount?: number, format?: $VertexFormat, indexCount?: number, indexType?: $VertexFormat$IndexType_, mode?: $VertexFormat$Mode_,  } | [vertexCount?: number, format?: $VertexFormat, indexCount?: number, indexType?: $VertexFormat$IndexType_, mode?: $VertexFormat$Mode_, ];
    export class $BufferUploader {
        static draw(meshData: $MeshData): void;
        static invalidate(): void;
        static reset(): void;
        static drawWithShader(meshData: $MeshData): void;
        static lastImmediateBuffer: $VertexBuffer;
        constructor();
    }
    export class $VertexMultiConsumer$Double implements $VertexConsumer, $ETFVertexConsumer, $VertexBufferWriter {
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        setUv(u: number, v: number): $VertexConsumer;
        etf$getETFTexture(): $ETFTexture;
        etf$getProvider(): $URenderTypeToVertexConsumer;
        etf$getRenderLayer(): $RenderType;
        etf$initETFVertexConsumer(provider: $URenderTypeToVertexConsumer, renderLayer: $RenderType): void;
        canUseIntrinsics(): boolean;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
        setColor(packedOverlay: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setLight(packedOverlay: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setOverlay(packedOverlay: number): $VertexConsumer;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        first: $VertexConsumer;
        second: $VertexConsumer;
        constructor(first: $VertexConsumer, second: $VertexConsumer);
        set light(value: number);
        set whiteAlpha(value: number);
        set overlay(value: number);
    }
    export class $SheetedDecalTextureGenerator implements $VertexConsumer, $ETFVertexConsumer, $VertexBufferWriter {
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        etf$getETFTexture(): $ETFTexture;
        etf$getProvider(): $URenderTypeToVertexConsumer;
        etf$getRenderLayer(): $RenderType;
        etf$initETFVertexConsumer(provider: $URenderTypeToVertexConsumer, renderLayer: $RenderType): void;
        canUseIntrinsics(): boolean;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
        setColor(packedOverlay: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setLight(packedOverlay: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dfb000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setOverlay(packedOverlay: number): $VertexConsumer;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        constructor(delegate: $VertexConsumer, pose: $PoseStack$Pose, textureScale: number);
        set light(value: number);
        set whiteAlpha(value: number);
        set overlay(value: number);
    }
    export class $VertexBuffer implements $AutoCloseable, $DebugVertexBufferExt, $VertexBufferExtension, $IVertexBuffer {
        draw(): void;
        isInvalid(): boolean;
        getFormat(): $VertexFormat;
        bind(): void;
        static unbind(): void;
        close(): void;
        drawWithShader(modelViewMatrix: $Matrix4f, projectionMatrix: $Matrix4f, shader: $ShaderInstance): void;
        upload(meshData: $MeshData): void;
        veil$setName(arg0: string): void;
        veil$drawInstanced(arg0: number): void;
        veil$drawIndirect(arg0: number, arg1: number, arg2: number): void;
        veil$getIndexCount(): number;
        drawInstanced(arg0: number): void;
        drawWithShaderInstanced(arg0: $Matrix4f, arg1: $Matrix4f, arg2: $ShaderInstance, arg3: number): void;
        uploadIndexBuffer(result: $ByteBufferBuilder$Result): void;
        handler$zmi000$veil$drawPatches(arg0: $CallbackInfo): void;
        modify$zmi000$veil$modifyDrawMode(arg0: number): number;
        handler$fof004$lodestone$close(arg0: $CallbackInfo): void;
        addAttributeVBO(arg0: number, arg1: $FloatBuffer, arg2: $VertexBuffer$Usage_, arg3: $Consumer_<any>): void;
        indexBufferId: number;
        vertexBufferId: number;
        constructor(usage: $VertexBuffer$Usage_);
        get invalid(): boolean;
        get format(): $VertexFormat;
    }
    export class $VertexBuffer$Usage extends $Enum<$VertexBuffer$Usage> {
        static values(): $VertexBuffer$Usage[];
        static valueOf(arg0: string): $VertexBuffer$Usage;
        id: number;
        static STATIC: $VertexBuffer$Usage;
        static DYNAMIC: $VertexBuffer$Usage;
    }
    /**
     * Values that may be interpreted as {@link $VertexBuffer$Usage}.
     */
    export type $VertexBuffer$Usage_ = "static" | "dynamic";
    export class $PoseStack$Pose {
        normal(): $Matrix3f;
        copy(): $PoseStack$Pose;
        pose(): $Matrix4f;
        transformNormal(x: number, y: number, z: number, destination: $Vector3f): $Vector3f;
        transformNormal(vector: $Vector3f, destination: $Vector3f): $Vector3f;
        trustedNormals: boolean;
        constructor(pose: $Matrix4f, normal: $Matrix3f);
    }
    export class $VertexFormatElement extends $Record {
        usage(): $VertexFormatElement$Usage;
        mask(): number;
        byteSize(): number;
        index(): number;
        type(): $VertexFormatElement$Type;
        count(): number;
        static register(id: number, index: number, type: $VertexFormatElement$Type_, usage: $VertexFormatElement$Usage_, count: number): $VertexFormatElement;
        id(): number;
        static byId(id: number): $VertexFormatElement;
        setupBufferState(stateIndex: number, offset: number, arg2: number): void;
        static elementsFromMask(mask: number): $Stream<$VertexFormatElement>;
        static findNextId(): number;
        static UV2: $VertexFormatElement;
        static POSITION: $VertexFormatElement;
        static UV: $VertexFormatElement;
        static UV1: $VertexFormatElement;
        static MAX_COUNT: number;
        static COLOR: $VertexFormatElement;
        static BY_ID: $VertexFormatElement[];
        static UV0: $VertexFormatElement;
        static NORMAL: $VertexFormatElement;
        constructor(id: number, index: number, type: $VertexFormatElement$Type_, usage: $VertexFormatElement$Usage_, count: number);
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement}.
     */
    export type $VertexFormatElement_ = { id?: number, count?: number, usage?: $VertexFormatElement$Usage_, type?: $VertexFormatElement$Type_, index?: number,  } | [id?: number, count?: number, usage?: $VertexFormatElement$Usage_, type?: $VertexFormatElement$Type_, index?: number, ];
    export class $PoseStack implements $IPoseStackExtension, $PoseStackAccessor, $MatrixStack, $CommonPoseStack, $PoseStackAccessor$1, $PoseStackExtension {
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        rotate(arg0: $Quaterniondc): void;
        rotate(arg0: $Quaternionfc): void;
        isIdentity(): boolean;
        clear(): void;
        scale(x: number, y: number, z: number): void;
        isEmpty(): boolean;
        last(): $PoseStack$Pose;
        pose(): $PoseStack$Pose;
        mulPose(pose: $Matrix4f): void;
        mulPose(quaternion: $Quaternionf): void;
        pushPose(): void;
        translate(x: number, arg1: number, y: number): void;
        translate(x: number, y: number, z: number): void;
        popPose(): void;
        rotateXYZ(x: number, y: number, z: number): void;
        rotateZYX(x: number, y: number, z: number): void;
        rotateAround(arg0: $Quaterniondc, arg1: number, arg2: number, arg3: number): void;
        rotateAround(arg0: $Quaternionfc, arg1: number, arg2: number, arg3: number): void;
        rotateAround(quaternion: $Quaternionf, x: number, y: number, z: number): void;
        applyScale(x: number, y: number, z: number): void;
        setIdentity(): void;
        toPoseStack(): $PoseStack;
        matrixPush(): void;
        matrixPop(): void;
        bosses_rise_java$push(): void;
        bosses_rise_java$pop(): void;
        bosses_rise_java$translate(x: number, y: number, z: number): void;
        bosses_rise_java$translate(x: number, arg1: number, y: number): void;
        bosses_rise_java$scale(x: number, y: number, z: number): void;
        bosses_rise_java$mulPose(quaternion: $Quaternionf): void;
        bosses_rise_java$mulPose(pose: $Matrix4f): void;
        bosses_rise_java$last(): $Matrix4f;
        flywheel$transformStack(): $PoseTransformStack;
        /**
         * Pushes and applies the `transformation` to this pose stack.
         * 
         * The effects of this method can be reversed by a corresponding `PoseStack#popPose()` call.
         */
        pushTransformation(transformation: $Transformation): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        normal(): $Matrix3f;
        position(): $Matrix4f;
        copy(arg0: $PoseStack$Pose): void;
        copy(arg0: $PoseStack): void;
        copy(arg0: $MatrixStack): void;
        translate(arg0: $Vector3fc): void;
        translate(arg0: $Vector3dc): void;
        rotateXYZ(x: number, arg1: number, y: number): void;
        rotateZYX(x: number, arg1: number, y: number): void;
        applyScale(arg0: number): void;
        applyScale(arg0: $Vector3dc): void;
        applyScale(arg0: $Vector3fc): void;
        applyScale(arg0: number): void;
        applyScale(x: number, arg1: number, y: number): void;
        getPoseStack(): $Deque<$PoseStack$Pose>;
        flywheel$getPoseStack(): $Deque<$PoseStack$Pose>;
        poseStack: $Deque<$PoseStack$Pose>;
        constructor();
        get empty(): boolean;
    }
    export class $VertexFormat$Builder {
        padding(padding: number): $VertexFormat$Builder;
        build(): $VertexFormat;
        add(name: string, element: $VertexFormatElement_): $VertexFormat$Builder;
    }
    export class $VertexFormat$IndexType extends $Enum<$VertexFormat$IndexType> {
        static values(): $VertexFormat$IndexType[];
        static valueOf(arg0: string): $VertexFormat$IndexType;
        static least(indexCount: number): $VertexFormat$IndexType;
        bytes: number;
        asGLType: number;
        static INT: $VertexFormat$IndexType;
        static SHORT: $VertexFormat$IndexType;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormat$IndexType}.
     */
    export type $VertexFormat$IndexType_ = "short" | "int";
}
