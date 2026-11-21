const Main = new NativeClass("Terraria", "Main");
const Projectile = new NativeClass("Terraria", "Projectile");

Projectile.AI_061_FishingBobber_GiveItemToPlayer.hook((orig, self, plr, type) => {
    for (let i = 0; i < (plr.whoAmI === Main.myPlayer ? 10 : 1); i++) {
        orig(self, plr, type);
    }
});