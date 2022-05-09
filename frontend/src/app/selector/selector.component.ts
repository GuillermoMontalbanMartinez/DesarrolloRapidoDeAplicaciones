import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})

export class SelectorComponent implements OnInit {
  exerciseChoose : Exercise = {
    value: '',
    viewValue: ''
  }
  exercises: Exercise[] = [
    {value: 'back', viewValue: 'Espalda'},
    {value: 'cardio', viewValue: 'Cardio'},
    {value: 'chest', viewValue: 'Pecho'},
    {value: 'lower%20arms', viewValue: 'Brazos Inferior'},
    {value: 'lower%20legs', viewValue: 'Piernas Inferior'},
    {value: 'neck', viewValue: 'Cuello'},
    {value: 'shoulders', viewValue: 'Hombros'},
    {value: 'upper%20arms', viewValue: 'brazos'},
    {value: 'upper%20legs', viewValue: 'Piernas Superior'},
    {value: 'waist', viewValue: 'Cintura'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  chooseOption(option: Exercise) {
    this.exerciseChoose.value = option.value;
    this.exerciseChoose.viewValue = option.viewValue;
    console.log(this.exerciseChoose);
  }

}

