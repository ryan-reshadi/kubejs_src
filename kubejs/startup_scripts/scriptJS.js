// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info("Hello, World! (Loaded startup scripts)");

StartupEvents.registry("item", (event) => {
  event
    .create("aotv")
    .displayName("Aspect Of The Void")
    .texture("kubejs:item/aotv")
    .maxStackSize(1)
    .glow(true);
});
