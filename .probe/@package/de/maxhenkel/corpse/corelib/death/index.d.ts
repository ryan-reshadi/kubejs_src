import { $HolderLookup$Provider, $BlockPos, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $UUID, $Collection_ } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/de/maxhenkel/corpse/corelib/death" {
    export class $PlayerDeathEvent extends $Event {
        getSource(): $DamageSource;
        removeDrops(): void;
        storeDeath(): void;
        getPlayer(): $ServerPlayer;
        getDeath(): $Death;
        constructor(arg0: $Death, arg1: $ServerPlayer, arg2: $DamageSource_);
        get source(): $DamageSource;
        get player(): $ServerPlayer;
        get death(): $Death;
    }
    export class $Death {
        getExperience(): number;
        getId(): $UUID;
        getTimestamp(): number;
        getEquipment(): $NonNullList<$ItemStack>;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        toNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        static fromPlayer(arg0: $Player): $Death;
        getAllItems(): $NonNullList<$ItemStack>;
        getDimension(): string;
        getBlockPos(): $BlockPos;
        processDrops(arg0: $Collection_<$ItemEntity>): void;
        getModel(): number;
        getPosY(): number;
        getPosZ(): number;
        getPosX(): number;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Death;
        getPlayerName(): string;
        getPlayerUUID(): $UUID;
        getOffHandInventory(): $NonNullList<$ItemStack>;
        getAdditionalItems(): $NonNullList<$ItemStack>;
        getArmorInventory(): $NonNullList<$ItemStack>;
        getMainInventory(): $NonNullList<$ItemStack>;
        get experience(): number;
        get id(): $UUID;
        get timestamp(): number;
        get equipment(): $NonNullList<$ItemStack>;
        get allItems(): $NonNullList<$ItemStack>;
        get dimension(): string;
        get blockPos(): $BlockPos;
        get model(): number;
        get posY(): number;
        get posZ(): number;
        get posX(): number;
        get playerName(): string;
        get playerUUID(): $UUID;
        get offHandInventory(): $NonNullList<$ItemStack>;
        get additionalItems(): $NonNullList<$ItemStack>;
        get armorInventory(): $NonNullList<$ItemStack>;
        get mainInventory(): $NonNullList<$ItemStack>;
    }
}
