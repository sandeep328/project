import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DietPlanFormComponent } from './diet-plan-form/diet-plan-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { AfilterPipe } from '../pipes/afilter.pipe';
import { AdmincreateComponent } from './admincreate/admincreate.component';
import { AdminresponseComponent } from './admincreate/adminresponse/adminresponse.component';
import { AdminresponseformComponent } from './admincreate/adminresponseform/adminresponseform.component';



const route:Routes=[

  {
  path:"home",component: HomeComponent,
  children:[
    {path:"",component:AdminHomeComponent},
    {path:"adddietplan",component:DietPlanFormComponent},
    {
      path:"prod",
      component:AdmincreateComponent
    }
  ]},
];



@NgModule({
  declarations: [
    HomeComponent,
    DietPlanFormComponent,
    AdminHomeComponent,
    AfilterPipe,
    AdmincreateComponent,
    AdminresponseComponent,
    AdminresponseformComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    Ng2SearchPipeModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule

  ]
})
export class AdminModule { }
