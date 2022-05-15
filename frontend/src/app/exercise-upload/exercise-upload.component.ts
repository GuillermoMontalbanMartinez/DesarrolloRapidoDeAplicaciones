import { Component, OnInit } from '@angular/core';
import { SharevaluesService } from '../sharevalues.service';

@Component({
  selector: 'app-exercise-upload',
  templateUrl: './exercise-upload.component.html',
  styleUrls: ['./exercise-upload.component.scss']
})
export class ExerciseUploadComponent implements OnInit {

  constructor(private shareValues: SharevaluesService) { }

  ngOnInit(): void {
  }

}
