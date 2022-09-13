import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email:string='';
  @Input() password:string='';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  OnLogin(){
    if(this.email=='')
    {
      alert('please enter your email');
      return;
    }
    else if(!this.password)
    {
      alert('please enter your password');
      return;
    }
    this.authService.login(this.email,this.password);
  }
  myFunction() {
    let video:any = document.getElementById("myVideo");
    let btn:any = document.getElementById("myBtn");

    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }
}
