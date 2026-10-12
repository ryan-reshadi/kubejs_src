ItemEvents.rightClicked((event) => {
  const id = event.item.id;

  if (id === "minecraft:diamond") {
    event.player.potionEffects.add(
      "minecraft:night_vision",
      20 * 60 * 60,
      255,
      false,
      false,
    );
    event.player.eat(event.level, event.item);
  }
});
