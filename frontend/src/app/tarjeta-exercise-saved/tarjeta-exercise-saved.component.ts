import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-exercise-saved',
  templateUrl: './tarjeta-exercise-saved.component.html',
  styleUrls: ['./tarjeta-exercise-saved.component.scss']
})
export class TarjetaExerciseSavedComponent implements OnInit {
  @Input() name: string = '';
  @Input() bodyPart: string = '';
  @Input() gifUrl: string = '';
  @Input() target: string = '';
  @Input() equipment: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
