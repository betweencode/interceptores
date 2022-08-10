import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  constructor(private http:HttpClient) { }

  public getLista():Observable<any>{
      
      return this.http.get("http://list.ly/api/v4/lists/1").pipe(map((s:any)=>s.list));
  }

  
}
