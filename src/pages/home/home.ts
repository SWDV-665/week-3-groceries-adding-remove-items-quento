import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 4
    },
    {
      name: "Eggs",
      quantity: 3
    },
    {
      name: "Grapes",
      quantity: 5
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
