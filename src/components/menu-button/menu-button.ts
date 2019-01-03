import { Component } from '@angular/core';
import {MenuController} from "ionic-angular";

@Component({
  selector: 'menu-button',
  templateUrl: 'menu-button.html'
})
export class MenuButtonComponent {

  constructor(private menuCtrl: MenuController) {}

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
