import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDealerListComponent } from './sub-dealer-list.component';

describe('SubDealerListComponent', () => {
  let component: SubDealerListComponent;
  let fixture: ComponentFixture<SubDealerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDealerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDealerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
