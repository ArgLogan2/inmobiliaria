import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './modules/template/template/template.component';

const routes: Routes = [
 {path:'', component:TemplateComponent, // carga la vista del template (plantilla)
 // y carga el módulo del template para desde ahí seguir rutas a las páginas de la aplicación
 loadChildren:() => import('./modules/template/template.module').then(m => m.TemplateModule)
 },
 {path:'**', redirectTo:"" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // importante para comunicarse con rutas hijas
})
export class AppRoutingModule { }
