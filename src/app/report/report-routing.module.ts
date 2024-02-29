import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { DealerComponent } from './dealer/dealer.component';
import { DistributorComponent } from './distributor/distributor.component';
import { EngineerComponent } from './engineer/engineer.component';
import { GeneralComponent } from './general/general.component';
import { IhbownerComponent } from './ihbowner/ihbowner.component';
import { MasonComponent } from './mason/mason.component';
import { SubDealerComponent } from './sub-dealer/sub-dealer.component';

const routes: Routes = [
  { path: 'report/distributor', component: DistributorComponent },
  { path: 'report/dealer', component: DealerComponent },
  { path: 'report/sub-dealer', component: SubDealerComponent },
  { path: 'report/engineer', component: EngineerComponent },
  { path: 'report/mason', component: MasonComponent },
  { path: 'report/ihbowner', component: IhbownerComponent },
  { path: 'report/branches', component: BranchesComponent },
  { path: 'report/general', component: GeneralComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
