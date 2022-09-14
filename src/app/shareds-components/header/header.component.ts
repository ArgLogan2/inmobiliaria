import { Component, Input, OnInit } from '@angular/core';
import { Inmobiliaria } from 'src/app/modules/template/models/template';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() inmobiliaria : Inmobiliaria[] = [];
  constructor() {}

  ngOnInit(): void {
    
    console.log("salida desde header.component", this.inmobiliaria);
  }

}
