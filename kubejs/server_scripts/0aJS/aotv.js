const ClipContext = Java.loadClass("net.minecraft.world.level.ClipContext");
const HitResultType = Java.loadClass("net.minecraft.world.phys.HitResult$Type");

const INSTANT_RANGE = 12;
const ETHER_RANGE = 57;
const STEP = 0.25;

// A space is passable if its chunk is loaded and the block has no collision shape
function isPassable(level, x, y, z) {
  const pos = new BlockPos(Math.floor(x), Math.floor(y), Math.floor(z));
  if (!level.hasChunkAt(pos)) return false;
  return level.getBlockState(pos).getCollisionShape(level, pos).isEmpty();
}

// Player is 1.8 tall, so check feet, torso, and head
function fitsAt(level, x, y, z) {
  return (
    isPassable(level, x, y, z) &&
    isPassable(level, x, y + 1, z) &&
    isPassable(level, x, y + 1.79, z)
  );
}

function doTeleport(player, level, x, y, z) {
  player.teleportTo(
    level.dimension,
    x,
    y,
    z,
    player.getYaw(),
    player.getPitch(),
  );
  level.playSound(
    null,
    player.blockPosition(),
    "minecraft:entity.enderman.teleport",
    "players",
    1.0,
    1.0,
  );
  player.swing();
}

function instantTransmission(player, level) {
  const look = player.getLookAngle();
  const sx = player.getX();
  const sy = player.getY();
  const sz = player.getZ();

  let best = 0;
  for (let d = STEP; d <= INSTANT_RANGE; d += STEP) {
    if (!fitsAt(level, sx + look.x() * d, sy + look.y() * d, sz + look.z() * d))
      break;
    best = d;
  }

  if (best <= 0) return;

  doTeleport(
    player,
    level,
    sx + look.x() * best,
    sy + look.y() * best,
    sz + look.z() * best,
  );
}

function etherTransmission(player, level) {
  const eye = player.getEyePosition();
  const end = eye.add(player.getLookAngle().scale(ETHER_RANGE));

  const hit = level.clip(
    new ClipContext(
      eye,
      end,
      ClipContext.Block.COLLIDER,
      ClipContext.Fluid.NONE,
      player,
    ),
  );

  if (hit.getType() !== HitResultType.BLOCK) {
    player.setStatusMessage("§cNo block in range!");
    return;
  }

  const base = hit.getBlockPos();
  const x = base.getX() + 0.5;
  const y = base.getY() + 1;
  const z = base.getZ() + 0.5;

  // Need 2 air blocks above the target
  if (!isPassable(level, x, y, z) || !isPassable(level, x, y + 1, z)) {
    player.setStatusMessage("§cThere are blocks in the way!");
    return;
  }

  doTeleport(player, level, x, y, z);
}

ItemEvents.rightClicked((event) => {
  if (event.item.id !== "kubejs:aotv") return;

  const { player, level } = event;

  if (player.isCrouching()) {
    etherTransmission(player, level);
  } else {
    instantTransmission(player, level);
  }
});
