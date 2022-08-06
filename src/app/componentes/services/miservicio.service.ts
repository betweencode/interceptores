import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService{

  constructor(private http:HttpClient) { }

  public getLista():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'personalizado':'siseñol'
      })
    };
      return this.http.get("https://swapi.dev/api/people/1/",httpOptions);
  }


}
