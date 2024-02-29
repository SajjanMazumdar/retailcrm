import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { FormControl, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialogRef } from '@angular/material/dialog';


export interface Element {
  invoiceNumber: number;
  invoiceDate: number;
  vehicleNo:number;
  driverMobNo:number;
  dispatchQty:number

}


/** Constants used to fill up our data base. */
const ELEMENT_DATA: Element[] = [
  {invoiceNumber: 1, invoiceDate: 19231, vehicleNo: 12345, driverMobNo:9831747478, dispatchQty:100},
];


@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit, AfterViewInit {

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  displayedColumns = ['invoiceNumber', 'invoiceDate', 'vehicleNo', 'driverMobNo','dispatchQty'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // dialogRef: any;
  service: any;


  constructor (public dialogRef: MatDialogRef<InvoiceDetailsComponent>) { }

  ngOnInit(): void {
  }

  onClose() {
    // this.service.form.reset();
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
