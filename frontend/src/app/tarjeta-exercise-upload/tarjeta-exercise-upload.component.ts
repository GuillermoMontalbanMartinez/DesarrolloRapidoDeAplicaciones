import { Component, Input, OnInit } from '@angular/core';
import { SharevaluesService } from '../sharevalues.service';

@Component({
  selector: 'app-tarjeta-exercise-upload',
  templateUrl: './tarjeta-exercise-upload.component.html',
  styleUrls: ['./tarjeta-exercise-upload.component.scss'],
})
export class TarjetaExerciseUploadComponent implements OnInit {
  @Input() name: string = '';
  constructor(public shareValues: SharevaluesService) {}

  ngOnInit(): void {}
}
