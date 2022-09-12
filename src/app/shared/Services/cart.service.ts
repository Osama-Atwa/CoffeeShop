import { product } from './../Models/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public prod!:product;
  public cart:BehaviorSubject<product>  = new BehaviorSubject<product>(this.prod);
  public obs = this.cart.asObservable();

  sendData(prod: product) {
      this.cart.next(prod);
  }

  clearData() {
      this.cart.closed=true;
  }

  getData(): Observable<any> {
      return this.obs;
  }
}
