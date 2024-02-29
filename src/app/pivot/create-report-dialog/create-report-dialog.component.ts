import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-report-dialog',
  templateUrl: './create-report-dialog.component.html',
  styleUrls: ['./create-report-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateReportDialogComponent implements OnInit {

  title = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<CreateReportDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void { }


  /**
   * Method for closing the dialog
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }

}
