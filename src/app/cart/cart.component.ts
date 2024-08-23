import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductsdataService } from '../services/productsdata.service';
import { NgFor } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor , ProductItemComponent , UserdetailsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  productItems : product[] = [];
  totalprice:number=0;

  constructor(private productservice : ProductsdataService){}
  
  removefromcart(p:product) : void{
    console.log("Updating..." +p.amount +": " + p.name +  " removed from the cart !" );
    this.productservice.removefromcart(p);
    this.calculatetotalprice();
  }

  amountChanged():void{
    this.calculatetotalprice();
  }
  
  calculatetotalprice(){
    this.productItems = this.productservice.cartItems;
    this.totalprice = 0;
    this.productItems.forEach(element => {
      if(element.amount){
        this.totalprice += element.price * element.amount ;
      }
    });
    this.productservice.settotalprice(this.totalprice);
  }

  ngOnInit(): void {
    this.calculatetotalprice();
    
  }
}
