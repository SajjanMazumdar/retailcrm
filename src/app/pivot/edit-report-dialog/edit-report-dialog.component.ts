import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-report-dialog',
  templateUrl: './edit-report-dialog.component.html',
  styleUrls: ['./edit-report-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditReportDialogComponent implements OnInit {

  title = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<EditReportDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  /**
   * Method for closing the dialog
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }

}
