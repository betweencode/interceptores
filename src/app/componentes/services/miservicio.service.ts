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
        'Content-Type':  'application/json'
      })
    };
      return this.http.get("http://list.ly/api/v4/lists/1");
  }

  public getLista2():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
      return this.http.get("http://list.ly/api/v4/lists/1");
  }
}
