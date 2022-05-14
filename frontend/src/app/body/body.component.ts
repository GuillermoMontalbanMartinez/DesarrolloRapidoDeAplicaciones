import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  exercises: any[] = [];
  idExercises: string = '';
  constructor(private exerciseService: ExerciseService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    //this.getZonaMuscular('cardio'); // poner por defecto en la aplicación
    this.router.queryParams.subscribe(params => {
      this.idExercises = params['id'];
      this.getZonaMuscular(this.idExercises);
    });
  }



  public async getZonaMuscular(bodypart: string) {
    this.exercises = [];
    this.exerciseService.getZonaMuscular(bodypart).subscribe(data => {
      this.exercises.push(data);
      console.log(this.exercises);
      console.log(data);
    });
  }
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
