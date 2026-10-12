import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $SerializationStrategy, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Object } from "@package/java/lang";

declare module "@package/kotlinx/serialization/encoding" {
    export class $CompositeEncoder {
        static access$shouldEncodeElementDefault$jd(arg0: $CompositeEncoder, arg1: $SerialDescriptor, arg2: number): boolean;
    }
    export interface $CompositeEncoder {
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        getSerializersModule(): $SerializersModule;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeNullableSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        endStructure(arg0: $SerialDescriptor): void;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Encoder {
        static access$encodeNotNullMark$jd(arg0: $Encoder): void;
        static access$encodeSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$beginCollection$jd(arg0: $Encoder, arg1: $SerialDescriptor, arg2: number): $CompositeEncoder;
        static access$encodeNullableSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
    }
    export interface $Encoder {
        encodeNull(): void;
        encodeByte(arg0: number): void;
        encodeChar(arg0: string): void;
        encodeLong(arg0: number): void;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeInt(arg0: number): void;
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        getSerializersModule(): $SerializersModule;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        encodeString(arg0: string): void;
        encodeBoolean(arg0: boolean): void;
        encodeDouble(arg0: number): void;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        encodeNotNullMark(): void;
        encodeFloat(arg0: number): void;
        encodeShort(arg0: number): void;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
        get serializersModule(): $SerializersModule;
    }
    export class $Decoder {
        static access$decodeSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
        static access$decodeNullableSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
    }
    export interface $Decoder {
        decodeByte(): number;
        decodeInt(): number;
        decodeNull(): void;
        decodeChar(): string;
        decodeEnum(arg0: $SerialDescriptor): number;
        decodeLong(): number;
        decodeString(): string;
        getSerializersModule(): $SerializersModule;
        decodeSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        beginStructure(arg0: $SerialDescriptor): $CompositeDecoder;
        decodeNotNullMark(): boolean;
        decodeBoolean(): boolean;
        decodeDouble(): number;
        decodeFloat(): number;
        decodeInline(arg0: $SerialDescriptor): $Decoder;
        decodeShort(): number;
        decodeNullableSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        get serializersModule(): $SerializersModule;
    }
}
