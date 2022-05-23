import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-routines-saved',
  templateUrl: './routines-saved.component.html',
  styleUrls: ['./routines-saved.component.scss']
})
export class RoutinesSavedComponent implements OnInit {
  @Input() nameRoutine: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  deleteRoutine(): void {
    console.log('delete');
  }
}
