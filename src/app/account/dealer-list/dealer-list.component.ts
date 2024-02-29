
import { AfterViewInit, Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { DOCUMENT } from '@angular/common';
import { ExcelService } from '../../Service/excel.service';
import { MainService } from '../../Service/main.service';

export interface TableFilter {
  text?: string;
  checked?: boolean;
  sublist?: TableFilter[];
}


export interface Element {
  hidden: boolean,
  name: string;
  position: string;
  weight: number;
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
  { hidden: false, position: '1', name: 'Hydrogen', weight: 1.0079, symbol: 'H', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: true, position: '2', name: 'Helium', weight: 4.0026, symbol: 'He', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '3', name: 'Lithium', weight: 6.941, symbol: 'Li', test: 'test22', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '4', name: 'Beryllium', weight: 9.0122, symbol: 'Be', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '5', name: 'Boron', weight: 10.811, symbol: 'B', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '6', name: 'Carbon', weight: 12.0107, symbol: 'C', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '7', name: 'Nitrogen', weight: 14.0067, symbol: 'N', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '8', name: 'Oxygen', weight: 15.9994, symbol: 'O', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '9', name: 'Fluorine', weight: 18.9984, symbol: 'F', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '10', name: 'Neon', weight: 20.1797, symbol: 'Ne', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '11', name: 'Sodium', weight: 22.9897, symbol: 'Na', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '12', name: 'Magnesium', weight: 24.305, symbol: 'Mg', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '13', name: 'Aluminum', weight: 26.9815, symbol: 'Al', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '14', name: 'Silicon', weight: 28.0855, symbol: 'Si', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '15', name: 'Phosphorus', weight: 30.9738, symbol: 'P', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '16', name: 'Sulfur', weight: 32.065, symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '17', name: 'Chlorine', weight: 35.453, symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },

  { hidden: false, position: '18', name: 'Hydrogen', weight: 1.0079, symbol: 'H', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '19', name: 'Helium', weight: 4.0026, symbol: 'He', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '20', name: 'Lithium', weight: 6.941, symbol: 'Li', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '21', name: 'Beryllium', weight: 9.0122, symbol: 'Be', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '22', name: 'Boron', weight: 10.811, symbol: 'B', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '23', name: 'Carbon', weight: 12.0107, symbol: 'C', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '24', name: 'Nitrogen', weight: 14.0067, symbol: 'N', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '25', name: 'Oxygen', weight: 15.9994, symbol: 'O', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '26', name: 'Fluorine', weight: 18.9984, symbol: 'F', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '27', name: 'Neon', weight: 20.1797, symbol: 'Ne', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '28', name: 'Sodium', weight: 22.9897, symbol: 'Na', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '29', name: 'Magnesium', weight: 24.305, symbol: 'Mg', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '30', name: 'Aluminum', weight: 26.9815, symbol: 'Al', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '31', name: 'Silicon', weight: 28.0855, symbol: 'Si', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '32', name: 'Phosphorus', weight: 30.9738, symbol: 'P', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '33', name: 'Sulfur', weight: 32.065, symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { hidden: false, position: '34', name: 'Chlorine', weight: 35.453, symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' }
];



@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.css']
})
export class DealerListComponent implements OnInit, AfterViewInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'test', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12', 'test13', 'test14', 'test15', 'test16', 'test17', 'test18', 'test19', 'test20', 'test25'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  @HostListener("window:keyup", ["$event"]) handleKeyboardEvent(event: KeyboardEvent) {
    if (event.altKey == true) {
      if (event.key === 'n') {
        this.openForm();
      }
    }
    if (event.key === 'f') {
      this.openFullscreen();
    }
  }

  constructor(
    public dialog: MatDialog,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private excelService: ExcelService,
    public mainService: MainService
  ) {

  }

  ngOnInit(): void {

    this.elem = document.documentElement;
    
    //#region Initial Filter Settings

    this.col_position = this.createFilter('position', this.dataSource.filteredData);
    this.col_name = this.createFilter('name', this.dataSource.filteredData);

    this.dataSource.filterPredicate = (data: Element, filter: string) => {
      const matchFilter = [];

      if (filter != 'search') {
        // const glbFilter = data.name.toLowerCase().includes(filter);
        // matchFilter.push(glbFilter);

        for (let index = 0; index < Object.keys(data).length; index++) {
          const key = Object.keys(data)[index];
          if (!data[key]) data[key] = "";
          if (data[key].toString().toLowerCase().includes(filter)) return true;
        }
        return false;

      } else {

        if (this.name_filter.length > 0) {
          const nameFilter = this.name_filter.some(i => data.name.includes(i));
          matchFilter.push(nameFilter);
        }

        if (this.position_filter.length > 0) {
          const positionFilter = this.position_filter.some(i => data.position == i);
          matchFilter.push(positionFilter);
        }

      }

      return matchFilter.every(Boolean);
    };

    //#endregion

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  openForm() {
    this.router.navigate(['/account/dealer_entry']);
  }

  //#region Excel Export
  exportAsXLSX(): void {
    var myClonedArray = [];
    for (let i = 0; i <= this.dataSource.filteredData.length - 1; i++) {
      myClonedArray.push({
        name: this.dataSource.filteredData[i].name,
        number: this.dataSource.filteredData[i].symbol
      })
    }
    this.excelService.exportAsExcelFile(myClonedArray, 'dealerList');
  }
  //#endregion

  //#region Full Screen

  elem;
  
  openFullscreen() {
    this.mainService.fullScreen_Active = true;
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  closeFullscreen() {
    this.mainService.fullScreen_Active = false;
    if (document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  //#endregion

  //#region Filter settings

  glbSearch: any;
  filterActive: boolean = false;

  glb_search: boolean = false;
  col_search: boolean = false;

  col_position: TableFilter;
  positionComplete: boolean = false;
  position_filter = new Array();
  position_search: string;

  col_name: TableFilter;
  nameComplete: boolean = false;
  name_filter = new Array();
  name_search: any;

  createFilter(key: string, data_set: Array<any>) {
    let ds = {
      text: 'Select All',
      checked: false,
      sublist: []
    };
    for (let i = 0; i <= data_set.length - 1; i++) {
      let index;
      index = ds.sublist.findIndex(res => res.text == data_set[i][key]);
      if (index == -1) {
        ds.sublist.push(
          { text: data_set[i][key], checked: false }
        )
      }
    }
    return ds;
  }

  applySearch(event: Event) {
    this.filterActive = true;
    this.glb_search = true;
    this.col_search = false;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    if (this.dataSource.filter == '') this.clearAll();

  }

  changeCheck(column: string) {
    if (column == 'position') {
      this.positionComplete = this.col_position.sublist.every(res => res.checked == true);
    }
    if (column == 'name') {
      this.nameComplete = this.col_name.sublist.every(res => res.checked == true);
    }
  }

  setAll(checked: boolean, column: string) {
    if (column == 'position') {
      this.positionComplete = checked;
      if (this.col_position.sublist == null) return;
      this.col_position.sublist.forEach(t => t.checked = checked);
    }
    if (column == 'name') {
      this.nameComplete = checked;
      if (this.col_name.sublist == null) return;
      this.col_name.sublist.forEach(t => t.checked = checked);
    }
  }

  applyFilter(column: string) {
    this.filterActive = true;
    this.glb_search = false;
    this.col_search = true;

    if (column == 'position') {
      let filter = new Array();
      this.col_position.sublist.forEach(res => {
        if (res.checked == true) {
          filter.push(res.text)
        }
      });
      this.position_filter = filter;
    }

    if (column == 'name') {
      let filter = new Array();
      this.col_name.sublist.forEach(res => {
        if (res.checked == true) {
          filter.push(res.text)
        }
      });
      this.name_filter = filter;
    }

    this.dataSource.filter = 'search';
    this.glbSearch = '';

    if (column == 'position') this.updateFilterList('name', this.dataSource.filteredData);
    if (column == 'name') this.updateFilterList('position', this.dataSource.filteredData);

  }

  updateFilterList(key: string, data_set: Array<any>) {
    var index = -1;
    if (key == 'position') {
      for (let j = this.col_position.sublist.length - 1; j >= 0; j--) {
        index = data_set.findIndex(res => res.position == this.col_position.sublist[j].text);
        if (index == -1) this.col_position.sublist.splice(j, 1);
      }
      console.log(this.col_position.sublist.length, data_set.length)
      if (this.col_position.sublist.length != data_set.length) {
        for (let i = 0; i <= data_set.length - 1; i++) {
          let index;
          index = this.col_position.sublist.findIndex(res => res.text == data_set[i][key]);
          if (index == -1) {
            this.col_position.sublist.push(
              { text: data_set[i][key], checked: this.position_filter.includes(data_set[i][key]) }
            )
          }
        }
      }
    }

    if (key == 'name') {
      for (let j = this.col_name.sublist.length - 1; j >= 0; j--) {
        index = data_set.findIndex(res => res.name == this.col_name.sublist[j].text);
        if (index == -1) this.col_name.sublist.splice(j, 1);
      }
      if (this.col_name.sublist.length != data_set.length) {
        for (let i = 0; i <= data_set.length - 1; i++) {
          let index;
          index = this.col_name.sublist.findIndex(res => res.text == data_set[i][key]);
          if (index == -1) {
            this.col_name.sublist.push(
              { text: data_set[i][key], checked: this.name_filter.includes(data_set[i][key]) }
            )
          }
        }
      }

    }
  }

  clearFilter(column: string) {

    if (column == 'position') {
      this.position_filter = [];
      this.positionComplete = false;
      this.col_position.sublist.forEach(res => res.checked = false);
      this.position_search = null;
    }

    if (column == 'name') {
      this.name_filter = [];
      this.nameComplete = false;
      this.col_name.sublist.forEach(res => res.checked = false);
      this.name_search = null;
    }

    this.dataSource.filter = 'search';
    this.glbSearch = '';

    var data_set = this.dataSource.filteredData;
    if (this.col_position.sublist.length != data_set.length) {
      for (let i = 0; i <= data_set.length - 1; i++) {
        let index;
        index = this.col_position.sublist.findIndex(res => res.text == data_set[i]['position']);
        if (index == -1) {
          this.col_position.sublist.push(
            { text: data_set[i]['position'], checked: this.position_filter.includes(data_set[i]['position']) }
          )
        }
      }
    }

    if (this.col_name.sublist.length != data_set.length) {
      for (let i = 0; i <= data_set.length - 1; i++) {
        let index;
        index = this.col_name.sublist.findIndex(res => res.text == data_set[i]['name']);
        if (index == -1) {
          this.col_name.sublist.push(
            { text: data_set[i]['name'], checked: this.name_filter.includes(data_set[i]['name']) }
          )
        }
      }
    }

    if (this.name_filter.length == 0 && this.position_filter.length == 0) this.filterActive = false;

  }

  clearAll() {

    this.position_filter = [];
    this.positionComplete = false;
    this.col_position.sublist.forEach(res => res.checked = false);
    this.position_search = null;

    this.name_filter = [];
    this.nameComplete = false;
    this.col_name.sublist.forEach(res => res.checked = false);
    this.name_search = null;

    this.dataSource.filter = 'search';
    this.glbSearch = '';
    this.filterActive = false;

    var data_set = this.dataSource.filteredData;
    if (this.col_position.sublist.length != data_set.length) {
      for (let i = 0; i <= data_set.length - 1; i++) {
        let index;
        index = this.col_position.sublist.findIndex(res => res.text == data_set[i]['position']);
        if (index == -1) {
          this.col_position.sublist.push(
            { text: data_set[i]['position'], checked: this.position_filter.includes(data_set[i]['position']) }
          )
        }
      }
    }

    if (this.col_name.sublist.length != data_set.length) {
      for (let i = 0; i <= data_set.length - 1; i++) {
        let index;
        index = this.col_name.sublist.findIndex(res => res.text == data_set[i]['name']);
        if (index == -1) {
          this.col_name.sublist.push(
            { text: data_set[i]['name'], checked: this.name_filter.includes(data_set[i]['name']) }
          )
        }
      }
    }

  }

  //#endregion

}
