import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ITheme } from '../../interfaces';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent implements OnInit {

  currentUserId!: string | undefined;

  constructor(private router: Router, private forumService: ForumService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.currentUserId = user?._id);
  }

  addTheme(formData: ITheme) {
    console.log(formData);
    this.forumService.addTheme(formData.title, formData.content, this.currentUserId).subscribe({
      next: () => {
        this.router.navigate(['/forum']);
      }
    });
  }

  cancel() {
    this.router.navigate(['/forum']);
  }
}
