import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionListItemComponent} from './components/section-list-item/section-list-item.component';


@NgModule({
  declarations: [
    SectionListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionListItemComponent
  ]
})
export class SectionModule {
}
