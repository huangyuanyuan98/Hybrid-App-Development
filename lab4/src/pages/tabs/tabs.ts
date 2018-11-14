import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { InspirationPage } from '../inspiration/inspiration';
import { AddPage } from '../add/add';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab5Root = InspirationPage;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    document.querySelector('#tab-t0-2').addEventListener('click', () => {//添加事件监听
      let profileModal = this.modalCtrl.create(AddPage);
      profileModal.present();
    },false);
  }
}
