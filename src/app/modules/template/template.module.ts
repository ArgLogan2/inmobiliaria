import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/home-page/home-page.component';
import { SalesPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/sales-page/sales-page.component';
import { ShoppingPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/shopping-page/shopping-page.component';
import { TemplateRoutingModule } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/template/template-routing.module';
import { AppraisalsPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/appraisals-page/appraisals-page.component';
import { AuctionsPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/auctions-page/auctions-page.component';
import { RentOwnerPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/rent-owner-page/rent-owner-page.component';
import { RentTenantPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/rent-tenant-page/rent-tenant-page.component';
import { HomeBodyComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/home-page/home-body/home-body.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SalesPageComponent,
    ShoppingPageComponent,
    AppraisalsPageComponent,
    AuctionsPageComponent,
    RentOwnerPageComponent,
    RentTenantPageComponent,
    HomeBodyComponent 
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }