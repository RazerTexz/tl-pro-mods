const Main = new NativeClass("Terraria", "Main");
const Player = new NativeClass("Terraria", "Player");

Player.ResetEffects.hook((original, self) => {
    original(self);

    if (Main.myPlayer === self.whoAmI) {
        self.manaRegenBuff = true;
    }
});