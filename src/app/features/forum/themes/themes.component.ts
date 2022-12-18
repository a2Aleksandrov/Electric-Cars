import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ITheme } from '../../interfaces';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})

export class ThemesComponent implements OnInit {

  themes!: ITheme[];
  hasUser!: boolean;

  constructor(private forumService: ForumService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(hasUser => this.hasUser = hasUser);
    this.forumService.getAllThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
