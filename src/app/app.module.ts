import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouteReuseStrategy } from "@angular/router";
import { CustomRouteReuseStrategy } from "./router-strategy";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AccountModule } from './account/account.module';
import { AccountRoutingModule } from './account/account-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ClickOutSideDirective } from './Directive/click-out-side.directive';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReportModule } from './report/report.module';
import { OrderModule } from './order/order.module';
import { PivotModule } from './pivot/pivot.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClickOutSideDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    AccountModule,
    ReportModule,
    AccountRoutingModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    OrderModule,
    PivotModule,
    SharedModule
  ],
  exports: [ClickOutSideDirective],
  providers: [
    // { provide: RouteReuseStrategy, 
    //   useClass: CustomRouteReuseStrategy 
    // },
    {
      provide: LocationStrategy, 
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private route: ActivatedRoute, private router: Router) {

  }
}
