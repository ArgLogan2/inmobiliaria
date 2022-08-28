import { Component, Input, OnInit } from '@angular/core';
import { Home } from 'src/app/modules/home/models/home';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
 
  @Input () about:Home = {titleBanner: '', urlImgBanner: [], about: []};
  constructor() {
  }
  
  ngOnInit(): void {
    
    console.log("salida desde about", this.about);
  }
  

}
