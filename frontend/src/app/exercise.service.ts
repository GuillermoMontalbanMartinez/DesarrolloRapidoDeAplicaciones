import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { exerciseInterface } from './exerciseInterface';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercisesUrl = 'https://exercisedb.p.rapidapi.com/exercises';
  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      // b
      'X-RapidAPI-Key': 'c00437a1d7msh44d1da88d6a4b4dp1df6f0jsn88d42cd0f5e'
    }
  };

  constructor( private http: HttpClient, private headers: HttpHeaders) {
   }

   getZonaMuscular(exercise: string): Observable<any> {
      //return this.http.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${{exercise}}`, this.options);
      return this.http.get<exerciseInterface>(this.exercisesUrl + '/bodyPart/' + exercise, this.options);
   }
}

