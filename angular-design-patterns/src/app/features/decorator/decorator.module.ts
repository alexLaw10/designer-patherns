import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DecoratorComponent } from './decorator.component';

const routes: Routes = [
  {
    path: '',
    component: DecoratorComponent
  }
];

@NgModule({
  declarations: [
    DecoratorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DecoratorComponent
  ]
})
export class DecoratorModule { }
