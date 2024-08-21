import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductsdataService } from '../services/productsdata.service';
import { NgFor } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor , ProductItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  productItems : product[] = [];
  
  constructor(private productservice : ProductsdataService){}
  
  ngOnInit(): void {
    this.productItems = this.productservice.cartItems;
  }
}
