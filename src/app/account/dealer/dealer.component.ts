import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit, AfterViewInit {

  @HostListener("window:keyup", ["$event"]) handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.onClose();
    }
  }

  @ViewChild('leadId') leadId: ElementRef;
  @ViewChild('addr_street') addr_street: ElementRef;


  //#region Field, Validation decration & function

  lead_id: any;

  distributor_name: any;
  distributor_validator = new FormControl('', [Validators.required]);

  dealer_name: any;
  dealer_validator = new FormControl('', [Validators.required]);

  mobno: any;
  mobno_validator = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email_validator.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email_validator.hasError('email') ? 'Not a valid email' : '';
  }

  mobno1: any;

  email: any;
  email_validator = new FormControl('', [Validators.required, Validators.email]);

  contact_person: any;
  contactperson_validator = new FormControl('', [Validators.required]);

  steel_req: any;
  dealer_type: any;
  nod: any;
  type_dealer: any;

  potential: any;
  potential_validator = new FormControl('', [Validators.required]);

  sapid: any;

  // gst = new FormControl('', [Validators.required]);
  // trade = new FormControl('', [Validators.required]);
  // aadhar = new FormControl('', [Validators.required]);

  // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }

  //#endregion

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.filteredBrands = this.brandCtrl.valueChanges
      .pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allBrands.slice())
      );
  }

  ngOnInit(): void {
    this.createAddressFormGroup();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.leadId.nativeElement.focus();
    }, 0);
  }

  onClose() {
    this.router.navigate(['/account/dealer']);
  }

  //#region Mat chip Brand other then SSIL

  @ViewChild('brandInput') brandInput: ElementRef<HTMLInputElement>;

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  brandCtrl = new FormControl();
  filteredBrands: Observable<string[]>;
  brands: string[] = [];
  allBrands: string[] = ['SAIL', 'TATA', 'JSW', 'TOPTECH', 'JSPL', 'ADHUNIK'];

  addBrand(event: MatChipInputEvent): void {
    console.log(typeof (event))
    const value = (event.value || '').trim();
    if (value) {
      this.brands.push(value);
    }
    event.input.value = '';
    this.brandCtrl.setValue(null);
  }

  removeBrand(brand: string): void {
    const index = this.brands.indexOf(brand);
    if (index >= 0) {
      this.brands.splice(index, 1);
    }
  }

  selectedBrand(event: MatAutocompleteSelectedEvent): void {
    this.brands.push(event.option.viewValue);
    this.brandInput.nativeElement.value = '';
    this.brandCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allBrands.filter(brand => brand.toLowerCase().includes(filterValue));
  }

  //#endregion


  //#region Dynami Multi Address

  addressFormGroup: FormGroup;
  addressDetails: any = [];

  street_validator = new FormControl('', [Validators.required]);
  region = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  district = new FormControl('', [Validators.required]);
  block = new FormControl('', [Validators.required]);
  pincode = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);


  createAddressFormGroup() {
    this.addressFormGroup = this.fb.group({
      addressDetails: this.fb.array(
        [this.createAddressGroup()]
      )
    });
    this.addressDetails = this.addressFormGroup.get("addressDetails") as FormArray;
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      street1: ["", Validators.required],
      add_region: ["", Validators.required],
      add_state: ["", Validators.required],
      add_district: ["", Validators.required],
      add_block: ["", Validators.required],
      add_pincode: ["", Validators.required],
      add_location: ["", Validators.required]
    });
  }
  @ViewChildren('AddrformRow') addStreet: QueryList<ElementRef>;

  addAddressBox(): void {

    Swal.fire({
      title: 'Wnat to add new address?',
      // text: "You won't be able to revert this!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )

        this.addressDetails = this.addressFormGroup.get("addressDetails") as FormArray;
        this.addressDetails.push(this.createAddressGroup());

        setTimeout(() => {
          this.addStreet.last.nativeElement.querySelector('input').focus();
        }, 500);

      } else {

        console.log('qwertt');

      }
    })

  }

  deleteAddressBox(index: number) {

    Swal.fire({
      title: 'Do you want to delete address?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )

        const control = <FormArray>this.addressFormGroup.controls["addressDetails"];
        control.removeAt(index);
        this.addressDetails = this.addressFormGroup.get("addressDetails") as FormArray;

      } else {

        console.log('qwertt');

      }
    })
  }

  //#endregion


  submitDealer() {

    Swal.fire({
      title: 'Do you want to save the details?',
      // text: "You won't be able to revert this!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {

        console.log('confirm');

        this.lead_id = null;

        this.distributor_name = null;
        this.distributor_validator.reset();

        this.dealer_name = null;
        this.dealer_validator.reset();

        this.mobno = null;
        this.mobno_validator.reset();

        this.mobno1 = null;

        this.email = null;
        this.email_validator.reset();

        this.contact_person = null;
        this.contactperson_validator.reset();

        this.steel_req = null;
        this.dealer_type = null;
        this.nod = null;
        this.type_dealer = null;

        this.potential = null;
        this.potential_validator.reset();

        this.sapid = null;

        this.addressFormGroup.reset();

        const control = <FormArray>this.addressFormGroup.controls["addressDetails"];
        control.clear();
        this.createAddressFormGroup();

        Swal.fire({
          title: 'Do you want to add new details?',
          // text: "You won't be able to revert this!",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes',
          cancelButtonText: "No",
        }).then((res) => {
          if (res.isConfirmed) {

            console.log('confirm');

            setTimeout(() => {
              this.leadId.nativeElement.focus();
            }, 300);


          } else {

            this.onClose();

          }
        });
      } else {

        console.log('cancel');

      }
    });

  }

}
