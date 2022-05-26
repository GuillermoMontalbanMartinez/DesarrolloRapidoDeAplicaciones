import { Component, Input, OnInit } from '@angular/core';
import { RoutinesService } from '../routines-service.service';

@Component({
  selector: 'app-routines-saved',
  templateUrl: './routines-saved.component.html',
  styleUrls: ['./routines-saved.component.scss']
})
export class RoutinesSavedComponent implements OnInit {
  @Input() exerciseApiSavedBackend: any[] = [];
  routinesSaved : any[] = []; // rutinas guardas en la api nombre de la rutina y los exercises con el idExercise

  constructor(private routinesService: RoutinesService) { }

  ngOnInit(): void {
    this.fillArray();
  }

  // Rellenar el array rutinesSaved con los valores de la api a traves del metodo getRoutines()
  fillArray()  {
    this.routinesService.getRoutines().subscribe(
      data => {
        this.routinesSaved = data;
      });
  }

  deleteRoutine(nombre: string): void {
    let id = this.routinesSaved.find(routine => routine.name === nombre).id;
    this.routinesService.deleteRoutine(id).subscribe(data => {
      this.fillArray();
    });
  }
}
