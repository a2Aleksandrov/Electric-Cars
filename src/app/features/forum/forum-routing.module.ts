import { RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "src/app/auth/auth.guard";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemesComponent } from "./themes/themes.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ThemesComponent
    },
    {
        path: 'new-theme',
        canActivate: [AuthGuard],
        component: NewThemeComponent
    }
]

export const forumRoutingModule = RouterModule.forChild(routes);