import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Annotation } from "@package/java/lang/annotation";
import { $List } from "@package/java/util";

declare module "@package/kotlinx/serialization/descriptors" {
    export class $SerialDescriptor {
        static access$isInline$jd(arg0: $SerialDescriptor): boolean;
        static access$isNullable$jd(arg0: $SerialDescriptor): boolean;
        static access$getAnnotations$jd(arg0: $SerialDescriptor): $List<any>;
    }
    export interface $SerialDescriptor {
        getAnnotations(): $List<$Annotation>;
        isNullable(): boolean;
        getElementName(arg0: number): string;
        isInline(): boolean;
        getElementDescriptor(arg0: number): $SerialDescriptor;
        getKind(): $SerialKind;
        getSerialName(): string;
        getElementsCount(): number;
        isElementOptional(arg0: number): boolean;
        getElementIndex(arg0: string): number;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        get annotations(): $List<$Annotation>;
        get nullable(): boolean;
        get inline(): boolean;
        get kind(): $SerialKind;
        get serialName(): string;
        get elementsCount(): number;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
