import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $SerializationStrategy, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Object } from "@package/java/lang";

declare module "@package/kotlinx/serialization/encoding" {
    export class $CompositeEncoder {
        static access$shouldEncodeElementDefault$jd(arg0: $CompositeEncoder, arg1: $SerialDescriptor, arg2: number): boolean;
    }
    export interface $CompositeEncoder {
        getSerializersModule(): $SerializersModule;
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeNullableSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        endStructure(arg0: $SerialDescriptor): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Encoder {
        static access$encodeNotNullMark$jd(arg0: $Encoder): void;
        static access$beginCollection$jd(arg0: $Encoder, arg1: $SerialDescriptor, arg2: number): $CompositeEncoder;
        static access$encodeSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$encodeNullableSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
    }
    export interface $Encoder {
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        getSerializersModule(): $SerializersModule;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        encodeNull(): void;
        encodeByte(arg0: number): void;
        encodeShort(arg0: number): void;
        encodeInt(arg0: number): void;
        encodeLong(arg0: number): void;
        encodeFloat(arg0: number): void;
        encodeDouble(arg0: number): void;
        encodeChar(arg0: string): void;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeNotNullMark(): void;
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeString(arg0: string): void;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        encodeBoolean(arg0: boolean): void;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
        get serializersModule(): $SerializersModule;
    }
    export class $Decoder {
        static access$decodeSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
        static access$decodeNullableSerializableValue$jd(arg0: $Decoder, arg1: $DeserializationStrategy<any>): $Object;
    }
    export interface $Decoder {
        getSerializersModule(): $SerializersModule;
        decodeString(): string;
        decodeSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        beginStructure(arg0: $SerialDescriptor): $CompositeDecoder;
        decodeNotNullMark(): boolean;
        decodeNull(): void;
        decodeBoolean(): boolean;
        decodeByte(): number;
        decodeShort(): number;
        decodeInt(): number;
        decodeLong(): number;
        decodeFloat(): number;
        decodeDouble(): number;
        decodeChar(): string;
        decodeInline(arg0: $SerialDescriptor): $Decoder;
        decodeEnum(arg0: $SerialDescriptor): number;
        decodeNullableSerializableValue<T>(arg0: $DeserializationStrategy<T>): T;
        get serializersModule(): $SerializersModule;
    }
}
