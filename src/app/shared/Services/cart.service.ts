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
  OnBuy(userID:number,prodID:number){
    const token = localStorage.getItem('access_token')!;
    const headers = new HttpHeaders()
    .set('token', token);
    return this.http.delete(`${this.url}cartproduct/${userID}/${prodID}`);
  }
}
