import { Component } from '@angular/core';
import { product } from '../models/product';
import { NgFor } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsdataService } from '../services/productsdata.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [NgFor , ProductItemComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  title: string = 'Home Page'
  productItems : product[] = [];
  
  constructor(private productservice :ProductsdataService) {}

  addtocart(p:product) : void{
    this.productservice.addtocart(p);
  }

  ngOnInit(): void {
    this.productItems = this.productservice.getproducts();
  }
}
