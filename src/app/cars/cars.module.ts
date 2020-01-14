import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom Modules
import { CarsRoutingModule } from './cars-routing.module';

// Custom Components
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    NgbModule
  ]
})
export class CarsModule { }
