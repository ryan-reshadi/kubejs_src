class ISOH extends CustomItem {
    constructor() {
        super("Inverted Spear of Heaven", "simplyswords:iron_sai", '{ISOH:1b}', "§f");
    }

    public entityLeftClick(event: KubeEvent<typeof EntityEvents.hurt>): void {
        // Implement left click behavior here
    }

    public entityRightClick(event: KubeEvent<typeof ItemEvents.entityInteracted>): void {
        // Implement entity right click behavior here
    }

    public rightClick(event: KubeEvent<typeof ItemEvents.rightClicked>): void {
        const direction = event.player.getLookAngle();

        const speed = 1.75; // Define a speed value

        const vx = Number(direction.x) * speed;
        const vy = 0.75 * Number(direction.y) * speed;
        const vz = Number(direction.z) * (speed);

        const velocity = new Vec3d(vx, vy, vz);
        event.player.setDeltaMovement(velocity);
        event.player.hurtMarked = true;
    }
}