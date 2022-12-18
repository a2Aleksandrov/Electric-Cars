import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogged!: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    this.authService.isLoggedIn.subscribe(state => this.isLogged = state);
    if (this.isLogged) {
      return true;
    }
    return this.router.createUrlTree(['/login'], { queryParams: { previousUrl: state.url } });
  }
}
