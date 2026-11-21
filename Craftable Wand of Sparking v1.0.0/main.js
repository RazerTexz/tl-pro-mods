const Recipe = new NativeClass("Terraria", "Recipe");

Recipe.SetupRecipes.hook((orig) => {
    orig();

    let r = Recipe.currentRecipe;
    r.createItem.SetDefaults(3069, null);
    r.createItem.stack = 1;
    r.requiredItem[0].SetDefaults(9, null);
    r.requiredItem[0].stack = 10;
    r.requiredItem[1].SetDefaults(8, null);
    r.requiredItem[1].stack = 3;
    r.requiredItem[2].SetDefaults(75, null);
    r.requiredItem[2].stack = 1;
    r.requiredTile = 18;

    Recipe.AddRecipe();
});