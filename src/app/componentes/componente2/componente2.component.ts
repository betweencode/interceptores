import { Component, OnInit } from '@angular/core';
import { Miservicioscomponente2Service } from '../services/miservicioscomponente2.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component implements OnInit {

  public obj1:any = {};

  constructor(private peticion2Services:Miservicioscomponente2Service) { }

  ngOnInit(): void {

    this.peticion2Services.peticionComponente().subscribe(datos =>{
      console.log(datos,"santiago");
      this.obj1 = datos;
    });
  }

}
