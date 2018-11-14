import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  titleTitle;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titleTitle = this.navParams.get("title");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
