import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AboutPage} from "../pages/about/about";
import {EmptyWithSubCategory, SubCategoryPage} from "../pages/empty-with-sub-category/empty-with-sub-category";

// Components
import {MoreButtonComponent} from "../components/more-button/more-button";
import {MoreListComponent} from "../components/more-list/more-list";
import {MenuButtonComponent} from "../components/menu-button/menu-button";

// Provider
import {AdMobProvider} from "../providers/ad-mob/ad-mob";

// Plugins
import {AdMobFree} from "@ionic-native/admob-free";
import {AppVersion} from "@ionic-native/app-version";
import {Network} from "@ionic-native/network";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,

    // Optional Page
    EmptyWithSubCategory,
    SubCategoryPage,
    // ---------------

    // Optional Component
    MoreButtonComponent,
    MoreListComponent,
    MenuButtonComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,

    // Optional Page
    EmptyWithSubCategory,
    SubCategoryPage,
    // ---------------

    // Optional Component
    MoreButtonComponent,
    MoreListComponent,
    MenuButtonComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppVersion,
    AdMobFree,
    Network,
    AdMobProvider
  ]
})
export class AppModule {}
