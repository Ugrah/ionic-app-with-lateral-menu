import { Component } from '@angular/core';
import {HomeListLinks} from "../../models/pagesList.mapping";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeListLink: any[] = HomeListLinks;

  constructor() {
  }

}
