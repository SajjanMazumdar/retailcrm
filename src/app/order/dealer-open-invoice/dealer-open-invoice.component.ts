import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { FormControl, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';



export interface Element {
  invoiceNumber: number;
  doctext: string;
  company: string;
  invoicedate: string;
  billamount: number;
  cramount: string;
  netamount: string;
  days: string;

}


/** Constants used to fill up our data base. */
// const ELEMENT_DATA: Element[] = [
//   {}
// ];
const ELEMENT_DATA: Element[] = [
  // { invoiceNumber: 1, doctext: '19231', company: '12345', invoicenumber: 987987987, invoicedate: '100' },
  { invoiceNumber: 1, doctext:  '57901', company: 'BIHAR BRANCH', billamount: 8877, cramount: 'test1', netamount: '301, Kashyap Shailja Tower Near Rajendra Nagar Bridge Kankarbagh', days: '800001', invoicedate: 'kjkjhkjh'},
];



@Component({
  selector: 'app-dealer-open-invoice',
  templateUrl: './dealer-open-invoice.component.html',
  styleUrls: ['./dealer-open-invoice.component.css']
})
export class DealerOpenInvoiceComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  displayedColumns = ['invoiceNumber', 'doctext', 'company', 'invoicedate', 'billamount', 'cramount', 'netamount', 'days'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // dialogRef: any;
  service: any;


  ngOnInit(): void {
  }

}
