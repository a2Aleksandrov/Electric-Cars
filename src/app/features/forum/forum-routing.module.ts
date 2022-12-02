import { RouterModule, Routes } from "@angular/router"
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
        component: NewThemeComponent
    }
]

export const forumRoutingModule = RouterModule.forChild(routes);