import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ElementsPageComponent} from './elements-page.component';


const routes: Routes = [
  {
    path: '',
    component: ElementsPageComponent
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
export class ElementsPageRoutingModule {
}
