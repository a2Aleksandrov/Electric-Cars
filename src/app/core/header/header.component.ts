import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from 'src/app/features/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  currentUser: Observable<IUser | undefined> = this.authService.currentUser;
  isLoggedIn: Observable<boolean> = this.authService.isLoggedIn;
  isLoggingOut: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   this.isLoggedIn.subscribe((y) => console.log(y)) // 
  }

  handleLogout() {
    if (this.isLoggingOut) { // this prevents the client to click on logout btn multiple times while logging out reguest is in progress.
      return;
    }
    this.isLoggingOut = true;

    this.authService.logout().subscribe({
      complete: () => {
        this.isLoggingOut = false;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.isLoggingOut = false;
        console.log(err);
      }
    });
  }
}
