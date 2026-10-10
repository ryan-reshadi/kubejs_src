import { $InputStream } from "@package/java/io";
import { $GlslPreprocessor } from "@package/com/mojang/blaze3d/preprocessor";
import { $Enum } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $Shader } from "@package/com/mojang/blaze3d/shaders";

declare module "@package/team/lodestar/lodestone/systems/rendering/shader" {
    export class $LodestoneProgram$Type extends $Enum<$LodestoneProgram$Type> {
        getExtension(): string;
        getName(): string;
        static values(): $LodestoneProgram$Type[];
        static valueOf(arg0: string): $LodestoneProgram$Type;
        getPrograms(): $Map<string, $LodestoneProgram>;
        static VERTEX: $LodestoneProgram$Type;
        static FRAGMENT: $LodestoneProgram$Type;
        static GEOMETRY: $LodestoneProgram$Type;
        get extension(): string;
        get programs(): $Map<string, $LodestoneProgram>;
    }
    /**
     * Values that may be interpreted as {@link $LodestoneProgram$Type}.
     */
    export type $LodestoneProgram$Type_ = "vertex" | "fragment" | "geometry";
    export class $IShaderInstance {
    }
    export interface $IShaderInstance {
        getGeometryProgram(): $LodestoneProgram;
        get geometryProgram(): $LodestoneProgram;
    }
    /**
     * Values that may be interpreted as {@link $IShaderInstance}.
     */
    export type $IShaderInstance_ = (() => $LodestoneProgram);
    export class $LodestoneProgram {
        getName(): string;
        close(): void;
        static compileShader(arg0: $LodestoneProgram$Type_, arg1: string, arg2: $InputStream, arg3: string, arg4: $GlslPreprocessor): $LodestoneProgram;
        attachToShader(arg0: $Shader): void;
        get name(): string;
    }
}
