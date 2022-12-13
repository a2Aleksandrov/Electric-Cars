import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  isLogged!: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    this.authService.isLoggedIn.subscribe(state => this.isLogged = state);
    if (this.isLogged) {

      return this.router.createUrlTree(['/home']);
    }
    return true;
  }
}
