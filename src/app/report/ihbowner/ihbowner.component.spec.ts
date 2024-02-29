import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhbownerComponent } from './ihbowner.component';

describe('IhbownerComponent', () => {
  let component: IhbownerComponent;
  let fixture: ComponentFixture<IhbownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhbownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhbownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
