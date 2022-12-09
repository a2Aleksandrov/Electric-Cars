import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './features/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser = new BehaviorSubject<IUser | undefined>(undefined); // behaviour subject should have initial value so we set undefined

  currentUser = this._currentUser.asObservable(); // encapsulating the subject in order to now work with the orignal valriable
  isLoggedIn = this.currentUser.pipe(map(user => !!user)); // transforms the userdata to truthy of falsy value

  constructor(private http: HttpClient) { }

  register(userData: { username: string, email: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(`${environment.baseUrl}/register`, userData, { withCredentials: true });
  }

  login(userData: { username: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(`${environment.baseUrl}/login`, userData, { withCredentials: true });
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.baseUrl}/logout`, {}, { withCredentials: true });
  }

  handleLogin(userData: IUser) {
    if (userData.username) {
      this._currentUser.next(userData); // this function gives the new value(the user data) to the behaviour subject
    }
  }

  handleLogout() {
    this._currentUser.next(undefined); // this function sets the current value of the behaviour subject to undefined when logout
  }

  authenticate(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.baseUrl}/profile`, { withCredentials: true })
      .pipe(tap(data => this.handleLogin(data)), catchError((err) => {
        return EMPTY; // this is syntax for empty Obesarvable.
      }))
  }

}
