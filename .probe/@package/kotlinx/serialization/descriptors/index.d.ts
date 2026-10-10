import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Annotation } from "@package/java/lang/annotation";
import { $List } from "@package/java/util";

declare module "@package/kotlinx/serialization/descriptors" {
    export class $SerialDescriptor {
        static access$isNullable$jd(arg0: $SerialDescriptor): boolean;
        static access$isInline$jd(arg0: $SerialDescriptor): boolean;
        static access$getAnnotations$jd(arg0: $SerialDescriptor): $List<any>;
    }
    export interface $SerialDescriptor {
        getElementName(arg0: number): string;
        getElementDescriptor(arg0: number): $SerialDescriptor;
        getAnnotations(): $List<$Annotation>;
        getKind(): $SerialKind;
        isInline(): boolean;
        getSerialName(): string;
        getElementsCount(): number;
        isElementOptional(arg0: number): boolean;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        getElementIndex(arg0: string): number;
        isNullable(): boolean;
        get annotations(): $List<$Annotation>;
        get kind(): $SerialKind;
        get inline(): boolean;
        get serialName(): string;
        get elementsCount(): number;
        get nullable(): boolean;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
