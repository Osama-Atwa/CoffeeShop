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
    .set('token', token);
    return this.http.get(`${this.url}product`,{headers:headers});
  }
  GetProduct(id:number){
    const token = localStorage.getItem('access_token')!;
    const headers = new HttpHeaders()
    .set('token', token);
    return this.http.get(`${this.url}product/${id}`,{headers:headers});
  }
  AddToCart(userID:number,prodID:number,Count:number){
    const token = localStorage.getItem('access_token')!;
    const headers = new HttpHeaders()
    .set('token', token);
    return this.http.post(`${this.url}cartproduct/${userID}`,{"prodID":prodID,"Count":Count},{headers:headers});
  }
}
