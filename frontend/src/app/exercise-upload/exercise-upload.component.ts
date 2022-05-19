import { Component, Input, OnInit } from '@angular/core';
import { Iexercise } from '../Iexercise';
import { Iroutine } from '../Iroutine';
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

  constructor(public shareValues: SharevaluesService) {}

  ngOnInit(): void {}

  saveRoutine(): void {
    this.Iroutine.name = this.nameRoutine;
    this.shareValues.postRoutine(this.Iroutine).subscribe(data => {
      console.log(data);
    }
  }
}
