import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionsPageComponent} from './sections-page.component';
import {SectionsPageRoutingModule} from './sections-page-routing.module';
import {SectionModule} from '../../entities/section/section.module';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [SectionsPageComponent],
  imports: [
    CommonModule,
    SectionsPageRoutingModule,
    SectionModule,
    FlexModule
  ]
})
export class SectionsPageModule {
}
