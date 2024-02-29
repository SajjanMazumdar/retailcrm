import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { DealerOrderComponent } from './dealer-order/dealer-order.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { OrderApprovalComponent } from './order-approval/order-approval.component';
import {MatIconModule} from '@angular/material/icon';
import { OrderCommercialComponent } from './order-commercial/order-commercial.component';
import { OrderStateHeadComponent } from './order-state-head/order-state-head.component';

import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { AddDispatchComponent } from './add-dispatch/add-dispatch.component';
import { OrderRequestDetailsComponent } from './order-request-details/order-request-details.component';
import { DealerOpenInvoiceComponent } from './dealer-open-invoice/dealer-open-invoice.component';




@NgModule({
  declarations: [DealerOrderComponent, OrderApprovalComponent, OrderCommercialComponent, OrderStateHeadComponent, InvoiceDetailsComponent, AddDispatchComponent, OrderRequestDetailsComponent, DealerOpenInvoiceComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatSortModule,
    MatDialogModule,
    MatMenuModule
    
  
  ]
})
export class OrderModule { }



