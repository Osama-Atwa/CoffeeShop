import { user } from './../../shared/Models/user.model';
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
  load:boolean=false;
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



    const userID:number = +localStorage.getItem("id")!;
    this.cartService.GetCart(userID).subscribe({
      next:(res:any)=>{
        // console.log(res[0]["product"]["productName"]);
        //productId
        //ProductImage
        //quantity
        //productPrice
        for (let index = 0; index < res.length; index++) {
          debugger;
          this.cart.push(new product(
            res[index]["cartProductId"],res[index]["product"]["productName"],res[index]["product"]["productPrice"],res[index]["product"]["ProductImage"],1,1,true,res[index]["quantity"]
            ))
        }
        this.load=true;

      },
      error:(err)=>{
        console.log(err);
      }
    });
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
    // debugger;
    this.cartService.OnBuy(prod.id);
    const index = this.cart.indexOf(prod, 0);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
  OnCheckOut()
  {
    const userID:number = +localStorage.getItem("id")!;
    this.cartService.OnCheckOut(userID);
    this.cart = [];
  }
}
