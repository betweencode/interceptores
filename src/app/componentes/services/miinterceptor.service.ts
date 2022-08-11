import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiinterceptorService  implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    req = req.clone({
      headers:new HttpHeaders({
          'Content-Type':'application/json',
          'cabecera1':'betweencode',
          'cabecera2':'micanal',
          'Authorization':'Bearer jwt(imagina qque esta encriptdo)'
      })
    });

    return next.handle(req);
  }
}
