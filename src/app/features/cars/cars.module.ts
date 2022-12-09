import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { carsRoutingModule } from './cars-routing.module';
import { CarMarksComponent } from './car-marks/car-marks.component';



@NgModule({
  declarations: [
    CarsComponent,
    CarDetailsComponent,
    CarMarksComponent
  ],
  imports: [
    CommonModule,
    carsRoutingModule,
  ]
})
export class CarsModule { }
