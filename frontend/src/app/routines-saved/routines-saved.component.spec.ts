import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesSavedComponent } from './routines-saved.component';

describe('RoutinesSavedComponent', () => {
  let component: RoutinesSavedComponent;
  let fixture: ComponentFixture<RoutinesSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutinesSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
