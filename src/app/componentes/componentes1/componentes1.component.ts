import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../services/miservicio.service';

@Component({
  selector: 'app-componentes1',
  templateUrl: './componentes1.component.html',
  styleUrls: ['./componentes1.component.scss']
})
export class Componentes1Component implements OnInit {

  public miobj:any = {};
  public editar:boolean = false;

  constructor(private miservicioPrd:MiservicioService) { }

  ngOnInit(): void {  
    this.miservicioPrd.getLista().subscribe(datos =>{
      this.miobj = datos;
  });
    this.miservicioPrd.getLista1().subscribe(datos =>{
        this.miobj = datos;
    });

    this.miservicioPrd.getLista2().subscribe(datos =>{
      this.miobj = datos;
  });

  this.miservicioPrd.getLista3().subscribe(datos =>{
    this.miobj = datos;
});

   
  }

}
