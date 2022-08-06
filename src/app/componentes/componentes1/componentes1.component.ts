import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../services/miservicio.service';

@Component({
  selector: 'app-componentes1',
  templateUrl: './componentes1.component.html',
  styleUrls: ['./componentes1.component.scss']
})
export class Componentes1Component implements OnInit {

  public obj1:any = {};

  constructor() { }

  ngOnInit(): void {  
  }

}
