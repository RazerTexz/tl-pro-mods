const Main = new NativeClass("Terraria", "Main");
const WorldGen = new NativeClass("Terraria", "WorldGen");

Main.PostContentLoadInitialize.hook((original) => {
    original();

    Main.LoadPlayers(false);
    Main.PlayerList.get_Item(0).SetAsActive();

    Main.LoadWorlds(false);
    Main.WorldList.get_Item(0).SetAsActive();

    WorldGen.playWorld();
});