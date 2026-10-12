/// <reference path="./internal_*.d.ts" />
declare namespace com.simibubi.create.foundation.mixin.accessor {
    interface ServerLevelAccessor {
        abstract create$getEntityTickList(): Internal.EntityTickList;
        (): Internal.EntityTickList_;
    }
    type ServerLevelAccessor_ = ServerLevelAccessor | (()=> Internal.EntityTickList_);
}
declare namespace dev.architectury.event {
    interface Event <T> {
        abstract invoker(): T;
        abstract unregister(arg0: T): void;
        abstract register(arg0: T): void;
        abstract isRegistered(arg0: T): boolean;
        abstract clearListeners(): void;
    }
    type Event_<T> = Event<T>;
}
declare namespace Internal {
    class BlockTypeBasedBlockItem <T extends Internal.BlockType> extends Internal.FuelBlockItem {
        constructor(pBlock: Internal.Block_, pProperties: Internal.Item$Properties_, blockType: T, burnTime: Internal.Supplier_<number>)
        constructor(pBlock: Internal.Block_, pProperties: Internal.Item$Properties_, blockType: T)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        handler$ckh000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static updateState<T extends Internal.Comparable<T>>(arg0: Internal.BlockState_, arg1: Internal.Property_<T>, arg2: string): Internal.BlockState;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(itemStack: Internal.ItemStack_, recipeType: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        getBlockType(): T;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        handler$bfp000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        get blockType(): T
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type BlockTypeBasedBlockItem_<T extends Internal.BlockType> = BlockTypeBasedBlockItem<T>;
    class ClientboundSetExperiencePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number, arg2: number)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getTotalExperience(): number;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getExperienceLevel(): number;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        getExperienceProgress(): number;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get totalExperience(): number
        get experienceLevel(): number
        get experienceProgress(): number
    }
    type ClientboundSetExperiencePacket_ = ClientboundSetExperiencePacket;
    interface NumberComponent <T extends number> extends Internal.RecipeComponent<T> {
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T, O>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<T>;
        floatRange(min: number, max: number): Internal.NumberComponent$FloatRange;
        key(name: string): Internal.RecipeKey<T>;
        isOutput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        abstract read(arg0: Internal.RecipeJS_, arg1: any): T;
        orSelf(): Internal.RecipeComponent<T>;
        checkEmpty(key: Internal.RecipeKey_<T>, value: T): string;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        doubleRange(min: number, max: number): Internal.NumberComponent$DoubleRange;
        longRange(min: number, max: number): Internal.NumberComponent$LongRange;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<com.google.gson.JsonElement>): Internal.MappingRecipeComponent<T>;
        replaceInput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T;
        checkValueHasChanged(oldValue: T, newValue: T): boolean;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T>;
        builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        isInput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<com.google.gson.JsonElement>): Internal.MappingRecipeComponent<T>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T>>;
        asArray(): Internal.ArrayRecipeComponent<T>;
        intRange(min: number, max: number): Internal.NumberComponent$IntRange;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T>>;
        abstract write(arg0: Internal.RecipeJS_, arg1: T): com.google.gson.JsonElement;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, map: Internal.Map_<any, any>): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T, O>;
        readonly DOUBLE: (Internal.NumberComponent$DoubleRange) & (Internal.NumberComponent$DoubleRange);
        readonly ANY_FLOAT: (Internal.NumberComponent$FloatRange) & (Internal.NumberComponent$FloatRange);
        readonly DYNAMIC_FLOAT: (Internal.DynamicRecipeComponent) & (Internal.DynamicRecipeComponent);
        readonly DYNAMIC_DOUBLE: (Internal.DynamicRecipeComponent) & (Internal.DynamicRecipeComponent);
        readonly FLOAT: (Internal.NumberComponent$FloatRange) & (Internal.NumberComponent$FloatRange);
        readonly ANY_LONG: (Internal.NumberComponent$LongRange) & (Internal.NumberComponent$LongRange);
        readonly INT: (Internal.NumberComponent$IntRange) & (Internal.NumberComponent$IntRange);
        readonly LONG: (Internal.NumberComponent$LongRange) & (Internal.NumberComponent$LongRange);
        readonly DYNAMIC_INT: (Internal.DynamicRecipeComponent) & (Internal.DynamicRecipeComponent);
        readonly DYNAMIC_LONG: (Internal.DynamicRecipeComponent) & (Internal.DynamicRecipeComponent);
        readonly ANY_INT: (Internal.NumberComponent$IntRange) & (Internal.NumberComponent$IntRange);
        readonly ANY_DOUBLE: (Internal.NumberComponent$DoubleRange) & (Internal.NumberComponent$DoubleRange);
    }
    type NumberComponent_<T extends number> = NumberComponent<T>;
    class LeverBlock extends Internal.FaceAttachedHorizontalDirectionalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        pull(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.BlockState;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        static canAttach(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        static getConnectedDirection(arg0: Internal.BlockState_): Internal.Direction;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly UP_AABB_Z: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly DEPTH: (6) & (number);
        static readonly WIDTH: (6) & (number);
        static readonly NORTH_AABB: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly UP_AABB_X: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly SOUTH_AABB: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly DOWN_AABB_Z: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly EAST_AABB: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly DOWN_AABB_X: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly HEIGHT: (8) & (number);
        static readonly WEST_AABB: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type LeverBlock_ = LeverBlock;
    class AstralSorceryAttunementAttribute$Type implements Internal.ItemAttributeType {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getAllAttributes(arg0: Internal.ItemStack_, arg1: Internal.Level_): Internal.List<Internal.ItemAttribute>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        createAttribute(): Internal.ItemAttribute;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type AstralSorceryAttunementAttribute$Type_ = AstralSorceryAttunementAttribute$Type;
    class ModelEvent$ModifyBakingResult extends Internal.ModelEvent implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<ResourceLocation, Internal.BakedModel>, arg1: Internal.ModelBakery_)
        getModels(): Internal.Map<ResourceLocation, Internal.BakedModel>;
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getModelBakery(): Internal.ModelBakery;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get models(): Internal.Map<ResourceLocation, Internal.BakedModel>
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get modelBakery(): Internal.ModelBakery
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ModelEvent$ModifyBakingResult_ = ModelEvent$ModifyBakingResult;
    class UserBanList extends Internal.StoredUserList<Internal.GameProfile, Internal.UserBanListEntry> {
        constructor(arg0: Internal.File_)
        getClass(): typeof any;
        remove(arg0: Internal.GameProfile_): void;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        contains(arg0: Internal.GameProfile_): boolean;
        "getKeyForUser(com.mojang.authlib.GameProfile)"(arg0: Internal.GameProfile_): string;
        add(arg0: Internal.UserBanListEntry_): void;
        "remove(net.minecraft.server.players.StoredUserEntry)"(arg0: Internal.StoredUserEntry_<Internal.GameProfile>): void;
        "getKeyForUser(java.lang.Object)"(arg0: any): string;
        load(): void;
        get(arg0: Internal.GameProfile_): Internal.UserBanListEntry;
        "remove(com.mojang.authlib.GameProfile)"(arg0: Internal.GameProfile_): void;
        toString(): string;
        notifyAll(): void;
        remove(arg0: Internal.StoredUserEntry_<Internal.GameProfile>): void;
        getKeyForUser(arg0: any): string;
        getKeyForUser(arg0: Internal.GameProfile_): string;
        createEntry(arg0: Internal.JsonObject_): Internal.StoredUserEntry<Internal.GameProfile>;
        save(): void;
        isBanned(arg0: Internal.GameProfile_): boolean;
        getFile(): Internal.File;
        getEntries(): Internal.Collection<Internal.UserBanListEntry>;
        hashCode(): number;
        wait(): void;
        getUserList(): string[];
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
        get file(): Internal.File
        get entries(): Internal.Collection<Internal.UserBanListEntry>
        get userList(): string[]
    }
    type UserBanList_ = UserBanList;
    class NetherSproutsBlock extends Internal.BushBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        mayPlaceOn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly SHAPE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
    }
    type NetherSproutsBlock_ = NetherSproutsBlock;
    interface IForgeBlockAndTintGetter {
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
    }
    type IForgeBlockAndTintGetter_ = IForgeBlockAndTintGetter;
    interface EntityType$EntityFactory <T extends Internal.Entity> {
        abstract create(arg0: Internal.EntityType_<T>, arg1: Internal.Level_): T;
        (arg0: Internal.EntityType<T>, arg1: Internal.Level): T;
    }
    type EntityType$EntityFactory_<T extends Internal.Entity> = ((arg0: Internal.EntityType<T>, arg1: Internal.Level)=> T) | EntityType$EntityFactory<T>;
    class SmartInventory extends Internal.RecipeWrapper implements Internal.IItemHandlerModifiable, Internal.INBTSerializable<Internal.CompoundTag> {
        constructor(arg0: number, arg1: Internal.SyncedBlockEntity_, arg2: number, arg3: boolean, arg4: Internal.BiPredicate_<number, Internal.ItemStack>)
        constructor(arg0: number, arg1: Internal.SyncedBlockEntity_, arg2: number, arg3: boolean)
        constructor(arg0: Internal.IItemHandlerModifiable_, arg1: number, arg2: boolean)
        constructor(arg0: number, arg1: Internal.SyncedBlockEntity_, arg2: Internal.BiPredicate_<number, Internal.ItemStack>)
        constructor(arg0: number, arg1: Internal.SyncedBlockEntity_)
        stopOpen(arg0: Internal.Player_): void;
        static tryClear(arg0: any): void;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getStackLimit(arg0: number, arg1: Internal.ItemStack_): number;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        setChanged(): void;
        "getSlots()"(): number;
        withMaxStackSize(arg0: number): this;
        kjs$self(): Internal.IItemHandler;
        getContainerSize(): number;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(arg0: number): Internal.ItemStack;
        "getSlotLimit(int)"(i: number): number;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        getMaxStackSize(): number;
        "isEmpty()"(): boolean;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        whenContentsChanged(arg0: Internal.Consumer_<number>): this;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(slot: number, stack: Internal.ItemStack_): void;
        wait(): void;
        getItem(arg0: number): Internal.ItemStack;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        forbidExtraction(): this;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        allowInsertion(): this;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        allowExtraction(): this;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        forbidInsertion(): this;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        stillValid(arg0: Internal.Player_): boolean;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(i: number, itemStack: Internal.ItemStack_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        equals(arg0: any): boolean;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get "slots()"(): number
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get "empty()"(): boolean
        get class(): typeof any
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type SmartInventory_ = SmartInventory;
    class VillagerProfession extends Internal.Record {
        constructor(arg0: string, arg1: Internal.Predicate_<Internal.Holder<Internal.PoiType>>, arg2: Internal.Predicate_<Internal.Holder<Internal.PoiType>>, arg3: Internal.ImmutableSet_<Internal.Item>, arg4: Internal.ImmutableSet_<Internal.Block>, arg5: Internal.SoundEvent_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        heldJobSite(): Internal.Predicate<Internal.Holder<Internal.PoiType>>;
        wait(arg0: number, arg1: number): void;
        name(): string;
        acquirableJobSite(): Internal.Predicate<Internal.Holder<Internal.PoiType>>;
        hashCode(): number;
        requestedItems(): Internal.ImmutableSet<Internal.Item>;
        secondaryPoi(): Internal.ImmutableSet<Internal.Block>;
        workSound(): Internal.SoundEvent;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly WEAPONSMITH: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly FISHERMAN: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly TOOLSMITH: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly ARMORER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly CLERIC: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly BUTCHER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly NONE: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly FARMER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly LEATHERWORKER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly LIBRARIAN: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly NITWIT: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly CARTOGRAPHER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly MASON: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly SHEPHERD: (Internal.VillagerProfession) & (Internal.VillagerProfession);
        static readonly ALL_ACQUIRABLE_JOBS: Internal.Predicate<Internal.Holder<Internal.PoiType>>;
        static readonly FLETCHER: (Internal.VillagerProfession) & (Internal.VillagerProfession);
    }
    type VillagerProfession_ = VillagerProfession | Special.VillagerProfession;
    class StackTraceElement implements Internal.Serializable {
        constructor(arg0: string, arg1: string, arg2: string, arg3: number)
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: number)
        getClass(): typeof any;
        getModuleName(): string;
        toString(): string;
        getModuleVersion(): string;
        getClassLoaderName(): string;
        notifyAll(): void;
        getClassName(): string;
        isNativeMethod(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getFileName(): string;
        getLineNumber(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getMethodName(): string;
        get class(): typeof any
        get moduleName(): string
        get moduleVersion(): string
        get classLoaderName(): string
        get className(): string
        get nativeMethod(): boolean
        get fileName(): string
        get lineNumber(): number
        get methodName(): string
    }
    type StackTraceElement_ = StackTraceElement;
    interface ScreenAccessor {
        abstract libgui$getChildren(): Internal.List<Internal.GuiEventListener>;
        (): Internal.List_<Internal.GuiEventListener>;
    }
    type ScreenAccessor_ = ScreenAccessor | (()=> Internal.List_<Internal.GuiEventListener>);
    class RedstoneLampBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly LIT: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type RedstoneLampBlock_ = RedstoneLampBlock;
    interface MouseHandlerAccessor {
        abstract create$setXPos(arg0: number): void;
        abstract create$setYPos(arg0: number): void;
    }
    type MouseHandlerAccessor_ = MouseHandlerAccessor;
    interface GameRulesAccessor {
        invokeRegister<T extends Internal.GameRules$Value<T>>(name: string, category: Internal.GameRules$Category_, type: Internal.GameRules$Type_<T>): Internal.GameRules$Key<T>;
    }
    type GameRulesAccessor_ = GameRulesAccessor;
    class BoilerData$BoilerFluidHandler implements Internal.IFluidHandler {
        constructor(arg0: Internal.BoilerData_)
        getClass(): typeof any;
        getFluidInTank(arg0: number): Internal.FluidStack;
        drain(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        toString(): string;
        notifyAll(): void;
        isFluidValid(arg0: number, arg1: Internal.FluidStack_): boolean;
        getTankCapacity(arg0: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "drain(int,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        fill(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        hashCode(): number;
        wait(): void;
        getTanks(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "drain(net.minecraftforge.fluids.FluidStack,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        get class(): typeof any
        get tanks(): number
    }
    type BoilerData$BoilerFluidHandler_ = BoilerData$BoilerFluidHandler;
    /**
     * @deprecated
    */
    class LakeFeature extends Internal.Feature<Internal.LakeFeature$Configuration> {
        constructor(arg0: Internal.Codec_<Internal.LakeFeature$Configuration>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.LakeFeature$Configuration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.LakeFeature$Configuration, Internal.Feature<Internal.LakeFeature$Configuration>>>;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        place(arg0: Internal.FeaturePlaceContext_<Internal.LakeFeature$Configuration>): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type LakeFeature_ = LakeFeature;
    class SawBlock extends Internal.DirectionalAxisKineticBlock implements Internal.IBE<Internal.SawBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.SawBlockEntity>;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.SawBlockEntity;
        getRotationAxis(arg0: Internal.BlockState_): Internal.Direction$Axis;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getPreferredFacing(arg0: Internal.BlockPlaceContext_): Internal.Direction;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.SawBlockEntity, Internal.InteractionResult>): Internal.InteractionResult;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getParticleInitialRadius(): number;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        transform(arg0: Internal.BlockState_, arg1: Internal.StructureTransform_): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.SawBlockEntity>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getBlockEntityClass(): typeof Internal.SawBlockEntity;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        hideStressImpact(): boolean;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        static isHorizontal(arg0: Internal.BlockState_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        getParticleTargetRadius(): number;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.SawBlockEntity>): void;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        showCapacityWithAnnotation(): boolean;
        static stateById(arg0: number): Internal.BlockState;
        hasShaftTowards(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get particleInitialRadius(): number
        get blockEntityType(): Internal.BlockEntityType<Internal.SawBlockEntity>
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get blockEntityClass(): typeof Internal.SawBlockEntity
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        get particleTargetRadius(): number
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly FLIPPED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type SawBlock_ = SawBlock;
    class TropicalFish extends Internal.AbstractSchoolingFish implements Internal.VariantHolder<Internal.TropicalFish$Pattern> {
        constructor(arg0: Internal.EntityType_<Internal.TropicalFish>, arg1: Internal.Level_)
        modifyExpressionValue$dkm000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getDeathSound(): Internal.SoundEvent;
        onLeashDistance(arg0: number): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        shouldPassengersInheritMalus(): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        updateWalkAnimation(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        updateSwingTime(): void;
        setMotionZ(z: number): void;
        static getPatternColor(arg0: number): Internal.DyeColor;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        transition$setRawPosition(arg0: Vec3d_): void;
        isSpectator(): boolean;
        isAlwaysExperienceDropper(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        onFlap(): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        actuallyHurt(arg0: DamageSource_, arg1: number): void;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): Internal.Component;
        getBaseColor(): Internal.DyeColor;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        getPatternColor(): Internal.DyeColor;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        handler$ded000$parcool$onSetSprinting(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        bo$refreshEntityData(data: number): void;
        setOutOfCamera(value: boolean): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        getDefaultLootTable(): ResourceLocation;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        handleAirSupply(arg0: number): void;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        getVariant(): Internal.TropicalFish$Pattern;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        "setVariant(net.minecraft.world.entity.animal.TropicalFish$Pattern)"(arg0: Internal.TropicalFish$Pattern_): void;
        tickRidden(arg0: Internal.Player_, arg1: Vec3d_): void;
        getRandomX(arg0: number): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getAlpha(le: Internal.LivingEntity_, partialTicks: number): number;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        isSunBurnTick(): boolean;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        isAffectedByFluids(): boolean;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        getAmbientSound(): Internal.SoundEvent;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        isCulled(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        canBreatheUnderwater(): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getRiddenSpeed(arg0: Internal.Player_): number;
        processPortalCooldown(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getLeashHolder(): Internal.Entity;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        removeSoulSpeed(): void;
        shouldDropExperience(): boolean;
        getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        redirect$cic000$moonlight$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        getArrowCount(): number;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        handler$dec000$parcool$onIsInWall(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setVariant(arg0: Internal.TropicalFish$Pattern_): void;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        addFollowers(arg0: Internal.Stream_<Internal.AbstractSchoolingFish>): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canRide(arg0: Internal.Entity_): boolean;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        removeAfterChangingDimensions(): void;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getSharedFlag(arg0: number): boolean;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        tryAddFrost(): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        invokeShouldDropLoot(): boolean;
        removeVehicle(): void;
        defineSynchedData(): void;
        checkInsideBlocks(): void;
        setZ(z: number): void;
        hasFollowers(): boolean;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        wrapOperation$dab000$supplementaries$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        createHoverEvent(): Internal.HoverEvent;
        getPickupSound(): Internal.SoundEvent;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        serverAiStep(): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        setItemSlotAndDropWhenKilled(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        sendDebugPackets(): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        static packVariant(arg0: Internal.TropicalFish$Pattern_, arg1: Internal.DyeColor_, arg2: Internal.DyeColor_): number;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        canRandomSwim(): boolean;
        isPushedByFluid(): boolean;
        dropFromLootTable(arg0: DamageSource_, arg1: boolean): void;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        updateUsingItem(arg0: Internal.ItemStack_): void;
        canChangeDimensions(): boolean;
        modifyReturnValue$dkm000$create$onFireImmune(arg0: boolean): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        fromBucket(): boolean;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        isFollower(): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        static getPredefinedName(arg0: number): string;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        essential$getRealPrevRenderYaw(): number;
        enchantSpawnedArmor(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.EquipmentSlot_): void;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        repositionEntityAfterLoad(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        handler$dec000$parcool$onOnGround(arg0: Internal.CallbackInfoReturnable_<any>): void;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        playBlockFallSound(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        updateControlFlags(): void;
        createBodyControl(): Internal.BodyRotationControl;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        setPos(arg0: Vec3d_): void;
        enchantSpawnedWeapon(arg0: Internal.RandomSource_, arg1: number): void;
        populateDefaultEquipmentEnchantments(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        doPush(arg0: Internal.Entity_): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        stopFollowing(): void;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        /**
         * @deprecated
        */
        static saveDefaultDataToBucketTag(arg0: Internal.Mob_, arg1: Internal.ItemStack_): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isUsingItem(): boolean;
        essential$getRealRenderYaw(): number;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        jumpFromGround(): void;
        canReplaceCurrentItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        onChangedBlock(arg0: BlockPos_): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        pickUpItem(arg0: Internal.ItemEntity_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        calculateFallDamage(arg0: number, arg1: number): number;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateEffectVisibility(): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        getSoundVolume(): number;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        updateInvisibilityStatus(): void;
        saveToBucketTag(arg0: Internal.ItemStack_): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        static checkSurfaceWaterAnimalSpawnRules(arg0: Internal.EntityType_<Internal.WaterAnimal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        static getBaseColor(arg0: number): Internal.DyeColor;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        supp$setSlimedTicks(newSlimedTicks: number, sync: boolean): void;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        newFloatList(...arg0: number[]): Internal.ListTag;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        handler$zjk001$sodiumdynamiclights$onTick(ci: Internal.CallbackInfo_): void;
        getJumpControl(): Internal.JumpControl;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        handler$ded000$parcool$onClimbable(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        static bucketMobPickup<T extends Internal.LivingEntity & Internal.Bucketable>(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: T): Internal.Optional<Internal.InteractionResult>;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getBlockJumpFactor(): number;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        onSoulSpeedBlock(): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        playEntityOnFireExtinguishedSound(): void;
        setVariant(arg0: any): void;
        isFullyFrozen(): boolean;
        startFollowing(arg0: Internal.AbstractSchoolingFish_): Internal.AbstractSchoolingFish;
        dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        isInWall(): boolean;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setUseItem(arg0: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        dropExperience(): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        decreaseAirSupply(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        handler$bif000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        canBeFollowed(): boolean;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        onOffspringSpawnedFromEgg(arg0: Internal.Player_, arg1: Internal.Mob_): void;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        parCool$isLivingOnCustomLadder(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        bo$getRenderer(): Internal.EntityRenderer<any>;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        getDamageAfterMagicAbsorb(arg0: DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        tryAddSoulSpeed(): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        doWaterSplashEffect(): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        getMaxSchoolSize(): number;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getFlyingSpeed(): number;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        dropAllDeathLoot(arg0: DamageSource_): void;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        /**
         * @deprecated
        */
        static loadDefaultDataFromBucketTag(arg0: Internal.Mob_, arg1: Internal.CompoundTag_): void;
        tickLeash(): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        customServerAiStep(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        handleNetherPortal(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        static getPattern(arg0: number): Internal.TropicalFish$Pattern;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        followLeashSpeed(): number;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        triggerItemUseEffects(arg0: Internal.ItemStack_, arg1: number): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        /**
         * @deprecated
        */
        jumpInLiquid(arg0: Internal.TagKey_<Internal.Fluid>): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        reapplyPosition(): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        getWaterSlowDown(): number;
        createNavigation(arg0: Internal.Level_): Internal.PathNavigation;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        supp$getSlimedTicks(): number;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getRiddenInput(arg0: Internal.Player_, arg1: Vec3d_): Vec3d;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        dropEquipment(): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        addPassenger(arg0: Internal.Entity_): void;
        getSleepingPos(): Internal.Optional<any>;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getPermissionLevel(): number;
        getMotionZ(): number;
        nextStep(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        pushEntities(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        setFromBucket(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        setTimeout(): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        handler$zjk000$sodiumdynamiclights$onRemove(ci: Internal.CallbackInfo_): void;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        blockUsingShield(arg0: Internal.LivingEntity_): void;
        processFlappingMovement(): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        pathToLeader(): void;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        unsetRemoved(): void;
        getPickupReach(): Vec3i;
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        sdl$getLuminance(): number;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        populateDefaultEquipmentSlots(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        completeUsingItem(): void;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        brainProvider(): Internal.Brain$Provider<any>;
        getJumpPower(): number;
        registerGoals(): void;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        inRangeOfLeader(): boolean;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        removeEffectParticles(): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): Internal.Component;
        getTicksRequiredToFreeze(): number;
        shouldDespawnInPeaceful(): boolean;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        getFlopSound(): Internal.SoundEvent;
        handler$dec000$parcool$onGetEyeHeight(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getUsername(): string;
        transition$getRawPosition(): Vec3d;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        "setVariant(java.lang.Object)"(arg0: any): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): Internal.Component;
        static checkTropicalFishSpawnRules(arg0: Internal.EntityType_<Internal.TropicalFish>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        loadFromBucketTag(arg0: Internal.CompoundTag_): void;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        static tickEntity(entity: Internal.LivingEntity_): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getBucketItemStack(): Internal.ItemStack;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        playHurtSound(arg0: DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        setMotionX(x: number): void;
        shouldStayCloseToLeashHolder(): boolean;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        getMovementEmission(): Internal.Entity$MovementEmission;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        redirect$bhp000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: DamageSource_, amount: number): boolean;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        tickEffects(): void;
        isForcedVisible(): boolean;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        set culled(value: boolean)
        get onFire(): boolean
        get deathSound(): Internal.SoundEvent
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get alwaysExperienceDropper(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): Internal.Component
        get baseColor(): Internal.DyeColor
        get controlledVehicle(): Internal.Entity
        get patternColor(): Internal.DyeColor
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        set outOfCamera(value: boolean)
        get defaultLootTable(): ResourceLocation
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get variant(): Internal.TropicalFish$Pattern
        get maxFallDistance(): number
        get ticksFrozen(): number
        set "variant(net.minecraft.world.entity.animal.TropicalFish$Pattern)"(arg0: Internal.TropicalFish$Pattern_)
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get sunBurnTick(): boolean
        get affectedByFluids(): boolean
        get ambientSound(): Internal.SoundEvent
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get culled(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set variant(arg0: Internal.TropicalFish$Pattern_)
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get pickupSound(): Internal.SoundEvent
        get blocking(): boolean
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get fireImmuneTicks(): number
        get follower(): boolean
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        get soundVolume(): number
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get flapping(): boolean
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get blockJumpFactor(): number
        set variant(arg0: any)
        get fullyFrozen(): boolean
        get inWall(): boolean
        get meleeAttackReferencePosition(): Vec3d
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        set useItem(arg0: Internal.ItemStack_)
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get swimSound(): Internal.SoundEvent
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        get maxSchoolSize(): number
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get flyingSpeed(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get waterSlowDown(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get sleepingPos(): Internal.Optional<any>
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get permissionLevel(): number
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        set fromBucket(arg0: boolean)
        get offHandItem(): Internal.ItemStack
        get outOfCamera(): boolean
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get pickupReach(): Vec3i
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get immobile(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get jumpPower(): number
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): Internal.Component
        get typeName(): Internal.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get flopSound(): Internal.SoundEvent
        get username(): string
        set "variant(java.lang.Object)"(arg0: any)
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): Internal.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get bucketItemStack(): Internal.ItemStack
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get movementEmission(): Internal.Entity$MovementEmission
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly BUCKET_VARIANT_TAG: ("BucketVariantTag") & (string);
        static readonly COMMON_VARIANTS: ([Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant, Internal.TropicalFish$Variant]) & (Internal.List<Internal.TropicalFish$Variant>);
    }
    type TropicalFish_ = TropicalFish;
    interface BlockPredicate {
        abstract check(arg0: Internal.BlockContainerJS_): boolean;
        (arg0: Internal.BlockContainerJS): boolean;
    }
    type BlockPredicate_ = ((arg0: Internal.BlockContainerJS)=> boolean) | BlockPredicate;
    abstract class ChunkGenerator {
        constructor(arg0: Internal.BiomeSource_, arg1: Internal.Function_<Internal.Holder<Internal.Biome>, Internal.BiomeGenerationSettings>)
        constructor(arg0: Internal.BiomeSource_)
        createStructures(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGeneratorStructureState_, arg2: Internal.StructureManager_, arg3: Internal.ChunkAccess_, arg4: Internal.StructureTemplateManager_): void;
        getClass(): typeof any;
        abstract getSeaLevel(): number;
        applyBiomeDecoration(arg0: Internal.WorldGenLevel_, arg1: Internal.ChunkAccess_, arg2: Internal.StructureManager_): void;
        createState(arg0: Internal.HolderLookup_<Internal.StructureSet>, arg1: Internal.RandomState_, arg2: number): Internal.ChunkGeneratorStructureState;
        getBiomeSource(): Internal.BiomeSource;
        notify(): void;
        getMobsAt(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.StructureManager_, arg2: Internal.MobCategory_, arg3: BlockPos_): Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        getBiomeGenerationSettings(arg0: Internal.Holder_<Internal.Biome>): Internal.BiomeGenerationSettings;
        createReferences(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkAccess_): void;
        getNearestGeneratedStructure(arg0: Internal.Set_<Internal.Holder<Internal.Structure>>, arg1: Internal.ServerLevel_, arg2: Internal.StructureManager_, arg3: BlockPos_, arg4: boolean, arg5: Internal.ConcentricRingsStructurePlacement_): com.mojang.datafixers.util.Pair<BlockPos, Internal.Holder<Internal.Structure>>;
        abstract getBaseColumn(arg0: number, arg1: number, arg2: Internal.LevelHeightAccessor_, arg3: Internal.RandomState_): Internal.NoiseColumn;
        abstract spawnOriginalMobs(arg0: Internal.WorldGenRegion_): void;
        getTypeNameForDataFixer(): Internal.Optional<Internal.ResourceKey<Internal.Codec<Internal.ChunkGenerator>>>;
        abstract getMinY(): number;
        abstract addDebugScreenInfo(arg0: Internal.List_<string>, arg1: Internal.RandomState_, arg2: BlockPos_): void;
        abstract codec(): Internal.Codec<Internal.ChunkGenerator>;
        abstract applyCarvers(arg0: Internal.WorldGenRegion_, arg1: number, arg2: Internal.RandomState_, arg3: Internal.BiomeManager_, arg4: Internal.StructureManager_, arg5: Internal.ChunkAccess_, arg6: Internal.GenerationStep$Carving_): void;
        getFirstFreeHeight(arg0: number, arg1: number, arg2: Internal.Heightmap$Types_, arg3: Internal.LevelHeightAccessor_, arg4: Internal.RandomState_): number;
        toString(): string;
        getSpawnHeight(arg0: Internal.LevelHeightAccessor_): number;
        abstract getGenDepth(): number;
        notifyAll(): void;
        abstract getBaseHeight(arg0: number, arg1: number, arg2: Internal.Heightmap$Types_, arg3: Internal.LevelHeightAccessor_, arg4: Internal.RandomState_): number;
        hashCode(): number;
        abstract buildSurface(arg0: Internal.WorldGenRegion_, arg1: Internal.StructureManager_, arg2: Internal.RandomState_, arg3: Internal.ChunkAccess_): void;
        abstract fillFromNoise(arg0: Internal.Executor_, arg1: Internal.Blender_, arg2: Internal.RandomState_, arg3: Internal.StructureManager_, arg4: Internal.ChunkAccess_): Internal.CompletableFuture<Internal.ChunkAccess>;
        wait(): void;
        createBiomes(arg0: Internal.Executor_, arg1: Internal.RandomState_, arg2: Internal.Blender_, arg3: Internal.StructureManager_, arg4: Internal.ChunkAccess_): Internal.CompletableFuture<Internal.ChunkAccess>;
        wait(arg0: number): void;
        getFirstOccupiedHeight(arg0: number, arg1: number, arg2: Internal.Heightmap$Types_, arg3: Internal.LevelHeightAccessor_, arg4: Internal.RandomState_): number;
        equals(arg0: any): boolean;
        findNearestMapStructure(arg0: Internal.ServerLevel_, arg1: Internal.HolderSet_<Internal.Structure>, arg2: BlockPos_, arg3: number, arg4: boolean): com.mojang.datafixers.util.Pair<BlockPos, Internal.Holder<Internal.Structure>>;
        get class(): typeof any
        get seaLevel(): number
        get biomeSource(): Internal.BiomeSource
        get typeNameForDataFixer(): Internal.Optional<Internal.ResourceKey<Internal.Codec<Internal.ChunkGenerator>>>
        get minY(): number
        get genDepth(): number
        readonly biomeSource: Internal.BiomeSource;
        static readonly CODEC: Internal.Codec<Internal.ChunkGenerator>;
    }
    type ChunkGenerator_ = ChunkGenerator;
    interface ClientLevelKJS extends Internal.LevelKJS {
        getDisplayName(): Internal.Component;
        "getBlock(net.minecraft.world.level.block.entity.BlockEntity)"(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getDimension(): ResourceLocation;
        getName(): Internal.Component;
        self(): Internal.Level;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        runCommandSilent(command: string): number;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        tell(message: Internal.Component_): void;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        abstract getData(): Internal.AttachedData<Internal.Level>;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        setStatusMessage(message: Internal.Component_): void;
        getPlayers(): Internal.EntityArrayList;
        "getBlock(net.minecraft.core.BlockPos)"(pos: BlockPos_): Internal.BlockContainerJS;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        getSide(): Internal.ScriptType;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        get displayName(): Internal.Component
        get dimension(): ResourceLocation
        get name(): Internal.Component
        get entities(): Internal.EntityArrayList
        get data(): Internal.AttachedData<Internal.Level>
        set statusMessage(message: Internal.Component_)
        get players(): Internal.EntityArrayList
        get side(): Internal.ScriptType
        get overworld(): boolean
        (): Internal.AttachedData_<Internal.Level>;
    }
    type ClientLevelKJS_ = ClientLevelKJS | (()=> Internal.AttachedData_<Internal.Level>);
    class ParsedCommandNode <S> {
        constructor(arg0: Internal.CommandNode_<S>, arg1: Internal.StringRange_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        getRange(): Internal.StringRange;
        wait(arg0: number, arg1: number): void;
        getNode(): Internal.CommandNode<S>;
        get class(): typeof any
        get range(): Internal.StringRange
        get node(): Internal.CommandNode<S>
    }
    type ParsedCommandNode_<S> = ParsedCommandNode<S>;
    class StructureTemplatePool$Projection extends Internal.Enum<Internal.StructureTemplatePool$Projection> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static values(): Internal.StructureTemplatePool$Projection[];
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.StructureTemplatePool$Projection;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        getName(): string;
        static byName(arg0: string): Internal.StructureTemplatePool$Projection;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        getProcessors(): Internal.ImmutableList<Internal.StructureProcessor>;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.StructureTemplatePool$Projection>>;
        ordinal(): number;
        wait(): void;
        "compareTo(net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection)"(arg0: Internal.StructureTemplatePool$Projection_): number;
        wait(arg0: number): void;
        compareTo(arg0: Internal.StructureTemplatePool$Projection_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.StructureTemplatePool$Projection;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.StructureTemplatePool$Projection
        get name(): string
        get processors(): Internal.ImmutableList<Internal.StructureProcessor>
        static readonly TERRAIN_MATCHING: (Internal.StructureTemplatePool$Projection) & (Internal.StructureTemplatePool$Projection);
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.StructureTemplatePool$Projection>;
        static readonly RIGID: (Internal.StructureTemplatePool$Projection) & (Internal.StructureTemplatePool$Projection);
    }
    type StructureTemplatePool$Projection_ = "terrain_matching" | StructureTemplatePool$Projection | "rigid";
    class ShulkerFillLevelAttribute$Type implements Internal.ItemAttributeType {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getAllAttributes(arg0: Internal.ItemStack_, arg1: Internal.Level_): Internal.List<Internal.ItemAttribute>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        createAttribute(): Internal.ItemAttribute;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ShulkerFillLevelAttribute$Type_ = ShulkerFillLevelAttribute$Type;
    class GlobalStation extends Internal.SingleBlockEntityEdgePoint {
        constructor()
        runMailTransfer(): void;
        getClass(): typeof any;
        write(arg0: Internal.CompoundTag_, arg1: Internal.DimensionPalette_): void;
        canApproachFrom(arg0: Internal.TrackNode_): boolean;
        read(arg0: Internal.CompoundTag_, arg1: boolean, arg2: Internal.DimensionPalette_): void;
        cancelReservation(arg0: Internal.Train_): void;
        canNavigateVia(arg0: Internal.TrackNode_): boolean;
        getType(): Internal.EdgePointType<any>;
        getBlockEntityDimension(): Internal.ResourceKey<Internal.Level>;
        reserveFor(arg0: Internal.Train_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        canMerge(): boolean;
        setType(arg0: Internal.EdgePointType_<any>): void;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.DimensionPalette_): void;
        isPrimary(arg0: Internal.TrackNode_): boolean;
        canCoexistWith(arg0: Internal.EdgePointType_<any>, arg1: boolean): boolean;
        setId(arg0: Internal.UUID_): void;
        "write(net.minecraft.network.FriendlyByteBuf,com.simibubi.create.content.trains.graph.DimensionPalette)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.DimensionPalette_): void;
        toString(): string;
        getNearestTrain(): Internal.Train;
        notifyAll(): void;
        getPresentTrain(): Internal.Train;
        trainDeparted(arg0: Internal.Train_): void;
        onRemoved(arg0: Internal.TrackGraph_): void;
        blockEntityRemoved(arg0: BlockPos_, arg1: boolean): void;
        invalidate(arg0: Internal.LevelAccessor_): void;
        tick(arg0: Internal.TrackGraph_, arg1: boolean): void;
        hashCode(): number;
        read(arg0: Internal.FriendlyByteBuf_, arg1: Internal.DimensionPalette_): void;
        getImminentTrain(): Internal.Train;
        wait(): void;
        "write(net.minecraft.nbt.CompoundTag,com.simibubi.create.content.trains.graph.DimensionPalette)"(arg0: Internal.CompoundTag_, arg1: Internal.DimensionPalette_): void;
        getId(): Internal.UUID;
        wait(arg0: number): void;
        getBlockEntityPos(): BlockPos;
        setLocation(arg0: Internal.Couple_<Internal.TrackNodeLocation>, arg1: number): void;
        blockEntityAdded(arg0: Internal.BlockEntity_, arg1: boolean): void;
        getLocationOn(arg0: Internal.TrackEdge_): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get type(): Internal.EdgePointType<any>
        get blockEntityDimension(): Internal.ResourceKey<Internal.Level>
        set type(arg0: Internal.EdgePointType_<any>)
        set id(arg0: Internal.UUID_)
        get nearestTrain(): Internal.Train
        get presentTrain(): Internal.Train
        get imminentTrain(): Internal.Train
        get id(): Internal.UUID
        get blockEntityPos(): BlockPos
        name: string;
        connectedPorts: Internal.Map<BlockPos, Internal.GlobalPackagePort>;
        assembling: boolean;
        nearestTrain: Internal.WeakReference<Internal.Train>;
    }
    type GlobalStation_ = GlobalStation;
    abstract class BaseContainerBlockEntity extends Internal.BlockEntity implements Internal.Container, Internal.Nameable, Internal.MenuProvider {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        handler$bfi000$setRemoved(arg0: Internal.CallbackInfo_): void;
        load(arg0: Internal.CompoundTag_): void;
        abstract setChanged(): void;
        setCulled(value: boolean): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setTimeout(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        abstract "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        isOutOfCamera(): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        isCulled(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        abstract getItem(arg0: number): Internal.ItemStack;
        abstract getDefaultName(): Internal.Component;
        getCustomName(): Internal.Component;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        setCustomName(arg0: Internal.Component_): void;
        countItem(arg0: Internal.Item_): number;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        shouldCloseCurrentScreen(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        getHeight(): number;
        sdl$getDynamicLightX(): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        clear(): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getAttached(type: Internal.AttachmentType_<any>): any;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getRenderAttachmentData(): any;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        getSlots(): number;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        onLoad(): void;
        abstract getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        handler$bfi000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        createUnSidedHandler(): Internal.IItemHandler;
        abstract createMenu(arg0: number, arg1: Internal.Inventory_): Internal.AbstractContainerMenu;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setOutOfCamera(value: boolean): void;
        abstract isEmpty(): boolean;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        asContainer(): Internal.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        isForcedVisible(): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        abstract stillValid(arg0: Internal.Player_): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        static canUnlock(arg0: Internal.Player_, arg1: Internal.LockCode_, arg2: Internal.Component_): boolean;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        canOpen(arg0: Internal.Player_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        set culled(value: boolean)
        get outOfCamera(): boolean
        get width(): number
        get "empty()"(): boolean
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get defaultName(): Internal.Component
        get customName(): Internal.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): Internal.Component
        get class(): typeof any
        set customName(arg0: Internal.Component_)
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get height(): number
        get persistentData(): Internal.CompoundTag
        get renderAttachmentData(): any
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        get containerSize(): number
        get name(): Internal.Component
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        set outOfCamera(value: boolean)
        get empty(): boolean
        get level(): Internal.Level
        get allItems(): Internal.List<Internal.ItemStack>
        get forcedVisible(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        get mutable(): boolean
        lockKey: Internal.LockCode;
    }
    type BaseContainerBlockEntity_ = BaseContainerBlockEntity;
    abstract class ScreenEvent$MouseScrolled extends Internal.ScreenEvent$MouseInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getMouseX(): number;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        getMouseY(): number;
        isCanceled(): boolean;
        notify(): void;
        invokeGetGui(): Internal.Screen;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getScrollDelta(): number;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get mouseX(): number
        get screen(): Internal.Screen
        get mouseY(): number
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get scrollDelta(): number
    }
    type ScreenEvent$MouseScrolled_ = ScreenEvent$MouseScrolled;
    class BlockPositionSource implements Internal.PositionSource {
        constructor(arg0: BlockPos_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getType(): Internal.PositionSourceType<any>;
        equals(arg0: any): boolean;
        notify(): void;
        getPosition(arg0: Internal.Level_): Internal.Optional<Vec3d>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get type(): Internal.PositionSourceType<any>
        readonly pos: BlockPos;
        static readonly CODEC: Internal.Codec<Internal.BlockPositionSource>;
    }
    type BlockPositionSource_ = BlockPositionSource;
    interface OptionInstance$TooltipSupplier <T> {
        abstract apply(arg0: T): Internal.Tooltip;
        (arg0: T): Internal.Tooltip_;
    }
    type OptionInstance$TooltipSupplier_<T> = OptionInstance$TooltipSupplier<T> | ((arg0: T)=> Internal.Tooltip_);
    interface MessageSizeEstimator {
        abstract newHandle(): Internal.MessageSizeEstimator$Handle;
        (): Internal.MessageSizeEstimator$Handle_;
    }
    type MessageSizeEstimator_ = (()=> Internal.MessageSizeEstimator$Handle_) | MessageSizeEstimator;
    class BlockColumnFeature extends Internal.Feature<Internal.BlockColumnConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.BlockColumnConfiguration>)
        getClass(): typeof any;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.BlockColumnConfiguration, Internal.Feature<Internal.BlockColumnConfiguration>>>;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        place(arg0: Internal.BlockColumnConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        place(arg0: Internal.FeaturePlaceContext_<Internal.BlockColumnConfiguration>): boolean;
        get class(): typeof any
    }
    type BlockColumnFeature_ = BlockColumnFeature;
    class ClientboundAddPlayerPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Player_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getxRot(): number;
        toString(): string;
        notifyAll(): void;
        getyRot(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getX(): number;
        getY(): number;
        getZ(): number;
        getPlayerId(): Internal.UUID;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getEntityId(): number;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get xRot(): number
        get yRot(): number
        get skippable(): boolean
        get x(): number
        get y(): number
        get z(): number
        get playerId(): Internal.UUID
        get entityId(): number
    }
    type ClientboundAddPlayerPacket_ = ClientboundAddPlayerPacket;
    class BiomeManager implements Internal.BiomeManagerAccessor {
        constructor(arg0: Internal.BiomeManager$NoiseBiomeSource_, arg1: number)
        getClass(): typeof any;
        withDifferentSource(arg0: Internal.BiomeManager$NoiseBiomeSource_): this;
        mfix$getZoomSeed(): number;
        toString(): string;
        notifyAll(): void;
        getNoiseBiomeAtPosition(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        static obfuscateSeed(arg0: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        mfix$getBiomeSource(): Internal.BiomeManager$NoiseBiomeSource;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        hashCode(): number;
        wait(): void;
        getNoiseBiomeAtQuart(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getNoiseBiomeAtPosition(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        get class(): typeof any
        static readonly CHUNK_CENTER_QUART: (2) & (number);
        readonly biomeZoomSeed: number;
    }
    type BiomeManager_ = BiomeManager;
    class FlammableEffect extends Internal.MobEffect {
        constructor()
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(pLivingEntity: Internal.LivingEntity_, pAttributeMap: Internal.AttributeMap_, pAmplifier: number): void;
        applyInstantenousEffect(pSource: Internal.Entity_, pIndirectSource: Internal.Entity_, pLivingEntity: Internal.LivingEntity_, pAmplifier: number, pHealth: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getColor(): number;
        getEffectRendererInternal(): any;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        removeAttributeModifiers(pLivingEntity: Internal.LivingEntity_, pAttributeMap: Internal.AttributeMap_, pAmplifier: number): void;
        applyEffectTick(pLivingEntity: Internal.LivingEntity_, pAmplifier: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(duration: number, amplifier: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): Internal.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get color(): number
        get effectRendererInternal(): any
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        get orCreateDescriptionId(): string
    }
    type FlammableEffect_ = FlammableEffect;
    class ShulkerBoxColoring extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        notify(): void;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type ShulkerBoxColoring_ = ShulkerBoxColoring;
    interface FabricBlockView {
        hasBiomes(): boolean;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<Internal.Biome>;
    }
    type FabricBlockView_ = FabricBlockView;
    class SculkSpreader$ChargeCursor {
        constructor(arg0: BlockPos_, arg1: number)
        getClass(): typeof any;
        getCharge(): number;
        toString(): string;
        notifyAll(): void;
        getFacingData(): Internal.Set<Internal.Direction>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        update(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.SculkSpreader_, arg4: boolean): void;
        getPos(): BlockPos;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        mergeWith(arg0: Internal.SculkSpreader$ChargeCursor_): void;
        getDecayDelay(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get charge(): number
        get facingData(): Internal.Set<Internal.Direction>
        get pos(): BlockPos
        get decayDelay(): number
        static readonly MAX_CURSOR_DECAY_DELAY: (1) & (number);
        charge: number;
        static readonly CODEC: Internal.Codec<Internal.SculkSpreader$ChargeCursor>;
    }
    type SculkSpreader$ChargeCursor_ = SculkSpreader$ChargeCursor;
    class TableClothBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        handler$ckh000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static updateState<T extends Internal.Comparable<T>>(arg0: Internal.BlockState_, arg1: Internal.Property_<T>, arg2: string): Internal.BlockState;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        overrideFood(arg0: Internal.FoodProperties_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        handler$bfp000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type TableClothBlockItem_ = TableClothBlockItem;
    interface FabricLootPoolBuilder {
        "with"(entry: Internal.LootPoolEntryContainer_): Internal.LootPool$Builder;
        "with(java.util.Collection)"(entries: Internal.Collection_<Internal.LootPoolEntryContainer>): Internal.LootPool$Builder;
        apply(functions: Internal.Collection_<Internal.LootItemFunction>): Internal.LootPool$Builder;
        "with(net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer)"(entry: Internal.LootPoolEntryContainer_): Internal.LootPool$Builder;
        copyOf(pool: Internal.LootPool_): Internal.LootPool$Builder;
        "with"(entries: Internal.Collection_<Internal.LootPoolEntryContainer>): Internal.LootPool$Builder;
        conditionally(conditions: Internal.Collection_<Internal.LootItemCondition>): Internal.LootPool$Builder;
        conditionally(condition: Internal.LootItemCondition_): Internal.LootPool$Builder;
        "apply(java.util.Collection)"(functions: Internal.Collection_<Internal.LootItemFunction>): Internal.LootPool$Builder;
        "conditionally(net.minecraft.world.level.storage.loot.predicates.LootItemCondition)"(condition: Internal.LootItemCondition_): Internal.LootPool$Builder;
        "conditionally(java.util.Collection)"(conditions: Internal.Collection_<Internal.LootItemCondition>): Internal.LootPool$Builder;
        apply(function_: Internal.LootItemFunction_): Internal.LootPool$Builder;
        "apply(net.minecraft.world.level.storage.loot.functions.LootItemFunction)"(function_: Internal.LootItemFunction_): Internal.LootPool$Builder;
    }
    type FabricLootPoolBuilder_ = FabricLootPoolBuilder;
    abstract class AbstractFurnaceBlockEntity extends Internal.BaseContainerBlockEntity implements Internal.StackedContentsCompatible, Internal.RecipeHolder, Internal.WorldlyContainer, Internal.SpecialLogicInventory {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.RecipeType_<Internal.AbstractCookingRecipe>)
        stopOpen(arg0: Internal.Player_): void;
        static serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.AbstractFurnaceBlockEntity_): void;
        requestModelDataUpdate(): void;
        fabric_setSuppress(suppress: boolean): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        getBurnDuration(arg0: Internal.ItemStack_): number;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        handler$bfi000$setRemoved(arg0: Internal.CallbackInfo_): void;
        load(arg0: Internal.CompoundTag_): void;
        abstract setChanged(): void;
        setCulled(value: boolean): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setTimeout(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        isOutOfCamera(): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        static add(arg0: Internal.Map_<Internal.Item, number>, arg1: Internal.TagKey_<Internal.Item>, arg2: number): void;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        isCulled(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getRecipeUsed(): Internal.Recipe<any>;
        static "add(java.util.Map,net.minecraft.tags.TagKey,int)"(arg0: Internal.Map_<Internal.Item, number>, arg1: Internal.TagKey_<Internal.Item>, arg2: number): void;
        getItem(arg0: number): Internal.ItemStack;
        setRecipeUsed(arg0: Internal.Recipe_<any>): void;
        static add(arg0: Internal.Map_<Internal.Item, number>, arg1: Internal.ItemLike_, arg2: number): void;
        abstract getDefaultName(): Internal.Component;
        getCustomName(): Internal.Component;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        setCustomName(arg0: Internal.Component_): void;
        countItem(arg0: Internal.Item_): number;
        static isFuel(arg0: Internal.ItemStack_): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        startOpen(arg0: Internal.Player_): void;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        canPlaceItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        shouldCloseCurrentScreen(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        static "add(java.util.Map,net.minecraft.world.level.ItemLike,int)"(arg0: Internal.Map_<Internal.Item, number>, arg1: Internal.ItemLike_, arg2: number): void;
        handler$cei000$fabric_transfer_api_v1$setStackSuppressUpdate(slot: number, stack: Internal.ItemStack_, ci: Internal.CallbackInfo_): void;
        getHeight(): number;
        sdl$getDynamicLightX(): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        setRecipeUsed(arg0: Internal.Level_, arg1: Internal.ServerPlayer_, arg2: Internal.Recipe_<any>): boolean;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        fillStackedContents(arg0: Internal.StackedContents_): void;
        sdl$dynamicLightTick(): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        clear(): void;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        clearContent(): void;
        reviveCaps(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getRecipesToAwardAndPopExperience(arg0: Internal.ServerLevel_, arg1: Vec3d_): Internal.List<Internal.Recipe<any>>;
        getAttached(type: Internal.AttachmentType_<any>): any;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getRenderAttachmentData(): any;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        awardUsedRecipes(arg0: Internal.Player_, arg1: Internal.List_<Internal.ItemStack>): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        getSlots(): number;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        /**
         * @deprecated
        */
        static getFuel(): Internal.Map<Internal.Item, number>;
        onLoad(): void;
        fabric_onFinalCommit(slot: number, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): void;
        getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getSlotsForFace(arg0: Internal.Direction_): number[];
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        awardUsedRecipesAndPopExperience(arg0: Internal.ServerPlayer_): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        fabric_onTransfer(slot: number, transaction: Internal.TransactionContext_): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        handler$bfi000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        createUnSidedHandler(): Internal.IItemHandler;
        abstract createMenu(arg0: number, arg1: Internal.Inventory_): Internal.AbstractContainerMenu;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setOutOfCamera(value: boolean): void;
        isEmpty(): boolean;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        asContainer(): Internal.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        isForcedVisible(): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        stillValid(arg0: Internal.Player_): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        static canUnlock(arg0: Internal.Player_, arg1: Internal.LockCode_, arg2: Internal.Component_): boolean;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        canOpen(arg0: Internal.Player_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        set culled(value: boolean)
        get outOfCamera(): boolean
        get width(): number
        get "empty()"(): boolean
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get recipeUsed(): Internal.Recipe<any>
        set recipeUsed(arg0: Internal.Recipe_<any>)
        get defaultName(): Internal.Component
        get customName(): Internal.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): Internal.Component
        get class(): typeof any
        set customName(arg0: Internal.Component_)
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get height(): number
        get persistentData(): Internal.CompoundTag
        get renderAttachmentData(): any
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        /**
         * @deprecated
        */
        get fuel(): Internal.Map<Internal.Item, number>
        get containerSize(): number
        get name(): Internal.Component
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        set outOfCamera(value: boolean)
        get empty(): boolean
        get level(): Internal.Level
        get allItems(): Internal.List<Internal.ItemStack>
        get forcedVisible(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        get mutable(): boolean
        readonly dataAccess: Internal.ContainerData;
        handlers: Internal.LazyOptional<Internal.IItemHandler>[];
        static readonly DATA_LIT_DURATION: (1) & (number);
        static readonly DATA_COOKING_PROGRESS: (2) & (number);
        static readonly BURN_TIME_STANDARD: (200) & (number);
        static readonly SLOT_INPUT: (0) & (number);
        static readonly DATA_COOKING_TOTAL_TIME: (3) & (number);
        items: Internal.NonNullList<Internal.ItemStack>;
        static readonly SLOT_FUEL: (1) & (number);
        static readonly SLOT_RESULT: (2) & (number);
        static readonly NUM_DATA_VALUES: (4) & (number);
        cookingProgress: number;
        static readonly DATA_LIT_TIME: (0) & (number);
        litTime: number;
        litDuration: number;
        cookingTotalTime: number;
        static readonly BURN_COOL_SPEED: (2) & (number);
    }
    type AbstractFurnaceBlockEntity_ = AbstractFurnaceBlockEntity;
    interface DynamicLightSource {
        abstract sdl$resetDynamicLight(): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        abstract sdl$dynamicLightTick(): void;
        sdl$isDynamicLightEnabled(): boolean;
        abstract sdl$getDynamicLightZ(): number;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        abstract sdl$getDynamicLightY(): number;
        abstract sdl$getLuminance(): number;
        abstract sdl$getDynamicLightX(): number;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
    }
    type DynamicLightSource_ = DynamicLightSource;
    class ItemVaultMountedStorage extends Internal.WrapperMountedItemStorage<Internal.ItemStackHandler> {
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        unmount(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        isEmpty(): boolean;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(i: number, i1: number, b: boolean): Internal.ItemStack;
        wait(arg0: number, arg1: number): void;
        find(): number;
        getSlots(): number;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        "getSlots()"(): number;
        static copyToItemStackHandler(arg0: Internal.IItemHandler_): Internal.ItemStackHandler;
        kjs$self(): Internal.IItemHandler;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(i: number): Internal.ItemStack;
        static fromVault(arg0: Internal.ItemVaultBlockEntity_): Internal.ItemVaultMountedStorage;
        asContainer(): Internal.Container;
        "getSlotLimit(int)"(arg0: number): number;
        toString(): string;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(i: number, itemStack: Internal.ItemStack_): boolean;
        hashCode(): number;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): void;
        handleInteraction(arg0: Internal.ServerPlayer_, arg1: Internal.Contraption_, arg2: Internal.StructureTemplate$StructureBlockInfo_): boolean;
        static fromLegacy(arg0: Internal.CompoundTag_): Internal.ItemVaultMountedStorage;
        wait(): void;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        equals(arg0: any): boolean;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        get class(): typeof any
        get empty(): boolean
        get slots(): number
        get "slots()"(): number
        get height(): number
        get width(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        static readonly CODEC: Internal.Codec<Internal.ItemVaultMountedStorage>;
    }
    type ItemVaultMountedStorage_ = ItemVaultMountedStorage;
    class TagEntry {
        constructor(arg0: ResourceLocation_, arg1: boolean, arg2: boolean)
        getClass(): typeof any;
        static tag(arg0: ResourceLocation_): Internal.TagEntry;
        isTag(): boolean;
        toString(): string;
        visitOptionalDependencies(arg0: Internal.Consumer_<ResourceLocation>): void;
        notifyAll(): void;
        static optionalTag(arg0: ResourceLocation_): Internal.TagEntry;
        notify(): void;
        visitRequiredDependencies(arg0: Internal.Consumer_<ResourceLocation>): void;
        static optionalElement(arg0: ResourceLocation_): Internal.TagEntry;
        wait(arg0: number, arg1: number): void;
        build<T>(arg0: Internal.TagEntry$Lookup_<T>, arg1: Internal.Consumer_<T>): boolean;
        hashCode(): number;
        getId(): ResourceLocation;
        verifyIfPresent(arg0: Internal.Predicate_<ResourceLocation>, arg1: Internal.Predicate_<ResourceLocation>): boolean;
        isRequired(): boolean;
        wait(): void;
        wait(arg0: number): void;
        elementOrTag(): Internal.ExtraCodecs$TagOrElementLocation;
        static element(arg0: ResourceLocation_): Internal.TagEntry;
        equals(arg0: any): boolean;
        get class(): typeof any
        get tag(): boolean
        get id(): ResourceLocation
        get required(): boolean
        readonly required: boolean;
        readonly id: ResourceLocation;
        static readonly CODEC: Internal.Codec<Internal.TagEntry>;
        readonly tag: boolean;
    }
    type TagEntry_ = TagEntry;
    class BaseFullMineBlock extends Internal.ExplosiveBlock implements Internal.IBlockMine, Internal.IOverlayDisplay {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Block_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        activateMine(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        explodesWhenInteractedWith(): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        static getStoredDestroyTime(): number;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isActive(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        isDefusable(): boolean;
        shouldShowSCInfo(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): boolean;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        static withReinforcedDestroyTime(arg0: Internal.BlockBehaviour$Properties_): Internal.BlockBehaviour$Properties;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        defaultDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        getDisplayStack(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.ItemStack;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        getBlockDisguisedAs(): Internal.Block;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        explode(arg0: Internal.Level_, arg1: BlockPos_): void;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        defuseMine(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get storedDestroyTime(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get defusable(): boolean
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get blockDisguisedAs(): Internal.Block
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BaseFullMineBlock_ = BaseFullMineBlock;
    class ExplosionEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Level_, arg1: Internal.Explosion_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getExplosion(): Internal.Explosion;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get level(): Internal.Level
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get explosion(): Internal.Explosion
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ExplosionEvent_ = ExplosionEvent;
    class Ticket <T> implements Internal.Comparable<Internal.Ticket<any>> {
        constructor(arg0: Internal.TicketType_<T>, arg1: number, arg2: T)
        constructor(arg0: Internal.TicketType_<T>, arg1: number, arg2: T, arg3: boolean)
        timedOut(arg0: number): boolean;
        getClass(): typeof any;
        getType(): Internal.TicketType<T>;
        setCreatedTick(arg0: number): void;
        toString(): string;
        getTicketLevel(): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        isForceTicks(): boolean;
        hashCode(): number;
        "compareTo(net.minecraft.server.level.Ticket)"(arg0: Internal.Ticket_<any>): number;
        wait(): void;
        compareTo(arg0: Internal.Ticket_<any>): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get type(): Internal.TicketType<T>
        set createdTick(arg0: number)
        get ticketLevel(): number
        get forceTicks(): boolean
    }
    type Ticket_<T> = Ticket<T>;
    interface IForgeCommandSourceStack {
        getRecipeManager(): Internal.RecipeManager;
        getAdvancement(arg0: ResourceLocation_): Internal.Advancement;
        getUnsidedLevel(): Internal.Level;
        getScoreboard(): Internal.Scoreboard;
        get recipeManager(): Internal.RecipeManager
        get unsidedLevel(): Internal.Level
        get scoreboard(): Internal.Scoreboard
    }
    type IForgeCommandSourceStack_ = IForgeCommandSourceStack;
    class SoundBufferLibrary {
        constructor(arg0: Internal.ResourceProvider_)
        getClass(): typeof any;
        getStream(arg0: ResourceLocation_, arg1: boolean): Internal.CompletableFuture<Internal.AudioStream>;
        preload(arg0: Internal.Collection_<Internal.Sound>): Internal.CompletableFuture<any>;
        toString(): string;
        notifyAll(): void;
        getCompleteBuffer(arg0: ResourceLocation_): Internal.CompletableFuture<Internal.SoundBuffer>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type SoundBufferLibrary_ = SoundBufferLibrary;
    class PlayerEnderChestContainer extends Internal.SimpleContainer {
        constructor()
        stopOpen(arg0: Internal.Player_): void;
        static tryClear(arg0: any): void;
        fabric_setSuppress(suppress: boolean): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        setChanged(): void;
        fabric_onFinalCommit(slot: number, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): void;
        getContainerSize(): number;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        "isEmpty()"(): boolean;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        fabric_onTransfer(slot: number, transaction: Internal.TransactionContext_): void;
        wait(): void;
        removeItemType(arg0: Internal.Item_, arg1: number): Internal.ItemStack;
        getItem(arg0: number): Internal.ItemStack;
        redirect$ceo000$fabric_transfer_api_v1$fabric_redirectMarkDirty(self: Internal.SimpleContainer_): void;
        addListener(arg0: net.minecraft.world.ContainerListener_): void;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        startOpen(arg0: Internal.Player_): void;
        addItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        isActiveChest(arg0: Internal.EnderChestBlockEntity_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        fromTag(arg0: Internal.ListTag_): void;
        canAddItem(arg0: Internal.ItemStack_): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        removeListener(arg0: net.minecraft.world.ContainerListener_): void;
        getHeight(): number;
        setActiveChest(arg0: Internal.EnderChestBlockEntity_): void;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        createTag(): Internal.ListTag;
        toString(): string;
        removeAllItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        fillStackedContents(arg0: Internal.StackedContents_): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        stillValid(arg0: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        hashCode(): number;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        equals(arg0: any): boolean;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get "empty()"(): boolean
        get class(): typeof any
        get empty(): boolean
        get height(): number
        set activeChest(arg0: Internal.EnderChestBlockEntity_)
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type PlayerEnderChestContainer_ = PlayerEnderChestContainer;
    interface HolderSet <T> extends Internal.Iterable<Internal.Holder<T>>, Internal.IForgeHolderSet<T> {
        abstract unwrap(): Internal.Either<Internal.TagKey<T>, Internal.List<Internal.Holder<T>>>;
        abstract iterator(): Internal.Iterator<Internal.Holder<T>>;
        serializationType(): Internal.IForgeHolderSet$SerializationType;
        /**
         * @deprecated
        */
        emptyNamed<T>(arg0: Internal.HolderOwner_<T>, arg1: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        abstract unwrapKey(): Internal.Optional<Internal.TagKey<T>>;
        abstract get(arg0: number): Internal.Holder<T>;
        spliterator(): Internal.Spliterator<Internal.Holder<T>>;
        "direct(java.util.function.Function,java.lang.Object[])"<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, ...arg1: E[]): Internal.HolderSet$Direct<T>;
        "direct(java.util.function.Function,java.util.List)"<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, arg1: Internal.List_<E>): Internal.HolderSet$Direct<T>;
        abstract stream(): Internal.Stream<Internal.Holder<T>>;
        "direct(net.minecraft.core.Holder[])"<T>(...arg0: Internal.Holder_<T>[]): Internal.HolderSet$Direct<T>;
        abstract canSerializeIn(arg0: Internal.HolderOwner_<T>): boolean;
        abstract size(): number;
        direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, ...arg1: E[]): Internal.HolderSet$Direct<T>;
        abstract contains(arg0: Internal.Holder_<T>): boolean;
        direct<T>(...arg0: Internal.Holder_<T>[]): Internal.HolderSet$Direct<T>;
        forEach(arg0: Internal.Consumer_<Internal.Holder<T>>): void;
        direct<T>(arg0: Internal.List_<Internal.Holder<T>>): Internal.HolderSet$Direct<T>;
        addInvalidationListener(arg0: Internal.Runnable_): void;
        abstract getRandomElement(arg0: Internal.RandomSource_): Internal.Optional<Internal.Holder<T>>;
        "direct(java.util.List)"<T>(arg0: Internal.List_<Internal.Holder<T>>): Internal.HolderSet$Direct<T>;
        direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, arg1: Internal.List_<E>): Internal.HolderSet$Direct<T>;
    }
    type HolderSet_<T> = HolderSet<T>;
    class WoolCarpetBlock extends Internal.CarpetBlock {
        constructor(arg0: Internal.DyeColor_, arg1: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        getColor(): Internal.DyeColor;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get color(): Internal.DyeColor
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type WoolCarpetBlock_ = WoolCarpetBlock;
    class TraderLlama extends Internal.Llama {
        constructor(arg0: Internal.EntityType_<Internal.TraderLlama>, arg1: Internal.Level_)
        modifyExpressionValue$dkm000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getDeathSound(): Internal.SoundEvent;
        getOwner(): Internal.LivingEntity;
        setDidSpit(arg0: boolean): void;
        onLeashDistance(arg0: number): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        shouldPassengersInheritMalus(): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        updateWalkAnimation(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        updateSwingTime(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        transition$setRawPosition(arg0: Vec3d_): void;
        isSpectator(): boolean;
        isAlwaysExperienceDropper(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        onFlap(): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        actuallyHurt(arg0: DamageSource_, arg1: number): void;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isEating(): boolean;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getInventorySize(): number;
        handleEating(arg0: Internal.Player_, arg1: Internal.ItemStack_): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getName(): Internal.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        playGallopSound(arg0: SoundType_): void;
        tick(): void;
        createInventory(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        handler$ded000$parcool$onSetSprinting(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        bo$refreshEntityData(data: number): void;
        setOutOfCamera(value: boolean): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        getDefaultLootTable(): ResourceLocation;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        getAngrySound(): Internal.SoundEvent;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        hasCaravanTail(): boolean;
        getTicksFrozen(): number;
        tickRidden(arg0: Internal.Player_, arg1: Vec3d_): void;
        getRandomX(arg0: number): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        makeNewLlama(): Internal.Llama;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getAlpha(le: Internal.LivingEntity_, partialTicks: number): number;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        isSunBurnTick(): boolean;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        isAffectedByFluids(): boolean;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        getAmbientSound(): Internal.SoundEvent;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        isCulled(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        getLeashOffset(): Vec3d;
        removeAllEffects(): boolean;
        fedFood(arg0: Internal.Player_, arg1: Internal.ItemStack_): Internal.InteractionResult;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getRiddenSpeed(arg0: Internal.Player_): number;
        getSaddleSoundEvent(): Internal.SoundEvent;
        processPortalCooldown(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getLeashHolder(): Internal.Entity;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        removeSoulSpeed(): void;
        static generateMaxHealth(arg0: Internal.IntUnaryOperator_): number;
        shouldDropExperience(): boolean;
        getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        redirect$cic000$moonlight$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        getArrowCount(): number;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        setStanding(arg0: boolean): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        handler$dec000$parcool$onIsInWall(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        setOffspringAttributes(arg0: Internal.AgeableMob_, arg1: Internal.AbstractHorse_): void;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        leaveCaravan(): void;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canRide(arg0: Internal.Entity_): boolean;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        isJumping(): boolean;
        removeAfterChangingDimensions(): void;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getSharedFlag(arg0: number): boolean;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        tryAddFrost(): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        ageUp(arg0: number): void;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        invokeShouldDropLoot(): boolean;
        removeVehicle(): void;
        defineSynchedData(): void;
        handler$cln000$supplementaries$eatSugarCube(player: Internal.Player_, stack: Internal.ItemStack_, cir: Internal.CallbackInfoReturnable_<any>): void;
        checkInsideBlocks(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        setIsJumping(arg0: boolean): void;
        wrapOperation$dab000$supplementaries$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        createHoverEvent(): Internal.HoverEvent;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        serverAiStep(): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        setItemSlotAndDropWhenKilled(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        sendDebugPackets(): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        dropFromLootTable(arg0: DamageSource_, arg1: boolean): void;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        updateUsingItem(arg0: Internal.ItemStack_): void;
        canChangeDimensions(): boolean;
        modifyReturnValue$dkm000$create$onFireImmune(arg0: boolean): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        setDespawnDelay(arg0: number): void;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        setInLoveTime(arg0: number): void;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        doPlayerRide(arg0: Internal.Player_): void;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        setOwnerUUID(arg0: Internal.UUID_): void;
        getFluidJumpThreshold(): number;
        essential$getRealPrevRenderYaw(): number;
        enchantSpawnedArmor(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.EquipmentSlot_): void;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createBaseHorseAttributes(): Internal.AttributeSupplier$Builder;
        repositionEntityAfterLoad(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        handler$dec000$parcool$onOnGround(arg0: Internal.CallbackInfoReturnable_<any>): void;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        ageBoundaryReached(): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        playBlockFallSound(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        updateControlFlags(): void;
        createBodyControl(): Internal.BodyRotationControl;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        setPos(arg0: Vec3d_): void;
        enchantSpawnedWeapon(arg0: Internal.RandomSource_, arg1: number): void;
        populateDefaultEquipmentEnchantments(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canEatGrass(): boolean;
        setSilent(arg0: boolean): void;
        openCustomInventoryScreen(arg0: Internal.Player_): void;
        doPush(arg0: Internal.Entity_): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isUsingItem(): boolean;
        essential$getRealRenderYaw(): number;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        static generateSpeed(arg0: Internal.DoubleSupplier_): number;
        getInventoryColumns(): number;
        onPlayerJump(arg0: number): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        jumpFromGround(): void;
        canMate(arg0: Internal.Animal_): boolean;
        canReplaceCurrentItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        onChangedBlock(arg0: BlockPos_): void;
        isAlive(): boolean;
        usePlayerItem(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_): void;
        startSleeping(arg0: BlockPos_): void;
        isTraderLlama(): boolean;
        pickUpItem(arg0: Internal.ItemEntity_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        calculateFallDamage(arg0: number, arg1: number): number;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateEffectVisibility(): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getSoundVolume(): number;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        setChest(arg0: boolean): void;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        canWearArmor(): boolean;
        followMommy(): void;
        updateInvisibilityStatus(): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        getAmbientStandSound(): Internal.SoundEvent;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setBred(arg0: boolean): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        supp$setSlimedTicks(newSlimedTicks: number, sync: boolean): void;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        newFloatList(...arg0: number[]): Internal.ListTag;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        handler$zjk001$sodiumdynamiclights$onTick(ci: Internal.CallbackInfo_): void;
        getJumpControl(): Internal.JumpControl;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getFeetArmorItem(): Internal.ItemStack;
        isSaddleable(): boolean;
        getVariant(): Internal.Llama$Variant;
        static getViewScale(): number;
        getEatingSound(): Internal.SoundEvent;
        handler$ded000$parcool$onClimbable(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        getSwag(): Internal.DyeColor;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): Internal.Llama;
        getCombatTracker(): Internal.CombatTracker;
        getCustomJump(): number;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        canBreed(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getBlockJumpFactor(): number;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        onSoulSpeedBlock(): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        playEntityOnFireExtinguishedSound(): void;
        setVariant(arg0: any): void;
        isFullyFrozen(): boolean;
        dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        isInWall(): boolean;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setUseItem(arg0: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        getMaxTemper(): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        getAge(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        "setVariant(net.minecraft.world.entity.animal.horse.Llama$Variant)"(arg0: Internal.Llama$Variant_): void;
        static generateJumpStrength(arg0: Internal.DoubleSupplier_): number;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        isWearingArmor(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        dropExperience(): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        setBaby(arg0: boolean): void;
        getTemper(): number;
        static createOffspringAttribute(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.RandomSource_): number;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        decreaseAirSupply(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        tameWithName(arg0: Internal.Player_): boolean;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getFlag(arg0: number): boolean;
        handler$bif000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        getStrength(): number;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        makeMad(): void;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        isSaddled(): boolean;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        getAmbientStandInterval(): number;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        onOffspringSpawnedFromEgg(arg0: Internal.Player_, arg1: Internal.Mob_): void;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        parCool$isLivingOnCustomLadder(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        bo$getRenderer(): Internal.EntityRenderer<any>;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        equipSaddle(arg0: Internal.SoundSource_): void;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        getDamageAfterMagicAbsorb(arg0: DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        executeRidersJump(arg0: number, arg1: Vec3d_): void;
        getEyeY(): number;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        getStandAnim(arg0: number): number;
        static createBaseChestedHorseAttributes(): Internal.AttributeSupplier$Builder;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        tryAddSoulSpeed(): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        doWaterSplashEffect(): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        isArmor(arg0: Internal.ItemStack_): boolean;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getFlyingSpeed(): number;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        handler$cln000$supplementaries$addSugarCube(ci: Internal.CallbackInfo_): void;
        dropAllDeathLoot(arg0: DamageSource_): void;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        setTemper(arg0: number): void;
        setVariant(arg0: Internal.Llama$Variant_): void;
        tickLeash(): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        customServerAiStep(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        handleNetherPortal(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        canPerformRearing(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        followLeashSpeed(): number;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        triggerItemUseEffects(arg0: Internal.ItemStack_, arg1: number): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setFlag(arg0: number, arg1: boolean): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        /**
         * @deprecated
        */
        jumpInLiquid(arg0: Internal.TagKey_<Internal.Fluid>): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        reapplyPosition(): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        playChestEquipsSound(): void;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        static isBrightEnoughToSpawn(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): boolean;
        getWaterSlowDown(): number;
        createNavigation(arg0: Internal.Level_): Internal.PathNavigation;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        supp$getSlimedTicks(): number;
        isRemoved(): boolean;
        handleStopJump(): void;
        getEatAnim(arg0: number): number;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getRiddenInput(arg0: Internal.Player_, arg1: Vec3d_): Vec3d;
        standIfPossible(): void;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        canParent(): boolean;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        dropEquipment(): void;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        addPassenger(arg0: Internal.Entity_): void;
        getSleepingPos(): Internal.Optional<any>;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        joinCaravan(arg0: Internal.Llama_): void;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getPermissionLevel(): number;
        getMotionZ(): number;
        nextStep(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        isTamed(): boolean;
        getBedOrientation(): Internal.Direction;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        playJumpSound(): void;
        getProfile(): Internal.GameProfile;
        setInLove(arg0: Internal.Player_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        isBred(): boolean;
        pushEntities(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        getRiddenRotation(arg0: Internal.LivingEntity_): Internal.Vec2;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        setTimeout(): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        handler$zjk000$sodiumdynamiclights$onRemove(ci: Internal.CallbackInfo_): void;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        blockUsingShield(arg0: Internal.LivingEntity_): void;
        processFlappingMovement(): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        getJumpCooldown(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setAge(arg0: number): void;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        isInLove(): boolean;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        randomizeAttributes(arg0: Internal.RandomSource_): void;
        handleStartJump(arg0: number): void;
        unsetRemoved(): void;
        getPickupReach(): Vec3i;
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        getRootVehicle(): Internal.Entity;
        getOwnerUUID(): Internal.UUID;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        sdl$getLuminance(): number;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        getMouthAnim(arg0: number): number;
        populateDefaultEquipmentSlots(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        completeUsingItem(): void;
        resetLove(): void;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        inCaravan(): boolean;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        hasChest(): boolean;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        brainProvider(): Internal.Brain$Provider<any>;
        getJumpPower(): number;
        registerGoals(): void;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        addBehaviourGoals(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        setEating(arg0: boolean): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        removeEffectParticles(): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        setTamed(arg0: boolean): void;
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): Internal.Component;
        getTicksRequiredToFreeze(): number;
        shouldDespawnInPeaceful(): boolean;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        updateContainerEquipment(): void;
        getMaxSpawnClusterSize(): number;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        canJump(): boolean;
        handler$dec000$parcool$onGetEyeHeight(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getUsername(): string;
        transition$getRawPosition(): Vec3d;
        getInLoveTime(): number;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        "setVariant(java.lang.Object)"(arg0: any): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): Internal.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        getCaravanHead(): Internal.Llama;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        hasInventoryChanged(arg0: Internal.Container_): boolean;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        static tickEntity(entity: Internal.LivingEntity_): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        playHurtSound(arg0: DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        setMotionX(x: number): void;
        shouldStayCloseToLeashHolder(): boolean;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        getMovementEmission(): Internal.Entity$MovementEmission;
        distanceToEntity(arg0: Internal.Entity_): number;
        spawnTamingParticles(arg0: boolean): void;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        redirect$bhp000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: DamageSource_, amount: number): boolean;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        equipArmor(arg0: Internal.Player_, arg1: Internal.ItemStack_): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        tickEffects(): void;
        isForcedVisible(): boolean;
        modifyTemper(arg0: number): number;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        containerChanged(arg0: Internal.Container_): void;
        runCommand(command: string): number;
        isStanding(): boolean;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        set culled(value: boolean)
        get onFire(): boolean
        get deathSound(): Internal.SoundEvent
        get owner(): Internal.LivingEntity
        set didSpit(arg0: boolean)
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get alwaysExperienceDropper(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eating(): boolean
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get inventorySize(): number
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        set outOfCamera(value: boolean)
        get defaultLootTable(): ResourceLocation
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get angrySound(): Internal.SoundEvent
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get sunBurnTick(): boolean
        get affectedByFluids(): boolean
        get ambientSound(): Internal.SoundEvent
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get culled(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get saddleSoundEvent(): Internal.SoundEvent
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        set standing(arg0: boolean)
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        get jumping(): boolean
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        set isJumping(arg0: boolean)
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        set despawnDelay(arg0: number)
        get fireImmuneTicks(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        set inLoveTime(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        set ownerUUID(arg0: Internal.UUID_)
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get inventoryColumns(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get traderLlama(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get soundVolume(): number
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        set chest(arg0: boolean)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get ambientStandSound(): Internal.SoundEvent
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set bred(arg0: boolean)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get flapping(): boolean
        get feetArmorItem(): Internal.ItemStack
        get saddleable(): boolean
        get variant(): Internal.Llama$Variant
        get viewScale(): number
        get eatingSound(): Internal.SoundEvent
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get swag(): Internal.DyeColor
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get customJump(): number
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get blockJumpFactor(): number
        set variant(arg0: any)
        get fullyFrozen(): boolean
        get inWall(): boolean
        get meleeAttackReferencePosition(): Vec3d
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        set useItem(arg0: Internal.ItemStack_)
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get maxTemper(): number
        get age(): number
        set "variant(net.minecraft.world.entity.animal.horse.Llama$Variant)"(arg0: Internal.Llama$Variant_)
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        get wearingArmor(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get temper(): number
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get strength(): number
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get saddled(): boolean
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get blockSpeedFactor(): number
        get ambientStandInterval(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get swimSound(): Internal.SoundEvent
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get flyingSpeed(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set temper(arg0: number)
        set variant(arg0: Internal.Llama$Variant_)
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get waterSlowDown(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get sleepingPos(): Internal.Optional<any>
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get permissionLevel(): number
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get tamed(): boolean
        get bedOrientation(): Internal.Direction
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        set inLove(arg0: Internal.Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get bred(): boolean
        get offHandItem(): Internal.ItemStack
        get outOfCamera(): boolean
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get jumpCooldown(): number
        get boundingBoxForCulling(): Internal.AABB
        set age(arg0: number)
        get target(): Internal.LivingEntity
        get inLove(): boolean
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get pickupReach(): Vec3i
        get rootVehicle(): Internal.Entity
        get ownerUUID(): Internal.UUID
        get noGravity(): boolean
        get immobile(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get jumpPower(): number
        get headArmorItem(): Internal.ItemStack
        set eating(arg0: boolean)
        get bbWidth(): number
        set tamed(arg0: boolean)
        get "name()"(): Internal.Component
        get typeName(): Internal.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get inLoveTime(): number
        set "variant(java.lang.Object)"(arg0: any)
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): Internal.Component
        get mobType(): Internal.MobType
        get caravanHead(): Internal.Llama
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get movementEmission(): Internal.Entity$MovementEmission
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        get standing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type TraderLlama_ = TraderLlama;
    class PistonExtensionPoleBlock extends Internal.WrenchableDirectionalBlock implements Internal.IWrenchable, Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        static playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        static playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type PistonExtensionPoleBlock_ = PistonExtensionPoleBlock;
    abstract class TypeToken <T> extends Internal.TypeCapture<T> implements Internal.Serializable {
        getClass(): typeof any;
        isPrimitive(): boolean;
        "where(com.google.common.reflect.TypeParameter,com.google.common.reflect.TypeToken)"<X>(arg0: Internal.TypeParameter_<X>, arg1: Internal.TypeToken_<X>): this;
        method(arg0: Internal.Method_): Internal.Invokable<T, any>;
        static of(arg0: Internal.Type_): Internal.TypeToken<any>;
        "isSubtypeOf(com.google.common.reflect.TypeToken)"(arg0: Internal.TypeToken_<any>): boolean;
        "isSubtypeOf(java.lang.reflect.Type)"(arg0: Internal.Type_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        resolveType(arg0: Internal.Type_): Internal.TypeToken<any>;
        isSubtypeOf(arg0: Internal.TypeToken_<any>): boolean;
        isArray(): boolean;
        static "of(java.lang.Class)"<T>(arg0: T): Internal.TypeToken<T>;
        static "of(java.lang.reflect.Type)"(arg0: Internal.Type_): Internal.TypeToken<any>;
        getSubtype(arg0: typeof any): this;
        getSupertype(arg0: T): this;
        "constructor"(arg0: Internal.Constructor_<any>): Internal.Invokable<T, T>;
        static of<T>(arg0: T): Internal.TypeToken<T>;
        where<X>(arg0: Internal.TypeParameter_<X>, arg1: X): this;
        toString(): string;
        getComponentType(): Internal.TypeToken<any>;
        notifyAll(): void;
        getTypes(): Internal.TypeToken$TypeSet<>;
        where<X>(arg0: Internal.TypeParameter_<X>, arg1: Internal.TypeToken_<X>): this;
        getRawType(): T;
        isSupertypeOf(arg0: Internal.Type_): boolean;
        "isSupertypeOf(com.google.common.reflect.TypeToken)"(arg0: Internal.TypeToken_<any>): boolean;
        hashCode(): number;
        wrap(): this;
        isSubtypeOf(arg0: Internal.Type_): boolean;
        unwrap(): this;
        wait(): void;
        "isSupertypeOf(java.lang.reflect.Type)"(arg0: Internal.Type_): boolean;
        wait(arg0: number): void;
        "where(com.google.common.reflect.TypeParameter,java.lang.Class)"<X>(arg0: Internal.TypeParameter_<X>, arg1: X): this;
        equals(arg0: any): boolean;
        getType(): Internal.Type;
        isSupertypeOf(arg0: Internal.TypeToken_<any>): boolean;
        get class(): typeof any
        get primitive(): boolean
        get array(): boolean
        get componentType(): Internal.TypeToken<any>
        get types(): Internal.TypeToken$TypeSet<>
        get rawType(): T
        get type(): Internal.Type
    }
    type TypeToken_<T> = TypeToken<T>;
    interface IMultiBlockEntityContainer {
        getMainAxisOf(arg0: Internal.BlockEntity_): Internal.Direction$Axis;
        abstract getMaxWidth(): number;
        abstract removeController(arg0: boolean): void;
        abstract getControllerBE<T extends Internal.BlockEntity & Internal.IMultiBlockEntityContainer>(): T;
        abstract getWidth(): number;
        abstract setController(arg0: BlockPos_): void;
        abstract isController(): boolean;
        setExtraData(arg0: any): void;
        modifyExtraData(arg0: any): any;
        abstract getController(): BlockPos;
        abstract getLastKnownPos(): BlockPos;
        abstract preventConnectivityUpdate(): void;
        abstract notifyMultiUpdated(): void;
        getExtraData(): any;
        abstract getMainConnectionAxis(): Internal.Direction$Axis;
        abstract setWidth(arg0: number): void;
        abstract setHeight(arg0: number): void;
        abstract getHeight(): number;
        abstract getMaxLength(arg0: Internal.Direction$Axis_, arg1: number): number;
        get maxWidth(): number
        get controllerBE(): T
        get width(): number
        set controller(arg0: BlockPos_)
        get controller(): boolean
        set extraData(arg0: any)
        get controller(): BlockPos
        get lastKnownPos(): BlockPos
        get extraData(): any
        get mainConnectionAxis(): Internal.Direction$Axis
        set width(arg0: number)
        set height(arg0: number)
        get height(): number
    }
    type IMultiBlockEntityContainer_ = IMultiBlockEntityContainer;
    interface ICustomPacket <T extends Internal.Packet<any>> {
        getThis(): T;
        abstract getInternalData(): Internal.FriendlyByteBuf;
        getDirection(): Internal.NetworkDirection;
        abstract getName(): ResourceLocation;
        abstract getIndex(): number;
        get "this"(): T
        get internalData(): Internal.FriendlyByteBuf
        get direction(): Internal.NetworkDirection
        get name(): ResourceLocation
        get index(): number
    }
    type ICustomPacket_<T extends Internal.Packet<any>> = ICustomPacket<T>;
    interface FadableScreenElement extends Internal.ScreenElement {
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    type FadableScreenElement_ = FadableScreenElement | ((arg0: Internal.GuiGraphics, arg1: number, arg2: number, arg3: number)=> void);
    class SodiumBufferBuilder implements Internal.VertexBufferWriter, Internal.VertexConsumer, Internal.BlockSensitiveBufferBuilder {
        constructor(arg0: Internal.ExtendedBufferBuilder_)
        uv2(arg0: number): Internal.VertexConsumer;
        getClass(): typeof any;
        color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        color(arg0: number): Internal.VertexConsumer;
        endVertex(): void;
        normal(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        misc(arg0: Internal.VertexFormatElement_, ...arg1: number[]): Internal.VertexConsumer;
        "color(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        static of(arg0: Internal.VertexConsumer_): Internal.VertexBufferWriter;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        overlayCoords(arg0: number): Internal.VertexConsumer;
        vertex(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        "putBulkData(com.mojang.blaze3d.vertex.PoseStack$Pose,net.minecraft.client.renderer.block.model.BakedQuad,float[],float,float,float,int[],int,boolean)"(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number[], arg7: number, arg8: boolean): void;
        color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number[], arg7: number, arg8: boolean): void;
        reset(): void;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        /**
         * @deprecated
        */
        isFullWriter(): boolean;
        "color(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        static tryOf(arg0: Internal.VertexConsumer_): Internal.VertexBufferWriter;
        overlayCoords(arg0: number, arg1: number): Internal.VertexConsumer;
        canUseIntrinsics(): boolean;
        endBlock(): void;
        applyBakedLighting(arg0: number, arg1: Internal.ByteBuffer_): number;
        toString(): string;
        notifyAll(): void;
        getOriginalBufferBuilder(): Internal.BufferBuilder;
        static copyInto(arg0: Internal.VertexBufferWriter_, arg1: Internal.MemoryStack_, arg2: number, arg3: number, arg4: Internal.VertexFormatDescription_): void;
        defaultColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        uv2(arg0: number, arg1: number): Internal.VertexConsumer;
        normal(arg0: Matrix3f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        hashCode(): number;
        "putBulkData(com.mojang.blaze3d.vertex.PoseStack$Pose,net.minecraft.client.renderer.block.model.BakedQuad,float,float,float,float,int,int,boolean)"(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedNormals(arg0: Vec3f_, arg1: Internal.ByteBuffer_, arg2: Matrix3f_): void;
        vertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        wait(): void;
        wait(arg0: number): void;
        vertex(arg0: Matrix4f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        push(arg0: Internal.MemoryStack_, arg1: number, arg2: number, arg3: Internal.VertexFormatDescription_): void;
        uv(arg0: number, arg1: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        equals(arg0: any): boolean;
        unsetDefaultColor(): void;
        beginBlock(block: number, renderType: number, localPosX: number, localPosY: number, localPosZ: number): void;
        get class(): typeof any
        /**
         * @deprecated
        */
        get fullWriter(): boolean
        get originalBufferBuilder(): Internal.BufferBuilder
    }
    type SodiumBufferBuilder_ = SodiumBufferBuilder;
    class DepotMountedStorage extends Internal.WrapperMountedItemStorage<any> implements Internal.SyncedMountedStorage {
        static fromDepot(arg0: Internal.DepotBlockEntity_): Internal.DepotMountedStorage;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        find(): number;
        getSlots(): number;
        setChanged(): void;
        "getSlots()"(): number;
        setItem(arg0: Internal.ItemStack_): void;
        static copyToItemStackHandler(arg0: Internal.IItemHandler_): Internal.ItemStackHandler;
        kjs$self(): Internal.IItemHandler;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(i: number): Internal.ItemStack;
        "getSlotLimit(int)"(i: number): number;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        static fromLegacy(arg0: Internal.CompoundTag_): Internal.DepotMountedStorage;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): void;
        wait(): void;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        unmount(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        markClean(): void;
        asContainer(): Internal.Container;
        toString(): string;
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        afterSync(arg0: Internal.Contraption_, arg1: BlockPos_): void;
        isDirty(): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(i: number, itemStack: Internal.ItemStack_): boolean;
        hashCode(): number;
        handleInteraction(arg0: Internal.ServerPlayer_, arg1: Internal.Contraption_, arg2: Internal.StructureTemplate$StructureBlockInfo_): boolean;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        equals(arg0: any): boolean;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get "slots()"(): number
        set item(arg0: Internal.ItemStack_)
        get width(): number
        get class(): typeof any
        get empty(): boolean
        get height(): number
        get item(): Internal.ItemStack
        get allItems(): Internal.List<Internal.ItemStack>
        get dirty(): boolean
        get mutable(): boolean
        static readonly CODEC: Internal.Codec<Internal.DepotMountedStorage>;
    }
    type DepotMountedStorage_ = DepotMountedStorage;
    class MinecartFurnace extends Internal.AbstractMinecart {
        constructor(arg0: Internal.EntityType_<Internal.MinecartFurnace>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        modifyExpressionValue$dkm000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        getPos(arg0: number, arg1: number, arg2: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        setHurtTime(arg0: number): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        setCulled(value: boolean): void;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        static registerCollisionHandler(arg0: Internal.IMinecartCollisionHandler_): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        isVisuallyCrawling(): boolean;
        checkBelowWorld(): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMaxSpeedAirLateral(arg0: number): void;
        setMotionZ(z: number): void;
        getDropItem(): Internal.Item;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        shouldDoRailFunctions(): boolean;
        transition$setRawPosition(arg0: Vec3d_): void;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getDamage(): number;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        getPosOffs(arg0: number, arg1: number, arg2: number, arg3: number): Vec3d;
        onFlap(): void;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        getDisplayBlockState(): Internal.BlockState;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        canEnterPose(arg0: Internal.Pose_): boolean;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getCollisionHandler(): Internal.IMinecartCollisionHandler;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        setCustomNameVisible(arg0: boolean): void;
        bo$getRenderer(): Internal.EntityRenderer<any>;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        bo$refreshEntityData(data: number): void;
        setOutOfCamera(value: boolean): void;
        getControllingPassenger(): Internal.LivingEntity;
        getRemainingFireTicks(): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: Internal.Component_): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        doWaterSplashEffect(): void;
        setDamage(arg0: number): void;
        getDisplayOffset(): number;
        getTeam(): Internal.Team;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        setTicksFrozen(arg0: number): void;
        setCanUseRail(arg0: boolean): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isCulled(): boolean;
        hasCustomName(): boolean;
        isLiving(): boolean;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getLeashOffset(): Vec3d;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        processPortalCooldown(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        handleNetherPortal(): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        hasFuel(): boolean;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        handler$dec000$parcool$onIsInWall(arg0: Internal.CallbackInfoReturnable_<any>): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        isOnRails(): boolean;
        onBelowWorld(): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        restoreFrom(arg0: Internal.Entity_): void;
        reapplyPosition(): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setYaw(arg0: number): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setCurrentCartSpeedCapOnRail(arg0: number): void;
        getPickRadius(): number;
        notify(): void;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        self(): Internal.Entity;
        getMaxSpeed(): number;
        abstract sdl$getDynamicLightY(): number;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canRide(arg0: Internal.Entity_): boolean;
        canSpawnSprintParticle(): boolean;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        setHurtDir(arg0: number): void;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        addPassenger(arg0: Internal.Entity_): void;
        getSoundSource(): Internal.SoundSource;
        removeAfterChangingDimensions(): void;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getHurtDir(): number;
        getSharedFlag(arg0: number): boolean;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        getMaxSpeedAirLateral(): number;
        getPermissionLevel(): number;
        getMotionZ(): number;
        removeVehicle(): void;
        defineSynchedData(): void;
        nextStep(): number;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        checkInsideBlocks(): void;
        setZ(z: number): void;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        getY(): number;
        ejectPassengers(): void;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        createHoverEvent(): Internal.HoverEvent;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        setCustomDisplay(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        canBeRidden(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        setTimeout(): void;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        handler$zjk000$sodiumdynamiclights$onRemove(ci: Internal.CallbackInfo_): void;
        isCrouching(): boolean;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        modifyReturnValue$dkm000$create$onFireImmune(arg0: boolean): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        baseTick(): void;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getComparatorLevel(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        getMaxAirSupply(): number;
        isVisuallySwimming(): boolean;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        processFlappingMovement(): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        getFacing(): Internal.Direction;
        hasCustomDisplay(): boolean;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setSprinting(arg0: boolean): void;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        setDisplayOffset(arg0: number): void;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        setMaxSpeedAirVertical(arg0: number): void;
        setHasFuel(arg0: boolean): void;
        getFluidJumpThreshold(): number;
        unsetRemoved(): void;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        save(arg0: Internal.CompoundTag_): boolean;
        repositionEntityAfterLoad(): boolean;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        handler$dec000$parcool$onOnGround(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getDefaultDisplayOffset(): number;
        acceptsFailure(): boolean;
        getMaxSpeedAirVertical(): number;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canUseRail(): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        getCurrentRailPosition(): BlockPos;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        getSwimSplashSound(): Internal.SoundEvent;
        playSwimSound(arg0: number): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        static createMinecart(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.AbstractMinecart$Type_): Internal.AbstractMinecart;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        setExtension(key: any, value: any): void;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        setDragAir(arg0: number): void;
        getBbWidth(): number;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        getMaxCartSpeedOnRail(): number;
        activateMinecart(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        canUpdate(): boolean;
        getTypeName(): Internal.Component;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        getSlopeAdjustment(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        handler$dec000$parcool$onGetEyeHeight(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getBbHeight(): number;
        getUsername(): string;
        transition$getRawPosition(): Vec3d;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        getMinecartType(): Internal.AbstractMinecart$Type;
        hasControllingPassenger(): boolean;
        moveMinecartOnRail(arg0: BlockPos_): void;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        getDisplayName(): Internal.Component;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        destroy(arg0: DamageSource_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        removeTag(arg0: string): boolean;
        moveAlongTrack(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        isPushable(): boolean;
        discard(): void;
        setYBodyRot(arg0: number): void;
        onClientRemoval(): void;
        applyNaturalSlowdown(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        isPoweredCart(): boolean;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getDragAir(): number;
        setRotation(yaw: number, pitch: number): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        abstract sdl$resetDynamicLight(): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        getType(): string;
        comeOffTrack(): void;
        getLightProbePosition(arg0: number): Vec3d;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        getDefaultDisplayBlockState(): Internal.BlockState;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        checkDespawn(): void;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        newFloatList(...arg0: number[]): Internal.ListTag;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        handler$zjk001$sodiumdynamiclights$onTick(ci: Internal.CallbackInfo_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getHurtTime(): number;
        lerpHeadTo(arg0: number, arg1: number): void;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getMovementEmission(): Internal.Entity$MovementEmission;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        getCurrentCartSpeedCapOnRail(): number;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getBlockJumpFactor(): number;
        tell(message: Internal.Component_): void;
        isForcedVisible(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        playEntityOnFireExtinguishedSound(): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        getMaxSpeedWithRail(): number;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setDisplayBlockState(arg0: Internal.BlockState_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get suppressingBounce(): boolean
        get blockZ(): number
        set hurtTime(arg0: number)
        get silent(): boolean
        get pitch(): number
        set culled(value: boolean)
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set maxSpeedAirLateral(arg0: number)
        set motionZ(z: number)
        get dropItem(): Internal.Item
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get damage(): number
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get displayBlockState(): Internal.BlockState
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get collisionHandler(): Internal.IMinecartCollisionHandler
        get yaw(): number
        set customNameVisible(arg0: boolean)
        set outOfCamera(value: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: Internal.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get swimSound(): Internal.SoundEvent
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set damage(arg0: number)
        get displayOffset(): number
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        set canUseRail(arg0: boolean)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get culled(): boolean
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        set currentCartSpeedCapOnRail(arg0: number)
        get pickRadius(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get maxSpeed(): number
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        set hurtDir(arg0: number)
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get hurtDir(): number
        get lookAngle(): Vec3d
        get maxSpeedAirLateral(): number
        get permissionLevel(): number
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        set customDisplay(arg0: boolean)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get outOfCamera(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get commandSenderWorld(): Internal.Level
        get comparatorLevel(): number
        get customName(): Internal.Component
        get class(): typeof any
        get maxAirSupply(): number
        get visuallySwimming(): boolean
        get fireImmuneTicks(): number
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        set displayOffset(arg0: number)
        get invulnerable(): boolean
        get inLava(): boolean
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get inWater(): boolean
        set maxSpeedAirVertical(arg0: number)
        set hasFuel(arg0: boolean)
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        get defaultDisplayOffset(): number
        get maxSpeedAirVertical(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get currentRailPosition(): BlockPos
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        set dragAir(arg0: number)
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get maxCartSpeedOnRail(): number
        get typeName(): Internal.Component
        get ticksRequiredToFreeze(): number
        get slopeAdjustment(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get minecartType(): Internal.AbstractMinecart$Type
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get poweredCart(): boolean
        get dragAir(): number
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get defaultDisplayBlockState(): Internal.BlockState
        get passenger(): boolean
        get hurtTime(): number
        get flapping(): boolean
        get viewScale(): number
        set motionX(x: number)
        get movementEmission(): Internal.Entity$MovementEmission
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get currentCartSpeedCapOnRail(): number
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get blockJumpFactor(): number
        get forcedVisible(): boolean
        get freezing(): boolean
        get maxSpeedWithRail(): number
        get fullyFrozen(): boolean
        set displayBlockState(arg0: Internal.BlockState_)
        set sharedFlagOnFire(arg0: boolean)
        xPush: number;
        zPush: number;
    }
    type MinecartFurnace_ = MinecartFurnace;
    interface Hopper extends Internal.Container {
        stopOpen(arg0: Internal.Player_): void;
        tryClear(arg0: any): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        abstract setChanged(): void;
        abstract getContainerSize(): number;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        abstract "isEmpty()"(): boolean;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        getSuckShape(): Internal.VoxelShape;
        abstract getItem(arg0: number): Internal.ItemStack;
        abstract getLevelY(): number;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        abstract isEmpty(): boolean;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract stillValid(arg0: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        abstract getLevelX(): number;
        abstract getLevelZ(): number;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get "empty()"(): boolean
        get suckShape(): Internal.VoxelShape
        get levelY(): number
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        get levelX(): number
        get levelZ(): number
        readonly SUCK: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        readonly INSIDE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        readonly ABOVE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
    }
    type Hopper_ = Hopper;
    interface UpgradeData$BlockFixer {
        abstract updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        processChunk(arg0: Internal.LevelAccessor_): void;
        (arg0: Internal.BlockState, arg1: Internal.Direction, arg2: Internal.BlockState, arg3: Internal.LevelAccessor, arg4: BlockPos, arg5: BlockPos): Internal.BlockState_;
    }
    type UpgradeData$BlockFixer_ = UpgradeData$BlockFixer | ((arg0: Internal.BlockState, arg1: Internal.Direction, arg2: Internal.BlockState, arg3: Internal.LevelAccessor, arg4: BlockPos, arg5: BlockPos)=> Internal.BlockState_);
    class DeltaFeatureConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.IntProvider_, arg3: Internal.IntProvider_)
        getClass(): typeof any;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        rim(): Internal.BlockState;
        notifyAll(): void;
        contents(): Internal.BlockState;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        rimSize(): Internal.IntProvider;
        size(): Internal.IntProvider;
        equals(arg0: any): boolean;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.DeltaFeatureConfiguration>;
    }
    type DeltaFeatureConfiguration_ = DeltaFeatureConfiguration;
    class ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook {
        constructor(arg0: kotlin.Pair_<Internal.Molang, Internal.Molang>, arg1: kotlin.Pair_<number, number>, arg2: kotlin.Pair_<number, number>, arg3: number, arg4: Internal.Molang_, arg5: boolean, arg6: boolean)
        constructor(arg0: kotlin.Pair_<any, any>, arg1: kotlin.Pair_<any, any>, arg2: kotlin.Pair_<any, any>, arg3: number, arg4: Internal.Molang_, arg5: boolean, arg6: boolean, arg7: number, arg8: any_)
        constructor(arg0: number, arg1: kotlin.Pair_<any, any>, arg2: kotlin.Pair_<any, any>, arg3: kotlin.Pair_<any, any>, arg4: number, arg5: Internal.Molang_, arg6: boolean, arg7: boolean, arg8: any_)
        getClass(): typeof any;
        static access$get$childSerializers$cp(): kotlin.Lazy<any>[];
        getStretchToLifetime(): boolean;
        component5(): Internal.Molang;
        component7(): boolean;
        component6(): boolean;
        static getFramePerSecond$annotations(): void;
        component1(): kotlin.Pair<Internal.Molang, Internal.Molang>;
        getMaxFrame(): Internal.Molang;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLoop(): boolean;
        getFramePerSecond(): number;
        component2(): kotlin.Pair<number, number>;
        static getMaxFrame$annotations(): void;
        component3(): kotlin.Pair<number, number>;
        component4(): number;
        copy(arg0: kotlin.Pair_<Internal.Molang, Internal.Molang>, arg1: kotlin.Pair_<number, number>, arg2: kotlin.Pair_<number, number>, arg3: number, arg4: Internal.Molang_, arg5: boolean, arg6: boolean): this;
        static getSize$annotations(): void;
        toString(): string;
        notifyAll(): void;
        getSize(): kotlin.Pair<number, number>;
        static getStretchToLifetime$annotations(): void;
        getStep(): kotlin.Pair<number, number>;
        hashCode(): number;
        static write$Self$cosmetics(arg0: Internal.ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook_, arg1: Internal.CompositeEncoder_, arg2: Internal.SerialDescriptor_): void;
        getBase(): kotlin.Pair<Internal.Molang, Internal.Molang>;
        static getBase$annotations(): void;
        wait(): void;
        static getStep$annotations(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static copy$default(arg0: Internal.ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook_, arg1: kotlin.Pair_<any, any>, arg2: kotlin.Pair_<any, any>, arg3: kotlin.Pair_<any, any>, arg4: number, arg5: Internal.Molang_, arg6: boolean, arg7: boolean, arg8: number, arg9: any): Internal.ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook;
        get class(): typeof any
        get stretchToLifetime(): boolean
        get framePerSecond$annotations(): void
        get maxFrame(): Internal.Molang
        get loop(): boolean
        get framePerSecond(): number
        get maxFrame$annotations(): void
        get size$annotations(): void
        get size(): kotlin.Pair<number, number>
        get stretchToLifetime$annotations(): void
        get step(): kotlin.Pair<number, number>
        get base(): kotlin.Pair<Internal.Molang, Internal.Molang>
        get base$annotations(): void
        get step$annotations(): void
        static readonly Companion: (Internal.ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion) & (Internal.ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook$Companion);
    }
    type ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook_ = ParticleEffectComponents$ParticleAppearanceBillboard$UV$Flipbook;
    class HolderSetCodec <E> implements Internal.Codec<Internal.HolderSet<E>> {
        orElse(arg0: Internal.HolderSet_<E>): Internal.Codec<Internal.HolderSet<E>>;
        flatMap<B>(arg0: Internal.Function_<Internal.HolderSet<E>, Internal.DataResult<B>>): com.mojang.serialization.Decoder<B>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.HolderSet<E>, T>>;
        static empty<A>(): Internal.MapEncoder<A>;
        static "of(com.mojang.serialization.MapEncoder,com.mojang.serialization.MapDecoder)"<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        static error<A>(arg0: string): Internal.Encoder<A>;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        notify(): void;
        static create<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>, arg1: Internal.Codec_<Internal.Holder<E>>, arg2: boolean): Internal.Codec<Internal.HolderSet<E>>;
        dispatch<E>(arg0: Internal.Function_<E, Internal.HolderSet<E>>, arg1: Internal.Function_<Internal.HolderSet<E>, Internal.Codec<E>>): Internal.Codec<E>;
        flatXmap<S>(arg0: Internal.Function_<Internal.HolderSet<E>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<Internal.HolderSet<E>>>): Internal.Codec<S>;
        static floatRange(arg0: number, arg1: number): Internal.Codec<number>;
        map<B>(arg0: Internal.Function_<Internal.HolderSet<E>, B>): com.mojang.serialization.Decoder<B>;
        mapResult(arg0: Internal.Codec$ResultFunction_<Internal.HolderSet<E>>): Internal.Codec<Internal.HolderSet<E>>;
        orElse(arg0: Internal.Consumer_<string>, arg1: Internal.HolderSet_<E>): Internal.Codec<Internal.HolderSet<E>>;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.HolderSet<E>>): Internal.Codec<Internal.HolderSet<E>>;
        static "of(com.mojang.serialization.Encoder,com.mojang.serialization.Decoder)"<A>(arg0: Internal.Encoder_<A>, arg1: com.mojang.serialization.Decoder_<A>): Internal.Codec<A>;
        optionalFieldOf(arg0: string, arg1: Internal.Lifecycle_, arg2: Internal.HolderSet_<E>, arg3: Internal.Lifecycle_): Internal.MapCodec<Internal.HolderSet<E>>;
        static ofBoxed<A>(arg0: Internal.Decoder$Boxed_<A>): com.mojang.serialization.Decoder<A>;
        deprecated(arg0: number): Internal.Codec<Internal.HolderSet<E>>;
        terminal(): Internal.Decoder$Terminal<Internal.HolderSet<E>>;
        withLifecycle(arg0: Internal.Lifecycle_): Internal.Encoder<any>;
        partialDispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.DataResult<Internal.HolderSet<E>>>, arg2: Internal.Function_<Internal.HolderSet<E>, Internal.DataResult<Internal.Codec<E>>>): Internal.Codec<E>;
        parse<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<Internal.HolderSet<E>>;
        comap<B>(arg0: Internal.Function_<B, Internal.HolderSet<E>>): Internal.Encoder<B>;
        orElseGet(arg0: Internal.Supplier_<Internal.HolderSet<E>>): Internal.Codec<Internal.HolderSet<E>>;
        dispatchStable<E>(arg0: Internal.Function_<E, Internal.HolderSet<E>>, arg1: Internal.Function_<Internal.HolderSet<E>, Internal.Codec<E>>): Internal.Codec<E>;
        static unit<A>(arg0: A): Internal.Codec<A>;
        static intRange(arg0: number, arg1: number): Internal.Codec<number>;
        "orElseGet(java.util.function.UnaryOperator,java.util.function.Supplier)"(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<Internal.HolderSet<E>>): Internal.Codec<Internal.HolderSet<E>>;
        static pair<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<com.mojang.datafixers.util.Pair<F, S>>;
        static either<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<Internal.Either<F, S>>;
        static "unit(java.lang.Object)"<A>(arg0: A): Internal.Codec<A>;
        static checkRange<N extends number & Internal.Comparable<N>>(arg0: N, arg1: N): Internal.Function<N, Internal.DataResult<N>>;
        dispatchMap<E>(arg0: Internal.Function_<E, Internal.HolderSet<E>>, arg1: Internal.Function_<Internal.HolderSet<E>, Internal.Codec<E>>): Internal.MapCodec<E>;
        stable(): Internal.Codec<Internal.HolderSet<E>>;
        wait(): void;
        static unboundedMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.UnboundedMapCodec<K, V>;
        promotePartial(arg0: Internal.Consumer_<string>): Internal.Codec<Internal.HolderSet<E>>;
        xmap<S>(arg0: Internal.Function_<Internal.HolderSet<E>, S>, arg1: Internal.Function_<S, Internal.HolderSet<E>>): Internal.Codec<S>;
        dispatchMap<E>(arg0: string, arg1: Internal.Function_<E, Internal.HolderSet<E>>, arg2: Internal.Function_<Internal.HolderSet<E>, Internal.Codec<E>>): Internal.MapCodec<E>;
        fieldOf(arg0: string): Internal.MapDecoder<any>;
        parse<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<Internal.HolderSet<E>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: com.mojang.serialization.Decoder_<A>, arg2: string): Internal.Codec<A>;
        getClass(): typeof any;
        "encode(java.lang.Object,com.mojang.serialization.DynamicOps,java.lang.Object)"(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: any): Internal.DataResult<any>;
        "orElse(java.util.function.Consumer,net.minecraft.core.HolderSet)"(arg0: Internal.Consumer_<string>, arg1: Internal.HolderSet_<E>): Internal.Codec<Internal.HolderSet<E>>;
        decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.HolderSet<E>, T>>;
        optionalFieldOf(arg0: string, arg1: Internal.HolderSet_<E>): Internal.MapCodec<Internal.HolderSet<E>>;
        static ofSimple<A>(arg0: Internal.Decoder$Simple_<A>): com.mojang.serialization.Decoder<A>;
        static mapEither<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<Internal.Either<F, S>>;
        static doubleRange(arg0: number, arg1: number): Internal.Codec<number>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.HolderSet<E>>): Internal.Codec<Internal.HolderSet<E>>;
        static optionalField<F>(arg0: string, arg1: Internal.Codec_<F>): Internal.MapCodec<Internal.Optional<F>>;
        static simpleMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_): Internal.SimpleMapCodec<K, V>;
        static ofTerminal<A>(arg0: Internal.Decoder$Terminal_<A>): com.mojang.serialization.Decoder<A>;
        encode(arg0: any, arg1: Internal.DynamicOps_<any>, arg2: any): Internal.DataResult<any>;
        dispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.HolderSet<E>>, arg2: Internal.Function_<Internal.HolderSet<E>, Internal.Codec<E>>): Internal.Codec<E>;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: Internal.HolderSet_<E>): Internal.Codec<Internal.HolderSet<E>>;
        wait(arg0: number, arg1: number): void;
        static list<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.List<E>>;
        optionalFieldOf(arg0: string, arg1: Internal.HolderSet_<E>, arg2: Internal.Lifecycle_): Internal.MapCodec<Internal.HolderSet<E>>;
        simple(): Internal.Decoder$Simple<Internal.HolderSet<E>>;
        optionalFieldOf(arg0: string): Internal.MapCodec<Internal.Optional<Internal.HolderSet<E>>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        static "unit(java.util.function.Supplier)"<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        "encode(net.minecraft.core.HolderSet,com.mojang.serialization.DynamicOps,java.lang.Object)"<T>(arg0: Internal.HolderSet_<E>, arg1: Internal.DynamicOps_<T>, arg2: T): Internal.DataResult<T>;
        toString(): string;
        comapFlatMap<S>(arg0: Internal.Function_<Internal.HolderSet<E>, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.HolderSet<E>>): Internal.Codec<S>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<Internal.HolderSet<E>>>): Internal.Encoder<B>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: com.mojang.serialization.Decoder_<A>): Internal.Codec<A>;
        notifyAll(): void;
        boxed(): Internal.Decoder$Boxed<Internal.HolderSet<E>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        static compoundList<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.Codec<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        hashCode(): number;
        listOf(): Internal.Codec<Internal.List<Internal.HolderSet<E>>>;
        "orElse(java.util.function.UnaryOperator,net.minecraft.core.HolderSet)"(arg0: Internal.UnaryOperator_<string>, arg1: Internal.HolderSet_<E>): Internal.Codec<Internal.HolderSet<E>>;
        encode<T>(arg0: Internal.HolderSet_<E>, arg1: Internal.DynamicOps_<T>, arg2: T): Internal.DataResult<T>;
        encodeStart<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.HolderSet_<E>): Internal.DataResult<T>;
        flatComapMap<S>(arg0: Internal.Function_<Internal.HolderSet<E>, S>, arg1: Internal.Function_<S, Internal.DataResult<Internal.HolderSet<E>>>): Internal.Codec<S>;
        wait(arg0: number): void;
        static "of(com.mojang.serialization.MapEncoder,com.mojang.serialization.MapDecoder,java.util.function.Supplier)"<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        static "of(com.mojang.serialization.Encoder,com.mojang.serialization.Decoder,java.lang.String)"<A>(arg0: Internal.Encoder_<A>, arg1: com.mojang.serialization.Decoder_<A>, arg2: string): Internal.Codec<A>;
        static mapPair<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<com.mojang.datafixers.util.Pair<F, S>>;
        equals(arg0: any): boolean;
        "orElseGet(java.util.function.Consumer,java.util.function.Supplier)"(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<Internal.HolderSet<E>>): Internal.Codec<Internal.HolderSet<E>>;
        get class(): typeof any
    }
    type HolderSetCodec_<E> = HolderSetCodec<E>;
    interface GlyphInfo {
        getAdvance(arg0: boolean): number;
        abstract getAdvance(): number;
        getBoldOffset(): number;
        abstract bake(arg0: Internal.Function_<Internal.SheetGlyphInfo, Internal.BakedGlyph>): Internal.BakedGlyph;
        getShadowOffset(): number;
        get advance(): number
        get boldOffset(): number
        get shadowOffset(): number
    }
    type GlyphInfo_ = GlyphInfo;
    interface TaskChainer$DelayedTask {
        abstract submit(arg0: Internal.Executor_): Internal.CompletableFuture<any>;
        (arg0: Internal.Executor): Internal.CompletableFuture_<any>;
    }
    type TaskChainer$DelayedTask_ = ((arg0: Internal.Executor)=> Internal.CompletableFuture_<any>) | TaskChainer$DelayedTask;
    interface GenericFutureListener <F extends io.netty.util.concurrent.Future<any>> extends Internal.EventListener {
        abstract operationComplete(arg0: F): void;
        (arg0: F): void;
    }
    type GenericFutureListener_<F extends io.netty.util.concurrent.Future<any>> = GenericFutureListener<F> | ((arg0: F)=> void);
    class LaserFieldBlock extends Internal.OwnableBlock implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        static getBoundType(arg0: Internal.Direction_): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        getPotentiallyWaterloggedState(arg0: number, arg1: Internal.Level_, arg2: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static getStoredDestroyTime(): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        static getFieldDirection(arg0: Internal.BlockState_): Internal.Direction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        static withReinforcedDestroyTime(arg0: Internal.BlockBehaviour$Properties_): Internal.BlockBehaviour$Properties;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        defaultDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get storedDestroyTime(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly BOUNDTYPE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type LaserFieldBlock_ = LaserFieldBlock;
    class InterfaceHighlightParticleType extends Internal.ParticleType<Internal.InterfaceHighlightParticleOptions> {
        constructor(arg0: boolean)
        getClass(): typeof any;
        hashCode(): number;
        codec(): Internal.Codec<Internal.InterfaceHighlightParticleOptions>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getDeserializer(): Internal.ParticleOptions$Deserializer<Internal.InterfaceHighlightParticleOptions>;
        getOverrideLimiter(): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get deserializer(): Internal.ParticleOptions$Deserializer<Internal.InterfaceHighlightParticleOptions>
        get overrideLimiter(): boolean
    }
    type InterfaceHighlightParticleType_ = InterfaceHighlightParticleType;
    class ServerGamePacketListenerImpl implements Internal.ServerPlayerConnection, Internal.NetworkHandlerExtensions, Internal.DisconnectPacketSource, Internal.ServerGamePacketListener, Internal.TickablePacketListener, Internal.ServerPlayNetworkHandlerAccessor {
        constructor(arg0: Internal.MinecraftServer_, arg1: Internal.Connection_, arg2: Internal.ServerPlayer_)
        createDisconnectPacket(message: Internal.Component_): Internal.Packet<any>;
        handleChatCommand(arg0: Internal.ServerboundChatCommandPacket_): void;
        sendPlayerChatMessage(arg0: Internal.PlayerChatMessage_, arg1: Internal.ChatType$Bound_): void;
        handlePlayerAbilities(arg0: Internal.ServerboundPlayerAbilitiesPacket_): void;
        handlePlayerInput(arg0: Internal.ServerboundPlayerInputPacket_): void;
        handleClientCommand(arg0: Internal.ServerboundClientCommandPacket_): void;
        handleResourcePackResponse(arg0: Internal.ServerboundResourcePackPacket_): void;
        handleSetCarriedItem(arg0: Internal.ServerboundSetCarriedItemPacket_): void;
        handlePickItem(arg0: Internal.ServerboundPickItemPacket_): void;
        handleSetCreativeModeSlot(arg0: Internal.ServerboundSetCreativeModeSlotPacket_): void;
        notify(): void;
        handleSeenAdvancements(arg0: Internal.ServerboundSeenAdvancementsPacket_): void;
        getPlayer(): Internal.ServerPlayer;
        handleKeepAlive(arg0: Internal.ServerboundKeepAlivePacket_): void;
        handleUseItem(arg0: Internal.ServerboundUseItemPacket_): void;
        handlePaddleBoat(arg0: Internal.ServerboundPaddleBoatPacket_): void;
        handleSetStructureBlock(arg0: Internal.ServerboundSetStructureBlockPacket_): void;
        handleCustomPayload(arg0: Internal.ServerboundCustomPayloadPacket_): void;
        send(arg0: Internal.Packet_<any>, arg1: Internal.PacketSendListener_): void;
        handleSelectTrade(arg0: Internal.ServerboundSelectTradePacket_): void;
        handleJigsawGenerate(arg0: Internal.ServerboundJigsawGeneratePacket_): void;
        ackBlockChangesUpTo(arg0: number): void;
        getConnection(): Internal.Connection;
        onDisconnect(arg0: Internal.Component_): void;
        handleSetJigsawBlock(arg0: Internal.ServerboundSetJigsawBlockPacket_): void;
        handleSetCommandMinecart(arg0: Internal.ServerboundSetCommandMinecartPacket_): void;
        tick(): void;
        getRemoteAddress(): Internal.SocketAddress;
        handleSetCommandBlock(arg0: Internal.ServerboundSetCommandBlockPacket_): void;
        handleRecipeBookSeenRecipePacket(arg0: Internal.ServerboundRecipeBookSeenRecipePacket_): void;
        handleChatSessionUpdate(arg0: Internal.ServerboundChatSessionUpdatePacket_): void;
        handleBlockEntityTagQuery(arg0: Internal.ServerboundBlockEntityTagQuery_): void;
        handleContainerButtonClick(arg0: Internal.ServerboundContainerButtonClickPacket_): void;
        handlePong(arg0: Internal.ServerboundPongPacket_): void;
        teleport(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        filterTextPacket(arg0: Internal.List_<string>): Internal.CompletableFuture<Internal.List<Internal.FilteredText>>;
        wait(): void;
        getAddon(): Internal.AbstractNetworkAddon<any>;
        handlePlaceRecipe(arg0: Internal.ServerboundPlaceRecipePacket_): void;
        handlePlayerCommand(arg0: Internal.ServerboundPlayerCommandPacket_): void;
        handleEditBook(arg0: Internal.ServerboundEditBookPacket_): void;
        "filterTextPacket(java.lang.String)"(arg0: string): Internal.CompletableFuture<Internal.FilteredText>;
        getClass(): typeof any;
        sendDisguisedChatMessage(arg0: Internal.Component_, arg1: Internal.ChatType$Bound_): void;
        handleInteract(arg0: Internal.ServerboundInteractPacket_): void;
        handleTeleportToEntityPacket(arg0: Internal.ServerboundTeleportToEntityPacket_): void;
        handleContainerClose(arg0: Internal.ServerboundContainerClosePacket_): void;
        handleChangeDifficulty(arg0: Internal.ServerboundChangeDifficultyPacket_): void;
        wait(arg0: number, arg1: number): void;
        handleClientInformation(arg0: Internal.ServerboundClientInformationPacket_): void;
        addPendingMessage(arg0: Internal.PlayerChatMessage_): void;
        handleRecipeBookChangeSettingsPacket(arg0: Internal.ServerboundRecipeBookChangeSettingsPacket_): void;
        isAcceptingMessages(): boolean;
        handleContainerClick(arg0: Internal.ServerboundContainerClickPacket_): void;
        handleCustomCommandSuggestions(arg0: Internal.ServerboundCommandSuggestionPacket_): void;
        handleAcceptTeleportPacket(arg0: Internal.ServerboundAcceptTeleportationPacket_): void;
        "filterTextPacket(java.util.List)"(arg0: Internal.List_<string>): Internal.CompletableFuture<Internal.List<Internal.FilteredText>>;
        handleMovePlayer(arg0: Internal.ServerboundMovePlayerPacket_): void;
        handleChatAck(arg0: Internal.ServerboundChatAckPacket_): void;
        disconnect(arg0: Internal.Component_): void;
        toString(): string;
        notifyAll(): void;
        handlePlayerAction(arg0: Internal.ServerboundPlayerActionPacket_): void;
        resetPosition(): void;
        handleLockDifficulty(arg0: Internal.ServerboundLockDifficultyPacket_): void;
        handleAnimate(arg0: Internal.ServerboundSwingPacket_): void;
        handleRenameItem(arg0: Internal.ServerboundRenameItemPacket_): void;
        shouldPropagateHandlingExceptions(): boolean;
        handleEntityTagQuery(arg0: Internal.ServerboundEntityTagQuery_): void;
        hashCode(): number;
        filterTextPacket(arg0: string): Internal.CompletableFuture<Internal.FilteredText>;
        handleSignUpdate(arg0: Internal.ServerboundSignUpdatePacket_): void;
        handleChat(arg0: Internal.ServerboundChatPacket_): void;
        teleport(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Set_<Internal.RelativeMovement>): void;
        handleSetBeaconPacket(arg0: Internal.ServerboundSetBeaconPacket_): void;
        wait(arg0: number): void;
        handleUseItemOn(arg0: Internal.ServerboundUseItemOnPacket_): void;
        equals(arg0: any): boolean;
        send(arg0: Internal.Packet_<any>): void;
        handleMoveVehicle(arg0: Internal.ServerboundMoveVehiclePacket_): void;
        get player(): Internal.ServerPlayer
        get connection(): Internal.Connection
        get remoteAddress(): Internal.SocketAddress
        get addon(): Internal.AbstractNetworkAddon<any>
        get class(): typeof any
        get acceptingMessages(): boolean
        aboveGroundVehicleTickCount: number;
        aboveGroundTickCount: number;
        readonly connection: Internal.Connection;
        /**
         * @deprecated
        */
        static readonly MAX_INTERACTION_DISTANCE: (36.0) & (number);
        static readonly LOGGER: (Internal.Log4jLogger) & (Internal.Logger);
        player: Internal.ServerPlayer;
    }
    type ServerGamePacketListenerImpl_ = ServerGamePacketListenerImpl;
    class NoiseThresholdProvider extends Internal.NoiseBasedStateProvider {
        constructor(arg0: number, arg1: Internal.NormalNoise$NoiseParameters_, arg2: number, arg3: number, arg4: number, arg5: Internal.BlockState_, arg6: Internal.List_<Internal.BlockState>, arg7: Internal.List_<Internal.BlockState>)
        getClass(): typeof any;
        type(): Internal.BlockStateProviderType<any>;
        toString(): string;
        notifyAll(): void;
        getNoiseValue(arg0: BlockPos_, arg1: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static simple(arg0: Internal.Block_): Internal.SimpleStateProvider;
        static noiseCodec<P extends Internal.NoiseBasedStateProvider>(arg0: Internal.RecordCodecBuilder$Instance_<P>): Internal.Products$P3<Internal.RecordCodecBuilder$Mu<P>, number, Internal.NormalNoise$NoiseParameters, number>;
        hashCode(): number;
        static simple(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(): void;
        static "simple(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(arg0: number): void;
        getState(arg0: Internal.RandomSource_, arg1: BlockPos_): Internal.BlockState;
        equals(arg0: any): boolean;
        static "simple(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.SimpleStateProvider;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.NoiseThresholdProvider>;
    }
    type NoiseThresholdProvider_ = NoiseThresholdProvider;
    class Sheep extends Internal.Animal implements Internal.Shearable, Internal.IForgeShearable {
        constructor(arg0: Internal.EntityType_<Internal.Sheep>, arg1: Internal.Level_)
        modifyExpressionValue$dkm000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getDeathSound(): Internal.SoundEvent;
        onLeashDistance(arg0: number): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        shouldPassengersInheritMalus(): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        updateWalkAnimation(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        updateSwingTime(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        transition$setRawPosition(arg0: Vec3d_): void;
        isSpectator(): boolean;
        isAlwaysExperienceDropper(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        onFlap(): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        actuallyHurt(arg0: DamageSource_, arg1: number): void;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): Internal.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        handler$ded000$parcool$onSetSprinting(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        shear(arg0: Internal.SoundSource_): void;
        bo$refreshEntityData(data: number): void;
        setOutOfCamera(value: boolean): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        getDefaultLootTable(): ResourceLocation;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        tickRidden(arg0: Internal.Player_, arg1: Vec3d_): void;
        getRandomX(arg0: number): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: Internal.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        static getRandomSheepColor(arg0: Internal.RandomSource_): Internal.DyeColor;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getAlpha(le: Internal.LivingEntity_, partialTicks: number): number;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        isSunBurnTick(): boolean;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        isAffectedByFluids(): boolean;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        getAmbientSound(): Internal.SoundEvent;
        getColor(): Internal.DyeColor;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        isCulled(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getRiddenSpeed(arg0: Internal.Player_): number;
        processPortalCooldown(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getLeashHolder(): Internal.Entity;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        removeSoulSpeed(): void;
        shouldDropExperience(): boolean;
        getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        redirect$cic000$moonlight$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        getArrowCount(): number;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        handler$dec000$parcool$onIsInWall(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canRide(arg0: Internal.Entity_): boolean;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        setColor(arg0: Internal.DyeColor_): void;
        getLastHurtMob(): Internal.LivingEntity;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        removeAfterChangingDimensions(): void;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getSharedFlag(arg0: number): boolean;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        tryAddFrost(): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        ageUp(arg0: number): void;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        invokeShouldDropLoot(): boolean;
        removeVehicle(): void;
        defineSynchedData(): void;
        checkInsideBlocks(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        wrapOperation$dab000$supplementaries$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        createHoverEvent(): Internal.HoverEvent;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        serverAiStep(): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        setItemSlotAndDropWhenKilled(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        sendDebugPackets(): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        dropFromLootTable(arg0: DamageSource_, arg1: boolean): void;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        updateUsingItem(arg0: Internal.ItemStack_): void;
        canChangeDimensions(): boolean;
        modifyReturnValue$dkm000$create$onFireImmune(arg0: boolean): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        setInLoveTime(arg0: number): void;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        essential$getRealPrevRenderYaw(): number;
        enchantSpawnedArmor(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.EquipmentSlot_): void;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        repositionEntityAfterLoad(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        handler$dec000$parcool$onOnGround(arg0: Internal.CallbackInfoReturnable_<any>): void;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        ageBoundaryReached(): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        playBlockFallSound(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        updateControlFlags(): void;
        createBodyControl(): Internal.BodyRotationControl;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        setPos(arg0: Vec3d_): void;
        enchantSpawnedWeapon(arg0: Internal.RandomSource_, arg1: number): void;
        populateDefaultEquipmentEnchantments(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        doPush(arg0: Internal.Entity_): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isUsingItem(): boolean;
        essential$getRealRenderYaw(): number;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        jumpFromGround(): void;
        canMate(arg0: Internal.Animal_): boolean;
        canReplaceCurrentItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        onChangedBlock(arg0: BlockPos_): void;
        isAlive(): boolean;
        usePlayerItem(arg0: Internal.Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_): void;
        startSleeping(arg0: BlockPos_): void;
        pickUpItem(arg0: Internal.ItemEntity_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        calculateFallDamage(arg0: number, arg1: number): number;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateEffectVisibility(): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        getSoundVolume(): number;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        updateInvisibilityStatus(): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        supp$setSlimedTicks(newSlimedTicks: number, sync: boolean): void;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        newFloatList(...arg0: number[]): Internal.ListTag;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        handler$zjk001$sodiumdynamiclights$onTick(ci: Internal.CallbackInfo_): void;
        getJumpControl(): Internal.JumpControl;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        handler$ded000$parcool$onClimbable(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        canBreed(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getBlockJumpFactor(): number;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        onSoulSpeedBlock(): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        playEntityOnFireExtinguishedSound(): void;
        isFullyFrozen(): boolean;
        dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        isInWall(): boolean;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setUseItem(arg0: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        getAge(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        dropExperience(): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        decreaseAirSupply(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        handler$bif000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        static getColorArray(arg0: Internal.DyeColor_): number[];
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        onOffspringSpawnedFromEgg(arg0: Internal.Player_, arg1: Internal.Mob_): void;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        parCool$isLivingOnCustomLadder(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        bo$getRenderer(): Internal.EntityRenderer<any>;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        isSheared(): boolean;
        getDamageAfterMagicAbsorb(arg0: DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        tryAddSoulSpeed(): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        doWaterSplashEffect(): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getFlyingSpeed(): number;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        dropAllDeathLoot(arg0: DamageSource_): void;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        tickLeash(): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        customServerAiStep(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        handleNetherPortal(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        followLeashSpeed(): number;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        triggerItemUseEffects(arg0: Internal.ItemStack_, arg1: number): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        /**
         * @deprecated
        */
        jumpInLiquid(arg0: Internal.TagKey_<Internal.Fluid>): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        reapplyPosition(): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        static isBrightEnoughToSpawn(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): boolean;
        getWaterSlowDown(): number;
        createNavigation(arg0: Internal.Level_): Internal.PathNavigation;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        supp$getSlimedTicks(): number;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getRiddenInput(arg0: Internal.Player_, arg1: Vec3d_): Vec3d;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        dropEquipment(): void;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): this;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        setSheared(arg0: boolean): void;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getHeadEatPositionScale(arg0: number): number;
        removePassenger(arg0: Internal.Entity_): void;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        addPassenger(arg0: Internal.Entity_): void;
        getSleepingPos(): Internal.Optional<any>;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getPermissionLevel(): number;
        getMotionZ(): number;
        nextStep(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        setInLove(arg0: Internal.Player_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        pushEntities(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        setTimeout(): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        handler$zjk000$sodiumdynamiclights$onRemove(ci: Internal.CallbackInfo_): void;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        readyForShearing(): boolean;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        blockUsingShield(arg0: Internal.LivingEntity_): void;
        processFlappingMovement(): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setAge(arg0: number): void;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        isInLove(): boolean;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        unsetRemoved(): void;
        getPickupReach(): Vec3i;
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        sdl$getLuminance(): number;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        populateDefaultEquipmentSlots(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        completeUsingItem(): void;
        resetLove(): void;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        brainProvider(): Internal.Brain$Provider<any>;
        getJumpPower(): number;
        registerGoals(): void;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        removeEffectParticles(): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): Internal.Component;
        getTicksRequiredToFreeze(): number;
        shouldDespawnInPeaceful(): boolean;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        handler$dec000$parcool$onGetEyeHeight(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getUsername(): string;
        transition$getRawPosition(): Vec3d;
        getInLoveTime(): number;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): Internal.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getHeadEatAngleScale(arg0: number): number;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        static tickEntity(entity: Internal.LivingEntity_): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        playHurtSound(arg0: DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        setMotionX(x: number): void;
        shouldStayCloseToLeashHolder(): boolean;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        getMovementEmission(): Internal.Entity$MovementEmission;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        redirect$bhp000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: DamageSource_, amount: number): boolean;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        tickEffects(): void;
        isForcedVisible(): boolean;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        set culled(value: boolean)
        get onFire(): boolean
        get deathSound(): Internal.SoundEvent
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get alwaysExperienceDropper(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        set outOfCamera(value: boolean)
        get defaultLootTable(): ResourceLocation
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: Internal.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get sunBurnTick(): boolean
        get affectedByFluids(): boolean
        get ambientSound(): Internal.SoundEvent
        get color(): Internal.DyeColor
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get culled(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        set color(arg0: Internal.DyeColor_)
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get fireImmuneTicks(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        set inLoveTime(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        get soundVolume(): number
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get flapping(): boolean
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get blockJumpFactor(): number
        get fullyFrozen(): boolean
        get inWall(): boolean
        get meleeAttackReferencePosition(): Vec3d
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        set useItem(arg0: Internal.ItemStack_)
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get age(): number
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get sheared(): boolean
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get swimSound(): Internal.SoundEvent
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get flyingSpeed(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get waterSlowDown(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        set sheared(arg0: boolean)
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get sleepingPos(): Internal.Optional<any>
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get permissionLevel(): number
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        set inLove(arg0: Internal.Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get outOfCamera(): boolean
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        set age(arg0: number)
        get target(): Internal.LivingEntity
        get inLove(): boolean
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get pickupReach(): Vec3i
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get immobile(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get jumpPower(): number
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): Internal.Component
        get typeName(): Internal.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get inLoveTime(): number
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): Internal.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get movementEmission(): Internal.Entity$MovementEmission
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type Sheep_ = Sheep;
    class FishingRodItem extends Internal.Item implements Internal.Vanishable {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        handler$ckh000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        overrideFood(arg0: Internal.FoodProperties_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        handler$bfp000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set craftingRemainder(arg0: Internal.Item_)
    }
    type FishingRodItem_ = FishingRodItem;
    class AttributeKey <T> extends Internal.AbstractConstant<Internal.AttributeKey<T>> {
        getClass(): typeof any;
        toString(): string;
        "compareTo(io.netty.util.AttributeKey)"(arg0: Internal.AttributeKey_<T>): number;
        notifyAll(): void;
        static valueOf<T>(arg0: typeof any, arg1: string): Internal.AttributeKey<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf<T>(arg0: string): Internal.AttributeKey<T>;
        name(): string;
        hashCode(): number;
        id(): number;
        wait(): void;
        static newInstance<T>(arg0: string): Internal.AttributeKey<T>;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static exists(arg0: string): boolean;
        compareTo(arg0: Internal.AttributeKey_<T>): number;
        get class(): typeof any
    }
    type AttributeKey_<T> = AttributeKey<T>;
    class TravellingPoint {
        constructor()
        constructor(arg0: Internal.TrackNode_, arg1: Internal.TrackNode_, arg2: Internal.TrackEdge_, arg3: number, arg4: boolean)
        ignoreEdgePoints(): Internal.TravellingPoint$IEdgePointListener;
        getClass(): typeof any;
        getPositionWithOffset(arg0: Internal.TrackGraph_, arg1: number, arg2: boolean): Vec3d;
        travel(arg0: Internal.TrackGraph_, arg1: number, arg2: Internal.TravellingPoint$ITrackSelector_, arg3: Internal.TravellingPoint$IEdgePointListener_, arg4: Internal.TravellingPoint$ITurnListener_): number;
        follow(arg0: Internal.TravellingPoint_): Internal.TravellingPoint$ITrackSelector;
        random(): Internal.TravellingPoint$ITrackSelector;
        getPosition(arg0: Internal.TrackGraph_, arg1: boolean): Vec3d;
        travel(arg0: Internal.TrackGraph_, arg1: number, arg2: Internal.TravellingPoint$ITrackSelector_, arg3: Internal.TravellingPoint$IEdgePointListener_, arg4: Internal.TravellingPoint$ITurnListener_, arg5: Internal.TravellingPoint$IPortalListener_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        write(arg0: Internal.DimensionPalette_): Internal.CompoundTag;
        steer(arg0: Internal.TravellingPoint$SteerDirection_, arg1: Vec3d_): Internal.TravellingPoint$ITrackSelector;
        travel(arg0: Internal.TrackGraph_, arg1: number, arg2: Internal.TravellingPoint$ITrackSelector_, arg3: Internal.TravellingPoint$IEdgePointListener_): number;
        travel(arg0: Internal.TrackGraph_, arg1: number, arg2: Internal.TravellingPoint$ITrackSelector_): number;
        toString(): string;
        static read(arg0: Internal.CompoundTag_, arg1: Internal.TrackGraph_, arg2: Internal.DimensionPalette_): Internal.TravellingPoint;
        notifyAll(): void;
        follow(arg0: Internal.TravellingPoint_, arg1: Internal.Consumer_<boolean>): Internal.TravellingPoint$ITrackSelector;
        ignorePortals(): Internal.TravellingPoint$IPortalListener;
        hashCode(): number;
        reverse(arg0: Internal.TrackGraph_): void;
        wait(): void;
        wait(arg0: number): void;
        migrateTo(arg0: Internal.List_<Internal.TrackGraphLocation>): void;
        equals(arg0: any): boolean;
        getPosition(arg0: Internal.TrackGraph_): Vec3d;
        ignoreTurns(): Internal.TravellingPoint$ITurnListener;
        get class(): typeof any
        position: number;
        blocked: boolean;
        upsideDown: boolean;
        node1: Internal.TrackNode;
        node2: Internal.TrackNode;
        edge: Internal.TrackEdge;
    }
    type TravellingPoint_ = TravellingPoint;
    class BlockRotProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.HolderSet_<Internal.Block>, arg1: number)
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        processEntity(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.StructureTemplate$StructureEntityInfo_, arg3: Internal.StructureTemplate$StructureEntityInfo_, arg4: Internal.StructurePlaceSettings_, arg5: Internal.StructureTemplate_): Internal.StructureTemplate$StructureEntityInfo;
        wait(): void;
        getType(): Internal.StructureProcessorType<any>;
        process(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_, arg6: Internal.StructureTemplate_): Internal.StructureTemplate$StructureBlockInfo;
        wait(arg0: number): void;
        processBlock(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_): Internal.StructureTemplate$StructureBlockInfo;
        finalizeProcessing(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg5: Internal.StructurePlaceSettings_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get type(): Internal.StructureProcessorType<any>
        static readonly CODEC: Internal.Codec<Internal.BlockRotProcessor>;
    }
    type BlockRotProcessor_ = BlockRotProcessor;
    class OceanRuinStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.OceanRuinStructure$Type_, arg2: number, arg3: number)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        step(): Internal.GenerationStep$Decoration;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        type(): Internal.StructureType<any>;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        static getLowestY(arg0: Internal.Structure$GenerationContext_, arg1: number, arg2: number, arg3: number, arg4: number): number;
        toString(): string;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        notifyAll(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        static getLowestY(arg0: Internal.Structure$GenerationContext_, arg1: number, arg2: number): number;
        static onTopOfChunkCenter(arg0: Internal.Structure$GenerationContext_, arg1: Internal.Heightmap$Types_, arg2: Internal.Consumer_<Internal.StructurePiecesBuilder>): Internal.Optional<Internal.Structure$GenerationStub>;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        hashCode(): number;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        /**
         * @deprecated
        */
        getLowestYIn5by5BoxOffset7Blocks(arg0: Internal.Structure$GenerationContext_, arg1: Internal.Rotation_): BlockPos;
        wait(): void;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        readonly biomeTemp: Internal.OceanRuinStructure$Type;
        static readonly CODEC: Internal.Codec<Internal.OceanRuinStructure>;
        readonly clusterProbability: number;
        readonly largeProbability: number;
    }
    type OceanRuinStructure_ = OceanRuinStructure;
    class LootItemConditionType extends Internal.SerializerType<Internal.LootItemCondition> {
        constructor(arg0: Internal.Serializer_<Internal.LootItemCondition>)
        getClass(): typeof any;
        getSerializer(): Internal.Serializer<Internal.LootItemCondition>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get serializer(): Internal.Serializer<Internal.LootItemCondition>
    }
    type LootItemConditionType_ = LootItemConditionType | Special.LootConditionType;
    class LastSeenMessages$Packed extends Internal.Record {
        constructor(arg0: Internal.List_<Internal.MessageSignature$Packed>)
        constructor(arg0: Internal.FriendlyByteBuf_)
        entries(): Internal.List<Internal.MessageSignature$Packed>;
        getClass(): typeof any;
        hashCode(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        unpack(arg0: Internal.MessageSignatureCache_): Internal.Optional<Internal.LastSeenMessages>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly EMPTY: (Internal.LastSeenMessages$Packed) & (Internal.LastSeenMessages$Packed);
    }
    type LastSeenMessages$Packed_ = LastSeenMessages$Packed;
    class UMatrixStack$Companion {
        constructor($constructor_marker: any_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type UMatrixStack$Companion_ = UMatrixStack$Companion;
    abstract class TypeAdapter <T> {
        constructor()
        toJsonTree(arg0: T): com.google.gson.JsonElement;
        getClass(): typeof any;
        fromJsonTree(arg0: com.google.gson.JsonElement_): T;
        abstract write(arg0: Internal.JsonWriter_, arg1: T): void;
        toString(): string;
        notifyAll(): void;
        nullSafe(): this;
        abstract read(arg0: Internal.JsonReader_): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        fromJson(arg0: Internal.Reader_): T;
        hashCode(): number;
        "fromJson(java.lang.String)"(arg0: string): T;
        wait(): void;
        wait(arg0: number): void;
        "fromJson(java.io.Reader)"(arg0: Internal.Reader_): T;
        toJson(arg0: Internal.Writer_, arg1: T): void;
        fromJson(arg0: string): T;
        equals(arg0: any): boolean;
        toJson(arg0: T): string;
        get class(): typeof any
    }
    type TypeAdapter_<T> = TypeAdapter<T>;
    interface ClientGamePacketListener extends Internal.PacketListener {
        abstract setActionBarText(arg0: Internal.ClientboundSetActionBarTextPacket_): void;
        abstract handleContainerSetSlot(arg0: Internal.ClientboundContainerSetSlotPacket_): void;
        abstract handleAddPlayer(arg0: Internal.ClientboundAddPlayerPacket_): void;
        abstract handleSetScore(arg0: Internal.ClientboundSetScorePacket_): void;
        abstract handleAnimate(arg0: Internal.ClientboundAnimatePacket_): void;
        abstract handlePlayerInfoRemove(arg0: Internal.ClientboundPlayerInfoRemovePacket_): void;
        abstract handleResourcePack(arg0: Internal.ClientboundResourcePackPacket_): void;
        abstract handleOpenScreen(arg0: Internal.ClientboundOpenScreenPacket_): void;
        abstract handleContainerContent(arg0: Internal.ClientboundContainerSetContentPacket_): void;
        abstract handleLogin(arg0: Internal.ClientboundLoginPacket_): void;
        abstract handleTagQueryPacket(arg0: Internal.ClientboundTagQueryPacket_): void;
        abstract onDisconnect(arg0: Internal.Component_): void;
        abstract handleUpdateAttributes(arg0: Internal.ClientboundUpdateAttributesPacket_): void;
        abstract handleSetSpawn(arg0: Internal.ClientboundSetDefaultSpawnPositionPacket_): void;
        abstract handleCustomPayload(arg0: Internal.ClientboundCustomPayloadPacket_): void;
        abstract handleLookAt(arg0: Internal.ClientboundPlayerLookAtPacket_): void;
        abstract handlePlayerInfoUpdate(arg0: Internal.ClientboundPlayerInfoUpdatePacket_): void;
        abstract handleParticleEvent(arg0: Internal.ClientboundLevelParticlesPacket_): void;
        abstract handleHurtAnimation(arg0: Internal.ClientboundHurtAnimationPacket_): void;
        abstract handleTitlesClear(arg0: Internal.ClientboundClearTitlesPacket_): void;
        abstract handleCustomChatCompletions(arg0: Internal.ClientboundCustomChatCompletionsPacket_): void;
        abstract handleContainerClose(arg0: Internal.ClientboundContainerClosePacket_): void;
        abstract handleRemoveEntities(arg0: Internal.ClientboundRemoveEntitiesPacket_): void;
        abstract handlePlayerCombatEnter(arg0: Internal.ClientboundPlayerCombatEnterPacket_): void;
        abstract handleSetCamera(arg0: Internal.ClientboundSetCameraPacket_): void;
        abstract handleTeleportEntity(arg0: Internal.ClientboundTeleportEntityPacket_): void;
        abstract handleForgetLevelChunk(arg0: Internal.ClientboundForgetLevelChunkPacket_): void;
        abstract handleBlockEvent(arg0: Internal.ClientboundBlockEventPacket_): void;
        abstract handleLightUpdatePacket(arg0: Internal.ClientboundLightUpdatePacket_): void;
        abstract handleMoveVehicle(arg0: Internal.ClientboundMoveVehiclePacket_): void;
        abstract handleCommands(arg0: Internal.ClientboundCommandsPacket_): void;
        abstract handleSetBorderCenter(arg0: Internal.ClientboundSetBorderCenterPacket_): void;
        abstract handleItemCooldown(arg0: Internal.ClientboundCooldownPacket_): void;
        abstract setSubtitleText(arg0: Internal.ClientboundSetSubtitleTextPacket_): void;
        abstract handleAddExperienceOrb(arg0: Internal.ClientboundAddExperienceOrbPacket_): void;
        abstract handleRespawn(arg0: Internal.ClientboundRespawnPacket_): void;
        abstract handleCommandSuggestions(arg0: Internal.ClientboundCommandSuggestionsPacket_): void;
        abstract handleSetEquipment(arg0: Internal.ClientboundSetEquipmentPacket_): void;
        abstract handleChunkBlocksUpdate(arg0: Internal.ClientboundSectionBlocksUpdatePacket_): void;
        abstract handleBlockChangedAck(arg0: Internal.ClientboundBlockChangedAckPacket_): void;
        abstract handleExplosion(arg0: Internal.ClientboundExplodePacket_): void;
        abstract handleUpdateMobEffect(arg0: Internal.ClientboundUpdateMobEffectPacket_): void;
        abstract handleKeepAlive(arg0: Internal.ClientboundKeepAlivePacket_): void;
        abstract handleUpdateRecipes(arg0: Internal.ClientboundUpdateRecipesPacket_): void;
        abstract handleOpenBook(arg0: Internal.ClientboundOpenBookPacket_): void;
        abstract handleLevelChunkWithLight(arg0: Internal.ClientboundLevelChunkWithLightPacket_): void;
        abstract handleBlockEntityData(arg0: Internal.ClientboundBlockEntityDataPacket_): void;
        abstract handleUpdateAdvancementsPacket(arg0: Internal.ClientboundUpdateAdvancementsPacket_): void;
        abstract handleBundlePacket(arg0: Internal.ClientboundBundlePacket_): void;
        abstract handleSetChunkCacheRadius(arg0: Internal.ClientboundSetChunkCacheRadiusPacket_): void;
        abstract handleMapItemData(arg0: Internal.ClientboundMapItemDataPacket_): void;
        abstract handleInitializeBorder(arg0: Internal.ClientboundInitializeBorderPacket_): void;
        abstract handleSetPlayerTeamPacket(arg0: Internal.ClientboundSetPlayerTeamPacket_): void;
        abstract handleBlockDestruction(arg0: Internal.ClientboundBlockDestructionPacket_): void;
        abstract handleServerData(arg0: Internal.ClientboundServerDataPacket_): void;
        abstract handleTakeItemEntity(arg0: Internal.ClientboundTakeItemEntityPacket_): void;
        abstract handleEntityLinkPacket(arg0: Internal.ClientboundSetEntityLinkPacket_): void;
        abstract handlePlayerChat(arg0: Internal.ClientboundPlayerChatPacket_): void;
        abstract handleSetTime(arg0: Internal.ClientboundSetTimePacket_): void;
        abstract handleSetBorderSize(arg0: Internal.ClientboundSetBorderSizePacket_): void;
        abstract handleSetCarriedItem(arg0: Internal.ClientboundSetCarriedItemPacket_): void;
        abstract setTitlesAnimation(arg0: Internal.ClientboundSetTitlesAnimationPacket_): void;
        abstract handleDamageEvent(arg0: Internal.ClientboundDamageEventPacket_): void;
        abstract handleSetBorderLerpSize(arg0: Internal.ClientboundSetBorderLerpSizePacket_): void;
        abstract handleSetExperience(arg0: Internal.ClientboundSetExperiencePacket_): void;
        abstract handleSetDisplayObjective(arg0: Internal.ClientboundSetDisplayObjectivePacket_): void;
        abstract handleChunksBiomes(arg0: Internal.ClientboundChunksBiomesPacket_): void;
        abstract handleSetHealth(arg0: Internal.ClientboundSetHealthPacket_): void;
        abstract handleTabListCustomisation(arg0: Internal.ClientboundTabListPacket_): void;
        abstract handleAddObjective(arg0: Internal.ClientboundSetObjectivePacket_): void;
        abstract handleDisconnect(arg0: Internal.ClientboundDisconnectPacket_): void;
        abstract handleUpdateTags(arg0: Internal.ClientboundUpdateTagsPacket_): void;
        abstract handleMerchantOffers(arg0: Internal.ClientboundMerchantOffersPacket_): void;
        abstract handleStopSoundEvent(arg0: Internal.ClientboundStopSoundPacket_): void;
        abstract handleRemoveMobEffect(arg0: Internal.ClientboundRemoveMobEffectPacket_): void;
        abstract handleSetSimulationDistance(arg0: Internal.ClientboundSetSimulationDistancePacket_): void;
        abstract handleSetChunkCacheCenter(arg0: Internal.ClientboundSetChunkCacheCenterPacket_): void;
        abstract handlePing(arg0: Internal.ClientboundPingPacket_): void;
        abstract handleDisguisedChat(arg0: Internal.ClientboundDisguisedChatPacket_): void;
        abstract handleBlockUpdate(arg0: Internal.ClientboundBlockUpdatePacket_): void;
        abstract handleRotateMob(arg0: Internal.ClientboundRotateHeadPacket_): void;
        abstract handleSystemChat(arg0: Internal.ClientboundSystemChatPacket_): void;
        abstract handleMovePlayer(arg0: Internal.ClientboundPlayerPositionPacket_): void;
        abstract handleDeleteChat(arg0: Internal.ClientboundDeleteChatPacket_): void;
        abstract handleSoundEntityEvent(arg0: Internal.ClientboundSoundEntityPacket_): void;
        abstract handleAddEntity(arg0: Internal.ClientboundAddEntityPacket_): void;
        abstract handleHorseScreenOpen(arg0: Internal.ClientboundHorseScreenOpenPacket_): void;
        abstract handleChangeDifficulty(arg0: Internal.ClientboundChangeDifficultyPacket_): void;
        abstract handleEntityEvent(arg0: Internal.ClientboundEntityEventPacket_): void;
        abstract handleSetBorderWarningDelay(arg0: Internal.ClientboundSetBorderWarningDelayPacket_): void;
        abstract handleEnabledFeatures(arg0: Internal.ClientboundUpdateEnabledFeaturesPacket_): void;
        abstract handleOpenSignEditor(arg0: Internal.ClientboundOpenSignEditorPacket_): void;
        abstract setTitleText(arg0: Internal.ClientboundSetTitleTextPacket_): void;
        abstract handleSetEntityData(arg0: Internal.ClientboundSetEntityDataPacket_): void;
        abstract handleBossUpdate(arg0: Internal.ClientboundBossEventPacket_): void;
        abstract handlePlaceRecipe(arg0: Internal.ClientboundPlaceGhostRecipePacket_): void;
        abstract handleGameEvent(arg0: Internal.ClientboundGameEventPacket_): void;
        abstract isAcceptingMessages(): boolean;
        abstract handleSoundEvent(arg0: Internal.ClientboundSoundPacket_): void;
        abstract handleSetEntityMotion(arg0: Internal.ClientboundSetEntityMotionPacket_): void;
        abstract handleContainerSetData(arg0: Internal.ClientboundContainerSetDataPacket_): void;
        abstract handlePlayerCombatEnd(arg0: Internal.ClientboundPlayerCombatEndPacket_): void;
        abstract handleMoveEntity(arg0: Internal.ClientboundMoveEntityPacket_): void;
        abstract handleLevelEvent(arg0: Internal.ClientboundLevelEventPacket_): void;
        abstract handlePlayerAbilities(arg0: Internal.ClientboundPlayerAbilitiesPacket_): void;
        shouldPropagateHandlingExceptions(): boolean;
        abstract handlePlayerCombatKill(arg0: Internal.ClientboundPlayerCombatKillPacket_): void;
        abstract handleSetBorderWarningDistance(arg0: Internal.ClientboundSetBorderWarningDistancePacket_): void;
        abstract handleSetEntityPassengersPacket(arg0: Internal.ClientboundSetPassengersPacket_): void;
        abstract handleAwardStats(arg0: Internal.ClientboundAwardStatsPacket_): void;
        abstract handleSelectAdvancementsTab(arg0: Internal.ClientboundSelectAdvancementsTabPacket_): void;
        abstract handleAddOrRemoveRecipes(arg0: Internal.ClientboundRecipePacket_): void;
        set actionBarText(arg0: Internal.ClientboundSetActionBarTextPacket_)
        set subtitleText(arg0: Internal.ClientboundSetSubtitleTextPacket_)
        set titlesAnimation(arg0: Internal.ClientboundSetTitlesAnimationPacket_)
        set titleText(arg0: Internal.ClientboundSetTitleTextPacket_)
        get acceptingMessages(): boolean
    }
    type ClientGamePacketListener_ = ClientGamePacketListener;
    class ClipContext$Fluid extends Internal.Enum<Internal.ClipContext$Fluid> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        compareTo(arg0: Internal.ClipContext$Fluid_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.ClipContext$Fluid;
        name(): string;
        hashCode(): number;
        "compareTo(net.minecraft.world.level.ClipContext$Fluid)"(arg0: Internal.ClipContext$Fluid_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ClipContext$Fluid>>;
        canPick(arg0: Internal.FluidState_): boolean;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static values(): Internal.ClipContext$Fluid[];
        getDeclaringClass(): typeof Internal.ClipContext$Fluid;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ClipContext$Fluid
        static readonly SOURCE_ONLY: (Internal.ClipContext$Fluid) & (Internal.ClipContext$Fluid);
        static readonly WATER: (Internal.ClipContext$Fluid) & (Internal.ClipContext$Fluid);
        static readonly NONE: (Internal.ClipContext$Fluid) & (Internal.ClipContext$Fluid);
        static readonly ANY: (Internal.ClipContext$Fluid) & (Internal.ClipContext$Fluid);
    }
    type ClipContext$Fluid_ = "any" | "source_only" | ClipContext$Fluid | "water" | "none";
    interface Quaternionfc {
        abstract "transform(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract slerp(arg0: Internal.Quaternionfc_, arg1: number, arg2: Quaternionf_): Quaternionf;
        abstract transformInverse(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformPositiveY(arg0: Vec3f_): Vec3f;
        abstract transformPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Quaternionfc_, arg1: Quaternionf_): Quaternionf;
        abstract transformUnit(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract getEulerAnglesXYZ(arg0: Vec3f_): Vec3f;
        abstract "getAsMatrix3f(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract "transformInverse(float,float,float,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnit(double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract conjugate(arg0: Quaternionf_): Quaternionf;
        abstract transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformUnitPositiveZ(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract transformInverse(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveY(arg0: Vec4f_): Vec4f;
        abstract transformPositiveX(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract premul(arg0: Internal.Quaternionfc_, arg1: Quaternionf_): Quaternionf;
        abstract transformUnit(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformUnitPositiveY(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract invert(arg0: Quaternionf_): Quaternionf;
        abstract "get(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        abstract transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transform(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverse(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract positiveZ(arg0: Vec3f_): Vec3f;
        abstract div(arg0: Internal.Quaternionfc_, arg1: Quaternionf_): Quaternionf;
        abstract transformPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnit(arg0: Vec4f_): Vec4f;
        abstract transformPositiveZ(arg0: Vec3f_): Vec3f;
        abstract scale(arg0: number, arg1: Quaternionf_): Quaternionf;
        abstract nlerp(arg0: Internal.Quaternionfc_, arg1: number, arg2: Quaternionf_): Quaternionf;
        abstract "transformInverse(org.joml.Vector4fc,org.joml.Vector4f)"(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transformUnitPositiveX(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Quaternionf_): Quaternionf;
        abstract "transformPositiveY(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: Matrix4f_): Matrix4f;
        abstract transform(arg0: Vec4f_): Vec4f;
        abstract transformUnit(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract getAsMatrix3f(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(org.joml.Matrix4x3f)"(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract "transformInverseUnit(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract normalize(arg0: Quaternionf_): Quaternionf;
        abstract transformInverseUnit(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract mul(arg0: number, arg1: Quaternionf_): Quaternionf;
        abstract "transformPositiveZ(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformUnit(float,float,float,org.joml.Vector4f)"(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract w(): number;
        abstract transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateTo(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Quaternionf_): Quaternionf;
        abstract transformPositiveY(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformInverse(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract transformPositiveZ(arg0: Vec4f_): Vec4f;
        abstract "transformInverse(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract transformInverse(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract get(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract transform(arg0: Vec3f_): Vec3f;
        abstract "get(org.joml.Matrix3d)"(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract get(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf_): Quaternionf;
        abstract transformPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(org.joml.Matrix3f)"(arg0: Matrix3f_): Matrix3f;
        abstract "transformUnit(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract rotateLocalY(arg0: number, arg1: Quaternionf_): Quaternionf;
        abstract transformInverseUnit(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformPositiveY(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract isFinite(): boolean;
        abstract transformUnitPositiveX(arg0: Vec3f_): Vec3f;
        abstract get(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        abstract x(): number;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transform(double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnit(arg0: Vec3f_): Vec3f;
        abstract transformPositiveZ(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformPositiveX(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract "transform(float,float,float,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract "transform(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverseUnit(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transformUnitPositiveZ(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "mul(float,org.joml.Quaternionf)"(arg0: number, arg1: Quaternionf_): Quaternionf;
        abstract "transformInverseUnit(float,float,float,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract integrate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf_): Quaternionf;
        abstract "transformPositiveX(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transform(float,float,float,org.joml.Vector4f)"(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract get(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract "getAsMatrix4f(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract "transformUnit(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformInverse(float,float,float,org.joml.Vector4f)"(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract transformInverse(arg0: Vec4f_): Vec4f;
        abstract getEulerAnglesZXY(arg0: Vec3f_): Vec3f;
        abstract nlerpIterative(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: Quaternionf_): Quaternionf;
        abstract transform(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateLocalZ(arg0: number, arg1: Quaternionf_): Quaternionf;
        abstract getAsMatrix4f(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract "transformUnit(float,float,float,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract add(arg0: Internal.Quaternionfc_, arg1: Quaternionf_): Quaternionf;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract "transformUnitPositiveY(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract "getAsMatrix4f(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Quaternionf_): Quaternionf;
        abstract rotateAxis(arg0: number, arg1: Internal.Vector3fc_, arg2: Quaternionf_): Quaternionf;
        abstract "transformInverse(double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract y(): number;
        abstract transformInverse(arg0: Vec3f_): Vec3f;
        abstract "transformUnitPositiveX(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getAsMatrix4x3f(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverse(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformPositiveZ(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverse(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformInverseUnit(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformInverseUnit(float,float,float,org.joml.Vector4f)"(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract "transformInverse(float,float,float,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract "transform(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "getAsMatrix4x3f(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract transformUnitPositiveZ(arg0: Vec3f_): Vec3f;
        abstract transformUnitPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnitPositiveZ(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transform(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnit(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract z(): number;
        abstract "transformUnitPositiveY(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract normalizedPositiveX(arg0: Vec3f_): Vec3f;
        abstract "get(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract getAsMatrix3f(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract transformInverseUnit(arg0: Vec3f_): Vec3f;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract lengthSquared(): number;
        abstract getEulerAnglesYXZ(arg0: Vec3f_): Vec3f;
        abstract get(arg0: Quaternionf_): Quaternionf;
        abstract transformUnitPositiveX(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateX(arg0: number, arg1: Quaternionf_): Quaternionf;
        abstract transformUnitPositiveY(arg0: Vec4f_): Vec4f;
        abstract "transformInverseUnit(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract "transformUnitPositiveX(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Quaternionf_): Quaternionf;
        abstract rotateLocalX(arg0: number, arg1: Quaternionf_): Quaternionf;
        abstract "transformPositiveY(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract transformUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract transformInverseUnit(arg0: Vec4f_): Vec4f;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(org.joml.Matrix4x3d)"(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transformInverseUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnitPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverseUnit(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnitPositiveY(arg0: Vec3f_): Vec3f;
        abstract "transformUnit(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverseUnit(org.joml.Vector4fc,org.joml.Vector4f)"(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transformUnit(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract "transformPositiveZ(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract normalizedPositiveY(arg0: Vec3f_): Vec3f;
        abstract "transformInverse(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transform(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract equals(arg0: Internal.Quaternionfc_, arg1: number): boolean;
        abstract transformInverse(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf_): Quaternionf;
        abstract "transform(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnitPositiveX(arg0: Vec4f_): Vec4f;
        abstract premul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf_): Quaternionf;
        abstract getAsMatrix4x3f(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "transformInverse(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnit(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract lookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Quaternionf_): Quaternionf;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformPositiveY(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverseUnit(double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract "getAsMatrix4x3f(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract normalizedPositiveZ(arg0: Vec3f_): Vec3f;
        abstract "getAsMatrix3f(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract conjugateBy(arg0: Internal.Quaternionfc_, arg1: Quaternionf_): Quaternionf;
        abstract "transform(float,float,float,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract getEulerAnglesZYX(arg0: Vec3f_): Vec3f;
        abstract angle(): number;
        abstract "transformPositiveX(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverseUnit(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "transform(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract "transformInverseUnit(float,float,float,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract get(arg0: Matrix3f_): Matrix3f;
        abstract "transformUnitPositiveZ(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract rotateZ(arg0: number, arg1: Quaternionf_): Quaternionf;
        abstract "transformInverseUnit(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract positiveX(arg0: Vec3f_): Vec3f;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Quaternionf_): Quaternionf;
        abstract transformUnitPositiveZ(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract "transformPositiveX(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract getAsMatrix4f(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverseUnit(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract difference(arg0: Internal.Quaternionfc_, arg1: Quaternionf_): Quaternionf;
        abstract transformPositiveX(arg0: Vec3f_): Vec3f;
        abstract "transformInverse(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf_): Quaternionf;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformUnit(float,float,float,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "mul(org.joml.Quaternionfc,org.joml.Quaternionf)"(arg0: Internal.Quaternionfc_, arg1: Quaternionf_): Quaternionf;
        abstract transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnitPositiveY(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnitPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract "transformUnit(org.joml.Vector4fc,org.joml.Vector4f)"(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transform(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract "transformUnit(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Quaternionf_): Quaternionf;
        abstract transformInverse(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transformInverseUnit(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveX(arg0: Vec4f_): Vec4f;
        abstract "get(org.joml.Matrix4f)"(arg0: Matrix4f_): Matrix4f;
        abstract positiveY(arg0: Vec3f_): Vec3f;
        abstract "transformInverse(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract transformUnitPositiveZ(arg0: Vec4f_): Vec4f;
        abstract get(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transform(org.joml.Vector4fc,org.joml.Vector4f)"(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transformPositiveZ(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract "transformUnitPositiveX(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract transformUnitPositiveY(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateY(arg0: number, arg1: Quaternionf_): Quaternionf;
        abstract "transformUnit(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        get finite(): boolean
    }
    type Quaternionfc_ = Quaternionfc;
    interface Object2ObjectMap$FastEntrySet <K, V> extends Internal.ObjectSet<Internal.Object2ObjectMap$Entry<K, V>> {
        abstract addAll(arg0: Internal.Collection_<Internal.Object2ObjectMap$Entry<K, V>>): boolean;
        "of(java.lang.Object)"<K>(arg0: K): Internal.ObjectSet<K>;
        of<K>(arg0: K, arg1: K, arg2: K): Internal.ObjectSet<K>;
        abstract isEmpty(): boolean;
        parallelStream(): Internal.Stream<Internal.Object2ObjectMap$Entry<K, V>>;
        of<K>(arg0: K, arg1: K): Internal.ObjectSet<K>;
        abstract add(arg0: Internal.Object2ObjectMap$Entry_<K, V>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        abstract contains(arg0: any): boolean;
        abstract fastIterator(): Internal.ObjectIterator<Internal.Object2ObjectMap$Entry<K, V>>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        forEach(arg0: Internal.Consumer_<Internal.Object2ObjectMap$Entry<K, V>>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        "of(java.lang.Object[])"<K>(...arg0: K[]): Internal.ObjectSet<K>;
        abstract toArray(): any[];
        stream(): Internal.Stream<Internal.Object2ObjectMap$Entry<K, V>>;
        fastForEach(arg0: Internal.Consumer_<Internal.Object2ObjectMap$Entry<K, V>>): void;
        of<K>(): Internal.ObjectSet<K>;
        abstract hashCode(): number;
        abstract size(): number;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        removeIf(arg0: Internal.Predicate_<Internal.Object2ObjectMap$Entry<K, V>>): boolean;
        of<K>(...arg0: K[]): Internal.ObjectSet<K>;
        abstract clear(): void;
        of<K>(arg0: K): Internal.ObjectSet<K>;
        abstract equals(arg0: any): boolean;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        get empty(): boolean
    }
    type Object2ObjectMap$FastEntrySet_<K, V> = Object2ObjectMap$FastEntrySet<K, V>;
    class ExperienceOrb extends Internal.Entity {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: number)
        constructor(arg0: Internal.EntityType_<Internal.ExperienceOrb>, arg1: Internal.Level_)
        modifyExpressionValue$dkm000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        setCulled(value: boolean): void;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        gameEvent(arg0: Internal.GameEvent_): void;
        alwaysAccepts(): boolean;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        isVisuallyCrawling(): boolean;
        checkBelowWorld(): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        sdl$shouldUpdateDynamicLight(): boolean;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        transition$setRawPosition(arg0: Vec3d_): void;
        getIcon(): number;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        getRandomZ(arg0: number): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        onFlap(): void;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): Internal.Component;
        canEnterPose(arg0: Internal.Pose_): boolean;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getBlockSpeedFactor(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        static award(arg0: Internal.ServerLevel_, arg1: Vec3d_, arg2: number): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        setCustomNameVisible(arg0: boolean): void;
        bo$getRenderer(): Internal.EntityRenderer<any>;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        bo$refreshEntityData(data: number): void;
        setOutOfCamera(value: boolean): void;
        getControllingPassenger(): Internal.LivingEntity;
        getRemainingFireTicks(): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: Internal.Component_): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        doWaterSplashEffect(): void;
        getTeam(): Internal.Team;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isCulled(): boolean;
        hasCustomName(): boolean;
        isLiving(): boolean;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getLeashOffset(): Vec3d;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        processPortalCooldown(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        handleNetherPortal(): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): Internal.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        handler$dec000$parcool$onIsInWall(arg0: Internal.CallbackInfoReturnable_<any>): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        restoreFrom(arg0: Internal.Entity_): void;
        reapplyPosition(): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        setYaw(arg0: number): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        getPickRadius(): number;
        notify(): void;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        self(): Internal.Entity;
        sdl$getDynamicLightY(): number;
        isSprinting(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        canRide(arg0: Internal.Entity_): boolean;
        canSpawnSprintParticle(): boolean;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        getSoundSource(): Internal.SoundSource;
        addPassenger(arg0: Internal.Entity_): void;
        removeAfterChangingDimensions(): void;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getSharedFlag(arg0: number): boolean;
        sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        getPermissionLevel(): number;
        getMotionZ(): number;
        removeVehicle(): void;
        defineSynchedData(): void;
        nextStep(): number;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        checkInsideBlocks(): void;
        setZ(z: number): void;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        getY(): number;
        ejectPassengers(): void;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        createHoverEvent(): Internal.HoverEvent;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getValue(): number;
        setTimeout(): void;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        handler$zjk000$sodiumdynamiclights$onRemove(ci: Internal.CallbackInfo_): void;
        isCrouching(): boolean;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        modifyReturnValue$dkm000$create$onFireImmune(arg0: boolean): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        baseTick(): void;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        setSharedFlag(arg0: number, arg1: boolean): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        getMaxAirSupply(): number;
        isVisuallySwimming(): boolean;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        processFlappingMovement(): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        sdl$getDynamicLightX(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setSprinting(arg0: boolean): void;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        getFluidJumpThreshold(): number;
        unsetRemoved(): void;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        save(arg0: Internal.CompoundTag_): boolean;
        repositionEntityAfterLoad(): boolean;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        handler$dec000$parcool$onOnGround(arg0: Internal.CallbackInfoReturnable_<any>): void;
        acceptsFailure(): boolean;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        getSwimSplashSound(): Internal.SoundEvent;
        playSwimSound(arg0: number): void;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        setExtension(key: any, value: any): void;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        revive(): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        getBbWidth(): number;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): Internal.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        getTypeName(): Internal.Component;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        handler$dec000$parcool$onGetEyeHeight(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getBbHeight(): number;
        getUsername(): string;
        transition$getRawPosition(): Vec3d;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getPickResult(): Internal.ItemStack;
        getPercentFrozen(): number;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        getDisplayName(): Internal.Component;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        discard(): void;
        setYBodyRot(arg0: number): void;
        isPushable(): boolean;
        onClientRemoval(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        sdl$resetDynamicLight(): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        checkDespawn(): void;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        newFloatList(...arg0: number[]): Internal.ListTag;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        handler$zjk001$sodiumdynamiclights$onTick(ci: Internal.CallbackInfo_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getMovementEmission(): Internal.Entity$MovementEmission;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        static getExperienceValue(arg0: number): number;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getBlockJumpFactor(): number;
        tell(message: Internal.Component_): void;
        isForcedVisible(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        playEntityOnFireExtinguishedSound(): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        set culled(value: boolean)
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get blockY(): number
        get icon(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        set customNameVisible(arg0: boolean)
        set outOfCamera(value: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: Internal.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get swimSound(): Internal.SoundEvent
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get culled(): boolean
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get permissionLevel(): number
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get value(): number
        get outOfCamera(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get commandSenderWorld(): Internal.Level
        get customName(): Internal.Component
        get class(): typeof any
        get maxAirSupply(): number
        get visuallySwimming(): boolean
        get fireImmuneTicks(): number
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get inWater(): boolean
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): Internal.Component
        get inFluidType(): boolean
        get typeName(): Internal.Component
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        set YBodyRot(arg0: number)
        get pushable(): boolean
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get passenger(): boolean
        get flapping(): boolean
        get viewScale(): number
        set motionX(x: number)
        get movementEmission(): Internal.Entity$MovementEmission
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get blockJumpFactor(): number
        get forcedVisible(): boolean
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
        value: number;
    }
    type ExperienceOrb_ = ExperienceOrb;
    class ServerboundPaddleBoatPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: boolean, arg1: boolean)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        getRight(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getLeft(): boolean;
        get class(): typeof any
        get skippable(): boolean
        get right(): boolean
        get left(): boolean
    }
    type ServerboundPaddleBoatPacket_ = ServerboundPaddleBoatPacket;
    abstract class BlockEntity extends Internal.CapabilityProvider<Internal.BlockEntity> implements Internal.IForgeBlockEntity, Internal.DynamicLightSource, Internal.AttachmentTargetImpl, Internal.Cullable, Internal.RenderDataBlockEntity, Internal.RenderAttachmentBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getRenderAttachmentData(): any;
        getUpdateTag(): Internal.CompoundTag;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        sdl$getLuminance(): number;
        notify(): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        handler$bfi000$setRemoved(arg0: Internal.CallbackInfo_): void;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        setCulled(value: boolean): void;
        onLoad(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setTimeout(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        sdl$getDynamicLightY(): number;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        isOutOfCamera(): boolean;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isCulled(): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        handler$bfi000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        onChunkUnloaded(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        saveToItem(arg0: Internal.ItemStack_): void;
        setOutOfCamera(value: boolean): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        fabric_hasPersistentAttachments(): boolean;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        clearRemoved(): void;
        onlyOpCanSetNbt(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        sdl$getDynamicLightZ(): number;
        sdl$getDynamicLightX(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        getPersistentData(): Internal.CompoundTag;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        isForcedVisible(): boolean;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        equals(arg0: any): boolean;
        reviveCaps(): void;
        get renderAttachmentData(): any
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get blockPos(): BlockPos
        get removed(): boolean
        set culled(value: boolean)
        get outOfCamera(): boolean
        get blockState(): Internal.BlockState
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        set outOfCamera(value: boolean)
        get level(): Internal.Level
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get persistentData(): Internal.CompoundTag
        get forcedVisible(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        level: Internal.Level;
        remove: boolean;
        readonly worldPosition: BlockPos;
    }
    type BlockEntity_ = BlockEntity;
    class ServerChatEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.ServerPlayer_, arg1: string, arg2: Internal.Component_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getUsername(): string;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPlayer(): Internal.ServerPlayer;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getMessage(): Internal.Component;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getRawText(): string;
        setMessage(arg0: Internal.Component_): void;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get username(): string
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get player(): Internal.ServerPlayer
        set result(arg0: Internal.Event$Result_)
        get message(): Internal.Component
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get rawText(): string
        set message(arg0: Internal.Component_)
    }
    type ServerChatEvent_ = ServerChatEvent;
    class RegularEnumSet <E extends Internal.Enum<E>> extends Internal.EnumSet<E> {
        static of<E extends Internal.Enum<E>>(arg0: E): Internal.EnumSet<E>;
        static "of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        static "copyOf(java.util.Collection)"<E extends Internal.Enum<E>>(arg0: Internal.Collection_<E>): Internal.EnumSet<E>;
        notify(): void;
        static copyOf<E extends Internal.Enum<E>>(arg0: Internal.Collection_<E>): Internal.EnumSet<E>;
        static allOf<E extends Internal.Enum<E>>(arg0: E): Internal.EnumSet<E>;
        static "of(java.lang.Enum,java.lang.Enum)"<E extends Internal.Enum<E>>(arg0: E, arg1: E): Internal.EnumSet<E>;
        retainAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        clone(): Internal.EnumSet<E>;
        addAll(arg0: Internal.Collection_<E>): boolean;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        static "of(java.lang.Enum,java.lang.Enum,java.lang.Enum,java.lang.Enum)"<E extends Internal.Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.EnumSet<E>;
        static of<E extends Internal.Enum<E>>(arg0: E, arg1: E): Internal.EnumSet<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        static of<E extends Internal.Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.EnumSet<E>;
        abstract toArray<T>(arg0: T[]): T[];
        remove(arg0: any): boolean;
        static of<E extends Internal.Enum<E>>(arg0: E, arg1: E, arg2: E): Internal.EnumSet<E>;
        add(arg0: any): boolean;
        "add(java.lang.Enum)"(arg0: E): boolean;
        iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(): Internal.Set<E>;
        stream(): Internal.Stream<E>;
        removeAll(arg0: Internal.Collection_<any>): boolean;
        static range<E extends Internal.Enum<E>>(arg0: E, arg1: E): Internal.EnumSet<E>;
        wait(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        getClass(): typeof any;
        add(arg0: E): boolean;
        static "of(java.lang.Enum,java.lang.Enum,java.lang.Enum,java.lang.Enum,java.lang.Enum)"<E extends Internal.Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.EnumSet<E>;
        static "of(java.lang.Enum)"<E extends Internal.Enum<E>>(arg0: E): Internal.EnumSet<E>;
        parallelStream(): Internal.Stream<E>;
        static "copyOf(java.util.EnumSet)"<E extends Internal.Enum<E>>(arg0: Internal.EnumSet_<E>): Internal.EnumSet<E>;
        isEmpty(): boolean;
        "add(java.lang.Object)"(arg0: any): boolean;
        wait(arg0: number, arg1: number): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        containsAll(arg0: Internal.Collection_<any>): boolean;
        static noneOf<E extends Internal.Enum<E>>(arg0: E): Internal.EnumSet<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        contains(arg0: any): boolean;
        static of<E extends Internal.Enum<E>>(arg0: E, ...arg1: E[]): Internal.EnumSet<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static "of(java.lang.Enum,java.lang.Enum,java.lang.Enum)"<E extends Internal.Enum<E>>(arg0: E, arg1: E, arg2: E): Internal.EnumSet<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        toString(): string;
        notifyAll(): void;
        static "of(java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        static complementOf<E extends Internal.Enum<E>>(arg0: Internal.EnumSet_<E>): Internal.EnumSet<E>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E extends Internal.Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.EnumSet<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract toArray(): any[];
        static "of(java.lang.Enum,java.lang.Enum[])"<E extends Internal.Enum<E>>(arg0: E, ...arg1: E[]): Internal.EnumSet<E>;
        size(): number;
        hashCode(): number;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static copyOf<E extends Internal.Enum<E>>(arg0: Internal.EnumSet_<E>): Internal.EnumSet<E>;
        clear(): void;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type RegularEnumSet_<E extends Internal.Enum<E>> = RegularEnumSet<E>;
    interface ThresholdSwitchObservable {
        abstract getMinValue(): number;
        abstract getMaxValue(): number;
        abstract format(arg0: number): Internal.MutableComponent;
        abstract getCurrentValue(): number;
        get minValue(): number
        get maxValue(): number
        get currentValue(): number
    }
    type ThresholdSwitchObservable_ = ThresholdSwitchObservable;
    class ModLifecycleEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_)
        getIMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>;
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getIMCStream(arg0: Internal.Predicate_<string>): Internal.Stream<Internal.InterModComms$IMCMessage>;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        description(): string;
        get IMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ModLifecycleEvent_ = ModLifecycleEvent;
    class SignalBlockEntity$OverlayState extends Internal.Enum<Internal.SignalBlockEntity$OverlayState> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getDeclaringClass(): typeof Internal.SignalBlockEntity$OverlayState;
        getClass(): typeof any;
        static values(): Internal.SignalBlockEntity$OverlayState[];
        toString(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.SignalBlockEntity$OverlayState>>;
        notifyAll(): void;
        compareTo(arg0: Internal.SignalBlockEntity$OverlayState_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.SignalBlockEntity$OverlayState;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(com.simibubi.create.content.trains.signal.SignalBlockEntity$OverlayState)"(arg0: Internal.SignalBlockEntity$OverlayState_): number;
        get declaringClass(): typeof Internal.SignalBlockEntity$OverlayState
        get class(): typeof any
        static readonly DUAL: (Internal.SignalBlockEntity$OverlayState) & (Internal.SignalBlockEntity$OverlayState);
        static readonly RENDER: (Internal.SignalBlockEntity$OverlayState) & (Internal.SignalBlockEntity$OverlayState);
        static readonly SKIP: (Internal.SignalBlockEntity$OverlayState) & (Internal.SignalBlockEntity$OverlayState);
    }
    type SignalBlockEntity$OverlayState_ = "dual" | "skip" | SignalBlockEntity$OverlayState | "render";
    abstract class Mat3 implements Internal.Mat {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        abstract getM10(): number;
        abstract getM21(): number;
        abstract getM20(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        abstract getM00(): number;
        abstract getM12(): number;
        abstract getM11(): number;
        abstract getM01(): number;
        abstract getM22(): number;
        abstract getM02(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        abstract copyOf(): this;
        get class(): typeof any
        get m10(): number
        get m21(): number
        get m20(): number
        get m00(): number
        get m12(): number
        get m11(): number
        get m01(): number
        get m22(): number
        get m02(): number
    }
    type Mat3_ = Mat3;
    interface ItemFrameEntityKJS extends Internal.EntityKJS {
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isAmbientCreature(): boolean;
        isMonster(): boolean;
        isOnScoreboardTeam(teamId: string): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        isLiving(): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getPersistentData(): Internal.CompoundTag;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        runCommand(command: string): number;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get facing(): Internal.Direction
        get scriptType(): Internal.ScriptType
        get motionX(): number
        get waterCreature(): boolean
        get persistentData(): Internal.CompoundTag
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
    }
    type ItemFrameEntityKJS_ = ItemFrameEntityKJS;
    abstract class Mat4 implements Internal.Mat {
        constructor()
        getClass(): typeof any;
        abstract getM31(): number;
        abstract getM32(): number;
        abstract getM10(): number;
        abstract getM30(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract getM12(): number;
        abstract getM11(): number;
        abstract getM33(): number;
        abstract getM13(): number;
        abstract copyOf(): this;
        toString(): string;
        notifyAll(): void;
        abstract getM21(): number;
        abstract getM20(): number;
        hashCode(): number;
        abstract getM23(): number;
        abstract getM00(): number;
        abstract getM01(): number;
        abstract getM22(): number;
        abstract getM02(): number;
        wait(): void;
        abstract getM03(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get m31(): number
        get m32(): number
        get m10(): number
        get m30(): number
        get m12(): number
        get m11(): number
        get m33(): number
        get m13(): number
        get m21(): number
        get m20(): number
        get m23(): number
        get m00(): number
        get m01(): number
        get m22(): number
        get m02(): number
        get m03(): number
    }
    type Mat4_ = Mat4;
    interface ScreenKeyboardEvents$AfterKeyPress {
        abstract afterKeyPress(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number): void;
    }
    type ScreenKeyboardEvents$AfterKeyPress_ = ((arg0: Internal.Screen, arg1: number, arg2: number, arg3: number)=> void) | ScreenKeyboardEvents$AfterKeyPress;
    class MushroomBlock extends Internal.BushBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.ResourceKey_<Internal.ConfiguredFeature<any, any>>)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        growMushroom(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.RandomSource_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        mayPlaceOn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly SHAPE: (Internal.ArrayVoxelShape) & (Internal.VoxelShape);
        static readonly AABB_OFFSET: (3.0) & (number);
    }
    type MushroomBlock_ = MushroomBlock;
    interface Guard {
        abstract checkGuard(arg0: any): void;
        (arg0: any): void;
    }
    type Guard_ = ((arg0: any)=> void) | Guard;
    interface GameEventListener {
        abstract getListenerSource(): Internal.PositionSource;
        abstract getListenerRadius(): number;
        abstract handleGameEvent(arg0: Internal.ServerLevel_, arg1: Internal.GameEvent_, arg2: Internal.GameEvent$Context_, arg3: Vec3d_): boolean;
        getDeliveryMode(): Internal.GameEventListener$DeliveryMode;
        get listenerSource(): Internal.PositionSource
        get listenerRadius(): number
        get deliveryMode(): Internal.GameEventListener$DeliveryMode
    }
    type GameEventListener_ = GameEventListener;
    class WoodType extends Internal.Record {
        constructor(arg0: string, arg1: Internal.BlockSetType_, arg2: SoundType_, arg3: SoundType_, arg4: Internal.SoundEvent_, arg5: Internal.SoundEvent_)
        constructor(arg0: string, arg1: Internal.BlockSetType_)
        getClass(): typeof any;
        toString(): string;
        static register(arg0: Internal.WoodType_): Internal.WoodType;
        notifyAll(): void;
        setType(): Internal.BlockSetType;
        soundType(): SoundType;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        name(): string;
        fenceGateClose(): Internal.SoundEvent;
        hashCode(): number;
        static values(): Internal.Stream<Internal.WoodType>;
        fenceGateOpen(): Internal.SoundEvent;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        hangingSignSoundType(): SoundType;
        get class(): typeof any
        static readonly SPRUCE: (Internal.WoodType) & (Internal.WoodType);
        static readonly BAMBOO: (Internal.WoodType) & (Internal.WoodType);
        static readonly ACACIA: (Internal.WoodType) & (Internal.WoodType);
        static readonly JUNGLE: (Internal.WoodType) & (Internal.WoodType);
        static readonly DARK_OAK: (Internal.WoodType) & (Internal.WoodType);
        static readonly CRIMSON: (Internal.WoodType) & (Internal.WoodType);
        static readonly OAK: (Internal.WoodType) & (Internal.WoodType);
        static readonly CHERRY: (Internal.WoodType) & (Internal.WoodType);
        static readonly MANGROVE: (Internal.WoodType) & (Internal.WoodType);
        static readonly BIRCH: (Internal.WoodType) & (Internal.WoodType);
        static readonly WARPED: (Internal.WoodType) & (Internal.WoodType);
    }
    type WoodType_ = WoodType;
    interface PlayerEntityRendererExt {
        abstract essential$getTransform(arg0: Internal.AbstractClientPlayer_, arg1: number, arg2: number): Internal.Mat4;
        abstract essential$getFeatures(): Internal.Iterable<any>;
        abstract essential$getEssentialModelRenderer(): Internal.EssentialModelRenderer;
    }
    type PlayerEntityRendererExt_ = PlayerEntityRendererExt;
    interface Double2ReferenceFunction <V> extends it.unimi.dsi.fastutil.Function<number, V>, Internal.DoubleFunction<V> {
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Double2ShortFunction;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "put(double,java.lang.Object)"(arg0: number, arg1: V): V;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Double2DoubleFunction;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Double2LongFunction;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        composeChar(arg0: Internal.Char2DoubleFunction_): Internal.Char2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Double2IntFunction;
        composeByte(arg0: Internal.Byte2DoubleFunction_): Internal.Byte2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        "apply(java.lang.Double)"(arg0: number): V;
        containsKey(arg0: number): boolean;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Double2ReferenceFunction<T>;
        getOrDefault(arg0: number, arg1: V): V;
        composeObject<T>(arg0: Internal.Object2DoubleFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        defaultReturnValue(): V;
        composeReference<T>(arg0: Internal.Reference2DoubleFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Double2CharFunction;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        composeShort(arg0: Internal.Short2DoubleFunction_): Internal.Short2ReferenceFunction<V>;
        composeLong(arg0: Internal.Long2DoubleFunction_): Internal.Long2ReferenceFunction<V>;
        "containsKey(double)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        "apply(double)"(arg0: number): V;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Double2ByteFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        put(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        /**
         * @deprecated
        */
        "put(java.lang.Double,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        abstract "get(double)"(arg0: number): V;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Double2ObjectFunction<T>;
        apply(arg0: number): V;
        apply(arg0: number): V;
        "getOrDefault(double,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        composeInt(arg0: Internal.Int2DoubleFunction_): Internal.Int2ReferenceFunction<V>;
        abstract get(arg0: number): V;
        size(): number;
        composeFloat(arg0: Internal.Float2DoubleFunction_): Internal.Float2ReferenceFunction<V>;
        composeDouble(arg0: Internal.Double2DoubleFunction_): this;
        clear(): void;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Double2FloatFunction;
        "remove(double)"(arg0: number): V;
    }
    type Double2ReferenceFunction_<V> = Double2ReferenceFunction<V>;
    class NixieTubeBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        destroy(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        handler$bfi000$setRemoved(arg0: Internal.CallbackInfo_): void;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        setCulled(value: boolean): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setTimeout(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        isOutOfCamera(): boolean;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        displayEmptyText(arg0: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        isCulled(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        attachBehaviourLate(arg0: Internal.BlockEntityBehaviour_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        sdl$getDynamicLightX(): number;
        getRedstoneStrength(): number;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        getFullText(): Internal.MutableComponent;
        sdl$dynamicLightTick(): void;
        invalidate(): void;
        updateDisplayedStrings(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        sendData(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getAttached(type: Internal.AttachmentType_<any>): any;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        initialize(): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        displayCustomText(arg0: string, arg1: number): void;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        getDisplayedStrings(): Internal.Couple<string>;
        updateRedstoneStrength(arg0: number): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        handler$bfi000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        saveWithId(): Internal.CompoundTag;
        notifyUpdate(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setOutOfCamera(value: boolean): void;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        removeBehaviour(arg0: Internal.BehaviourType_<any>): void;
        sdl$getDynamicLightZ(): number;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        reactsToRedstone(): boolean;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        isForcedVisible(): boolean;
        clearCustomText(): void;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        set culled(value: boolean)
        get outOfCamera(): boolean
        get "updatePacket()"(): Internal.Packet<any>
        get culled(): boolean
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get redstoneStrength(): number
        get persistentData(): Internal.CompoundTag
        get fullText(): Internal.MutableComponent
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        get displayedStrings(): Internal.Couple<string>
        set outOfCamera(value: boolean)
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get forcedVisible(): boolean
        get renderData(): any
        get modelData(): Internal.ModelData
        computerSignal: Internal.NixieTubeBlockEntity$ComputerSignal;
        computerBehaviour: Internal.AbstractComputerBehaviour;
        signalState: Internal.SignalBlockEntity$SignalState;
    }
    type NixieTubeBlockEntity_ = NixieTubeBlockEntity;
    interface CompositeEncoder {
        access$shouldEncodeElementDefault$jd(arg0: Internal.CompositeEncoder_, arg1: Internal.SerialDescriptor_, arg2: number): boolean;
        abstract encodeFloatElement(arg0: Internal.SerialDescriptor_, arg1: number, arg2: number): void;
        abstract encodeCharElement(arg0: Internal.SerialDescriptor_, arg1: number, arg2: string): void;
        abstract getSerializersModule(): Internal.SerializersModule;
        abstract encodeShortElement(arg0: Internal.SerialDescriptor_, arg1: number, arg2: number): void;
        abstract encodeSerializableElement<T>(arg0: Internal.SerialDescriptor_, arg1: number, arg2: Internal.SerializationStrategy_<T>, arg3: T): void;
        abstract encodeDoubleElement(arg0: Internal.SerialDescriptor_, arg1: number, arg2: number): void;
        shouldEncodeElementDefault(arg0: Internal.SerialDescriptor_, arg1: number): boolean;
        abstract endStructure(arg0: Internal.SerialDescriptor_): void;
        abstract encodeStringElement(arg0: Internal.SerialDescriptor_, arg1: number, arg2: string): void;
        abstract encodeInlineElement(arg0: Internal.SerialDescriptor_, arg1: number): kotlinx.serialization.encoding.Encoder;
        abstract encodeBooleanElement(arg0: Internal.SerialDescriptor_, arg1: number, arg2: boolean): void;
        abstract encodeByteElement(arg0: Internal.SerialDescriptor_, arg1: number, arg2: number): void;
        abstract encodeIntElement(arg0: Internal.SerialDescriptor_, arg1: number, arg2: number): void;
        abstract encodeLongElement(arg0: Internal.SerialDescriptor_, arg1: number, arg2: number): void;
        abstract encodeNullableSerializableElement<T>(arg0: Internal.SerialDescriptor_, arg1: number, arg2: Internal.SerializationStrategy_<T>, arg3: T): void;
        get serializersModule(): Internal.SerializersModule
    }
    type CompositeEncoder_ = CompositeEncoder;
    /**
     * @deprecated
    */
    interface Shearable {
        /**
         * @deprecated
        */
        abstract shear(arg0: Internal.SoundSource_): void;
        /**
         * @deprecated
        */
        abstract readyForShearing(): boolean;
    }
    type Shearable_ = Shearable;
    class ChunkHolder implements Internal.IClearableChunkHolder {
        constructor(arg0: Internal.ChunkPos_, arg1: number, arg2: Internal.LevelHeightAccessor_, arg3: Internal.LevelLightEngine_, arg4: Internal.ChunkHolder$LevelChangeListener_, arg5: Internal.ChunkHolder$PlayerProvider_)
        getClass(): typeof any;
        getFullChunk(): Internal.LevelChunk;
        getTickingChunk(): Internal.LevelChunk;
        getTicketLevel(): number;
        getChunkToSave(): Internal.CompletableFuture<Internal.ChunkAccess>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        mfix$getGenerationRefCount(): Internal.AtomicInteger;
        getLastAvailable(): Internal.ChunkAccess;
        wasAccessibleSinceLastSave(): boolean;
        broadcastChanges(arg0: Internal.LevelChunk_): void;
        getFutureIfPresent(arg0: Internal.ChunkStatus_): Internal.CompletableFuture<Internal.Either<Internal.ChunkAccess, Internal.ChunkHolder$ChunkLoadingFailure>>;
        getOrScheduleFuture(arg0: Internal.ChunkStatus_, arg1: Internal.ChunkMap_): Internal.CompletableFuture<Internal.Either<Internal.ChunkAccess, Internal.ChunkHolder$ChunkLoadingFailure>>;
        getEntityTickingChunkFuture(): Internal.CompletableFuture<Internal.Either<Internal.LevelChunk, Internal.ChunkHolder$ChunkLoadingFailure>>;
        getLastAvailableStatus(): Internal.ChunkStatus;
        mfix$resetProtoChunkFutures(): void;
        getFullStatus(): Internal.FullChunkStatus;
        addSaveDependency(arg0: string, arg1: Internal.CompletableFuture_<any>): void;
        getFutureIfPresentUnchecked(arg0: Internal.ChunkStatus_): Internal.CompletableFuture<Internal.Either<Internal.ChunkAccess, Internal.ChunkHolder$ChunkLoadingFailure>>;
        toString(): string;
        notifyAll(): void;
        getQueueLevel(): number;
        refreshAccessibility(): void;
        getFullChunkFuture(): Internal.CompletableFuture<Internal.Either<Internal.LevelChunk, Internal.ChunkHolder$ChunkLoadingFailure>>;
        getPos(): Internal.ChunkPos;
        hashCode(): number;
        setTicketLevel(arg0: number): void;
        replaceProtoChunk(arg0: Internal.ImposterProtoChunk_): void;
        wait(): void;
        updateFutures(arg0: Internal.ChunkMap_, arg1: Internal.Executor_): void;
        wait(arg0: number): void;
        sectionLightChanged(arg0: Internal.LightLayer_, arg1: number): void;
        blockChanged(arg0: BlockPos_): void;
        getTickingChunkFuture(): Internal.CompletableFuture<Internal.Either<Internal.LevelChunk, Internal.ChunkHolder$ChunkLoadingFailure>>;
        equals(arg0: any): boolean;
        getAllFutures(): Internal.List<com.mojang.datafixers.util.Pair<Internal.ChunkStatus, Internal.CompletableFuture<Internal.Either<Internal.ChunkAccess, Internal.ChunkHolder$ChunkLoadingFailure>>>>;
        get class(): typeof any
        get fullChunk(): Internal.LevelChunk
        get tickingChunk(): Internal.LevelChunk
        get ticketLevel(): number
        get chunkToSave(): Internal.CompletableFuture<Internal.ChunkAccess>
        get lastAvailable(): Internal.ChunkAccess
        get entityTickingChunkFuture(): Internal.CompletableFuture<Internal.Either<Internal.LevelChunk, Internal.ChunkHolder$ChunkLoadingFailure>>
        get lastAvailableStatus(): Internal.ChunkStatus
        get fullStatus(): Internal.FullChunkStatus
        get queueLevel(): number
        get fullChunkFuture(): Internal.CompletableFuture<Internal.Either<Internal.LevelChunk, Internal.ChunkHolder$ChunkLoadingFailure>>
        get pos(): Internal.ChunkPos
        set ticketLevel(arg0: number)
        get tickingChunkFuture(): Internal.CompletableFuture<Internal.Either<Internal.LevelChunk, Internal.ChunkHolder$ChunkLoadingFailure>>
        get allFutures(): Internal.List<com.mojang.datafixers.util.Pair<Internal.ChunkStatus, Internal.CompletableFuture<Internal.Either<Internal.ChunkAccess, Internal.ChunkHolder$ChunkLoadingFailure>>>>
        currentlyLoading: Internal.LevelChunk;
        readonly pos: Internal.ChunkPos;
        static readonly UNLOADED_CHUNK_FUTURE: Internal.CompletableFuture<Internal.Either<Internal.ChunkAccess, Internal.ChunkHolder$ChunkLoadingFailure>>;
        static readonly UNLOADED_CHUNK: Internal.Either<Internal.ChunkAccess, Internal.ChunkHolder$ChunkLoadingFailure>;
        static readonly UNLOADED_LEVEL_CHUNK: Internal.Either<Internal.LevelChunk, Internal.ChunkHolder$ChunkLoadingFailure>;
    }
    type ChunkHolder_ = ChunkHolder;
    class AdminToolItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isFireResistant(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        handler$ckh000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        overrideFood(arg0: Internal.FoodProperties_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        handler$bfp000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set craftingRemainder(arg0: Internal.Item_)
    }
    type AdminToolItem_ = AdminToolItem;
    class InfestedBlock extends Internal.Block {
        constructor(arg0: Internal.Block_, arg1: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        static infestedStateByHost(arg0: Internal.BlockState_): Internal.BlockState;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        static isCompatibleHostBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getHostBlock(): Internal.Block;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        hostStateByInfested(arg0: Internal.BlockState_): Internal.BlockState;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        get hostBlock(): Internal.Block
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type InfestedBlock_ = InfestedBlock;
    /**
     * @deprecated
    */
    interface ItemPropertyFunction {
        abstract call(arg0: Internal.ItemStack_, arg1: Internal.ClientLevel_, arg2: Internal.LivingEntity_, arg3: number): number;
        (arg0: Internal.ItemStack, arg1: Internal.ClientLevel, arg2: Internal.LivingEntity, arg3: number): number;
    }
    type ItemPropertyFunction_ = ((arg0: Internal.ItemStack, arg1: Internal.ClientLevel, arg2: Internal.LivingEntity, arg3: number)=> number) | ItemPropertyFunction;
    class Restriction {
        constructor(arg0: Internal.ArtifactVersion_, arg1: boolean, arg2: Internal.ArtifactVersion_, arg3: boolean)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        isUpperBoundInclusive(): boolean;
        isLowerBoundInclusive(): boolean;
        wait(): void;
        wait(arg0: number): void;
        containsVersion(arg0: Internal.ArtifactVersion_): boolean;
        getUpperBound(): Internal.ArtifactVersion;
        getLowerBound(): Internal.ArtifactVersion;
        equals(arg0: any): boolean;
        get class(): typeof any
        get upperBoundInclusive(): boolean
        get lowerBoundInclusive(): boolean
        get upperBound(): Internal.ArtifactVersion
        get lowerBound(): Internal.ArtifactVersion
        static readonly EVERYTHING: (Internal.Restriction) & (Internal.Restriction);
    }
    type Restriction_ = Restriction;
    class NoiseChunk$NoiseInterpolator implements Internal.DensityFunctions$MarkerOrMarked, Internal.NoiseChunk$NoiseChunkDensityFunction {
        constructor(arg0: Internal.NoiseChunk_, arg1: Internal.DensityFunction_)
        getClass(): typeof any;
        abs(): Internal.DensityFunction;
        selectCellYZ(arg0: number, arg1: number): void;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        notify(): void;
        square(): Internal.DensityFunction;
        wait(arg0: number, arg1: number): void;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        updateForZ(arg0: number): void;
        updateForY(arg0: number): void;
        updateForX(arg0: number): void;
        wrapped(): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        cube(): Internal.DensityFunction;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        halfNegative(): Internal.DensityFunction;
        toString(): string;
        maxValue(): number;
        notifyAll(): void;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        hashCode(): number;
        wait(): void;
        type(): Internal.DensityFunctions$Marker$Type;
        wait(arg0: number): void;
        minValue(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        readonly f_188827_: Internal.NoiseChunk;
        slice0: number[][];
        slice1: number[][];
    }
    type NoiseChunk$NoiseInterpolator_ = NoiseChunk$NoiseInterpolator;
    interface TickAccess <T> {
        abstract count(): number;
        abstract schedule(arg0: Internal.ScheduledTick_<T>): void;
        abstract hasScheduledTick(arg0: BlockPos_, arg1: T): boolean;
    }
    type TickAccess_<T> = TickAccess<T>;
    class NewRegistryEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        create<V>(arg0: Internal.RegistryBuilder_<V>): Internal.Supplier<Internal.IForgeRegistry<V>>;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        create<V>(arg0: Internal.RegistryBuilder_<V>, arg1: Internal.Consumer_<Internal.IForgeRegistry<V>>): Internal.Supplier<Internal.IForgeRegistry<V>>;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type NewRegistryEvent_ = NewRegistryEvent;
    class TrackBlockEntityTilt {
        constructor(arg0: Internal.TrackBlockEntity_)
        getClass(): typeof any;
        undoSmoothing(): void;
        toString(): string;
        getYOffsetForAxisEnd(arg0: Vec3d_): number;
        captureSmoothingHandles(): void;
        notifyAll(): void;
        tryApplySmoothing(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        restoreToOriginalCurve(arg0: Internal.BezierConnection_): Internal.BezierConnection;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static compareHandles(arg0: Vec3d_, arg1: Vec3d_): boolean;
        get class(): typeof any
        smoothingAngle: Internal.Optional<number>;
        static readonly ASCENDING_PROPERTY: Internal.ModelProperty<number>;
    }
    type TrackBlockEntityTilt_ = TrackBlockEntityTilt;
    interface Quaterniondc {
        abstract rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transform(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract transformInverse(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformPositiveY(arg0: Vec3f_): Vec3f;
        abstract transformPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnit(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformUnit(double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformUnitPositiveZ(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract x(): number;
        abstract transformInverse(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveY(arg0: Vec4f_): Vec4f;
        abstract dot(arg0: Internal.Quaterniondc_): number;
        abstract transformPositiveX(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnit(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformUnitPositiveY(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract rotateY(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "get(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        abstract transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transform(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverse(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateTo(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnit(arg0: Vec4f_): Vec4f;
        abstract transformPositiveZ(arg0: Vec3f_): Vec3f;
        abstract "transformInverse(org.joml.Vector4fc,org.joml.Vector4f)"(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transformUnitPositiveX(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract "transformPositiveY(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: Matrix4f_): Matrix4f;
        abstract conjugate(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: Vec4f_): Vec4f;
        abstract transformUnit(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract "transformInverseUnit(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract transformInverseUnit(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract y(): number;
        abstract "transformUnit(double,double,double,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract "transformPositiveZ(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract transformPositiveY(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract "transformInverse(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract transformUnit(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveZ(arg0: Vec4f_): Vec4f;
        abstract "transformInverse(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract rotateZ(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverse(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract get(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: Vec3f_): Vec3f;
        abstract "get(org.joml.Matrix3d)"(arg0: org.joml.Matrix3d_): org.joml.Matrix3d;
        abstract positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverse(double,double,double,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract getEulerAnglesZXY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract transformPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnit(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract "get(org.joml.Matrix3f)"(arg0: Matrix3f_): Matrix3f;
        abstract "transformInverseUnit(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateAxis(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract z(): number;
        abstract transformInverseUnit(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformPositiveY(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract isFinite(): boolean;
        abstract "transformInverseUnit(double,double,double,org.joml.Vector4f)"(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract transformUnitPositiveX(arg0: Vec3f_): Vec3f;
        abstract equals(arg0: Internal.Quaterniondc_, arg1: number): boolean;
        abstract normalize(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract get(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transform(double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnit(arg0: Vec3f_): Vec3f;
        abstract transformPositiveZ(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract conjugateBy(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformPositiveX(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract "transform(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverseUnit(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transformUnitPositiveZ(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformPositiveX(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnit(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverse(arg0: Vec4f_): Vec4f;
        abstract premul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformInverseUnit(double,double,double,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract "get(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformUnitPositiveY(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract difference(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract slerp(arg0: Internal.Quaterniondc_, arg1: number, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformUnit(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverse(double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverse(arg0: Vec3f_): Vec3f;
        abstract "transformUnitPositiveX(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "get(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateX(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract integrate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverse(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformPositiveZ(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract getEulerAnglesYXZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract scale(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverse(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformInverseUnit(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract "transformUnit(double,double,double,org.joml.Vector4f)"(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract "transform(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformUnitPositiveZ(arg0: Vec3f_): Vec3f;
        abstract transformUnitPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnitPositiveZ(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transform(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnit(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract mul(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformUnitPositiveY(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract premul(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract "get(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverseUnit(arg0: Vec3f_): Vec3f;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract "transform(double,double,double,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract get(arg0: Quaternionf_): Quaternionf;
        abstract transformUnitPositiveX(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnitPositiveY(arg0: Vec4f_): Vec4f;
        abstract div(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformInverseUnit(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract angle(): number;
        abstract "transformUnitPositiveX(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformPositiveY(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract transformUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverseUnit(arg0: Vec4f_): Vec4f;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract "mul(double,org.joml.Quaterniond)"(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverseUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnitPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverseUnit(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnitPositiveY(arg0: Vec3f_): Vec3f;
        abstract "transformUnit(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverseUnit(org.joml.Vector4fc,org.joml.Vector4f)"(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract lengthSquared(): number;
        abstract "transformUnit(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract "transformPositiveZ(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverse(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transform(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverse(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverseUnit(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract "transform(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnitPositiveX(arg0: Vec4f_): Vec4f;
        abstract rotateLocalZ(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformInverse(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnit(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract nlerp(arg0: Internal.Quaterniondc_, arg1: number, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformPositiveY(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract nlerpIterative(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformInverseUnit(double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transform(double,double,double,org.joml.Vector4f)"(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract "mul(org.joml.Quaterniondc,org.joml.Quaterniond)"(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformPositiveX(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverseUnit(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract "transform(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract get(arg0: Matrix3f_): Matrix3f;
        abstract rotateLocalY(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transformUnitPositiveZ(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract "transformInverseUnit(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract transformUnitPositiveZ(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformPositiveX(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract "transformInverseUnit(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveX(arg0: Vec3f_): Vec3f;
        abstract getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverse(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract add(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnitPositiveY(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnitPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformUnit(org.joml.Vector4fc,org.joml.Vector4f)"(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transform(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract "transformUnit(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract w(): number;
        abstract "transformInverse(double,double,double,org.joml.Vector4f)"(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract transformInverse(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transformInverseUnit(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveX(arg0: Vec4f_): Vec4f;
        abstract "get(org.joml.Matrix4f)"(arg0: Matrix4f_): Matrix4f;
        abstract lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract invert(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract rotateLocalX(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "transformInverse(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract transformUnitPositiveZ(arg0: Vec4f_): Vec4f;
        abstract get(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract "transform(org.joml.Vector4fc,org.joml.Vector4f)"(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract "transformPositiveZ(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract "transformUnitPositiveX(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        abstract transformUnitPositiveY(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract "transformUnit(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        get finite(): boolean
    }
    type Quaterniondc_ = Quaterniondc;
    class RegistryAccess$ImmutableRegistryAccess implements Internal.RegistryAccess {
        constructor(arg0: Internal.Map_<Internal.ResourceKey<Internal.Registry<any>>, Internal.Registry<any>>)
        constructor(arg0: Internal.List_<Internal.Registry<any>>)
        constructor(arg0: Internal.Stream_<Internal.RegistryAccess$RegistryEntry<any>>)
        getClass(): typeof any;
        toString(): string;
        static create(arg0: Internal.Stream_<Internal.HolderLookup$RegistryLookup<any>>): Internal.HolderLookup$Provider;
        registry<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Optional<Internal.Registry<E>>;
        registryOrThrow<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Registry<E>;
        notifyAll(): void;
        registries(): Internal.Stream<Internal.RegistryAccess$RegistryEntry<any>>;
        freeze(): Internal.RegistryAccess$Frozen;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static fromRegistryOfRegistries(arg0: Internal.Registry_<Internal.Registry<any>>): Internal.RegistryAccess$Frozen;
        lookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Optional<Internal.HolderLookup$RegistryLookup<T>>;
        hashCode(): number;
        allRegistriesLifecycle(): Internal.Lifecycle;
        wait(): void;
        lookupOrThrow<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup$RegistryLookup<T>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        asGetterLookup(): Internal.HolderGetter$Provider;
        get class(): typeof any
    }
    type RegistryAccess$ImmutableRegistryAccess_ = RegistryAccess$ImmutableRegistryAccess;
    class MatchingFluidsPredicate extends Internal.StateTestingPredicate {
        constructor(arg0: Vec3i_, arg1: Internal.HolderSet_<Internal.Fluid>)
        test(arg0: Internal.BlockState_): boolean;
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static "matchesBlocks(java.util.List)"(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        notify(): void;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static stateTestingCodec<P extends Internal.StateTestingPredicate>(arg0: Internal.RecordCodecBuilder$Instance_<P>): Internal.Products$P1<Internal.RecordCodecBuilder$Mu<P>, Vec3i>;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        type(): Internal.BlockPredicateType<any>;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(): void;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        test(arg0: any, arg1: any): boolean;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getClass(): typeof any;
        static "matchesFluids(net.minecraft.core.Vec3i,net.minecraft.world.level.material.Fluid[])"(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number, arg1: number): void;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,net.minecraft.world.level.block.Block[])"(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(net.minecraft.world.level.WorldGenLevel,net.minecraft.core.BlockPos)"(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        toString(): string;
        notifyAll(): void;
        static "matchesFluids(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        hashCode(): number;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number): void;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        equals(arg0: any): boolean;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.MatchingFluidsPredicate>;
    }
    type MatchingFluidsPredicate_ = MatchingFluidsPredicate;
    interface LayoutElement {
        abstract getX(): number;
        abstract getWidth(): number;
        abstract getY(): number;
        abstract setY(arg0: number): void;
        setPosition(arg0: number, arg1: number): void;
        abstract setX(arg0: number): void;
        abstract getHeight(): number;
        abstract visitWidgets(arg0: Internal.Consumer_<Internal.AbstractWidget>): void;
        getRectangle(): Internal.ScreenRectangle;
        get x(): number
        get width(): number
        get y(): number
        set y(arg0: number)
        set x(arg0: number)
        get height(): number
        get rectangle(): Internal.ScreenRectangle
    }
    type LayoutElement_ = LayoutElement;
    interface Object2ObjectSortedMap <K, V> extends Internal.SortedMap<K, V>, Internal.Object2ObjectMap<K, V> {
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        abstract containsValue(arg0: any): boolean;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2ObjectFunction<V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        abstract comparator(): Internal.Comparator<K>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2ObjectFunction_<K, V>): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Object2FloatFunction<K>;
        "computeIfAbsent(java.lang.Object,java.util.function.Function)"(arg0: K, arg1: Internal.Function_<K, V>): V;
        abstract get(arg0: any): V;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        values(): Internal.Collection<any>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2ObjectFunction<V>;
        subMap(arg0: any, arg1: any): Internal.SortedMap<any, any>;
        putIfAbsent(arg0: K, arg1: V): V;
        apply(arg0: K): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Object2ReferenceFunction<K, T>;
        entrySet(): Internal.ObjectSet<any>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Object2DoubleFunction<K>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2ObjectFunction<V>;
        /**
         * @deprecated
        */
        computeObjectIfAbsentPartial(arg0: K, arg1: Internal.Object2ObjectFunction_<K, V>): V;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Object2CharFunction<K>;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        abstract object2ObjectEntrySet(): Internal.ObjectSortedSet<Internal.Object2ObjectMap$Entry<K, V>>;
        abstract defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        abstract defaultReturnValue(arg0: V): void;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        replace(arg0: K, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2ObjectFunction<V>;
        abstract isEmpty(): boolean;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        abstract containsKey(arg0: any): boolean;
        put(arg0: K, arg1: V): V;
        remove(arg0: any): V;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        tailMap(arg0: any): Internal.SortedMap<any, any>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Object2LongFunction<K>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Object2ShortFunction<K>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Object2IntFunction<K>;
        headMap(arg0: any): Internal.SortedMap<any, any>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2ObjectFunction<V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2ObjectFunction<T, V>;
        keySet(): Internal.ObjectSet<any>;
        abstract putAll(arg0: Internal.Map_<K, V>): void;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Object2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2ObjectFunction<T, V>;
        abstract lastKey(): K;
        abstract size(): number;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2ObjectFunction<V>;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        "computeIfAbsent(java.lang.Object,it.unimi.dsi.fastutil.objects.Object2ObjectFunction)"(arg0: K, arg1: Internal.Object2ObjectFunction_<K, V>): V;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Object2ObjectFunction<K, T>;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        abstract firstKey(): K;
        get empty(): boolean
    }
    type Object2ObjectSortedMap_<K, V> = Object2ObjectSortedMap<K, V>;
    class TextureManager implements Internal.Tickable, Internal.PreparableReloadListener, Internal.AutoCloseable, Internal.IdentifiableResourceReloadListener {
        constructor(arg0: Internal.ResourceManager_)
        getClass(): typeof any;
        bindForSetup(arg0: ResourceLocation_): void;
        getTexture(arg0: ResourceLocation_, arg1: Internal.AbstractTexture_): Internal.AbstractTexture;
        release(arg0: ResourceLocation_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "register(java.lang.String,net.minecraft.client.renderer.texture.DynamicTexture)"(arg0: string, arg1: Internal.DynamicTexture_): ResourceLocation;
        getName(): string;
        preload(arg0: ResourceLocation_, arg1: Internal.Executor_): Internal.CompletableFuture<void>;
        dumpAllSheets(arg0: Internal.Path_): void;
        getFabricId(): ResourceLocation;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        toString(): string;
        notifyAll(): void;
        getFabricDependencies(): Internal.Collection<any>;
        tick(): void;
        "register(net.minecraft.resources.ResourceLocation,net.minecraft.client.renderer.texture.AbstractTexture)"(arg0: ResourceLocation_, arg1: Internal.AbstractTexture_): void;
        hashCode(): number;
        wait(): void;
        close(): void;
        register(arg0: ResourceLocation_, arg1: Internal.AbstractTexture_): void;
        wait(arg0: number): void;
        getTexture(arg0: ResourceLocation_): Internal.AbstractTexture;
        register(arg0: string, arg1: Internal.DynamicTexture_): ResourceLocation;
        equals(arg0: any): boolean;
        get class(): typeof any
        get name(): string
        get fabricId(): ResourceLocation
        get fabricDependencies(): Internal.Collection<any>
        static readonly INTENTIONAL_MISSING_TEXTURE: (ResourceLocation) & (ResourceLocation);
        readonly byPath: Internal.Map<ResourceLocation, Internal.AbstractTexture>;
    }
    type TextureManager_ = TextureManager;
}
declare namespace it.unimi.dsi.fastutil.ints {
    interface IntBinaryOperator extends Internal.IntBinaryOperator, Internal.BinaryOperator<number> {
        abstract apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "apply(java.lang.Integer,java.lang.Integer)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        apply(arg0: any, arg1: any): any;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.BiFunction<number, number, V>;
        maxBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        minBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        abstract "apply(int,int)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "apply(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
    }
    type IntBinaryOperator_ = IntBinaryOperator;
}
