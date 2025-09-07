import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FactoryComponent } from './factory.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryComponent
  }
];

@NgModule({
  declarations: [
    FactoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FactoryComponent
  ]
})
export class FactoryModule { }
