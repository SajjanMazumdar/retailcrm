import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { DistributorComponent } from 'src/app/account/distributor/distributor.component';
import { Router } from '@angular/router';
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
  { position: 1, name:  '2102269', weight: 'SARTHAK STEEL', symbol: 'ABC ENTERPRISES', test: 'gayatri tripathy', test1: '223236', test2: 'dolasahi bhadrak', test3: '756127', test4: '', test5: 'East', test6: 'Odisha', test7: 'bhadrak', test8: 'NORTH ODISHA', test9: 'BHADRAK', test10: '9437184101', test11: 'Active SSIL', test12: 'Cold', test13: 'Yes', test14: 'SHASHANKA SHEKHAR SHA', test15: 'Sarada Prasad Dash', test16: 'Gopanarayana Shandha', test17: '', test18: '07-07-2020', test19: 'SANAT KUMAR NAHAK', test20: '02-01-2020 12:45:07', test25: 'test25' },
  { position: 2, name: '2031108', weight: 'D.H.S DISTRIBUTOR', symbol: 'A G K ENTERPRISES', test: 'ABDUL GANI KHAN', test1: '221875', test2: 'KHANDAGIRI KHANDAGIRI ', test3: '751019', test4: 'Unnamed Road, Jadupur, Dumduma, Bhubaneswar, Odisha 751019, India', test5: 'East', test6: 'Odisha', test7: 'KHANDAGIRI', test8: '	East Odisha (NYG,KUR)', test9: 'KHORDHA', test10: '	9437027826', test11: 'Active SSIL', test12: 'Warm', test13: 'No', test14: '', test15: 'Bishwajeet Sarkar', test16: '', test17: 'ASHUTOSH BEHERA', test18: '07-07-2020', test19: 'Kamalika Nath', test20: '06-02-2019 13:02:53', test25: 'test25' },
  { position: 3, name: '2193714', weight: 'GHOSH BROTHERS', symbol: 'A K TRADING', test: 'AK Mansur Alom Laskar', test1: '224335', test2: 'Silchar Town Silchar', test3: '788003', test4: 'text4', test5: 'North-East', test6: 'Assam', test7: 'Silchar', test8: '	BARAK VALLEY', test9: 'CACHAR', test10: '9435072487', test11: 'Active SSIL', test12: '', test13: 'Yes', test14: '', test15: 'Mrinal Kanti Singha', test16: 'Apu Chanda', test17: '', test18: '07-07-2020', test19: 'Dipannita', test20: '09-04-2021 17:18:35', test25: 'test25' },
  { position: 4, name: '2200162', weight: 'SHIV DISTRIBUTORS', symbol: 'A.R ENTERPRISES', test: 'Rajiv Kumar', test1: '224462', test2: 'Laxminath nagar ward no 06 Bangaon road Saharsa', test3: '852201', test4: '', test5: 'East', test6: 'Bihar', test7: 'Saharsa', test8: '	North Bihar', test9: 'SAHARSA', test10: '8709984564', test11: 'Active SSIL', test12: '', test13: 'Yes', test14: '', test15: '	DEEPAK KUMAR (Saharsa)', test16: 'Raghav Kumar Jha', test17: 'SUJEET KUMAR CHOUDHRY', test18: '07-07-2020', test19: 'Runa Roy Chowdhury', test20: '15-07-2021 15:48:46', test25: 'test25' },
  { position: 5, name: '2152545', weight: 'GHOSH BROTHERS', symbol: 'A.R ENTERPRISES', test: 'Ajit Bhoumik', test1: '220996', test2: 'poilapool Cachar', test3: '788001', test4: 'Pailapool, Assam 788098, India', test5: 'North-East', test6: 'Assam', test7: 'Cachar', test8: 'BARAK VALLEY', test9: '	CACHAR', test10: '7002451892', test11: 'Active SSIL', test12: 'Hot', test13: 'Yes', test14: '', test15: 'Mrinal Kanti Singha', test16: 'Sambhu Nath Ganguly', test17: '', test18: '	07-07-2020', test19: 'BAPPI DEB', test20: '21-11-2016 20:27:31', test25: 'test25' },
  { position: 6, name: '11347', weight: 'MAHESH KUMAR MAHESWARI & HUF', symbol: 'AASBAB', test: 'MANTU DAS', test1: '221265', test2: 'Sorbhog, Barpeta-781317 Barpeta', test3: '781314', test4: 'SARBHOG', test5: 'North-East', test6: 'Assam', test7: 'Barpeta', test8: 'LOWER ASSAM', test9: 'BARPETA', test10: '	9435123863', test11: 'Active SSIL', test12: '	Warm', test13: 'Yes', test14: '', test15: 'SAHAJAHAN ALI MAZUMDAR', test16: 'RAJU KUMAR DAS', test17: 'ASHUTUSH SARKAR', test18: '07-07-2020', test19: 'Kanak Sarma', test20: '10-02-2017 21:04:11', test25: 'test25' },
  { position: 7, name: '2145276', weight: 'VINAY SHOPPE', symbol: 'AB BRICK INDUSTRY', test: 'Mr. Brojen Kumar Lahkar', test1: '223980', test2: 'Dhopatari , Silbharal , Kamrup Rural , Assam-781101 Kamrup', test3: '781101', test4: '', test5: 'North-East', test6: 'Assam', test7: 'Kamrup', test8: 'KAMRUP', test9: 'KAMRUP', test10: '	9864033398', test11: 'Active SSIL', test12: '	Warm', test13: 'Yes', test14: '', test15: '', test16: 'CHANAKYA JYOTI NATH', test17: '', test18: '07-07-2020', test19: 'Dipannita', test20: '15-10-2020 17:22:49', test25: 'test25' },
  { position: 8, name: '2029598', weight: 'GANI STEEL', symbol: 'ABDUL RAKIB STORE', test: 'ABDUL RAKIB ANSARI', test1: '224278', test2: 'PAKUR PAKUR', test3: '816107', test4: 'text4', test5: 'East', test6: 'Jharkhand', test7: 'PAKUR', test8: 'Jharkhand Santhal', test9: 'PAKUR', test10: '8674896565', test11: 'Active SSIL', test12: 'Hot', test13: 'Yes', test14: '', test15: 'Manoj Kumar Verma', test16: 'brajendra kumar', test17: 'Banty Kumar Pandey', test18: '07-07-2020', test19: 'ARPAN NANDY', test20: '17-08-2020 18:56:09', test25: 'test25' },
  { position: 9, name: '2022553', weight: 'SSIL MP', symbol: 'ABHAY KHANDELWAL', test: 'ABHAY KHANDELWAL', test1: '', test2: '	INDORE INDORE', test3: '452001', test4: 'text4', test5: 'Central', test6: 'Madhya Pradesh', test7: 'INDORE', test8: 'Madhya Pradesh', test9: 'INDORE', test10: '9827020684', test11: 'Active SSIL', test12: '', test13: 'Yes', test14: '', test15: '', test16: 'Subodh Kumar', test17: '', test18: 'text18', test19: 'Susmita Karmakar', test20: 'text20', test25: 'test25' },
  { position: 10, name: 'Neon', weight: '20.1797', symbol: 'Ne', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'Active SSIL', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 11, name: 'Sodium', weight: '22.9897', symbol: 'Na', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'Active SSIL', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 12, name: 'Magnesium', weight:' 24.305', symbol: 'Mg', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'Active SSIL', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 13, name: 'Aluminum', weight: '26.9815', symbol: 'Al', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'Active SSIL', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 14, name: 'Silicon', weight: '28.0855', symbol: 'Si', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'Active SSIL', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 15, name: 'Phosphorus', weight: '30.9738', symbol: 'P', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'Active SSIL', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 16, name: 'Sulfur', weight: '32.065', symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'Active SSIL', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 17, name: 'Chlorine', weight: '35.453', symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },

  { position: 18, name: 'Hydrogen', weight: '1.0079', symbol: 'H', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 19, name: 'Helium', weight: '4.0026', symbol: 'He', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 20, name: 'Lithium', weight: '6.941', symbol: 'Li', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 21, name: 'Beryllium', weight: '9.0122', symbol: 'Be', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 22, name: 'Boron', weight: '10.811', symbol: 'B', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 23, name: 'Carbon', weight: '12.0107', symbol: 'C', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 24, name: 'Nitrogen', weight: '14.0067', symbol: 'N', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 25, name: 'Oxygen', weight: '15.9994', symbol: 'O', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 26, name: 'Fluorine', weight: '18.9984', symbol: 'F', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 27, name: 'Neon', weight: '20.1797', symbol: 'Ne', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 28, name: 'Sodium', weight: '22.9897', symbol: 'Na', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 29, name: 'Magnesium', weight: '24.305', symbol: 'Mg', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 30, name: 'Aluminum', weight: '26.9815', symbol: 'Al', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 31, name: 'Silicon', weight: '28.0855', symbol: 'Si', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 32, name: 'Phosphorus', weight: '30.9738', symbol: 'P', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 33, name: 'Sulfur', weight: '32.065', symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 34, name: 'Chlorine', weight: '35.453', symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' }
];


@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.css']
})
export class DistributorListComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight',  'test', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12', 'test13', 'test14', 'test15', 'test16', 'test17', 'test18', 'test19', 'test20', 'test25'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  search : String ="";

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
    // const dialogRef = this.dialog.open(DistributorComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this.router.navigate(['/account/distributor_entry']);
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