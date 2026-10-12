import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/command/argument" {
    export class $SubLevelSuggestionProvider {
    }
    export interface $SubLevelSuggestionProvider {
        getSelectedSubLevel(): $SubLevel;
        get selectedSubLevel(): $SubLevel;
    }
}
