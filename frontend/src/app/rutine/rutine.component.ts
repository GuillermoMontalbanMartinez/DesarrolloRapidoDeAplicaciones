import { Component, OnInit } from '@angular/core';
import { RoutinesService } from '../routines-service.service';

@Component({
  selector: 'app-rutine',
  templateUrl: './rutine.component.html',
  styleUrls: ['./rutine.component.scss']
})
export class RutineComponent implements OnInit {
  rutinesSaved : any[] = [];

  constructor(public routineService: RoutinesService ) { }

  ngOnInit(): void {
    this.fillArray();
  }

  // Rellenar el array rutinesSaved con los valores de la api a traves del metodo getRoutines()
  fillArray()  {
    this.routineService.getRoutines().subscribe(
      data => {
        this.rutinesSaved = data;
        console.log(this.rutinesSaved)
      }
    );

  }

}
