import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PivotComponent } from './pivot/pivot.component';

const pivot: Routes = [
  { path: 'pivot/table', component: PivotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(pivot)],
  exports: [RouterModule]
})
export class PivotRoutingModule { }
