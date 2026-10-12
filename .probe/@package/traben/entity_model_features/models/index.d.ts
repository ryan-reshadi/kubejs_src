import { $Consumer_ } from "@package/java/util/function";
import { $Comparable } from "@package/java/lang";
import { $EMFModelPartRoot } from "@package/traben/entity_model_features/models/parts";
export * as animation from "@package/traben/entity_model_features/models/animation";
export * as parts from "@package/traben/entity_model_features/models/parts";
export * as jem_objects from "@package/traben/entity_model_features/models/jem_objects";

declare module "@package/traben/entity_model_features/models" {
    export class $IEMFModelNameContainer {
    }
    export interface $IEMFModelNameContainer {
        emf$insertKnownMappings(arg0: $EMFModel_ID): void;
    }
    /**
     * Values that may be interpreted as {@link $IEMFModelNameContainer}.
     */
    export type $IEMFModelNameContainer_ = ((arg0: $EMFModel_ID) => void);
    export class $IEMFModel {
    }
    export interface $IEMFModel {
        emf$getEMFRootModel(): $EMFModelPartRoot;
        emf$isEMFModel(): boolean;
    }
    export class $EMFModel_ID implements $Comparable<$EMFModel_ID> {
        compareTo(o: $EMFModel_ID): number;
        setMapIdAndAddFallbackModel(both: string): $EMFModel_ID;
        setMapIdAndAddFallbackModel(mapId: string, fileName: string): $EMFModel_ID;
        finishAndPrepAutomatedFallbacks(): void;
        getNamespace(): string;
        hasFallbackModels(): boolean;
        areBothSame(): boolean;
        pushNewMainModelAndMapIdAddingOldAsFallback(both: string): $EMFModel_ID;
        pushNewMainModelAndMapIdAddingOldAsFallback(fileName: string, mapId: string): $EMFModel_ID;
        setFileName(fileName: string): $EMFModel_ID;
        addFallbackModel(namespace: string, fileName: string): $EMFModel_ID;
        addFallbackModel(fileName: string): $EMFModel_ID;
        addFallbackModel(namespace: string, fileName: string, first: boolean): $EMFModel_ID;
        resetCacheID(): $EMFModel_ID;
        setBoth(both: string): $EMFModel_ID;
        setBoth(fileName: string, mapId: string): $EMFModel_ID;
        getMapId(): string;
        getCacheID(): string;
        forEachFallback(action: $Consumer_<$EMFModel_ID>): void;
        getfileName(): string;
        getNextFallbackModel(count: number): $EMFModel_ID;
        getDisplayFileName(): string;
        pushNewMainModelAddingOldAsFallback(fileName: string): $EMFModel_ID;
        setCacheID(cacheID: string): $EMFModel_ID;
        namespace: string;
        constructor(both: string);
        constructor(fileName: string, mapId: string);
        get mapId(): string;
        get displayFileName(): string;
    }
}
