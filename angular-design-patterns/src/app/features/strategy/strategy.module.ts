import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StrategyComponent } from './strategy.component';

const routes: Routes = [
  {
    path: '',
    component: StrategyComponent
  }
];

@NgModule({
  declarations: [
    StrategyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    StrategyComponent
  ]
})
export class StrategyModule { }
