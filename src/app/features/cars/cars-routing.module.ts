import { RouterModule, Routes } from "@angular/router";
import { CarsComponent } from "./cars/cars.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CarsComponent
    },
]

export const carsRoutingModule = RouterModule.forChild(routes);