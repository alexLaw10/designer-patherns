import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'observer',
        loadChildren: () => import('../../features/observer/observer.module').then(m => m.ObserverModule)
      },
                  {
                    path: 'factory',
                    loadChildren: () => import('../../features/factory/factory.module').then(m => m.FactoryModule)
                  },
                  {
                    path: 'singleton',
                    loadChildren: () => import('../../features/singleton/singleton.module').then(m => m.SingletonModule)
                  }
    ]
  }
];

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
