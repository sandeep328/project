import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DietPlanFormComponent } from './diet-plan-form/diet-plan-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
},
{
  path:"add-diet-plan",
  component: DietPlanFormComponent,
},
{
  path:"delete-diet-plan",
  component:DietPlanFormComponent,
}]

@NgModule({
  declarations: [
    HomeComponent,
    DietPlanFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
    FormsModule,MaterialModule,
    Ng2SearchPipeModule

  ]
})
export class AdminModule { }
