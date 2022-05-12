import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  exercises: any[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    // this.getExercise();
    this.getZonaMuscular('chest');
  }

  /**
  public async getExercise() {


    for (let i = 28; i <= 28; i++) {
    let url = `https://exercisedb.p.rapidapi.com/exercises/exercise/00` +i;
    let rest = await fetch(url, options);
    let exercise = await rest.json();
    this.exercises.push(exercise);
    }
    console.log(this.exercises);

  }

  */

  getZonaMuscular(exercise: string) {
    this.exerciseService.getZonaMuscular('chest').subscribe(data => {
      this.exercises.push(data);
      console.log(this.exercises);
      console.log(data);
    });
  }
}
