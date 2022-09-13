import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Email:string=localStorage.getItem("email")!;
  UserName:string=localStorage.getItem("username")!;
  constructor() { }

  ngOnInit(): void {
  }

}
