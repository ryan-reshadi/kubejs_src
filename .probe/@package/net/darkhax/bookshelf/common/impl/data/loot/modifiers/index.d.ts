
declare module "@package/net/darkhax/bookshelf/common/impl/data/loot/modifiers" {
    export class $ILootPoolHooks {
    }
    export interface $ILootPoolHooks {
        bookshelf$getHash(): number;
        bookshelf$setHash(arg0: number): void;
        bookshelf$matches(arg0: number): boolean;
    }
}
