import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom modules
import { HomeModule } from './home/home.module';
import { CarsModule } from './cars/cars.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Dependency modules
    BrowserModule,
    AppRoutingModule,

    // Custom modules
    HomeModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
