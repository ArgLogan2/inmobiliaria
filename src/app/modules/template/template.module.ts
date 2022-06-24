import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { SharedsComponentsModule } from 'src/app/shareds-components/shareds-components.module';

@NgModule({
  declarations: [
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedsComponentsModule
  ]
})
export class TemplateModule { }