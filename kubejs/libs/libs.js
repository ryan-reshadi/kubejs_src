export function match(input, conditions) {
  for (let i = 0; i < conditions.length; i++) {
    if (input == conditions[i]) {
      return [true, i];
    }
  }
  return [false, -1];
}

export function safe_loop(count, runnable) {
  for (let i = 0; i < count; i++) {
    runnable(i);
  }
}

const color_mappings = {
  "&0": Component.black,
  "&1": Component.darkBlue,
  "&2": Component.darkGreen,
  "&3": Component.darkAqua,
  "&4": Component.darkRed,
  "&5": Component.darkPurple,
  "&6": Component.gold,
  "&7": Component.gray,
  "&8": Component.darkGray,
  "&9": Component.blue,
  "&a": Component.green,
  "&b": Component.aqua,
  "&c": Component.red,
  "&d": Component.lightPurple,
  "&e": Component.yellow,
  "&f": Component.white,
  "&k": (c) => c.obfuscated(),
  "&l": (c) => c.bold(),
  "&m": (c) => c.strikethrough(),
  "&n": (c) => c.underlined(),
  "&o": (c) => c.italic(),
  "&r": Component.literal,
};

export function textFormat(str) {
  const final = Component.literal("");
  let opperation = color_mappings["&r"];
  let fo = (c) => c;
  let built = "";
  let checkMode = false;
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char == "&") {
      checkMode = true;
      continue;
    } else if (checkMode) {
      if (match(char, ["k", "l", "m", "n", "o"])[0]) {
        fo = color_mappings[`&${char}`];
      } else {
        final.append(fo(opperation(built)));
        built = "";
        fo = (c) => c;
        opperation = color_mappings[`&${char}`];
      }
    } else {
      built += char;
    }
    checkMode = false;
  }
  final.append(fo(opperation(built)));
  return final;
}

export function log(str, player) {
  player.sendSystemMessage(textFormat(str));
}
