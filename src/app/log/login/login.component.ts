import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email:string='';
  @Input() password:string='';
  loginForm: FormGroup | any;
  OnloginLoad:boolean = false;
  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
  }

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
    // if(!this.loginForm.valid){
    //   return;
    // }
    this.authService.login(this.email,this.password);
    this.OnloginLoad = true;
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
