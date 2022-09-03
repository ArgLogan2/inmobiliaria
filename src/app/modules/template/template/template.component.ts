import { Component, OnInit } from '@angular/core';
import { DataLoadTemplateService } from '../data-load-template.service';
import { Inmobiliaria } from '../models/template';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  inmobiliaria : Inmobiliaria[] = [];
  constructor(private templateService:DataLoadTemplateService) { }

  ngOnInit(): void {
    this.getsInmobiliaria(); 
  }

  getsInmobiliaria() {
    
    this.templateService.getsInmobiliaria()
    .subscribe((inmobiliaria:Inmobiliaria[]) => {
      this.inmobiliaria.push(inmobiliaria[0]);
    
    })
  }
}
