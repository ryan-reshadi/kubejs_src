"use strict";
// bootstrap file
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
StartupEvents.registry('mob_effect', function (event) {
    event.create('cursebroken')
        .color(0x808080)
        .effectTick(function (entity, level) {
        if (entity.age % 20 !== 0)
            return;
        var effects = __spreadArray([], entity.getActiveEffects(), true);
        for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
            var effect = effects_1[_i];
            var effectId = effect.getEffect().getRegisteredName();
            if (effectId !== 'kubejs:cursebroken') {
                entity.removeEffect(effect.getEffect());
            }
        }
    });
});
