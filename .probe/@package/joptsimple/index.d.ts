import { $Class } from "@package/java/lang";

declare module "@package/joptsimple" {
    export class $ValueConverter<V> {
    }
    export interface $ValueConverter<V> {
        valuePattern(): string;
        valueType(): $Class<V>;
        convert(arg0: string): V;
    }
}
