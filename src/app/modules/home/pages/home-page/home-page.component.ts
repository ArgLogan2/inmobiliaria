import { Component, OnInit } from '@angular/core';
import { DataLoadHomeService } from '../../data-load-home.service';
import { Inmobiliaria } from '../../models/home';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  public inmobiliaria : Inmobiliaria[] = []; 
  path: string = "../../../../../assets/img/";
  imgList = ['LaFalda.jpg','VillaGiardino2.jpg','VillaGiardino1.jpg','LaFalda2.jpg','LaCumbre.jpg','LosCocos.jpg','CapillaDelMonte.jpg','CerroUritorco.jpg','CarlosPaz.jpg','cosquin1.jpg','cerro_la_cruz.jpg','vista-de-la-ciudad-de-villa-carlos-paz-y-lago-san-roque.jpg'];
  index: number = 0;
  image: string = "";
  constructor(private homeService:DataLoadHomeService) { }

  ngOnInit(): void {

    setInterval(() =>{
      this.image = this.path + this.imgList[this.index];
      // console.log(this.image); 
      this.index++;
      if (this.index == this.imgList.length){this.index =0;}
    }, 5000);

    this.getsInmobiliaria();

  }

  getsInmobiliaria(){
    this.homeService.getsInmobiliaria()
    .subscribe((inmobiliaria:Inmobiliaria[]) => {
      this.inmobiliaria = inmobiliaria; 
      console.log(this.inmobiliaria);
    })
>>>>>>> 56281a01a10dcee09dd1abde4e2c8774f97925f7
  }
}