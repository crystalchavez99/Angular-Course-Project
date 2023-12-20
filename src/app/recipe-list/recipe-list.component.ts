import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
recipes: Recipe[] =[
  new Recipe("Quesadillas", 'The best mexican food', "https://recipetineats.com/wp-content/uploads/2018/06/Quesadillas_4.jpg"),
  new Recipe("Bulgogi", "Sweet Korean Meat", "https://assets.bonappetit.com/photos/57acd741f1c801a1038bc801/1:1/w_2560%2Cc_limit/basic-bulgogi.jpg")
];
constructor(){}
ngOnInit(){}
}
