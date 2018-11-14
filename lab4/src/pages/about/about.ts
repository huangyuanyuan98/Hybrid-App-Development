import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  arr=["客厅","卧室","餐厅","书房","门厅"];
  isActive = 0;
  isClick(i){
    this.isActive = i;
  }
  constructor(public navCtrl: NavController) {

  }
  // goSearch(){
  //   this.navCtrl.push(SearchPage);
  //   console.log("SearchPage");
  // }
  goSearch(){
    this.navCtrl.push(SearchPage);
    console.log("SearchPage");
  }
}
