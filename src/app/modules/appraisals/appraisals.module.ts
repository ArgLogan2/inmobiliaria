import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppraisalsRoutingModule } from './appraisals-routing.module';
import { AppraisalsPageComponent } from './pages/appraisals-page/appraisals-page.component';


@NgModule({
  declarations: [
    AppraisalsPageComponent
  ],
  imports: [
    CommonModule,
    AppraisalsRoutingModule
  ]
})
export class AppraisalsModule { }
