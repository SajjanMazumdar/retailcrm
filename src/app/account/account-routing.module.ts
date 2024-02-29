import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IhbownerComponent } from '../report/ihbowner/ihbowner.component';
import { BranchesListComponent } from './branches-list/branches-list.component';
import { BranchesComponent } from './branches/branches.component';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { DealerComponent } from './dealer/dealer.component';
import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { DistributorComponent } from './distributor/distributor.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { EngineerComponent } from './engineer/engineer.component';
import { GeneralComponent } from './general/general.component';
import { GenerialListComponent } from './generial-list/generial-list.component';
import { IhbOwnerListComponent } from './ihb-owner-list/ihb-owner-list.component';
import { IhbOwnerComponent } from './ihb-owner/ihb-owner.component';
import { MasonListComponent } from './mason-list/mason-list.component';
import { MasonComponent } from './mason/mason.component';
import { SubDealerListComponent } from './sub-dealer-list/sub-dealer-list.component';
import { SubDealerComponent } from './sub-dealer/sub-dealer.component';

const account: Routes = [
  { path: 'account/distributor', component: DistributorListComponent },
  { path: 'account/distributor_entry', component: DistributorComponent },
  { path: 'account/dealer', component: DealerListComponent },
  { path: 'account/dealer_entry', component: DealerComponent },
  { path: 'account/sub-dealer', component: SubDealerListComponent },
  { path: 'account/sub-dealer_entry', component: SubDealerComponent },
  { path: 'account/engineer', component: EngineerListComponent },
  { path: 'account/engineer_entry', component: EngineerComponent },
  { path: 'account/mason', component: MasonListComponent },
  { path: 'account/mason_entry', component: MasonComponent },
  { path: 'account/ihbowner', component: IhbOwnerListComponent },
  { path: 'account/ihbowner_entry', component: IhbOwnerComponent },
  { path: 'account/branches', component: BranchesListComponent },
  { path: 'account/branches_entry', component: BranchesComponent },
  { path: 'account/general', component: GenerialListComponent },
  { path: 'account/general_entry', component: GeneralComponent }
];

@NgModule({
  imports: [RouterModule.forChild(account)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
