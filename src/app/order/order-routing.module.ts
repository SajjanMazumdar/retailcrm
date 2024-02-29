import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDispatchComponent } from './add-dispatch/add-dispatch.component';
import { DealerOpenInvoiceComponent } from './dealer-open-invoice/dealer-open-invoice.component';
import { DealerOrderComponent } from './dealer-order/dealer-order.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { OrderApprovalComponent } from './order-approval/order-approval.component';
import { OrderCommercialComponent } from './order-commercial/order-commercial.component';
import { OrderRequestDetailsComponent } from './order-request-details/order-request-details.component';
import { OrderStateHeadComponent } from './order-state-head/order-state-head.component';


const routes: Routes = [
  { path: 'order/dealer', component: DealerOrderComponent},
  { path: 'order/approval', component:OrderApprovalComponent},
  { path: 'order/commercial', component:OrderCommercialComponent},
  { path: 'order/statehead', component:OrderStateHeadComponent},
  { path: 'order/invoicedetails', component:InvoiceDetailsComponent},
  { path: 'order/addespatch', component:AddDispatchComponent},
  { path: 'order/orderrequest', component:OrderRequestDetailsComponent},
  { path: 'order/dealeropeninvoice', component:DealerOpenInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {


 }


