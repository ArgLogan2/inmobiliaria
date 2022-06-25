import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  // sistema de rutas hijas para cambiar vistas en el template
    {path:'inicio',
    loadChildren:() => import('../home/home.module').then(m => m.HomeModule)},

    {path:'ventas',
    loadChildren:() => import('../sales/sales.module').then(m => m.SalesModule)},
   
    {path:'compras',
    loadChildren:() => import('../shopping/shopping.module').then(m => m.ShoppingModule)},

    {path:'tasaciones',
    loadChildren:() => import('../appraisals/appraisals.module').then(m => m.AppraisalsModule)},
    
    {path:'subastas',
    loadChildren:() => import('../auctions/auctions.module').then(m => m.AuctionsModule)},

    {path:'propietario-alquila',
    loadChildren:() => import('../rent-owner/rent-owner.module').then(m => m.RentOwnerModule)},

    {path:'inquilino-alquila',
    loadChildren:() => import('../rent-tenant/rent-tenant.module').then(m => m.RentTenantModule)},

    {path:'**', redirectTo:"inicio" }
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)  // importante colocar que son rutas hijas
  ],
  exports: [RouterModule]  // importante exportar el sistema de rutas para otros módulos
})
export class TemplateRoutingModule { }
