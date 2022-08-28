import { Component, OnInit } from '@angular/core';
import { DataLoadHomeService } from '../../home/data-load-home.service';
import { Inmobiliaria } from '../../home/models/home';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  inmobiliaria : Inmobiliaria[] = []; 
  constructor(private homeService:DataLoadHomeService) { }

  ngOnInit(): void {
    // this.getsInmobiliaria(); 
  }

  getsInmobiliaria() {
    
    this.homeService.getsInmobiliaria()
    .subscribe((inmobiliaria:Inmobiliaria[]) => {
      this.inmobiliaria = inmobiliaria; 
      console.log(this.inmobiliaria, "datos desde el template");
    })
  }
}
