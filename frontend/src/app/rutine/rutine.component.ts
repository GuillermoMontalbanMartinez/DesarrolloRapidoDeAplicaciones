import { Component, OnInit } from '@angular/core';
import { RoutinesService } from '../routines-service.service';

@Component({
  selector: 'app-rutine',
  templateUrl: './rutine.component.html',
  styleUrls: ['./rutine.component.scss']
})
export class RutineComponent implements OnInit {
  routinesSaved : any[] = [];

  constructor(public routineService: RoutinesService ) { }

  ngOnInit(): void {
    this.fillArray();
  }

  // Rellenar el array rutinesSaved con los valores de la api a traves del metodo getRoutines()
  fillArray()  {
    this.routineService.getRoutines().subscribe(
      data => {
        this.routinesSaved = data;
        console.log(this.routinesSaved)
      }
    );

  }

}
