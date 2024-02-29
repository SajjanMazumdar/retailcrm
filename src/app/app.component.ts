import { PlatformLocation } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { MainService } from './Service/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project-retail';
  @ViewChild('sidenav') sidenav: MatSidenav;
  baseURL: any;
  selected_menu_index = 0;
  constructor(
    platformLocation: PlatformLocation,
    private router: Router,
    public mainService: MainService
  ) {
    this.baseURL = (platformLocation as any).location.origin;
    if (JSON.parse(localStorage.getItem("subMenuList")) && JSON.parse(localStorage.getItem("subMenuList")).length > 0) {
      this.subMenuList = JSON.parse(localStorage.getItem("subMenuList"));
      this.menu_bar = true;
    }
    if (JSON.parse(localStorage.getItem("isLogin")) && JSON.parse(localStorage.getItem("isLogin")) == true) {
      this.mainService.isLogin = JSON.parse(localStorage.getItem("isLogin"));
    }
  }

  ngOnInit(): void {

    document.addEventListener('fullscreenchange', (event) => {
      if (document.fullscreenElement) this.mainService.fullScreen_Active = true; 
      else this.mainService.fullScreen_Active = false;
    });

    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        if (res.urlAfterRedirects.length > 1){          
          if(res.url.split("/")[1] && res.url.split("/")[2]){
            let module = res.url.split("/")[1];
            let url = res.url.split("/")[2];
            if(module == 'pivot') return;
            if(this.subMenuList.find(res=> res.module == module && res.url == url)){
              this.selected_menu_index = this.subMenuList.find(res=> res.module == module && res.url == url).index;
            }
          }
        }
      }
    });
    
  }

  reason = '';
  public subMenuList: Array<any> = [];
  menu_bar: boolean = false;

  NavClose(reason?: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  NavOpen() {
    if (this.subMenuList.length > 0) {
      this.sidenav.open();
    }
  }

  goToAccount(module, url) {
    this.router.navigate(['/' + module + '/' + url]);
    this.selected_menu_index = 0;
    this.selected_menu_index = this.subMenuList.find(res=> res.module == module && res.url == url).index;
    if (this.subMenuList.length > 0) {
      this.menu_bar = true;
    } else {
      this.menu_bar = false;
    }
    this.NavClose();
  }

  openSubMenu(data) {
    if (this.sidenav.opened) {
      this.NavClose();
      return;
    }
    this.subMenuList = [];
    localStorage.setItem('subMenuList', JSON.stringify(this.subMenuList));
    if (data == 'dashboard') {
      this.selected_menu_index = -1;
      this.router.navigate(['/dashboard']);
    } else if (data == 'account') {
      this.subMenuList = [
        { id: 1, name: 'Distributor', module: 'account', url: 'distributor', index: 1 },
        { id: 1, name: 'Dealer', module: 'account', url: 'dealer', index: 2 },
        { id: 1, name: 'Sub-Dealer', module: 'account', url: 'sub-dealer', index: 3 },
        { id: 1, name: 'Engineer', module: 'account', url: 'engineer', index: 4 },
        { id: 1, name: 'Mason', module: 'account', url: 'mason', index: 5 },
        { id: 1, name: 'IHB Owner', module: 'account', url: 'ihbowner', index: 6 },
        { id: 1, name: 'Branches', module: 'account', url: 'branches', index: 7 },
        { id: 1, name: 'General', module: 'account', url: 'general', index: 8 }
      ]
      localStorage.setItem('subMenuList', JSON.stringify(this.subMenuList));
    } else if (data == 'report') {
      this.subMenuList = [
        { id: 1, name: 'Distributor', module: 'report', url: 'distributor', index: 9 },
        { id: 1, name: 'Dealer', module: 'report', url: 'dealer', index: 10 },
        { id: 1, name: 'Sub-Dealer', module: 'report', url: 'sub-dealer', index: 11 },
        { id: 1, name: 'Engineer', module: 'report', url: 'engineer', index: 12 },
        { id: 1, name: 'Mason', module: 'report', url: 'mason', index: 13 },
        { id: 1, name: 'IHB Owner', module: 'report', url: 'ihbowner', index: 14 },
        { id: 1, name: 'Branches', module: 'report', url: 'branches', index: 15 },
        { id: 1, name: 'General', module: 'report', url: 'general', index: 16 }
      ]
      localStorage.setItem('subMenuList', JSON.stringify(this.subMenuList));
    } else if (data == 'order') {
      this.subMenuList = [
        { id: 1, name: 'Dealer Order Status Report', module: 'order', url: 'dealer', index: 17 },
        { id: 1, name: 'Dealer Order Approval Logistics', module: 'order', url: 'approval', index: 18 },
        { id: 1, name: 'Dealer Order Approval Commercial', module: 'order', url: 'commercial', index: 19 },
        { id: 1, name: 'Dealer Order Approval State head', module: 'order', url: 'statehead', index: 20 }
      ]
      localStorage.setItem('subMenuList', JSON.stringify(this.subMenuList));
    } else if (data == 'pivot') {
      this.selected_menu_index = -1;
      this.router.navigate(['/pivot/table']);
    }

    if (this.subMenuList.length > 0) {
      this.sidenav.open();
    } else {
      this.menu_bar = false;
    }

  }
}
