import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { forumRoutingModule } from './forum-routing.module';



@NgModule({
  declarations: [
    ThemesComponent,
    PostsComponent,
    NewThemeComponent,
    ThemeContentComponent,
  
  ],
  imports: [
    CommonModule,
    forumRoutingModule
  ]
})
export class ForumModule { }
