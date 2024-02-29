import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { IhbownerComponent } from 'src/app/report/ihbowner/ihbowner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ihb-owner',
  templateUrl: './ihb-owner.component.html',
  styleUrls: ['./ihb-owner.component.css']
})
export class IhbOwnerComponent implements OnInit {

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  distributor = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  pan = new FormControl('', [Validators.required]);
  gst = new FormControl('', [Validators.required]);
  trade = new FormControl('', [Validators.required]);
  street = new FormControl('', [Validators.required]);
  pincode = new FormControl('', [Validators.required]);
  aadhar = new FormControl('', [Validators.required]);

  

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  // fruits: string[] = ['SAIL'];
  fruits: string[] = [];
  allFruits: string[] = ['SAIL', 'TATA', 'JSW', 'TOPTECH', 'JSPL', 'ADHUNIK'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  service: any;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private router: Router) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    // event.chipInput!.clear();
    event.input.value = '';

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
  }

  onClose() {
    // this.service.form.reset();
    // this.dialogRef.close();
    this.router.navigate(['/account/ihbowner']);
    
  }  
}
