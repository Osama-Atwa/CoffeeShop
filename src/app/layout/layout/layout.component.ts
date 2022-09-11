import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private authService: AuthService){}


  userStatus = this.authService.userStatus;

  logout(){
    this.authService.logout();
  }

  ngOnInit(){
    this.authService.userStatusChanges.subscribe(x => this.userStatus = x);
    console.log(this.userStatus)

  }

  ngAfterContentChecked(){
    this.authService.getStatusOnRefresh();
  }
}
