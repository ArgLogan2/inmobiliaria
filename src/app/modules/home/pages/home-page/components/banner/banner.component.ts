import {Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/modules/home/models/home';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input () banners:Banner = {titleBanner: '', urlImgBanner: []}

  image: string = "";
  constructor() {}

  ngOnInit(): void {
    this.setImgBanner(); 
  }

  setImgBanner(){
    let index:number = 0;
    setInterval(() =>{
      this.image = this.banners.urlImgBanner[index];
      index++;
      if (index == this.banners.urlImgBanner.length){index = 0;}
    }, 5000);
  }

}