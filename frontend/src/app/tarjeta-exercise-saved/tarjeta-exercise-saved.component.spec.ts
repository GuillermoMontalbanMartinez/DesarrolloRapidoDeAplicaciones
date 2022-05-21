import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaExerciseSavedComponent } from './tarjeta-exercise-saved.component';

describe('TarjetaExerciseSavedComponent', () => {
  let component: TarjetaExerciseSavedComponent;
  let fixture: ComponentFixture<TarjetaExerciseSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaExerciseSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaExerciseSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
