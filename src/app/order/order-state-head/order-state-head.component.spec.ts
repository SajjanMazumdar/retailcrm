import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStateHeadComponent } from './order-state-head.component';

describe('OrderStateHeadComponent', () => {
  let component: OrderStateHeadComponent;
  let fixture: ComponentFixture<OrderStateHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStateHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStateHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
