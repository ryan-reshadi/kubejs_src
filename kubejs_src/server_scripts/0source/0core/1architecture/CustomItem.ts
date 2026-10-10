abstract class CustomItem {
    private itemID: string;
    private customData: string;
    private name: string;
    private nameColor: string;
    

    constructor(name: string, itemID: string, customData: string, nameColor: string = "§f", itemTexture: string = "") {
        this.name = name;
        this.itemID = itemID;
        this.customData = customData;
        this.nameColor = nameColor;
    }

    public abstract entityLeftClick(event: KubeEvent<typeof EntityEvents.hurt>): void;
    public abstract entityRightClick(event: KubeEvent<typeof ItemEvents.entityInteracted>): void;
    public abstract rightClick(event: KubeEvent<typeof ItemEvents.rightClicked>): void;

    public getName(): string {
        return this.name;
    }

    public getNameColor(): string {
        return this.nameColor;
    }

    public getItemID(): string {
        return this.itemID;
    }

    public getCustomData(): string {
        return this.customData;
    }

    public giveToPlayer(player: Player): void {
        const item = Item.of(
            this.itemID,
            {
                "minecraft:custom_data": this.customData,
                "minecraft:custom_name": {
                    text: this.name,
                    color: this.nameColor,
                    italic: false
                }
            }
        );

        player.give(item);
    }

    public addCooldown(event: KubeEvent<typeof ItemEvents.rightClicked>, seconds: number): void {
        event.player.addItemCooldown(event.item, seconds * 20);
    }
}