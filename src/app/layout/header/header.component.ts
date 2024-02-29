import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user_section: boolean = false;
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.user_section = false;
    }
  }

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    public mainService: MainService
    ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.mainService.isLogin = false;
    this.router.navigate(['/login']);
    localStorage.setItem('isLogin', JSON.stringify(this.mainService.isLogin));
  }
  
}
