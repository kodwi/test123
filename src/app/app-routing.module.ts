import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/sections-page/sections-page.module').then(m => m.SectionsPageModule)
      },
      {
        path: 'section/:id',
        loadChildren: () => import('./pages/elements-page/elements-page.module').then(m => m.ElementsPageModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
