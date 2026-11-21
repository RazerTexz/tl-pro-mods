const Recipe = new NativeClass("Terraria", "Recipe");

Recipe.SetupRecipes.hook((orig) => {
    orig();

    let r = Recipe.currentRecipe;
    r.createItem.SetDefaults(1326, null);
    r.createItem.stack = 1;
    r.requiredItem[0].SetDefaults(1225, null);
    r.requiredItem[0].stack = 15;
    r.requiredItem[1].SetDefaults(520, null);
    r.requiredItem[1].stack = 30;
    r.requiredItem[2].SetDefaults(502, null);
    r.requiredItem[2].stack = 50;
    r.requiredTile = 134;

    Recipe.AddRecipe();
});