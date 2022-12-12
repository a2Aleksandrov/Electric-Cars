import { RouterModule, Routes } from "@angular/router";
import { CarDetailsComponent } from "./car-details/car-details.component";
import { CarMarksComponent } from "./car-marks/car-marks.component";
import { CarsComponent } from "./cars/cars.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CarsComponent
    },
    {
        path: ':mark',
        component: CarMarksComponent,
    },
    {
        path: ':mark/:model',
        component: CarDetailsComponent
    }
]

export const carsRoutingModule = RouterModule.forChild(routes);