const CraftingRequests = new NativeClass("Terraria.GameContent", "CraftingRequests");

CraftingRequests.CraftItem.hook((original, recipe, qty, quickCraft) => {
    original(recipe, qty * 10, quickCraft);
});