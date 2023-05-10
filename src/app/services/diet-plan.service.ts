import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DietPlanService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  apiUrl = "http://localhost:4500/"

  addDietPlan(model: any){
    return this.http.post(`${this.apiUrl}product`, JSON.stringify(model), { headers: this.headers });
  }

  removeDietPlan<T>(id: any): Observable<T>{
    return this.http.delete<T>(`${this.apiUrl}product/${id}`, { headers: this.headers });
  }
}




