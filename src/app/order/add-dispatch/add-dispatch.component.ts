import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dispatch',
  templateUrl: './add-dispatch.component.html',
  styleUrls: ['./add-dispatch.component.css']
})
export class AddDispatchComponent implements OnInit {

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }


  constructor() { }

  ngOnInit(): void {
  }





}
