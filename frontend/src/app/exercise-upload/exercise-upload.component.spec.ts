import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseUploadComponent } from './exercise-upload.component';

describe('ExerciseUploadComponent', () => {
  let component: ExerciseUploadComponent;
  let fixture: ComponentFixture<ExerciseUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
