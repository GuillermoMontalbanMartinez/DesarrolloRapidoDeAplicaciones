import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercisesUrl = 'https://exercisedb.p.rapidapi.com/exercises';
  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      // c00437a1d7msh44d1da88d6a4b4dp1df6f0jsn88d42cd0f5eb
      // 7fedecf61dmshb035ea6ad2217a7p1c2bf3jsnca7f3700c68f
      // 5e6c1a7648mshd5d8d3e863ea9eap1fe98fjsne6a4df7a039b
      // 0ea2658ba7mshf486770769af845p1d27edjsn0f4e526df266
      // 4ea12f3404msh0ed0deaedc06b14p18dfb5jsnddb43a6dcb9c
      // 56db385890msh7ea32a2cfa38fc0p142951jsnb2786a05aa13
      // ed828ddbfbmshebcfca7ddd55c72p155197jsnb45d7366da4b
      'X-RapidAPI-Key': 'ed828ddbfbmshebcfca7ddd55c72p155197jsnb45d7366da4',
    }
  };

  constructor(private http: HttpClient) {}

  getZonaMuscular(exercise: string): Observable<any> {
    const url = `${this.exercisesUrl}/bodyPart/${exercise}`;
    return this.http.get(url, this.options);
  }

  getExerciseForId(id: string) {
    const url = `${this.exercisesUrl}/exercise/${id}`;
    return this.http.get(url, this.options)
  }

}
