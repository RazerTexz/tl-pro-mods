const Main = new NativeClass("Terraria", "Main");

Main.DrawSplash.hook((original, self, gameTime) => {
    self.quickSplash = true;
    original(self, gameTime);
    Main.fadeCounter = 0;
});