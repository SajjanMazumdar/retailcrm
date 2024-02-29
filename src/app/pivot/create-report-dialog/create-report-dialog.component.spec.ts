import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportDialogComponent } from './create-report-dialog.component';

describe('CreateReportDialogComponent', () => {
  let component: CreateReportDialogComponent;
  let fixture: ComponentFixture<CreateReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
