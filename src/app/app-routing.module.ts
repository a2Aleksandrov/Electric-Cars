import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './auth/is-logged.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    canActivate:[IsLoggedGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate:[IsLoggedGuard],
    component: RegisterComponent
  },
  {
    path: 'cars',
    loadChildren: () => import('./features/cars/cars.module').then(m => m.CarsModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./features/forum/forum.module').then(m => m.ForumModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
