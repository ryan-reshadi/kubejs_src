import { $Annotation } from "@package/java/lang/annotation";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $List_, $Map_, $List } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $Event extends $Event$1 {
    }
    export class $AnnotationElement {
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        hasValue(arg0: string): boolean;
        getValues(): $List<$Object>;
        getAnnotationElements(): $List<$AnnotationElement>;
        getValueDescriptors(): $List<$ValueDescriptor>;
        getTypeId(): number;
        constructor(arg0: $Class<$Annotation>);
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        get typeName(): string;
        get values(): $List<$Object>;
        get annotationElements(): $List<$AnnotationElement>;
        get valueDescriptors(): $List<$ValueDescriptor>;
        get typeId(): number;
    }
    export class $ValueDescriptor {
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getLabel(): string;
        getContentType(): string;
        getDescription(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getTypeId(): number;
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
        constructor(arg0: $Class<never>, arg1: string);
        get name(): string;
        get array(): boolean;
        get typeName(): string;
        get fields(): $List<$ValueDescriptor>;
        get label(): string;
        get contentType(): string;
        get description(): string;
        get annotationElements(): $List<$AnnotationElement>;
        get typeId(): number;
    }
    export class $EventType {
        getName(): string;
        isEnabled(): boolean;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getId(): number;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getLabel(): string;
        getCategoryNames(): $List<string>;
        getDescription(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        static getEventType(arg0: $Class<$Event>): $EventType;
        get name(): string;
        get enabled(): boolean;
        get fields(): $List<$ValueDescriptor>;
        get id(): number;
        get settingDescriptors(): $List<$SettingDescriptor>;
        get label(): string;
        get categoryNames(): $List<string>;
        get description(): string;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $SettingDescriptor {
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getDefaultValue(): string;
        getLabel(): string;
        getContentType(): string;
        getDescription(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getTypeId(): number;
        get name(): string;
        get typeName(): string;
        get defaultValue(): string;
        get label(): string;
        get contentType(): string;
        get description(): string;
        get annotationElements(): $List<$AnnotationElement>;
        get typeId(): number;
    }
}
