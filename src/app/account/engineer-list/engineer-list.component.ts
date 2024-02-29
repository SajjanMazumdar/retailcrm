import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { EngineerComponent } from 'src/app/account/engineer/engineer.component';
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
  category: string;
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
  { position: 1, name:  '2045766', weight: 'A.K.NATH', symbol: 'H', test: 'test', test1: 'Dhekiajuli Tezpur', test2: '784110', test3: '', test4: 'North-East', test5: 'Assam', test6: 'Tezpur', test7: 'NORTH BANK -SONITPUR', test8: 'SONITPUR', test9: '9706342422', test10: 'Active SSIL', test11: '', test12: 'Hot', test13: 'No', category: 'A', test14: '', test15: 'Dilip Shah', test16: 'MANASH PRADIP BHATTACHARJEE', test17: '', test18: '07-07-2020', test19: 'Dipannita', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 2, name: '	2197198', weight: 'AADIL TARIQUE', symbol: 'He', test: 'test', test1: 'Motihari Motihari', test2: '845401', test3: '', test4: 'East', test5: 'Bihar', test6: 'Motihari', test7: 'North Bihar', test8: '	E.CHAMPRAN', test9: '7250565800', test10: 'Active SSIL', test11: '', test12: '', test13: 'No', category: 'A', test14: '', test15: 'SHARAT KIRAN', test16: '', test17: '', test18: '07-07-2020', test19: '', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 3, name: '20299', weight: 'ABHAY KUMAR SINHA', symbol: 'Li', test: 'test22', test1: 'NICHALI KILA GHARPAR Bihar sharif', test2: '803101', test3: '', test4: 'East', test5: 'Bihar', test6: 'Bihar sharif', test7: 'South Bihar', test8: '	NALANDA', test9: '9234423257', test10: 'Active SSIL', test11: '', test12: '', test13: 'No', category: 'A', test14: '', test15: '', test16: 'Suraj kumar', test17: 'Kunal Anand(3rd party)', test18: '07-07-2020', test19: '', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 4, name: '44324', weight: 'ABHISHEK KUMAR', symbol: 'Be', test: 'test', test1: 'PURNIA', test2: '854301', test3: '', test4: 'East', test5: 'Bihar', test6: 'PURNIA', test7: 'North Bihar', test8: '	PURNIA', test9: '8877616018', test10: 'Active SSIL', test11: '', test12: '', test13: 'No', category: 'A', test14: '', test15: 'HIMANSHU KUMAR', test16: '', test17: 'TUNNA KUMAR SINGH', test18: '07-07-2020', test19: '', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 5, name: '	2119292', weight: '	ADIL ANSARI', symbol: 'B', test: 'test', test1: 'ramgarh Kaimur', test2: '821110', test3: '', test4: 'East', test5: 'Bihar', test6: 'Kaimur', test7: 'South Bihar', test8: 'KAIMUR', test9: '9304675069', test10: 'Active SSIL', test11: '', test12: 'Hot', test13: 'No', category: 'A', test14: '', test15: 'MANOJ KUMAR SINHA', test16: 'ABHISHEK KUMAR', test17: 'Ravindar Singh', test18: '07-07-2020', test19: 'MIMI MAZUMDAR', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 6, name: '2123427', weight: 'AJAY KUMAR DAS R&B DIVISION', symbol: 'C', test: 'test', test1: 'Kendrapara Kendrapara', test2: '754211', test3: '', test4: 'North-East', test5: 'Odisha', test6: 'Kendrapara', test7: 'East Odisha (Kendrapara)', test8: 'KENDRAPARA', test9: '9938221288', test10: 'Active SSIL', test11: '', test12: 'text12', test13: 'No', category: 'A', test14: 'Niranjan Singh', test15: 'SATYAPRIYA PATTANAYAK	', test16: '', test17: 'text17', test18: '07-07-2020', test19: 'Souvik Bhattacharya', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 7, name: '	6667', weight: 'AJAY KUMAR NATH', symbol: 'N', test: 'test', test1: '	JUNALI MANGALDAI CHAPAI darang', test2: '784529', test3: '', test4: 'East', test5: 'Assam', test6: 'text6', test7: 'NORTH BANK -SONITPUR', test8: 'DARRANG', test9: '8876608765', test10: 'Active SSIL', test11: '', test12: '', test13: 'No', category: 'A', test14: '', test15: 'Dilip Shah', test16: '', test17: '', test18: '07-07-2020', test19: 'Himanish Borah', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 8, name: '	2201863', weight: 'AJAZ AHMAD HASHMI', symbol: 'O', test: 'test', test1: 'Madhubani Madhubani', test2: '847212', test3: '', test4: 'East', test5: 'Bihar', test6: 'darang', test7: '	North Bihar', test8: 'MADHUBANI', test9: '7369994001', test10: 'Active SSIL', test11: '', test12: '', test13: 'No', category: 'A', test14: '', test15: 'Asutosh Kumar', test16: '', test17: 'Bishnu Mondal', test18: '07-07-2020', test19: '', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 9, name: '	20322', weight: 'AJIT KUMAR SAHA', symbol: 'F', test: 'test', test1: '	BARPETA BARPETA', test2: '781301', test3: '', test4: 'East', test5: 'Assam', test6: 'Madhubani', test7: 'LOWER ASSAM', test8: 'BARPETA', test9: '9435123560', test10: 'Active SSIL', test11: '', test12: 'Hot', test13: 'No', category: 'A', test14: '', test15: 'SAHAJAHAN ALI MAZUMDAR', test16: 'RAJNISH KUMAR', test17: 'Manish kumar(3rd Party)', test18: '07-07-2020', test19: '', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 10, name: '2194356', weight: 'AJIT SINHA', symbol: 'Ne', test: 'test', test1: '	Darbhanga Darbhanga', test2: '846004', test3: '', test4: 'East', test5: 'Bihar', test6: 'BARPETA', test7: 'North Bihar', test8: '	DARBHANGA', test9: '9155049225', test10: 'Active SSIL', test11: '', test12: 'text12', test13: 'No', category: 'A', test14: 'Vivek Jhavar', test15: 'Asutosh Kumar', test16: 'RAJU KUMAR DAS', test17: 'ASHUTUSH SARKAR', test18: '07-07-2020', test19: '', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 11, name: 'Sodium', weight: '22.9897', symbol: 'Na', test: 'test', test1: 'test1', test2: 'text2', test3: '', test4: 'text4', test5: 'text5', test6: 'Darbhanga', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'Active SSIL', test11: '', test12: 'text12', test13: 'No', category: 'A', test14: '', test15: 'Rajeev Ranjan', test16: 'RAJNISH KUMAR', test17: 'Pushpam Kumar', test18: '07-07-2020', test19: '', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 12, name: 'Magnesium', weight: '24.305', symbol: 'Mg', test: 'test', test1: 'test1', test2: 'text2', test3: '', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'Active SSIL', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: '', test15: 'SAHAJAHAN ALI MAZUMDAR', test16: '', test17: 'Pushpam Kumar', test18: '07-07-2020', test19: '', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 13, name: 'Aluminum', weight: '26.9815', symbol: 'Al', test: 'test', test1: 'test1', test2: 'text2', test3: '', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'Active SSIL', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: '07-07-2020', test19: '', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 14, name: 'Silicon', weight: '28.0855', symbol: 'Si', test: 'test', test1: 'test1', test2: 'text2', test3: '', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: '07-07-2020', test19: 'text19', test20: '	20-04-2019 12:07:54', test25: 'test25' },
  { position: 15, name: 'Phosphorus', weight: '30.9738', symbol: 'P', test: 'test', test1: 'test1', test2: 'text2', test3: '', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: '07-07-2020', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 16, name: 'Sulfur', weight: '32.065', symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: '07-07-2020', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 17, name: 'Chlorine', weight: '35.453', symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },

  { position: 18, name: 'Hydrogen', weight: '1.0079', symbol: 'H', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 19, name: 'Helium', weight: '4.0026', symbol: 'He', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 20, name: 'Lithium', weight: '6.941', symbol: 'Li', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 21, name: 'Beryllium', weight: '9.0122', symbol: 'Be', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 22, name: 'Boron', weight: '10.811', symbol: 'B', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 23, name: 'Carbon', weight: '12.0107', symbol: 'C', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 24, name: 'Nitrogen', weight: '14.0067', symbol: 'N', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 25, name: 'Oxygen', weight: '15.9994', symbol: 'O', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 26, name: 'Fluorine', weight: '18.9984', symbol: 'F', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 27, name: 'Neon', weight: '20.1797', symbol: 'Ne', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 28, name: 'Sodium', weight: '22.9897', symbol: 'Na', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 29, name: 'Magnesium', weight: '24.305', symbol: 'Mg', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 30, name: 'Aluminum', weight: '26.9815', symbol: 'Al', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 31, name: 'Silicon', weight: '28.0855', symbol: 'Si', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 32, name: 'Phosphorus', weight: '30.9738', symbol: 'P', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 33, name: 'Sulfur', weight: '32.065', symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 34, name: 'Chlorine', weight: '35.453', symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' }
];


@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})
export class EngineerListComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12', 'test13', 'category', 'test14', 'test15', 'test16', 'test17', 'test18', 'test19', 'test20', 'test25'];
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
    // const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    // dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
    // const dialogRef = this.dialog.open(EngineerComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this.router.navigate(['/account/engineer_entry']);
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

}
// @Component({
//   selector: 'dialog-from-menu-dialog',
//   templateUrl: 'dialog-from-menu-example-dialog.html',
// })
// export class DialogFromMenuExampleDialog {
  
//  }
