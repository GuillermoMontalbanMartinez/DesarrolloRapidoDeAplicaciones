import { Injectable } from '@angular/core';
import { Iexercise } from './Iexercise';

@Injectable({
  providedIn: 'root'
})
export class SharevaluesService {
  private exerciseUpload:Iexercise[] = [];

  constructor() { }

  addExerciseToArray(valor: any) {
    const valueToBeAdded : Iexercise = {
      bodyPart: valor.bodyPart,
      equipment: valor.equipment,
      gifUrl: valor.gifUrl,
      id: valor.id,
      name: valor.name,
      target: valor.target
    }
    if (this.exerciseUpload.length <= 5) {
      this.exerciseUpload.push(valueToBeAdded);
    }
  }

  getExerciseUpload(): Iexercise[] {
    return this.exerciseUpload;
  }


}
