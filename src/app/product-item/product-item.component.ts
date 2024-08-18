import { Component , Input , Output, EventEmitter } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() item : product ;
  @Output() addtocart: EventEmitter<product> = new EventEmitter;

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
    }
  }

  additemtocart(p :product ){
    console.log("Add item to cart : " + p.name);
    this.addtocart.emit(p);
  }

constructor(){
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
