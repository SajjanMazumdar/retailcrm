import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { BranchesComponent } from '../branches/branches.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


export interface Element {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  test: string;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
  test7: string;
  test8: string;
  test9: string;
  test10: string;
  test11: string;
  test12: string;
  test13: string;
  test14: string;
  test15: string;
  test16: string;
  test17: string;
  test18: string;
  test19: string;
  test20: string;
  test25: string;
}


const ELEMENT_DATA: Element[] = [
  { position: 1, name:  '57901', weight: 'BIHAR BRANCH', symbol: 'H', test: 'test', test1: 'test1', test2: '301, Kashyap Shailja Tower Near Rajendra Nagar Bridge Kankarbagh', test3: '800001', test4: 'Gorakhnath Ln, Kidwaipuri, Patna, Bihar 800013, India', test5: 'East', test6: 'Bihar', test7: 'Kankarbagh', test8: 'South Bihar', test9: 'PATNA', test10: '8678077772', test11: 'Warm', test12: 'Yes', test13: 'Yes', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'soumen kumar laha', test18: 'text18', test19: 'MIMI MAZUMDAR', test20: '08-02-2018 11:31:05', test25: 'test25' },
  { position: 2, name: '58465', weight: 'ASSAM BRANCH(GUWAHATI)', symbol: 'He', test: 'test', test1: 'test1', test2: 'M/s Shyam Steel Industries Ltd. C/O, Dr, Pankaj Bhardwaj, House No-12, 3rd Floor, Promothes Barua Road,Rehabari Guwahati', test3: '781008', test4: 'Aastha Apartment, Manipuri Rajbari, Ulubari, Guwahati, Assam 781008, India', test5: 'North-East', test6: 'Assam', test7: 'Guwahati', test8: 'KAMRUP', test9: 'KAMRUP METROPOLITAN', test10: '8876521424', test11: 'Hot', test12: 'Yes', test13: 'Yes', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'Lalit Beriwala', test20: '14-02-2018 15:33:57', test25: 'test25' },
  { position: 3, name: '63811', weight: 'LUCKNOW BRANCH OFFICE', symbol: 'Li', test: 'test22', test1: 'test1', test2: 'C-61 VIBHUTI KUND GOMTINAGAR LUCKNOW', test3: '226010', test4: 'Sector K, Ashiyana, Lucknow, Uttar Pradesh 226012, India', test5: 'North', test6: 'Uttar Pradesh', test7: 'LUCKNOW', test8: 'Central Uttar Pradesh', test9: 'LUCKNOW', test10: '7571002891', test11: 'Hot', test12: 'Yes', test13: 'Yes', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'Lalit Beriwala', test20: '14-05-2018 18:23:32', test25: 'test25' },
  { position: 4, name: '58460', weight: 'ODISHA BRANCH (BHUBANESWAR)', symbol: 'Be', test: 'test', test1: 'test1', test2: 'M/s Shyam Steel Industries Ltd. Plot No 2B, Jaydurga Nagar Bhomikhal, Cuttack Road, BHUBANESWAR', test3: '751006', test4: 'Jayadurga Nagar, Jharapada, Bhubaneswar, Odisha 751006, India', test5: 'East', test6: 'Odisha', test7: 'BHUBANESWAR', test8: 'East Odisha (NYG,KUR)', test9: 'KHORDHA', test10: '7064407836', test11: 'Warm', test12: 'Yes', test13: 'Yes', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'Lalit Beriwala', test20: '14-02-2018 15:18:03', test25: 'test25' },
  { position: 5, name: '2202059', weight: 'Test BRANCH', symbol: 'B', test: 'test', test1: 'test1', test2: 'kolkata', test3: '700091', test4: 'kolkata', test5: 'North', test6: 'ROI Test State', test7: 'kolkata', test8: 'Central Uttar Pradesh', test9: 'LUCKNOW', test10: '7571002891', test11: 'text11', test12: 'Yes', test13: 'Yes', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'Lalit Beriwala', test20: '14-05-2018 18:23:32', test25: 'test25' },
  { position: 6, name: '57347', weight: 'TRIPURA BRANCH', symbol: 'C', test: 'test', test1: 'test1', test2: 'AGARTALA, WEST TRIPURA AGARTALA', test3: '799007', test4: 'Dhaleswar, Agartala, Tripura, India', test5: 'North-East', test6: 'Tripura', test7: 'AGARTALA', test8: 'Tripura', test9: 'AGARTALA', test10: '8794732501', test11: 'text11', test12: 'Yes', test13: 'Yes', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'Lalit Beriwala', test20: '03-02-2018 13:15:34', test25: 'test25' },
  { position: 7, name: 'Nitrogen', weight: '14.006', symbol: 'N', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 8, name: 'Oxygen', weight: '15.999', symbol: 'O', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 9, name: 'Fluorine', weight: '18.998', symbol: 'F', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 10, name: 'Neon', weight: '20.179', symbol: 'Ne', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 11, name: 'Sodium', weight: '22.989', symbol: 'Na', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 12, name: 'Magnesium', weight: '24.305', symbol: 'Mg', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 13, name: 'Aluminum', weight: '26.981', symbol: 'Al', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 14, name: 'Silicon', weight: '28.085', symbol: 'Si', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 15, name: 'Phosphorus', weight: '30.973', symbol: 'P', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 16, name: 'Sulfur', weight: '32.065', symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 17, name: 'Chlorine', weight: '35.453', symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },

  { position: 18, name: 'Hydrogen', weight: '1.0079', symbol: 'H', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 19, name: 'Helium', weight: '4.0026', symbol: 'He', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 20, name: 'Lithium', weight: '6.941', symbol: 'Li', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 21, name: 'Beryllium', weight: '9.0122', symbol: 'Be', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 22, name: 'Boron', weight: '10.811', symbol: 'B', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 23, name: 'Carbon', weight: '12.010', symbol: 'C', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 24, name: 'Nitrogen', weight: '14.006', symbol: 'N', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 25, name: 'Oxygen', weight: '15.999', symbol: 'O', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 26, name: 'Fluorine', weight: '18.998', symbol: 'F', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 27, name: 'Neon', weight: '20.179', symbol: 'Ne', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 28, name: 'Sodium', weight: '22.989', symbol: 'Na', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 29, name: 'Magnesium', weight: '24.305', symbol: 'Mg', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 30, name: 'Aluminum', weight: '26.981', symbol: 'Al', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 31, name: 'Silicon', weight: '28.0855', symbol: 'Si', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 32, name: 'Phosphorus', weight: '30.973', symbol: 'P', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 33, name: 'Sulfur', weight: '32.065', symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 34, name: 'Chlorine', weight: '35.453', symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' }
];


@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css']
})
export class BranchesListComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test12', 'test13', 'test14', 'test15', 'test16', 'test17', 'test19', 'test20', 'test25'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog() {

    this.router.navigate(['/account/branches_entry']);
    
    // const dialogRef = this.dialog.open(BranchesComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });

  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // onCreate(){
  //   const dialogConfig = new MatDialogConfig ();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   this.dialog.open(BranchesComponent)
  // }

}

// function DialogContentExampleDialog(DialogContentExampleDialog: any) {
//   throw new Error('Function not implemented.');
// }
// @Component({
//   selector: 'dialog-from-menu-dialog',
//   templateUrl: 'dialog-from-menu-example-dialog.html',
// })
// export class DialogFromMenuExampleDialog {
  
//  }

