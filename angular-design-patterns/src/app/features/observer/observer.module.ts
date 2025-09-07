import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ObserverComponent } from './observer.component';

const routes: Routes = [
  {
    path: '',
    component: ObserverComponent
  }
];

@NgModule({
  declarations: [
    ObserverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ObserverComponent
  ]
})
export class ObserverModule { }
