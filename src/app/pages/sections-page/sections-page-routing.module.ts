import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SectionsPageComponent} from './sections-page.component';


const routes: Routes = [
  {
    path: '',
    component: SectionsPageComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SectionsPageRoutingModule {
}
