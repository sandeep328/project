import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HouseDetailsComponent } from './user/userhome/house/house-details/house-details.component';
import { DetailsBoxComponent } from './user/userhome/details/details-box/details-box.component';
import { HouseBoxComponent } from './user/userhome/house/house-box/house-box.component';
import { Head1Component } from './head1/head1.component';
import { DietPlanFormComponent } from './admin/diet-plan-form/diet-plan-form.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
   {path:":id",component:HouseDetailsComponent},
  {path:":id",component:DietPlanFormComponent}
   
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
