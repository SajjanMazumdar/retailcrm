import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';


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
}
const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', test: 'test22', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },

  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', test: 'test', test1: 'test2', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', test: 'test', test1: 'test1', test2: 'text2', test3: 'text3', test4: 'text4', test5: 'text5', test6: 'text6', test7: 'text7', test8: 'text8' }
];

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'test', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
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

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog-from-menu-example-dialog.html',
})
export class DialogFromMenuExampleDialog {

}