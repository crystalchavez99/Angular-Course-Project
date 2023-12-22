import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
// provide service in the recipes component as a start
@Injectable()
export class RecipeService{
    // add seed data from recipe-list
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[new Ingredient('Cheese', 1), new Ingredient('Onions', 1)]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[new Ingredient('Bread', 2)])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }
    recipeSelected = new EventEmitter<Recipe>();
    getRecipes(){
        // returns new copy of array
        return this.recipes.slice();
    }

    addIngredientsToSL(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients)
    }
}
