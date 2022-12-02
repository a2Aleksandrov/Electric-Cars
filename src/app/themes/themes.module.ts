import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';



@NgModule({
  declarations: [
    ThemesComponent,
    PostsComponent,
    NewThemeComponent,
    ThemeContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemesModule { }
