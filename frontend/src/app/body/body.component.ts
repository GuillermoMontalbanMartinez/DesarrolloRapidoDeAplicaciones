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
        'X-RapidAPI-Key': '6905b22d97msh0448444f3f9e16bp1a8733jsnd77925bf8e66'
      }
    };

    for (let i = 28; i <= 32; i++) {
    let url = `https://exercisedb.p.rapidapi.com/exercises/exercise/00` + i;
    let rest = await fetch(url, options);
    let exercise = await rest.json();
    this.exercises.push(exercise);
    }

  }

}
