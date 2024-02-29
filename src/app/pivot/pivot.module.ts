import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PivotRoutingModule } from './pivot-routing.module';
import { PivotTableComponent } from './pivot-table/pivot-table.component';
import { EditReportDialogComponent } from './edit-report-dialog/edit-report-dialog.component';
import { CreateReportDialogComponent } from './create-report-dialog/create-report-dialog.component';
import { PivotComponent } from './pivot/pivot.component';


import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [PivotTableComponent, EditReportDialogComponent, CreateReportDialogComponent, PivotComponent],
  imports: [
    CommonModule,
    PivotRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  entryComponents: [CreateReportDialogComponent, EditReportDialogComponent]
})
export class PivotModule { }
