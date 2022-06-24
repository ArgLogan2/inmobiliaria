import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentOwnerRoutingModule } from './rent-owner-routing.module';
import { RentOwnerPageComponent } from './pages/rent-owner-page/rent-owner-page.component';


@NgModule({
  declarations: [
    RentOwnerPageComponent
  ],
  imports: [
    CommonModule,
    RentOwnerRoutingModule
  ]
})
export class RentOwnerModule { }
