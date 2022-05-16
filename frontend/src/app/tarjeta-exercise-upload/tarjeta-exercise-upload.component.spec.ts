import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaExerciseUploadComponent } from './tarjeta-exercise-upload.component';

describe('TarjetaExerciseUploadComponent', () => {
  let component: TarjetaExerciseUploadComponent;
  let fixture: ComponentFixture<TarjetaExerciseUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaExerciseUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaExerciseUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
