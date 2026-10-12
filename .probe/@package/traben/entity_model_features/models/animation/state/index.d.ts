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
        isSneaking(): boolean;
        x(): number;
        isAlive(): boolean;
        z(): number;
        y(): number;
        typeString(): string;
        isSubmit(): boolean;
        isManualPlayerState(): boolean;
        /**
         * @deprecated
         */
        emfEntity(): $EMFEntity;
        fireY(): number;
        fireX(): number;
        fireHeight(): number;
        shadowZ(): number;
        fireScale(): number;
        shadowSize(): number;
        shadowX(): number;
        fireZ(): number;
        isGlowing(): boolean;
        headPitch(): number;
        isTouchingWater(): boolean;
        activate(inMount: boolean): void;
        deactivate(inMount: boolean): void;
        isFirstPersonHand(): boolean;
        shadowOpacity(): number;
        needsToModifyFire(): boolean;
        setLayerFactory(arg0: $Function_<$ResourceLocation, $RenderType>): void;
        prevZ(): number;
        age(): number;
        isOnGround(): boolean;
        headYaw(): number;
        layerFactory(): $Function<$ResourceLocation, $RenderType>;
        isInvisible(): boolean;
        isOnFire(): boolean;
        prevPitch(): number;
        pitch(): number;
        yaw(): number;
        isSprinting(): boolean;
        isWet(): boolean;
        isInLava(): boolean;
        limbAngle(): number;
        setShadowX(arg0: number): void;
        hasVehicle(): boolean;
        setFireX(arg0: number): void;
        setFireZ(arg0: number): void;
        setFireY(arg0: number): void;
        setSubmit(arg0: boolean): void;
        setShadowZ(arg0: number): void;
        prevX(): number;
        prevY(): number;
        setIsFirstPersonHand(arg0: boolean): void;
        limbDistance(): number;
        variableMap(): $Map<string, number>;
        setHeadYaw(arg0: number): void;
        setHeadPitch(arg0: number): void;
        needsToModifyShadow(): boolean;
        setManualPlayerState(arg0: boolean): void;
        setSkipModelVariate(arg0: boolean): void;
        getEMFStateSnapshot(): $EMFState$EMFStateStaticSnapshot;
        setEMFStateSnapshot(arg0: $EMFState$EMFStateStaticSnapshot_): void;
        setFireHeight(arg0: number): void;
        hasPassengers(): boolean;
        setLimbDistance(arg0: number): void;
        setShadowOpacity(arg0: number): void;
        setFireScale(arg0: number): void;
        skipModelVariate(): boolean;
        emfVelocity(): $Vec3;
        setShadowSize(arg0: number): void;
        getBipedPose(): $EMFBipedPose;
        setBipedPose(arg0: $EMFBipedPose): void;
        setLimbAngle(arg0: number): void;
        get sneaking(): boolean;
        get alive(): boolean;
        get glowing(): boolean;
        get touchingWater(): boolean;
        get firstPersonHand(): boolean;
        get onGround(): boolean;
        get invisible(): boolean;
        get onFire(): boolean;
        get sprinting(): boolean;
        get wet(): boolean;
        get inLava(): boolean;
    }
    export class $EMFState$EMFStateStaticSnapshot extends $Record {
        isDefault(): boolean;
        isInGui(): boolean;
        restoreStatics(): void;
        isOnHead(): boolean;
        isInHand(): boolean;
        isInShoulderMethod(): boolean;
        isInGroundOverride(): boolean;
        isLeftShoulder(): boolean;
        isInItemFrame(): boolean;
        constructor(isInShoulderMethod: boolean, isLeftShoulder: boolean, isInGui: boolean, isInGroundOverride: boolean, isOnHead: boolean, isInHand: boolean, isInItemFrame: boolean);
        get default(): boolean;
        get inGui(): boolean;
        get onHead(): boolean;
        get inHand(): boolean;
        get inShoulderMethod(): boolean;
        get inGroundOverride(): boolean;
        get leftShoulder(): boolean;
        get inItemFrame(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EMFState$EMFStateStaticSnapshot}.
     */
    export type $EMFState$EMFStateStaticSnapshot_ = { isInGui?: boolean, isInShoulderMethod?: boolean, isOnHead?: boolean, isInHand?: boolean, isInItemFrame?: boolean, isInGroundOverride?: boolean, isLeftShoulder?: boolean,  } | [isInGui?: boolean, isInShoulderMethod?: boolean, isOnHead?: boolean, isInHand?: boolean, isInItemFrame?: boolean, isInGroundOverride?: boolean, isLeftShoulder?: boolean, ];
}
