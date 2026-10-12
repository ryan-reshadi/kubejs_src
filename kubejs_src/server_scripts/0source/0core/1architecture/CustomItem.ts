type Capability =
    "cursebreaker"
    | "poison"
    | "lifesteal"

abstract class CustomItem {
    private itemID: string;
    private customData: string;
    private name: string;
    private nameColor: string;
    private capabilities: Record<Capability, boolean>;
    protected cursebreakerVulnerable: boolean = true;

    constructor(name: string, itemID: string, customData: string, nameColor: string = "§f", itemTexture: string = "") {
        this.name = name;
        this.itemID = itemID;
        this.customData = customData;
        this.nameColor = nameColor;
        this.capabilities = {
            cursebreaker: false,
            poison: false,
            lifesteal: false
        };
    }

    public entityLeftClickBefore(event: KubeEvent<typeof EntityEvents.beforeHurt>): void {
        event.server.tell("flag1")
        if (this.hasCapability("cursebreaker")) {
            event.server.tell("flag2")
            event.entity.getActiveEffects().forEach((effect: any) => {
                event.server.tell(
                    `Effect: ${effect.getDescriptionId()}, ` +
                    `Duration: ${effect.getDuration()} ticks, ` +
                    `Amplifier: ${effect.getAmplifier()}`
                )
            });
            event.server.tell("flag3")
        }
    };
    public entityLeftClickAfter(event: KubeEvent<typeof EntityEvents.afterHurt>): void{

    };
    public abstract entityRightClick(event: KubeEvent<typeof ItemEvents.entityInteracted>): void;
    public rightClick(event: KubeEvent<typeof ItemEvents.rightClicked>): void {
        if (event.player.hasEffect('kubejs:cursebroken') && this.cursebreakerVulnerable) {
            return;
        }
        this.onRightClick(event);
    }

    protected abstract onRightClick(event: KubeEvent<typeof ItemEvents.rightClicked>): void;

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

    public setCapability(capability: Capability, value: boolean): void {
        this.capabilities[capability] = value;
    }

    public hasCapability(capability: Capability): boolean {
        return this.capabilities[capability];
    }

    public removeCapability(capability: Capability): void {
        this.capabilities[capability] = false;
    }
    public toggleCapability(capability: Capability): void {
        this.capabilities[capability] = !this.capabilities[capability];
    }

}