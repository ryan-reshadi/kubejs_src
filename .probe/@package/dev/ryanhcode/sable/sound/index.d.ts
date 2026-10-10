import { $SoundSource } from "@package/net/minecraft/sounds";
import { $WeighedSoundEvents, $SoundBufferLibrary, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundInstance$Attenuation, $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/sound" {
    export class $SoundInstanceDelegated {
    }
    export interface $SoundInstanceDelegated {
        setDelegate(arg0: $MovingSoundInstanceDelegate): void;
        getDelegate(): $MovingSoundInstanceDelegate;
    }
    export class $MovingSoundInstanceDelegate implements $SoundInstance, $TickableSoundInstance {
        getY(): number;
        getDelay(): number;
        isRelative(): boolean;
        getSource(): $SoundSource;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        tick(): void;
        unload(arg0: $Channel): void;
        isStopped(): boolean;
        getX(): number;
        getZ(): number;
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Sound;
        isLooping(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        canStartSilent(): boolean;
        canPlaySound(): boolean;
        tickWithChannel(arg0: $Channel): void;
        instance: $SoundInstance;
        constructor(arg0: $SoundInstance, arg1: $SubLevel);
        get y(): number;
        get delay(): number;
        get relative(): boolean;
        get source(): $SoundSource;
        get stopped(): boolean;
        get x(): number;
        get z(): number;
        get location(): $ResourceLocation;
        get volume(): number;
        get pitch(): number;
        get sound(): $Sound;
        get looping(): boolean;
        get attenuation(): $SoundInstance$Attenuation;
    }
}
