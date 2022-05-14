import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { exerciseInterface } from './exerciseInterface';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercisesUrl = 'https://exercisedb.p.rapidapi.com/exercises';
  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      // b
      'X-RapidAPI-Key': 'c00437a1d7msh44d1da88d6a4b4dp1df6f0jsn88d42cd0f5eb',
    },
  };

  constructor(private http: HttpClient) {}

  getZonaMuscular(exercise: string): Observable<any> {
    const url = `${this.exercisesUrl}/bodyPart/${exercise}`;
    return this.http.get(url, this.options);
  }

}
