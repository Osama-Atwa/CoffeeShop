import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private authService:AuthService) { }
  OnLogOut() {
    this.authService.logout();
    }

  ngOnInit(): void {
  }

}
