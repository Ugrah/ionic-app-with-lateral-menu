import {Injectable} from '@angular/core';
import {AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from "@ionic-native/admob-free";
import {Platform} from "ionic-angular";
import {
  BannerIdAndroid,
  BannerIdIos, Delays,
  InterstitialIdAndroid, InterstitialIdIos,
  IsTesting
} from "../../config/adMobFree.config";

@Injectable()
export class AdMobProvider {
  bannerIdAndroid: string = BannerIdAndroid;
  interstitialIdAndroid: string = InterstitialIdAndroid;

  bannerIdIos: string = BannerIdIos;
  interstitialIdIos: string = InterstitialIdIos;

  oldDateInterstitialAd: Date;
  delays: number = Delays;
  isTesting: boolean = IsTesting;

  constructor(private adMobFree: AdMobFree,
              private platform: Platform) {
    this.oldDateInterstitialAd = new Date();
  }

  getBannerId(){
    let id;
    if(this.platform.is('android'))
      id = this.bannerIdAndroid;
    else if (this.platform.is('ios'))
      id = this.bannerIdIos;

    return id;
  }

  getInterstitialId(){
    let id;
    if(this.platform.is('android'))
      id = this.interstitialIdAndroid;
    else if (this.platform.is('ios'))
      id = this.interstitialIdIos;

    return id;
  }

  showBannerAd() {
    if(this.getBannerId() !== '') {
      let bannerConfig: AdMobFreeBannerConfig = {
        id: this.getBannerId(),
        isTesting: this.isTesting,
        autoShow: true
      };
      this.adMobFree.banner.config(bannerConfig);
      if(this.adMobFree.banner)
        this.adMobFree.banner.prepare();
    }
  }

  removeBannerAd() {
    if(this.adMobFree.banner)
      this.adMobFree.banner.remove();
  }

  hideBannerAd() {
    if(this.adMobFree.banner)
      this.adMobFree.banner.hide();
  }

  showAgainBannerAd() {
    if(this.adMobFree.banner)
      this.adMobFree.banner.show();
    else
      this.showBannerAd();
  }

  showInterstitialAd() {
    if(this.getInterstitialId() !== '') {
      let newDate: Date = new Date();
      let interstitialConfig: AdMobFreeInterstitialConfig = {
        id: this.getInterstitialId(),
        isTesting: this.isTesting,
        autoShow: true
      };
      this.adMobFree.interstitial.config(interstitialConfig);

      if( (newDate.getTime() - this.oldDateInterstitialAd.getTime()) > this.delays ) {

        // Subscribe to AdMob interstitial events to remove BannerAd
        this.adMobFree.on('INTERSTITIAL_OPEN').subscribe(() => {
          this.removeBannerAd();
        });

        this.adMobFree.interstitial.prepare();
        this.oldDateInterstitialAd = new Date();

        // Wait a few second and relaunch this.showBannerAd()
        setTimeout(() => {
          this.showBannerAd();
        },10000);
      }
    }
  }
}
