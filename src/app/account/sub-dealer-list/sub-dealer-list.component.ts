import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { SubDealerComponent } from 'src/app/account/sub-dealer/sub-dealer.component';
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
  { position: 1, name:  '2078438', weight: 'LAXMI NARAYAN CEMENT STORE', symbol: 'H', test: 'Pankaj Lochan Mohapatra', test1: 'Kasarada,Po-Kasarada Cuttack', test2: '0', test3: '', test4: 'East', test5: 'Odisha', test6: 'Cuttack', test7: 'East Odisha (CTC,JSP)', test8: 'CUTTACK', test9: '9938399185', test10: 'Active SSIL', test11: 'LAXMI NURSING TRADERS-CUTTACK-221989', test12: 'Cold', test13: 'Yes', test14: '', test15: 'ASHISH SINHA', test16: '', test17: 'Choudhury Swarupananda Das', test18: 'text18', test19: 'GAUTAM KUMAR ROY', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 2, name: '2087269', weight: 'NAYAK ENTERPRISES', symbol: 'He', test: 'RAMESH CHANDRA NAYAK', test1: 'Darpanarayanapur NAYAGADA', test2: '	752079', test3: '', test4: 'East', test5: 'Odisha', test6: 'NAYAGADA', test7: '	East Odisha (NYG,KUR)', test8: 'NAYAGARH', test9: '	9938485293', test10: 'Active SSIL', test11: 'KALINGA ENTERPRISES-NAYAGARH-220181', test12: '	Hot', test13: 'Yes', test14: '', test15: 'Bishwajeet Sarkar', test16: 'Surya Ranjan Behura', test17: '', test18: 'text18', test19: '	SANCHITA DAS', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 3, name: '2011427', weight:' A.B. ENTERPRISE', symbol: 'Li', test: 'JITU KALITA', test1: 'NORTH LAKHIMPUR NORTH LAKHIMPUR', test2: '787001', test3: 'North Lakhimpur, Assam, India', test4: 'North-East', test5: 'Assam', test6: 'NORTH LAKHIMPUR', test7: 'NORTH BANK -LAKHIMPUR', test8: 'LAKHIMPUR', test9: '9954581877', test10: 'Active SSIL', test11: 'BAJAJ STEEL-DHEMAJI-220012', test12: '	Hot', test13: 'Yes', test14: '', test15: 'Basanta Saikia', test16: 'BHASKAR JYOTI BORAH', test17: '', test18: 'text18', test19: '', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 4, name: '2147753', weight:' ABDUL SEKH', symbol: 'Be', test: 'Abdul Sekh', test1: 'Amanat Udhawa Sahebganj', test2: '816108', test3: '', test4: 'East', test5: 'Jharkhand', test6: 'Sahebganj', test7: 'Jharkhand Santhal', test8: 'SAHEBGANJ', test9: '7549671161', test10: 'Active SSIL', test11: '	FIRDOSI STORE-SAHEBGANJ-223922', test12: 'text12', test13: 'Yes', test14: '', test15: 'Manoj Kumar Verma', test16: 'Amit Kumar Sah', test17: '', test18: 'text18', test19: '', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 5, name: '2204601', weight: 'ADITYA TRADERS', symbol: 'B', test: 'Aditya Raj', test1: '	Gandhi more , gaya gaya', test2: '823002', test3: '', test4: 'East', test5: 'Bihar', test6: 'gaya', test7: 'South Bihar', test8: 'GAYA', test9: '6207087484', test10: 'Active SSIL', test11: 'JAI MAA BAGESHWARI ENTERPRISES-GAYA-224423', test12: 'text12', test13: 'Yes', test14: 'Rakesh Kumar', test15: 'MANOJ KUMAR SINHA', test16: 'Bharat Singh Bharti', test17: '', test18: 'text18', test19: '	RISHAV KUMAR MITTAL', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 6, name: '2200626', weight: 'ADYASHA TRADING', symbol: 'C', test: 'Samir Kumar Pradhan', test1: 'Ghadual, Durgaprasad Nayagarh', test2: '752070', test3: '', test4: 'East', test5: 'Odisha', test6: 'Nayagarh', test7: 'East Odisha (NYG,KUR)', test8: 'NAYAGARH', test9: '8249583813', test10: 'Active SSIL', test11: 'JAY DURGA STORE-NAYAGARH-224383', test12: 'text12', test13: 'Yes', test14: '', test15: 'Bishwajeet Sarkar', test16: 'Surya Ranjan Behura', test17: 'Banty Kumar Pandey', test18: 'text18', test19: 'MIMI MAZUMDAR', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 7, name: '	2030857', weight: 'AJAY HARDWARE', symbol: 'N', test: 'Ajay Singh', test1: 'Lalganj Kadv Buxar', test2: '802136', test3: '', test4: 'East', test5: 'Bihar', test6: 'Buxar', test7: 'South Bihar', test8: '	BUXAR', test9: '9525424739', test10: 'Active SSIL', test11: '	M/S AGARWAL STEEL-BUXAR-223989', test12: 'text12', test13: 'Yes', test14: '', test15: 'PRIYANSHU RANJAN', test16: 'Akash Soni', test17: 'Rahul Verma', test18: 'text18', test19: '', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 8, name: '	2147757', weight: 'Akbar Ali', symbol: 'O', test: 'Akbar Ali', test1: 'Mansingha Rajmahal Sahebganj', test2: '816108', test3: 'Dumraon, Bihar, India', test4: 'East', test5: 'Jharkhand', test6: 'Sahebganj', test7: 'Jharkhand Santhal', test8: '	SAHEBGANJ', test9: '9199391408', test10: 'Active SSIL', test11: 'FIRDOSI STORE-SAHEBGANJ-223922', test12: 'text12', test13: 'Yes', test14: '', test15: 'Manoj Kumar Verma', test16: 'Amit Kumar Sah', test17: '', test18: 'text18', test19: '', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 9, name: '2204580', weight: 'ALAM TRADERS', symbol: 'F', test: 'Alam', test1: 'panchmandir road jamui', test2: '811307', test3: '', test4: 'East', test5: 'Odisha', test6: 'jamui', test7: '	South Bihar', test8: '	JAMUI', test9: '	9713430005', test10: 'Active SSIL', test11: 'KHUSHI ENTERPRISE-JAMUI-223201', test12: 'text12', test13: 'Yes', test14: '', test15: '', test16: 'VIBEKANAND BIKRAM', test17: 'Deepak Kumar (Buxor)', test18: 'text18', test19: '', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 10, name: '	2202533', weight: 'ALIA ENTERPRISES', symbol: 'Ne', test: 'Tabassum Khatun', test1: 'Islam Nagar, khaira road, jamui, nima rang Jamui', test2: '811307', test3: '', test4: 'East', test5: 'Odisha', test6: 'text6', test7: '	South Bihar', test8: 'text8', test9: '	8210775506', test10: 'Active SSIL', test11: 'SHAHI TRADERS-JAMUI-220909', test12: 'text12', test13: 'Yes', test14: '', test15: 'PRIYANSHU RANJANss', test16: 'VIBEKANAND BIKRAM', test17: '', test18: 'text18', test19: '', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 11, name: 'Sodium', weight: '22.9897', symbol: 'Na', test: 'test', test1: 'test1', test2: 'text2', test3: '', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'Active SSIL', test11: 'text11', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: '', test20: '30-08-2018 17:30:10', test25: 'test25' },
  { position: 12, name: 'Magnesium', weight:' 24.305', symbol: 'Mg', test: 'test', test1: 'test1', test2: 'text2', test3: '', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 13, name: 'Aluminum', weight: '26.9815', symbol: 'Al', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 14, name: 'Silicon', weight: '28.0855', symbol: 'Si', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'Yes', test14: '', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 15, name: 'Phosphorus', weight: '30.9738', symbol: 'P', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'Yes', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 16, name: 'Sulfur', weight: '32.065', symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 17, name: 'Chlorine', weight: '35.453', symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },

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
  selector: 'app-sub-dealer-list',
  templateUrl: './sub-dealer-list.component.html',
  styleUrls: ['./sub-dealer-list.component.css']
})
export class SubDealerListComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'test', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12', 'test13', 'test14', 'test15', 'test16', 'test17', 'test19', 'test20', 'test25'];
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
    // const dialogRef = this.dialog.open(SubDealerComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this.router.navigate(['/account/sub-dealer_entry']);
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