const SimpleMenuProvider = Java.loadClass(
  "net.minecraft.world.SimpleMenuProvider",
);
const ChestMenu = Java.loadClass("net.minecraft.world.inventory.ChestMenu");
const SimpleContainer = Java.loadClass("net.minecraft.world.SimpleContainer");
const ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack");
const CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");
const MenuType = Java.loadClass("net.minecraft.world.inventory.MenuType");

const STASH_SLOTS = 9;

ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal("stash").executes((ctx) => {
      if (!ctx.source.isPlayer()) return 0;
      const player = ctx.source.getPlayer();
      const registries = player.registryAccess();

      if (!player.persistentData.contains("ServerStashData")) {
        player.persistentData.put("ServerStashData", new CompoundTag());
      }
      const savedTag = player.persistentData.getCompound("ServerStashData");

      const stashContainer = new SimpleContainer([
        ItemStack.EMPTY,
        ItemStack.EMPTY,
        ItemStack.EMPTY,
        ItemStack.EMPTY,
        ItemStack.EMPTY,
        ItemStack.EMPTY,
        ItemStack.EMPTY,
        ItemStack.EMPTY,
        ItemStack.EMPTY,
      ]);

      for (let i = 0; i < STASH_SLOTS; i++) {
        if (savedTag.contains("slot" + i)) {
          stashContainer.setItem(
            i,
            ItemStack.parse(
              registries,
              savedTag.getCompound("slot" + i),
            ).orElse(ItemStack.EMPTY),
          );
        }
      }

      stashContainer.addListener((container) => {
        const updatedTag = new CompoundTag();
        for (let i = 0; i < STASH_SLOTS; i++) {
          if (!container.getItem(i).isEmpty()) {
            updatedTag.put("slot" + i, container.getItem(i).save(registries));
          }
        }
        player.persistentData.put("ServerStashData", updatedTag);
      });

      player.openMenu(
        new SimpleMenuProvider(
          (id, playerInv, p) =>
            new ChestMenu(
              MenuType.GENERIC_9x1,
              id,
              playerInv,
              stashContainer,
              1,
            ),
          Component.gold("Private Player Stash"),
        ),
      );
      return 1;
    }),
  );
});
