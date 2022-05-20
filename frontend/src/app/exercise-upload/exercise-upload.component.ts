import { Component, Input, OnInit } from '@angular/core';
import { Iroutine } from '../Iroutine';
import { RoutinesService } from '../routines-service.service';
import { SharevaluesService } from '../sharevalues.service';

@Component({
  selector: 'app-exercise-upload',
  templateUrl: './exercise-upload.component.html',
  styleUrls: ['./exercise-upload.component.scss'],
})

export class ExerciseUploadComponent implements OnInit {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() bodyPart: string = '';
  @Input() target: string = '';
  @Input() equipment: string = '';
  nameRoutine: string = '';

  Iroutine = {
    name: '',
    exercises: this.shareValues.getExerciseUpload(),
  } as unknown as Iroutine;

  constructor(public shareValues: SharevaluesService, private routineService: RoutinesService) {}

  ngOnInit(): void {}

  saveRoutine(): void {
    this.Iroutine.name = this.nameRoutine;
    this.Iroutine.exercises = this.shareValues.convertExerciseToExerciseBackend();
    this.routineService.saveRoutine(this.Iroutine).subscribe();
  }
}
