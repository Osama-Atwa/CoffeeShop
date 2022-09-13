import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string=environment.url;
  list:any[]=[];
  menu:product[]=[];
  constructor(private http:HttpClient) { }
  GetProducts(){
    const token = localStorage.getItem('access_token')!;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    const URL = `${this.url}api/product`;
    // debugger;
    console.log(URL);
    return this.http.get(URL,{headers:headers});
  }
  GetProduct(id:number){
    const token = localStorage.getItem('access_token')!;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    const URL = `${this.url}api/product/${id}`;
    console.log(URL);
    return this.http.get(URL,{headers:headers});
  }
  AddToCart(userID:number,prodID:number,Count:number){
    const token = localStorage.getItem('access_token')!;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    const body = {
      "user_id": userID,
      "item_id": prodID,
      "quantity": Count
    };
    console.log(body);
    debugger;
    return this.http.post(`${this.url}api/cartproduct/addProductToCart`,body,{headers:headers});
  }
}
