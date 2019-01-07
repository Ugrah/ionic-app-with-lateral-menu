import { Component } from '@angular/core';
import {HomeListLinks} from "../../variables-infos/pagesList";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeListLink: any[] = HomeListLinks;

  constructor() {
  }

}
