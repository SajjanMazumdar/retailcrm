import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  @Output() openSubMenu = new EventEmitter<any>();

  constructor(
    private router: Router
  ) { }

  menu_dashboard: boolean = false;
  menu_account: boolean = false;
  menu_report: boolean = false;
  menu_order: boolean = false;

  logo = "assets/images/logo.png";

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        if (res.urlAfterRedirects.length > 1 && res.url !== "/unauthorized") {
          if (res.url.split("/")[1] == 'dashboard') {
            this.menu_dashboard = true;
            this.menu_account = false;
            this.menu_report = false;
            this.menu_order = false;
          } else if (res.url.split("/")[1] == 'account') {
            this.menu_dashboard = false;
            this.menu_account = true;
            this.menu_report = false;
            this.menu_order = false;
          } else if (res.url.split("/")[1] == 'pivot') { // report pivot
            this.menu_dashboard = false;
            this.menu_account = false;
            this.menu_report = true;
            this.menu_order = false;
          } else if (res.url.split("/")[1] == 'order') {
            this.menu_dashboard = false;
            this.menu_account = false;
            this.menu_report = false;
            this.menu_order = true;
          } else {
            this.menu_dashboard = true;
            this.menu_account = false;
            this.menu_report = false;
            this.menu_order = false;
          }
        }
      }
    });
  }

  openDashboard() {
    this.openSubMenu.emit('dashboard');
  }

  openAccountSubMenu() {
    this.openSubMenu.emit('account');
  }

  openReportSubMenu() {
    // this.openSubMenu.emit('report');
    this.openSubMenu.emit('pivot');
  }

  openOrdertSubMenu() {
    this.openSubMenu.emit('order');
  }


}
