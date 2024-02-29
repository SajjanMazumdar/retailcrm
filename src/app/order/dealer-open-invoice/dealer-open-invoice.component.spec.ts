import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerOpenInvoiceComponent } from './dealer-open-invoice.component';

describe('DealerOpenInvoiceComponent', () => {
  let component: DealerOpenInvoiceComponent;
  let fixture: ComponentFixture<DealerOpenInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerOpenInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerOpenInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
