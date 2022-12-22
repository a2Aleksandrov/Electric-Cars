import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { IPost, ITheme } from '../../interfaces';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.scss']
})
export class ThemeContentComponent implements OnInit {

  theme!: ITheme;
  hasUser!: boolean;
  themeId!: string;
  currentUserId!: string | undefined;

  constructor(private activatedRoute: ActivatedRoute, private forumService: ForumService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.currentUserId = user?._id)
    this.authService.isLoggedIn.subscribe(hasUser => this.hasUser = hasUser);
    this.themeId = this.activatedRoute.snapshot.params['themeId'];
    this.forumService.getThemeById(this.themeId).subscribe({
      next: (theme) => {
        this.theme = theme;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  //async method to reload component
  async reloadCurrentRoute(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }

  postComment(formData: IPost) {
    this.forumService.postComment(this.themeId, formData.comment, this.currentUserId).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.forumService.getThemeById(this.themeId).subscribe({
      next: () => {
        this.reloadCurrentRoute(this.router.url);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
