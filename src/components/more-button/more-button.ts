import {Component} from '@angular/core';
import { PopoverController} from "ionic-angular";
import {MoreListComponent} from "../more-list/more-list";

@Component({
  selector: 'more-button',
  templateUrl: 'more-button.html'
})
export class MoreButtonComponent {

  constructor(private popoverCtrl: PopoverController) {}

  onPresentPopover($event) {
    let popover = this.popoverCtrl.create(MoreListComponent);
    popover.present({
      ev: $event
    });
  }

}
