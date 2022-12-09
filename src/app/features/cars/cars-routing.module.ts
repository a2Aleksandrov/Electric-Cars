import { RouterModule, Routes } from "@angular/router";
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
        component: CarMarksComponent
    }
]

export const carsRoutingModule = RouterModule.forChild(routes);