import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementsPageComponent} from './elements-page.component';
import {ElementsPageRoutingModule} from './elements-page-routing.module';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {ElementModule} from '../../entities/element/element.module';


@NgModule({
  declarations: [ElementsPageComponent],
  imports: [
    CommonModule,
    ElementsPageRoutingModule,
    RouterModule,
    FlexModule,
    ElementModule
  ]
})
export class ElementsPageModule {
}
