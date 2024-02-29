import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { DistributorComponent } from './distributor/distributor.component';
import { DealerComponent } from './dealer/dealer.component';
import { SubDealerComponent } from './sub-dealer/sub-dealer.component';
import { EngineerComponent } from './engineer/engineer.component';
import { MasonComponent } from './mason/mason.component';
import { IhbOwnerComponent } from './ihb-owner/ihb-owner.component';
import { BranchesComponent } from './branches/branches.component';
import { GeneralComponent } from './general/general.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { BranchesListComponent } from './branches-list/branches-list.component';
import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { GenerialListComponent } from './generial-list/generial-list.component';
import { IhbOwnerListComponent } from './ihb-owner-list/ihb-owner-list.component';
import { MasonListComponent } from './mason-list/mason-list.component';
import { SubDealerListComponent } from './sub-dealer-list/sub-dealer-list.component';




import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSortModule } from '@angular/material/sort';
// import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';



import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    DistributorComponent, 
    DealerComponent, 
    SubDealerComponent, 
    EngineerComponent, 
    MasonComponent, 
    IhbOwnerComponent, 
    BranchesComponent, 
    GeneralComponent, 
    DealerListComponent, 
    BranchesListComponent, 
    DistributorListComponent, 
    EngineerListComponent, 
    GenerialListComponent, 
    IhbOwnerListComponent, 
    MasonListComponent, 
    SubDealerListComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatSortModule,
    MatDialogModule,
    MatMenuModule,
    DragDropModule,
    MatCheckboxModule,
    SharedModule
  ],
  entryComponents: [BranchesComponent, DealerComponent]
})
export class AccountModule { }
