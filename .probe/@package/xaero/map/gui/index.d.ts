import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ConfigOptionScreenEntry } from "@package/xaero/lib/client/config/option/ui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $MapProcessor } from "@package/xaero/map";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $PNGExportResult } from "@package/xaero/map/file/export";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $GuiSettings } from "@package/xaero/lib/client/gui";
export * as message from "@package/xaero/map/gui/message";

declare module "@package/xaero/map/gui" {
    export class $MapTileSelection {
        getBottom(): number;
        getTop(): number;
        setEnd(arg0: number, arg1: number): void;
        getRight(): number;
        getLeft(): number;
        getEndZ(): number;
        getStartX(): number;
        getStartZ(): number;
        getEndX(): number;
        constructor(arg0: number, arg1: number);
        get bottom(): number;
        get top(): number;
        get right(): number;
        get left(): number;
        get endZ(): number;
        get startX(): number;
        get startZ(): number;
        get endX(): number;
    }
    export class $ExportScreen extends $GuiSettings {
        getSelection(): $MapTileSelection;
        primaryOptionEntry<T>(arg0: $ConfigOption<T>): $ConfigOptionScreenEntry<T>;
        onExportDone(arg0: $PNGExportResult): void;
        static MENU_BACKGROUND: $ResourceLocation;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        fullExport: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        escape: $Screen;
        static INWORLD_MENU_BACKGROUND: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Screen, arg2: $MapProcessor, arg3: $MapTileSelection);
        get selection(): $MapTileSelection;
    }
}
