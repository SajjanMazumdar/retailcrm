import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { MainService } from '../Service/main.service';





export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;

  matcher = new MyErrorStateMatcher();

  loginImage = "assets/images/Shyam_Steel.jpg";

  constructor(
    private router: Router,
    public mainService: MainService
    ) { }

  ngOnInit(): void {
    var Islogin: boolean;
    Islogin = localStorage.getItem('isLogin')  == "true";
    if(Islogin) this.router.navigate(['/dashboard']);
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
    this.mainService.isLogin = true;
    localStorage.setItem('isLogin', JSON.stringify(this.mainService.isLogin));
  }

}
