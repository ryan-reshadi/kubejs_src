import { $PointerBuffer } from "@package/org/lwjgl";
import { $ByteBuffer } from "@package/java/nio";
import { $MemoryStack, $NativeResource, $Struct, $StructBuffer } from "@package/org/lwjgl/system";

declare module "@package/org/lwjgl/system/libffi" {
    export class $FFIType$Buffer extends $StructBuffer<$FFIType, $FFIType$Buffer> implements $NativeResource {
        alignment(arg0: number): $FFIType$Buffer;
        alignment(): number;
        size(): number;
        size(arg0: number): $FFIType$Buffer;
        type(): number;
        type(arg0: number): $FFIType$Buffer;
        elements(arg0: number): $PointerBuffer;
        elements(arg0: $PointerBuffer | null): $FFIType$Buffer;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $FFIType extends $Struct<$FFIType> implements $NativeResource {
        static malloc(arg0: $MemoryStack): $FFIType;
        static malloc(): $FFIType;
        static malloc(arg0: number, arg1: $MemoryStack): $FFIType$Buffer;
        static malloc(arg0: number): $FFIType$Buffer;
        static calloc(): $FFIType;
        static calloc(arg0: number, arg1: $MemoryStack): $FFIType$Buffer;
        static calloc(arg0: number): $FFIType$Buffer;
        static calloc(arg0: $MemoryStack): $FFIType;
        static createSafe(arg0: number, arg1: number): $FFIType$Buffer;
        static createSafe(arg0: number): $FFIType;
        static ntype(arg0: number, arg1: number): void;
        static ntype(arg0: number): number;
        static nalignment(arg0: number, arg1: number): void;
        static nalignment(arg0: number): number;
        static nelements(arg0: number, arg1: number): $PointerBuffer;
        static nelements(arg0: number, arg1: $PointerBuffer | null): void;
        static create(): $FFIType;
        static create(arg0: number, arg1: number): $FFIType$Buffer;
        static create(arg0: number): $FFIType$Buffer;
        static create(arg0: number): $FFIType;
        alignment(): number;
        alignment(arg0: number): $FFIType;
        static nsize(arg0: number, arg1: number): void;
        static nsize(arg0: number): number;
        size(arg0: number): $FFIType;
        size(): number;
        type(): number;
        type(arg0: number): $FFIType;
        elements(arg0: $PointerBuffer | null): $FFIType;
        elements(arg0: number): $PointerBuffer;
        set(arg0: $FFIType): $FFIType;
        set(arg0: number, arg1: number, arg2: number, arg3: $PointerBuffer | null): $FFIType;
        close(): void;
        static ELEMENTS: number;
        static ALIGNMENT: number;
        static ALIGNOF: number;
        static SIZE: number;
        static SIZEOF: number;
        static TYPE: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FFICIF extends $Struct<$FFICIF> implements $NativeResource {
        static malloc(arg0: $MemoryStack): $FFICIF;
        static malloc(): $FFICIF;
        static malloc(arg0: number, arg1: $MemoryStack): $FFICIF$Buffer;
        static malloc(arg0: number): $FFICIF$Buffer;
        static calloc(arg0: $MemoryStack): $FFICIF;
        static calloc(): $FFICIF;
        static calloc(arg0: number): $FFICIF$Buffer;
        static calloc(arg0: number, arg1: $MemoryStack): $FFICIF$Buffer;
        static createSafe(arg0: number, arg1: number): $FFICIF$Buffer;
        static createSafe(arg0: number): $FFICIF;
        arg_types(arg0: number): $PointerBuffer;
        static nabi(arg0: number): number;
        static nnargs(arg0: number): number;
        static narg_types(arg0: number, arg1: number): $PointerBuffer;
        static nflags(arg0: number): number;
        static create(arg0: number): $FFICIF$Buffer;
        static create(arg0: number, arg1: number): $FFICIF$Buffer;
        static create(): $FFICIF;
        static create(arg0: number): $FFICIF;
        rtype(): $FFIType;
        static nrtype(arg0: number): $FFIType;
        abi(): number;
        nargs(): number;
        static nbytes(arg0: number): number;
        flags(): number;
        bytes(): number;
        close(): void;
        static ARG_TYPES: number;
        static BYTES: number;
        static NARGS: number;
        static ALIGNOF: number;
        static RTYPE: number;
        static SIZEOF: number;
        static ABI: number;
        static FLAGS: number;
        constructor(arg0: $ByteBuffer);
    }
    export class $FFICIF$Buffer extends $StructBuffer<$FFICIF, $FFICIF$Buffer> implements $NativeResource {
        arg_types(arg0: number): $PointerBuffer;
        rtype(): $FFIType;
        abi(): number;
        nargs(): number;
        flags(): number;
        bytes(): number;
        close(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
}
