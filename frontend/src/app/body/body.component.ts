import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  exercises: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getExercise();
  }

  public async getExercise() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        // b
        'X-RapidAPI-Key': 'c00437a1d7msh44d1da88d6a4b4dp1df6f0jsn88d42cd0f5e'
      }
    };

    for (let i = 28; i <= 32; i++) {
    let url = `https://exercisedb.p.rapidapi.com/exercises/exercise/00` +i;
    let rest = await fetch(url, options);
    let exercise = await rest.json();
    this.exercises.push(exercise);
    }
console.log(this.exercises);
  }

}
