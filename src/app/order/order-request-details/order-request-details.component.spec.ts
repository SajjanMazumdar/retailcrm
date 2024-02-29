import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRequestDetailsComponent } from './order-request-details.component';

describe('OrderRequestDetailsComponent', () => {
  let component: OrderRequestDetailsComponent;
  let fixture: ComponentFixture<OrderRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
