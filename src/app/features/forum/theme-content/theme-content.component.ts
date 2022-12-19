import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  postComment(formData: any) {
    this.forumService.postComment(this.themeId, formData.comment, this.currentUserId).subscribe({
      next: (data) => {
        console.log(data);
        this.router.createUrlTree([`/forum/${this.themeId}`]);
      }
    });
  }
}
