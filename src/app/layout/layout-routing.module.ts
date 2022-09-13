import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'',redirectTo:'template',pathMatch:"full"},
  {
    path:'template',
    component:LayoutComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'cart',component:CartComponent},
      {path:'profile',component:ProfileComponent},
      {path:'product/:id',component:ProductComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
