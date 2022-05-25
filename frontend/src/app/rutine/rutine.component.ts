import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ExerciseService } from '../exercise.service';
import { RoutinesService } from '../routines-service.service';

@Component({
  selector: 'app-rutine',
  templateUrl: './rutine.component.html',
  styleUrls: ['./rutine.component.scss']
})
export class RutineComponent implements OnInit {
  routinesSaved : any[] = []; // rutinas guardas en la api nombre de la rutina y los exercises con el idExercise
  exerciseApiSavedBackend: any[] = []; // exercises con toda la info guardados en el backend

  constructor(public routineService: RoutinesService, private exerciseService: ExerciseService) { }

  ngOnInit(): void {

    this.getExercise();
  }

  // Rellenar el array rutinesSaved con los valores de la api a traves del metodo getRoutines()
  fillArray()  {


  }

  // Guardar los exercises por id en el array rutinesSaved con los valores de la api a traves del metodo getExercise()
  async getExercise() {

    this.routineService.getRoutines().subscribe(
      async data => {
        this.routinesSaved = data;
        // console.log(this.routinesSaved)

    this.exerciseApiSavedBackend = [];
      // recorrer this.routinesSaved y coger el idExercise del array
      for (let i = 0; i < this.routinesSaved.length; i++) {
        for (let j = 0; j < this.routinesSaved[i].exercises.length; j++) {
          const aux =  this.exerciseService.getExerciseForId(this.routinesSaved[i].exercises[j].idExercise).subscribe(
            data2 => {
              if(this.exerciseApiSavedBackend.some((e : {name:String, exercises : []})  => e.name === this.routinesSaved[i].name)){
                this.exerciseApiSavedBackend.find((e : {name:String, exercises : []})  =>
                e.name === this.routinesSaved[i].name).exercises.push(this.routinesSaved[i].exercises[j]);
              } else {
                this.exerciseApiSavedBackend.push({rutina: this.routinesSaved[i].name, exercises: []});
              }
              console.log(data2);
              console.log(this.routinesSaved);
              console.log(this.exerciseApiSavedBackend);

              // this.exerciseApiSavedBackend[i] =  await lastValueFrom(aux);
              // console.log(this.exerciseApiSavedBackend);
            }
          );

       }
      }

    }
    );
  }

  delay(milliseconds : number) {
    return new Promise(resolve => setTimeout( resolve, milliseconds));
  }



}

/**
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
*/


/*******************************
 *
 *
 */
