import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerialListComponent } from './generial-list.component';

describe('GenerialListComponent', () => {
  let component: GenerialListComponent;
  let fixture: ComponentFixture<GenerialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerialListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
