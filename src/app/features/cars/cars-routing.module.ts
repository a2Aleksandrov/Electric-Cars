import { RouterModule, Routes } from "@angular/router";
import { CarsMarkComponent } from "./cars-mark/cars-mark.component";
import { CarsComponent } from "./cars/cars.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CarsComponent
    },
    {
        path: ':mark',
        component: CarsMarkComponent
    }
]

export const carsRoutingModule = RouterModule.forChild(routes);