import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconoWspComponent } from './icono-wsp/icono-wsp.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IconoWspComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    IconoWspComponent
  ]
})
export class SharedsComponentsModule { }
