import { $WolfModel } from "@package/net/minecraft/client/model";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $Map_, $Map } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $EMFModelPartRoot } from "@package/traben/entity_model_features/models/parts";
import { $Wolf } from "@package/net/minecraft/world/entity/animal";

declare module "@package/traben/entity_model_features/utils" {
    export class $IEMFTextureSizeSupplier {
    }
    export interface $IEMFTextureSizeSupplier {
        emf$getTextureSize(): number[];
        emf$setTextureSize(arg0: number[]): void;
    }
    export class $IEMFCustomModelHolder {
    }
    export interface $IEMFCustomModelHolder {
        emf$hasModel(): boolean;
        emf$getModel(): $EMFModelPartRoot;
        emf$setModel(arg0: $EMFModelPartRoot): void;
    }
    export class $EMFEntity {
    }
    export interface $EMFEntity extends $ETFEntity {
        emf$prevY(): number;
        emf$getYaw(): number;
        emf$prevZ(): number;
        emf$getZ(): number;
        emf$prevX(): number;
        emf$age(): number;
        emf$getY(): number;
        emf$isWet(): boolean;
        emf$getX(): number;
        emf$getTypeString(): string;
        emf$getVariableMap(): $Map<string, number>;
        emf$isInLava(): boolean;
        emf$isInvisible(): boolean;
        emf$isAlive(): boolean;
        emf$prevPitch(): number;
        emf$isSprinting(): boolean;
        emf$isOnGround(): boolean;
        emf$hasVehicle(): boolean;
        emf$isOnFire(): boolean;
        emf$getPitch(): number;
        emf$isGlowing(): boolean;
        emf$isSneaking(): boolean;
        emf$hasPassengers(): boolean;
        emf$getVelocity(): $Vec3;
        emf$isTouchingWater(): boolean;
    }
    export class $IEMFUnmodifiedLayerRootGetter {
    }
    export interface $IEMFUnmodifiedLayerRootGetter {
        emf$getUnmodifiedRoots(): $Map<$ModelLayerLocation, $LayerDefinition>;
    }
    /**
     * Values that may be interpreted as {@link $IEMFUnmodifiedLayerRootGetter}.
     */
    export type $IEMFUnmodifiedLayerRootGetter_ = (() => $Map_<$ModelLayerLocation, $LayerDefinition>);
    export class $IEMFWolfCollarHolder<T extends $Wolf> {
    }
    export interface $IEMFWolfCollarHolder<T extends $Wolf> {
        emf$setCollarModel(arg0: $WolfModel<T>): void;
        emf$hasCollarModel(): boolean;
        emf$getCollarModel(): $WolfModel<T>;
    }
    export class $EMFDirectoryHandler {
        static basic(filename: string): $EMFDirectoryHandler;
        validForThisBase(propertiesOrSecond: $EMFDirectoryHandler): boolean;
        getFinalFileLocation(): string;
        packIndex(): number;
        getRelativeDirectoryLocationNoValidation(fileName: string): string;
        getRelativeFilePossiblyEMFOverridden(jpmOrVariantFileNameWithSuffixAndFileType: string): $ResourceLocation;
        getFileNameWithType(): string;
        static getDirectoryManagerOrNull(printing: boolean, namespace: string, modelFileName: string, suffixAndFileType: string): $EMFDirectoryHandler;
        rawFileName: string;
        namespace: string;
        isSubFolder: boolean;
        get finalFileLocation(): string;
        get fileNameWithType(): string;
    }
    export class $IEMFCuboidDataSupplier {
    }
    export interface $IEMFCuboidDataSupplier {
        emf$getSizeAdd(): number[];
        emf$getTextureUV(): number[];
        emf$getMirror(): boolean;
        emf$getTextureXY(): number[];
    }
}
