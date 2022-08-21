import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importación del módulo HttpClientModule para que funcionen las peciones http. 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

<<<<<<< HEAD
=======


>>>>>>> 56281a01a10dcee09dd1abde4e2c8774f97925f7
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
