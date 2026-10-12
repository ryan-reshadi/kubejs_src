import { $RenderType } from "@package/net/minecraft/client/renderer";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/com/finderfeed/fdlib/systems/render_types" {
    export interface $FDRenderType extends RegistryMarked<RegistryTypes.FdlibRenderTypeTag, RegistryTypes.FdlibRenderType> {}
    export class $RenderTypeFactory {
    }
    export interface $RenderTypeFactory {
        create(arg0: $ResourceLocation_): $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeFactory}.
     */
    export type $RenderTypeFactory_ = ((arg0: $ResourceLocation) => $RenderType);
    export class $FDRenderType {
        factory(): $RenderTypeFactory;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $FDRenderType}.
     */
    export type $FDRenderType_ = RegistryTypes.FdlibRenderType;
}
