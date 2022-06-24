import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/home-page/home-page.component';
import { SalesPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/sales-page/sales-page.component';
import { ShoppingPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/shopping-page/shopping-page.component';
import { AppraisalsPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/appraisals-page/appraisals-page.component';
import { AuctionsPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/auctions-page/auctions-page.component';
import { RentOwnerPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/rent-owner-page/rent-owner-page.component';
import { RentTenantPageComponent } from 'C:/Users/roder/Desktop/Inmobiliaria/inmobiliaria/src/app/modules/rent-tenant-page/rent-tenant-page.component';

const routes: Routes = [
  {path: '',
  children:[
    {path:'home', component:HomePageComponent},
    {path:'sales', component:SalesPageComponent},
    {path:'shopping', component:ShoppingPageComponent},
    {path:'appraisals', component:AppraisalsPageComponent},
    {path:'auctions', component:AuctionsPageComponent},
    {path:'rent-owner', component:RentOwnerPageComponent},
    {path:'rent-tenant', component:RentTenantPageComponent},
    {path:'**', redirectTo:"home" }
  ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TemplateRoutingModule { }
