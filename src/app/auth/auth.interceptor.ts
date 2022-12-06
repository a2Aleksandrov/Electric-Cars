import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import { IUser } from '../features/interfaces';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        if (event.url?.endsWith('login') && event.url.endsWith('register')) {
          const userData = event.body as IUser;
          this.authService.handleLogin(userData); // the interceptor gives the user data to the behaviour subject 
        } else if (event.url?.endsWith('logout')) {
          this.authService.handleLogout(); // the interceptor activate the handleLogout fn which sets set userData as undefined
        }
      }
    }))
  }
}
