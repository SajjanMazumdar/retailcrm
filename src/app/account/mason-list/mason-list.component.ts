import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { MasonComponent } from 'src/app/account/mason/mason.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';




export interface Element {
  name: string;
  position: number;
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
  { position: 1, name:  'Hydrogen', weight: 1.0079, symbol: 'H', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', test: 'test22', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },

  { position: 18, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 19, name: 'Helium', weight: 4.0026, symbol: 'He', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 20, name: 'Lithium', weight: 6.941, symbol: 'Li', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 21, name: 'Beryllium', weight: 9.0122, symbol: 'Be', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 22, name: 'Boron', weight: 10.811, symbol: 'B', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 23, name: 'Carbon', weight: 12.0107, symbol: 'C', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 24, name: 'Nitrogen', weight: 14.0067, symbol: 'N', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 25, name: 'Oxygen', weight: 15.9994, symbol: 'O', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 26, name: 'Fluorine', weight: 18.9984, symbol: 'F', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 27, name: 'Neon', weight: 20.1797, symbol: 'Ne', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 28, name: 'Sodium', weight: 22.9897, symbol: 'Na', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 29, name: 'Magnesium', weight: 24.305, symbol: 'Mg', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 30, name: 'Aluminum', weight: 26.9815, symbol: 'Al', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 31, name: 'Silicon', weight: 28.0855, symbol: 'Si', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 32, name: 'Phosphorus', weight: 30.9738, symbol: 'P', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 33, name: 'Sulfur', weight: 32.065, symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' },
  { position: 34, name: 'Chlorine', weight: 35.453, symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8', test9: 'text9', test10: 'test10', test11: 'text11', test12: 'text12', test13: 'text13', category: 'A', test14: 'text14', test15: 'text15', test16: 'text16', test17: 'text17', test18: 'text18', test19: 'text19', test20: 'text20', test25: 'test25' }
];


@Component({
  selector: 'app-mason-list',
  templateUrl: './mason-list.component.html',
  styleUrls: ['./mason-list.component.css']
})
export class MasonListComponent implements OnInit {

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
    // const dialogRef = this.dialog.open(MasonComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this.router.navigate(['/account/mason_entry']);
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
