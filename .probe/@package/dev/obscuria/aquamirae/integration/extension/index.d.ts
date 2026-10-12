export * as server from "@package/dev/obscuria/aquamirae/integration/extension/server";

declare module "@package/dev/obscuria/aquamirae/integration/extension" {
    export class $ExtensionPlayer {
    }
    export interface $ExtensionPlayer {
        aquamirae$setRemnantSaberBonus(arg0: number): void;
        aquamirae$getRemnantSaberBonus(): number;
    }
}
