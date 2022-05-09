import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  @Input() name: string = "";
  @Input() bodyPart: string = "";
  @Input() target: string = "";
  @Input() equipment: string = "";

  constructor() { }

  ngOnInit(): void {
  }



}
