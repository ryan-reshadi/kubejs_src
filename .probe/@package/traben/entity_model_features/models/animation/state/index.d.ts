import { $HumanoidModel } from "@package/net/minecraft/client/model";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $Function_, $Function } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EMFEntity } from "@package/traben/entity_model_features/utils";
import { $Record } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/traben/entity_model_features/models/animation/state" {
    export class $EMFBipedPose {
        applyTo(model: $HumanoidModel<never>): void;
        applyToSubmit: boolean;
        constructor(model: $HumanoidModel<never>);
    }
    export class $EMFEntityRenderState {
        static manualPlayerState(): $EMFEntityRenderState;
    }
    export interface $EMFEntityRenderState extends $ETFEntityRenderState {
        activate(inMount: boolean): void;
        deactivate(inMount: boolean): void;
        y(): number;
        typeString(): string;
        age(): number;
        isSubmit(): boolean;
        x(): number;
        isAlive(): boolean;
        z(): number;
        isOnFire(): boolean;
        isGlowing(): boolean;
        isFirstPersonHand(): boolean;
        isInvisible(): boolean;
        isSprinting(): boolean;
        isInLava(): boolean;
        isOnGround(): boolean;
        yaw(): number;
        pitch(): number;
        headPitch(): number;
        isWet(): boolean;
        isSneaking(): boolean;
        /**
         * @deprecated
         */
        emfEntity(): $EMFEntity;
        setLayerFactory(arg0: $Function_<$ResourceLocation, $RenderType>): void;
        prevPitch(): number;
        layerFactory(): $Function<$ResourceLocation, $RenderType>;
        prevX(): number;
        prevY(): number;
        setIsFirstPersonHand(arg0: boolean): void;
        headYaw(): number;
        shadowSize(): number;
        shadowOpacity(): number;
        needsToModifyShadow(): boolean;
        shadowX(): number;
        shadowZ(): number;
        needsToModifyFire(): boolean;
        fireX(): number;
        fireY(): number;
        fireZ(): number;
        fireScale(): number;
        fireHeight(): number;
        prevZ(): number;
        limbAngle(): number;
        limbDistance(): number;
        variableMap(): $Map<string, number>;
        isTouchingWater(): boolean;
        isManualPlayerState(): boolean;
        setHeadYaw(arg0: number): void;
        setHeadPitch(arg0: number): void;
        hasVehicle(): boolean;
        getBipedPose(): $EMFBipedPose;
        setShadowSize(arg0: number): void;
        setShadowOpacity(arg0: number): void;
        setShadowX(arg0: number): void;
        setShadowZ(arg0: number): void;
        setLimbAngle(arg0: number): void;
        setLimbDistance(arg0: number): void;
        setFireX(arg0: number): void;
        setFireY(arg0: number): void;
        setFireZ(arg0: number): void;
        setFireHeight(arg0: number): void;
        setFireScale(arg0: number): void;
        skipModelVariate(): boolean;
        setSkipModelVariate(arg0: boolean): void;
        setSubmit(arg0: boolean): void;
        getEMFStateSnapshot(): $EMFState$EMFStateStaticSnapshot;
        setEMFStateSnapshot(arg0: $EMFState$EMFStateStaticSnapshot_): void;
        setManualPlayerState(arg0: boolean): void;
        hasPassengers(): boolean;
        emfVelocity(): $Vec3;
        setBipedPose(arg0: $EMFBipedPose): void;
        get alive(): boolean;
        get onFire(): boolean;
        get glowing(): boolean;
        get firstPersonHand(): boolean;
        get invisible(): boolean;
        get sprinting(): boolean;
        get inLava(): boolean;
        get onGround(): boolean;
        get wet(): boolean;
        get sneaking(): boolean;
        get touchingWater(): boolean;
    }
    export class $EMFState$EMFStateStaticSnapshot extends $Record {
        isDefault(): boolean;
        isInGui(): boolean;
        restoreStatics(): void;
        isOnHead(): boolean;
        isInHand(): boolean;
        isInItemFrame(): boolean;
        isInShoulderMethod(): boolean;
        isLeftShoulder(): boolean;
        isInGroundOverride(): boolean;
        constructor(isInShoulderMethod: boolean, isLeftShoulder: boolean, isInGui: boolean, isInGroundOverride: boolean, isOnHead: boolean, isInHand: boolean, isInItemFrame: boolean);
        get default(): boolean;
        get inGui(): boolean;
        get onHead(): boolean;
        get inHand(): boolean;
        get inItemFrame(): boolean;
        get inShoulderMethod(): boolean;
        get leftShoulder(): boolean;
        get inGroundOverride(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EMFState$EMFStateStaticSnapshot}.
     */
    export type $EMFState$EMFStateStaticSnapshot_ = { isInShoulderMethod?: boolean, isInGui?: boolean, isLeftShoulder?: boolean, isInGroundOverride?: boolean, isInItemFrame?: boolean, isInHand?: boolean, isOnHead?: boolean,  } | [isInShoulderMethod?: boolean, isInGui?: boolean, isLeftShoulder?: boolean, isInGroundOverride?: boolean, isInItemFrame?: boolean, isInHand?: boolean, isOnHead?: boolean, ];
}
