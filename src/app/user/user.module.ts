import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { DetailsComponent } from './userhome/details/details.component';
import { ProductComponent } from './userhome/product/product.component';
import { ProductrowComponent } from './userhome/productrow/productrow.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { HouseComponent } from './userhome/house/house.component';
import { HouseBoxComponent } from './userhome/house/house-box/house-box.component';
import { HouseDetailsComponent } from './userhome/house/house-details/house-details.component';
import { DetailsBoxComponent } from './userhome/details/details-box/details-box.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FilterpricePipe } from '../pipes/price.pipe';
import { DietplanComponent } from './userhome/dietplan/dietplan.component';
import { FormsComponent } from './userhome/forms/forms.component';
import { FeedbackboxComponent } from './userhome/forms/feedbackbox/feedbackbox.component';
import { FeedbackformComponent } from './userhome/forms/feedbackform/feedbackform.component';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: HouseComponent
    },
    {
      path:"details",
      component: DetailsComponent
    },
    {
      path:'user',
      component:UserhomeComponent
    },
  {
      path:"diet",
     component: DietplanComponent
    },
    {
      path:"prod",
      component:FormsComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    DetailsComponent,
    ProductComponent,
    ProductrowComponent,
    HouseComponent,
    HouseBoxComponent,
    HouseDetailsComponent,
    DetailsBoxComponent,
    FilterPipe,
    FilterpricePipe,
    DietplanComponent,
    FormsComponent,
    FeedbackboxComponent,
    FeedbackformComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
