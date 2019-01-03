import { Component } from '@angular/core';
import {AboutPage} from "../../pages/about/about";
import {NavController, ViewController} from "ionic-angular";

@Component({
  selector: 'more-list',
  templateUrl: 'more-list.html'
})
export class MoreListComponent {

  aboutPage = AboutPage;

  constructor(private viewCtrl: ViewController,
              private navCtrl: NavController) {
  }

  onAboutButton() {
    this.navCtrl.push(this.aboutPage);
    this.viewCtrl.dismiss();
  }

}
