import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  navList:string ="recommendation";
  constructor(public navCtrl: NavController) {

  }

}
