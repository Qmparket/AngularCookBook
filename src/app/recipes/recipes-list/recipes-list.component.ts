import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test recipe","This is simply a test","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chinese-beef-aubergine-hotpot.jpg"),
    new Recipe("A test recipe","This is simply a test","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chinese-beef-aubergine-hotpot.jpg"),
    new Recipe("A test recipe","This is simply a test","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chinese-beef-aubergine-hotpot.jpg"),

  ];

  constructor() { }

  ngOnInit() {
  }

}