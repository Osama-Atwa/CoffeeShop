import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';

//JWT module
import { JwtModule } from '@auth0/angular-jwt';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AboutComponent } from './shared/components/about/about.component';
import { CartService } from './shared/Services/cart.service';

//function that will retrieve the token
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
