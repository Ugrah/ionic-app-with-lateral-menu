import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AboutPage} from "../pages/about/about";

// Components
import {MoreButtonComponent} from "../components/more-button/more-button";
import {MoreListComponent} from "../components/more-list/more-list";
import {MenuButtonComponent} from "../components/menu-button/menu-button";

// Plugins
import {AppVersion} from "@ionic-native/app-version";
import {AdMobProvider} from "../providers/ad-mob/ad-mob";
import {Network} from "@ionic-native/network";
import {AdMobFree} from "@ionic-native/admob-free";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
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