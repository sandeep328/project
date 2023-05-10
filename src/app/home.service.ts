import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    getproducts() {
      throw new Error('Method not implemented.');
    }
    getProducts() {
      throw new Error('Method not implemented.');
    }

  
    constructor(private http:HttpClient) { }
  
    getDairyProducts():Observable<any> {
      return this.http.get("http://localhost:4500/product");
  
    } 
    getDetails(id:any): Observable<any> {
      return this.http.get("http://localhost:4500/product/"+id);
   }
   getslider():Observable<any> {
    return this.http.get("http://localhost:4500/product");
   }
  
  
  }

