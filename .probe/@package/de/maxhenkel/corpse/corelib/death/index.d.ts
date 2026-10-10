import { $HolderLookup$Provider, $BlockPos, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Collection_, $UUID } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/de/maxhenkel/corpse/corelib/death" {
    export class $PlayerDeathEvent extends $Event {
        getSource(): $DamageSource;
        getPlayer(): $ServerPlayer;
        storeDeath(): void;
        removeDrops(): void;
        getDeath(): $Death;
        constructor(arg0: $Death, arg1: $ServerPlayer, arg2: $DamageSource_);
        get source(): $DamageSource;
        get player(): $ServerPlayer;
        get death(): $Death;
    }
    export class $Death {
        getModel(): number;
        getDimension(): string;
        getTimestamp(): number;
        getId(): $UUID;
        getAllItems(): $NonNullList<$ItemStack>;
        toNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getBlockPos(): $BlockPos;
        static fromPlayer(arg0: $Player): $Death;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Death;
        getExperience(): number;
        getEquipment(): $NonNullList<$ItemStack>;
        getPlayerUUID(): $UUID;
        getPlayerName(): string;
        getPosX(): number;
        getPosY(): number;
        getPosZ(): number;
        processDrops(arg0: $Collection_<$ItemEntity>): void;
        getMainInventory(): $NonNullList<$ItemStack>;
        getArmorInventory(): $NonNullList<$ItemStack>;
        getOffHandInventory(): $NonNullList<$ItemStack>;
        getAdditionalItems(): $NonNullList<$ItemStack>;
        get model(): number;
        get dimension(): string;
        get timestamp(): number;
        get id(): $UUID;
        get allItems(): $NonNullList<$ItemStack>;
        get blockPos(): $BlockPos;
        get experience(): number;
        get equipment(): $NonNullList<$ItemStack>;
        get playerUUID(): $UUID;
        get playerName(): string;
        get posX(): number;
        get posY(): number;
        get posZ(): number;
        get mainInventory(): $NonNullList<$ItemStack>;
        get armorInventory(): $NonNullList<$ItemStack>;
        get offHandInventory(): $NonNullList<$ItemStack>;
        get additionalItems(): $NonNullList<$ItemStack>;
    }
}
