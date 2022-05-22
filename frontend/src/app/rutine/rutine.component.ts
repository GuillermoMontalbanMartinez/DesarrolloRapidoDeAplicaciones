import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { RoutinesService } from '../routines-service.service';

@Component({
  selector: 'app-rutine',
  templateUrl: './rutine.component.html',
  styleUrls: ['./rutine.component.scss']
})
export class RutineComponent implements OnInit {
  routinesSaved : any[] = []; // rutinas guardas en la api nombre de la rutina y los ejercicios con el idExercise
  exerciseApiSavedBackend: any[] = []; // ejercicios con toda la info guardados en el backend
  constructor(public routineService: RoutinesService, private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.fillArray();
    this.getExercise();
    console.log(this.exerciseApiSavedBackend);
  }

  // Rellenar el array rutinesSaved con los valores de la api a traves del metodo getRoutines()
  fillArray()  {
    this.routineService.getRoutines().subscribe(
      data => {
        this.routinesSaved = data;
        // console.log(this.routinesSaved)
      }
    );

  }

  // Guardar los ejercicios por id en el array rutinesSaved con los valores de la api a traves del metodo getExercise()
  public getExercise() {
    this.exerciseApiSavedBackend = [];
      // recorrer this.routinesSaved y coger el idExercise del array
      for (let i = 0; i < this.routinesSaved.length; i++) {
        for (let j = 0; j < this.routinesSaved[i].length; j++) {
        this.exerciseService.getExerciseForId(this.routinesSaved[i].exercises[j].idExercise).subscribe(data => {
          console.log(data);
          this.exerciseApiSavedBackend.push(data);
          console.log(this.exerciseApiSavedBackend);
        });
        console.log(this.exerciseApiSavedBackend);
      }
    }

  }

}
