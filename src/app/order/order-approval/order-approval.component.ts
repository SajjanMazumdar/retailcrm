import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { FormControl, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';

export interface Element {
  name: string;
  position: number;
  exportcheck:string;
  weight: string;
  requestdata:string;
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
  test13:any;
  test14:string;
  test15:string;
  test16:string;
  test17:string;
  test18:string;
  test19:string;
  action:string;

}

/** Constants used to fill up our data base. */
const ELEMENT_DATA: Element[] = [
  {position: 1, exportcheck: '', name: '19231', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: '',test:'25-10-2021',test1:'TEST DISTRIBUTOR',test2:'ROI DEALER',test3:'Bihar',test4:'JAMUI',test5:'987654',test6:'8.00',test7:'0.00',test8:'text8',test9:'0.00',test10:'0.00',test11:'0.00',test12:'',test13:'Status: Approved Date: 26-10-2021Remarks: Auto Approved dist',test14:'',test15:'',test16:'',test17:'',test18:'',test19:'non', action: ''},
  {position: 2, exportcheck: '', name: '1932', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'He',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'Status: Approved Date: 26-10-2021 Remarks: Auto Approved dist',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 3, exportcheck: '', name: 'Lithium', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'Li',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'Status: Approved Date: 26-10-2021 Remarks: Auto Approved dist',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 4, exportcheck: '', name: 'Beryllium', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'Be',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 5, exportcheck: '', name: 'Boron', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'B',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 6, exportcheck: '', name: 'Carbon',weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'C',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 7, exportcheck: '', name: 'Nitrogen', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'N',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 8, exportcheck: '', name: 'Oxygen', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'O',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11 :'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 9, exportcheck: '', name: 'Fluorine', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'F',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 10, exportcheck: '', name: 'Neon', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'Ne',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 11, exportcheck: '', name: 'Sodium', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'Na',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 12, exportcheck: '', name: 'Magnesium', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'Mg',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 13, exportcheck: '', name: 'Aluminum', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'Al',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 14, exportcheck: '', name: 'Silicon', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'Si',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 15, exportcheck: '', name: 'Phosphorus', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'P',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 16, exportcheck: '', name: 'Sulfur', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'S',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''},
  {position: 17, exportcheck: '', name: 'Chlorine', weight: 'REQ/005/13689/18102021',requestdata:'18-10-2021', symbol: 'Cl',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8',test9:'text9',test10:'test10',test11:'test11',test12:'test12',test13:'test13',test14:'test14',test15:'test15',test16:'test16',test17:'test17',test18:'test18',test19:'non',action:''}
];

@Component({
  selector: 'app-order-approval',
  templateUrl: './order-approval.component.html',
  styleUrls: ['./order-approval.component.css']
})



export class OrderApprovalComponent implements OnInit, AfterViewInit {

  displayedColumns = ['position', 'exportcheck', 'name', 'weight','requestdata', 'symbol','test','test1','test2','test3','test4','test5','test6','test7','test9', 'test10', 'test11', 'test12', 'test13','test14','test15','test16','test17','test18','action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  showDiv = {
    previous : false
  }

  constructor(public dialog: MatDialog, private router: Router){}
  
    openDialog(){
      const dialogRef = this.dialog.open(InvoiceDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog result: ${result}`);

    });
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
