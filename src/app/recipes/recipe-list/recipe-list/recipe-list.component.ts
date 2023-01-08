import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Recipe = [
  //   new Recipe('Test Recipe', 'A cool test.', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/gettyimages-sharing-food.jpg?itok=o_y4Rbqy')
  // ];

  recipes: Recipe[] = [
    new Recipe('New Recipe', 'Cool new description', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/gettyimages-sharing-food.jpg?itok=o_y4Rbqy')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
