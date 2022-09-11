import { AuthGuard } from './guard/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'log',loadChildren:() => import('./log/log.module').then(m => m.LogModule)},
  {path:'layout',loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule),canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
