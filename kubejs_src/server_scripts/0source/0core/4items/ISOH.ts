class ISOH extends CustomItem {
    constructor() {
        super("Inverted Spear of Heaven", "kubejs:isoh", '{ISOH:1b}', "§f");
        this.setCapability("cursebreaker", true);
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
        const direction = event.player.getLookAngle();

        const speed = 1.75; // Define a speed value

        const vx = Number(direction.x) * speed;
        const vy = 0.75 * Number(direction.y) * speed;
        const vz = Number(direction.z) * (speed);

        const velocity = new Vec3d(vx, vy, vz);
        event.player.setDeltaMovement(velocity);
        event.server.runCommandSilent("effect give " + event.player.username + " minecraft:strength 1 1 true")
        // event.server.runCommandSilent("effect give PVPDreadlord minecraft:strength infinite 1 true")
        event.player.hurtMarked = true;
        this.addCooldown(event, 0.75);
    }
}