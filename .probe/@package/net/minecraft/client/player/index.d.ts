import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $State, $State_ } from "@package/gg/essential/gui/elementa/state/v2";
import { $HumanoidArm, $PortalProcessor, $PlayerRideableJumping, $Entity, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $PlayerPoseManager } from "@package/gg/essential/model/util";
import { $Minecraft, $ClientRecipeBook, $Options } from "@package/net/minecraft/client";
import { $UUID } from "@package/java/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $PlayerInfo, $ClientPacketListener, $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $PlayerAccessor } from "@package/forge/me/thosea/badoptimizations/mixin/accessors";
import { $AbstractClientPlayerAccessor } from "@package/dev/engine_room/flywheel/backend/mixin";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AbstractContainerMenu, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $Pair } from "@package/kotlin";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $GameType_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $WearablesManager, $CosmeticsState } from "@package/gg/essential/cosmetics";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $AbstractClientPlayerExt } from "@package/gg/essential/mixins/impl/client/entity";
import { $Abilities, $Player } from "@package/net/minecraft/world/entity/player";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $SlotReference, $IQuiverPlayer } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $UIdentifier } from "@package/gg/essential/util";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $LivingEntityStickExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels";
import { $PlayerPose } from "@package/gg/essential/model/backend";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Portal$Transition } from "@package/net/minecraft/world/level/block";
import { $ClientPlayerKJS, $LocalClientPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $StatsCounter } from "@package/net/minecraft/stats";
export * as inventory from "@package/net/minecraft/client/player/inventory";

declare module "@package/net/minecraft/client/player" {
    export class $LocalPlayer extends $AbstractClientPlayer implements $IQuiverPlayer, $LocalClientPlayerKJS, $PlayerFreezeExtension, $PlayerAccessor {
        drop(fullStack: boolean): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        shouldShowDeathScreen(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isHandsBusy(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendOpenInventory(): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getPermissionLevel(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        serverAiStep(): void;
        getStatsCounter(): $StatsCounter;
        getRecipeBook(): $ClientRecipeBook;
        supplementaries$getQuiverSlot(): $SlotReference;
        sable$calculateViewVector2(xRot: number, yRot: number): $Vec3;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentMood(): number;
        handler$fhl000$xaerominimap$onTickStart(arg0: $CallbackInfo): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clientSideCloseContainer(): void;
        /**
         * Heal living entity (param: amount of half-hearts)
         */
        hurtTo(healAmount: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpRidingScale(): number;
        removeRecipeHighlight(recipe: $RecipeHolder_<never>): void;
        setPermissionLevel(permissionLevel: number): void;
        /**
         * Sets the current XP, total XP, and level number.
         */
        setExperienceValues(currentXP: number, maxXP: number, level: number): void;
        setShowDeathScreen(useConfusion: boolean): void;
        setDoLimitedCrafting(useConfusion: boolean): void;
        /**
         * Returns whether the entity is in a server world
         */
        getDoLimitedCrafting(): boolean;
        jumpableVehicle(): $PlayerRideableJumping;
        /**
         * Returns whether the entity is in a server world
         */
        isMovingSlowly(): boolean;
        handler$dpj000$fdlib$isControlledCamera(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetPos(): void;
        getActivePortalLocalTransition(): $Portal$Transition;
        wrapOperation$bje000$supplementaries$suppl$preventMovementWhileOperatingCannon(arg0: $Input, arg1: boolean, arg2: number, arg3: $Operation_<any>): void;
        handler$bdh000$fdbosses$aiStep(arg0: $CallbackInfo): void;
        /**
         * Returns whether the entity is in a server world
         */
        isAutoJumpEnabled(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getWaterVision(): number;
        onGameModeChanged(gameMode: $GameType_): void;
        getMinecraft(): $Minecraft;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        bo$underwaterVisibilityTicks(): number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        connection: $ClientPacketListener;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        xBob: number;
        static ID_TAG: string;
        elytraRotZ: number;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        input: $Input;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        yBob: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        spinningEffectIntensity: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        xBobO: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        abilities: $Abilities;
        tickCount: number;
        yBobO: number;
        static BOARDING_COOLDOWN: number;
        oSpinningEffectIntensity: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        static LOGGER: $Logger;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        handsBusy: boolean;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        clientLevel: $ClientLevel;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(minecraft: $Minecraft, clientLevel: $ClientLevel, connection: $ClientPacketListener, stats: $StatsCounter, recipeBook: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean);
        get statsCounter(): $StatsCounter;
        get recipeBook(): $ClientRecipeBook;
        get currentMood(): number;
        get jumpRidingScale(): number;
        set showDeathScreen(value: boolean);
        get movingSlowly(): boolean;
        get activePortalLocalTransition(): $Portal$Transition;
        get autoJumpEnabled(): boolean;
        get waterVision(): number;
        get minecraft(): $Minecraft;
    }
    export class $KeyboardInput extends $Input {
        handler$bdg000$fdbosses$tick(arg0: boolean, arg1: number, arg2: $CallbackInfo): void;
        handler$dpb001$fdlib$tick(arg0: boolean, arg1: number, arg2: $CallbackInfo): void;
        forwardImpulse: number;
        jumping: boolean;
        left: boolean;
        leftImpulse: number;
        shiftKeyDown: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor(options: $Options);
    }
    export class $AbstractClientPlayer extends $Player implements $ClientPlayerKJS, $AbstractClientPlayerAccessor, $AbstractClientPlayerExt {
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getFieldOfViewModifier(): number;
        getCosmeticsState(): $CosmeticsState;
        setEssentialCosmeticsCape(cape: string, textures: $Pair<any, any>): void;
        applyEssentialCosmeticsMask(skin: $ResourceLocation_): $ResourceLocation;
        getEmissiveCapeTexture(): $UIdentifier;
        wasArmorRenderingSuppressed(): boolean[];
        getPoseManager(): $PlayerPoseManager;
        /**
         * Returns `true` if the player is in spectator mode.
         */
        isPoseModified(): boolean;
        /**
         * Set sprinting switch for Entity.
         */
        setPoseModified(sprinting: boolean): void;
        getRenderedPose(): $PlayerPose;
        setRenderedPose(renderedPose: $PlayerPose): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        essential$getCosmeticFrozenYaw(): number;
        essential$setCosmeticFrozenYaw(seconds: number): void;
        getCosmeticsSourceUuid(): $UUID;
        getCosmeticsSource(): $State<any>;
        setCosmeticsSource(cosmeticsSource: $State_<any>): void;
        getWearablesManager(): $WearablesManager;
        getPlayerInfo(): $PlayerInfo;
        getDeltaMovementLerped(patialTick: number): $Vec3;
        getSkin(): $PlayerSkin;
        flywheel$getPlayerInfo(): $PlayerInfo;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        elytraRotZ: number;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        abilities: $Abilities;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
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
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        clientLevel: $ClientLevel;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(clientLevel: $ClientLevel, gameProfile: $GameProfile);
        get fieldOfViewModifier(): number;
        get cosmeticsState(): $CosmeticsState;
        get emissiveCapeTexture(): $UIdentifier;
        get poseManager(): $PlayerPoseManager;
        get cosmeticsSourceUuid(): $UUID;
        get wearablesManager(): $WearablesManager;
        get playerInfo(): $PlayerInfo;
        get skin(): $PlayerSkin;
    }
    export class $Input {
        tick(isSneaking: boolean, sneakingSpeedMultiplier: number): void;
        hasForwardImpulse(): boolean;
        getMoveVector(): $Vec2;
        forwardImpulse: number;
        jumping: boolean;
        left: boolean;
        leftImpulse: number;
        shiftKeyDown: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor();
        get moveVector(): $Vec2;
    }
    export class $RemotePlayer extends $AbstractClientPlayer implements $IQuiverEntity, $LivingEntityStickExtension {
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        elytraRotZ: number;
        elytraRotY: number;
        static WAKE_UP_DURATION: number;
        elytraRotX: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        abilities: $Abilities;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
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
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        clientLevel: $ClientLevel;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(clientLevel: $ClientLevel, gameProfile: $GameProfile);
    }
}
