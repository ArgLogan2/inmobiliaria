import { Component, Input, OnInit } from '@angular/core';
import { Inmobiliaria } from 'src/app/modules/template/models/template';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() inmobiliaria : Inmobiliaria[] = []; 

  public pathImg:string = "./src/images/goalkeeper-F100031461.jpg";
  constructor() { }

  ngOnInit(): void {
    console.log("salida desde footer.component", this.inmobiliaria);
  }

}
