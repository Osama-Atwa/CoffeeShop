import { ProductService } from './../../shared/Services/product.service';
import { CartService } from './../../shared/Services/cart.service';
import { product } from './../../shared/Models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu:product[] = [];
  cart:product[]=[];
  list:any[]=[];
    // new product(1,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    // new product(2,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    // new product(3,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    // new product(4,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    // new product(5,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    // new product(6,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    // new product(7,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
    // new product(8,"French Coffe",20,"/assets/img/img1.jpeg",1,2,false,1),
  constructor(private cartService:CartService,private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.GetProducts().subscribe({
      next:(res:any)=>{
        this.list = res;
        for (let index = 0; index < this.list.length; index++) {
          const element = this.list[index];
          this.menu.push(new product(element["productId"],element["productName"],element["productPrice"],element["ProductImage"],element["productId"],element["productSugarSpoon"],element["isAddedToCart"],element["boughtItemsCount"]))
        }
        return this.menu;
      },
      error:()=>{
        alert("please try later server is down");
      }
    });
  }
  AddToCart(prod:product)
  {
    let CountEle = document.getElementById(String(prod.id)) as HTMLInputElement;
    let count = +CountEle?.value;
    const userID:number = +localStorage.getItem("id")!;
    this.productService.AddToCart(userID,prod.id,count).subscribe({
      next:(res)=>{
        console.log("hello");
      },
    });
    prod.isAddedToCart=true;
    alert(`${prod.name} Is Added Successfully`);
  }
}
