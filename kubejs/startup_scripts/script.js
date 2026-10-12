"use strict";
// bootstrap file
StartupEvents.registry("item", function (event) {
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
  event
    .create("excalibur", "sword")
    .displayName("Excalibur")
    .maxStackSize(1)
    .texture("kubejs:item/excalibur")
    .attackDamageBaseline(20)
    .speedBaseline(-3);
});
StartupEvents.registry("mob_effect", function (event) {
  event
    .create("cursebroken")
    .color(0x808080)
    .effectTick(function (entity, level) {
      if (entity.age % 20 !== 0) return;
      var iterator = entity.getActiveEffects().iterator();
      while (iterator.hasNext()) {
        var effect = iterator.next();
        var effectId = effect.getEffect().getRegisteredName();
        console.log("[Cursebroken] found effect: ".concat(effectId));
        if (effectId !== "kubejs:cursebroken") {
          entity.removeEffect(effect.getEffect());
          console.log("[Cursebroken] removed: ".concat(effectId));
        }
      }
    });
});
