import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/dev/obscuria/aquamirae/common/region/noise" {
    export class $FastNoiseLite$Vector2 {
        x: number;
        y: number;
        constructor(arg0: number, arg1: number);
    }
    export class $FastNoiseLite$Vector3 {
        x: number;
        y: number;
        z: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $PackedNoise$CellularDistanceFunction extends $Enum<$PackedNoise$CellularDistanceFunction> implements $PackedNoise$NoiseEnum {
        static values(): $PackedNoise$CellularDistanceFunction[];
        static valueOf(arg0: string): $PackedNoise$CellularDistanceFunction;
        getRemappedEnumConstantName(): string;
        static EuclideanSq: $PackedNoise$CellularDistanceFunction;
        static Euclidean: $PackedNoise$CellularDistanceFunction;
        static Hybrid: $PackedNoise$CellularDistanceFunction;
        static Manhattan: $PackedNoise$CellularDistanceFunction;
        type: $FastNoiseLite$CellularDistanceFunction;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackedNoise$CellularDistanceFunction}.
     */
    export type $PackedNoise$CellularDistanceFunction_ = "euclidean" | "euclideansq" | "manhattan" | "hybrid";
    export class $PackedNoise extends $Record {
        instance(): $FastNoiseLite;
        template(): $PackedNoise$NoiseTemplate;
        sample(arg0: number, arg1: number, arg2: number): number;
        sample(arg0: number, arg1: number): number;
        static CODEC: $Codec<$Holder<$PackedNoise>>;
        static DIRECT_CODEC: $Codec<$PackedNoise>;
        constructor(arg0: $PackedNoise$NoiseTemplate_);
        constructor(template: $PackedNoise$NoiseTemplate_, instance: $FastNoiseLite);
    }
    /**
     * Values that may be interpreted as {@link $PackedNoise}.
     */
    export type $PackedNoise_ = RegistryTypes.AquamiraeNoise | { instance?: $FastNoiseLite, template?: $PackedNoise$NoiseTemplate_,  } | [instance?: $FastNoiseLite, template?: $PackedNoise$NoiseTemplate_, ];
    export class $PackedNoise$RotationType3D extends $Enum<$PackedNoise$RotationType3D> implements $PackedNoise$NoiseEnum {
        static values(): $PackedNoise$RotationType3D[];
        static valueOf(arg0: string): $PackedNoise$RotationType3D;
        getRemappedEnumConstantName(): string;
        static ImproveXYPlanes: $PackedNoise$RotationType3D;
        static ImproveXZPlanes: $PackedNoise$RotationType3D;
        type: $FastNoiseLite$RotationType3D;
        static None: $PackedNoise$RotationType3D;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackedNoise$RotationType3D}.
     */
    export type $PackedNoise$RotationType3D_ = "none" | "improvexyplanes" | "improvexzplanes";
    export class $PackedNoise$NoiseTemplate extends $Record {
        frequency(): number;
        instantiate(): $FastNoiseLite;
        noiseType(): $PackedNoise$NoiseType;
        cellularDistanceFunction(): $PackedNoise$CellularDistanceFunction;
        domainWarpType(): $PackedNoise$DomainWarpType;
        cellularReturnType(): $PackedNoise$CellularReturnType;
        fractalType(): $PackedNoise$FractalType;
        rotationType3D(): $PackedNoise$RotationType3D;
        cellularJitter(): number;
        fractalOctaves(): number;
        fractalLacunarity(): number;
        fractalGain(): number;
        fractalWeightedStrength(): number;
        fractalPingPongStrength(): number;
        domainWarpAmplitude(): number;
        static CODEC: $Codec<$PackedNoise$NoiseTemplate>;
        constructor(frequency: number, noiseType: $PackedNoise$NoiseType_, rotationType3D: $PackedNoise$RotationType3D_, fractalType: $PackedNoise$FractalType_, fractalOctaves: number, fractalLacunarity: number, fractalGain: number, fractalWeightedStrength: number, fractalPingPongStrength: number, cellularDistanceFunction: $PackedNoise$CellularDistanceFunction_, cellularReturnType: $PackedNoise$CellularReturnType_, cellularJitter: number, domainWarpType: $PackedNoise$DomainWarpType_, domainWarpAmplitude: number);
    }
    /**
     * Values that may be interpreted as {@link $PackedNoise$NoiseTemplate}.
     */
    export type $PackedNoise$NoiseTemplate_ = { fractalType?: $PackedNoise$FractalType_, cellularDistanceFunction?: $PackedNoise$CellularDistanceFunction_, fractalWeightedStrength?: number, domainWarpType?: $PackedNoise$DomainWarpType_, fractalLacunarity?: number, frequency?: number, noiseType?: $PackedNoise$NoiseType_, fractalGain?: number, fractalOctaves?: number, fractalPingPongStrength?: number, cellularReturnType?: $PackedNoise$CellularReturnType_, domainWarpAmplitude?: number, rotationType3D?: $PackedNoise$RotationType3D_, cellularJitter?: number,  } | [fractalType?: $PackedNoise$FractalType_, cellularDistanceFunction?: $PackedNoise$CellularDistanceFunction_, fractalWeightedStrength?: number, domainWarpType?: $PackedNoise$DomainWarpType_, fractalLacunarity?: number, frequency?: number, noiseType?: $PackedNoise$NoiseType_, fractalGain?: number, fractalOctaves?: number, fractalPingPongStrength?: number, cellularReturnType?: $PackedNoise$CellularReturnType_, domainWarpAmplitude?: number, rotationType3D?: $PackedNoise$RotationType3D_, cellularJitter?: number, ];
    export class $FastNoiseLite$FractalType extends $Enum<$FastNoiseLite$FractalType> {
        static values(): $FastNoiseLite$FractalType[];
        static valueOf(arg0: string): $FastNoiseLite$FractalType;
        static FBm: $FastNoiseLite$FractalType;
        static DomainWarpIndependent: $FastNoiseLite$FractalType;
        static PingPong: $FastNoiseLite$FractalType;
        static None: $FastNoiseLite$FractalType;
        static Ridged: $FastNoiseLite$FractalType;
        static DomainWarpProgressive: $FastNoiseLite$FractalType;
    }
    /**
     * Values that may be interpreted as {@link $FastNoiseLite$FractalType}.
     */
    export type $FastNoiseLite$FractalType_ = "none" | "fbm" | "ridged" | "pingpong" | "domainwarpprogressive" | "domainwarpindependent";
    export interface $PackedNoise extends RegistryMarked<RegistryTypes.AquamiraeNoiseTag, RegistryTypes.AquamiraeNoise> {}
    export class $PackedNoise$NoiseType extends $Enum<$PackedNoise$NoiseType> implements $PackedNoise$NoiseEnum {
        static values(): $PackedNoise$NoiseType[];
        static valueOf(arg0: string): $PackedNoise$NoiseType;
        getRemappedEnumConstantName(): string;
        static Cellular: $PackedNoise$NoiseType;
        static OpenSimplex2: $PackedNoise$NoiseType;
        static Value: $PackedNoise$NoiseType;
        static ValueCubic: $PackedNoise$NoiseType;
        static Perlin: $PackedNoise$NoiseType;
        type: $FastNoiseLite$NoiseType;
        static OpenSimplex2S: $PackedNoise$NoiseType;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackedNoise$NoiseType}.
     */
    export type $PackedNoise$NoiseType_ = "opensimplex2" | "opensimplex2s" | "cellular" | "perlin" | "valuecubic" | "value";
    export class $FastNoiseLite {
        SetFractalType(arg0: $FastNoiseLite$FractalType_): void;
        SetFrequency(arg0: number): void;
        SetSeed(arg0: number): void;
        GetNoise(arg0: number, arg1: number): number;
        GetNoise(arg0: number, arg1: number, arg2: number): number;
        SetCellularDistanceFunction(arg0: $FastNoiseLite$CellularDistanceFunction_): void;
        SetCellularReturnType(arg0: $FastNoiseLite$CellularReturnType_): void;
        SetFractalLacunarity(arg0: number): void;
        SetFractalPingPongStrength(arg0: number): void;
        SetFractalWeightedStrength(arg0: number): void;
        DomainWarp(arg0: $FastNoiseLite$Vector3): void;
        DomainWarp(arg0: $FastNoiseLite$Vector2): void;
        SetDomainWarpType(arg0: $FastNoiseLite$DomainWarpType_): void;
        SetFractalOctaves(arg0: number): void;
        SetDomainWarpAmp(arg0: number): void;
        SetNoiseType(arg0: $FastNoiseLite$NoiseType_): void;
        SetRotationType3D(arg0: $FastNoiseLite$RotationType3D_): void;
        SetFractalGain(arg0: number): void;
        SetCellularJitter(arg0: number): void;
        constructor();
        constructor(arg0: number);
    }
    export class $PackedNoise$NoiseEnum {
    }
    export interface $PackedNoise$NoiseEnum extends $StringRepresentable {
    }
    export class $FastNoiseLite$DomainWarpType extends $Enum<$FastNoiseLite$DomainWarpType> {
        static values(): $FastNoiseLite$DomainWarpType[];
        static valueOf(arg0: string): $FastNoiseLite$DomainWarpType;
        static BasicGrid: $FastNoiseLite$DomainWarpType;
        static OpenSimplex2Reduced: $FastNoiseLite$DomainWarpType;
        static OpenSimplex2: $FastNoiseLite$DomainWarpType;
    }
    /**
     * Values that may be interpreted as {@link $FastNoiseLite$DomainWarpType}.
     */
    export type $FastNoiseLite$DomainWarpType_ = "opensimplex2" | "opensimplex2reduced" | "basicgrid";
    export class $PackedNoise$DomainWarpType extends $Enum<$PackedNoise$DomainWarpType> implements $PackedNoise$NoiseEnum {
        static values(): $PackedNoise$DomainWarpType[];
        static valueOf(arg0: string): $PackedNoise$DomainWarpType;
        getRemappedEnumConstantName(): string;
        static BasicGrid: $PackedNoise$DomainWarpType;
        static OpenSimplex2Reduced: $PackedNoise$DomainWarpType;
        static OpenSimplex2: $PackedNoise$DomainWarpType;
        type: $FastNoiseLite$DomainWarpType;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackedNoise$DomainWarpType}.
     */
    export type $PackedNoise$DomainWarpType_ = "opensimplex2" | "opensimplex2reduced" | "basicgrid";
    export class $FastNoiseLite$CellularDistanceFunction extends $Enum<$FastNoiseLite$CellularDistanceFunction> {
        static values(): $FastNoiseLite$CellularDistanceFunction[];
        static valueOf(arg0: string): $FastNoiseLite$CellularDistanceFunction;
        static EuclideanSq: $FastNoiseLite$CellularDistanceFunction;
        static Euclidean: $FastNoiseLite$CellularDistanceFunction;
        static Hybrid: $FastNoiseLite$CellularDistanceFunction;
        static Manhattan: $FastNoiseLite$CellularDistanceFunction;
    }
    /**
     * Values that may be interpreted as {@link $FastNoiseLite$CellularDistanceFunction}.
     */
    export type $FastNoiseLite$CellularDistanceFunction_ = "euclidean" | "euclideansq" | "manhattan" | "hybrid";
    export class $PackedNoise$CellularReturnType extends $Enum<$PackedNoise$CellularReturnType> implements $PackedNoise$NoiseEnum {
        static values(): $PackedNoise$CellularReturnType[];
        static valueOf(arg0: string): $PackedNoise$CellularReturnType;
        getRemappedEnumConstantName(): string;
        static Distance2Sub: $PackedNoise$CellularReturnType;
        static Distance2Mul: $PackedNoise$CellularReturnType;
        static Distance2Add: $PackedNoise$CellularReturnType;
        static Distance2Div: $PackedNoise$CellularReturnType;
        static CellValue: $PackedNoise$CellularReturnType;
        type: $FastNoiseLite$CellularReturnType;
        static Distance: $PackedNoise$CellularReturnType;
        static Distance2: $PackedNoise$CellularReturnType;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackedNoise$CellularReturnType}.
     */
    export type $PackedNoise$CellularReturnType_ = "cellvalue" | "distance" | "distance2" | "distance2add" | "distance2sub" | "distance2mul" | "distance2div";
    export class $FastNoiseLite$NoiseType extends $Enum<$FastNoiseLite$NoiseType> {
        static values(): $FastNoiseLite$NoiseType[];
        static valueOf(arg0: string): $FastNoiseLite$NoiseType;
        static Cellular: $FastNoiseLite$NoiseType;
        static OpenSimplex2: $FastNoiseLite$NoiseType;
        static Value: $FastNoiseLite$NoiseType;
        static ValueCubic: $FastNoiseLite$NoiseType;
        static Perlin: $FastNoiseLite$NoiseType;
        static OpenSimplex2S: $FastNoiseLite$NoiseType;
    }
    /**
     * Values that may be interpreted as {@link $FastNoiseLite$NoiseType}.
     */
    export type $FastNoiseLite$NoiseType_ = "opensimplex2" | "opensimplex2s" | "cellular" | "perlin" | "valuecubic" | "value";
    export class $PackedNoise$FractalType extends $Enum<$PackedNoise$FractalType> implements $PackedNoise$NoiseEnum {
        static values(): $PackedNoise$FractalType[];
        static valueOf(arg0: string): $PackedNoise$FractalType;
        getRemappedEnumConstantName(): string;
        static FBm: $PackedNoise$FractalType;
        static DomainWarpIndependent: $PackedNoise$FractalType;
        static PingPong: $PackedNoise$FractalType;
        type: $FastNoiseLite$FractalType;
        static None: $PackedNoise$FractalType;
        static Ridged: $PackedNoise$FractalType;
        static DomainWarpProgressive: $PackedNoise$FractalType;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackedNoise$FractalType}.
     */
    export type $PackedNoise$FractalType_ = "none" | "fbm" | "ridged" | "pingpong" | "domainwarpprogressive" | "domainwarpindependent";
    export class $FastNoiseLite$CellularReturnType extends $Enum<$FastNoiseLite$CellularReturnType> {
        static values(): $FastNoiseLite$CellularReturnType[];
        static valueOf(arg0: string): $FastNoiseLite$CellularReturnType;
        static Distance2Sub: $FastNoiseLite$CellularReturnType;
        static Distance2Mul: $FastNoiseLite$CellularReturnType;
        static Distance2Add: $FastNoiseLite$CellularReturnType;
        static Distance2Div: $FastNoiseLite$CellularReturnType;
        static CellValue: $FastNoiseLite$CellularReturnType;
        static Distance: $FastNoiseLite$CellularReturnType;
        static Distance2: $FastNoiseLite$CellularReturnType;
    }
    /**
     * Values that may be interpreted as {@link $FastNoiseLite$CellularReturnType}.
     */
    export type $FastNoiseLite$CellularReturnType_ = "cellvalue" | "distance" | "distance2" | "distance2add" | "distance2sub" | "distance2mul" | "distance2div";
    export class $FastNoiseLite$RotationType3D extends $Enum<$FastNoiseLite$RotationType3D> {
        static values(): $FastNoiseLite$RotationType3D[];
        static valueOf(arg0: string): $FastNoiseLite$RotationType3D;
        static ImproveXYPlanes: $FastNoiseLite$RotationType3D;
        static ImproveXZPlanes: $FastNoiseLite$RotationType3D;
        static None: $FastNoiseLite$RotationType3D;
    }
    /**
     * Values that may be interpreted as {@link $FastNoiseLite$RotationType3D}.
     */
    export type $FastNoiseLite$RotationType3D_ = "none" | "improvexyplanes" | "improvexzplanes";
}
