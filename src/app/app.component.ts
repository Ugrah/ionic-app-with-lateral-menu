import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {AboutPage} from "../pages/about/about";
import {AdMobProvider} from "../providers/ad-mob/ad-mob";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  aboutPage:any = AboutPage;

  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private adMobProvider: AdMobProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.content.viewWillEnter.subscribe((view) => {
        this.adMobProvider.showBannerAd();
      });
      this.content.viewWillLeave.subscribe(() => {
        this.adMobProvider.showInterstitialAd();
      });
    });
  }

  onNavigate(page: any, params?: any) {
    this.content.setRoot(page, params);
    this.menuCtrl.close();
  }

  onPush(page: any) {
    this.content.push(page);
    this.menuCtrl.close();
  }
}

