import {Component, OnInit } from '@angular/core';
import { DataLoadHomeService } from '../../data-load-home.service';
import { Home, About, Banner } from '../../models/home';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

// Así se cargaban los datos antes de la inyección del servicio
/*
  path: string = "../../../../../assets/img/";
  imgList = ['LaFalda.jpg','VillaGiardino2.jpg','VillaGiardino1.jpg','LaFalda2.jpg','LaCumbre.jpg','LosCocos.jpg','CapillaDelMonte.jpg','CerroUritorco.jpg','CarlosPaz.jpg','cosquin1.jpg','cerro_la_cruz.jpg','vista-de-la-ciudad-de-villa-carlos-paz-y-lago-san-roque.jpg'];
  index: number = 0;
  image: string = "";
  constructor() { }

  ngOnInit(): void {

    setInterval(() =>{
      this.image = this.path + this.imgList[this.index];
      //console.log(this.image); 
      this.index++;
      if (this.index == this.imgList.length){this.index =0;}
    }, 5000);

  }
*/

// Así se cargan los datos luego de la inyección del servicio, falta hacer los bindings
  
  abouts:About[] = [];
  banner:Banner = {titleBanner: '', urlImgBanner: []} 
  constructor(private homeService:DataLoadHomeService) {}
  
  ngOnInit(): void {
    this.getHome();
  }

  getHome(){
    this.homeService.getHome()
    .subscribe((home:Home[]) => {
      this.banner.titleBanner = home[0].titleBanner;
      this.banner.urlImgBanner = home[0].urlImgBanner;
      home[0].about.forEach(about => this.abouts.push(about))
      console.log("salida desde home page", home);
    })
  }
}