import { Component , Input , Output, EventEmitter } from '@angular/core';
import { product } from '../models/product';
import { RouterOutlet , RouterLink } from '@angular/router';
import { ProductsdataService } from '../services/productsdata.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink , RouterOutlet , FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() item : product ;
  @Output() addtocart: EventEmitter<product> = new EventEmitter;
  @Output() removefromcart: EventEmitter<product> = new EventEmitter;
  @Output() amountChanged: EventEmitter<product> = new EventEmitter;

  
  amount : number =0;

  setCurrentItemIndex(i:product){
    console.log("selected product of id : " + i.id );
    this.productservice.setCurrentItem(i.id);
  }

  amountUpdated(arg:any){
    console.log("Changed to : " + arg);
    this.amountChanged.emit();
    
  }

  additemtocart(p :product ){
    window.alert(" added " + p.amount+ " " + p.name + " to the cart !")
    console.log("Add item to cart : " + p.name);
    this.addtocart.emit(p);
  }
  removeitemfromcart(p :product ){
    window.alert("Removed " + p.amount+ " " + p.name + " from the cart !")
    this.removefromcart.emit(p);

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
