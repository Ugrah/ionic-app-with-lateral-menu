import { NgModule } from '@angular/core';
import { MoreButtonComponent } from './more-button/more-button';
import { MoreListComponent } from './more-list/more-list';
import {MenuButtonComponent} from "./menu-button/menu-button";
@NgModule({
	declarations: [
	  MoreButtonComponent,
    MoreListComponent,
    MenuButtonComponent],
	imports: [],
	exports: [
	  MoreButtonComponent,
    MoreListComponent,
    MenuButtonComponent]
})
export class ComponentsModule {}
