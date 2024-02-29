import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';





export interface Element {
  name: string;
  position: number;
  weight: string;
  requestdate:string;
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
  test11:string;
  test12:string;
  test13:string;
  test14:string;
  test15:string;
  test16:string;
  test17:string;
  test18:string;
  test19:any;
  test20:any;
  test21:any;
  test22:any;
  exportcheck:string;
  action:string;


  
}


/** Constants used to fill up our data base. */
const ELEMENT_DATA: Element[] = [
  {position: 1, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00', test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'Status: Approved Date: 26-10-2021 Remarks: Auto Approved dist',test20:'Approver: System Admin Status: Approved Remarks: Auto Approved',test21:'Approver: System Admin Status: Approved Remarks: Auto Approved',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved', exportcheck: '', action: ''},
  {position: 2, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00', test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'Status: Approved Date: 26-10-2021 Remarks: Auto Approved dist',test20:'Approver: System Admin Status: Approved Remarks: Auto Approved',test21:'Approver: System Admin Status: Approved Remarks: Auto Approved',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 3, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00', test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'Approver: System Admin Status: Approved Remarks: Auto Approved',test21:'Approver: System Admin Status: Approved Remarks: Auto Approved',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 4, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00', test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'Approver: System Admin Status: Approved Remarks: Auto Approved',test21:'Approver: System Admin Status: Approved Remarks: Auto Approved',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 5, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00', test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'Approver: System Admin Status: Approved Remarks: Auto Approved',test21:'Approver: System Admin Status: Approved Remarks: Auto Approved',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 6, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00', test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'Approver: System Admin Status: Approved Remarks: Auto Approved',test21:'Approver: System Admin Status: Approved Remarks: Auto Approved',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 7, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00', test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'Approver: System Admin Status: Approved Remarks: Auto Approved',test21:'Approver: System Admin Status: Approved Remarks: Auto Approved',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 8, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00', test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 9, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00', test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 10, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00',test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 11, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00',test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 12, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00',test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 13, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00',test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 14, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00',test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 15, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00',test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 16, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00',test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''},
  {position: 17, name: '19235', weight: 'REQ/005/13693/18102021',requestdate:'18-10-2021', symbol: '123456',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'Andhra Pradesh',test4:'ANANTPUR',test5:'16091996',test6:'4.00',test7:'4.00',test8:'10.00',test9:'0.0',test10:'10.00',test11:'0.00',test12:'0.00',test13:'0.00',test14:'0.00',test15:'0.00',test16:'0.00',test17:'0.00',test18:'0.00',test19:'0.00',test20:'0.00',test21:'',test22:'Approver: System Admin Status: Dispatched Remarks: Auto Approved',exportcheck: '', action: ''}
];


@Component({
  selector: 'app-order-commercial',
  templateUrl: './order-commercial.component.html',
  styleUrls: ['./order-commercial.component.css']
})


export class OrderCommercialComponent implements OnInit, AfterViewInit {

  constructor() { }

  displayedColumns = ['position', 'name', 'weight','requestdate', 'symbol','test','test1','test2','test3','test4','test5','test6','test7','test8','test9','test10','test11','test12','test13','test14','test16','test17','test18','test19','test20','test21','test21','test22','exportcheck', 'action'];
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


