import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  path: string = "../../../../../assets/img/";
  imgList = ['aerosilla.jpg','cerro_la_cruz.jpg','gente_rio.jpg','reloj_cucu.jpg','aerosilla2.png','hidropedales.jpg','tirolesa.jpeg','villa-carlos-paz.jpg','hidropedales2.jpg','vista-de-la-ciudad-de-villa-carlos-paz-y-lago-san-roque.jpg'];
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
