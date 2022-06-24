import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsPageComponent } from './pages/auctions-page/auctions-page.component';


@NgModule({
  declarations: [
    AuctionsPageComponent
  ],
  imports: [
    CommonModule,
    AuctionsRoutingModule
  ]
})
export class AuctionsModule { }
