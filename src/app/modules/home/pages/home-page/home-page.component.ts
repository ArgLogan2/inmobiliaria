import {Component, OnInit } from '@angular/core';
import { DataLoadHomeService } from '../../data-load-home.service';
import { Home, About, Banner } from '../../models/home';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  
  about:About[] = [];
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
      home[0].about.forEach(about => this.about.push(about))
      console.log("salida desde home page", home);
    })
  }

}