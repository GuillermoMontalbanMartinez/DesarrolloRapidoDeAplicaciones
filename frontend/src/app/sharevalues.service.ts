import { Injectable } from '@angular/core';
import { Iexercise } from './Iexercise';
import { IExercisebackend } from './IExerciseBackend';

@Injectable({
  providedIn: 'root'
})

// Clase que contiene los valores que se compartirán entre los componentes de la vista ejercicios
export class SharevaluesService {
  private exerciseUpload         : Iexercise[] = [];
  private exerciseUploadBackend  : IExercisebackend[] = [];

  constructor() { }

  // Agregar ejercicios al componente ejercicios cargados
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

  // Crear un array con los id del array exerciseUpload en exerciseUploadBackend
  convertExerciseToExerciseBackend(): any {
    console.log(this.exerciseUpload);
    this.exerciseUploadBackend = [];
    this.exerciseUpload.forEach(element => {
      const exerciseBackend: IExercisebackend = {
        idExercise: element.id,
      }
      this.exerciseUploadBackend.push(exerciseBackend);
    });
    return this.exerciseUploadBackend;
  }

  // Devuelve los ejercicios cargados en el componenente ejercicios cargados (ejercicios-cargados.component.ts)
  getExerciseUpload(): Iexercise[] {
    return this.exerciseUpload;
  }

  // Dejar array exerciseUpload vacio
  cleanExerciseUpload() {
    this.exerciseUpload = [];
  }

}
