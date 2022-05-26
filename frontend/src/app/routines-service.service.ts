import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {
  private url = 'http://localhost:8081/api/routines';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  // Devuelve las rutinas guardas en la base de datos
  getRoutines(): Observable<any> {
    return this.http.get(this.url);
  }

  // Guarda una rutina en la base de datos
  saveRoutine(routine: any): Observable<any> {
    return this.http.post(this.url, routine, this.httpOptions);
  }

  // Eliminar rutina de la base de base de datos
  deleteRoutine(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, this.httpOptions);
  }


}
