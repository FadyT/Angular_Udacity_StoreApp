import { Component , Input } from '@angular/core';
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


constructor(){
  this.item = {
    id:0,
    name : '',
    price: 0,
    url:'',
    description:'',
  }
}
}
