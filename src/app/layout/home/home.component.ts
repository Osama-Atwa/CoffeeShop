import { CartService } from './../../shared/Services/cart.service';
import { product } from './../../shared/Models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu:product[] = [
    new product(1,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(2,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(3,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(4,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(5,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(6,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(7,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(8,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
  ];
  cart:product[]=[];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  AddToCart(prod:product)
  {
    prod.isAddedToCart=true;
    // this.cart.push(prod);
    this.cartService.sendData(prod);
  }
}
