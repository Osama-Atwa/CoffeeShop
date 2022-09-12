import { AboutComponent } from './shared/components/about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'about',component:AboutComponent},
  {path:'log',loadChildren:() => import('./log/log.module').then(m => m.LogModule)},
  {path:'layout',loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule),canActivate:[AuthGuard]},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
