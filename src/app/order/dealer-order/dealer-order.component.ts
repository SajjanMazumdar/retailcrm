import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { FormControl, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

export interface Element {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  test:string;
  test1:string;
  test2:string;
  test3:string;
  test4:string;
  test5:string;
  test6:string;
  test7:string;
  test8:string;
  test9:string;
  test10:string;
  totaloutstanding:number;
  test11:string;
  test12:string;
  test13:string;
  test14:string;
  test15:string;
  test16:string;
  test17:string;
  test18:string;
  test19:string;

}

/** Constants used to fill up our data base. */
const ELEMENT_DATA: Element[] = [
  {position: 1, name: '19231', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 2, name: '12345', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 3, name: 'Lithium', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 4, name: 'Beryllium', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 5, name: 'Boron', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 6, name: 'Carbon', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 7, name: 'Nitrogen', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 8, name: 'Oxygen', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 9, name: 'Fluorine', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 10, name: 'Neon', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 11, name: 'Sodium', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 12, name: 'Magnesium', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 13, name: 'Aluminum', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 14, name: 'Silicon',weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 15, name: 'Phosphorus', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 16, name: 'Sulfur', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'},
  {position: 17, name: 'Chlorine', weight: 'REQ/005/13691/26102021', symbol: '12345',test:'26-10-2021',test1:'Test Distributor',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'100.00',test7:'102.00 (APPROVED BY DISTRIBUTOR)',test8:'12345',test9:'0.0',test10:'0.00',totaloutstanding:12345,test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'test19'}
];

@Component({
  selector: 'app-dealer-order',
  templateUrl: './dealer-order.component.html',
  styleUrls: ['./dealer-order.component.css']
})

export class DealerOrderComponent implements OnInit, AfterViewInit {


  displayedColumns = ['position', 'name', 'weight', 'symbol','test','test1','test2','test3','test4','test5','test6','test7','test8', 'test9', 'test10','totaloutstanding', 'test11', 'test12', 'test13','test14','test15','test16','test17','test18','test19'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  showDiv = {
    previous : false
  }

  

  ngOnInit(): void {
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

