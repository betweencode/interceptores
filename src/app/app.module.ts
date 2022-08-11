import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componentes1Component } from './componentes/componentes1/componentes1.component';
import { MiinterceptorService } from './componentes/services/miinterceptor.service';
import { Componente2Component } from './componentes/componente2/componente2.component';


@NgModule({
  declarations: [
    AppComponent,
    Componentes1Component,
    Componente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MiinterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
