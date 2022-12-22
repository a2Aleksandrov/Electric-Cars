import { RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "src/app/auth/auth.guard";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemeContentComponent } from "./theme-content/theme-content.component";
import { ThemesComponent } from "./themes/themes.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ThemesComponent
    },
    {
        path: 'newTheme',
        canActivate: [AuthGuard],
        component: NewThemeComponent
    },
    {
        path: 'theme/:themeId',
        component: ThemeContentComponent
    }
]

export const forumRoutingModule = RouterModule.forChild(routes);