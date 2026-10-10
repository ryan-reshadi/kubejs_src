import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Waystone, $WaystoneGroup, $TeleportDestination, $WaystoneTeleportContext, $TeleportDestination_, $MutablePersonalizedWaystone, $EntityTeleportResult } from "@package/net/blay09/mods/waystones/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $WaystoneTeleportError } from "@package/net/blay09/mods/waystones/api/error";
import { $UUID, $List, $Set, $UUID_, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $WarpRequirement } from "@package/net/blay09/mods/waystones/api/requirement";
import { $BalmEvent } from "@package/net/blay09/mods/balm/api/event";
import { $Function_, $Function } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $WaystoneManagerImpl } from "@package/net/blay09/mods/waystones/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/blay09/mods/waystones/api/event" {
    export class $WaystoneTeleportEvent$Prepare extends $WaystoneTeleportEvent {
        getContext(): $WaystoneTeleportContext;
        getChunkPositions(): $Set<$ChunkPos>;
        addChunkPosition(arg0: $ChunkPos): void;
        addPreparationTask(arg0: $Function_<$Either<void, $WaystoneTeleportError>, $CompletableFuture<$Either<void, $WaystoneTeleportError>>>): void;
        getPreparationTasks(): $List<$Function<$Either<void, $WaystoneTeleportError>, $CompletableFuture<$Either<void, $WaystoneTeleportError>>>>;
        constructor(arg0: $WaystoneTeleportContext, arg1: $Set_<$ChunkPos>);
        get context(): $WaystoneTeleportContext;
        get chunkPositions(): $Set<$ChunkPos>;
        get preparationTasks(): $List<$Function<$Either<void, $WaystoneTeleportError>, $CompletableFuture<$Either<void, $WaystoneTeleportError>>>>;
    }
    export class $WaystonesListReceivedEvent extends $BalmEvent {
        getWaystones(): $List<$Waystone>;
        getWaystoneType(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $List_<$Waystone>);
        get waystones(): $List<$Waystone>;
        get waystoneType(): $ResourceLocation;
    }
    export class $WaystoneInitializedEvent extends $BalmEvent {
        getWaystone(): $Waystone;
        constructor(arg0: $Waystone);
        get waystone(): $Waystone;
    }
    export class $WaystoneTeleportEvent$Pre extends $WaystoneTeleportEvent {
        getContext(): $WaystoneTeleportContext;
        setRequirements(arg0: $WarpRequirement): void;
        addAdditionalEntity(arg0: $Entity): void;
        getRequirements(): $WarpRequirement;
        constructor(arg0: $WaystoneTeleportContext);
        get context(): $WaystoneTeleportContext;
    }
    export class $BuildWaystoneSelectionMenuEvent extends $BalmEvent {
        getFlags(): $Set<$ResourceLocation>;
        getPlayer(): $Player;
        getWaystones(): $List<$MutablePersonalizedWaystone>;
        addWaystone(arg0: $MutablePersonalizedWaystone): void;
        getWarpItem(): $ItemStack;
        getTargetKind(): $ResourceLocation;
        getSourceWaystone(): $MutablePersonalizedWaystone;
        constructor(arg0: $Player, arg1: $MutablePersonalizedWaystone, arg2: $List_<$MutablePersonalizedWaystone>, arg3: $Set_<$ResourceLocation_>, arg4: $ResourceLocation_, arg5: $ItemStack_);
        get flags(): $Set<$ResourceLocation>;
        get player(): $Player;
        get waystones(): $List<$MutablePersonalizedWaystone>;
        get warpItem(): $ItemStack;
        get targetKind(): $ResourceLocation;
        get sourceWaystone(): $MutablePersonalizedWaystone;
    }
    export class $WaystoneUpdatedEvent extends $BalmEvent {
        getWaystone(): $Waystone;
        constructor(arg0: $Waystone);
        get waystone(): $Waystone;
    }
    export class $WaystoneTeleportEntityEvent$Post extends $WaystoneTeleportEntityEvent {
        getTeleportedEntity(): $Entity;
        getTeleportResult(): $EntityTeleportResult;
        constructor(arg0: $WaystoneTeleportContext, arg1: $Entity, arg2: $EntityTeleportResult, arg3: $TeleportDestination_, arg4: $ServerLevel, arg5: $Vec3_, arg6: $Direction_);
        constructor(arg0: $WaystoneTeleportContext, arg1: $Entity, arg2: $Entity, arg3: $TeleportDestination_, arg4: $ServerLevel, arg5: $Vec3_, arg6: $Direction_);
        get teleportedEntity(): $Entity;
        get teleportResult(): $EntityTeleportResult;
    }
    export class $WaystoneTeleportEntityEvent extends $BalmEvent {
        getDirection(): $Direction;
        getEntity(): $Entity;
        getContext(): $WaystoneTeleportContext;
        setDirection(arg0: $Direction_): void;
        getTargetLevel(): $ServerLevel;
        getTargetPosition(): $Vec3;
        setTargetPosition(arg0: $Vec3_): void;
        setTargetLevel(arg0: $ServerLevel): void;
        getOriginalDestination(): $TeleportDestination;
        constructor(arg0: $WaystoneTeleportContext, arg1: $Entity, arg2: $TeleportDestination_, arg3: $ServerLevel, arg4: $Vec3_, arg5: $Direction_);
        get entity(): $Entity;
        get context(): $WaystoneTeleportContext;
        get originalDestination(): $TeleportDestination;
    }
    export class $WaystonesLoadedEvent extends $BalmEvent {
        getWaystoneManager(): $WaystoneManagerImpl;
        constructor(arg0: $WaystoneManagerImpl);
        get waystoneManager(): $WaystoneManagerImpl;
    }
    export class $WaystoneTeleportEntityEvent$Pre extends $WaystoneTeleportEntityEvent {
        overrideResult(arg0: $EntityTeleportResult): void;
        getOverrideResult(): ($EntityTeleportResult) | undefined;
        constructor(arg0: $WaystoneTeleportContext, arg1: $Entity, arg2: $TeleportDestination_, arg3: $ServerLevel, arg4: $Vec3_, arg5: $Direction_);
    }
    export class $WaystoneRemovedEvent extends $BalmEvent {
        getWaystone(): $Waystone;
        constructor(arg0: $Waystone);
        get waystone(): $Waystone;
    }
    export class $WaystoneActivatedEvent extends $BalmEvent {
        getPlayer(): $Player;
        getWaystone(): $Waystone;
        constructor(arg0: $Player, arg1: $Waystone);
        get player(): $Player;
        get waystone(): $Waystone;
    }
    export class $WaystoneTeleportEvent$Post extends $WaystoneTeleportEvent {
        getContext(): $WaystoneTeleportContext;
        getTeleportedEntities(): $List<$Entity>;
        constructor(arg0: $WaystoneTeleportContext, arg1: $List_<$Entity>);
        get context(): $WaystoneTeleportContext;
        get teleportedEntities(): $List<$Entity>;
    }
    export class $CollectDynamicWaystoneGroupsEvent extends $BalmEvent {
        getGroups(): $List<$WaystoneGroup>;
        getWaystone(): $Waystone;
        addGroup(arg0: $WaystoneGroup): void;
        addGroups(arg0: $Collection_<$WaystoneGroup>): void;
        constructor(arg0: $Waystone, arg1: $List_<$WaystoneGroup>);
        get groups(): $List<$WaystoneGroup>;
        get waystone(): $Waystone;
    }
    export class $WaystoneTeleportEvent extends $BalmEvent {
        constructor();
    }
    export class $WaystoneTeleportEvent$Complete extends $WaystoneTeleportEvent {
        getContext(): $WaystoneTeleportContext;
        getResults(): $List<$EntityTeleportResult>;
        getPrimaryResult(): ($EntityTeleportResult) | undefined;
        getAdditionalResults(): $List<$EntityTeleportResult>;
        getTeleportedEntities(): $List<$Entity>;
        getTeleportError(): ($WaystoneTeleportError) | undefined;
        constructor(arg0: $WaystoneTeleportContext, arg1: $EntityTeleportResult, arg2: $List_<$EntityTeleportResult>, arg3: $WaystoneTeleportError);
        get context(): $WaystoneTeleportContext;
        get results(): $List<$EntityTeleportResult>;
        get primaryResult(): ($EntityTeleportResult) | undefined;
        get additionalResults(): $List<$EntityTeleportResult>;
        get teleportedEntities(): $List<$Entity>;
        get teleportError(): ($WaystoneTeleportError) | undefined;
    }
    export class $GenerateWaystoneNameEvent extends $BalmEvent {
        getName(): $Component;
        setName(arg0: $Component_): void;
        getWaystone(): $Waystone;
        constructor(arg0: $Waystone, arg1: $Component_);
        get waystone(): $Waystone;
    }
    export class $WaystoneRemoveReceivedEvent extends $BalmEvent {
        getWaystoneType(): $ResourceLocation;
        wasDestroyed(): boolean;
        getWaystoneId(): $UUID;
        constructor(arg0: $ResourceLocation_, arg1: $UUID_, arg2: boolean);
        get waystoneType(): $ResourceLocation;
        get waystoneId(): $UUID;
    }
    export class $CollectDefaultWaystoneGroupsEvent extends $BalmEvent {
        getGroups(): $List<$WaystoneGroup>;
        getPlayer(): $Player;
        addGroup(arg0: $WaystoneGroup): void;
        addGroups(arg0: $Collection_<$WaystoneGroup>): void;
        constructor(arg0: $Player, arg1: $List_<$WaystoneGroup>);
        get groups(): $List<$WaystoneGroup>;
        get player(): $Player;
    }
    export class $WaystoneUpdateReceivedEvent extends $BalmEvent {
        getWaystone(): $Waystone;
        constructor(arg0: $Waystone);
        get waystone(): $Waystone;
    }
}
