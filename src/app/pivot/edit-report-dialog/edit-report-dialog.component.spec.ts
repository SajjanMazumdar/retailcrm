import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReportDialogComponent } from './edit-report-dialog.component';

describe('EditReportDialogComponent', () => {
  let component: EditReportDialogComponent;
  let fixture: ComponentFixture<EditReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
