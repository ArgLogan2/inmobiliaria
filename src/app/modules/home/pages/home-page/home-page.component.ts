import {Component, OnInit } from '@angular/core';
import { DataLoadHomeService } from '../../data-load-home.service';
import { Home } from '../../models/home';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  
  // banner:Banner = {titleBanner: '', urlImgBanner: []};

  // path: string = "../../../../../assets/img/";
  // imgList = ['LaFalda.jpg','VillaGiardino2.jpg','VillaGiardino1.jpg','LaFalda2.jpg','LaCumbre.jpg','LosCocos.jpg','CapillaDelMonte.jpg','CerroUritorco.jpg','CarlosPaz.jpg','cosquin1.jpg','cerro_la_cruz.jpg','vista-de-la-ciudad-de-villa-carlos-paz-y-lago-san-roque.jpg'];
  // index: number = 0;
  // image: string = "";
  constructor(private homeService:DataLoadHomeService) { 
    
  }
  
  ngOnInit(): void {
    // this.about = "Funciona desde ngOnInit";

    // setInterval(() =>{
    //   this.image = this.path + this.imgList[this.index];
    //   // console.log(this.image); 
    //   this.index++;
    //   if (this.index == this.imgList.length){this.index =0;}
    // }, 5000);
    this.getHome();
    

  }

  getHome(){
    this.homeService.getHome()
    .subscribe((home:Home[]) => {
      console.log("salida desde home page", home);
    })
  }

}