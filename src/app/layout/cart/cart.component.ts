import { CartService } from './../../shared/Services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { product } from 'src/app/shared/Models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit ,OnDestroy{
  cart:product[] = [];
  t_price:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getData().subscribe((prod:product)=>{
      const index = this.cart.findIndex(e => e.id == prod.id);
      debugger;
      if (index != -1)
      {
        this.cart[index].boughtItemsCount += 1;
        console.log(this.cart[index].boughtItemsCount);
      }
      else
      {
        this.cart.push(prod);
      }
    }
    );
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
}
