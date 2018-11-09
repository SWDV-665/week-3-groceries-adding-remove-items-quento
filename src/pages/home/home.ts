import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

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

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  removeItem(item){
    console.log("Removing item .." + item.name);


    // Show item removal message (toast)
    const toast = this.toastCtrl.create({
      message: 'Removing item ' + item.name,
      duration: 3000
    });
    toast.present();
    
  }

}
