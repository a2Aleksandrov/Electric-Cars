import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ITheme, IUser } from '../../interfaces';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.scss']
})
export class ThemeContentComponent implements OnInit {

  theme!: ITheme;
  hasUser!: boolean;

  constructor(private activatedRoute: ActivatedRoute, private forumService: ForumService, private authService: AuthService) { }

  ngOnInit(): void {
    
    this.authService.isLoggedIn.subscribe(hasUser => this.hasUser = hasUser);

    const themeId = this.activatedRoute.snapshot.params['themeId'];
    this.forumService.getThemeById(themeId).subscribe({
      next: (theme) => {
        this.theme = theme;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
