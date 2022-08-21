import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  path: string = "../../../../../assets/img/";
  imgList = ['LaFalda.jpg','VillaGiardino2.jpg','VillaGiardino1.jpg','LaFalda2.jpg','LaCumbre.jpg','LosCocos.jpg','CapillaDelMonte.jpg','CerroUritorco.jpg','CarlosPaz.jpg','cosquin1.jpg','cerro_la_cruz.jpg','vista-de-la-ciudad-de-villa-carlos-paz-y-lago-san-roque.jpg'];
  index: number = 0;
  image: string = "";
  constructor() { }

  ngOnInit(): void {
    setInterval(() =>{
      this.image = this.path + this.imgList[this.index];
      // console.log(this.image);
      this.index++;
      if (this.index == this.imgList.length){this.index =0;}
    }, 5000);

  }
}