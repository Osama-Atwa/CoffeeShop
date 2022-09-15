import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from './../Models/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url:string = environment.url;
  public prod!:product;
  public cart:BehaviorSubject<product>  = new BehaviorSubject<product>(this.prod);
  public obs = this.cart.asObservable();
  constructor(private http:HttpClient){}
  sendData(prod: product) {
      this.cart.next(prod);
  }

  clearData() {
      this.cart.closed=true;
  }

  getData(): Observable<any> {
      return this.obs;
  }
  GetCart(userID:number){
    const token = localStorage.getItem('access_token')!;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.url}api/cartproduct/${userID}`,{headers:headers});
  }
  OnBuy(prodID:number){
    const token = localStorage.getItem('access_token')!;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    // console.log(prodID);
    return this.http.delete(`${this.url}api/cartproduct/buyproduct/${prodID}`,{headers:headers}).subscribe({
      next:()=>{
        debugger;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  OnCheckOut(userID:number)
  {
    const token = localStorage.getItem('access_token')!;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    // console.log(prodID);
    return this.http.delete(`${this.url}api/cartproduct/deleteCart/${userID}`,{headers:headers}).subscribe({
      next:()=>{
        debugger;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
