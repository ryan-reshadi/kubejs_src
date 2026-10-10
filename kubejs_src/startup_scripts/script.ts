// bootstrap file

StartupEvents.registry("item", (event) => {
  event
    .create("chain_of_a_thousand_miles")
    .displayName("Chain of a Thousand Miles")
    .maxStackSize(1)
    .texture("kubejs:item/coatm");

  event
    .create("isoh")
    .displayName("Inverted Spear of Heaven")
    .maxStackSize(1)
    .texture("kubejs:item/isoh")
    .speedBaseline(-2.4);
});
