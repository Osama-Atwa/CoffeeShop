import { AuthService } from 'src/app/shared/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coffee';
  constructor(private authService:AuthService){}
  OnInit(){
    this.authService.getStatusOnRefresh();
  }
}
