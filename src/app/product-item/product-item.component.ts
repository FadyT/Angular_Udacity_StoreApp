import { Component , Input , Output, EventEmitter } from '@angular/core';
import { product } from '../models/product';
import { RouterOutlet , RouterLink } from '@angular/router';
import { ProductsdataService } from '../services/productsdata.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink , RouterOutlet],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() item : product ;
  @Output() addtocart: EventEmitter<product> = new EventEmitter;

  setCurrentItemIndex(i:product){
    console.log("selected product of id : " + i.id );
    this.productservice.setCurrentItem(i.id);
  }

  increase(i:product){
    if(i.amount != undefined){
      i.amount = i.amount + 1;
      console.log("amount increased to " + i.amount + i.name);
    }
  }
  decrease(i:product){
    if(i.amount != undefined && i.amount>0){
      i.amount-=1;
      console.log("amount decreased to " + i.amount + i.name);
      if(i.amount ==0){
        this.removeitemfromcart(i);
      }
    }
  }

  additemtocart(p :product ){
    window.alert(" added " + p.amount+ " " + p.name + " to the cart !")
    console.log("Add item to cart : " + p.name);
    this.addtocart.emit(p);
  }
  removeitemfromcart(p :product ){
    window.alert(" removed " + p.amount+ " " + p.name + " from the cart !")
    console.log(p.amount +": " + p.name +  " removed from the cart !" );
    this.productservice.removefromcart(p);
  }

constructor(private productservice :ProductsdataService){
  this.item = {
    id:0,
    name : '',
    price: 0,
    url:'',
    description:'',
    amount:0
  }
}
}
