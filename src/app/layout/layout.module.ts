import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CartComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
