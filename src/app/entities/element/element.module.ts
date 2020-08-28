import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementListItemComponent} from './components/element-list-item/element-list-item.component';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    ElementListItemComponent
  ],
  imports: [
    CommonModule,
    FlexModule
  ],
  exports: [
    ElementListItemComponent
  ]
})
export class ElementModule {
}
