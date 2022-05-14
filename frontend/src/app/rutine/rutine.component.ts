import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutine',
  templateUrl: './rutine.component.html',
  styleUrls: ['./rutine.component.scss']
})
export class RutineComponent implements OnInit {
  rutinesSaved : any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
