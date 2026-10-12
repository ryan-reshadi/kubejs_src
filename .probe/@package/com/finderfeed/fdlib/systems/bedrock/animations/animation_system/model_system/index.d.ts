import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $AnimationSystem } from "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/finderfeed/fdlib/data_structures";
import { $UUID_, $UUID, $List, $Collection } from "@package/java/util";
import { $ModelAttachmentData, $ModelAttachment, $ModelAttachmentData_ } from "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system/model_system/attachments";
export * as attachments from "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system/model_system/attachments";

declare module "@package/com/finderfeed/fdlib/systems/bedrock/animations/animation_system/model_system" {
    export class $ModelSystem {
        allLayers(): $Collection<number>;
        tick(): void;
        getAnimationSystem(): $AnimationSystem;
        loadAttachments(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        saveAttachments(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        hasAttachment(arg0: $UUID_): boolean;
        getLayerAttachments(arg0: number): $LayerAttachments;
        onAttachmentRemoved(arg0: $UUID_): void;
        getAllLayerAttachments(arg0: number): $List<$Pair<$UUID, $ModelAttachment<never, never>>>;
        removeAttachment(arg0: $UUID_): void;
        onAttachment(arg0: number, arg1: string, arg2: $UUID_, arg3: $ModelAttachmentData_<never>): void;
        attachToLayer(arg0: number, arg1: string, arg2: $UUID_, arg3: $ModelAttachmentData_<never>): void;
        constructor(arg0: $AnimationSystem);
        get animationSystem(): $AnimationSystem;
    }
    export class $BoneAttachments implements $INBTSerializable<$CompoundTag> {
        getAttachments(): $List<$Pair<$UUID, $ModelAttachment<never, never>>>;
        getAttachment<M extends $ModelAttachment<M, T>, T extends $ModelAttachmentData<M>>(arg0: $UUID_): $ModelAttachment<M, T>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        hasAttachment(arg0: $UUID_): boolean;
        constructor();
        get attachments(): $List<$Pair<$UUID, $ModelAttachment<never, never>>>;
    }
    export class $LayerAttachments implements $INBTSerializable<$CompoundTag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        hasAttachment(arg0: $UUID_): boolean;
        getAllBones(): $Collection<string>;
        getAllBoneAttachments(arg0: string): $List<$Pair<$UUID, $ModelAttachment<never, never>>>;
        getAllAttachments(): $List<$Pair<$UUID, $ModelAttachment<never, never>>>;
        getBoneAttachments(arg0: string): $BoneAttachments;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get allBones(): $Collection<string>;
        get allAttachments(): $List<$Pair<$UUID, $ModelAttachment<never, never>>>;
    }
}
