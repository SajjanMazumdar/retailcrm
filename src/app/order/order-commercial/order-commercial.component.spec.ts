import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCommercialComponent } from './order-commercial.component';

describe('OrderCommercialComponent', () => {
  let component: OrderCommercialComponent;
  let fixture: ComponentFixture<OrderCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
