import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener {
        onHotbarSelected(slot: number): void;
        renderTooltip(guiGraphics: $GuiGraphics): void;
        onMouseScrolled(slot: number): void;
        onMouseMiddleClick(): void;
        isMenuActive(): boolean;
        renderHotbar(guiGraphics: $GuiGraphics): void;
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
        constructor(minecraft: $Minecraft);
        get menuActive(): boolean;
    }
}
