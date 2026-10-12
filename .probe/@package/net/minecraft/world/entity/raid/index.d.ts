import { $Level } from "@package/net/minecraft/world/level";
import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityDimensions, $Entity$RemovalReason, $PortalProcessor, $WalkAnimationState, $Entity } from "@package/net/minecraft/world/entity";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $Set } from "@package/java/util";
import { $InteractionHand, $Difficulty_ } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Holder_, $HolderGetter } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $PatrollingMonster } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $BannerPattern_ } from "@package/net/minecraft/world/level/block/entity";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";

declare module "@package/net/minecraft/world/entity/raid" {
    export class $Raider$RaiderCelebration extends $Goal {
    }
    export class $Raider$ObtainRaidLeaderBannerGoal<T extends $Raider> extends $Goal {
    }
    export class $Raid {
        isStarted(): boolean;
        isActive(): boolean;
        tick(): void;
        getLevel(): $Level;
        isStopped(): boolean;
        stop(): void;
        getId(): number;
        save(compound: $CompoundTag_): $CompoundTag;
        getCenter(): $BlockPos;
        getRaidOmenLevel(): number;
        getMaxRaidOmenLevel(): number;
        static getLeaderBannerInstance(patternRegistry: $HolderGetter<$BannerPattern_>): $ItemStack;
        isOver(): boolean;
        getGroupsSpawned(): number;
        joinRaid(wave: number, raider: $Raider, pos: $BlockPos_ | null, isRecruited: boolean): void;
        removeLeader(wave: number): void;
        addHeroOfTheVillage(player: $Entity): void;
        removeFromRaid(raider: $Raider, wanderedOutOfRaid: boolean): void;
        addWaveMob(wave: number, raider: $Raider, isRecruited: boolean): boolean;
        setLeader(wave: number, raider: $Raider): void;
        getLeader(wave: number): $Raider;
        updateBossbar(): void;
        isLoss(): boolean;
        getEnchantOdds(): number;
        getNumGroups(difficulty: $Difficulty_): number;
        absorbRaidOmen(player: $ServerPlayer): boolean;
        isVictory(): boolean;
        isBetweenWaves(): boolean;
        hasFirstWaveSpawned(): boolean;
        getTotalRaidersAlive(): number;
        getTotalHealth(): number;
        getAllRaiders(): $Set<$Raider>;
        setRaidOmenLevel(wave: number): void;
        getHealthOfLivingRaiders(): number;
        static RAID_REMOVAL_THRESHOLD_SQR: number;
        static TICKS_PER_DAY: number;
        static VILLAGE_RADIUS_BUFFER: number;
        static MAX_CELEBRATION_TICKS: number;
        static VALID_RAID_RADIUS_SQR: number;
        static MAX_NO_ACTION_TIME: number;
        static DEFAULT_MAX_RAID_OMEN_LEVEL: number;
        constructor(id: number, level: $ServerLevel, center: $BlockPos_);
        constructor(level: $ServerLevel, compound: $CompoundTag_);
        get started(): boolean;
        get active(): boolean;
        get level(): $Level;
        get stopped(): boolean;
        get id(): number;
        get center(): $BlockPos;
        get maxRaidOmenLevel(): number;
        get over(): boolean;
        get groupsSpawned(): number;
        get loss(): boolean;
        get enchantOdds(): number;
        get victory(): boolean;
        get betweenWaves(): boolean;
        get totalRaidersAlive(): number;
        get totalHealth(): number;
        get allRaiders(): $Set<$Raider>;
        get healthOfLivingRaiders(): number;
    }
    export class $Raid$RaiderType extends $Enum<$Raid$RaiderType> implements $IExtensibleEnum {
        static getExtensionInfo(): $ExtensionInfo;
        static values(): $Raid$RaiderType[];
        static valueOf(arg0: string): $Raid$RaiderType;
        static EVOKER: $Raid$RaiderType;
        static VINDICATOR: $Raid$RaiderType;
        static BORN_IN_CHAOS_V1_MISSIONARY_RAIDER: $Raid$RaiderType;
        static WITCH: $Raid$RaiderType;
        static PILLAGER: $Raid$RaiderType;
        static RAVAGER: $Raid$RaiderType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaiderType}.
     */
    export type $Raid$RaiderType_ = "vindicator" | "evoker" | "pillager" | "witch" | "ravager" | "born_in_chaos_v1_missionary_raider";
    export class $Raider$RaiderMoveThroughVillageGoal extends $Goal {
    }
    export class $Raid$RaidStatus extends $Enum<$Raid$RaidStatus> {
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaidStatus}.
     */
    export type $Raid$RaidStatus_ = "ongoing" | "victory" | "loss" | "stopped";
    export class $Raider$HoldGroundAttackGoal extends $Goal {
    }
    export class $Raids extends $SavedData {
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        tick(): void;
        get(id: number): $Raid;
        static load(level: $ServerLevel, tag: $CompoundTag_): $Raids;
        static factory(level: $ServerLevel): $SavedData$Factory<$Raids>;
        static getFileId(dimensionTypeHolder: $Holder_<$DimensionType>): string;
        getNearbyRaid(pos: $BlockPos_, distance: number): $Raid;
        createOrExtendRaid(player: $ServerPlayer, pos: $BlockPos_): $Raid;
        static canJoinRaid(raider: $Raider, raid: $Raid): boolean;
        constructor(level: $ServerLevel);
    }
    export class $Raider extends $PatrollingMonster {
        getCelebrateSound(): $SoundEvent;
        applyRaidBuffs(level: $ServerLevel, wave: number, unused: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCelebrating(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canJoinRaid(): boolean;
        setCanJoinRaid(canJoinRaid: boolean): void;
        getCurrentRaid(): $Raid;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getWave(): number;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasActiveRaid(): boolean;
        setCurrentRaid(raid: $Raid | null): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCaptain(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasRaid(): boolean;
        setWave(ticksOutsideRaid: number): void;
        setCelebrating(canJoinRaid: boolean): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTicksOutsideRaid(): number;
        setTicksOutsideRaid(ticksOutsideRaid: number): void;
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
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
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
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
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
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        get celebrateSound(): $SoundEvent;
        get captain(): boolean;
    }
}
