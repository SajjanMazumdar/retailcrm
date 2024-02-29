import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhbOwnerListComponent } from './ihb-owner-list.component';

describe('IhbOwnerListComponent', () => {
  let component: IhbOwnerListComponent;
  let fixture: ComponentFixture<IhbOwnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhbOwnerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhbOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
