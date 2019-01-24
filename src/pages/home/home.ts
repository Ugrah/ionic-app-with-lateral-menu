import { Component } from '@angular/core';
import {HomeListPages, HomePage} from "../../models/pagesList.mapping";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeListLink: PageModel[] = HomeListPages;

  constructor() {
  }

}
