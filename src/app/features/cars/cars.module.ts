import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { carsRoutingModule } from './cars-routing.module';



@NgModule({
  declarations: [
    CarsComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    carsRoutingModule,
  ]
})
export class CarsModule { }
