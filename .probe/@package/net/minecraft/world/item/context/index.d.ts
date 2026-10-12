import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        getNearestLookingVerticalDirection(): $Direction;
        canPlace(): boolean;
        getNearestLookingDirections(): $Direction[];
        handler$dna000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$dna000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$dna000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingDirection(): $Direction;
        get nearestLookingVerticalDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        constructor(level: $Level_, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor {
        getLevel(): $Level;
        isInside(): boolean;
        getHorizontalDirection(): $Direction;
        isSecondaryUseActive(): boolean;
        getItemInHand(): $ItemStack;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getClickLocation(): $Vec3;
        getRotation(): number;
        getPlayer(): $Player;
        getHand(): $InteractionHand;
        getHitResult(): $BlockHitResult;
        create$getHitResult(): $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get level(): $Level;
        get inside(): boolean;
        get horizontalDirection(): $Direction;
        get secondaryUseActive(): boolean;
        get itemInHand(): $ItemStack;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get clickLocation(): $Vec3;
        get rotation(): number;
        get player(): $Player;
        get hand(): $InteractionHand;
        get hitResult(): $BlockHitResult;
    }
}
