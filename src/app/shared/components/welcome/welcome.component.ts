import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 loged:boolean=false;
 username!:string;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("access_token")){
      this.loged = true;
      this.username = localStorage.getItem("username")!;
    }
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
