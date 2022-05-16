import { Component, Input, OnInit } from '@angular/core';
import { Iexercise } from '../Iexercise';
import { SharevaluesService } from '../sharevalues.service';

@Component({
  selector: 'app-exercise-upload',
  templateUrl: './exercise-upload.component.html',
  styleUrls: ['./exercise-upload.component.scss']
})
export class ExerciseUploadComponent implements OnInit {
  @Input() name: string = "";
  @Input() image: string = "";
  @Input() bodyPart: string = "";
  @Input() target: string = "";
  @Input() equipment: string = "";

  constructor(public shareValues: SharevaluesService) { }

  ngOnInit(): void {
  }

}
