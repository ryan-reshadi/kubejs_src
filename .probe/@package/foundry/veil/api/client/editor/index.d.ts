
declare module "@package/foundry/veil/api/client/editor" {
    export class $EditorAttributeProvider {
    }
    export interface $EditorAttributeProvider {
        renderImGuiAttributes(): void;
    }
    /**
     * Values that may be interpreted as {@link $EditorAttributeProvider}.
     */
    export type $EditorAttributeProvider_ = (() => void);
}
