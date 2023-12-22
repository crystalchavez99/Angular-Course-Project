import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    // to inform new data available event emit
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getShoppingList(){
        // creates a new copy
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient) {
        // once we add new item it adds to original not new copy which not reflect with other components
        // have to inform component new data is available so we must emit
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}
