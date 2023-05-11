import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Head1Component } from './head1/head1.component';
import { AfilterPipe } from './pipes/afilter.pipe';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    // Head1Component,
    // AfilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    SharedModule
    // UserModule,
    // AdminModule,
    // MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
