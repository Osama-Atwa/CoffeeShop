import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router:Router) { }
  //check for if logged in
  private url:string=environment.url;
  public userStatus!: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }


  //login
  public login(email:string, password:string){

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    let user = {
      email: email,
      password: password
    }
    //send a post request to the
    this.httpClient.post(`${this.url}auth/login`,JSON.stringify(user),{headers: headers}).subscribe({
      next:(res:any) => {
        //set the token to localStorage
        console.log(res);
        if(res["token"])
        {
          localStorage.setItem("access_token", res["token"]);
          localStorage.setItem("username", res["username"]);
          localStorage.setItem("email", res["email"]);
          localStorage.setItem("id", res["id"]);
          this.setUserStatus(res["token"]);
          this.router.navigate(["/layout"]);
        }
        else
        {
          alert("Wrong Email or Password");
        }
      },
      error:()=>{
        alert("Enternal server error")
      }
  });

  }

  public logout(){
    //just remove the access token and redirect
    localStorage.removeItem('access_token');
    this.setUserStatus(null);
    this.router.navigate(["/welcome"]);

  }

  //signup
  public signup(email:string, password:string,name:string){

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    let user = {
      email: email,
      password: password,
      username: name
    }

    //send a post request to the
    this.httpClient.post(`${this.url}auth/register`, JSON.stringify(user), {headers: headers}).subscribe({
      next:(res:any) => {
        //set the token to localStorage
        localStorage.setItem("access_token", res["token"]);
        this.setUserStatus(res["token"]);
        console.log(res["token"])
        this.router.navigate(["/log/login"]);
      },
      error:(err)=>{
        alert("Enternal Server Error");
      },
    }
    );
  }


  public getStatusOnRefresh(){

    if(localStorage.getItem("access_token")){
      this.userStatus = localStorage.getItem("access_token")!;
      this.setUserStatus(localStorage.getItem("access_token"))
      //console.log(this.userStatus)
    }

  }
}
