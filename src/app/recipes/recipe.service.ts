import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService){}
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("A test recipe 1",
                    "This is simply a test",
                    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chinese-beef-aubergine-hotpot.jpg",
                    [
                        new Ingredient('Meat',1),
                        new Ingredient('Fries',20)
                    ]),
        new Recipe("A test recipe 2",
                    "This is simply a test",
                    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chinese-beef-aubergine-hotpot.jpg",
                    [
                        new Ingredient('Bun',2),
                        new Ingredient('Meat',1)
                    ]),
        new Recipe("A test recipe 3",
                    "This is simply a test",
                    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chinese-beef-aubergine-hotpot.jpg",
                    [  
                        new Ingredient('Strawberry',20)
                    ]),
     
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.shoppingListService.addIngredients(ingredients);
      }
}