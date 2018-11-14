import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { RegisterPageModule } from '../register/register.module';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goSub(){
    this.navCtrl.push(SettingPage, {
      title : '设置'
    });
    console.log("SettingPage");
  }
  goRegister(){
    this.navCtrl.push(RegisterPage, {
      title : '登录'
    });
    console.log("RegisterPage");
  }
}
