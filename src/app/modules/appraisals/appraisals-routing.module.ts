import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppraisalsPageComponent } from './pages/appraisals-page/appraisals-page.component';

const routes: Routes = [
  {
    path:'', component:AppraisalsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalsRoutingModule { }
