import { Component, Input, OnInit } from '@angular/core';
import { Iexercise } from '../Iexercise';
import { SharevaluesService } from '../sharevalues.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  @Input() name: string = "";
  @Input() image: string = "";
  @Input() bodyPart: string = "";
  @Input() target: string = "";
  @Input() equipment: string = "";

  constructor(private shareValues: SharevaluesService) { }

  ngOnInit(): void {
  }

  loadExercise(): void {
    const exercise: Iexercise = {
      bodyPart: this.bodyPart,
      equipment: this.equipment,
      gifUrl: this.image,
      id: this.name,
      name: this.name,
      target: this.target
    }
    this.shareValues.addExerciseToArray(exercise);
  }


}
