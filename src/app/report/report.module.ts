import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReportRoutingModule } from './report-routing.module';
import { DistributorComponent } from './distributor/distributor.component';
import { DealerComponent, DialogFromMenuExampleDialog } from './dealer/dealer.component';
import { SubDealerComponent } from './sub-dealer/sub-dealer.component';
import { EngineerComponent } from './engineer/engineer.component';
import { MasonComponent } from './mason/mason.component';
import { IhbownerComponent } from './ihbowner/ihbowner.component';
import { BranchesComponent } from './branches/branches.component';
import { GeneralComponent } from './general/general.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
// import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    DistributorComponent, 
    DealerComponent, 
    SubDealerComponent, 
    EngineerComponent, 
    MasonComponent, 
    IhbownerComponent, 
    BranchesComponent, 
    GeneralComponent,
    DialogFromMenuExampleDialog
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule
  ]
})
export class ReportModule { }
