class COATM extends CustomItem {
    constructor() {
        super("Chain of a Thousand Miles", "kubejs:coatm");
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
        event.entity.potionEffects.add('kubejs:nullifier', 20 * 60, 0);
        this.addCooldown(event, 200);
    }
}