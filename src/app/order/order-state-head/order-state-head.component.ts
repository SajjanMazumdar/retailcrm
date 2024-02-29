import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


export interface Element {
  name: string;
  position: number;
  weight: any;
  symbol: string;
  requestdate:string
  test:string;
  test1:string;
  test2:string;
  test3:string;
  test4:string;
  test5:string;
  test6:string;
  test7:string;
  approveqty:string;
  test8:string;
  test9:string;
  test10:string;
  test11:string;
}


/** Constants used to fill up our data base. */
const ELEMENT_DATA: Element[] = [
  {position: 1, name: '12345', requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'980705.27'},
  {position: 2, name: '12345', requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'65346.71',test10:'300000.00',test11:'0.00'},
  {position: 3, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'596498.54',test10:'300000.00',test11:'603501.46'},
  {position: 4, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'345238.94',test10:'300000.00',test11:'254761.06'},
  {position: 5, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 6, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 7, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 8, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 9, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 10, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 11, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 12, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 13, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 14, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 15, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 16, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'},
  {position: 17, name: '12345',requestdate:'05-11-2021', weight: 'REQ/005/13693/18102021', symbol: '12345678',test:'26-10-2021',test1:'ASTIK SUPPLIERS',test2:'TEST DEALER',test3:'ANANTPUR',test4:'16091996',test5:'987654',test6:'0.00',test7:'0.00',approveqty:'0.00',test8:'0.00',test9:'-680705.27',test10:'300000.00',test11:'0.00'}
];

@Component({
  selector: 'app-order-state-head',
  templateUrl: './order-state-head.component.html',
  styleUrls: ['./order-state-head.component.css']
})
export class OrderStateHeadComponent implements OnInit {

  constructor() { }

  displayedColumns = ['position', 'name', 'weight','requestdate', 'symbol','test','test1','test2','test3','test4','test5','test6','test7','approveqty','test8','test9','test10','test11',];
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
