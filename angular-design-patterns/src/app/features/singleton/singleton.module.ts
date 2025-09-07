import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SingletonComponent } from './singleton.component';

const routes: Routes = [
  {
    path: '',
    component: SingletonComponent
  }
];

@NgModule({
  declarations: [
    SingletonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SingletonComponent
  ]
})
export class SingletonModule { }
