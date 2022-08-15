import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerComponent } from './pages/home-page/components/banner/banner.component';
import { AboutComponent } from './pages/home-page/components/about/about.component';


@NgModule({
  declarations: [
    HomePageComponent,
    BannerComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
