import { $InputStream } from "@package/java/io";
import { $ProgramExtension } from "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/fancy";
import { $GlslPreprocessor } from "@package/com/mojang/blaze3d/preprocessor";
import { $Map } from "@package/java/util";
import { $AutoCloseable, $CharSequence, $Enum } from "@package/java/lang";
import { $FloatBuffer, $IntBuffer } from "@package/java/nio";
import { $ShaderRecompileProgramAccessor } from "@package/foundry/veil/mixin/shader_recompile/accessor";
import { $Matrix4f, $Vector4f, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/shaders" {
    export class $EffectProgram extends $Program {
        static compileShader(type: $Program$Type_, name: string, shaderData: $InputStream, sourceName: string): $EffectProgram;
        attachToEffect(effect: $Effect): void;
    }
    export class $Uniform extends $AbstractUniform implements $AutoCloseable {
        static glGetUniformLocation(program: number, name: $CharSequence): number;
        static glBindAttribLocation(program: number, index: number, name: $CharSequence): void;
        static glGetAttribLocation(program: number, name: $CharSequence): number;
        getIntBuffer(): $IntBuffer;
        getFloatBuffer(): $FloatBuffer;
        setLocation(x: number): void;
        getName(): string;
        getLocation(): number;
        set(index: number, value: number): void;
        getCount(): number;
        close(): void;
        getType(): number;
        upload(): void;
        static uploadInteger(x: number, y: number): void;
        static getTypeFromString(typeName: string): number;
        static UT_INT4: number;
        static UT_INT3: number;
        static UT_MAT4: number;
        static UT_FLOAT2: number;
        static UT_MAT3: number;
        static UT_FLOAT3: number;
        static UT_MAT2: number;
        static UT_INT2: number;
        static UT_INT1: number;
        static UT_FLOAT1: number;
        static UT_FLOAT4: number;
        constructor(name: string, type: number, count: number, parent: $Shader);
        get intBuffer(): $IntBuffer;
        get floatBuffer(): $FloatBuffer;
        get name(): string;
        get count(): number;
        get type(): number;
    }
    export class $FogShape extends $Enum<$FogShape> {
        getIndex(): number;
        static values(): $FogShape[];
        static valueOf(arg0: string): $FogShape;
        static CYLINDER: $FogShape;
        static SPHERE: $FogShape;
        get index(): number;
    }
    /**
     * Values that may be interpreted as {@link $FogShape}.
     */
    export type $FogShape_ = "sphere" | "cylinder";
    export class $ProgramManager {
        static glUseProgram(program: number): void;
        static createProgram(): number;
        static linkShader(shader: $Shader): void;
        static releaseProgram(shader: $Shader): void;
        constructor();
    }
    export class $AbstractUniform {
        setSafe(x: number, y: number, z: number, w: number): void;
        setSafe(x: number, y: number, z: number, w: number): void;
        set(matrix: $Matrix3f): void;
        set(valueArray: number[]): void;
        set(x: number, y: number, z: number, w: number): void;
        set(x: number, y: number, z: number): void;
        set(matrix: $Matrix4f): void;
        set(vector: $Vector3f): void;
        set(vector: $Vector4f): void;
        set(x: number, y: number): void;
        set(x: number): void;
        set(x: number, y: number, z: number): void;
        set(x: number, y: number): void;
        set(x: number): void;
        set(x: number, y: number, z: number, w: number): void;
        setMat2x2(x: number, y: number, z: number, w: number): void;
        setMat2x3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number): void;
        setMat2x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number): void;
        setMat3x2(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number): void;
        setMat3x3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void;
        setMat3x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number): void;
        setMat4x2(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number): void;
        setMat4x3(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number): void;
        setMat4x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): void;
        constructor();
    }
    export class $Effect {
    }
    export interface $Effect extends $Shader {
    }
    export class $Program$Type extends $Enum<$Program$Type> {
        getExtension(): string;
        getName(): string;
        static values(): $Program$Type[];
        static valueOf(arg0: string): $Program$Type;
        getPrograms(): $Map<string, $Program>;
        static VERTEX: $Program$Type;
        static FRAGMENT: $Program$Type;
        get extension(): string;
        get programs(): $Map<string, $Program>;
    }
    /**
     * Values that may be interpreted as {@link $Program$Type}.
     */
    export type $Program$Type_ = "vertex" | "fragment";
    export class $Program implements $ShaderRecompileProgramAccessor, $ProgramExtension {
        getName(): string;
        close(): void;
        static compileShader(type: $Program$Type_, name: string, shaderData: $InputStream, sourceName: string, preprocessor: $GlslPreprocessor): $Program;
        attachToShader(shader: $Shader): void;
        sable$getSource(): string;
        setId(arg0: number): void;
        getId(): number;
        constructor(type: $Program$Type_, id: number, name: string);
        get name(): string;
    }
    export class $Shader {
    }
    export interface $Shader {
        getId(): number;
        markDirty(): void;
        getVertexProgram(): $Program;
        getFragmentProgram(): $Program;
        attachToProgram(): void;
        get id(): number;
        get vertexProgram(): $Program;
        get fragmentProgram(): $Program;
    }
    export class $BlendMode {
        isOpaque(): boolean;
        apply(): void;
        static stringToBlendFunc(factorName: string): number;
        static stringToBlendFactor(factorName: string): number;
        constructor(srcColorFactor: number, dstColorFactor: number, srcAlphaFactor: number, dstAlphaFactor: number, blendFunc: number);
        constructor(srcFactor: number, dstFactor: number, blendFunc: number);
        constructor();
        get opaque(): boolean;
    }
}
