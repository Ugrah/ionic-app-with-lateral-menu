import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'empty-with-sub-category',
  templateUrl: 'empty-with-sub-category.html',
})
export class EmptyWithSubCategory {

  // Possibility to use mock
  subCategoryList: any[] = [
    {
      title: "Title of the sub Category",
      content: "Simple content",
      imgPath: "possibleImagePath",
      listItems: [
        "Possible Item",
        "Possible Item"
      ]
    }
  ];

    constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  onModal(object){
    let profileModal = this.modalCtrl.create(SubCategoryPage, {subCategory: object });
    profileModal.present();
  }
}


@Component({
  selector: 'sub-category-page',
  template: `<ion-header>
      <ion-navbar color="primary">
        <ion-buttons>
          <button clear ion-button (click)="onDismissModal()">
            close
          </button>
        </ion-buttons>
        <ion-title>
          {{ subCategory.title }}
        </ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content class="main-background-gradient">
      <ion-card>
        <img *ngIf="subCategory.imgPath" [src]="'../../assets/imgs/'+ subCategory.imgPath"/>
        <ion-card-content>
          <p>{{ subCategory.content }}</p>
          <ul *ngIf="subCategory.listItems">
            <li *ngFor="let itemList of subCategory.listItems">{{itemList}}</li>
          </ul>
        </ion-card-content>
      </ion-card>
    </ion-content>`
})
export class SubCategoryPage {

  subCategory: any = false;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.subCategory = this.navParams.get("subCategory");
  }

  onDismissModal() {
    this.viewCtrl.dismiss();
  }

}
