import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() email:string='';
  @Input() name:string='';
  @Input() password:string='';
  @Input() ConfirmPass:string='';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  OnSignUp(){
    if(this.email==='')
    {
      alert('enter your email');
      return;
    }
    else if(this.name ==='')
    {
      alert('enter your name');
      return;
    }
    else if(this.password!==this.ConfirmPass)
    {
      alert("password and the confirmpassword ar not the same");
      return;
    }
    this.authService.signup(this.email,this.password,this.name);
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
