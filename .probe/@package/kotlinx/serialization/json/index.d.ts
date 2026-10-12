import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $StringFormat, $SerializationStrategy, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $DescriptorSchemaCache } from "@package/kotlinx/serialization/json/internal";

declare module "@package/kotlinx/serialization/json" {
    export class $Json implements $StringFormat {
        getConfiguration(): $JsonConfiguration;
        encodeToJsonElement<T>(arg0: $SerializationStrategy<T>, arg1: T): $JsonElement;
        decodeFromJsonElement<T>(arg0: $DeserializationStrategy<T>, arg1: $JsonElement): T;
        getSerializersModule(): $SerializersModule;
        encodeToString<T>(arg0: $SerializationStrategy<T>, arg1: T): string;
        encodeToString<T>(arg0: T): string;
        get_schemaCache$kotlinx_serialization_json(): $DescriptorSchemaCache;
        parseToJsonElement(arg0: string): $JsonElement;
        decodeFromString<T>(arg0: $DeserializationStrategy<T>, arg1: string): T;
        decodeFromString<T>(arg0: string): T;
        static get_schemaCache$kotlinx_serialization_json$annotations(): void;
        static Default: $Json$Default;
        constructor(arg0: $JsonConfiguration, arg1: $SerializersModule, arg2: $DefaultConstructorMarker);
        get configuration(): $JsonConfiguration;
        get serializersModule(): $SerializersModule;
        get _schemaCache$kotlinx_serialization_json(): $DescriptorSchemaCache;
        static get _schemaCache$kotlinx_serialization_json$annotations(): void;
    }
}
