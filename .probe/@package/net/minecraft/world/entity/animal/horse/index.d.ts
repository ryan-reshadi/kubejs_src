import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IConvertableHorse } from "@package/net/mehvahdjukaar/supplementaries/common/block";
import { $EntityType_, $OwnableEntity, $PortalProcessor, $VariantHolder, $Pose_, $PlayerRideableJumping, $AgeableMob$AgeableMobGroupData, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $Saddleable, $HasCustomInventoryScreen, $AgeableMob, $WalkAnimationState, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $NearestAttackableTargetGoal, $HurtByTargetGoal, $TargetGoal } from "@package/net/minecraft/world/entity/ai/goal/target";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID, $UUID_ } from "@package/java/util";
import { $Wolf, $Animal } from "@package/net/minecraft/world/entity/animal";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $ContainerListener, $InteractionHand, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $SoundEvent, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $RangedAttackMob } from "@package/net/minecraft/world/entity/monster";
import { $Enum, $Class } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/minecraft/world/entity/animal/horse" {
    export class $Variant extends $Enum<$Variant> implements $StringRepresentable {
        static values(): $Variant[];
        static valueOf(arg0: string): $Variant;
        getId(): number;
        getSerializedName(): string;
        static byId(id: number): $Variant;
        getRemappedEnumConstantName(): string;
        static WHITE: $Variant;
        static GRAY: $Variant;
        static CODEC: $Codec<$Variant>;
        static DARK_BROWN: $Variant;
        static CHESTNUT: $Variant;
        static BLACK: $Variant;
        static BROWN: $Variant;
        static CREAMY: $Variant;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Variant}.
     */
    export type $Variant_ = "white" | "creamy" | "chestnut" | "brown" | "black" | "gray" | "dark_brown";
    export class $Llama$Variant extends $Enum<$Llama$Variant> implements $StringRepresentable {
        static values(): $Llama$Variant[];
        static valueOf(arg0: string): $Llama$Variant;
        getId(): number;
        getSerializedName(): string;
        static byId(id: number): $Llama$Variant;
        getRemappedEnumConstantName(): string;
        static WHITE: $Llama$Variant;
        static GRAY: $Llama$Variant;
        static CODEC: $Codec<$Llama$Variant>;
        static BROWN: $Llama$Variant;
        static CREAMY: $Llama$Variant;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Llama$Variant}.
     */
    export type $Llama$Variant_ = "creamy" | "white" | "brown" | "gray";
    export class $AbstractChestedHorse extends $AbstractHorse {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasChest(): boolean;
        static createBaseChestedHorseAttributes(): $AttributeSupplier$Builder;
        setChest(chested: boolean): void;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static MAX_JUMP_STRENGTH: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static MAX_MOVEMENT_SPEED: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sprintCounter: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        set chest(value: boolean);
    }
    export class $Llama$LlamaGroupData extends $AgeableMob$AgeableMobGroupData {
    }
    export class $Llama extends $AbstractChestedHorse implements $VariantHolder<$Llama$Variant>, $RangedAttackMob {
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getStrength(): number;
        getVariant(): $Llama$Variant;
        setVariant(variant: $Llama$Variant_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        static createAttributes(): $AttributeSupplier$Builder;
        /**
         * Attack the specified entity using a ranged attack.
         */
        performRangedAttack(target: $LivingEntity, distanceFactor: number): void;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $Llama;
        /**
         * Dead and sleeping entities cannot move
         */
        isTraderLlama(): boolean;
        getSwag(): $DyeColor;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        leaveCaravan(): void;
        joinCaravan(caravanHead: $Llama): void;
        /**
         * Dead and sleeping entities cannot move
         */
        hasCaravanTail(): boolean;
        /**
         * Dead and sleeping entities cannot move
         */
        inCaravan(): boolean;
        getCaravanHead(): $Llama;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static MAX_JUMP_STRENGTH: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static MAX_MOVEMENT_SPEED: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sprintCounter: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Llama>, level: $Level_);
        get strength(): number;
        get leashOffset(): $Vec3;
        get traderLlama(): boolean;
        get swag(): $DyeColor;
        get caravanHead(): $Llama;
    }
    export class $ZombieHorse extends $AbstractHorse implements $IConvertableHorse {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        static checkZombieHorseSpawnRules(animal: $EntityType_<$Animal>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        handler$bif000$supplementaries$supp$interact(arg0: $Player, arg1: $InteractionHand_, arg2: $CallbackInfoReturnable<any>): void;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        supp$startConverting(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        supp$isConverting(): boolean;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static MAX_JUMP_STRENGTH: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static MAX_MOVEMENT_SPEED: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sprintCounter: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$ZombieHorse>, level: $Level_);
    }
    export class $Llama$LlamaAttackWolfGoal extends $NearestAttackableTargetGoal<$Wolf> {
    }
    export class $AbstractHorse extends $Animal implements $ContainerListener, $HasCustomInventoryScreen, $OwnableEntity, $PlayerRideableJumping, $Saddleable {
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        isTamed(): boolean;
        /**
         * Called by `InventoryBasic.onInventoryChanged()` on an array that is never filled.
         */
        containerChanged(invBasic: $Container): void;
        getInventory(): $Container;
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        isImmobile(): boolean;
        setOwnerUUID(uuid: $UUID_ | null): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getInventoryColumns(): number;
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        isJumping(): boolean;
        handler$bfg000$supplementaries$supp$addSugarCube(arg0: $CallbackInfo): void;
        setTamed(breeding: boolean): void;
        setIsJumping(breeding: boolean): void;
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        isEating(): boolean;
        setEating(breeding: boolean): void;
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        isStanding(): boolean;
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        isBred(): boolean;
        setBred(breeding: boolean): void;
        equipBodyArmor(player: $Player, stack: $ItemStack_): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getTemper(): number;
        setTemper(jumpPower: number): void;
        modifyTemper(columns: number): number;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxTemper(): number;
        static getInventorySize(columns: number): number;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getInventorySize(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        standIfPossible(): void;
        handler$bfg000$supplementaries$supp$eatSugarCube(arg0: $Player, arg1: $ItemStack_, arg2: $CallbackInfoReturnable<any>): void;
        setStanding(breeding: boolean): void;
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        canEatGrass(): boolean;
        getAmbientStandSound(): $SoundEvent;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        makeMad(): void;
        tameWithName(player: $Player): boolean;
        getEatAnim(partialTick: number): number;
        getStandAnim(partialTick: number): number;
        getMouthAnim(partialTick: number): number;
        hasInventoryChanged(inventory: $Container): boolean;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getAmbientStandInterval(): number;
        getBodyArmorAccess(): $Container;
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        isSaddled(): boolean;
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        isSaddleable(): boolean;
        equipSaddle(stack: $ItemStack_, soundSource: $SoundSource_ | null): void;
        getOwnerUUID(): $UUID;
        static createBaseHorseAttributes(): $AttributeSupplier$Builder;
        /**
         * Returns `true` if the horse entity ready to mate. (no rider, not riding, tame, adult, not steril...)
         */
        canJump(): boolean;
        onPlayerJump(jumpPower: number): void;
        openCustomInventoryScreen(player: $Player): void;
        fedFood(player: $Player, stack: $ItemStack_): $InteractionResult;
        handleStartJump(jumpPower: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        handleStopJump(): void;
        /**
         * For vehicles, the first passenger is generally considered the controller and "drives" the vehicle. For example, Pigs, Horses, and Boats are generally "steered" by the controlling passenger.
         */
        getOwner(): $LivingEntity;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getJumpCooldown(): number;
        getSaddleSoundEvent(): $SoundEvent;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static MAX_JUMP_STRENGTH: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static MAX_MOVEMENT_SPEED: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sprintCounter: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        get inventory(): $Container;
        get immobile(): boolean;
        get inventoryColumns(): number;
        get maxTemper(): number;
        get ambientStandSound(): $SoundEvent;
        get ambientStandInterval(): number;
        get bodyArmorAccess(): $Container;
        get saddled(): boolean;
        get saddleable(): boolean;
        get owner(): $LivingEntity;
        get jumpCooldown(): number;
        get saddleSoundEvent(): $SoundEvent;
    }
    export class $TraderLlama$TraderLlamaDefendWanderingTraderGoal extends $TargetGoal {
    }
    export class $Llama$LlamaHurtByTargetGoal extends $HurtByTargetGoal {
        toIgnoreAlert: $Class<never>[];
    }
    export class $SkeletonHorse extends $AbstractHorse implements $IConvertableHorse {
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        setTrap(isTrap: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isTrap(): boolean;
        static checkSkeletonHorseSpawnRules(animal: $EntityType_<$Animal>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        handler$bia001$supplementaries$addAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$bia001$supplementaries$readAdditionalSaveData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$bia000$supplementaries$mobInteract(arg0: $Player, arg1: $InteractionHand_, arg2: $CallbackInfoReturnable<any>): void;
        supp$feedRottenFlesh(player: $Player, hand: $InteractionHand_, stack: $ItemStack_): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        supp$isConverting(): boolean;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static MAX_JUMP_STRENGTH: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static MAX_MOVEMENT_SPEED: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sprintCounter: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$SkeletonHorse>, level: $Level_);
    }
    export class $TraderLlama extends $Llama {
        setDespawnDelay(despawnDelay: number): void;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static MAX_JUMP_STRENGTH: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static MAX_MOVEMENT_SPEED: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sprintCounter: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$TraderLlama>, level: $Level_);
        set despawnDelay(value: number);
    }
    export class $Mule extends $AbstractChestedHorse {
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static MAX_JUMP_STRENGTH: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static MAX_MOVEMENT_SPEED: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sprintCounter: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Mule>, level: $Level_);
    }
    export class $Markings extends $Enum<$Markings> {
        static values(): $Markings[];
        static valueOf(arg0: string): $Markings;
        getId(): number;
        static byId(id: number): $Markings;
        static WHITE: $Markings;
        static WHITE_FIELD: $Markings;
        static NONE: $Markings;
        static BLACK_DOTS: $Markings;
        static WHITE_DOTS: $Markings;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $Markings}.
     */
    export type $Markings_ = "none" | "white" | "white_field" | "white_dots" | "black_dots";
    export class $SkeletonTrapGoal extends $Goal {
        constructor(horse: $SkeletonHorse);
    }
    export class $Horse extends $AbstractHorse implements $VariantHolder<$Variant> {
        getVariant(): $Variant;
        setVariant(variant: $Variant_): void;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        getMarkings(): $Markings;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static MAX_JUMP_STRENGTH: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static MAX_MOVEMENT_SPEED: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sprintCounter: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Horse>, level: $Level_);
        get markings(): $Markings;
    }
    export class $Donkey extends $AbstractChestedHorse {
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static MAX_JUMP_STRENGTH: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        static MAX_MOVEMENT_SPEED: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sprintCounter: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$Donkey>, level: $Level_);
    }
    export class $Horse$HorseGroupData extends $AgeableMob$AgeableMobGroupData {
        variant: $Variant;
        constructor(variant: $Variant_);
    }
}
