import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentTenantRoutingModule } from './rent-tenant-routing.module';
import { RentTenantPageComponent } from './pages/rent-tenant-page/rent-tenant-page.component';


@NgModule({
  declarations: [
    RentTenantPageComponent
  ],
  imports: [
    CommonModule,
    RentTenantRoutingModule
  ]
})
export class RentTenantModule { }
