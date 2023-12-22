import { Recipe } from "./recipe.model";
// provide service in the recipes component as a start
export class RecipeService{
    // add seed data from recipe-list
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];
    getRecipes(){
        // returns new copy of array
        return this.recipes.slice();
    }
}
