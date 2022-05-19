import { Injectable } from '@angular/core';
import { Iexercise } from './Iexercise';
import { IExercisebackend } from './IExerciseBackend';

@Injectable({
  providedIn: 'root'
})
export class SharevaluesService {
  private exerciseUpload         : Iexercise[] = [];
  private exerciseUploadBackend  : IExercisebackend[] = [];

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
    if (this.exerciseUpload.length < 5 && this.exerciseUpload.find(x => x.id === valueToBeAdded.id) === undefined) {
      this.exerciseUpload.push(valueToBeAdded);
    }
  }

  getExerciseUploadBackend(): IExercisebackend[] {
    for (let exercise of this.exerciseUpload) {
      const exerciseForBackend : IExercisebackend = {
        idExercise: exercise.id
      }
  }


  getExerciseUpload(): Iexercise[] {
    return this.exerciseUpload;
  }


}
