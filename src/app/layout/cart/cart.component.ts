import { CartService } from './../../shared/Services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { product } from 'src/app/shared/Models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit ,OnDestroy{
  cart:product[] = [
    new product(1,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(2,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(3,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(4,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(5,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(6,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(7,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    new product(8,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
  ];
  t_price:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    // this.cartService.getData().subscribe((prod:product)=>{
    //   const index = this.cart.findIndex(e => e.id == prod.id);
    //   debugger;
    //   this.cart.push(prod);
    //   // if (index != -1)
    //   // {
    //   //   this.cart[index].boughtItemsCount += 1;
    //   //   console.log(this.cart[index].boughtItemsCount);
    //   // }
    //   // else
    //   // {
    //   //   this.cart.push(prod);
    //   // }
    // }
    // );
  }
  Total_price(){
    this.t_price=0;
    for (let index = 0; index < this.cart.length; index++) {
      const element = this.cart[index];
      this.t_price += element.price*element.boughtItemsCount;

    }
    return this.t_price;
  }
  ngOnDestroy(): void {

  }
  OnBuy(prod:product)
  {
    const userID:number = +localStorage.getItem("id")!;
    this.cartService.OnBuy(userID,prod.id);
    const index = this.cart.indexOf(prod, 0);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
