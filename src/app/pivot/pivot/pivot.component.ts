import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CreateReportDialogComponent } from '../create-report-dialog/create-report-dialog.component';
import { EditReportDialogComponent } from '../edit-report-dialog/edit-report-dialog.component';
import {FormControl} from '@angular/forms';
declare var $: any;



@Component({
  selector: 'app-pivot',
  templateUrl: './pivot.component.html',
  styleUrls: ['./pivot.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class PivotComponent implements OnInit {
  dataSource = new MatTableDataSource<Element>();

  public mode = false;
  public Name: string;
  public Description: string;
  public IsDefault: boolean;
  public newConfig: any;
  public selectedName: string;
  public selectedDescription: string;
  public selectedIsDefault: boolean;
  public reportsCreated: any;
  public selectedConfig: any;
  public selectedReport: any;

  @ViewChild(CreateReportDialogComponent) report: any;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }
  ngOnInit(): void {
    console.log('PivotComponent'),

 
    $(document).ready(function(){

      $(".close-sortable").click(function() {
        $(".ui-sortable").toggle();
        if ($(".close-sortable").text() == "Show Filter") {
            $(".close-sortable").text("Hide Filter");
        }
        else {
            $(".close-sortable").text("Show Filter");
        }
    });

    $(".close-sortable").click(function(){
      $(".ui-sortable").toggleClass("boxoff");
      });

      $(".close-sortable").click(function(){
       $(".v-scroll").toggleClass("boxoff2");
        });

      $("close-sortable").click(function() {
        $(".pvtUi").scrollLeft(0) + "px";
      });
 
      $(".pvtRows").addClass("v-scroll");
      $(".pvtUnused").addClass("v-scroll2");

    });


}

  /**
  * Public Methods
  */

  /**
   * Method to create a new report
   */
  public newReport(): void {
    const createDialog = this.dialog.open(CreateReportDialogComponent, {
      data: {
        Name: this.Name, Options: this.newConfig
      }
    });

    createDialog.afterClosed().subscribe(result => {
      if (result === undefined) {
        this.snackBar.open('Report has not been created', '', {
          duration: 2000,
        });
      } else if (result.Name === undefined) {
        this.snackBar.open('Introduce a name to create a report', '', {
          duration: 2000,
        });
      } else {
        if (this.reportsCreated !== undefined) { // If there are reports already, add a new one
          this.reportsCreated.push(result);
        } else { // Initialize reportsCreated to create first report
          this.reportsCreated = [];
          this.reportsCreated.push(result);
        }
      }
    });
  }

  /**
   * Method for editing existing report
   */
  public editReport(): void {
    if (this.selectedReport !== undefined) {
      const editDialog = this.dialog.open(EditReportDialogComponent, {
        data: {
          Name: this.selectedReport.Name, Options: this.selectedReport.Options
        }
      });

      editDialog.afterClosed().subscribe(result => {
        if (result === undefined) {
          this.snackBar.open('Report has not been edited', '', {
            duration: 2000,
          });
        } else if (result.Name === undefined || result.Name === "") {
          this.snackBar.open('Introduce a name to edit the report', '', {
            duration: 2000,
          });
        } else {
          this.selectedReport.Name = result.Name;
          this.selectedReport.Options = this.newConfig;
        }
      })
    } else {
      this.snackBar.open('Select a report first', '', {
        duration: 2000,
      });
    }
  }

  /**
   * Method to get pivot table configuration
   * @param e captures event from child component
   */
  public reportConfig(e): void {
    // e.aggregatorName = 'Sum'
    // console.log(e.aggregatorName)
    this.newConfig = e;
  }

  /**
   * Method for child data binding
   * @param r report information
   */
  public selectReport(r): void {
    this.selectedConfig = r.Options;
    this.selectedReport = r;
  }




  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }


  toppings = new FormControl();
  toppingList: string[] = ['January', 'February', 'March', 'April', 'May', 'June'];


}
