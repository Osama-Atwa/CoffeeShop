import { ProductService } from './../../shared/Services/product.service';
import { product } from 'src/app/shared/Models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id!: number;
  prod:product=new product(1,"",0,"",1,2,false,1);
  load:boolean = false;
  // prod!:product;
  constructor(private router:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>{
      this.id = +params.get('id')!;
      this.productService.GetProduct(this.id).subscribe({
        next:(res:any)=>{
          this.prod.img = res["productImage"];
          this.prod.name = res["productName"];
          this.prod.price = res["productPrice"];
          this.prod.suger = res["productSugarSpoon"]
          this.load = true;
        },
        error:()=>{
          alert("Enternal server Error")
        }
      });
    });
  }

}
