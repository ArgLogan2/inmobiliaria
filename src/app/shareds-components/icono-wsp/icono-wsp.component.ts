import { Component, Input, OnInit } from '@angular/core';
import { Inmobiliaria } from 'src/app/modules/template/models/template';

@Component({
  selector: 'app-icono-wsp',
  templateUrl: './icono-wsp.component.html',
  styleUrls: ['./icono-wsp.component.css']
})
export class IconoWspComponent implements OnInit {

  @Input() inmobiliaria : Inmobiliaria[] = []; 
  constructor() { }

  ngOnInit(): void {
    console.log("salida desde icono-wsp.component", this.inmobiliaria);
  }

}
