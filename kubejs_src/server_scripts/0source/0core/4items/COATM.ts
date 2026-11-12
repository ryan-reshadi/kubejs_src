class COATM extends CustomItem {
    constructor() {
        super("Chain of a Thousand Miles", "kubejs:chain_of_a_thousand_miles", '{COATM:1b}', "§f");
        this.setCurseBreakVulnerable(false);
    }

    public entityLeftClickBefore(event: KubeEvent<typeof EntityEvents.beforeHurt>): void {
        super.entityLeftClickBefore(event);
        
    }

    public entityLeftClickAfter(event: KubeEvent<typeof EntityEvents.afterHurt>): void {
        super.entityLeftClickAfter(event);
    }

    public entityRightClick(event: KubeEvent<typeof ItemEvents.entityInteracted>): void {
        // Implement entity right click behavior here
    }

    protected onRightClick(event: KubeEvent<typeof ItemEvents.rightClicked>): void {
        event.player.potionEffects.add('kubejs:nullifier', 20 * 200, 0);
        this.addCooldown(event, 200);
        event.cancel();
    }
}