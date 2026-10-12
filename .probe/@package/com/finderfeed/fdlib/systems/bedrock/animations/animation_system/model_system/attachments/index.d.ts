import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ModelSystem } from "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system/model_system";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system/model_system/attachments" {
    export class $ModelAttachmentRenderContext {
        static create(arg0: $BlockEntity): $ModelAttachmentRenderContext;
        static create(arg0: $Entity): $ModelAttachmentRenderContext;
        getEntity(): $Entity;
        getBlockEntity(): $BlockEntity;
        constructor();
        get entity(): $Entity;
        get blockEntity(): $BlockEntity;
    }
    export class $ModelAttachment<M extends $ModelAttachment<M, T>, T extends $ModelAttachmentData<M>> {
    }
    export interface $ModelAttachment<M extends $ModelAttachment<M, T>, T extends $ModelAttachmentData<M>> extends $INBTSerializable<$CompoundTag> {
        attachmentData(): $CompoundTag;
    }
    export class $ModelAttachmentType<A extends $ModelAttachment<A, T>, T extends $ModelAttachmentData<A>> {
    }
    export interface $ModelAttachmentType<A extends $ModelAttachment<A, T>, T extends $ModelAttachmentData<A>> {
        createInstance(): A;
        renderer(): $ModelAttachmentRenderer<A>;
        dataStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        attachmentFromData(arg0: T): A;
    }
    /**
     * Values that may be interpreted as {@link $ModelAttachmentType}.
     */
    export type $ModelAttachmentType_<A, T> = RegistryTypes.FdlibModelAttachmentType;
    export interface $ModelAttachmentType<A, T> extends RegistryMarked<RegistryTypes.FdlibModelAttachmentTypeTag, RegistryTypes.FdlibModelAttachmentType> {}
    export class $ModelAttachmentData<T extends $ModelAttachment<T, never>> {
    }
    export interface $ModelAttachmentData<T extends $ModelAttachment<T, never>> {
        type(): $ModelAttachmentType<T, never>;
    }
    /**
     * Values that may be interpreted as {@link $ModelAttachmentData}.
     */
    export type $ModelAttachmentData_<T> = (() => $ModelAttachmentType_<T, never>);
    export class $ModelAttachmentRenderer<T extends $ModelAttachment<T, never>> {
        render(arg0: T, arg1: $ModelAttachmentRenderContext, arg2: $ModelSystem, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: number): void;
        constructor();
    }
}
