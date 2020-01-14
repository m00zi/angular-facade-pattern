import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CarsComponent } from './components/cars/cars.component';

const carsRoutes: Routes = [
  {
    path: 'cars',
    component: CarsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(carsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule { }
