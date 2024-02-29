import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonListComponent } from './mason-list.component';

describe('MasonListComponent', () => {
  let component: MasonListComponent;
  let fixture: ComponentFixture<MasonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
