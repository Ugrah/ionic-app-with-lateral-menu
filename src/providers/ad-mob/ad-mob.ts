import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from "@ionic-native/admob-free";
import {Platform} from "ionic-angular";
import {Subscription} from "rxjs";
import {Network} from "@ionic-native/network";
import {
  BannerIdAndroid,
  BannerIdIos, Delays,
  InterstitialIdAndroid, InterstitialIdIos,
  IsConnected,
  IsTesting
} from "../../config/adMobFree.config";

@Injectable()
export class AdMobProvider implements OnInit, OnDestroy {
  bannerIdAndroid: string = BannerIdAndroid;
  interstitialIdAndroid: string = InterstitialIdAndroid;

  bannerIdIos: string = BannerIdIos;
  interstitialIdIos: string = InterstitialIdIos;

  oldDateInterstitialAd: Date;
  delays: number = Delays;
  isTesting: boolean = IsTesting;
  isConnected:boolean = IsConnected;

  connectSubscription: Subscription;
  disconnectSubscription: Subscription;

  constructor(private adMobFree: AdMobFree,
              private platform: Platform,
              private network: Network) {
    this.oldDateInterstitialAd = new Date();
  }

  ngOnInit(){
    // watch network for a disconnect
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.isConnected = false;
    });

    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.isConnected = true;
    });
  }

  setIsConnect(){
    if(this.network.type !== 'none'){
      this.isConnected = true;
    }
  }

  getBannerId(){
    let id;
    if(this.platform.is('android')){
      id = this.bannerIdAndroid;
    } else if (this.platform.is('ios')) {
      id = this.bannerIdIos;
    }
    return id;
  }

  getInterstitialId(){
    let id;
    if(this.platform.is('android')){
      id = this.interstitialIdAndroid;
    } else if (this.platform.is('ios')) {
      id = this.interstitialIdIos;
    }
    return id;
  }

  showBannerAd() {
    this.setIsConnect();
    if(this.getBannerId() !== '' && this.isConnected) {
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
    if(this.adMobFree.banner) {
      this.adMobFree.banner.remove();
    }
  }

  hideBannerAd() {
    if(this.adMobFree.banner) {
      this.adMobFree.banner.hide();
    }
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

        //Hide adBanner before show adInterstial
        this.hideBannerAd();

        this.adMobFree.interstitial.prepare();
        this.oldDateInterstitialAd = new Date();

        // Wait a few second and launch this.showBannerAd()
        setTimeout(() => {
          this.showBannerAd();
        },10000);
      }
    }
  }

  ngOnDestroy(){
    this.connectSubscription.unsubscribe();
    this.disconnectSubscription.unsubscribe();
  }
}
