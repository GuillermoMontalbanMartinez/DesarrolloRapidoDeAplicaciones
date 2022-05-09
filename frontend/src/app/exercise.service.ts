import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercisesUrl = 'https://exercisedb.p.rapidapi.com/exercises';
  constructor( private http: HttpClient, private headers: HttpHeaders) {
   }
}
