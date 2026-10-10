// bootstrap file

StartupEvents.registry("item", (event) => {
    event
        .create("chain_of_a_thousand_miles")
        .displayName("Chain of a Thousand Miles")
        .maxStackSize(1)
        .texture("kubejs:item/coatm");

    event
        .create("isoh", "sword")
        .displayName("Inverted Spear of Heaven")
        .maxStackSize(1)
        .texture("kubejs:item/isoh")
        .attackDamageBaseline(5.0)
        .speedBaseline(-1.5);
    
    event
        .create("soulsplitkatana", "sword")
        .displayName("Soulsplit Katana")
        .maxStackSize(1)
        .texture("kubejs:item/soulsplitkatana")
        .attackDamageBaseline(5.0)
        .speedBaseline(-2);
});
