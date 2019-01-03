import {Component} from '@angular/core';
import {AppVersion} from "@ionic-native/app-version";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  appName:any;
  packageName:any;
  versionNumber:any;
  versionCode:any;


  constructor(private app: AppVersion) {
  }

  ionViewDidEnter() {
    this.getAppName();
    this.getVersionNumber();
    this.getVersionCode();
  }

  async getAppName(){
    this.appName = await this.app.getAppName();
  }

  async getPackageName() {
    this.packageName = await this.app.getPackageName();
  }

  async getVersionNumber() {
    this.versionNumber = await this.app.getVersionNumber();
  }

  async getVersionCode() {
    this.versionCode = await this.app.getVersionCode();
  }

}
