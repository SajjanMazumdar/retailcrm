import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDealerComponent } from './sub-dealer.component';

describe('SubDealerComponent', () => {
  let component: SubDealerComponent;
  let fixture: ComponentFixture<SubDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
