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
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        isRelative(): boolean;
        unload(arg0: $Channel): void;
        tick(): void;
        getSource(): $SoundSource;
        getDelay(): number;
        isStopped(): boolean;
        getY(): number;
        canPlaySound(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        canStartSilent(): boolean;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        isLooping(): boolean;
        getZ(): number;
        getX(): number;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Sound;
        tickWithChannel(arg0: $Channel): void;
        instance: $SoundInstance;
        constructor(arg0: $SoundInstance, arg1: $SubLevel);
        get location(): $ResourceLocation;
        get relative(): boolean;
        get source(): $SoundSource;
        get delay(): number;
        get stopped(): boolean;
        get y(): number;
        get attenuation(): $SoundInstance$Attenuation;
        get looping(): boolean;
        get z(): number;
        get x(): number;
        get volume(): number;
        get pitch(): number;
        get sound(): $Sound;
    }
}
