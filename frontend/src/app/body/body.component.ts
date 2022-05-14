import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseService } from '../exercise.service';
import { exerciseInterface } from '../exerciseInterface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  exercises: any[] = []; // ejercicios de las tarjetas
  exercisesLoaded: exerciseInterface[] = []; // ejercicios cargados para el componente exercise-upload
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

