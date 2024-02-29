import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhbOwnerComponent } from './ihb-owner.component';

describe('IhbOwnerComponent', () => {
  let component: IhbOwnerComponent;
  let fixture: ComponentFixture<IhbOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhbOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhbOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
