import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentTenantPageComponent } from './pages/rent-tenant-page/rent-tenant-page.component';

const routes: Routes = [
  {
    path:'', component:RentTenantPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentTenantRoutingModule { }
