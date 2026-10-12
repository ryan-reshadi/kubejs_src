class SplitSoulKatana extends CustomItem {
    constructor() {
        super("Split Soul Katana", "kubejs:soulsplitkatana", '{SplitSoulKatana:1b}', "§f");
    }

    public entityLeftClickBefore(event: KubeEvent<typeof EntityEvents.beforeHurt>): void {
        // Implement left click behavior here
    }

    public entityLeftClickAfter(event: KubeEvent<typeof EntityEvents.afterHurt>): void {
        
    }

    public entityRightClick(event: KubeEvent<typeof ItemEvents.entityInteracted>): void {
        // Implement entity right click behavior here
    }

    protected onRightClick(event: KubeEvent<typeof ItemEvents.rightClicked>): void {
        const direction = event.player.getLookAngle();

        const speed = 3; // Define a speed value

        const vx = Number(direction.x) * speed;
        const vy = 0.2 * Number(direction.y) * speed;
        const vz = Number(direction.z) * (speed);

        const velocity = new Vec3d(vx, vy, vz);
        event.player.setDeltaMovement(velocity);
        event.player.hurtMarked = true;
        this.addCooldown(event, 1);
        event.cancel();
    }
}