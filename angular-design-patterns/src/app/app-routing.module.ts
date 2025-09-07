import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/patterns',
    pathMatch: 'full'
  },
  {
    path: 'patterns',
    loadChildren: () => import('./core/components/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: '**',
    redirectTo: '/patterns'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
