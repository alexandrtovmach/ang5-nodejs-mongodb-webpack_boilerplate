import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderViewComponent } from './components/header-view/header-view.component';
import { IndexPageComponent } from './components/index-page/index-page.component';

// guards
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { IsLoggedOutGuard } from './guards/is-logged-out.guard';
import { isAdminGuard } from './guards/for-admin.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: IndexPageComponent,
    },
    {
        path: '**',
        redirectTo: 'notfound'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
