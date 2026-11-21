const Main = new NativeClass("Terraria", "Main");
const Player = new NativeClass("Terraria", "Player");

Player.GetRespawnTime.hook((orig, self, pvp) => {
    if (self.whoAmI == Main.myPlayer) {
        return 1;
    }

    return orig(self, pvp);
});