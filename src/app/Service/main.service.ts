import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public isLogin: boolean = false;
  public fullScreen_Active: boolean = false;
  constructor() { }
}