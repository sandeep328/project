import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
   httpOptions: any;




  constructor(private http:HttpClient) {

    this.httpOptions = {

      headers: new HttpHeaders({

      'Content-Type': 'application/json',

      'Authorization': "Bearer "+sessionStorage.getItem("token")

      })

      }

  }

  getForum():Observable<any>{

    return this.http.get("http://localhost:4500/forum",this.httpOptions)

  }

  postForum(obj:any):Observable<any>{

    return this.http.post("http://localhost:4500/forum/",obj,this.httpOptions)

  }

 
}
