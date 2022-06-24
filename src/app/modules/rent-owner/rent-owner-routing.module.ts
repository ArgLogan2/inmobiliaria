import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentOwnerPageComponent } from './pages/rent-owner-page/rent-owner-page.component';

const routes: Routes = [
  {
    path:'', component:RentOwnerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentOwnerRoutingModule { }
