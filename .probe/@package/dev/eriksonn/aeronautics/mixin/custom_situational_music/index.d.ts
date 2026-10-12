import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";

declare module "@package/dev/eriksonn/aeronautics/mixin/custom_situational_music" {
    export class $MusicManagerAccessor {
    }
    export interface $MusicManagerAccessor {
        setNextSongDelay(arg0: number): void;
        getCurrentMusic(): $SoundInstance;
        getNextSongDelay(): number;
        get currentMusic(): $SoundInstance;
    }
}
