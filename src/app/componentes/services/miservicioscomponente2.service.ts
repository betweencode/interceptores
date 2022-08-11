import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Miservicioscomponente2Service {

  constructor(private http:HttpClient,private httpbackend:HttpBackend) { 
    this.http = new HttpClient(httpbackend);
  }

  public peticionComponente(){
    const httpOption = {
      headers:new HttpHeaders({
        'CABECERASNUEVASININTERCEPTOR':'SI SE PUEDE SIN INTERCEPTOR'
      })
    };
    return this.http.get("/entrada/api/v4/lists/1",httpOption).pipe(map((datos:any)=> datos.list));
  }
}
