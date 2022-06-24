import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './modules/template/template/template.component';

const routes: Routes = [
 {path:'', component:TemplateComponent,
 loadChildren:() => import('./modules/template/template.module').then(m => m.TemplateModule)
 },
 {path:'**', redirectTo:"" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
